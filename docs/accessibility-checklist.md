# Accessibility Testing Checklist - MyWebClass.org

**Project:** MyWebClass.org - Design Styles Gallery  
**Standard:** WCAG 2.1 Level AA  
**Last Updated:** December 17, 2025

---

## Quick Reference Guide

### Testing Priority

1. 🔴 **Critical (Must Fix):** Blocks users from completing tasks
2. 🟠 **High (Should Fix):** Significant usability issues
3. 🟡 **Medium (Nice to Fix):** Minor inconveniences
4. 🟢 **Low (Enhancement):** Improvements for better experience

---

## 1. Keyboard Accessibility

### 1.1 Navigation Testing

| Test | How to Test | Expected Result | Status | Priority |
|------|-------------|-----------------|--------|----------|
| All interactive elements reachable | Tab through entire page | Every link, button, form field, and control can receive focus | ⏳ | 🔴 Critical |
| Logical tab order | Tab sequentially | Focus moves in a meaningful order (left-to-right, top-to-bottom) | ⏳ | 🔴 Critical |
| No keyboard traps | Tab through, try to leave each element | Can always move focus forward/backward | ⏳ | 🔴 Critical |
| Skip links present | Press Tab on page load | "Skip to main content" link appears | ⏳ | 🟠 High |
| Skip links functional | Activate skip link | Focus moves to main content | ⏳ | 🟠 High |

**Manual Test Procedure:**
```
1. Disconnect mouse/trackpad
2. Press Tab key to move forward
3. Press Shift+Tab to move backward
4. Document any unreachable elements
5. Note any illogical tab order
```

---

### 1.2 Focus Indicators

| Test | How to Test | Expected Result | Status | Priority |
|------|-------------|-----------------|--------|----------|
| Focus visible on all elements | Tab to each interactive element | Clear visual indicator (outline, border, background change) | ⏳ | 🔴 Critical |
| Focus contrast ratio | Check focus indicator color | 3:1 contrast ratio against background | ⏳ | 🔴 Critical |
| Focus not hidden | Tab through styled components | Focus indicator not removed by CSS | ⏳ | 🔴 Critical |
| Custom focus styles | Review custom focus indicators | As visible as browser default | ⏳ | 🟠 High |

**CSS Check:**
```css
/* ❌ Never do this */
*:focus { outline: none; }

/* ✅ Always provide alternative */
*:focus { 
  outline: 2px solid #0066cc; 
  outline-offset: 2px;
}
```

---

### 1.3 Keyboard Interactions

| Component | Keyboard Action | Expected Behavior | Status | Priority |
|-----------|-----------------|-------------------|--------|----------|
| Links | Enter | Activates link | ⏳ | 🔴 Critical |
| Buttons | Enter or Space | Activates button | ⏳ | 🔴 Critical |
| Checkboxes | Space | Toggles checked state | ⏳ | 🔴 Critical |
| Radio buttons | Arrow keys | Selects option in group | ⏳ | 🔴 Critical |
| Dropdowns/Selects | Arrow keys | Navigate options | ⏳ | 🔴 Critical |
| Modal dialogs | Tab | Focus trapped within modal | ⏳ | 🔴 Critical |
| Modal dialogs | Esc | Closes modal | ⏳ | 🟠 High |
| Tabs (component) | Arrow keys | Navigate between tabs | ⏳ | 🟠 High |
| Tabs (component) | Enter/Space | Activate tab | ⏳ | 🟠 High |

---

## 2. Screen Reader Accessibility

### 2.1 Screen Reader Testing Tools

- **Windows:** NVDA (free), JAWS (commercial)
- **macOS:** VoiceOver (built-in)
- **Linux:** Orca (free)
- **iOS:** VoiceOver (built-in)
- **Android:** TalkBack (built-in)

### 2.2 Screen Reader Checklist

| Test | How to Test | Expected Result | Status | Priority |
|------|-------------|-----------------|--------|----------|
| Page title announced | Navigate to page | Page title read aloud | ⏳ | 🔴 Critical |
| Landmarks identified | Navigate by landmarks | Header, nav, main, footer recognized | ⏳ | 🔴 Critical |
| Headings navigable | Navigate by headings | Can jump between h1, h2, h3, etc. | ⏳ | 🔴 Critical |
| Images have alt text | Navigate by images | All images described or marked decorative | ⏳ | 🔴 Critical |
| Links have context | Navigate by links | Link purpose clear from text alone | ⏳ | 🔴 Critical |
| Form labels announced | Navigate form | Each field has associated label | ⏳ | 🔴 Critical |
| Form errors announced | Submit invalid form | Error messages read aloud | ⏳ | 🔴 Critical |
| Button purposes clear | Navigate by buttons | Button text describes action | ⏳ | 🔴 Critical |
| Lists recognized | Navigate by lists | Lists properly identified | ⏳ | 🟠 High |
| Tables navigable | Navigate by table | Headers and data cells associated | ⏳ | 🟠 High |
| Dynamic updates announced | Trigger dynamic change | Changes announced via live regions | ⏳ | 🟠 High |

