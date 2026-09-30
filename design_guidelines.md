# Design Guidelines: PDF Presentation to Website Converter

## Design Approach
**Selected Framework:** Design System Approach (Material Design-inspired)
**Justification:** This is a utility-focused application prioritizing content clarity, navigation efficiency, and professional presentation of document content. Drawing inspiration from modern document platforms like Notion and Google Slides viewer.

**Key Design Principles:**
- Content-first hierarchy with minimal visual distractions
- Smooth navigation patterns for seamless page transitions
- Clean, professional aesthetics suitable for business presentations
- Responsive layouts that adapt presentation content gracefully

## Core Design Elements

### A. Color Palette

**Light Mode:**
- Primary: 236 67% 52% (Professional blue for CTAs and accents)
- Background: 0 0% 100% (Pure white)
- Surface: 220 13% 97% (Subtle gray for cards/sections)
- Text Primary: 222 47% 11% (Near black)
- Text Secondary: 215 14% 34% (Muted gray)
- Border: 220 13% 91% (Light borders)

**Dark Mode:**
- Primary: 236 67% 62% (Lighter blue for accessibility)
- Background: 222 47% 11% (Deep navy-black)
- Surface: 217 33% 17% (Elevated dark surface)
- Text Primary: 0 0% 98% (Near white)
- Text Secondary: 220 9% 65% (Muted light gray)
- Border: 217 33% 23% (Subtle dark borders)

### B. Typography

**Font Families:**
- Primary: 'Inter' (headings, UI elements) - via Google Fonts
- Secondary: 'Inter' (body text, consistent throughout)

**Hierarchy:**
- Hero Headline: text-5xl md:text-6xl, font-bold
- Page Titles: text-3xl md:text-4xl, font-semibold
- Section Headers: text-2xl, font-semibold
- Body Large: text-lg, font-normal
- Body Regular: text-base, font-normal
- Captions: text-sm, text-secondary

### C. Layout System

**Spacing Primitives:** Tailwind units of 2, 4, 8, 12, and 16
- Micro spacing: p-2, gap-2 (tight element spacing)
- Standard spacing: p-4, gap-4, m-4 (component internal)
- Section spacing: py-8, px-8 (mobile), py-16, px-12 (desktop)
- Large spacing: py-12, gap-12 (between major sections)
- Extra large: py-16, gap-16 (hero/feature sections)

**Container Widths:**
- Max content: max-w-7xl mx-auto (main content wrapper)
- Narrow content: max-w-4xl mx-auto (text-heavy sections)
- Full width: w-full (hero, footers)

### D. Component Library

**Navigation:**
- Fixed header with backdrop blur (backdrop-blur-lg bg-background/80)
- Logo left, navigation center/right
- Mobile: Hamburger menu with slide-in drawer
- Breadcrumb navigation for subpages showing slide position

**Hero Section (Main Page):**
- Full-width layout with two-column grid (lg:grid-cols-2)
- Left: Headline, description, CTA buttons, feature bullets
- Right: Large hero image showing PDF upload/preview mockup
- Height: min-h-[600px] with content-based expansion
- Background: Subtle gradient overlay (from primary/5 to transparent)

**PDF Upload Interface:**
- Drag-and-drop zone with dashed border (border-2 border-dashed)
- Icon: Upload cloud icon (Heroicons) centered, size-16
- Hover state: bg-primary/5 with border-primary
- File info display: name, size, page count after upload
- Progress indicator: Animated progress bar during processing

**Content Cards (Slide Display):**
- White/surface background with subtle shadow (shadow-sm hover:shadow-md)
- Rounded corners: rounded-lg
- Padding: p-6 md:p-8
- PDF slide preview: aspect-[4/3] with object-contain
- Slide number badge: Absolute top-right, rounded-full bg-primary text-white

**Navigation Controls:**
- Previous/Next buttons: Fixed bottom-right on subpages
- Rounded-full, shadow-lg, backdrop-blur
- Icons: Heroicons chevron-left/right
- Slide overview: Grid icon opens modal with all slides

**Footer:**
- Three-column layout (lg:grid-cols-3)
- Column 1: Brand info, tagline
- Column 2: Quick links (About, Features, Contact)
- Column 3: Social links, copyright
- Background: bg-surface/50, border-t

### E. Animations

**Minimal, purposeful motion:**
- Page transitions: Slide fade (duration-300)
- PDF upload: Scale-in animation on file drop (scale-95 to scale-100)
- Card hover: Subtle lift (translate-y-[-2px])
- Button press: Scale (active:scale-95)
- Navigation drawer: Slide from right (translate-x-full to translate-x-0)

## Images

**Hero Image (Main Page):**
- Placement: Right column of hero section
- Description: Modern mockup showing PDF presentation being uploaded to the platform, with clean interface preview displaying converted slides in a grid layout. Professional, bright, with subtle depth of field.
- Style: High-quality product screenshot/illustration with soft shadows

**Feature Section Icons:**
- Use Heroicons for feature highlights (document-text, cursor-arrow-rays, device-phone-mobile)
- Size: w-12 h-12 in circular containers with bg-primary/10

**Slide Previews:**
- Actual PDF page renders with aspect ratio preservation
- Placeholder: Skeleton loader (animate-pulse bg-surface) during load

## Special Considerations

**Subpage Structure:**
- Consistent header with "Back to Overview" link
- Main content: Centered slide display (max-w-5xl)
- Sidebar navigation (optional): Slide thumbnails for quick jump
- Footer: Simplified version with next/previous slide links

**Responsive Breakpoints:**
- Mobile: Single column, stacked navigation
- Tablet (md:): Two-column grids where appropriate
- Desktop (lg:): Full multi-column layouts, expanded navigation

**Accessibility:**
- High contrast in both modes (WCAG AA minimum)
- Focus indicators: ring-2 ring-primary ring-offset-2
- Semantic HTML structure for screen readers
- Keyboard navigation support for all interactive elements