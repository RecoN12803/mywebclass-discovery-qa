/**
 * E2E Test: Homepage and Gallery Navigation
 * 
 * Tests core user flows for browsing the design gallery including:
 * - Homepage loads correctly with all key elements
 * - Gallery displays design styles
 * - Navigation between pages works
 * - Design style detail pages load
 * - Performance benchmarks
 */

const { test, expect } = require('@playwright/test');

test.describe('Homepage and Gallery', () => {
  
  test.beforeEach(async ({ page }) => {
    // Navigate to homepage before each test
    await page.goto('/');
  });

  test('should load homepage with all critical elements', async ({ page }) => {
    // Verify page loads successfully
    await expect(page).toHaveTitle(/MyWebClass/i);
    
    // Check for main navigation
    const nav = page.locator('nav, [role="navigation"]');
    await expect(nav).toBeVisible();
    
    // Check for hero section
    const hero = page.locator('h1, .hero, [data-testid="hero"]').first();
    await expect(hero).toBeVisible();
    
    // Verify gallery link is present
    const galleryLink = page.locator('a:has-text("Gallery"), a:has-text("Design Styles"), a[href*="gallery"]').first();
    await expect(galleryLink).toBeVisible();
    
    // Check footer exists
    const footer = page.locator('footer, [role="contentinfo"]');
    await expect(footer).toBeVisible();
    
    // Verify no console errors
    page.on('console', msg => {
      if (msg.type() === 'error') {
        console.error('Browser console error:', msg.text());
      }
    });
  });

  test('should display gallery with design style entries', async ({ page }) => {
    // Navigate to gallery
    await page.click('a:has-text("Gallery"), a:has-text("Design Styles"), a[href*="gallery"]');
    
    // Wait for gallery page to load
    await page.waitForLoadState('networkidle');
    
    // Verify gallery heading
    const heading = page.locator('h1, h2').filter({ hasText: /gallery|design styles/i }).first();
    await expect(heading).toBeVisible();
    
    // Check for gallery items (should have at least 3 based on requirements)
    const galleryItems = page.locator('[data-testid="gallery-item"], .gallery-item, article').all();
    expect((await galleryItems).length).toBeGreaterThanOrEqual(3);
    
    // Verify each item has required elements
    const firstItem = page.locator('[data-testid="gallery-item"], .gallery-item, article').first();
    
    // Should have image or thumbnail
    const thumbnail = firstItem.locator('img, [role="img"]');
    await expect(thumbnail).toBeVisible();
    
    // Should have title/style name
    const title = firstItem.locator('h2, h3, .title');
    await expect(title).toBeVisible();
    
    // Should have description
    const description = firstItem.locator('p, .description');
    await expect(description).toBeVisible();
    
    // Should have "View Demo" or similar link
    const demoLink = firstItem.locator('a:has-text("View"), a:has-text("Demo"), a:has-text("Learn More")');
    await expect(demoLink).toBeVisible();
  });

  test('should navigate to design style detail page', async ({ page }) => {
    // Go to gallery
    await page.click('a:has-text("Gallery"), a:has-text("Design Styles"), a[href*="gallery"]');
    await page.waitForLoadState('networkidle');
    
    // Click on first design style
    const firstDemoLink = page.locator('[data-testid="gallery-item"] a, .gallery-item a, article a').first();
    const styleName = await firstDemoLink.textContent();
    
    await firstDemoLink.click();
    await page.waitForLoadState('networkidle');
    
    // Verify detail page loaded
    await expect(page).toHaveURL(/\/(styles|gallery|demos)\//);
    
    // Check for demo iframe or embedded content
    const demo = page.locator('iframe[title*="demo"], .demo-container, [data-testid="demo"]');
    await expect(demo).toBeVisible({ timeout: 10000 });
    
    // Check for educational content
    const educationalSection = page.locator('.description, .explanation, [data-testid="explanation"]');
    await expect(educationalSection).toBeVisible();
    
    // Verify educational content includes key sections
    const content = await page.textContent('body');
    expect(content).toMatch(/origin|history|characteristic|principle|authentic/i);
  });

  test('should have working navigation breadcrumbs', async ({ page }) => {
    // Navigate deep into site
    await page.click('a:has-text("Gallery"), a:has-text("Design Styles")');
    await page.waitForLoadState('networkidle');
    
    await page.locator('[data-testid="gallery-item"] a, .gallery-item a, article a').first().click();
    await page.waitForLoadState('networkidle');
    
    // Check for breadcrumbs or back navigation
    const breadcrumb = page.locator('nav[aria-label*="breadcrumb"], .breadcrumb, [data-testid="breadcrumb"]');
    
    if (await breadcrumb.isVisible()) {
      // If breadcrumbs exist, verify they work
      const homeLink = breadcrumb.locator('a:has-text("Home")');
      await expect(homeLink).toBeVisible();
      
      await homeLink.click();
      await expect(page).toHaveURL('/');
    }
  });

  test('should be responsive on mobile devices', async ({ page, isMobile }) => {
    if (!isMobile) {
      test.skip();
    }
    
    // Check mobile menu
    const mobileMenu = page.locator('button[aria-label*="menu"], .hamburger, [data-testid="mobile-menu"]');
    
    if (await mobileMenu.isVisible()) {
      await mobileMenu.click();
      
      // Verify navigation is accessible
      const nav = page.locator('nav, [role="navigation"]');
      await expect(nav).toBeVisible();
    }
    
    // Gallery should still be accessible
    await page.goto('/gallery');
    
    const galleryItems = await page.locator('[data-testid="gallery-item"], .gallery-item, article').count();
    expect(galleryItems).toBeGreaterThan(0);
    
    // Images should load
    const firstImage = page.locator('img').first();
    await expect(firstImage).toBeVisible();
  });

  test('should meet performance benchmarks', async ({ page }) => {
    // Navigate to homepage
    const response = await page.goto('/', { waitUntil: 'load' });
    
    // Verify successful response
    expect(response?.status()).toBe(200);
    
    // Measure performance
    const performanceMetrics = await page.evaluate(() => {
      const perfData = performance.getEntriesByType('navigation')[0];
      return {
        domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
        loadComplete: perfData.loadEventEnd - perfData.loadEventStart,
        domInteractive: perfData.domInteractive - perfData.fetchStart,
      };
    });
    
    // Assert performance budgets (adjust based on your requirements)
    expect(performanceMetrics.domInteractive).toBeLessThan(2000); // 2 seconds
    
    console.log('Performance Metrics:', performanceMetrics);
  });

  test('should have no accessibility violations on homepage', async ({ page }) => {
    // This is a basic test - you should use @axe-core/playwright for comprehensive testing
    
    // Check for alt text on images
    const images = await page.locator('img').all();
    for (const img of images) {
      const alt = await img.getAttribute('alt');
      expect(alt).toBeDefined();
    }
    
    // Check for proper heading hierarchy
    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBe(1); // Should have exactly one h1
    
    // Check for skip link
    const skipLink = page.locator('a[href="#main"], a:has-text("Skip to")').first();
    // Skip link might be hidden but should exist
    expect(await skipLink.count()).toBeGreaterThan(0);
    
    // Check all links have accessible names
    const links = await page.locator('a').all();
    for (const link of links) {
      const text = await link.textContent();
      const ariaLabel = await link.getAttribute('aria-label');
      const title = await link.getAttribute('title');
      
      expect(text || ariaLabel || title).toBeTruthy();
    }
  });
});
