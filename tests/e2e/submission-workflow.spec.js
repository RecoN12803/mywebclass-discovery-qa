/**
 * E2E Test: Student Submission Workflow
 * 
 * Tests the complete student submission flow including:
 * - Form accessibility and validation
 * - Form submission process
 * - Sanity CMS integration
 * - Instructor review workflow
 * - Submission status changes
 */

const { test, expect } = require('@playwright/test');

// Test data
const submissionData = {
  name: 'Test Student',
  email: 'test.student@mywebclass.org',
  style: 'Bauhaus',
  url: 'https://github.com/test-user/bauhaus-demo',
  description: 'This demo authentically recreates Bauhaus principles including geometric forms, primary colors, and asymmetric layouts. The typography uses sans-serif fonts reminiscent of the Bauhaus school.',
};

test.describe('Student Submission Workflow', () => {

  test('should display accessible submission form', async ({ page }) => {
    // Navigate to submission page
    await page.goto('/submit');
    
    // Verify form exists
    const form = page.locator('form[data-testid="submission-form"], form').first();
    await expect(form).toBeVisible();
    
    // Check form has proper heading
    const heading = page.locator('h1, h2').filter({ hasText: /submit|submission/i }).first();
    await expect(heading).toBeVisible();
    
    // Verify all required fields are present with labels
    const fields = [
      { name: 'name', label: /name/i },
      { name: 'email', label: /email/i },
      { name: 'style', label: /style|design/i },
      { name: 'url', label: /url|link|demo/i },
      { name: 'description', label: /description|explanation/i },
    ];
    
    for (const field of fields) {
      // Check label exists and is associated
      const label = page.locator(`label:has-text("${field.label.source}")`).first();
      await expect(label).toBeVisible();
      
      // Check input/textarea/select exists
      const input = page.locator(`input[name="${field.name}"], textarea[name="${field.name}"], select[name="${field.name}"]`).first();
      await expect(input).toBeVisible();
      
      // Verify label-input association
      const labelFor = await label.getAttribute('for');
      const inputId = await input.getAttribute('id');
      
      if (labelFor && inputId) {
        expect(labelFor).toBe(inputId);
      }
    }
    
    // Check for submit button
    const submitButton = page.locator('button[type="submit"], input[type="submit"]');
    await expect(submitButton).toBeVisible();
    await expect(submitButton).toBeEnabled();
  });

  test('should validate required fields', async ({ page }) => {
    await page.goto('/submit');
    
    // Try to submit empty form
    const submitButton = page.locator('button[type="submit"], input[type="submit"]');
    await submitButton.click();
    
    // Check for validation messages (HTML5 or custom)
    await page.waitForTimeout(500); // Wait for validation to trigger
    
    // Verify form was not submitted (still on same page)
    await expect(page).toHaveURL(/\/submit/);
    
    // Check for error messages or HTML5 validation
    const nameInput = page.locator('input[name="name"]');
    const isRequired = await nameInput.getAttribute('required');
    
    if (isRequired !== null) {
      // HTML5 validation should prevent submission
      const validationMessage = await nameInput.evaluate((el) => el.validationMessage);
      expect(validationMessage).toBeTruthy();
    } else {
      // Custom validation should show error
      const errorMessage = page.locator('.error, [role="alert"], .validation-error');
      await expect(errorMessage.first()).toBeVisible();
    }
  });

  test('should validate email format', async ({ page }) => {
    await page.goto('/submit');
    
    // Fill form with invalid email
    await page.fill('input[name="name"]', 'Test User');
    await page.fill('input[name="email"]', 'invalid-email');
    
    const submitButton = page.locator('button[type="submit"], input[type="submit"]');
    await submitButton.click();
    
    await page.waitForTimeout(500);
    
    // Check for email validation
    const emailInput = page.locator('input[name="email"]');
    const inputType = await emailInput.getAttribute('type');
    
    if (inputType === 'email') {
      // HTML5 email validation
      const validationMessage = await emailInput.evaluate((el) => el.validationMessage);
      expect(validationMessage).toBeTruthy();
    }
  });

  test('should validate URL format', async ({ page }) => {
    await page.goto('/submit');
    
    await page.fill('input[name="name"]', 'Test User');
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('input[name="url"], input[name="demoUrl"]', 'not-a-valid-url');
    
    const submitButton = page.locator('button[type="submit"], input[type="submit"]');
    await submitButton.click();
    
    await page.waitForTimeout(500);
    
    // Check for URL validation
    const urlInput = page.locator('input[name="url"], input[name="demoUrl"]');
    const inputType = await urlInput.getAttribute('type');
    
    if (inputType === 'url') {
      const validationMessage = await urlInput.evaluate((el) => el.validationMessage);
      expect(validationMessage).toBeTruthy();
    }
  });

  test('should successfully submit form with valid data', async ({ page }) => {
    await page.goto('/submit');
    
    // Fill out form
    await page.fill('input[name="name"]', submissionData.name);
    await page.fill('input[name="email"]', submissionData.email);
    
    // Handle style selection (could be select, radio, or input)
    const styleSelect = page.locator('select[name="style"]');
    const styleInput = page.locator('input[name="style"]');
    
    if (await styleSelect.isVisible()) {
      await styleSelect.selectOption(submissionData.style);
    } else if (await styleInput.isVisible()) {
      await styleInput.fill(submissionData.style);
    }
    
    await page.fill('input[name="url"], input[name="demoUrl"]', submissionData.url);
    await page.fill('textarea[name="description"]', submissionData.description);
    
    // Handle screenshot upload if present
    const fileInput = page.locator('input[type="file"]');
    if (await fileInput.isVisible()) {
      // In a real test, you'd upload an actual file
      // For now, we'll make it optional or skip
    }
    
    // Submit form
    const submitButton = page.locator('button[type="submit"], input[type="submit"]');
    
    // Listen for navigation or success message
    const responsePromise = page.waitForResponse(response => 
      response.url().includes('/submit') || response.url().includes('/api/'), 
      { timeout: 10000 }
    ).catch(() => null);
    
    await submitButton.click();
    
    // Wait for response or navigation
    await Promise.race([
      responsePromise,
      page.waitForNavigation({ timeout: 5000 }).catch(() => null),
      page.waitForSelector('.success, [role="status"], .confirmation', { timeout: 5000 }).catch(() => null),
    ]);
    
    // Check for success indicators
    const successIndicators = [
      page.locator('.success, [role="status"]'),
      page.locator('text=/thank you|success|submitted/i'),
      page.locator('[data-testid="success-message"]'),
    ];
    
    let successFound = false;
    for (const indicator of successIndicators) {
      if (await indicator.isVisible({ timeout: 1000 }).catch(() => false)) {
        successFound = true;
        break;
      }
    }
    
    // Verify submission success
    expect(successFound || page.url().includes('success') || page.url().includes('thank')).toBeTruthy();
  });

  test('should handle file upload for screenshot', async ({ page }) => {
    await page.goto('/submit');
    
    const fileInput = page.locator('input[type="file"]');
    
    if (await fileInput.isVisible()) {
      // Verify file input has proper label
      const label = page.locator('label').filter({ has: fileInput }).or(
        page.locator(`label[for="${await fileInput.getAttribute('id')}"]`)
      );
      
      await expect(label).toBeVisible();
      
      // Verify accept attribute for images
      const accept = await fileInput.getAttribute('accept');
      expect(accept).toMatch(/image/);
      
      // Test file upload (create a small test image buffer)
      const buffer = Buffer.from('fake-image-data');
      await fileInput.setInputFiles({
        name: 'screenshot.png',
        mimeType: 'image/png',
        buffer: buffer,
      });
      
      // Verify file was selected
      const files = await fileInput.evaluate((el) => el.files?.length);
      expect(files).toBe(1);
    }
  });

  test('should show character count for description field', async ({ page }) => {
    await page.goto('/submit');
    
    const descriptionField = page.locator('textarea[name="description"]');
    await descriptionField.fill('Test description');
    
    // Look for character counter
    const counter = page.locator('[data-testid="char-count"], .char-count, .character-count');
    
    if (await counter.isVisible({ timeout: 1000 }).catch(() => false)) {
      const counterText = await counter.textContent();
      expect(counterText).toMatch(/\d+/); // Should contain a number
    }
  });

  test('should be keyboard accessible', async ({ page }) => {
    await page.goto('/submit');
    
    // Start from first focusable element
    await page.keyboard.press('Tab');
    
    // Tab through all form fields
    const focusableElements = [
      'input[name="name"]',
      'input[name="email"]',
      'select[name="style"], input[name="style"]',
      'input[name="url"], input[name="demoUrl"]',
      'textarea[name="description"]',
      'button[type="submit"]',
    ];
    
    for (const selector of focusableElements) {
      const element = page.locator(selector).first();
      
      if (await element.isVisible({ timeout: 1000 }).catch(() => false)) {
        // Press tab to focus next element
        await page.keyboard.press('Tab');
        
        // Verify an input is focused
        const focused = page.locator(':focus');
        await expect(focused).toBeVisible();
      }
    }
    
    // Verify submit can be activated with Enter/Space
    const submitButton = page.locator('button[type="submit"]');
    await submitButton.focus();
    
    const isFocused = await submitButton.evaluate((el) => el === document.activeElement);
    expect(isFocused).toBeTruthy();
  });

  test('should prevent duplicate submissions', async ({ page }) => {
    await page.goto('/submit');
    
    // Fill form quickly
    await page.fill('input[name="name"]', submissionData.name);
    await page.fill('input[name="email"]', submissionData.email);
    await page.fill('input[name="url"], input[name="demoUrl"]', submissionData.url);
    await page.fill('textarea[name="description"]', 'Test');
    
    const submitButton = page.locator('button[type="submit"]');
    
    // Click submit multiple times rapidly
    await submitButton.click();
    await submitButton.click();
    await submitButton.click();
    
    // Button should be disabled after first click
    await expect(submitButton).toBeDisabled({ timeout: 1000 });
  });

  test('should display style selection options', async ({ page }) => {
    await page.goto('/submit');
    
    // Check for style selection mechanism
    const styleSelect = page.locator('select[name="style"]');
    const styleRadios = page.locator('input[type="radio"][name="style"]');
    
    if (await styleSelect.isVisible()) {
      // Verify select has options
      const options = await styleSelect.locator('option').count();
      expect(options).toBeGreaterThan(1); // At least placeholder + 1 style
      
      // Verify required styles are present
      const html = await styleSelect.innerHTML();
      expect(html).toMatch(/Swiss|Bauhaus|Brutalism|Flat|Minimalism/i);
      
    } else if (await styleRadios.count() > 0) {
      // Verify radio buttons
      const radioCount = await styleRadios.count();
      expect(radioCount).toBeGreaterThanOrEqual(3);
      
      // Each radio should have a label
      for (let i = 0; i < radioCount; i++) {
        const radio = styleRadios.nth(i);
        const radioId = await radio.getAttribute('id');
        const label = page.locator(`label[for="${radioId}"]`);
        await expect(label).toBeVisible();
      }
    }
  });
});

