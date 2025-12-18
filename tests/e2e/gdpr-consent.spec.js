/**
 * E2E Test: GDPR Consent and Privacy Compliance
 * 
 * Tests GDPR compliance features including:
 * - Cookie consent banner display and functionality
 * - Accept/Reject/Customize preferences
 * - Analytics delayed until consent
 * - Privacy policy accessibility
 * - Cookie storage and persistence
 */

const { test, expect } = require('@playwright/test');

test.describe('GDPR Consent Banner', () => {

  test.beforeEach(async ({ context }) => {
    // Clear cookies before each test to ensure banner appears
    await context.clearCookies();
  });

  test('should display consent banner on first visit', async ({ page }) => {
    await page.goto('/');
    
    // Banner should appear
    const consentBanner = page.locator(
      '[data-testid="cookie-banner"], .cookie-banner, .consent-banner, [role="dialog"][aria-label*="cookie"], [role="dialog"][aria-label*="consent"]'
    );
    
    await expect(consentBanner).toBeVisible({ timeout: 5000 });
    
    // Verify banner has proper ARIA attributes
    const role = await consentBanner.getAttribute('role');
    expect(role).toBe('dialog');
    
    const ariaLabel = await consentBanner.getAttribute('aria-label');
    expect(ariaLabel).toMatch(/cookie|consent|privacy/i);
  });

  test('should display consent text explaining cookie usage', async ({ page }) => {
    await page.goto('/');
    
    const consentBanner = page.locator('[data-testid="cookie-banner"], .cookie-banner, .consent-banner');
    await expect(consentBanner).toBeVisible({ timeout: 5000 });
    
    // Check for explanatory text
    const bannerText = await consentBanner.textContent();
    
    expect(bannerText).toMatch(/cookie|data|privacy/i);
    expect(bannerText).toMatch(/analytics|tracking|experience/i);
    
    // Should mention privacy policy
    expect(bannerText).toMatch(/privacy policy|learn more/i);
  });

  test('should have Accept button', async ({ page }) => {
    await page.goto('/');
    
    const acceptButton = page.locator(
      'button:has-text("Accept"), [data-testid="accept-cookies"], [data-action="accept"]'
    );
    
    await expect(acceptButton).toBeVisible({ timeout: 5000 });
    await expect(acceptButton).toBeEnabled();
    
    // Verify button is keyboard accessible
    await acceptButton.focus();
    const isFocused = await acceptButton.evaluate(el => el === document.activeElement);
    expect(isFocused).toBeTruthy();
  });

  test('should have Reject/Decline button', async ({ page }) => {
    await page.goto('/');
    
    const rejectButton = page.locator(
      'button:has-text("Reject"), button:has-text("Decline"), [data-testid="reject-cookies"], [data-action="reject"]'
    );
    
    await expect(rejectButton).toBeVisible({ timeout: 5000 });
    await expect(rejectButton).toBeEnabled();
  });

  test('should have Preferences/Customize button', async ({ page }) => {
    await page.goto('/');
    
    const preferencesButton = page.locator(
      'button:has-text("Preferences"), button:has-text("Customize"), button:has-text("Settings"), [data-testid="cookie-preferences"]'
    );
    
    await expect(preferencesButton).toBeVisible({ timeout: 5000 });
  });

  test('should hide banner after accepting cookies', async ({ page }) => {
    await page.goto('/');
    
    const consentBanner = page.locator('[data-testid="cookie-banner"], .cookie-banner, .consent-banner');
    await expect(consentBanner).toBeVisible({ timeout: 5000 });
    
    const acceptButton = page.locator('button:has-text("Accept"), [data-testid="accept-cookies"]');
    await acceptButton.click();
    
    // Banner should disappear
    await expect(consentBanner).toBeHidden({ timeout: 3000 });
    
    // Verify consent cookie was set
    const cookies = await page.context().cookies();
    const consentCookie = cookies.find(c => 
      c.name.includes('consent') || c.name.includes('cookie') || c.name.includes('gdpr')
    );
    
    expect(consentCookie).toBeDefined();
  });

  test('should hide banner after rejecting cookies', async ({ page }) => {
    await page.goto('/');
    
    const consentBanner = page.locator('[data-testid="cookie-banner"], .cookie-banner, .consent-banner');
    await expect(consentBanner).toBeVisible({ timeout: 5000 });
    
    const rejectButton = page.locator('button:has-text("Reject"), button:has-text("Decline"), [data-testid="reject-cookies"]');
    await rejectButton.click();
    
    // Banner should disappear
    await expect(consentBanner).toBeHidden({ timeout: 3000 });
    
    // Verify consent was recorded (even if rejected)
    const cookies = await page.context().cookies();
    const consentCookie = cookies.find(c => 
      c.name.includes('consent') || c.name.includes('cookie') || c.name.includes('gdpr')
    );
    
    expect(consentCookie).toBeDefined();
  });

  test('should not show banner again after consent given', async ({ page, context }) => {
    // First visit - accept cookies
    await page.goto('/');
    
    const acceptButton = page.locator('button:has-text("Accept"), [data-testid="accept-cookies"]');
    await acceptButton.click({ timeout: 5000 });
    
    // Navigate away and back
    await page.goto('/gallery');
    await page.goto('/');
    
    // Banner should not appear
    const consentBanner = page.locator('[data-testid="cookie-banner"], .cookie-banner, .consent-banner');
    await expect(consentBanner).toBeHidden({ timeout: 2000 });
  });

  test('should open preferences modal when clicking customize', async ({ page }) => {
    await page.goto('/');
    
    const preferencesButton = page.locator(
      'button:has-text("Preferences"), button:has-text("Customize"), button:has-text("Settings")'
    );
    
    await preferencesButton.click({ timeout: 5000 });
    
    // Preferences modal/panel should appear
    const preferencesModal = page.locator(
      '[data-testid="cookie-preferences"], .cookie-preferences, [role="dialog"]'
    ).last(); // Get the preferences modal, not the banner
    
    await expect(preferencesModal).toBeVisible({ timeout: 3000 });
  });

  test('should allow granular cookie preferences', async ({ page }) => {
    await page.goto('/');
    
    const preferencesButton = page.locator('button:has-text("Preferences"), button:has-text("Customize")');
    await preferencesButton.click({ timeout: 5000 });
    
    // Should show different cookie categories
    const preferencesPanel = page.locator('[data-testid="cookie-preferences"], .cookie-preferences').last();
    
    const categories = [
      /necessary|essential/i,
      /analytics|statistics/i,
      /marketing|advertising/i,
    ];
    
    const panelText = await preferencesPanel.textContent();
    
    // At least necessary and analytics should be present
    expect(panelText).toMatch(categories[0]); // Necessary
    expect(panelText).toMatch(categories[1]); // Analytics
    
    // Look for toggles/checkboxes
    const toggles = preferencesPanel.locator('input[type="checkbox"], [role="switch"]');
    const toggleCount = await toggles.count();
    
    expect(toggleCount).toBeGreaterThanOrEqual(2); // At least 2 categories
  });

  test('should have link to privacy policy in banner', async ({ page }) => {
    await page.goto('/');
    
    const consentBanner = page.locator('[data-testid="cookie-banner"], .cookie-banner, .consent-banner');
    
    const privacyLink = consentBanner.locator('a:has-text("Privacy"), a[href*="privacy"]');
    await expect(privacyLink).toBeVisible({ timeout: 5000 });
    
    // Verify link points to privacy policy
    const href = await privacyLink.getAttribute('href');
    expect(href).toMatch(/privacy/i);
  });

  test('should be keyboard navigable', async ({ page }) => {
    await page.goto('/');
    
    const consentBanner = page.locator('[data-testid="cookie-banner"], .cookie-banner, .consent-banner');
    await expect(consentBanner).toBeVisible({ timeout: 5000 });
    
    // Focus should trap within banner
    await page.keyboard.press('Tab');
    
    const focused = page.locator(':focus');
    
    // Should focus on a button or link within banner
    const focusedElement = await focused.evaluate(el => {
      return el.closest('[data-testid="cookie-banner"], .cookie-banner, .consent-banner') !== null;
    });
    
    expect(focusedElement).toBeTruthy();
    
    // Should be able to activate with keyboard
    await page.keyboard.press('Enter');
    
    // Banner should close
    await expect(consentBanner).toBeHidden({ timeout: 2000 });
  });
});

