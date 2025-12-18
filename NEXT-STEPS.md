# QA Next Steps - What You Need To Do

**Role:** QA Engineer  
**Project:** MyWebClass.org Design Gallery  
**Date:** December 17, 2025

---

## ✅ What Has Been Completed

All QA infrastructure and documentation has been generated:

### 1. Test Infrastructure ✅
- ✅ Playwright configuration with multi-browser support
- ✅ 49 comprehensive E2E test cases across 4 test suites
- ✅ Accessibility testing utilities with axe-core integration
- ✅ Lighthouse CI performance monitoring
- ✅ Bundle size tracking and enforcement

### 2. Documentation ✅
- ✅ Comprehensive QA Report template
- ✅ Detailed AI Usage documentation
- ✅ WCAG 2.1 AA Accessibility Checklist
- ✅ Complete README with instructions

### 3. CI/CD Pipeline ✅
- ✅ GitHub Actions workflow with 9 stages
- ✅ Automated testing on push/PR
- ✅ Quality gates enforcement
- ✅ Automatic deployment on success

---

## 🎯 Your Immediate Tasks (QA-Specific)

### Task 1: Set Up Your Environment (15 minutes)

```bash
# 1. Navigate to the project directory
cd e:\Repos\mywebclass-discovery-qa

# 2. Install dependencies
npm install

# 3. Install Playwright browsers
npx playwright install

# 4. Verify installation
npx playwright --version
```

**Verify:** Run `npm test` - Tests will fail (no site yet) but Playwright should run

---

### Task 2: Review All QA Deliverables (30 minutes)

Read through these files to understand what's been created:

1. **[README.md](README.md)** - Project overview and quick start
2. **[docs/qa-report.md](docs/qa-report.md)** - QA report template you'll fill out
3. **[docs/ai-usage.md](docs/ai-usage.md)** - How AI was used in QA development
4. **[docs/accessibility-checklist.md](docs/accessibility-checklist.md)** - Manual testing guide

**Verify:** You understand the structure and purpose of each deliverable

---

### Task 3: Understand the Test Suites (45 minutes)

Review each test file to understand what's being tested:

1. **[tests/e2e/homepage-gallery.spec.js](tests/e2e/homepage-gallery.spec.js)**
   - 7 tests for gallery navigation and display
   - Performance benchmarks
   - Basic accessibility

2. **[tests/e2e/submission-workflow.spec.js](tests/e2e/submission-workflow.spec.js)**
   - 13 tests for student submission form
   - Validation testing
   - Instructor review workflow

3. **[tests/e2e/gdpr-consent.spec.js](tests/e2e/gdpr-consent.spec.js)**
   - 20 tests for GDPR compliance
   - Cookie consent banner
   - Privacy policy verification

4. **[tests/e2e/accessibility.spec.js](tests/e2e/accessibility.spec.js)**
   - 9 automated accessibility tests
   - Uses utility functions from `tests/utils/accessibility.js`

**Action Items:**
- [ ] Add comments if you find tests unclear
- [ ] Note any tests that need modification for your specific implementation
- [ ] Identify additional test cases that might be needed

---

### Task 4: Configure Quality Budgets (15 minutes)

Review and adjust these configuration files based on team requirements:

1. **[lighthouserc.js](lighthouserc.js)** - Performance budgets
   - Adjust score thresholds if needed
   - Modify Core Web Vitals targets
   
2. **[.size-limit.js](.size-limit.js)** - Bundle size limits
   - Update size limits based on actual requirements
   - Adjust paths once Eleventy structure is known

3. **[playwright.config.js](playwright.config.js)** - Test configuration
   - Update `baseURL` when you know the dev/staging URL
   - Adjust timeout values if needed

**Current Defaults:**
- Performance Score: ≥85
- Accessibility Score: ≥95
- CSS Bundle: ≤50KB
- JS Bundle: ≤250KB

---

### Task 5: Manual Accessibility Testing Prep (30 minutes)

Set up tools for manual accessibility testing:

1. **Install Browser Extensions:**
   - Chrome: [axe DevTools](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd)
   - Chrome: [WAVE](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh)
   - Chrome/Firefox: [Accessibility Insights](https://accessibilityinsights.io/)

2. **Install Screen Readers:**
   - Windows: [NVDA](https://www.nvaccess.org/download/) (Free)
   - macOS: VoiceOver (Built-in, press Cmd+F5)

3. **Review Checklist:**
   - Read [docs/accessibility-checklist.md](docs/accessibility-checklist.md)
   - Bookmark for manual testing sessions

---

## 🔄 Coordination with Development Team

### What You Need From Developers (REQUIRED before testing)

| Item | Why You Need It | When Needed |
|------|-----------------|-------------|
| **Development URL** | Update `baseURL` in Playwright config | Before running tests |
| **Staging URL** | Test pre-production environment | Before final QA |
| **HTML Structure** | Update test selectors | When site is built |
| **Design System Docs** | Understand expected styles/components | During test writing |
| **Sanity CMS Schemas** | Verify data structure in tests | For submission testing |
| **Discord Webhook** | Test notification integration | For submission testing |
| **CRM Details** | Test data flow | For submission testing |
| **Analytics Setup** | Verify GDPR implementation | For consent testing |

### Questions to Ask the Development Team

1. **Architecture:**
   - What is the Eleventy output directory structure?
   - How are pages routed? (`/gallery`, `/submit`, `/privacy`)
   - What CSS methodology is being used?

2. **HTML Conventions:**
   - Are you using `data-testid` attributes for test hooks?
   - What are the class naming conventions?
   - How are forms structured?

3. **State Management:**
   - How is cookie consent stored?
   - Where are analytics scripts loaded?
   - How does the submission form work (AJAX or form submission)?

4. **Integration Points:**
   - What is the Sanity API endpoint?
   - How does Discord integration work?
   - What CRM is being used and how is it connected?

---

## 📝 When The Site Is Built - Update Tests

Once developers provide a working site, you'll need to:

### 1. Update Configuration (15 minutes)

In [playwright.config.js](playwright.config.js):
```javascript
baseURL: 'http://localhost:8080',  // Change to actual dev URL
```

### 2. Update Test Selectors (2-3 hours)

Example: If the gallery HTML is:
```html
<div class="gallery">
  <article class="gallery-card">
    <img src="..." alt="Swiss Design">
    <h3>Swiss Design</h3>
    <a href="/styles/swiss">View Demo</a>
  </article>
</div>
```

Update test to use actual selectors:
```javascript
// Before (generic):
const galleryItems = page.locator('[data-testid="gallery-item"]');

// After (actual HTML):
const galleryItems = page.locator('.gallery-card');
```

### 3. Run Tests and Fix Failures (4-6 hours)

```bash
# Run all tests
npm test

# Run specific suite
npx playwright test tests/e2e/homepage-gallery.spec.js

# Run in headed mode to see what's happening
npm run test:headed

# Debug specific test
npm run test:debug
```

### 4. Fill Out QA Report (2-3 hours)

Once tests run, update [docs/qa-report.md](docs/qa-report.md) with:
- Actual test results (pass/fail)
- Lighthouse scores
- Bundle sizes
- Accessibility findings
- Known issues

---

## 🚀 Running Your First Test Session

### When Site is Deployed to Development

```bash
# 1. Update baseURL in playwright.config.js
# 2. Run tests to see what fails
npm test

# 3. Fix selectors one test file at a time
# Start with homepage:
npx playwright test tests/e2e/homepage-gallery.spec.js --headed

# 4. Update selectors, re-run until green
# 5. Move to next test file
# 6. Repeat until all tests pass
```

### Manual Testing Session

1. **Open browser to development site**
2. **Follow accessibility checklist** ([docs/accessibility-checklist.md](docs/accessibility-checklist.md))
3. **Test with keyboard only** (unplug mouse)
4. **Test with screen reader** (NVDA/VoiceOver)
5. **Test on mobile** (use browser DevTools)
6. **Document findings** in QA report

---

## 📊 Deliverables You'll Provide

### At Midpoint Review

1. **Test Status Report**
   - How many tests passing
   - What needs to be fixed
   - Blockers identified

2. **Initial Accessibility Findings**
   - Critical issues found
   - Recommendations

### At Final Review

1. **Complete QA Report** ([docs/qa-report.md](docs/qa-report.md))
   - All test results
   - Lighthouse scores
   - Bundle sizes
   - Accessibility audit
   - Known issues

2. **Test Execution Evidence**
   - Screenshots of passing tests
   - Lighthouse report files
   - Accessibility scan results

3. **Sign-Off**
   - Approved for production OR
   - List of items that must be fixed before launch

---

## 🎓 Learning Resources

### Playwright
- [Official Docs](https://playwright.dev)
- [Best Practices](https://playwright.dev/docs/best-practices)
- [Debugging Guide](https://playwright.dev/docs/debug)

### Accessibility
- [WCAG 2.1 Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM](https://webaim.org/)
- [A11y Project Checklist](https://www.a11yproject.com/checklist/)

### Lighthouse
- [Lighthouse Docs](https://developer.chrome.com/docs/lighthouse/)
- [Web Vitals](https://web.dev/vitals/)

---

## ❓ Common Questions

### Q: What if the site isn't built yet?
**A:** You've done all you can! The tests are ready. When the site is built, you'll update selectors and run tests.

### Q: What if tests fail when I first run them?
**A:** Expected! You need to update selectors to match actual HTML. Use `--headed` mode to see what's happening.

### Q: Do I need to modify the CI/CD workflow?
**A:** No, it's ready to go. Once tests pass locally, they'll pass in CI.

### Q: What if I find accessibility issues?
**A:** Document them in the QA report with severity levels. Critical issues must be fixed before launch.

### Q: How do I know if performance is good enough?
**A:** Run Lighthouse CI. Scores should meet the budgets defined in `lighthouserc.js`.

---

## 📞 Getting Help

### If You're Stuck

1. **Review test comments** - Each test explains what it's checking
2. **Check AI usage docs** - Shows how tests were generated
3. **Read Playwright docs** - Official documentation is excellent
4. **Ask the team** - Share specific error messages

### Red Flags to Escalate

- Site doesn't meet accessibility minimums (WCAG AA)
- Performance scores below 70
- Critical security vulnerabilities
- Major functionality not working
- No cookie consent implementation

---

## ✅ Success Criteria

You'll know you're done when:

- [ ] All 49 automated tests pass
- [ ] Lighthouse scores meet budgets
- [ ] Bundle sizes within limits
- [ ] Manual accessibility audit complete
- [ ] QA report filled out
- [ ] Known issues documented
- [ ] CI/CD pipeline passing
- [ ] Sign-off provided

---

## 🎉 You're Ready!

You have:
- ✅ Professional-grade test infrastructure
- ✅ Comprehensive documentation
- ✅ Clear next steps
- ✅ All QA deliverables prepared

**Your main job now:** Wait for the site to be built, then update and run tests!

Good luck! 🚀

---

**Document Version:** 1.0  
**For Questions:** Reference this document and the docs/ folder  
**Last Updated:** December 17, 2025
