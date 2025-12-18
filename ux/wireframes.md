# Wireframes Documentation

**Project:** MyWebClass.org - Design History Gallery  
**Document Owner:** UX Team  
**Last Updated:** December 17, 2025  
**Purpose:** Document wireframe designs for all key pages and user flows

---

## Table of Contents

1. [Design Principles](#design-principles)
2. [Typography & Spacing](#typography--spacing)
3. [Homepage Wireframe](#homepage-wireframe)
4. [Gallery Page Wireframe](#gallery-page-wireframe)
5. [Design Detail Page Wireframe](#design-detail-page-wireframe)
6. [Movements Page Wireframe](#movements-page-wireframe)
7. [Movement Detail Page Wireframe](#movement-detail-page-wireframe)
8. [Submit Form Wireframe](#submit-form-wireframe)
9. [Admin Dashboard Wireframe](#admin-dashboard-wireframe)
10. [Admin Review Page Wireframe](#admin-review-page-wireframe)
11. [Responsive Behavior](#responsive-behavior)
12. [Component Library](#component-library)

---

## Design Principles

### 1. Museum-Like Experience
- **Clean, minimal interface** - Content is the star
- **Generous whitespace** - Let designs breathe
- **Professional typography** - Readable, authoritative
- **High-quality imagery** - Large previews, crisp thumbnails

### 2. Education-First
- **Clear hierarchy** - Important info stands out
- **Contextual explanations** - Help text where needed
- **Accessible language** - No jargon barriers
- **Progressive disclosure** - Show details when relevant

### 3. Simplicity Over Features
- **Two primary paths** - Browse OR Submit
- **Minimal navigation** - 4-5 top-level pages
- **Focused interactions** - One clear action per page
- **No distractions** - No ads, popups, or social clutter

### 4. Interaction Design Patterns (Material Design 3.0 & iOS HIG)

**Microinteractions:**
- **Card hover states** - Subtle elevation (+2dp shadow), 200ms ease-in-out transition
- **Button feedback** - Ripple effect on click (Material Design), scale 0.98 on press (iOS)
- **Loading indicators** - Skeleton screens (preferred) or spinner (max 2s tolerance)
- **Success animations** - Checkmark fade-in with elastic easing (500ms duration)

**Feedback & Affordances:**
- **Clickable elements** - Cursor: pointer, hover state required, min 44x44px touch target (WCAG/iOS HIG)
- **Form validation** - Inline validation on blur, success/error states with icon + color + text
- **Disabled states** - Opacity 0.38 (Material), clear visual distinction from enabled
- **Focus indicators** - 2px solid outline, high contrast (3:1 minimum), never removed

**Loading States (Google RAIL Model):**
- **Immediate response** - <100ms for interactions (perceived as instantaneous)
- **Progress indication** - Show within 1s for operations >1s duration
- **Skeleton screens** - For content loading >2s, matches final layout structure
- **Optimistic UI** - Show expected state immediately, roll back if fails

**Error Handling:**
- **Graceful degradation** - Core functionality works without JavaScript
- **Error messages** - Specific, actionable, polite tone (Nielsen Norman Group guidelines)
- **Retry mechanisms** - Clear "Try Again" CTAs, exponential backoff for network errors
- **Offline support** - Service worker caching for previously viewed content

**Empty States:**
- **Illustrative + instructive** - Image/icon + explanation + CTA
- **First-time user** - "No designs yet" + "Browse Gallery" CTA
- **Search no results** - Suggest filters/alternative queries

---

## Typography & Spacing

### Type Scale
```
H1: 48px / 3rem (Homepage hero)
H2: 36px / 2.25rem (Page titles)
H3: 24px / 1.5rem (Section headers)
H4: 20px / 1.25rem (Card titles)
Body: 16px / 1rem (Default text)
Small: 14px / 0.875rem (Metadata, labels)
Tiny: 12px / 0.75rem (Timestamps, footnotes)
```

### Spacing System (8px base unit)
```
XXS: 4px (0.25rem)
XS:  8px (0.5rem)
SM:  16px (1rem)
MD:  24px (1.5rem)
LG:  32px (2rem)
XL:  48px (3rem)
XXL: 64px (4rem)
```

### Line Height
- Headings: 1.2
- Body text: 1.6
- Captions: 1.4

---

## Homepage Wireframe

### Desktop Layout (1200px+)

```
┌─────────────────────────────────────────────────────────────┐
│ [MyWebClass Logo]    Gallery | Movements | Submit | About  [🔍] │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                    HERO SECTION                             │
│                                                             │
│         Learn Design History Through Working Examples       │
│              [Browse Gallery]  [Submit Your Design]         │
│                                                             │
│              Featured Design Preview (Large)                │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                   FEATURED DESIGNS                          │
│     "Explore the Gallery: Recent Additions"                 │
│                                                             │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐                │
│   │[IMG]     │  │[IMG]     │  │[IMG]     │                │
│   │Bauhaus   │  │Swiss     │  │Memphis   │                │
│   │Grid      │  │Poster    │  │Pattern   │                │
│   │by Alex   │  │by Jordan │  │by Chris  │                │
│   └──────────┘  └──────────┘  └──────────┘                │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐                │
│   │[IMG]     │  │[IMG]     │  │[IMG]     │                │
│   │Brutalism │  │Art Deco  │  │Flat      │                │
│   │Layout    │  │Elegance  │  │Dashboard │                │
│   │by Chris  │  │by Morgan │  │by Taylor │                │
│   └──────────┘  └──────────┘  └──────────┘                │
│                                                             │
│               [View All Designs →]                          │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                   MOVEMENT SPOTLIGHT                        │
│            "Learn About Design Movements"                   │
│                                                             │
│   ┌─────────────────────────────────────┐                  │
│   │ Bauhaus (1919-1933)                 │                  │
│   │ Form follows function, grid-based   │                  │
│   │ [2 example thumbnails]              │                  │
│   │                  [Explore →]        │                  │
│   └─────────────────────────────────────┘                  │
│                                                             │
│   ┌─────────────────────────────────────┐                  │
│   │ Swiss International Style (1950s)   │                  │
│   │ Clean typography, asymmetric grids  │                  │
│   │ [2 example thumbnails]              │                  │
│   │                  [Explore →]        │                  │
│   └─────────────────────────────────────┘                  │
│                                                             │
│               [View All Movements →]                        │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                    HOW IT WORKS                             │
│                                                             │
│     1️⃣ Students Create      2️⃣ Instructors Review           │
│     Authentic design demos   Approve quality submissions   │
│                                                             │
│     3️⃣ Gallery Grows                                        │
│     Shared resource for all learners                       │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                     FOOTER                                  │
│  Gallery | Movements | Submit | About | FAQ | Privacy      │
│           © 2025 MyWebClass.org                             │
└─────────────────────────────────────────────────────────────┘
```

### Mobile Layout (320px - 768px)

```
┌─────────────────────┐
│ [Logo]      [☰]    │
├─────────────────────┤
│                     │
│  Learn Design       │
│  History Through    │
│  Working Examples   │
│                     │
│  [Browse Gallery]   │
│  [Submit Design]    │
│                     │
│  [Featured Design]  │
│  (Full width)       │
│                     │
├─────────────────────┤
│  Featured Designs   │
│                     │
│  ┌───────────────┐  │
│  │[IMG]          │  │
│  │Bauhaus Grid   │  │
│  │by Sarah       │  │
│  └───────────────┘  │
│  ┌───────────────┐  │
│  │[IMG]          │  │
│  │Swiss Poster   │  │
│  │by Alex        │  │
│  └───────────────┘  │
│                     │
│  [View All →]       │
│                     │
├─────────────────────┤
│  Movements          │
│  ┌───────────────┐  │
│  │Bauhaus        │  │
│  │(1919-1933)    │  │
│  │[Explore →]    │  │
│  └───────────────┘  │
│                     │
├─────────────────────┤
│  How It Works       │
│  1. Create demos    │
│  2. Instructor OK   │
│  3. Gallery grows   │
│                     │
├─────────────────────┤
│  Footer Links       │
└─────────────────────┘
```

### Key Interactions
- **Hero CTA buttons:** Hover state scales slightly (1.05x), adds subtle shadow
- **Design cards:** Hover reveals "View Demo" overlay
- **Movement cards:** Hover highlights border, lifts card (4px translate-y)
- **All CTAs:** Keyboard focusable with visible focus ring

---

## Gallery Page Wireframe

### Desktop Layout

```
┌─────────────────────────────────────────────────────────────┐
│ [MyWebClass Logo]    Gallery | Movements | Submit | About  [🔍] │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                      DESIGN GALLERY                         │
│                                                             │
├───────────────────┬─────────────────────────────────────────┤
│ FILTERS           │                                         │
│                   │   Showing 24 of 156 designs             │
│ Movement          │   Sort by: [Most Recent ▼]             │
│ □ Bauhaus         │                                         │
│ □ Swiss Style     │   ┌──────┐ ┌──────┐ ┌──────┐           │
│ □ Brutalism       │   │[IMG] │ │[IMG] │ │[IMG] │           │
│ □ Memphis         │   │Title │ │Title │ │Title │           │
│ □ Material        │   │Move  │ │Move  │ │Move  │           │
│ [Show all...]     │   │Era   │ │Era   │ │Era   │           │
│                   │   │by X  │ │by Y  │ │by Z  │           │
│ Era               │   └──────┘ └──────┘ └──────┘           │
│ □ 1920s-1930s     │   ┌──────┐ ┌──────┐ ┌──────┐           │
│ □ 1950s-1960s     │   │[IMG] │ │[IMG] │ │[IMG] │           │
│ □ 2000s-2010s     │   │Title │ │Title │ │Title │           │
│ [Show all...]     │   │Move  │ │Move  │ │Move  │           │
│                   │   │Era   │ │Era   │ │Era   │           │
│ Techniques        │   │by X  │ │by Y  │ │by Z  │           │
│ □ CSS Grid        │   └──────┘ └──────┘ └──────┘           │
│ □ Typography      │   ┌──────┐ ┌──────┐ ┌──────┐           │
│ □ Color Theory    │   │[IMG] │ │[IMG] │ │[IMG] │           │
│                   │   └──────┘ └──────┘ └──────┘           │
│ [Clear Filters]   │                                         │
│                   │   [1] [2] [3] ... [7]  Next →           │
│                   │                                         │
└───────────────────┴─────────────────────────────────────────┘
```

### Mobile Layout

```
┌─────────────────────┐
│ [Logo]      [☰]    │
├─────────────────────┤
│  Design Gallery     │
│                     │
│  [🔍 Search]        │
│  [⚙️ Filter]  Sort▼ │
│                     │
│  156 designs        │
│                     │
│  ┌───────────────┐  │
│  │[IMG]          │  │
│  │Bauhaus Grid   │  │
│  │Bauhaus, 1920s │  │
│  │by Alex M.     │  │
│  └───────────────┘  │
│  ┌───────────────┐  │
│  │[IMG]          │  │
│  │Swiss Poster   │  │
│  │Swiss, 1950s   │  │
│  │by Alex        │  │
│  └───────────────┘  │
│  ┌───────────────┐  │
│  │[IMG]          │  │
│  │Memphis Color  │  │
│  │Memphis, 1980s │  │
│  │by Jordan      │  │
│  └───────────────┘  │
│                     │
│  [Load More]        │
└─────────────────────┘
```

### Filter Modal (Mobile)

```
┌─────────────────────┐
│  Filters        [✕] │
├─────────────────────┤
│  Movement           │
│  ☑ Bauhaus          │
│  □ Swiss Style      │
│  □ Brutalism        │
│  [Show all...]      │
│                     │
│  Era                │
│  ☑ 1920s-1930s      │
│  □ 1950s-1960s      │
│  [Show all...]      │
│                     │
│  Techniques         │
│  ☑ CSS Grid         │
│  □ Typography       │
│  [Show all...]      │
│                     │
│  [Clear] [Apply]    │
└─────────────────────┘
```

---

## Design Detail Page Wireframe

### Desktop Layout

```
┌─────────────────────────────────────────────────────────────┐
│ [MyWebClass Logo]    Gallery | Movements | Submit | About  [🔍] │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ← Back to Gallery                                          │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │                                                     │    │
│  │           [LARGE DESIGN PREVIEW IMAGE]              │    │
│  │                 (800x600px)                         │    │
│  │                                                     │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                             │
│  Bauhaus Grid Layout                                        │
│  [Bauhaus] [1920s-1930s]                                    │
│                                                             │
│  by Alex Martinez | Submitted Nov 15, 2025                  │
│                                                             │
│  [View Live Demo →]  [View Code on GitHub →]                │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ABOUT THIS DESIGN                                          │
│                                                             │
│  This design demonstrates key Bauhaus principles through    │
│  a modern CSS Grid implementation. I focused on...          │
│  [Student's full description paragraph]                     │
│                                                             │
│  HISTORICAL CONTEXT                                         │
│  Bauhaus (1919-1933) - A German art school combining       │
│  crafts and fine arts. Known for functional design and      │
│  geometric forms. [Learn more about Bauhaus →]              │
│                                                             │
│  TECHNIQUES USED                                            │
│  • CSS Grid Layout                                          │
│  • Typography Hierarchy                                     │
│  • Geometric Shapes                                         │
│  • Limited Color Palette                                    │
│                                                             │
│  TECHNICAL DETAILS                                          │
│  Technologies: HTML5, CSS3                                  │
│  Approved: Nov 18, 2025                                     │
│  Reviewed by: Dr. Taylor Chen                               │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  EXPLORE MORE BAUHAUS DESIGNS                               │
│                                                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                  │
│  │[IMG]     │  │[IMG]     │  │[IMG]     │                  │
│  │Title     │  │Title     │  │Title     │                  │
│  └──────────┘  └──────────┘  └──────────┘                  │
│                                                             │
│  [View All Bauhaus Designs →]                               │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  ← Previous Design    [Back to Gallery]    Next Design →    │
└─────────────────────────────────────────────────────────────┘
```

### Mobile Layout

```
┌─────────────────────┐
│ [Logo]      [☰]    │
├─────────────────────┤
│ ← Gallery           │
│                     │
│ ┌─────────────────┐ │
│ │                 │ │
│ │  [PREVIEW IMG]  │ │
│ │                 │ │
│ └─────────────────┘ │
│                     │
│ Bauhaus Grid Layout │
│ [Bauhaus] [1920s]   │
│ by Alex Martinez    │
│ Nov 15, 2025        │
│                     │
│ [View Live Demo →]  │
│ [View Code →]       │
│                     │
│ About This Design   │
│ This design demos   │
│ Bauhaus principles  │
│ through CSS Grid... │
│                     │
│ Historical Context  │
│ Bauhaus (1919-1933) │
│ German art school   │
│ combining crafts... │
│ [Learn more →]      │
│                     │
│ Techniques Used     │
│ • CSS Grid          │
│ • Typography        │
│ • Geometric Shapes  │
│                     │
│ Explore More        │
│ ┌────┐ ┌────┐       │
│ │IMG│ │IMG│       │
│ └────┘ └────┘       │
│                     │
│ ← Prev | Next →     │
└─────────────────────┘
```

---

## Movements Page Wireframe

### Desktop Layout

```
┌─────────────────────────────────────────────────────────────┐
│ [MyWebClass Logo]    Gallery | Movements | Submit | About  [🔍] │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                  DESIGN MOVEMENTS                           │
│          Explore the History of Visual Design              │
│                                                             │
│  View: [Grid] [Timeline]                                    │
│                                                             │
│  ┌─────────────────────┐  ┌─────────────────────┐          │
│  │ Bauhaus             │  │ Swiss International │          │
│  │ 1919-1933           │  │ 1950s-1980s         │          │
│  │                     │  │                     │          │
│  │ Key Principles:     │  │ Key Principles:     │          │
│  │ • Form/function     │  │ • Clean typography  │          │
│  │ • Grid systems      │  │ • Asymmetric grids  │          │
│  │ • Geometric shapes  │  │ • White space       │          │
│  │                     │  │                     │          │
│  │ [3 example thumbs]  │  │ [3 example thumbs]  │          │
│  │                     │  │                     │          │
│  │ [Learn More →]      │  │ [Learn More →]      │          │
│  └─────────────────────┘  └─────────────────────┘          │
│                                                             │
│  ┌─────────────────────┐  ┌─────────────────────┐          │
│  │ Brutalism           │  │ Memphis             │          │
│  │ 1950s-present       │  │ 1980s               │          │
│  │                     │  │                     │          │
│  │ Key Principles:     │  │ Key Principles:     │          │
│  │ • Raw materials     │  │ • Bold patterns     │          │
│  │ • Bold typography   │  │ • Bright colors     │          │
│  │ • Exposed structure │  │ • Geometric forms   │          │
│  │                     │  │                     │          │
│  │ [3 example thumbs]  │  │ [3 example thumbs]  │          │
│  │                     │  │                     │          │
│  │ [Learn More →]      │  │ [Learn More →]      │          │
│  └─────────────────────┘  └─────────────────────┘          │
│                                                             │
│  [Load More Movements]                                      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Timeline View

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  1900s ──●── Arts & Crafts                                  │
│           │                                                 │
│  1920s ───●── Bauhaus                                       │
│           │   [3 thumbnails]                                │
│           │                                                 │
│  1930s ───●── Art Deco                                      │
│           │                                                 │
│  1950s ───●── Swiss International                           │
│           │   [3 thumbnails]                                │
│           │                                                 │
│  1960s ───●── Psychedelic                                   │
│           │                                                 │
│  1980s ───●── Memphis                                       │
│           │   [3 thumbnails]                                │
│           │                                                 │
│  2000s ───●── Flat Design                                   │
│           │                                                 │
│  2010s ───●── Material Design / Brutalism Revival           │
│           │   [3 thumbnails]                                │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Movement Detail Page Wireframe

### Desktop Layout

```
┌─────────────────────────────────────────────────────────────┐
│ [MyWebClass Logo]    Gallery | Movements | Submit | About  [🔍] │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ← Back to Movements                                        │
│                                                             │
│  BAUHAUS                                                    │
│  1919-1933 | Weimar, Dessau, Berlin, Germany               │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  OVERVIEW                                                   │
│                                                             │
│  The Bauhaus was a German art school operational from       │
│  1919 to 1933 that combined crafts and the fine arts.      │
│  Famous for its approach to design, which attempted to      │
│  unify art, craft, and technology...                        │
│  [Full paragraph description]                               │
│                                                             │
│  KEY PRINCIPLES                                             │
│  • Form follows function                                    │
│  • Grid-based layouts                                       │
│  • Geometric shapes (circles, squares, triangles)           │
│  • Sans-serif typography                                    │
│  • Primary colors (red, blue, yellow) + black/white         │
│  • Emphasis on craftsmanship and materials                  │
│                                                             │
│  VISUAL CHARACTERISTICS                                     │
│                                                             │
│  Typography: Sans-serif, bold geometric letterforms         │
│  Layout: Asymmetric grids, clear hierarchy                  │
│  Color: Primary colors, high contrast                       │
│  Forms: Circles, squares, triangles as building blocks      │
│                                                             │
│  [Historical example images: Bauhaus posters, buildings]    │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  DESIGNS IN THIS MOVEMENT                                   │
│  Showing 8 student-submitted Bauhaus designs                │
│                                                             │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐                       │
│  │[IMG] │ │[IMG] │ │[IMG] │ │[IMG] │                       │
│  │Title │ │Title │ │Title │ │Title │                       │
│  │by X  │ │by Y  │ │by Z  │ │by W  │                       │
│  └──────┘ └──────┘ └──────┘ └──────┘                       │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐                       │
│  │[IMG] │ │[IMG] │ │[IMG] │ │[IMG] │                       │
│  │Title │ │Title │ │Title │ │Title │                       │
│  │by X  │ │by Y  │ │by Z  │ │by W  │                       │
│  └──────┘ └──────┘ └──────┘ └──────┘                       │
│                                                             │
│  [View All Bauhaus Designs →]                               │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  FURTHER RESOURCES                                          │
│  • Wikipedia: Bauhaus                                       │
│  • Bauhaus Archive Museum                                   │
│  • "Bauhaus" by Magdalena Droste (Book)                     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Submit Form Wireframe

### Desktop Layout

```
┌─────────────────────────────────────────────────────────────┐
│ [MyWebClass Logo]    Gallery | Movements | Submit | About  [🔍] │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                  SUBMIT YOUR DESIGN                         │
│                                                             │
│  Share your authentic design history demo with the gallery  │
│                                                             │
│  [📖 Read Submission Guidelines]                            │
│                                                             │
├───────────────────────────────────────────────────────┬─────┤
│                                                       │     │
│  STUDENT INFORMATION                                  │ 💡  │
│                                                       │ TIPS│
│  Full Name *                                          │     │
│  [_________________________________]                  │Make │
│                                                       │sure │
│  Email *                                              │your │
│  [_________________________________]                  │demo │
│                                                       │is   │
│  Institution / Class (optional)                       │live │
│  [_________________________________]                  │and  │
│                                                       │code │
│  Portfolio Link (optional)                            │is on│
│  [_________________________________]                  │GH!  │
│                                                       │     │
│  DESIGN INFORMATION                                   │Read │
│                                                       │the  │
│  Design Title *                                       │full │
│  [_________________________________]                  │guids│
│                                                       │for  │
│  Movement *                                           │best │
│  [Choose Movement ▼           ]                       │tips │
│                                                       │     │
│  Era *                                                │     │
│  [Choose Era ▼                ]                       │     │
│                                                       │     │
│  Description *                                        │     │
│  Explain your design choices and how you achieved     │     │
│  authenticity:                                        │     │
│  [                                              ]     │     │
│  [                                              ]     │     │
│  [                                              ]     │     │
│  (Minimum 100 characters)                             │     │
│                                                       │     │
│  LINKS                                                │     │
│                                                       │     │
│  Live Demo URL *                                      │     │
│  [https://____________________________]               │     │
│  Where is your design hosted?                         │     │
│                                                       │     │
│  GitHub Repository URL *                              │     │
│  [https://github.com/__________________]              │     │
│  Link to your public code repository                  │     │
│                                                       │     │
│  TECHNIQUES USED (select all that apply)              │     │
│  □ CSS Grid        □ Typography Focus                 │     │
│  □ Flexbox         □ Color Theory                     │     │
│  □ Animation       □ Responsive Design                │     │
│  □ Other: [____________]                              │     │
│                                                       │     │
│  INSPIRATION SOURCES (optional)                       │     │
│  [                                              ]     │     │
│  [                                              ]     │     │
│                                                       │     │
│  CONSENT & CONFIRMATION                               │     │
│  ☑ I confirm this is my original work                 │     │
│  ☑ I grant permission to display in the gallery       │     │
│     with attribution                                  │     │
│  ☑ I understand review may take 2-5 business days     │     │
│                                                       │     │
│  [Cancel]              [Submit for Review →]          │     │
│                                                       │     │
└───────────────────────────────────────────────────────┴─────┘
```

### Mobile Layout

```
┌─────────────────────┐
│ [Logo]      [☰]    │
├─────────────────────┤
│ Submit Your Design  │
│                     │
│ [Read Guidelines]   │
│                     │
│ Student Info        │
│ Name *              │
│ [_______________]   │
│                     │
│ Email *             │
│ [_______________]   │
│                     │
│ Institution         │
│ [_______________]   │
│                     │
│ Design Info         │
│ Title *             │
│ [_______________]   │
│                     │
│ Movement *          │
│ [Select... ▼]       │
│                     │
│ Era *               │
│ [Select... ▼]       │
│                     │
│ Description *       │
│ [             ]     │
│ [             ]     │
│ [             ]     │
│                     │
│ Links               │
│ Demo URL *          │
│ [_______________]   │
│                     │
│ GitHub URL *        │
│ [_______________]   │
│                     │
│ Techniques          │
│ ☑ CSS Grid          │
│ □ Flexbox           │
│ □ Typography        │
│ [Show more...]      │
│                     │
│ Consent             │
│ ☑ Original work     │
│ ☑ Display OK        │
│ ☑ Review 2-5 days   │
│                     │
│ [Submit for Review] │
└─────────────────────┘
```

### Success Page

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                      ✅ SUCCESS!                            │
│                                                             │
│          Your Design Has Been Submitted for Review          │
│                                                             │
│  Thank you, Alex! We've received your submission:           │
│  "Bauhaus Grid Layout"                                      │
│                                                             │
│  What happens next?                                         │
│  1. An instructor will review your submission               │
│  2. You'll receive an email when reviewed (2-5 days)        │
│  3. If approved, your design will appear in the gallery     │
│                                                             │
│  We sent a confirmation email to: alex@example.com          │
│                                                             │
│  [Browse Gallery]  [Submit Another Design]                  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Admin Dashboard Wireframe

### Desktop Layout

```
┌─────────────────────────────────────────────────────────────┐
│ [MyWebClass Admin]                    Dr. Chen | [Logout]   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                  INSTRUCTOR DASHBOARD                       │
│                                                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   🔔 3       │  │   ✅ 12      │  │   📊 156     │      │
│  │   Pending    │  │   Approved   │  │   Total      │      │
│  │   Reviews    │  │   This Week  │  │   Designs    │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│                                                             │
│  QUICK ACTIONS                                              │
│  [Review Next Submission →]  [View All Submissions]         │
│                                                             │
│  PENDING SUBMISSIONS                                        │
│  ┌───────────────────────────────────────────────────────┐  │
│  │ Bauhaus Grid Layout                                   │  │
│  │ by Alex Martinez | Submitted 2 hours ago              │  │
│  │ Movement: Bauhaus | Era: 1920s-1930s                  │  │
│  │ [Review →]  [View Demo]  [View Code]                  │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐  │
│  │ Memphis Color Explosion                               │  │
│  │ by Jordan Patel | Submitted 5 hours ago               │  │
│  │ Movement: Memphis | Era: 1980s                        │  │
│  │ [Review →]  [View Demo]  [View Code]                  │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐  │
│  │ Swiss Typography Study                                │  │
│  │ by Alex Martinez | Submitted 1 day ago                │  │
│  │ Movement: Swiss International | Era: 1950s            │  │
│  │ [Review →]  [View Demo]  [View Code]                  │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                             │
│  RECENT ACTIVITY                                            │
│  • Approved "Brutalist Homepage" by Chris Brown (2h ago)    │
│  • Rejected "Minimal Design" by Taylor Smith (4h ago)       │
│  • Approved "Art Deco Poster" by Morgan Lee (1d ago)        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Admin Review Page Wireframe

### Desktop Layout

```
┌─────────────────────────────────────────────────────────────┐
│ [MyWebClass Admin]                    Dr. Chen | [Logout]   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ← Back to Dashboard                                        │
│                                                             │
│                    REVIEW SUBMISSION                        │
│                                                             │
├───────────────────────────────────────────────────┬─────────┤
│                                                   │         │
│  Bauhaus Grid Layout                              │ PREVIEW │
│  by Alex Martinez (alex@example.com)              │         │
│  Submitted: Dec 17, 2025 at 2:30 PM               │ ┌─────┐ │
│                                                   │ │     │ │
│  DESIGN DETAILS                                   │ │[IMG]│ │
│  Movement: Bauhaus                                │ │     │ │
│  Era: 1920s-1930s                                 │ │     │ │
│  Techniques: CSS Grid, Typography, Color Theory   │ └─────┘ │
│                                                   │         │
│  DESCRIPTION                                      │ LINKS   │
│  "This design demonstrates key Bauhaus principles │         │
│  through a modern CSS Grid implementation. I      │ [View   │
│  focused on creating a functional layout that     │  Live   │
│  uses geometric shapes and a limited color        │  Demo→] │
│  palette..."                                      │         │
│                                                   │ [View   │
│  LINKS                                            │  Code→] │
│  Demo: https://sarahchen.github.io/bauhaus-grid   │         │
│  Repo: https://github.com/sarahchen/bauhaus-grid  │         │
│                                                   │         │
│  INSTITUTION                                      │         │
│  University of Design, Design History 201         │         │
│                                                   │         │
├───────────────────────────────────────────────────┴─────────┤
│                                                             │
│  REVIEW CHECKLIST                                           │
│  ☑ Demo is accessible and working                           │
│  ☑ Design accurately represents stated movement             │
│  ☑ Code is clean and readable                               │
│  ☑ README explains design choices                           │
│  ☑ No obvious plagiarism                                    │
│                                                             │
│  INTERNAL NOTES (optional)                                  │
│  [                                                    ]     │
│  [                                                    ]     │
│                                                             │
│  DECISION                                                   │
│                                                             │
│  [❌ Reject]     [📝 Request Revisions]     [✅ Approve]    │
│                                                             │
│  If rejecting, select reason:                               │
│  □ Demo not accessible                                      │
│  □ Inaccurate representation of movement                    │
│  □ Code quality issues                                      │
│  □ Missing or inadequate description                        │
│  □ Other: [_______________________________]                 │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Mobile Layout

```
┌─────────────────────┐
│ Admin | [Logout]    │
├─────────────────────┤
│ ← Dashboard         │
│                     │
│ Review Submission   │
│                     │
│ Bauhaus Grid Layout │
│ by Alex Martinez    │
│ Dec 17, 2:30 PM     │
│                     │
│ ┌─────────────────┐ │
│ │  [PREVIEW IMG]  │ │
│ └─────────────────┘ │
│                     │
│ Movement: Bauhaus   │
│ Era: 1920s-1930s    │
│                     │
│ Description:        │
│ "This design demos  │
│ key Bauhaus..."     │
│                     │
│ [View Demo →]       │
│ [View Code →]       │
│                     │
│ Checklist           │
│ ☑ Demo works        │
│ ☑ Accurate movement │
│ ☑ Clean code        │
│ ☑ Good README       │
│ ☑ No plagiarism     │
│                     │
│ Notes (optional)    │
│ [             ]     │
│                     │
│ Decision            │
│ [Reject] [Revise]   │
│ [✅ Approve]        │
└─────────────────────┘
```

---

## Responsive Behavior

### Breakpoints

```css
/* Mobile First Approach */
Base:     0px - 767px   (Mobile)
Tablet:   768px - 1023px (Tablet)
Desktop:  1024px - 1439px (Desktop)
Wide:     1440px+        (Large Desktop)
```

### Key Responsive Changes

#### Gallery Cards
- Mobile: 1 column (full width)
- Tablet: 2 columns
- Desktop: 3 columns
- Wide: 4 columns

#### Navigation
- Mobile: Hamburger menu
- Tablet: Hamburger or horizontal (depending on item count)
- Desktop: Full horizontal navigation

#### Filters (Gallery Page)
- Mobile: Hidden by default, open in modal via "Filter" button
- Tablet: Collapsible sidebar
- Desktop: Persistent sidebar

#### Typography
- Mobile: H1: 32px, Body: 16px
- Desktop: H1: 48px, Body: 16px

#### Touch Targets
- All interactive elements: minimum 44x44px on mobile
- Adequate spacing between links (12px minimum)

---

## Component Library

### 1. Design Card (Gallery Item)

```
┌──────────────────┐
│                  │
│    [IMAGE]       │  ← 16:9 aspect ratio thumbnail
│    280x157px     │
│                  │
├──────────────────┤
│ Design Title     │  ← H4, 20px, bold
│ Movement, Era    │  ← Small, 14px, muted
│ by Student Name  │  ← Small, 14px, link
└──────────────────┘

States:
- Default: subtle border, shadow
- Hover: border highlight, slight lift (transform: translateY(-4px))
- Focus: thick border (keyboard nav)
```

### 2. Primary Button

```
┌─────────────────────┐
│  Submit for Review  │  ← Bold, 16px, centered
└─────────────────────┘

States:
- Default: Brand color background, white text
- Hover: Darker shade, slight scale (1.05x)
- Active: Even darker, scale (0.98x)
- Disabled: Gray, 50% opacity, cursor: not-allowed
- Focus: Thick outline for keyboard nav
```

### 3. Secondary Button (Link Style)

```
View Demo →

States:
- Default: Brand color text, underline on hover
- Hover: Darker shade, arrow moves right (2px)
- Active: Even darker
- Focus: Outline
```

### 4. Movement Tag (Badge)

```
[Bauhaus]  [1920s-1930s]

Style:
- Small, 12px uppercase text
- Rounded corners (4px)
- Background: light brand color
- Padding: 4px 8px
- Display: inline-block
```

### 5. Filter Checkbox

```
□ Bauhaus (12)  ← Shows count of designs

States:
- Unchecked: Gray border
- Checked: Brand color fill, white checkmark
- Hover: Border highlight
- Focus: Outline
```

### 6. Form Input

```
┌─────────────────────────┐
│ Placeholder text...     │
└─────────────────────────┘

States:
- Default: Gray border, white bg
- Focus: Brand color border, subtle glow
- Error: Red border, error message below
- Disabled: Gray bg, cursor: not-allowed
- Valid: Green border (after validation)
```

### 7. Navigation Link

```
Gallery  |  Movements  |  Submit

States:
- Default: Gray text
- Hover: Brand color text
- Active (current page): Brand color, underline
- Focus: Outline
```

### 8. Thumbnail Image

```
┌──────────────┐
│              │
│   [IMAGE]    │
│   16:9       │
│              │
└──────────────┘

Properties:
- Object-fit: cover (maintain aspect ratio)
- Loading: lazy (performance)
- Alt text: required (accessibility)
- Border-radius: 4px
```

---

## Accessibility Annotations

### Focus States
- **All interactive elements** have visible focus indicators (3px outline, brand color)
- Focus order follows logical tab sequence (top to bottom, left to right)

### ARIA Labels
- Navigation: `<nav aria-label="Primary navigation">`
- Search: `<input aria-label="Search designs">`
- Filters: `<aside aria-label="Gallery filters">`
- Buttons: Descriptive text or aria-label

### Keyboard Navigation
- **Gallery cards:** Enter/Space opens detail page
- **Filters:** Arrow keys navigate options, Space toggles checkboxes
- **Modals:** Escape closes, focus trapped within modal
- **Form:** Tab through fields, Enter submits

### Screen Reader Considerations
- Skip to main content link (hidden visually, available to SR users)
- Heading hierarchy (H1 → H2 → H3, no skipping)
- Image alt text: Descriptive (e.g., "Bauhaus-inspired grid layout with geometric shapes and primary colors")
- Link text: Descriptive (not "click here")
- Form labels: Programmatically associated with inputs
- Error messages: Announced to SR users
- Loading states: aria-live regions

### Color Contrast
- Body text: 4.5:1 minimum (WCAG AA)
- Large text (18pt+): 3:1 minimum
- Interactive elements: 3:1 minimum against background
- No color-only information (use icons + text)

---

## Interactive States Summary

### Hover States
- **Buttons:** Background darkens, slight scale increase
- **Cards:** Border highlights, lifts (translateY)
- **Links:** Color change, underline appears
- **Filters:** Background tint

### Loading States
- **Page load:** Skeleton screens (gray placeholders)
- **Gallery:** Lazy loading with spinners
- **Form submit:** Button shows "Submitting..." with spinner
- **Image load:** Low-res placeholder → full image fade-in

### Empty States
- **No search results:** "No designs found. Try different filters."
- **Pending submissions (admin):** "No pending submissions. Great work!"
- **No designs in movement:** "Be the first to submit a [Movement] design!"

### Error States
- **Form validation:** Red border + error message below field
- **Network error:** "Connection lost. Retrying..." banner
- **404 page:** Friendly message + link back to gallery
- **Broken demo link:** Warning badge on card

---

## Notes for Developers

### Implementation Tools
- **Wireframes created conceptually** - Ready for design in Figma/Sketch
- **Component-based thinking** - React/Vue/Web Components friendly
- **Mobile-first CSS** - Start with base mobile styles, add breakpoints
- **Eleventy templates** - Each wireframe = template file (Nunjucks)

### Design Tokens Needed
```javascript
// Suggested token structure
colors: {
  brand: '#...', brandDark: '#...', brandLight: '#...',
  gray100: '#...', gray200: '#...', ... gray900: '#...',
  error: '#...', success: '#...', warning: '#...'
}
spacing: { xxs: 4, xs: 8, sm: 16, md: 24, lg: 32, xl: 48, xxl: 64 }
typography: { h1: 48, h2: 36, h3: 24, h4: 20, body: 16, small: 14 }
borderRadius: { sm: 4, md: 8, lg: 16 }
shadows: { sm: '...', md: '...', lg: '...' }
```

### Performance Considerations
- **Image optimization:** WebP format, multiple sizes (srcset)
- **Lazy loading:** Images below fold
- **Pagination:** 24 items initially, infinite scroll or "Load More"
- **Critical CSS:** Inline above-fold styles
- **Caching:** Static pages via Eleventy, CDN for assets

---

## Appendix: Figma Handoff Notes

*If designing in Figma, include these in handoff:*

1. **Component Library** - All buttons, cards, inputs as Figma components
2. **Design System** - Colors, typography, spacing as Figma styles
3. **Prototypes** - Interactive flows for key user journeys
4. **Responsive Frames** - Mobile (375px), Tablet (768px), Desktop (1200px)
5. **Developer Annotations** - Spacing measurements, interaction notes
6. **Assets Export** - Icons, logos in SVG, images in WebP

---

**Document Version:** 1.0  
**Status:** Ready for visual design phase  
**Next Steps:** Create high-fidelity mockups in Figma based on these wireframes  
**Questions/Feedback:** Document in project GitHub discussions

**End of Document**
