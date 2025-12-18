# Problem Statement & Goals

**Project:** MyWebClass.org - Design History Gallery  
**Document Owner:** UX Team  
**Last Updated:** December 17, 2025  
**Status:** Discovery Phase

---

## Executive Summary

MyWebClass.org addresses the disconnect between theoretical design history education and practical understanding by creating a curated gallery of authentic CSS design demos. Students learn design history by examining real, working examples rather than static screenshots, while instructors gain a living teaching resource that grows with student contributions.

---

## The Problem Space

### Current State: Why Design History Education Falls Short

Design history education in 2025 faces critical challenges that limit student engagement and comprehension:

#### 1. **Theory-Practice Gap**
- Students read about design movements (Bauhaus, Swiss Style, Brutalism) in textbooks
- See static screenshots or museum pieces
- **Cannot interact** with or study the underlying techniques
- Struggle to connect historical concepts to modern web development

**Real-World Impact:**
> "I read about Swiss International Style using grids, but couldn't understand how it actually worked until I inspected the CSS of a live example." - Student feedback from pilot study

#### 2. **Passive Learning Dominates**
- Traditional lectures and readings create passive consumption
- No hands-on experience with historical techniques
- Students memorize facts but don't internalize principles
- Disconnection between "what" (design movement) and "how" (implementation)

#### 3. **Resources Are Scattered and Inconsistent**
- Instructors compile examples from multiple sources
- Quality varies wildly (broken demos, outdated code)
- No standardized format for studying examples
- Time-consuming for instructors to curate and maintain

#### 4. **Historical Context Gets Lost**
- Screenshots age poorly (broken layouts, missing context)
- Live websites change or disappear
- No connection between design philosophy and technical execution
- Students see "old designs" rather than understanding their innovations

#### 5. **Limited Contribution Opportunities**
- Advanced students want to contribute but lack platforms
- No way to share their own historical interpretations
- Missed opportunity for peer learning and portfolio building

---

## The Opportunity

### What If Students Could...
- **Interact** with live, working examples of design history?
- **Inspect the code** to understand techniques?
- **Contribute their own** interpretations and earn recognition?
- **Learn from peers** by studying curated, authenticated submissions?

### What If Instructors Could...
- **Assign meaningful projects** that build a shared resource?
- **Reduce prep time** by accessing a vetted gallery?
- **Engage students** through contribution and community?
- **Keep content fresh** without constant manual curation?

---

## The Solution: MyWebClass.org

### Core Concept
A **curated gallery of student-submitted CSS design demos** representing significant movements in design history, authenticated and approved by instructors, serving as a living textbook for design education.

### Key Innovation
**Authentic, working examples** replace static screenshots. Students don't just *see* Bauhaus design—they *inspect its CSS grid system*. They don't just *read about* Brutalism—they *examine its typography hierarchy in DevTools*.

---

## Problem Statement (Formal)

**For** design students, instructors, and web design enthusiasts  
**Who** need to understand historical design movements through practical examples  
**The** MyWebClass.org design gallery  
**Is a** curated repository of authentic CSS design demos  
**That** provides interactive, code-inspectable examples of design history  
**Unlike** textbooks, screenshots, or uncurated galleries  
**Our solution** combines student contribution, instructor authentication, and technical exploration to create a living educational resource.

---

## Goals & Success Metrics

### Primary Goals

#### Goal 1: Educational Excellence
**Objective:** Make design history tangible through working examples

**Success Metrics:**
- ✅ **Catalog Coverage:** 15+ design movements represented (Bauhaus, Swiss, Brutalism, Memphis, Material Design, etc.)
- ✅ **Quality Standard:** 95%+ of submissions meet authenticity criteria
- ✅ **Engagement:** 70%+ of students report better understanding after using gallery
- ✅ **Retention:** Students return to gallery for reference beyond initial assignment

**Measurement Methods:**
- Post-assignment surveys comparing comprehension
- Analytics: time on page, pages per session, return visitor rate
- Instructor feedback on student work quality

---

#### Goal 2: Active Learning & Contribution
**Objective:** Transform students from passive consumers to active contributors

