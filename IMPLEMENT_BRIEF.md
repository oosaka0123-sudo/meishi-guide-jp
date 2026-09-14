# Implementation brief

Build the complete Astro site in this repository. Do not stop at a prototype.

## Core concept
Tactile editorial minimalism: a digital paper sample-book for business cards. The site should feel like premium Japanese paper, letterpress, trim marks, ink and typography rather than a SaaS landing page.

3-second feeling: “This is the definitive, beautifully crafted guide to making a business card.”

## Required pages
Create at least these 9 routes, all fully designed and content-complete:
- /
- /how-to/
- /size/
- /paper/
- /design/
- /printing/
- /mistakes/
- /faq/
- /about/
Also create /privacy/ and /contact/.

## Visual system
- Paper background around #F7F3EC, ink around #1D1A17, muted ink, vermilion/copper accents only.
- Strong Japanese Mincho-style display stack with system-safe fallbacks; Gothic/sans for UI/body. No external font dependency if avoidable.
- Asymmetric editorial grid, oversized numbers, crop marks, registration marks, paper edges, grain/noise via CSS/SVG.
- Do not use generic rounded cards, purple gradients, glassmorphism, icon grids, stock-photo hero conventions.
- Every major page must include a meaningful original SVG/illustrative visual in the layout, not decorative filler.
- Use SVGs that depict card dimensions, paper fibers, crop marks, ink registration, emboss/foil, layout grids, and failure examples.

## Hero / opening
Home must have a full-viewport opening sequence that works without video assets: layered paper sheets, crop marks and kinetic typography. It must include a visible Skip control, run briefly, and not force full replay on repeat visits using sessionStorage/localStorage.
After opening, home hero should be full-screen/editorial, not left-copy/right-image template.

## Motion / interaction
- Rich but deliberate: opening sequence, mask/image reveals, editorial wipes, underline draws, section counters, gentle parallax only where meaningful.
- No blanket fade-up on every section.
- Use CSS first; small vanilla JS only where necessary. Avoid heavy animation libraries unless clearly justified.
- Page transitions should be short and graceful using Astro View Transitions if stable.
- prefers-reduced-motion must disable large motion/parallax and opening animation while retaining all content.

## Navigation
- Desktop: minimal indexed navigation with clear current location.
- Mobile: hamburger in top-right, >=44px tap target, full-screen overlay menu, obvious close control.
- No horizontal page overflow at 360px.

## Content
Write real Japanese copy, no lorem ipsum or vague AI slogans. Explain business cards to true beginners.
Use the standard Japanese business-card size 91mm x 55mm where relevant and distinguish trim/bleed/safe-area concepts clearly.
Every page needs a distinct hero/showpiece and a clear next-step link.

## SEO / accessibility / performance
- Proper title, description, canonical, OGP/Twitter metadata, favicon, robots.txt, sitemap support.
- Structured data where appropriate (WebSite, BreadcrumbList, Article/FAQ only when valid).
- Semantic HTML, correct heading order, keyboard support, focus-visible, labels, alt/accessible SVG titles, WCAG 2.2 AA contrast.
- Keep CLS low, use no blocking external image/font requests, reserve visual dimensions, lazy-load non-critical media.
- Performance target is Lighthouse 90+; avoid unnecessary client JS.

## QA acceptance
- npm install and npm run build must succeed.
- Test 360, 390, 430, tablet and desktop widths. No horizontal overflow.
- No broken internal links.
- All pages must share one design system but vary composition/rhythm.
- Create docs/DESIGN_RATIONALE.md explaining concept, art direction, motion rhythm and why the design is specific to business cards.
- Update README with build/run instructions and route list.

Implement now. You may create/edit any files inside this repository. Continue until the build passes.
