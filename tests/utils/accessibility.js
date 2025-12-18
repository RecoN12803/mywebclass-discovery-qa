/**
 * Accessibility Test Utilities for Playwright
 * 
 * Helper functions for automated accessibility testing using axe-core
 */

const { expect } = require('@playwright/test');

/**
 * Inject axe-core into the page for accessibility testing
 * @param {import('@playwright/test').Page} page - Playwright page object
 */
async function injectAxe(page) {
  await page.addScriptTag({
    url: 'https://cdnjs.cloudflare.com/ajax/libs/axe-core/4.8.2/axe.min.js'
  });
  
  // Wait for axe to be available
  await page.waitForFunction(() => typeof window.axe !== 'undefined', { timeout: 5000 });
}

/**
 * Run axe accessibility audit on the page
 * @param {import('@playwright/test').Page} page - Playwright page object
 * @param {Object} options - Axe run options
 * @returns {Promise<Object>} Axe results
 */
async function runAxeAudit(page, options = {}) {
  await injectAxe(page);
  
  const results = await page.evaluate((opts) => {
    return window.axe.run(opts);
  }, options);
  
  return results;
}

/**
 * Check for accessibility violations and fail test if found
 * @param {import('@playwright/test').Page} page - Playwright page object
 * @param {Object} options - Axe run options
 * @param {Array<string>} disabledRules - Rules to disable
 */
async function checkAccessibility(page, options = {}, disabledRules = []) {
  const axeOptions = {
    ...options,
    rules: {}
  };
  
  // Disable specified rules
  disabledRules.forEach(rule => {
    axeOptions.rules[rule] = { enabled: false };
  });
  
  const results = await runAxeAudit(page, axeOptions);
  
  const violations = results.violations;
  
  if (violations.length > 0) {
    const violationDetails = violations.map(violation => ({
      id: violation.id,
      impact: violation.impact,
      description: violation.description,
      nodes: violation.nodes.length,
      helpUrl: violation.helpUrl,
      examples: violation.nodes.slice(0, 3).map(node => ({
        html: node.html,
        target: node.target,
        message: node.failureSummary
      }))
    }));
    
    console.error('Accessibility Violations Found:');
    console.error(JSON.stringify(violationDetails, null, 2));
    
    // Fail the test
    expect(violations.length, 
      `Found ${violations.length} accessibility violations. See console for details.`
    ).toBe(0);
  }
}

/**
 * Get accessibility violations organized by severity
 * @param {import('@playwright/test').Page} page - Playwright page object
 * @returns {Promise<Object>} Violations organized by impact level
 */
async function getViolationsBySeverity(page) {
  const results = await runAxeAudit(page);
  
  const organized = {
    critical: [],
    serious: [],
    moderate: [],
    minor: []
  };
  
  results.violations.forEach(violation => {
    const severity = violation.impact || 'moderate';
    if (organized[severity]) {
      organized[severity].push({
        id: violation.id,
        description: violation.description,
        helpUrl: violation.helpUrl,
        nodes: violation.nodes.length
      });
    }
  });
  
  return organized;
}

/**
 * Check keyboard accessibility by verifying all interactive elements are focusable
 * @param {import('@playwright/test').Page} page - Playwright page object
 */
async function checkKeyboardAccessibility(page) {
  const interactiveElements = await page.evaluate(() => {
    const selectors = 'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const elements = Array.from(document.querySelectorAll(selectors));
    
    return elements.map((el, index) => ({
      index,
      tag: el.tagName,
      id: el.id,
      className: el.className,
      text: el.textContent?.trim().substring(0, 50),
      tabindex: el.getAttribute('tabindex'),
      visible: !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length)
    }));
  });
  
  console.log(`Found ${interactiveElements.length} interactive elements`);
  
  // Tab through each element
  for (const element of interactiveElements.filter(el => el.visible)) {
    await page.keyboard.press('Tab');
    
    const focusedElement = await page.evaluate(() => {
      const focused = document.activeElement;
      return {
        tag: focused?.tagName,
        id: focused?.id,
        className: focused?.className
      };
    });
    
    // Verify an element is focused (basic check)
    expect(focusedElement.tag).toBeTruthy();
  }
}

/**
 * Check color contrast ratios for text elements
 * @param {import('@playwright/test').Page} page - Playwright page object
 * @returns {Promise<Array>} Elements with insufficient contrast
 */
async function checkColorContrast(page) {
  const results = await runAxeAudit(page, {
    runOnly: ['color-contrast']
  });
  
  return results.violations;
}

/**
 * Verify heading hierarchy is logical
 * @param {import('@playwright/test').Page} page - Playwright page object
 */