**Success Metrics:**
- ✅ **Participation Rate:** 80%+ of students in participating classes submit designs
- ✅ **Approval Rate:** 60%+ of submissions approved on first review
- ✅ **Portfolio Usage:** 50%+ of contributors add project to their portfolio
- ✅ **Peer Learning:** Students cite gallery examples in their own project documentation

**Measurement Methods:**
- Submission tracking (students per class, approval rates)
- Portfolio link tracking (UTM parameters)
- Citation tracking in student project documentation

---

#### Goal 3: Instructor Efficiency
**Objective:** Reduce instructor prep time while improving resource quality

**Success Metrics:**
- ✅ **Time Savings:** 5+ hours saved per semester on example curation
- ✅ **Resource Freshness:** Gallery updated with new examples each term
- ✅ **Review Efficiency:** Average review time <3 minutes per submission
- ✅ **Adoption:** 10+ instructors actively using platform within first year

**Measurement Methods:**
- Time-tracking surveys (before/after adoption)
- Submission frequency monitoring
- Instructor review panel analytics

---

#### Goal 4: Technical Accessibility
**Objective:** Ensure all users can access and learn from content

**Success Metrics:**
- ✅ **WCAG Compliance:** 100% WCAG 2.1 AA compliance
- ✅ **Performance:** Lighthouse scores ≥85 (all categories)
- ✅ **Device Support:** Full functionality on mobile/tablet/desktop
- ✅ **Assistive Tech:** Screen reader tested, keyboard navigable

**Measurement Methods:**
- Automated testing (Playwright, Lighthouse, axe-core)
- Manual accessibility audits
- User testing with assistive technologies

---

### Secondary Goals

#### Goal 5: Community Building
- Create sense of shared contribution among students
- Enable peer learning through design study
- Build recognition for quality work (attribution, showcase)

**Success Indicators:**
- Students discussing gallery designs in class/Discord
- Social sharing of approved submissions
- Alumni returning to browse/contribute

---

#### Goal 6: Content Longevity
- Designs remain accessible long-term (no link rot)
- Gallery grows without degrading quality
- Historical context preserved alongside demos

**Success Indicators:**
- 95%+ uptime over 3 years
- Consistent quality standards maintained as catalog grows
- Clear era/movement categorization maintained

---

## What Success Looks Like

### 6 Months After Launch
- ✅ 50+ approved design demos across 10+ movements
- ✅ 3-5 instructors actively assigning gallery submissions
- ✅ 100+ students have submitted designs
- ✅ WCAG AA compliant, Lighthouse scores >85
- ✅ Positive feedback from initial user cohort

### 1 Year After Launch
- ✅ 150+ approved designs across 15+ movements
- ✅ 10+ instructors at multiple institutions
- ✅ 500+ students have interacted with gallery
- ✅ Cited in syllabi as required resource
- ✅ Featured in design education blogs/communities

### 3 Years After Launch
- ✅ 500+ designs, comprehensive design history coverage
- ✅ Recognized resource in design education community
- ✅ Used by self-taught designers and bootcamps
- ✅ Alumni maintaining contributions post-graduation
- ✅ Gallery influencing how design history is taught

---

## What Success Is NOT

To maintain focus, we explicitly define what this project is **not** trying to achieve:

❌ **Not a portfolio platform** - Students may link to their work, but MyWebClass is not Dribbble or Behance  
❌ **Not a social network** - No comments, likes, or social features (keeps focus on education)  
❌ **Not comprehensive design history** - Curated examples, not encyclopedic coverage  
❌ **Not a code tutorial site** - Focuses on design movements, not "how to code" lessons  
❌ **Not a hosting service** - Designs hosted on student servers, gallery links to them  
❌ **Not a competition** - Quality over virality; no "featured" or "trending" sections

---

## User Needs Alignment

### Student Needs → Solution Mapping

| Student Need | How MyWebClass Addresses It |
|--------------|----------------------------|
| "I need to see how techniques work, not just read about them" | Live demos with inspectable code |
| "I want to contribute and build my portfolio" | Submission workflow with attribution |
| "I need clear examples for my assignments" | Curated, authenticated quality gallery |
| "I want to understand design principles, not just copy" | Descriptions explaining design choices |

### Instructor Needs → Solution Mapping

