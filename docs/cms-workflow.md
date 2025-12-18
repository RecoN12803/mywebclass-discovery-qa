# CMS & Workflow Documentation

**Project:** MyWebClass.org - Design History Gallery  
**Last Updated:** December 18, 2025  
**Purpose:** Document content management and approval workflows

---

## Executive Summary

MyWebClass.org uses **workflow-enforced quality control** at the CMS level, not ad-hoc decisions. All submissions follow a structured state machine from submission to publication, ensuring consistent standards and instructor efficiency.

---

## Submission State Machine

### State Diagram

```
┌──────────────┐
│   Student    │
│  Submits     │
└──────┬───────┘
       │
       v
┌──────────────────┐
│  PENDING         │ ← Initial state
│  (CMS Queue)     │
└──────┬───────────┘
       │
       │ Instructor Reviews
       │
       ├─────────────────┐
       v                 v
┌──────────────┐   ┌─────────────┐
│  APPROVED    │   │  REJECTED   │
│  (Public)    │   │  (Private)  │
└──────┬───────┘   └──────┬──────┘
       │                  │
       v                  v
┌──────────────┐   ┌─────────────┐
│  Gallery     │   │  Feedback   │
│  Display     │   │  Loop       │
└──────────────┘   └─────────────┘
```

### State Definitions

| State | Description | Visibility | Actions Available | Notifications |
|-------|-------------|------------|-------------------|---------------|
| **PENDING** | Awaiting instructor review | Instructor only | Review, Approve, Reject | Discord webhook to instructor |
| **APPROVED** | Meets quality standards | Public (gallery) | Edit metadata, Archive | Email to student (success) |
| **REJECTED** | Does not meet standards | Student only (via email) | Resubmit with changes | Email to student (with feedback) |
| **ARCHIVED** | Removed from active gallery | Admin only | Restore, Delete | None |

---

## Instructor Review Workflow

**Persona:** Dr. Taylor Chen (Design History Instructor)  
**Goal:** Review 60+ student submissions per semester in <3 minutes per submission  
**Context:** Batch reviews during office hours, needs one-screen decision-making

### Review Interface Requirements

**Single-Screen Layout:**
```
┌────────────────────────────────────────────────────────┐
│ Submission #247 - Alex Martinez                        │
│ Submitted: Nov 15, 2025, 9:32 PM                       │
├────────────────────────────────────────────────────────┤
│                                                         │
│  ┌─────────────────────────┐   METADATA               │
│  │                         │   • Movement: Bauhaus     │
│  │   [SCREENSHOT]          │   • Era: 1920s-1930s      │
│  │                         │   • Email: alex@pdx.edu   │
│  └─────────────────────────┘   • Techniques:           │
│                                   - CSS Grid            │
│  🔗 View Live Demo                - Primary Colors     │
│  🔗 View GitHub Code              - Sans-serif Type    │
│                                                         │
│  DESCRIPTION:                                           │
│  "I recreated Bauhaus principles using geometric       │
│   shapes, primary colors (red, yellow, blue)..."       │
│                                                         │
├────────────────────────────────────────────────────────┤
│  QUALITY CHECKLIST (Auto-scored)                       │
│  ✅ Authentic style characteristics                    │
│  ✅ Working demo URL                                   │
│  ✅ Code repository linked                             │
│  ✅ Description provided                               │
│  ⚠️  Low contrast detected (manual review needed)      │
├────────────────────────────────────────────────────────┤
│  DECISION                                               │
│  [Approve] [Reject with Feedback] [Request Changes]    │
│                                                         │
│  Rejection Reason (if applicable):                     │
│  ☐ Inauthentic style interpretation                   │
│  ☐ Broken demo link                                   │
│  ☐ Insufficient documentation                         │
│  ☐ Technical issues                                   │
│  ☐ Other: _______________                             │
└────────────────────────────────────────────────────────┘
```

### Approval Criteria (Automated + Manual)

**Automated Pre-Screening:**
- ✅ Demo URL returns 200 status code
- ✅ GitHub repo is public
- ✅ Screenshot uploaded successfully
- ✅ Description ≥100 characters
- ✅ Required fields completed

**Manual Quality Assessment:**
1. **Historical Accuracy** (Primary)
   - Design uses characteristics authentic to stated movement
   - Color palette, typography, composition match period
   - No anachronistic elements (e.g., modern UI patterns in 1920s Bauhaus)

2. **Technical Execution** (Secondary)
   - Demo functions without errors
   - Code is readable and well-structured
   - Responsive design (if applicable to movement)

3. **Educational Value** (Tertiary)
   - Description explains design choices
   - Student demonstrates understanding of principles
   - Example would help future students learn

