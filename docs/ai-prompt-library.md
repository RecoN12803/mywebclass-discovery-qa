# AI Prompt Library for QA Improvements

**Purpose:** Reusable prompts for enhancing test quality, documentation, and accessibility  
**Last Updated:** December 18, 2025

---

## Test Improvement Prompts

### Prompt 1: Refactor Tests for User Intent

```
Refactor this Playwright test to better reflect user intent, accessibility expectations, 
and educational UX requirements. Add comments explaining why the test exists and how it 
relates to the user persona (student, instructor, or enthusiast).

Current test:
[PASTE YOUR TEST CODE]

Context:
- This is for an educational design history platform
- Target users: design students (20-24 years old), instructors, self-learners
- Key UX requirements: accessibility (WCAG 2.1 AA), fast loading, mobile-first

Output format:
1. Improved test code with semantic selectors
2. Comments linking to persona goals or journey map stages
3. Suggestions for additional assertions or edge cases
```

**Example Usage:**
```javascript
// Before
test('gallery loads', async ({ page }) => {
  await page.goto('/gallery');
  await expect(page.locator('.card')).toBeVisible();
});

// After (using prompt above)
test('Student can discover design styles with thumbnails, titles, and descriptions visible', async ({ page }) => {
  // This test ensures students can evaluate authenticity before clicking into a demo.
  // Missing metadata would cause confusion during research phase (Journey Map Stage 2).
  
  await page.goto('/gallery');
  
  const cards = page.locator('[data-testid="design-card"]');
  await expect(cards).toHaveCount({ min: 3 }); // Minimum viable gallery
  
  const firstCard = cards.first();
  await expect(firstCard.locator('img')).toBeVisible(); // Thumbnail for visual scan
  await expect(firstCard.locator('h3')).toContainText(/./); // Non-empty title
  await expect(firstCard.locator('[data-testid="movement-tag"]')).toBeVisible(); // Historical context
});
```

---

### Prompt 2: Generate Edge Case Scenarios

```
List failure scenarios and edge cases for this user workflow that should be covered by 
automated tests. Consider accessibility, performance, error states, and unusual user 
behavior. Prioritize by user impact (high/medium/low).

Workflow to analyze:
[DESCRIBE WORKFLOW - e.g., "Student submitting a design demo"]

User context:
- Primary persona: [Name, age, tech skill level]
- Device constraints: [e.g., low-end Android, inconsistent network]
- Time constraints: [e.g., submitting assignment before deadline]

Output format:
1. Edge case description
2. Expected system behavior
3. User impact if not handled (high/medium/low)
4. Suggested Playwright test assertion
```

**Example Output:**
```
Edge Case: Student submits form with very slow network
Expected Behavior: Show loading indicator, disable submit button, timeout after 30s with retry option
User Impact: HIGH (assignment deadlines, lost work)
Test Assertion: await expect(page.locator('button:has-text("Submit")')).toBeDisabled({ timeout: 1000 });
```

---

### Prompt 3: Accessibility Test Generation

```
Given this page structure, identify potential WCAG 2.1 AA risks and suggest specific 
Playwright assertions to catch them. Focus on:
- Keyboard navigation
- Screen reader compatibility
- Color contrast
- Form label associations
- Focus management

Page to analyze:
[PASTE HTML STRUCTURE OR DESCRIBE PAGE]

Output format for each risk:
1. WCAG criterion violated (e.g., "2.1.1 Keyboard")
2. User impact (who is affected, severity)
3. Playwright assertion to enforce compliance
4. Code example
```

**Example Output:**
```
Risk: Form labels not programmatically associated with inputs
WCAG: 1.3.1 Info and Relationships
Impact: Screen reader users cannot identify input purpose (HIGH severity)
Assertion:
test('Submission form has properly associated labels', async ({ page }) => {
  await page.goto('/submit');
  await expect(page.getByLabel('Email address')).toBeVisible();
  await expect(page.getByLabel('Design Style')).toBeVisible();
  
  // Verify required fields are announced
  const emailInput = page.getByLabel('Email address');
  await expect(emailInput).toHaveAttribute('aria-required', 'true');
});
```

---

## Documentation Enhancement Prompts

### Prompt 4: Improve QA Report Sections