test.describe('Analytics Integration with Consent', () => {

  test.beforeEach(async ({ context }) => {
    await context.clearCookies();
  });

  test('should not load analytics scripts before consent', async ({ page }) => {
    // Track network requests
    const analyticsRequests = [];
    
    page.on('request', request => {
      const url = request.url();
      if (url.includes('google-analytics') || 
          url.includes('gtag') || 
          url.includes('plausible') ||
          url.includes('analytics')) {
        analyticsRequests.push(url);
      }
    });
    
    await page.goto('/');
    
    // Wait a bit to ensure no delayed loading
    await page.waitForTimeout(2000);
    
    // Should not have loaded analytics
    expect(analyticsRequests.length).toBe(0);
  });

  test('should load analytics after accepting cookies', async ({ page }) => {
    const analyticsRequests = [];
    
    page.on('request', request => {
      const url = request.url();
      if (url.includes('google-analytics') || 
          url.includes('gtag') || 
          url.includes('plausible') ||
          url.includes('analytics') ||
          url.includes('cloudflare') && url.includes('beacon')) {
        analyticsRequests.push(url);
      }
    });
    
    await page.goto('/');
    
    const acceptButton = page.locator('button:has-text("Accept"), [data-testid="accept-cookies"]');
    await acceptButton.click({ timeout: 5000 });
    
    // Wait for analytics to load
    await page.waitForTimeout(3000);
    
    // Analytics should now be loaded
    // Note: This might not trigger in test env, but script tags should be present
    const scripts = await page.locator('script[src*="analytics"], script[src*="gtag"], script[src*="plausible"]').count();
    
    // Either network requests or script tags should be present
    expect(analyticsRequests.length > 0 || scripts > 0).toBeTruthy();
  });

  test('should not load analytics after rejecting cookies', async ({ page }) => {
    const analyticsRequests = [];
    
    page.on('request', request => {
      const url = request.url();
      if (url.includes('google-analytics') || 
          url.includes('gtag') || 
          url.includes('plausible') ||
          url.includes('analytics')) {
        analyticsRequests.push(url);
      }
    });
    
    await page.goto('/');
    
    const rejectButton = page.locator('button:has-text("Reject"), button:has-text("Decline")');
    await rejectButton.click({ timeout: 5000 });
    
    await page.waitForTimeout(3000);
    
    // Analytics should NOT be loaded
    expect(analyticsRequests.length).toBe(0);
  });
});