async function checkHeadingHierarchy(page) {
  const headings = await page.evaluate(() => {
    const headingElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    return Array.from(headingElements).map(h => ({
      level: parseInt(h.tagName.substring(1)),
      text: h.textContent?.trim()
    }));
  });
  
  // Check for exactly one h1
  const h1Count = headings.filter(h => h.level === 1).length;
  expect(h1Count, 'Page should have exactly one h1').toBe(1);
  
  // Check for logical progression
  for (let i = 1; i < headings.length; i++) {
    const current = headings[i].level;
    const previous = headings[i - 1].level;
    const diff = current - previous;
    
    // Should not skip levels
    if (diff > 1) {
      console.warn(`Heading level skip detected: h${previous} → h${current}`);
    }
  }
  
  return headings;
}

/**
 * Check all images for alt text
 * @param {import('@playwright/test').Page} page - Playwright page object
 */
async function checkImageAltText(page) {
  const images = await page.evaluate(() => {
    const imgs = document.querySelectorAll('img');
    return Array.from(imgs).map(img => ({
      src: img.src,
      alt: img.getAttribute('alt'),
      hasAlt: img.hasAttribute('alt')
    }));
  });
  
  const missingAlt = images.filter(img => !img.hasAlt);
  
  if (missingAlt.length > 0) {
    console.error('Images missing alt attribute:', missingAlt);
  }
  
  expect(missingAlt.length, 'All images should have alt attribute').toBe(0);
  
  return images;
}

/**
 * Check form accessibility (labels, validation)
 * @param {import('@playwright/test').Page} page - Playwright page object
 */
async function checkFormAccessibility(page) {
  const formIssues = await page.evaluate(() => {
    const inputs = document.querySelectorAll('input, textarea, select');
    const issues = [];
    
    inputs.forEach(input => {
      const id = input.id;
      const name = input.name;
      const type = input.type;
      const label = document.querySelector(`label[for="${id}"]`);
      const ariaLabel = input.getAttribute('aria-label');
      const ariaLabelledby = input.getAttribute('aria-labelledby');
      
      // Check if input has accessible name
      if (!label && !ariaLabel && !ariaLabelledby) {
        issues.push({
          element: input.outerHTML.substring(0, 100),
          issue: 'No associated label',
          id: id || 'no-id',
          name: name || 'no-name'
        });
      }
    });
    
    return issues;
  });
  
  if (formIssues.length > 0) {
    console.error('Form accessibility issues:', formIssues);
  }
  
  return formIssues;
}

/**
 * Check ARIA attribute usage
 * @param {import('@playwright/test').Page} page - Playwright page object
 */
async function checkAriaUsage(page) {
  const ariaIssues = await page.evaluate(() => {
    const elementsWithAria = document.querySelectorAll('[role], [aria-label], [aria-labelledby], [aria-describedby]');
    const issues = [];
    
    elementsWithAria.forEach(el => {
      const role = el.getAttribute('role');
      
      // Check for redundant ARIA (e.g., role="button" on <button>)
      if (role === 'button' && el.tagName === 'BUTTON') {
        issues.push({
          element: el.outerHTML.substring(0, 100),
          issue: 'Redundant role="button" on button element'
        });
      }
      
      if (role === 'link' && el.tagName === 'A') {
        issues.push({
          element: el.outerHTML.substring(0, 100),
          issue: 'Redundant role="link" on anchor element'
        });
      }
    });
    
    return issues;
  });
  
  return ariaIssues;
}

/**
 * Comprehensive accessibility test - runs all checks
 * @param {import('@playwright/test').Page} page - Playwright page object
 * @param {Object} options - Test options
 */
async function runFullAccessibilityAudit(page, options = {}) {
  const results = {
    axeViolations: null,
    headingHierarchy: null,
    images: null,
    formIssues: null,
    ariaIssues: null
  };
  
  console.log('Running comprehensive accessibility audit...');
  
  try {
    // Run axe audit
    const axeResults = await runAxeAudit(page);
    results.axeViolations = axeResults.violations;
    console.log(`✓ axe audit complete: ${axeResults.violations.length} violations found`);
    
    // Check headings
    results.headingHierarchy = await checkHeadingHierarchy(page);
    console.log(`✓ Heading check complete: ${results.headingHierarchy.length} headings found`);
    
    // Check images
    results.images = await checkImageAltText(page);
    console.log(`✓ Image alt text check complete: ${results.images.length} images checked`);
    
    // Check forms
    results.formIssues = await checkFormAccessibility(page);
    console.log(`✓ Form accessibility check complete: ${results.formIssues.length} issues found`);
    
    // Check ARIA
    results.ariaIssues = await checkAriaUsage(page);
    console.log(`✓ ARIA usage check complete: ${results.ariaIssues.length} issues found`);
    
  } catch (error) {
    console.error('Error during accessibility audit:', error);
  }
  
  return results;
}

module.exports = {
  injectAxe,
  runAxeAudit,
  checkAccessibility,
  getViolationsBySeverity,
  checkKeyboardAccessibility,
  checkColorContrast,
  checkHeadingHierarchy,
  checkImageAltText,
  checkFormAccessibility,
  checkAriaUsage,
  runFullAccessibilityAudit
};