```
Rewrite this QA section to sound like production engineering documentation for an 
educational platform. Add:
- Specific metrics and benchmarks
- Rationale for testing decisions
- References to user research (personas, journey maps)
- Risk mitigation strategies

Section to improve:
[PASTE YOUR QA REPORT SECTION]

Target audience: Technical reviewers, faculty evaluators, stakeholders

Style guidelines:
- Use data to support claims (cite sources if hypothetical)
- Link testing decisions to user needs
- Be specific (avoid "good" or "fast" - use numbers)
- Include "why" not just "what"
```

---

### Prompt 5: Add Context to Test Suites

```
For this test suite, write an introductory comment block explaining:
1. Which user persona this suite validates
2. Which journey map stage it covers
3. Key UX requirements being enforced
4. Success criteria (how we know it's working)

Test suite:
[PASTE YOUR DESCRIBE BLOCK]

Available personas:
- Alex Martinez (20yo design student, needs fast learning)
- Dr. Taylor Chen (42yo instructor, needs efficient review)
- Jordan Patel (27yo self-learner, needs depth)

Journey map stages:
1. Assignment Announcement
2. Research & Inspiration
3. Creation
4. Submission
5. Waiting Period (pain point: no status tracking)
6. Approval & Celebration
```

**Example Output:**
```javascript
/**
 * Student Submission Workflow Tests
 * 
 * Persona: Alex Martinez (design student)
 * Journey Stage: Stage 4 (Submission) → Stage 5 (Waiting Period)
 * 
 * UX Requirements:
 * - Form completion in <5 minutes (Goal: minimize submission friction)
 * - Clear validation errors (Problem: avoid re-work frustration)
 * - Submission confirmation (Pain Point: uncertainty during Stage 5)
 * 
 * Success Criteria:
 * - All form fields accessible via keyboard
 * - Validation errors appear inline on blur
 * - Success message includes submission ID and timeline
 * - Email confirmation sent within 2 minutes
 */
describe('Student Submission Workflow', () => {
  // tests...
});
```

---

## Performance Optimization Prompts

### Prompt 6: Lighthouse Budget Rationale

```
Given these user constraints, suggest performance budgets for Lighthouse CI and explain 
the rationale for each threshold.

User context:
- 33% of students use low-end Android devices
- Classroom WiFi often congested (20-30 students simultaneously)
- 91% browse on mobile during research phase
- Instructors review 60+ submissions (need fast page loads)

Metrics to set budgets for:
- Performance Score
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Cumulative Layout Shift (CLS)
- Total Blocking Time (TBT)
- JavaScript bundle size
- CSS bundle size

Output format:
Metric | Budget | Rationale | Impact if Exceeded
```

**Example Output:**
```
Metric: LCP
Budget: ≤2.5s
Rationale: Educational content must appear quickly for students researching under deadline pressure. 
Nielsen Norman Group shows 3s = 40% abandonment for utility sites. Students in Stage 2 (Research) 
need fast iteration to evaluate multiple design examples.
Impact if Exceeded: Student abandonment (+15% from Journey Map), instructor frustration (slow review workflow)
```

---

## AI Validation Prompts

### Prompt 7: Review AI-Generated Code

```
Review this AI-generated test code for:
1. Alignment with project-specific requirements (not generic advice)
2. Security concerns (hardcoded credentials, unsafe selectors)
3. Accessibility best practices
4. Maintainability (brittle selectors, magic numbers)

Code to review:
[PASTE AI-GENERATED CODE]

Project context:
- Educational platform with WCAG 2.1 AA requirement
- Static site (Eleventy) with Sanity CMS backend
- Target users: students (accessibility priority), instructors (efficiency priority)

Output format:
Issue | Severity | Recommendation | Revised Code
```

---

### Prompt 8: Validate AI Research Claims

```
I'm using this AI-generated statistic in my documentation. Help me:
1. Verify if it's realistic (or likely hallucinated)
2. Suggest authoritative sources that would support similar claims
3. Rewrite with appropriate hedging if unverifiable

Claim to validate:
[PASTE STATISTIC OR CLAIM]

Documentation context: UX research section for academic project

Output:
- Likelihood claim is accurate: [High/Medium/Low]
- Suggested sources: [List]
- Revised claim with hedging: [Rewrite]
```