test.describe('Privacy Policy Page', () => {

  test('should have accessible privacy policy page', async ({ page }) => {
    await page.goto('/privacy');
    
    // Page should load
    await expect(page).toHaveURL(/privacy/i);
    
    // Should have heading
    const heading = page.locator('h1').filter({ hasText: /privacy/i });
    await expect(heading).toBeVisible();
  });

  test('should explain data collection practices', async ({ page }) => {
    await page.goto('/privacy');
    
    const content = await page.textContent('main, .content, article');
    
    // Should mention key topics
    expect(content).toMatch(/cookie|cookies/i);
    expect(content).toMatch(/data|information/i);
    expect(content).toMatch(/analytics/i);
    expect(content).toMatch(/contact|email/i);
    
    // Should mention rights
    expect(content).toMatch(/right|rights|gdpr/i);
  });

  test('should explain form data storage', async ({ page }) => {
    await page.goto('/privacy');
    
    const content = await page.textContent('body');
    
    // Should mention submission form data
    expect(content).toMatch(/form|submission/i);
    expect(content).toMatch(/name|email/i);
    expect(content).toMatch(/store|storage|collect/i);
  });

  test('should explain CRM connection', async ({ page }) => {
    await page.goto('/privacy');
    
    const content = await page.textContent('body');
    
    // Should mention third-party services
    expect(content).toMatch(/third.party|crm|hubspot|airtable|notion/i);
  });

  test('should be accessible and well-structured', async ({ page }) => {
    await page.goto('/privacy');
    
    // Check heading hierarchy
    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBe(1);
    
    const h2Count = await page.locator('h2').count();
    expect(h2Count).toBeGreaterThan(0); // Should have sections
    
    // Check for table of contents or navigation
    const toc = page.locator('[role="navigation"], .table-of-contents, #toc');
    // TOC is optional but good practice
  });
});

test.describe('Cookie Storage Compliance', () => {

  test('should only set necessary cookies before consent', async ({ page, context }) => {
    await context.clearCookies();
    
    await page.goto('/');
    
    // Wait for page to fully load
    await page.waitForLoadState('networkidle');
    
    const cookies = await context.cookies();
    
    // Filter out necessary cookies (session, consent preference storage)
    const nonNecessaryCookies = cookies.filter(c => 
      !c.name.includes('consent') && 
      !c.name.includes('session') &&
      !c.name.includes('csrf')
    );
    
    // Should not have analytics or tracking cookies
    const trackingCookies = nonNecessaryCookies.filter(c =>
      c.name.includes('_ga') || 
      c.name.includes('_gid') ||
      c.name.includes('analytics')
    );
    
    expect(trackingCookies.length).toBe(0);
  });

  test('should set appropriate cookie expiration', async ({ page, context }) => {
    await context.clearCookies();
    
    await page.goto('/');
    
    const acceptButton = page.locator('button:has-text("Accept")');
    await acceptButton.click({ timeout: 5000 });
    
    const cookies = await context.cookies();
    const consentCookie = cookies.find(c => 
      c.name.includes('consent') || c.name.includes('cookie-preference')
    );
    
    if (consentCookie) {
      // Consent cookie should have reasonable expiration (e.g., 1 year)
      const now = Date.now() / 1000;
      const expirationMonths = (consentCookie.expires - now) / (30 * 24 * 60 * 60);
      
      // Should expire between 1 month and 2 years
      expect(expirationMonths).toBeGreaterThan(1);
      expect(expirationMonths).toBeLessThan(24);
    }
  });
});
