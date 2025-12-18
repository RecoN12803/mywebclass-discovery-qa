/**
 * Playwright Test Configuration for MyWebClass.org
 * 
 * This configuration provides comprehensive E2E testing across multiple browsers,
 * devices, and scenarios. Designed for CI/CD integration with GitHub Actions.
 * 
 * Features:
 * - Cross-browser testing (Chromium, Firefox, WebKit)
 * - Mobile device emulation
 * - Accessibility testing integration
 * - Screenshot/video on failure
 * - Parallel execution
 * - Performance monitoring
 */

const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  // Test directory
  testDir: './tests/e2e',
  
  // Maximum time one test can run
  timeout: 30 * 1000,
  
  // Test execution settings
  fullyParallel: true,
  forbidOnly: !!process.env.CI, // Fail CI if test.only is committed
  retries: process.env.CI ? 2 : 0, // Retry on CI
  workers: process.env.CI ? 1 : undefined,
  
  // Reporter configuration
  reporter: [
    ['html', { outputFolder: 'test-results/html', open: 'never' }],
    ['json', { outputFile: 'test-results/results.json' }],
    ['junit', { outputFile: 'test-results/junit.xml' }],
    ['list'] // Console output
  ],
  
  // Shared settings for all projects
  use: {
    // Base URL for tests
    baseURL: process.env.BASE_URL || 'http://localhost:8080',
    
    // Collect trace on failure for debugging
    trace: 'retain-on-failure',
    
    // Screenshot on failure
    screenshot: 'only-on-failure',
    
    // Video on first retry
    video: 'retain-on-failure',
    
    // Maximum time for actions (click, fill, etc.)
    actionTimeout: 10 * 1000,
    
    // Navigation timeout
    navigationTimeout: 30 * 1000,
    
    // Viewport size (overridden by device configs)
    viewport: { width: 1280, height: 720 },
    
    // User agent
    userAgent: 'Mozilla/5.0 (Playwright Test)',
    
    // Ignore HTTPS errors (for dev environments)
    ignoreHTTPSErrors: true,
    
    // Locale and timezone
    locale: 'en-US',
    timezoneId: 'America/New_York',
  },

  // Configure projects for major browsers and devices
  projects: [
    // Desktop Browsers
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        // Enable accessibility snapshot testing
        contextOptions: {
          reducedMotion: 'reduce', // Test with reduced motion
        }
      },
    },
    
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    // Mobile Browsers
    {
      name: 'mobile-chrome',
      use: { 
        ...devices['Pixel 5'],
        // Test mobile interactions
        hasTouch: true,
        isMobile: true,
      },
    },
    
    {
      name: 'mobile-safari',
      use: { 
        ...devices['iPhone 13'],
        hasTouch: true,
        isMobile: true,
      },
    },

    // Tablet
    {
      name: 'tablet',
      use: { 
        ...devices['iPad Pro'],
        hasTouch: true,
      },
    },

    // Accessibility Testing (with screen reader simulation context)
    {
      name: 'accessibility',
      use: {
        ...devices['Desktop Chrome'],
        contextOptions: {
          forcedColors: 'active', // Test high contrast mode
          reducedMotion: 'reduce',
        },
      },
      testMatch: /.*\.a11y\.spec\.js/, // Only run a11y tests
    },
  ],

  // Web Server configuration for local development
  webServer: {
    command: 'npm run serve',
    port: 8080,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
    stdout: 'ignore',
    stderr: 'pipe',
  },

  // Global setup/teardown
  // globalSetup: require.resolve('./tests/setup/global-setup.js'),
  // globalTeardown: require.resolve('./tests/setup/global-teardown.js'),

  // Folder for test artifacts
  outputDir: 'test-results/artifacts',

  // Expect options
  expect: {
    // Maximum time expect() should wait for condition
    timeout: 5000,
    
    toHaveScreenshot: {
      // Pixel difference threshold
      maxDiffPixels: 100,
    },
    
    toMatchSnapshot: {
      threshold: 0.2,
    },
  },
});