**NVDA Testing Commands:**
- `Insert + N` - Open NVDA menu
- `H` - Next heading
- `Shift + H` - Previous heading
- `K` - Next link
- `B` - Next button
- `F` - Next form field
- `D` - Next landmark
- `Insert + F7` - Elements list

---

### 2.3 Semantic HTML Checklist

| Element | Requirement | Status | Priority |
|---------|-------------|--------|----------|
| `<header>` | Page header or section headers | ⏳ | 🟠 High |
| `<nav>` | Main navigation, breadcrumbs | ⏳ | 🔴 Critical |
| `<main>` | One per page, contains primary content | ⏳ | 🔴 Critical |
| `<article>` | Self-contained content (gallery items) | ⏳ | 🟠 High |
| `<section>` | Thematic groupings with headings | ⏳ | 🟡 Medium |
| `<aside>` | Supplementary content | ⏳ | 🟡 Medium |
| `<footer>` | Page or section footer | ⏳ | 🟠 High |
| `<button>` | Interactive actions | ⏳ | 🔴 Critical |
| `<a>` | Navigation/links | ⏳ | 🔴 Critical |

---

## 3. Visual Accessibility

### 3.1 Color Contrast

**Tool:** [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

| Element Type | Minimum Ratio | Test Status | Status | Priority |
|--------------|---------------|-------------|--------|----------|
| Normal text (<18pt) | 4.5:1 | ⏳ Pending | ⏳ | 🔴 Critical |
| Large text (≥18pt) | 3:1 | ⏳ Pending | ⏳ | 🔴 Critical |
| UI components (buttons, inputs) | 3:1 | ⏳ Pending | ⏳ | 🔴 Critical |
| Graphical objects | 3:1 | ⏳ Pending | ⏳ | 🔴 Critical |
| Focus indicators | 3:1 | ⏳ Pending | ⏳ | 🔴 Critical |

**Manual Testing Steps:**
```
1. Use browser DevTools color picker
2. Sample foreground color
3. Sample background color
4. Enter values in contrast checker
5. Verify ratio meets requirements
6. Document failing combinations
```

---

### 3.2 Color-Independent Information

| Test | How to Test | Expected Result | Status | Priority |
|------|-------------|-----------------|--------|----------|
| Form validation not color-only | Submit invalid form | Errors indicated with icons/text, not just red color | ⏳ | 🔴 Critical |
| Required fields not color-only | Review form | Required marked with asterisk or label text | ⏳ | 🔴 Critical |
| Link distinction | View body text with links | Links distinguished by underline or other non-color method | ⏳ | 🟠 High |
| Charts/graphs accessible | View data visualizations | Patterns, labels, or legends supplement color | ⏳ | 🟠 High |
| Status indicators | Check success/error states | Icons or text supplement color coding | ⏳ | 🟠 High |

**Test with Grayscale:**
```
Chrome DevTools > Rendering > Emulate vision deficiencies > Achromatopsia
```

---

### 3.3 Text Sizing and Zoom

| Test | How to Test | Expected Result | Status | Priority |
|------|-------------|-----------------|--------|----------|
| 200% zoom functional | Zoom to 200% | All content visible, no horizontal scroll | ⏳ | 🔴 Critical |
| Text resizing | Increase browser text size | Text increases without breaking layout | ⏳ | 🔴 Critical |
| No text in images | Review all images | Textual content is actual text, not images | ⏳ | 🟠 High |
| Minimum font size | Check smallest text | At least 12px (16px recommended) | ⏳ | 🟡 Medium |

**Browser Zoom Test:**
```
1. Press Ctrl/Cmd + (zoom in to 200%)
2. Verify all content accessible
3. Check no horizontal scrolling
4. Verify no overlapping content
5. Test at 150%, 200%, 300%
```

---

### 3.4 Motion and Animation

| Test | How to Test | Expected Result | Status | Priority |
|------|-------------|-----------------|--------|----------|
| `prefers-reduced-motion` respected | Enable in OS settings | Animations disabled or simplified | ⏳ | 🟠 High |
| No auto-playing video | Load page | No videos play automatically | ⏳ | 🟠 High |
| Pause controls present | If animations/video present | User can pause/stop | ⏳ | 🟠 High |
| No seizure triggers | Review animations | No flashing more than 3 times per second | ⏳ | 🔴 Critical |

**CSS Implementation:**
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 4. Form Accessibility

### 4.1 Form Labels and Instructions

| Test | How to Test | Expected Result | Status | Priority |
|------|-------------|-----------------|--------|----------|
| All inputs have labels | Inspect each form field | Every input has associated `<label>` | ⏳ | 🔴 Critical |
| Labels properly associated | Check `for` and `id` attributes | `<label for="field">` matches `<input id="field">` | ⏳ | 🔴 Critical |
| Placeholder not sole label | Check inputs with placeholders | Placeholder supplements label, not replaces | ⏳ | 🔴 Critical |
| Required fields indicated | Review form | * or "(required)" in label | ⏳ | 🔴 Critical |
| Instructions provided | Check complex fields | Clear guidance before or with field | ⏳ | 🟠 High |
| Group labels for related fields | Check radio/checkbox groups | `<fieldset>` with `<legend>` | ⏳ | 🟠 High |

**Good Example:**
```html
<label for="email">Email Address *</label>
<input type="email" id="email" name="email" required 
       aria-required="true" aria-describedby="email-hint">
<span id="email-hint">We'll never share your email.</span>
```

---

### 4.2 Form Validation and Error Handling

| Test | How to Test | Expected Result | Status | Priority |
|------|-------------|-----------------|--------|----------|
| Errors clearly identified | Submit invalid form | Error messages visible and specific | ⏳ | 🔴 Critical |
| Errors announced to screen readers | Use screen reader | Errors read aloud (`aria-live` or focus) | ⏳ | 🔴 Critical |
| Error location clear | Submit form with errors | Can easily find which fields have errors | ⏳ | 🔴 Critical |
| Error messages descriptive | Trigger each validation | Messages explain what's wrong and how to fix | ⏳ | 🟠 High |
| Errors associated with fields | Inspect HTML | `aria-describedby` links error to field | ⏳ | 🟠 High |
| Success confirmation | Submit valid form | Clear success message | ⏳ | 🟠 High |

**Error Message Pattern:**
```html
<label for="email">Email *</label>
<input type="email" id="email" aria-describedby="email-error" aria-invalid="true">
<span id="email-error" role="alert">
  Please enter a valid email address (e.g., name@example.com)
</span>
```

---

### 4.3 Form Interaction

| Test | How to Test | Expected Result | Status | Priority |
|------|-------------|-----------------|--------|----------|
| Keyboard accessible | Tab through form | Can reach and interact with all fields | ⏳ | 🔴 Critical |
| Logical tab order | Tab sequentially | Order matches visual layout | ⏳ | 🔴 Critical |
| Submit button accessible | Use keyboard | Can activate submit with Enter or Space | ⏳ | 🔴 Critical |
| Autocomplete attributes | Check input types | `autocomplete` for name, email, etc. | ⏳ | 🟡 Medium |
| No timeout issues | Test form filling | Adequate time to complete | ⏳ | 🟠 High |

---

## 5. Content Accessibility

### 5.1 Heading Structure

| Test | How to Test | Expected Result | Status | Priority |
|------|-------------|-----------------|--------|----------|
| One H1 per page | Inspect HTML | Exactly one `<h1>` | ⏳ | 🔴 Critical |
| Logical hierarchy | Review heading levels | No skipping levels (h1→h2→h3, not h1→h3) | ⏳ | 🔴 Critical |
| Headings describe content | Read headings alone | Page structure understandable | ⏳ | 🟠 High |
| Visual headings use heading tags | Check styled "headings" | Styled text uses `<h2>-<h6>`, not `<p class="heading">` | ⏳ | 🟠 High |

**Heading Outline Test:**
```
H1: MyWebClass - Design Gallery
  H2: Featured Design Styles
    H3: Swiss Design
    H3: Bauhaus
  H2: Submit Your Design
  H2: About
```

---

### 5.2 Links

| Test | How to Test | Expected Result | Status | Priority |
|------|-------------|-----------------|--------|----------|
| Link purpose clear | Read link text alone | Understand destination without context | ⏳ | 🔴 Critical |
| No "click here" or "read more" | Search for generic text | Links are descriptive | ⏳ | 🟠 High |
| External links indicated | Check links to other sites | Icon or text indicates new window/site | ⏳ | 🟡 Medium |
| Links distinguishable | View links in text | Visually distinct (underline, bold, etc.) | ⏳ | 🟠 High |
| Link hover states | Hover over links | Visual feedback provided | ⏳ | 🟡 Medium |

**Good vs Bad Examples:**
```html
<!-- ❌ Bad -->
<a href="/privacy">Click here</a> for our privacy policy

<!-- ✅ Good -->
Read our <a href="/privacy">privacy policy</a>

<!-- ❌ Bad -->
<a href="/demo">Read more</a>

<!-- ✅ Good -->
<a href="/demo">View Swiss Design demo</a>
```

---

### 5.3 Images

| Test | How to Test | Expected Result | Status | Priority |
|------|-------------|-----------------|--------|----------|
| All images have alt text | Check `alt` attribute | Every `<img>` has `alt` | ⏳ | 🔴 Critical |
| Alt text meaningful | Read alt text | Describes image content or function | ⏳ | 🔴 Critical |
| Decorative images marked | Check decorative images | `alt=""` for images that convey no info | ⏳ | 🔴 Critical |
| Complex images described | Check infographics/charts | Longer description provided | ⏳ | 🟠 High |
| Alt text not redundant | Check images with captions | Alt doesn't repeat caption exactly | ⏳ | 🟡 Medium |
| SVG accessibility | Check SVG images | `role="img"` and `<title>` present | ⏳ | 🟠 High |

**Alt Text Guidelines:**
```html
<!-- Informative image -->
<img src="bauhaus.jpg" alt="Bauhaus design demo showing geometric shapes">

<!-- Functional image (link/button) -->
<a href="/submit">
  <img src="plus.svg" alt="Submit new design">
</a>

<!-- Decorative image -->
<img src="decoration.png" alt="">

<!-- Complex image -->
<img src="chart.png" alt="Bar chart of design styles" 
     aria-describedby="chart-details">
<div id="chart-details">
  Detailed description of chart data...
</div>
```

---

### 5.4 Tables

| Test | How to Test | Expected Result | Status | Priority |
|------|-------------|-----------------|--------|----------|
| Data tables have headers | Check `<th>` elements | Column/row headers marked | ⏳ | 🔴 Critical |
| Headers associated | Check `scope` attribute | `scope="col"` or `scope="row"` | ⏳ | 🟠 High |
| Table caption present | Check for `<caption>` | Table purpose described | ⏳ | 🟠 High |
| Complex tables accessible | Check multi-level headers | `id`/`headers` attributes used | ⏳ | 🟠 High |
| No layout tables | Review table usage | Tables only for data, not layout | ⏳ | 🟡 Medium |

**Accessible Table:**
```html
<table>
  <caption>Design Style Submissions</caption>
  <thead>
    <tr>
      <th scope="col">Student Name</th>
      <th scope="col">Style</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>Bauhaus</td>
      <td>Approved</td>
    </tr>
  </tbody>
</table>
```

---

## 6. Interactive Component Accessibility

### 6.1 Modal Dialogs

| Test | How to Test | Expected Result | Status | Priority |
|------|-------------|-----------------|--------|----------|
| Focus trapped in modal | Tab through modal | Focus stays within modal | ⏳ | 🔴 Critical |
| Esc key closes modal | Press Esc | Modal closes | ⏳ | 🟠 High |
| Focus returns on close | Close modal | Focus returns to trigger element | ⏳ | 🟠 High |
| ARIA attributes present | Inspect HTML | `role="dialog"`, `aria-modal="true"`, `aria-labelledby` | ⏳ | 🔴 Critical |
| Background not interactive | Try clicking background | Background inert while modal open | ⏳ | 🟠 High |
| Close button accessible | Navigate with keyboard | Can reach and activate close button | ⏳ | 🔴 Critical |

---

### 6.2 Dropdown Menus

| Test | How to Test | Expected Result | Status | Priority |
|------|-------------|-----------------|--------|----------|
| Keyboard accessible | Use arrow keys | Can navigate menu items | ⏳ | 🔴 Critical |
| Esc closes menu | Press Esc | Menu closes | ⏳ | 🟠 High |
| ARIA attributes | Inspect HTML | `aria-expanded`, `aria-haspopup` | ⏳ | 🟠 High |
| Visual indicator | Review design | Shows when menu is open | ⏳ | 🟡 Medium |

---

### 6.3 Tabs Component

| Test | How to Test | Expected Result | Status | Priority |
|------|-------------|-----------------|--------|----------|
| Arrow key navigation | Use arrow keys | Navigate between tabs | ⏳ | 🟠 High |
| Enter/Space activates | Press Enter on tab | Activates tab and shows panel | ⏳ | 🔴 Critical |
| ARIA tablist pattern | Inspect HTML | `role="tablist"`, `role="tab"`, `role="tabpanel"` | ⏳ | 🟠 High |
| `aria-selected` state | Check active tab | `aria-selected="true"` on active | ⏳ | 🟠 High |
| Tab panel associated | Check relationships | `aria-controls` and `id` match | ⏳ | 🟠 High |

---

### 6.4 Accordions

| Test | How to Test | Expected Result | Status | Priority |
|------|-------------|-----------------|--------|----------|
| Button accessible | Tab to headers | Each header is focusable button | ⏳ | 🔴 Critical |
| Enter/Space toggles | Press Enter | Opens/closes panel | ⏳ | 🔴 Critical |
| `aria-expanded` state | Inspect HTML | Changes between `true` and `false` | ⏳ | 🟠 High |
| Panel associated | Check relationships | `aria-controls` links button to panel | ⏳ | 🟠 High |

---

## 7. ARIA Usage Review

### 7.1 ARIA Best Practices

| Principle | Guideline | Status | Priority |
|-----------|-----------|--------|----------|
| Use semantic HTML first | Prefer `<button>` over `<div role="button">` | ⏳ | 🔴 Critical |
| No redundant ARIA | Don't add `role="button"` to `<button>` | ⏳ | 🟠 High |
| All ARIA roles supported | Verify role validity | ⏳ | 🔴 Critical |
| ARIA states dynamic | Update states on interaction | ⏳ | 🔴 Critical |

### 7.2 Common ARIA Patterns to Check

| Component | Required ARIA | Status |
|-----------|---------------|--------|
| Custom button | `role="button"`, `tabindex="0"` | ⏳ |
| Checkbox | `role="checkbox"`, `aria-checked` | ⏳ |
| Alert | `role="alert"` or `aria-live="polite"` | ⏳ |
| Navigation | `role="navigation"` or `<nav>` | ⏳ |
| Search | `role="search"` on form | ⏳ |

---

## 8. Mobile Accessibility

### 8.1 Touch Target Size

| Test | How to Test | Expected Result | Status | Priority |
|------|-------------|-----------------|--------|----------|
| Minimum size 44x44px | Measure tap targets | All interactive elements ≥44x44px | ⏳ | 🔴 Critical |
| Adequate spacing | Test closely placed buttons | Enough space to avoid accidental taps | ⏳ | 🟠 High |
| Touch-friendly forms | Test on mobile | Large inputs, adequate spacing | ⏳ | 🟠 High |

---

### 8.2 Mobile Screen Reader Testing

| Test | Device | Screen Reader | Status |
|------|--------|---------------|--------|
| iOS testing | iPhone/iPad | VoiceOver | ⏳ |
| Android testing | Android device | TalkBack | ⏳ |
| Swipe gestures work | Mobile | Navigate by swiping | ⏳ |
| Zoom doesn't break layout | Mobile | Pinch to zoom | ⏳ |

---

## 9. Automated Testing Tools

### 9.1 Browser Extensions

- **axe DevTools** (Chrome/Firefox)
- **WAVE** (Chrome/Firefox)  
- **Lighthouse** (Chrome DevTools)
- **Accessibility Insights** (Chrome/Edge)

### 9.2 Automated Test Results

| Tool | Tests Run | Issues Found | Status |
|------|-----------|--------------|--------|
| axe-core (automated) | ⏳ | - | ⏳ Pending |
| Lighthouse | ⏳ | - | ⏳ Pending |
| WAVE | ⏳ | - | ⏳ Pending |

**Note:** Automated tools catch ~30% of accessibility issues. Manual testing is essential.

---

## 10. Testing Sign-Off

### Checklist Completion

- [ ] Keyboard accessibility testing completed
- [ ] Screen reader testing completed (NVDA/VoiceOver)
- [ ] Color contrast verified
- [ ] Form accessibility verified
- [ ] Content structure reviewed
- [ ] Interactive components tested
- [ ] ARIA implementation reviewed
- [ ] Mobile accessibility tested
- [ ] Automated tools run
- [ ] Issues documented and prioritized

### Tester Information

**Tested By:** [Name]  
**Date:** [Date]  
**Environment:** [OS, Browser, Screen Reader]  
**Overall Status:** ⏳ In Progress / ✅ Approved / ❌ Issues Found

---

## Resources

- WCAG 2.1 Guidelines: https://www.w3.org/WAI/WCAG21/quickref/
- ARIA Authoring Practices: https://www.w3.org/WAI/ARIA/apg/
- WebAIM Articles: https://webaim.org/articles/
- A11y Project Checklist: https://www.a11yproject.com/checklist/
- Deque University: https://dequeuniversity.com/

---

**Document Version:** 1.0  
**Last Updated:** December 17, 2025
