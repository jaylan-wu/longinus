# Design Foundations

This file records current implementation values and reviewed design decisions without treating provisional code as final approval. Reconcile Figma values with existing CSS tokens deliberately; do not create a token for every one-off measurement.

## Current status

Audited against source and the recorded browser comparisons on **2026-07-27**.

- The homepage desktop-idle frame is stored at `references/homepage/homepage-desktop-idle-v1.png` and tracked as **In progress**.
- Current homepage CSS implements the frame's major regions, but no recorded browser comparison establishes a match.
- The approved About Identity desktop-idle frame is stored at
  `references/about/about-identity-desktop-idle-v1.png` and its scoped static
  composition is implemented.
- About Identity was compared at `1440 × 900`, then reviewed at
  `1440 × 800`, `1680 × 1050`, `1920 × 1200`, `2240 × 1400`, and
  `2560 × 1600`.
- Fonts are unbundled system fallbacks.
- The spear is procedural staging geometry rather than the final asset.
- The static compositions for the four About chapters after Identity, the
  finished narrow composition, authored spear motion, and complete site-wide
  accessibility/device review remain unapproved.

## Color palette

The application palette is defined by CSS custom properties in `src/index.css`; scene code mirrors required values in `src/styles/colors.ts`. `AGENTS.md` defines the semantic rules.

| Role | Value | CSS token | Current status |
| --- | --- | --- | --- |
| Background | `#09090b` | `var(--color-background)` | Implemented |
| Surface | `#141317` | `var(--color-surface)` | Implemented |
| Foreground | `#e8e4dc` | `var(--color-foreground)` | Implemented |
| Muted | `#8d8882` | `var(--color-muted)` | Implemented |
| Spear / disruption | `#d92332` | `var(--color-primary)` | Implemented; reserve for spear-related impact and disruption |
| Identity / personal context | `#7a5aa6` | `var(--color-secondary)` | Implemented |
| Active system state | `#f28c28` | `var(--color-highlight)` | Implemented |

The procedural spear also uses the implementation-only deep/shadow reds `#86131f` and `#510b14`. Re-evaluate those material colors with the final asset.

## Typography

No font files are present. The current CSS tokens are provisional:

| Current role | CSS token or stack | Current use | Status |
| --- | --- | --- | --- |
| Display | `var(--font-display)` → `"Times New Roman Condensed", "Times New Roman", Times, serif` | Identity display, navigation labels, title-card copy, watermark, and page index | Staged system stack; rendered face varies by device |
| Base interface/content | `var(--font-sans)` → `Arial, Helvetica, sans-serif` | Body default and interface/content not otherwise overridden | Staged system stack |
| Metadata/identifier | `var(--font-mono)` → `"SFMono-Regular", Consolas, "Liberation Mono", monospace` | System labels, indices, footer metadata | Staged system stack; rendered face varies by device |
| Homepage structural label | `"Archivo Narrow", "Arial Narrow", sans-serif` | `ARCHIVE:` label | One-off staged stack; Archivo Narrow is not bundled and normally falls back |

The intended Display, System, Content, and Identifier roles are not yet a complete approved typography system.

### Current homepage mapping

| Element | Current implementation | Verification note |
| --- | --- | --- |
| `JAYLAN WU` | `var(--font-display)`, weight `600`, responsive per-line sizing and horizontal scaling in `src/features/home/home.css` | Differs by installed system fonts; not comparison-approved |
| `ARCHIVE:` | narrow sans fallback, `2.875rem`, weight `700`, uppercase | The stored export says `PORTFOLIO:`; this copy difference is unresolved |
| Random title-card phrase | `var(--font-display)`, `2.875rem`, weight `700` | Selected from six phrases once when the module loads; content and longest-line fit require review |
| Primary navigation labels | `var(--font-display)`, `3.05rem`, line height `0.88`, weight `600`, letter spacing `-0.06em` | Pointer/keyboard focus styling exists; exact metrics are unverified |
| System/footer labels | `var(--font-mono)`, generally `0.875rem` | Media queries adjust some desktop sizes |
| `LONGINUS` watermark | `var(--font-display)`, outlined, weight `400` | Ambient, cropped, and non-interactive |
| `00` scene index | `var(--font-display)`, `clamp(21rem, 31vw, 38rem)`, weight `700` | Shared `PageIndex` treatment; unverified against Figma |

### Current About Identity mapping

| Element | Current implementation | Verification note |
| --- | --- | --- |
| Four-line display statement | Existing `var(--font-display)` family, weight `700`, `clamp(4.5rem, 5.14vw, 8rem)`, `0.946` line height, controlled horizontal staging | Renders at approximately `74px` on a `70px` cadence at the baseline while preserving the approved font family |
| Opening statement | Existing `var(--font-sans)` family, `clamp(0.8125rem, 0.9vw, 1.125rem)`, `1.52` line height | Renders at `13px / 19.76px` at the baseline with reference-matched line breaks |
| Chapter/system labels | `var(--font-mono)`, `12px` at baseline | The persistent visual chapter label is shell-owned; semantic section headings remain in the document |
| Axis identifiers | `var(--font-mono)`, responsive from the baseline within bounded sizes | System identifiers remain visually distinct from narrative copy |
| Axis support | Existing `var(--font-sans)` family, `clamp(0.75rem, 0.9vw, 1rem)`, `1.4` line height, bounded to `26ch` | Baseline copy follows the reference's four-line cadence and remains visible at `1440 × 800` |
| Axis short statements | Existing `var(--font-display)` family with bounded `20–20.8px` baseline sizing and controlled two-line wrapping | Reference wording and vertical placement are synchronized with the editorial and runtime sources |
| `04` scene index | Unmodified shared `PageIndex` used by Home | Uses the same fixed right/bottom viewport alignment, type metrics, opacity, and responsive rule as Home |

