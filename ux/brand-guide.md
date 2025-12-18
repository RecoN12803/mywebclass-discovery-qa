# Brand Guide

**Project:** MyWebClass.org - Design History Gallery  
**Document Owner:** UX Team  
**Last Updated:** December 17, 2025  
**Purpose:** Define visual identity, design system, and brand guidelines

---

## Table of Contents

1. [Brand Overview](#brand-overview)
2. [Logo & Identity](#logo--identity)
3. [Color Palette](#color-palette)
4. [Typography](#typography)
5. [Iconography](#iconography)
6. [Photography & Imagery](#photography--imagery)
7. [UI Components](#ui-components)
8. [Spacing & Layout](#spacing--layout)
9. [Animation & Motion](#animation--motion)
10. [Voice & Tone](#voice--tone)
11. [Accessibility Standards](#accessibility-standards)
12. [Usage Guidelines](#usage-guidelines)

---

## Brand Overview

### Brand Positioning

**MyWebClass.org** is a **modern, museum-like digital platform** that bridges historical design education with contemporary web technology. Our brand reflects:

- **Educational Authority** - Credible, trusted resource for design history
- **Approachability** - Welcoming to students of all skill levels
- **Craftsmanship** - Attention to detail in design and code
- **Community** - Collaborative, student-centered learning

### Brand Personality

**If MyWebClass were a person:**
- **Knowledgeable but not pretentious** - Like a friendly museum docent, not a stuffy professor
- **Encouraging and supportive** - Celebrates student work, provides constructive feedback
- **Detail-oriented** - Appreciates good design and clean code
- **Inclusive** - Accessible to diverse learners and contributors

### Brand Attributes

| Attribute | Description | Visual Expression |
|-----------|-------------|-------------------|
| **Educational** | Purpose-built for learning | Clean layouts, clear hierarchy, explanatory text |
| **Minimal** | Content-first, distraction-free | Generous whitespace, simple UI, muted backgrounds |
| **Modern** | Contemporary web standards | Modern typography, CSS Grid, current tech stack |
| **Historical** | Respects design heritage | Nods to design movements in brand palette, classic typography |
| **Authentic** | Values genuine work | Real student projects, transparent review process |

---

## Logo & Identity

### Primary Logo

```
┌─────────────────────────────────────┐
│                                     │
│    MyWebClass                       │
│    ─────────────                    │
│    Design History Gallery           │
│                                     │
└─────────────────────────────────────┘
```

**Specifications:**
- **Wordmark:** "MyWebClass" in custom geometric sans-serif
- **Underline:** Single line beneath, inspired by Bauhaus underlines
- **Tagline:** "Design History Gallery" in lighter weight
- **Format:** SVG (scalable), PNG exports for social media

**Typography for Logo:**
- Primary: Custom geometric sans (inspired by Futura/Avant Garde)
- Weight: Bold for "MyWebClass", Regular for tagline
- Case: Mixed case (not all caps) for readability

**Color Variations:**
- **Primary:** Dark charcoal on white background
- **Reverse:** White on dark charcoal background
- **Monochrome:** Black or white for high contrast contexts

### Logo Usage

**Minimum Size:**
- Digital: 120px width minimum (maintains legibility)
- Print: 1 inch / 2.54cm width minimum

**Clear Space:**
- Minimum padding: Height of "M" in MyWebClass on all sides
- Never crowd logo with other elements

**Do's:**
- ✅ Use approved color variations
- ✅ Maintain aspect ratio
- ✅ Ensure sufficient contrast with background
- ✅ Use SVG format when possible

**Don'ts:**
- ❌ Stretch, skew, or rotate logo
- ❌ Change colors outside approved palette
- ❌ Add effects (drop shadows, gradients, outlines)
- ❌ Place on busy backgrounds (use lockup with background color block if needed)

### Favicon

```
┌───────┐
│  MW   │  ← Monogram "MW" in geometric sans
│       │     (MyWebClass)
└───────┘
```

**Specs:**
- 32x32px minimum
- Simple geometric letterforms
- Brand color on white or white on brand color

---

## Color Palette

### Primary Colors

#### Brand Primary (Deep Charcoal)
```
Name: Charcoal
Hex: #2C2C2C
RGB: 44, 44, 44
Usage: Primary text, logo, headings
WCAG AA: ✅ 4.5:1 on white backgrounds
```

#### Brand Accent (Museum Blue)
```
Name: Museum Blue
Hex: #0066CC
RGB: 0, 102, 204
Usage: Links, CTAs, interactive elements
WCAG AA: ✅ 4.5:1 on white backgrounds
Hover state: #0052A3 (darker)
```

#### Background Light (Off-White)
```
Name: Gallery White
Hex: #F8F8F8
RGB: 248, 248, 248
Usage: Page backgrounds, card backgrounds
Why off-white: Reduces eye strain, subtle warmth
```

### Secondary Colors (Movement-Inspired)

**Inspired by design history color theory**

#### Bauhaus Red
```
Hex: #E63946
RGB: 230, 57, 70
Usage: Bauhaus movement tags, accents
Historical reference: Primary colors in Bauhaus palette
```

#### Bauhaus Yellow
```
Hex: #F1C40F
RGB: 241, 196, 15
Usage: Bauhaus highlights, warning states
```

#### Swiss Gray
```
Hex: #95A5A6
RGB: 149, 165, 166
Usage: Muted text, borders, Swiss movement tags
Historical reference: Swiss International Style neutrality
```

#### Memphis Magenta
```
Hex: #E91E63
RGB: 233, 30, 99
Usage: Memphis movement tags, playful accents
Historical reference: Bold Memphis Group colors
```

### Functional Colors

#### Success Green
```
Hex: #27AE60
RGB: 39, 174, 96
Usage: Approval notifications, success states, checkmarks
WCAG AA: ✅ 3:1 on white
```

#### Error Red
```
Hex: #E74C3C
RGB: 231, 76, 60
Usage: Error messages, rejection states, required field indicators
WCAG AA: ✅ 3:1 on white
```

#### Warning Orange
```
Hex: #F39C12
RGB: 243, 156, 18
Usage: Warning messages, pending review states
WCAG AA: ✅ 3:1 on white
```

#### Info Blue
```
Hex: #3498DB
RGB: 52, 152, 219
Usage: Info messages, tooltips, help text
WCAG AA: ✅ 3:1 on white
```

### Grayscale Palette

```
Gray 900 (Darkest):  #1A1A1A (Primary text)
Gray 800:            #2C2C2C (Secondary text)
Gray 700:            #4D4D4D (Muted text)
Gray 600:            #666666 (Placeholder text)
Gray 500:            #808080 (Borders, dividers)
Gray 400:            #999999 (Disabled text)
Gray 300:            #CCCCCC (Light borders)
Gray 200:            #E5E5E5 (Backgrounds)
Gray 100:            #F2F2F2 (Subtle backgrounds)
White:               #FFFFFF (Cards, modals)
```

### Color Usage Guidelines

**Text on Backgrounds:**
- Dark text (#2C2C2C) on light backgrounds (#FFFFFF, #F8F8F8)
- Light text (#FFFFFF) on dark backgrounds (#2C2C2C)
- NEVER: Medium gray text on medium gray backgrounds (fails WCAG)

**Interactive Elements:**
- Primary CTA: Museum Blue (#0066CC)
- Secondary CTA: Transparent with Museum Blue border
- Hover states: Darken by 15% (multiply blend mode)
- Active states: Darken by 25%

**Movement Tags:**
- Bauhaus: Bauhaus Red (#E63946)
- Swiss: Swiss Gray (#95A5A6)
- Memphis: Memphis Magenta (#E91E63)
- Brutalism: Charcoal (#2C2C2C)
- Material: Info Blue (#3498DB)
- (Other movements: Assign from secondary palette)

---

## Typography

### Font Families

#### Primary Font: **Inter** (Sans-Serif)
```
Family: Inter
Designer: Rasmus Andersson
Type: Open source, variable font
Use: UI, body text, headings
```

**Why Inter:**
- Excellent screen readability at all sizes
- Open source (no licensing issues)
- Variable font support (flexible weights)
- Neutral, modern aesthetic
- Extensive character set (multilingual support)

**Weights Used:**
- 400 Regular (body text)
- 500 Medium (subheadings, emphasis)
- 600 Semi-Bold (headings, buttons)
- 700 Bold (H1, strong emphasis)

**Fallback Stack:**
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 
             Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
```

#### Secondary Font: **JetBrains Mono** (Monospace)
```
Family: JetBrains Mono
Type: Open source monospace
Use: Code snippets, technical details, URLs
```

**Why JetBrains Mono:**
- Designed for developers (ligatures, clarity)
- Open source
- Excellent distinction between similar characters (0/O, 1/l/I)

**Fallback Stack:**
```css
font-family: 'JetBrains Mono', 'Courier New', Courier, monospace;
```

### Type Scale

**Base:** 16px / 1rem (body text)

```
H1: 48px / 3rem       (Font: Inter Bold, Line-height: 1.2)
H2: 36px / 2.25rem    (Font: Inter Semi-Bold, Line-height: 1.3)
H3: 24px / 1.5rem     (Font: Inter Semi-Bold, Line-height: 1.4)
H4: 20px / 1.25rem    (Font: Inter Medium, Line-height: 1.5)
H5: 18px / 1.125rem   (Font: Inter Medium, Line-height: 1.5)

Body (Large): 18px / 1.125rem (Line-height: 1.6)
Body (Regular): 16px / 1rem   (Line-height: 1.6)
Body (Small): 14px / 0.875rem (Line-height: 1.5)

Caption: 12px / 0.75rem       (Line-height: 1.4)

Code: 14px / 0.875rem         (Font: JetBrains Mono, Line-height: 1.5)
```

### Typography Guidelines

**Headings:**
- **H1:** Page title only (one per page)
- **H2:** Major section headers
- **H3:** Subsection headers
- **H4:** Card titles, minor sections
- **No skipping levels** (H1 → H2 → H3, never H1 → H3)

**Body Text:**
- Default: 16px Inter Regular
- Line length: 60-75 characters (optimal readability)
- Paragraph spacing: 1.5rem between paragraphs
- First paragraph: No indent, subsequent: 1.5rem top margin

**Links:**
- Color: Museum Blue (#0066CC)
- Hover: Darker blue (#0052A3) + underline
- Visited: Same as default (maintain consistency)
- Focus: 3px outline, Museum Blue

**Emphasis:**
- **Bold:** `<strong>` or Inter Semi-Bold/Bold
- *Italic:* `<em>` (use sparingly, reduces readability)
- Underline: Reserved for links only

**Lists:**
- Bullet points: Use for unordered lists
- Numbers: Use for sequential steps
- Indentation: 1.5rem from left edge
- Spacing: 0.5rem between list items

---

## Iconography

### Icon Style

**Design Principles:**
- **Outlined style** (not filled) - Lighter, modern feel
- **2px stroke weight** - Balanced visibility
- **24x24px artboard** - Consistent sizing
- **Rounded corners** (2px radius) - Friendly, approachable
- **Pixel-perfect** - Aligned to pixel grid

**Color:**
- Default: Gray 700 (#4D4D4D)
- Hover/Active: Museum Blue (#0066CC)
- Disabled: Gray 400 (#999999)

### Icon Library (Essential Set)

**Navigation:**
- 🏠 Home
- 🎨 Gallery
- 📚 Movements
- ➕ Submit
- ℹ️ About

**Actions:**
- 🔍 Search
- 🔗 External Link
- ⬇️ Download
- ❤️ Favorite (optional)
- ✅ Approve
- ❌ Reject
- ✏️ Edit

**Filtering:**
- 🗂️ Filter
- 📅 Calendar (date range)
- 🏷️ Tag
- ⚡ Sort

**Social/Sharing (optional):**
- 🔗 Copy Link
- 📧 Email
- 🐦 Twitter
- 💼 LinkedIn

**Status:**
- ⏳ Pending
- ✅ Approved
- ❌ Rejected
- 🔄 In Review

### Icon Usage

**Size Variants:**
- Small: 16x16px (inline with text)
- Medium: 24x24px (standard UI)
- Large: 32x32px (feature highlights)

**Spacing:**
- Icon + text: 8px gap
- Icon-only buttons: 44x44px touch target (icon centered)

**Accessibility:**
- Decorative icons: `aria-hidden="true"`
- Functional icons: `aria-label="Descriptive label"`
- Icon + text: Text always visible (no icon-only critical actions)

### Icon Source

**Recommended Library:** **Heroicons** (https://heroicons.com/)
- Open source (MIT license)
- Matches design style (outlined, modern)
- Comprehensive set
- Available as React components or SVGs

**Alternative:** **Feather Icons** (https://feathericons.com/)

---

## Photography & Imagery

### Image Style

**Overall Aesthetic:**
- **High-quality** - No pixelation, properly sized
- **Well-composed** - Clear subject, good framing
- **Natural lighting** - Avoid harsh shadows or overexposure
- **Authentic** - Real student work, not stock photos

### Design Screenshots (Gallery Thumbnails)

**Specifications:**
- **Aspect ratio:** 16:9 (landscape)
- **Minimum resolution:** 1280x720px
- **Format:** WebP (with JPEG fallback)
- **File size:** <200KB (optimized)

**Screenshot Guidelines:**
- Capture at 1920x1080px (full HD)
- Browser chrome hidden (use full-screen mode)
- Zoom level: 100% (no distortion)
- Light theme preferred (better visibility)

**Thumbnail Treatment:**
- Subtle border: 1px solid Gray 300 (#CCCCCC)
- Border radius: 4px
- Box shadow: 0 2px 8px rgba(0,0,0,0.1)
- Hover effect: Shadow increases, slight lift

### Historical Reference Images

**Usage:** Movement detail pages, educational context

**Guidelines:**
- Public domain or properly licensed
- High resolution (minimum 1200px width)
- Clear attribution (photographer, source, license)
- Grayscale or muted colors (don't compete with gallery designs)

### Placeholder Images

**Loading States:**
- Gray gradient (#E5E5E5 to #F2F2F2)
- Skeleton screens (pulsing animation)
- Icon centered (optional)

**Empty States:**
- Illustration or icon (muted colors)
- Friendly message
- Clear call-to-action

---

## UI Components

### Buttons

#### Primary Button
```
Background: Museum Blue (#0066CC)
Text: White (#FFFFFF)
Padding: 12px 24px
Border-radius: 4px
Font: Inter Semi-Bold, 16px
Hover: Background → #0052A3, transform: scale(1.02)
Active: Background → #003D7A, transform: scale(0.98)
Focus: 3px outline, Museum Blue
Disabled: Background → Gray 400, cursor: not-allowed
```

#### Secondary Button
```
Background: Transparent
Border: 2px solid Museum Blue (#0066CC)
Text: Museum Blue (#0066CC)
Padding: 10px 22px (adjusted for border)
Border-radius: 4px
Font: Inter Semi-Bold, 16px
Hover: Background → rgba(0,102,204,0.1)
```

#### Text Button (Tertiary)
```
Background: Transparent
Text: Museum Blue (#0066CC)
Padding: 8px 16px
Font: Inter Medium, 16px
Hover: Text → #0052A3, underline
```

### Form Elements

#### Text Input
```
Border: 1px solid Gray 500 (#808080)
Background: White (#FFFFFF)
Padding: 12px 16px
Border-radius: 4px
Font: Inter Regular, 16px
Placeholder: Gray 600 (#666666)

Focus: Border → Museum Blue, 2px glow (box-shadow)
Error: Border → Error Red (#E74C3C), error message below
Success: Border → Success Green (#27AE60)
Disabled: Background → Gray 200, cursor: not-allowed
```

#### Textarea
```
Same as text input, but:
Min-height: 120px
Resize: vertical only
```

#### Select Dropdown
```
Same as text input, plus:
Icon: Chevron down (right side)
Hover: Slight background tint
Open: Chevron rotates 180deg
```

#### Checkbox
```
Size: 20x20px
Border: 2px solid Gray 500
Border-radius: 3px
Background: White

Checked: Background → Museum Blue, white checkmark
Hover: Border → Museum Blue
Focus: 3px outline
```

#### Radio Button
```
Size: 20x20px (outer circle)
Border: 2px solid Gray 500
Border-radius: 50% (circle)
Background: White

Selected: Inner dot (10x10px) Museum Blue
Hover: Border → Museum Blue
Focus: 3px outline
```

### Cards

#### Gallery Card
```
Background: White (#FFFFFF)
Border: 1px solid Gray 300 (#CCCCCC)
Border-radius: 8px
Box-shadow: 0 2px 4px rgba(0,0,0,0.1)
Padding: 0 (image full-bleed, text has padding)

Image section: No padding, border-radius top corners only
Content section: Padding 16px

Hover: 
- Border → Museum Blue
- Box-shadow → 0 4px 12px rgba(0,0,0,0.15)
- Transform: translateY(-4px)
- Transition: all 0.2s ease
```

#### Movement Card
```
Similar to gallery card, but:
- Taller (more text content)
- Multiple thumbnail images in grid
- "Learn More" CTA at bottom
```

### Navigation

#### Header Navigation
```
Background: White (#FFFFFF)
Border-bottom: 1px solid Gray 300
Height: 64px
Padding: 0 32px (desktop), 0 16px (mobile)

Logo: Left-aligned
Nav links: Right-aligned (desktop), hamburger menu (mobile)
Link spacing: 32px between links

Sticky: Position fixed on scroll, subtle shadow appears
```

#### Footer
```
Background: Gray 900 (#1A1A1A)
Text: Gray 300 (#CCCCCC)
Links: Gray 100 (#F2F2F2)
Link hover: White (#FFFFFF)
Padding: 48px 32px
Layout: Multi-column grid (desktop), stacked (mobile)
```

### Tags/Badges

#### Movement Tag
```
Background: Movement-specific color (e.g., Bauhaus Red)
Text: White (or black if background too light)
Padding: 4px 12px
Border-radius: 16px (pill shape)
Font: Inter Medium, 12px, uppercase
Display: inline-block
```

#### Era Badge
```
Similar to movement tag, but:
Background: Gray 700 (#4D4D4D)
Text: White
```

### Modals

```
Overlay: rgba(0,0,0,0.5) (semi-transparent black)
Modal box:
- Background: White
- Border-radius: 8px
- Box-shadow: 0 8px 32px rgba(0,0,0,0.2)
- Max-width: 600px
- Padding: 32px

Close button: Top-right, 32x32px, gray → blue on hover
```

### Tooltips

```
Background: Gray 900 (#1A1A1A)
Text: White, 14px
Padding: 8px 12px
Border-radius: 4px
Arrow: 6px triangle pointing to target
Appear: Fade in after 0.5s hover
Max-width: 200px
```

---

## Spacing & Layout

### Spacing System (8px Grid)

```
--space-xxs: 4px   (0.25rem)
--space-xs:  8px   (0.5rem)
--space-sm:  16px  (1rem)
--space-md:  24px  (1.5rem)
--space-lg:  32px  (2rem)
--space-xl:  48px  (3rem)
--space-xxl: 64px  (4rem)
--space-xxxl: 96px (6rem)
```

**Usage:**
- Component padding: 16px (sm) or 24px (md)
- Section spacing: 48px (xl) or 64px (xxl)
- Element margins: 8px (xs), 16px (sm), 24px (md)

### Layout Grid

**Desktop (1200px+):**
- 12-column grid
- Column width: Fluid
- Gutter: 24px
- Margin: 48px (left/right)

**Tablet (768px - 1199px):**
- 8-column grid
- Gutter: 16px
- Margin: 32px

**Mobile (320px - 767px):**
- 4-column grid
- Gutter: 16px
- Margin: 16px

### Max Width Constraints

```
Content (text): 768px (optimal reading width)
Container: 1200px (overall page content)
Wide layout: 1440px (gallery grid, multi-column)
```

### Vertical Rhythm

**Baseline Grid:** 8px
- All vertical spacing should be multiples of 8px
- Maintains consistent visual rhythm
- Aligns with spacing system

---

## Animation & Motion

### Principles

**Purpose-Driven:**
- Motion should enhance understanding, not distract
- Provide feedback for interactions
- Guide user attention

**Performance:**
- Use CSS transforms (GPU-accelerated)
- Avoid animating layout properties (width, height, padding)
- Prefer opacity and transform

**Accessibility:**
- Respect `prefers-reduced-motion` media query
- Provide static alternatives for critical info
- Keep animations short (<500ms for UI)

### Standard Transitions

```css
/* Button hover */
transition: background-color 0.2s ease, transform 0.2s ease;

/* Card hover */
transition: box-shadow 0.3s ease, transform 0.3s ease;

/* Link hover */
transition: color 0.15s ease;

/* Modal appear */
transition: opacity 0.2s ease, transform 0.2s ease;

/* Page transitions */
transition: opacity 0.3s ease;
```

### Easing Functions

```css
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);    /* Default */
--ease-out: cubic-bezier(0.0, 0, 0.2, 1);       /* Decelerate */
--ease-in: cubic-bezier(0.4, 0, 1, 1);          /* Accelerate */
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);  /* Playful */
```

### Specific Animations

**Loading Spinner:**
```css
/* Rotate animation */
@keyframes spin {
  to { transform: rotate(360deg); }
}
duration: 1s linear infinite
```

**Skeleton Screen:**
```css
/* Pulsing gradient */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
duration: 1.5s ease-in-out infinite
```

**Notification Toast:**
```css
/* Slide in from top */
@keyframes slideDown {
  from { transform: translateY(-100%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
duration: 0.3s ease-out
```

**Hover Lift (Cards):**
```css
transform: translateY(-4px);
transition: transform 0.2s ease, box-shadow 0.2s ease;
```

---

## Voice & Tone

### Brand Voice Attributes

**Educational, but Conversational:**
- Explain concepts clearly without jargon
- Use "you" and "your" (second person)
- Active voice preferred over passive

**Encouraging and Supportive:**
- Celebrate student contributions
- Frame feedback constructively
- Acknowledge effort and learning

**Professional, but Approachable:**
- Maintain credibility without stiffness
- Use contractions (we're, you'll, it's)
- Friendly, not overly casual

**Clear and Concise:**
- Short sentences
- Bullet points for lists
- Avoid unnecessary words

### Writing Examples

**❌ Don't Say:**
> "Submissions will be evaluated by instructors in accordance with authenticity criteria as specified in the rubric."

**✅ Do Say:**
> "An instructor will review your submission within 2-5 days to make sure it accurately represents the design movement."

---

**❌ Don't Say:**
> "Your submission has been rejected due to insufficient alignment with movement characteristics."

**✅ Do Say:**
> "We couldn't approve this design because it doesn't match key Bauhaus principles. Try emphasizing geometric shapes and grid-based layouts."

---

**❌ Don't Say:**
> "Navigate to the gallery to peruse curated design exemplars."

**✅ Do Say:**
> "Browse the gallery to explore student designs."

### Messaging Contexts

**Success Messages:**
- Celebratory but not over-the-top
- Example: "🎉 Success! Your design is now in the gallery."

**Error Messages:**
- Explain what happened
- Provide next steps
- Example: "We couldn't submit your design because the demo link isn't working. Please check the URL and try again."

**Empty States:**
- Acknowledge the situation
- Suggest action
- Example: "No designs yet. Be the first to submit a Bauhaus design!"

**Form Labels:**
- Clear and specific
- Example: "Live Demo URL (where is your design hosted?)"

---

## Accessibility Standards

### WCAG 2.1 Level AA Compliance

**Non-Negotiable Requirements:**

#### Color Contrast
- **Normal text (16px):** Minimum 4.5:1 contrast ratio
- **Large text (18px+ or 14px+ bold):** Minimum 3:1
- **UI components:** Minimum 3:1 against adjacent colors
- **Test tool:** WebAIM Contrast Checker

#### Keyboard Navigation
- All interactive elements focusable (Tab key)
- Logical tab order (left to right, top to bottom)
- Visible focus indicators (3px outline, brand color)
- No keyboard traps (can exit all components)
- Skip to main content link (for screen reader users)

#### Screen Readers
- Semantic HTML (`<nav>`, `<main>`, `<article>`, `<button>`)
- ARIA labels where needed (`aria-label`, `aria-describedby`)
- Alt text for all images (descriptive, concise)
- Form labels programmatically associated with inputs
- Heading hierarchy (H1 → H2 → H3, no skipping)
- Link text descriptive ("Learn more about Bauhaus", not "Click here")

#### Responsive Design
- Text resizable up to 200% without loss of content
- No horizontal scrolling at 1280px wide
- Content reflows on mobile (no truncation)
- Touch targets minimum 44x44px (mobile)

#### Motion & Animation
- Respect `prefers-reduced-motion` media query
- Provide pause/stop controls for auto-playing content
- Flashing content <3 times per second (avoid seizures)

### Testing Checklist

**Automated Testing:**
- ✅ axe DevTools browser extension
- ✅ Lighthouse accessibility audit (score ≥95)
- ✅ WAVE browser extension

**Manual Testing:**
- ✅ Keyboard-only navigation (unplug mouse)
- ✅ Screen reader testing (NVDA on Windows, VoiceOver on Mac)
- ✅ Browser zoom to 200%
- ✅ Color blindness simulation (Chrome DevTools)
- ✅ Mobile device testing (real devices, not just emulators)

---

## Usage Guidelines

### Brand Applications

#### Website (Primary)
- All guidelines apply
- Maintain consistency across all pages
- Test in multiple browsers (Chrome, Firefox, Safari, Edge)

#### Social Media
- Profile image: Logo mark (square crop)
- Cover photo: Logo + tagline on gallery white background
- Post graphics: Use brand colors, Inter font, simple layouts

#### Email Notifications
- Plain text + HTML version (accessibility)
- Use brand colors sparingly (many email clients strip CSS)
- Clear subject lines, scannable content

#### Presentations (for instructors)
- Template: Gallery white background, brand colors for accents
- Typography: Inter for all text
- Keep slides minimal (5-7 bullet points max)

### File Naming Conventions

**Images:**
- `logo-primary.svg`, `logo-reverse.svg`
- `icon-search.svg`, `icon-gallery.svg`
- `design-thumbnail-bauhaus-grid.webp`

**Code:**
- CSS variables for all brand tokens
- Component files: `Button.jsx`, `GalleryCard.jsx`
- Follow existing project conventions

---

## Design Tokens (Code Implementation)

```css
:root {
  /* Colors */
  --color-brand-primary: #0066CC;
  --color-brand-primary-dark: #0052A3;
  --color-charcoal: #2C2C2C;
  --color-gallery-white: #F8F8F8;
  
  --color-bauhaus-red: #E63946;
  --color-bauhaus-yellow: #F1C40F;
  --color-swiss-gray: #95A5A6;
  --color-memphis-magenta: #E91E63;
  
  --color-success: #27AE60;
  --color-error: #E74C3C;
  --color-warning: #F39C12;
  --color-info: #3498DB;
  
  --color-gray-900: #1A1A1A;
  --color-gray-800: #2C2C2C;
  --color-gray-700: #4D4D4D;
  --color-gray-600: #666666;
  --color-gray-500: #808080;
  --color-gray-400: #999999;
  --color-gray-300: #CCCCCC;
  --color-gray-200: #E5E5E5;
  --color-gray-100: #F2F2F2;
  --color-white: #FFFFFF;
  
  /* Typography */
  --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-mono: 'JetBrains Mono', 'Courier New', monospace;
  
  --font-size-h1: 3rem;        /* 48px */
  --font-size-h2: 2.25rem;     /* 36px */
  --font-size-h3: 1.5rem;      /* 24px */
  --font-size-h4: 1.25rem;     /* 20px */
  --font-size-body: 1rem;      /* 16px */
  --font-size-small: 0.875rem; /* 14px */
  --font-size-tiny: 0.75rem;   /* 12px */
  
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  
  --line-height-heading: 1.2;
  --line-height-body: 1.6;
  --line-height-small: 1.4;
  
  /* Spacing */
  --space-xxs: 0.25rem;  /* 4px */
  --space-xs: 0.5rem;    /* 8px */
  --space-sm: 1rem;      /* 16px */
  --space-md: 1.5rem;    /* 24px */
  --space-lg: 2rem;      /* 32px */
  --space-xl: 3rem;      /* 48px */
  --space-xxl: 4rem;     /* 64px */
  
  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-round: 50%;
  --radius-pill: 999px;
  
  /* Shadows */
  --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.15);
  --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.2);
  
  /* Transitions */
  --transition-fast: 0.15s ease;
  --transition-base: 0.2s ease;
  --transition-slow: 0.3s ease;
  
  /* Z-index layers */
  --z-base: 1;
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-modal: 300;
  --z-tooltip: 400;
}
```

---

## Appendix A: Brand Assets Checklist

**Essential Files to Create:**
- [ ] Logo (SVG, PNG @1x, @2x, @3x)
- [ ] Logo variations (primary, reverse, monochrome)
- [ ] Favicon (16x16, 32x32, 48x48, ICO)
- [ ] Social media profile image (1200x1200px)
- [ ] Social media cover image (1500x500px)
- [ ] Icon library (24x24px SVGs, outlined style)
- [ ] Color palette swatch file (Adobe/Sketch format)
- [ ] Typography specimen sheet
- [ ] Component library (Figma/Sketch)
- [ ] Email signature template

---

## Appendix B: Accessibility Quick Reference

| Element | Requirement | Example |
|---------|-------------|---------|
| Text contrast | 4.5:1 minimum (normal text) | #2C2C2C on #FFFFFF = 12.6:1 ✅ |
| Large text | 3:1 minimum (18px+ or 14px+ bold) | #0066CC on #FFFFFF = 5.7:1 ✅ |
| Focus indicator | Visible 3px outline | `outline: 3px solid var(--color-brand-primary)` |
| Alt text | Descriptive, concise | `alt="Bauhaus-inspired grid layout with geometric shapes"` |
| Link text | Descriptive, not "click here" | "Learn more about Bauhaus" |
| Heading order | Sequential, no skipping | H1 → H2 → H3 (not H1 → H3) |
| Form labels | Programmatically associated | `<label for="email">` + `<input id="email">` |
| Touch targets | 44x44px minimum | Buttons, links on mobile |
| Skip link | First focusable element | `<a href="#main-content">Skip to content</a>` |

---

**Document Version:** 1.0  
**Status:** Ready for implementation  
**Next Steps:** Create brand assets (logo, icons), set up design tokens in codebase  
**Questions/Feedback:** Document in project GitHub discussions

**End of Document**