**Decision Time Benchmark:** <3 minutes (Goal from Problem Statement)

---

## Student Submission Workflow

**Persona:** Alex Martinez (Design Student)  
**Goal:** Submit Bauhaus demo, get approval, display in gallery  
**Context:** First time submitting, needs clear guidance

### Submission Form Flow

**Page: /submit**

```
┌────────────────────────────────────────────────────────┐
│ Submit Your Design                                      │
├────────────────────────────────────────────────────────┤
│                                                         │
│  Step 1: Your Information                               │
│  ┌─────────────────────────────────────────┐           │
│  │ Name: [________________]                │           │
│  │ Email: [_______________]                │           │
│  │ Institution: [__________]               │           │
│  └─────────────────────────────────────────┘           │
│                                                         │
│  Step 2: Design Details                                 │
│  ┌─────────────────────────────────────────┐           │
│  │ Design Style: [▼ Select Movement]       │           │
│  │   Options: Bauhaus, Swiss, Brutalism... │           │
│  │                                          │           │
│  │ Demo URL: [____________________]         │           │
│  │   Example: https://yourname.github.io   │           │
│  │                                          │           │
│  │ GitHub Repo: [__________________]        │           │
│  │   Example: github.com/you/project       │           │
│  └─────────────────────────────────────────┘           │
│                                                         │
│  Step 3: Screenshot                                     │
│  ┌─────────────────────────────────────────┐           │
│  │ [Upload Screenshot]                     │           │
│  │ Recommended: 1280x720, PNG or WebP      │           │
│  └─────────────────────────────────────────┘           │
│                                                         │
│  Step 4: Describe Your Design (Required)                │
│  ┌─────────────────────────────────────────┐           │
│  │ [Text area - 500 characters max]        │           │
│  │ Explain how you used authentic design   │           │
│  │ principles from your chosen movement.   │           │
│  │                                          │           │
│  │ Character count: 0 / 500                │           │
│  └─────────────────────────────────────────┘           │
│                                                         │
│  [ ] I confirm this is my original work                │
│  [ ] I agree to terms of use                           │
│                                                         │
│  [Submit for Review]                                    │
│                                                         │
└────────────────────────────────────────────────────────┘
```

### Post-Submission Experience

**Success Page: /submit/success**

```
┌────────────────────────────────────────────────────────┐
│ ✅ Submission Received!                                 │
├────────────────────────────────────────────────────────┤
│                                                         │
│  Thank you, Alex! Your Bauhaus design has been         │
│  submitted for review.                                  │
│                                                         │
│  WHAT HAPPENS NEXT:                                     │
│  1. Your instructor will review within 48 hours        │
│  2. You'll receive an email when a decision is made    │
│  3. If approved, your design appears in the gallery    │
│                                                         │
│  SUBMISSION DETAILS:                                    │
│  • Submission ID: #247                                 │
│  • Submitted: Nov 15, 2025, 9:32 PM                    │
│  • Style: Bauhaus                                      │
│                                                         │
│  📧 Confirmation sent to: alex@pdx.edu                  │
│                                                         │
│  [Track Your Submission] [Submit Another]              │
│                                                         │
└────────────────────────────────────────────────────────┘
```

**Pain Point Addressed:** This design directly solves Stage 5 (Waiting Period) from Customer Journey Map by providing:
- Clear expectations (48-hour timeline)
- Submission tracking link
- Email confirmation
- Submission ID for reference

---

## Notification Workflows

### Discord Webhook (Instructor Notification)

**Trigger:** New submission enters PENDING state  
**Destination:** Private instructor Discord channel  
**Purpose:** Enable batch review during office hours

**Message Format:**
```
🎨 New Design Submission

Student: Alex Martinez
Style: Bauhaus (1920s-1930s)
Submitted: 5 minutes ago

📋 Review: https://mywebclass.org/admin/submissions/247
🔗 Demo: https://alexmartinez.github.io/bauhaus-demo

Quick Actions: [Approve] [Review] [Reject]
```

**Batching Strategy:**
- Notifications sent every 15 minutes (not real-time) to prevent interruption
- Digest mode: If 5+ submissions in queue, send summary instead of individual messages

---

### Email Notifications (Student Feedback)

#### Approval Email

**Subject:** ✅ Your Bauhaus design was approved!

```
Hi Alex,

Great news! Your Bauhaus design submission has been approved by Professor Chen.

Your design is now live in the MyWebClass.org gallery:
https://mywebclass.org/design/alex-martinez-bauhaus-grid

Share it:
• Add to your portfolio
• Link from your resume
• Share on social media

Submission Details:
• Submitted: Nov 15, 2025
• Approved: Nov 17, 2025
• Style: Bauhaus (1920s-1930s)

Keep exploring design history!
– The MyWebClass Team
```

