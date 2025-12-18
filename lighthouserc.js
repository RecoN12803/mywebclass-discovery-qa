/**
 * Lighthouse CI Configuration for MyWebClass.org
 * 
 * This configuration defines performance budgets, accessibility requirements,
 * and quality gates for the MyWebClass design gallery site.
 * 
 * Lighthouse CI will run on every CI build and enforce these standards.
 */

module.exports = {
  ci: {
    collect: {
      // URLs to test (relative to server URL)
      url: [
        'http://localhost:8080/',
        'http://localhost:8080/gallery',
        'http://localhost:8080/submit',
        'http://localhost:8080/privacy',
      ],
      
      // Number of runs per URL (median is used)
      numberOfRuns: 3,
      
      // Lighthouse settings
      settings: {
        // Run on mobile by default
        preset: 'desktop',
        
        // Emulated form factor
        formFactor: 'desktop',
        
        // Throttling (4G)
        throttling: {
          rttMs: 40,
          throughputKbps: 10240,
          cpuSlowdownMultiplier: 1,
        },
        
        // Screen emulation
        screenEmulation: {
          mobile: false,
          width: 1350,
          height: 940,
          deviceScaleFactor: 1,
          disabled: false,
        },
        
        // Only run certain categories (faster)
        onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
      },
    },
    
    assert: {
      // Assertion settings
      preset: 'lighthouse:recommended',
      
      assertions: {
        // Performance assertions
        'categories:performance': ['error', { minScore: 0.85 }],
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'categories:best-practices': ['error', { minScore: 0.90 }],
        'categories:seo': ['error', { minScore: 0.90 }],
        
        // Specific metric assertions (Core Web Vitals)
        'first-contentful-paint': ['warn', { maxNumericValue: 2000 }],
        'largest-contentful-paint': ['error', { maxNumericValue: 2500 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
        'total-blocking-time': ['warn', { maxNumericValue: 300 }],
        'speed-index': ['warn', { maxNumericValue: 3000 }],
        'interactive': ['warn', { maxNumericValue: 4000 }],
        
        // Resource size assertions
        'resource-summary:script:size': ['error', { maxNumericValue: 250000 }], // 250KB
        'resource-summary:stylesheet:size': ['error', { maxNumericValue: 50000 }], // 50KB
        'resource-summary:image:size': ['warn', { maxNumericValue: 500000 }], // 500KB
        'resource-summary:total:size': ['warn', { maxNumericValue: 1500000 }], // 1.5MB
        
        // Accessibility assertions
        'color-contrast': 'error',
        'image-alt': 'error',
        'heading-order': 'error',
        'html-has-lang': 'error',
        'label': 'error',
        'link-name': 'error',
        'list': 'warn',
        'meta-viewport': 'error',
        
        // Best practices
        'errors-in-console': 'warn',
        'uses-http2': 'warn',
        'uses-responsive-images': 'warn',
        'uses-optimized-images': 'warn',
        
        // SEO
        'meta-description': 'error',
        'document-title': 'error',
        'robots-txt': 'warn',
      },
    },
    
    upload: {
      // Upload results to temporary public storage
      target: 'temporary-public-storage',
      
      // Or use Lighthouse CI server if available
      // target: 'lhci',
      // serverBaseUrl: 'https://your-lhci-server.com',
      // token: process.env.LHCI_TOKEN,
    },
    
    server: {
      // Optional: Run local Lighthouse CI server
      // port: 9001,
      // storage: {
      //   storageMethod: 'sql',
      //   sqlDatabasePath: '.lighthouseci/db.sql',
      // },
    },
  },
};