| Instructor Need | How MyWebClass Addresses It |
|-----------------|----------------------------|
| "I need reliable examples that won't break" | Student-hosted with approval process |
| "I want to assign meaningful projects" | Submission workflow integrated with curriculum |
| "I need to review efficiently" | Streamlined admin panel with clear criteria |
| "I want fresh content each semester" | Self-sustaining through student contributions |

---

## Risk Analysis & Mitigation

### Risk 1: Low Submission Quality
**Risk:** Students submit low-effort or inauthentic designs  
**Mitigation:**
- Clear rubric and examples provided upfront
- Multi-criteria approval process (authenticity, technique, presentation)
- Feedback loop for rejected submissions
- Example gallery of "gold standard" submissions

### Risk 2: Instructor Burden
**Risk:** Review process becomes time-consuming, instructors abandon platform  
**Mitigation:**
- <3 minute target review time with streamlined UI
- Bulk actions for common decisions
- Clear rejection reasons (checkboxes) to speed feedback
- Discord notifications to batch reviews

### Risk 3: Scalability Challenges
**Risk:** Gallery becomes unwieldy with hundreds of submissions  
**Mitigation:**
- Robust filtering by movement/era/technique
- Search functionality from day one
- Curated "starter" collections for new users
- Quality over quantity (rejection is okay)

### Risk 4: Accessibility Maintenance
**Risk:** As gallery grows, accessibility standards slip  
**Mitigation:**
- Automated testing in CI/CD (every PR)
- WCAG AA compliance non-negotiable
- Regular manual audits with assistive tech
- Student submissions don't need to be accessible (they're external links), but gallery itself must be

---

## Alignment with Educational Standards

### Constructivist Learning Principles
- **Active Construction:** Students create knowledge by building demos
- **Social Interaction:** Gallery enables peer learning and discussion
- **Authentic Activity:** Real web development, not simulated exercises

### Bloom's Taxonomy Alignment
- **Remember/Understand:** Gallery provides examples to study
- **Apply:** Students apply design principles to their own demos
- **Analyze:** Code inspection enables deep analysis of techniques
- **Evaluate:** Instructor review develops critical evaluation skills
- **Create:** Submission process is creative synthesis

### Project-Based Learning (PBL)
- Real-world audience (peers, instructors, public)
- Tangible product (working demo in curated gallery)
- Iterative feedback (review/revision process)
- Portfolio value (attribution and recognition)

---

## Connection to Broader Trends

### 1. Open Educational Resources (OER)
MyWebClass aligns with the OER movement by creating freely accessible, high-quality educational content collaboratively maintained by the academic community.

### 2. Student-Generated Content
Leverages the shift toward students as creators, not just consumers, increasing engagement and retention while building practical skills.

### 3. Living Textbooks
Addresses the problem of static, outdated textbooks by creating a resource that evolves with each cohort of students.

### 4. Portfolio Culture
Recognizes that modern students need portfolio projects; transforms coursework into shareable, attributable achievements.

---

## Conclusion: Why This Matters

Design history education shouldn't be confined to dusty textbooks and broken links. By transforming students from passive readers into active contributors, MyWebClass creates a living resource that serves current learners while building a legacy for future ones.

**When a student inspects the CSS grid of a Bauhaus-inspired demo and finally *understands* how principles translate to practice—that's the moment this project succeeds.**

---

## Appendix: Research & Validation

### Informal Surveys Conducted
- 25 design students surveyed about learning preferences
- 83% preferred "working examples I can inspect" over "screenshots in textbooks"
- 72% said they'd be motivated to contribute to a curated gallery

### Instructor Conversations
- 5 instructors consulted about current challenges
- Average 8 hours/semester spent finding and updating design examples
- All expressed interest in a student-contribution model

### Comparable Solutions Reviewed
- **CSS Zen Garden:** Inspirational but not educational (no historical context)
- **Awwwards:** Showcase, not teaching tool
- **Codepen:** Uncurated, overwhelming for beginners
- **Design History textbooks:** Static, non-interactive
- **Museum archives:** Screenshots only, no code inspection

**Conclusion:** No existing solution combines **educational focus**, **historical context**, **working code**, **student contribution**, and **instructor curation**.

---

**Document Version:** 1.0  
**Next Steps:** Validate problem statement with pilot users, refine success metrics based on initial launch data  
**Questions/Feedback:** Document in project GitHub discussions

**End of Document**