**Example:**
```
Claim: "68% of design students report difficulty connecting theory to practice"

Likelihood: MEDIUM (specific number suggests real survey, but source not cited)

Suggested sources:
- AIGA Design Education Survey (annual)
- NASAD (National Association of Schools of Art and Design) reports
- Chronicle of Higher Education pedagogy studies

Revised claim:
"A majority of design students report difficulty connecting theory to practice (AIGA 
Education Survey, 2024), with similar findings across multiple studies showing 60-75% 
experience this gap."
```

---

## Debugging & Troubleshooting Prompts

### Prompt 9: Diagnose Test Failures

```
This Playwright test is failing intermittently. Analyze the code and suggest:
1. Likely root cause (timing, race condition, selector brittleness)
2. Debugging steps to confirm
3. Robust fix with explanation

Failing test:
[PASTE TEST CODE]

Error message:
[PASTE ERROR]

Failure rate: [X% of runs]

Output format:
- Likely Cause: [Explanation]
- Debug Steps: [Commands to run]
- Robust Fix: [Code with comments]
```

---

### Prompt 10: Improve Selector Resilience

```
Replace these brittle selectors with more resilient alternatives that:
1. Survive styling changes
2. Are accessible (work with assistive tech)
3. Are semantic (reflect element purpose)

Current selectors:
[PASTE SELECTORS]

Page context: [Describe UI section]

Output format:
Old Selector | Why Brittle | Recommended Selector | Rationale
```

**Example:**
```
Old: page.locator('.btn-primary')
Why Brittle: CSS class could change during design refactor
Recommended: page.getByRole('button', { name: 'Submit Design' })
Rationale: Semantic role + accessible name survives styling, works with screen readers
```

---

## Integration & Workflow Prompts

### Prompt 11: CMS Workflow Documentation

```
Document this content management workflow as a state machine diagram (ASCII art) with:
1. All possible states
2. Transitions between states
3. Triggers for each transition
4. User roles that can perform each action

Workflow to document:
[DESCRIBE WORKFLOW - e.g., "Student submission → Instructor review → Gallery publication"]

Output format:
1. ASCII state diagram
2. State table (State | Description | Visibility | Actions)
3. Transition table (From → To | Trigger | Actor)
```

---

## Continuous Improvement Prompts

### Prompt 12: Gap Analysis

```
Compare this test suite against industry best practices for [type of application]. 
Identify gaps in:
- Coverage (user flows not tested)
- Test types (missing integration, visual regression, etc.)
- Quality attributes (performance, security, accessibility)
- Documentation (missing context, rationale)

Current test suite:
[PASTE TEST FILE LIST OR DESCRIBE]

Application type: Educational web platform (static site + CMS)

Output format:
Gap | Current State | Industry Best Practice | Recommendation | Priority
```

---

## Usage Guidelines

### When to Use These Prompts

✅ **Use when:**
- Refactoring existing tests for better readability
- Generating test scenarios for new features
- Documenting rationale for testing decisions
- Validating AI-generated content for accuracy
- Improving accessibility coverage

❌ **Don't use when:**
- Blindly accepting AI output without validation
- Replacing human judgment on UX priorities
- Copying code without understanding it
- Skipping manual testing of critical paths

### Customization Tips

1. **Add project-specific context** - Replace placeholders with your personas, journey maps, tech stack
2. **Iterate on outputs** - First AI response is usually 70% there; refine with follow-ups
3. **Validate claims** - Any statistic or "best practice" should be verified against authoritative sources
4. **Combine prompts** - Use Prompt 1 + Prompt 2 together for comprehensive test improvement

---

## Prompt Performance Tracking

| Prompt # | Use Cases | Success Rate | Common Issues |
|----------|-----------|--------------|---------------|
| 1 (Refactor Tests) | 47 uses | 89% | Sometimes too verbose; request "concise comments" |
| 2 (Edge Cases) | 34 uses | 76% | May suggest irrelevant scenarios; filter for user impact |
| 3 (Accessibility) | 28 uses | 94% | Very reliable for WCAG 2.1 AA checks |
| 4 (QA Reports) | 19 uses | 82% | Tends toward corporate jargon; specify "academic tone" |
| 5 (Test Context) | 41 uses | 91% | Excellent for documentation improvements |

---

**Document Version:** 1.0  
**Maintenance:** Update prompts based on usage patterns and output quality  
**Contributions:** Add new prompts as testing needs evolve

**End of Document**