#### Rejection Email (with Constructive Feedback)

**Subject:** Your design submission needs revision

```
Hi Alex,

Thank you for submitting your Bauhaus design. Professor Chen has reviewed your work and provided feedback for improvement.

Feedback:
"Your color palette is excellent, but the typography doesn't reflect authentic Bauhaus principles. Consider using sans-serif fonts and exploring geometric letterforms. See the gallery example for reference."

Recommended Actions:
1. Review authentic Bauhaus examples in the gallery
2. Adjust typography to match period-appropriate styles
3. Resubmit when ready

Resubmit here: https://mywebclass.org/submit?resubmission=247

Original Submission:
• Style: Bauhaus
• Submitted: Nov 15, 2025

Questions? Reply to this email or contact Professor Chen during office hours.

– The MyWebClass Team
```

---

## CMS Workflow Implementation (Sanity Studio)

### Custom Review Dashboard

**Sanity Studio Structure:**
```javascript
// /sanity-studio/deskStructure.js

export default (S) =>
  S.list()
    .title('Content')
    .items([
      // Review Queue (Instructors see this first)
      S.listItem()
        .title('📥 Review Queue')
        .child(
          S.documentList()
            .title('Pending Submissions')
            .filter('_type == "submission" && status == "pending"')
            .child(documentId =>
              S.document()
                .documentId(documentId)
                .schemaType('submission')
                .views([
                  S.view.form(), // Standard form
                  S.view.component(ReviewInterface).title('Review') // Custom UI
                ])
            )
        ),

      // Published Designs
      S.listItem()
        .title('✅ Approved Designs')
        .child(
          S.documentList()
            .title('Live in Gallery')
            .filter('_type == "design" && status == "approved"')
        ),

      // Other sections...
    ])
```

### Approval Action (Custom Button)

```javascript
// /sanity-studio/actions/approveSubmission.js

export default {
  label: 'Approve & Publish',
  icon: CheckmarkIcon,
  onHandle: async ({ draft, published, client }) => {
    // Convert submission → design document
    const design = {
      _type: 'design',
      title: draft.title,
      movement: draft.movement,
      student: draft.studentName,
      demoUrl: draft.demoUrl,
      screenshot: draft.screenshot,
      description: draft.description,
      approvedBy: currentUser,
      approvedAt: new Date().toISOString(),
      status: 'approved'
    }

    await client.create(design)
    await client.delete(draft._id) // Remove from pending
    
    // Trigger email notification (webhook)
    await fetch('/api/notify-approval', {
      method: 'POST',
      body: JSON.stringify({ studentEmail: draft.email, designId: design._id })
    })

    // Trigger Eleventy rebuild (Netlify webhook)
    await fetch(process.env.NETLIFY_BUILD_HOOK, { method: 'POST' })
  }
}
```

---

## Workflow Benefits

### For Students (Alex Martinez)
✅ Clear submission process (4 steps, <5 minutes)  
✅ Automatic confirmation  
✅ Status transparency (no 2-day anxiety from Journey Map)  
✅ Constructive feedback on rejection  
✅ Portfolio-worthy attribution  

### For Instructors (Dr. Taylor Chen)
✅ Batch review efficiency (<3 min per submission)  
✅ One-screen decision-making  
✅ Pre-screened submissions (automated checks)  
✅ Standardized rejection reasons (no typing)  
✅ Discord notifications prevent email overload  

### For Platform (MyWebClass)
✅ Enforced quality standards (CMS-level)  
✅ Scalable review process (distributed across instructors)  
✅ Audit trail (all state transitions logged)  
✅ Automatic gallery updates (no manual publishing)  

---

## Future Enhancements (Post-MVP)

### Phase 2 Features
- **Student dashboard** - View all submissions, statuses, feedback
- **Peer review** - Optional student feedback before instructor review
- **Analytics** - Approval rates by movement, time-to-review metrics
- **Revision tracking** - Compare original vs. resubmitted versions

### Phase 3 Features
- **AI pre-screening** - GPT-4 Vision checks style authenticity, flags obvious issues
- **Batch actions** - Approve multiple submissions at once
- **Instructor notes** - Private annotations for teaching assistant reference
- **Public comments** - Students discuss designs (moderated)

---

**Workflow Status:** ✅ **FULLY DOCUMENTED**  
**Implementation Status:** 🔴 **BLOCKED** (awaiting development)  
**Tests Ready:** ✅ **YES** (34 workflow tests defined, skipped until implementation)

**End of Document**