If a final typeface is approved, add the legally usable assets, update CSS, and update this document in the same change.

## Layout and canonical viewport

The canonical desktop comparison viewport for the supplied Home and About
Identity frames is `1440 × 900` (`16:10`). It is a comparison frame, not a
fixed browser requirement.

| Region | Current implementation | Status |
| --- | --- | --- |
| Home desktop split | `45.14% / 54.86%` columns with a divider at `45.14%` | Staged from current CSS |
| Home ambient grid | `90px × 90px` background lines | Implemented visual treatment; not an approved component grid |
| Home outer frame | Fixed insets defined in `src/features/home/home.css` | Implemented; comparison unverified |
| About Identity desktop split | `67.64% / 32.36%`, shared by header, narrative, and sticky scene | Compared at the canonical viewport |
| About persistent chapter anchor | Shell-owned fixed area beginning at the same baseline top-left position for every chapter, with width reserved for the longest label | Pointer, keyboard, and observer-driven text changes verified without anchor movement |
| About larger desktop | Relative tracks plus height-aware custom properties and bounded `clamp()` sizing; no full-page transform | Reviewed at four larger `16:10` viewports without horizontal overflow or a fixed `1440px` island |
| About short desktop | Height-aware Identity spacing at `1440 × 800`; no internal chapter scroller | Browser-reviewed |
| Narrow layout | Existing feature-owned single-column fallbacks remain below their breakpoints | Implemented CSS; final mobile/device review unverified |

### About Identity spacing audit

The canonical comparison covered the page header-to-content and
header-to-chapter-anchor gaps; chapter identifier/title spacing; the
display/opening/axes sequence; internal and inter-record axis spacing; the
name/location/signature metadata row; content-to-negative-space-to-scene
relationships; spear-to-navigation and navigation-to-edge spacing; and the
lines and markers attached to those regions. The page index is aligned against
Home's shared treatment rather than the About export. Future About frames must
repeat this audit for their chapter-specific content rather than inheriting
Identity measurements without comparison.

## Borders, dividers, and focus

- The Home outer frame, navigation separators, main divider, and scene circle are current structural treatments.
- Available Home links, About's site-level `Index` link, and the right-side
  About chapter controls share the `navigation-action` primitive: a `320ms`
  displaced label, `400ms` background wipe, `240ms` edge, crosshair cursor,
  and a `2px` `:focus-visible` outline. Home and `Index` use orange; the
  chapter controls use red.
- Reduced motion removes the shared padding/skew displacement while retaining
  the orange edge, wipe, text, and outline feedback.
- The About chapter navigator retains its compact layout while reusing the Home
  navigation animation with a scoped red accent.
- Planned destinations are disabled buttons and do not show available-link focus/hover behavior.
- About pointer, keyboard-focus, and reduced-motion states received a recorded
  browser inspection; final contrast and site-wide state-comprehension approval
  remain open.

## Iconography and imagery

- Home does not currently use runtime iconography.
- The stored Home and About exports are review references only and must never
  be imported as full-page application UI.
- The spear pictured in Figma defines intended silhouette and staging. Home and
  Projects currently render temporary Three.js primitive geometry plus a CSS
  silhouette beneath the canvas.
- About reuses the same procedural geometry in an About-owned scene and has no
  CSS spear silhouette. Its Identity framing was compared against the
  reference, but the placeholder cannot reproduce the authored forked and
  twisting silhouette.

Runtime assets belong in `src/assets/`, feature-owned `src/features/*/assets/`, or `public/`. Review exports belong in `design/figma/references/`.

## Accessibility and responsive verification

| Requirement | Current code | Verification status |
| --- | --- | --- |
| Semantic navigation | Links for available routes; buttons for About chapter selection; disabled buttons for planned Home routes | About site/chapter controls exercised with keyboard; site-wide review remains open |
| Semantic headings | About has one page heading, one heading per chapter, and a separate `aria-hidden` persistent visual chapter title | DOM structure and active chapter semantics browser-inspected |
| Visible focus | Orange outline plus non-color edge/background feedback on shared available-navigation actions; distinct chapter-button focus | Home and About shared action inspected with keyboard; final contrast approval remains open |
| Reduced motion | Global baseline plus shared navigation displacement removal, auto chapter scrolling, and stable Identity spear | Browser-reviewed for About Identity |
| WebGL unavailable | Home has a CSS silhouette; About preflights context creation, omits its canvas, and keeps all narrative and controls in the DOM when WebGL cannot render | About forced-unavailable-context semantics browser-reviewed; full site forced-failure review remains open |
| Route teardown | About canvas unmounts when navigation returns Home | Browser-reviewed |
| Desktop overflow | Relative About desktop shell and height-aware Identity composition | No horizontal overflow at all six recorded desktop sizes |
| Narrow layout | `760px` branch plus desktop width/height branches | Implemented CSS; device/touch review unverified |

## Open decisions

- Final licensed typefaces and role mapping
- Final spear model, materials, lighting, camera, scale, silhouette, and crop
- Resolution of stored-export versus implementation copy/type differences
- Approved static compositions for the four About chapters after Identity
- Authored About chapter spear postures and transitions
- Final narrow-layout composition and touch behavior
- Color-contrast and focus-state approval
- Homepage focus, commitment, impact, route-transition, and reduced-motion timing