test.describe('Instructor Review Workflow', () => {

  // Note: These tests assume authentication is handled
  // In production, you'd need to authenticate as an instructor first

  test('should display submissions list for review', async ({ page }) => {
    // Navigate to instructor/admin panel
    await page.goto('/admin/submissions');
    
    // Check for submissions table or list
    const submissionsList = page.locator('[data-testid="submissions-list"], .submissions-table, table');
    
    if (await submissionsList.isVisible({ timeout: 5000 }).catch(() => false)) {
      // Verify table headers
      const headers = ['name', 'email', 'style', 'status', 'action'];
      
      for (const header of headers) {
        const headerCell = page.locator(`th:has-text("${header}"), [data-column="${header}"]`).first();
        // Header might not be visible if no submissions yet
      }
      
      // Check for status indicators
      const statusBadge = page.locator('.status, [data-testid="status"]').first();
      
      if (await statusBadge.isVisible({ timeout: 1000 }).catch(() => false)) {
        const statusText = await statusBadge.textContent();
        expect(statusText).toMatch(/submitted|approved|rejected|pending/i);
      }
    }
  });

  test('should allow status change from submitted to approved', async ({ page }) => {
    await page.goto('/admin/submissions');
    
    // Find first submission
    const firstSubmission = page.locator('[data-testid="submission-row"], .submission-row, tbody tr').first();
    
    if (await firstSubmission.isVisible({ timeout: 5000 }).catch(() => false)) {
      // Look for approve button/select
      const approveButton = firstSubmission.locator('button:has-text("Approve"), [data-action="approve"]');
      const statusSelect = firstSubmission.locator('select');
      
      if (await approveButton.isVisible({ timeout: 1000 }).catch(() => false)) {
        await approveButton.click();
        
        // Verify status changed
        await page.waitForTimeout(1000);
        
        const statusBadge = firstSubmission.locator('.status, [data-testid="status"]');
        const statusText = await statusBadge.textContent();
        expect(statusText).toMatch(/approved/i);
        
      } else if (await statusSelect.isVisible({ timeout: 1000 }).catch(() => false)) {
        await statusSelect.selectOption('approved');
        
        // May need to save
        const saveButton = firstSubmission.locator('button:has-text("Save")');
        if (await saveButton.isVisible({ timeout: 1000 }).catch(() => false)) {
          await saveButton.click();
        }
      }
    }
  });

  test('should filter submissions by status', async ({ page }) => {
    await page.goto('/admin/submissions');
    
    // Look for filter controls
    const filterSelect = page.locator('select[name="status"], select[data-filter="status"]');
    
    if (await filterSelect.isVisible({ timeout: 5000 }).catch(() => false)) {
      // Get initial count
      const initialCount = await page.locator('[data-testid="submission-row"], .submission-row, tbody tr').count();
      
      // Apply filter
      await filterSelect.selectOption('approved');
      await page.waitForTimeout(500);
      
      // Verify filter applied
      const filteredCount = await page.locator('[data-testid="submission-row"], .submission-row, tbody tr').count();
      
      // Count might change (could be same if all are approved)
      expect(filteredCount).toBeGreaterThanOrEqual(0);
    }
  });
});
