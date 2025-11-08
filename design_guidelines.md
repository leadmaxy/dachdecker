# SHK Software Vergleich – Design Guidelines

## Design Approach
**Reference-Based Approach** drawing from professional B2B comparison platforms (Capterra, G2) combined with modern German web standards. The design prioritizes clarity, trust, and efficient information consumption for trade professionals making software purchasing decisions.

## Core Design Principles
1. **Professional Credibility**: Clean, structured layouts that establish trust
2. **Information Hierarchy**: Clear visual distinction between comparison data, features, and calls-to-action
3. **Scannable Content**: Easy-to-digest sections with strong typography and spacing
4. **German Web Conventions**: Respect German language spacing, formal tone, and DSGVO requirements

---

## Typography

**Primary Font**: Inter or Source Sans Pro (Google Fonts)
- Headings: 600-700 weight
- Body: 400 weight
- Emphasis: 500 weight

**Type Scale**:
- H1: text-4xl md:text-5xl (Page titles, hero headlines)
- H2: text-3xl md:text-4xl (Section headers)
- H3: text-2xl (Subsections, comparison categories)
- H4: text-xl (Card titles, feature names)
- Body: text-base md:text-lg (Main content)
- Small: text-sm (Metadata, captions, footnotes)

---

## Layout System

**Spacing Primitives**: Tailwind units of **4, 6, 8, 12, 16**
- Component padding: p-6 to p-8
- Section spacing: py-12 md:py-16 lg:py-20
- Card gaps: gap-6 md:gap-8
- Element margins: mb-4, mb-6, mb-8 for content flow

**Container Strategy**:
- max-w-7xl for main content areas
- max-w-4xl for article/blog content
- Full-width for comparison tables (with horizontal scroll on mobile)

**Grid Patterns**:
- Feature cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Software comparison: 2-column on desktop, stacked on mobile
- Stats/metrics: grid-cols-2 md:grid-cols-4

---

## Component Library

### Navigation
- Sticky top navigation with logo, main menu (6-8 items), CTA button
- Dropdown menus for content clusters (Funktionen, Preismodelle, Trends, etc.)
- Breadcrumb navigation on content pages
- Footer with sitemap, legal links (Impressum, Datenschutz), contact

### Hero Section
- Text-focused hero (no large background image - professionals want information immediately)
- Concise headline + 2-3 sentence value proposition
- Primary CTA: "Software vergleichen" + Secondary: "Kostenlos beraten lassen"
- Quick stats bar below hero (e.g., "50+ Software-Lösungen", "DSGVO-konform", "Unabhängig")

### Comparison Tables
- Sticky header row with software names
- Left column: Feature categories with icons
- Checkmarks/X marks or detailed text for features
- Highlight column for "Empfehlung" (recommended option)
- Expandable rows for detailed specifications
- Mobile: Horizontal scroll with fixed first column

### Content Cards
- Software provider cards: Logo, name, short description, key features (3-4 bullets), price range, "Details ansehen" button
- Topic/article cards: Icon, category label, headline, excerpt (2 lines), read time
- Feature highlight cards: Icon, title, 2-3 sentence description

### FAQ Section
- Accordion pattern with question as header
- Icons for categories (Cloud, Mobile, Wartung)
- Smooth expand/collapse animation
- Schema.org FAQPage markup (implemented in code)

### Call-to-Action Blocks
- Prominent CTA sections between content clusters
- Pattern: Headline + supporting text + button + trust element (e.g., "DSGVO-konform" badge)
- Full-width with contained inner content (max-w-4xl)

### Forms
- Contact/Demo request forms: Label-above-input pattern
- Clear required field indicators (*)
- Grouped inputs with consistent spacing (mb-4)
- Primary button: full-width on mobile, auto-width on desktop
- Inline validation states

### Badges & Labels
- Category tags: rounded-full px-3 py-1 text-sm
- Feature indicators: "Neu", "Beliebt", "DSGVO", "Cloud"
- Trust markers: TÜV, ISO certifications as small icons with tooltips

---

## Images

**Hero Section**: No large hero image - lead with text and trust indicators

**Content Images**:
- Software screenshots: Placed within comparison sections and feature descriptions, max-w-2xl, rounded borders, subtle shadow
- Provider logos: Grid layout in "Unsere Partner" section, grayscale by default
- Feature illustrations: Simple, modern line-art style icons for abstract concepts (Cloud, Mobile, Integration)
- Team/about section: Professional photo if "Über uns" page exists

**Image Treatment**:
- Aspect ratio: 16:9 for screenshots, 1:1 for logos
- Border radius: rounded-lg for cards, rounded-xl for larger images
- Subtle shadows on elevated elements

---

## Page-Specific Layouts

### Homepage
1. Hero with headline + CTAs + stats bar
2. Featured software grid (6-9 cards)
3. Category navigation (Cloud, Mobile, Wartung, etc.) - large clickable cards
4. Comparison preview section - mini table with link to full comparison
5. Content cluster highlights - 3-column grid linking to deep-dive articles
6. FAQ section (6-8 questions)
7. Final CTA block + Footer

### Comparison Pages (e.g., "Cloud vs On-Premise")
1. Page header with breadcrumb
2. Introduction paragraph (max-w-3xl)
3. Quick comparison table (3-5 rows, key differences)
4. Detailed sections for each option (alternating layout)
5. FAQ specific to topic
6. Related articles grid
7. CTA block

### Content Article Pages (e.g., "Mobile Zeiterfassung")
1. Article header with category badge, title, meta (author, date, read time)
2. Table of contents (sticky sidebar on desktop)
3. Article content (max-w-prose, generous line-height)
4. Embedded comparison tables/cards within content
5. FAQ section
6. Related articles
7. CTA block

---

## Animations
Use sparingly:
- Smooth transitions on hover states (150ms)
- Accordion expand/collapse (300ms ease-out)
- Page load: Subtle fade-in for hero content only
- No scroll-triggered animations - professionals want immediate access to information