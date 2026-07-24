# Design Foundations

This file records current implementation values and reviewed design decisions without treating provisional code as final approval. Reconcile Figma values with existing CSS tokens deliberately; do not create a token for every one-off measurement.

## Current status

Audited against source on **2026-07-21**.

- The homepage desktop-idle frame is stored at `references/homepage/homepage-desktop-idle-v1.png` and tracked as **In progress**.
- Current homepage CSS implements the frame's major regions, but no recorded browser comparison establishes a match.
- Fonts are unbundled system fallbacks.
- The spear is procedural staging geometry rather than the final asset.
- Spacing, responsive behavior, accessibility, and the complete 2D/3D composition remain unapproved.

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

If a final typeface is approved, add the legally usable assets, update CSS, and update this document in the same change.

## Layout and canonical viewport

The canonical homepage desktop comparison viewport is `1440 × 900`. It is a comparison frame, not a fixed browser requirement.

| Region | Current implementation | Status |
| --- | --- | --- |
| Desktop split | `45.14% / 54.86%` columns with a divider at `45.14%` | Staged from current CSS |
| Ambient grid | `90px × 90px` background lines | Implemented visual treatment; not an approved component grid |
| Outer frame | Fixed insets defined in `src/features/home/home.css` | Implemented; comparison unverified |
| Narrow layout | Single-column interface with the scene as an absolute, lower-opacity layer below `760px` | Implemented CSS; manual/device review unverified |
| Intermediate/short desktop | Width and height media queries in `src/features/home/home.css` | Implemented CSS; manual review unverified |

## Borders, dividers, and focus

- The outer frame, navigation separators, main divider, and scene circle are current structural treatments.
- Available Home links use orange background/edge feedback plus type movement on hover and `:focus-visible`.
- Planned destinations are disabled buttons and do not show available-link focus/hover behavior.
- Exact contrast, focus visibility, and state comprehension have not received a recorded manual audit.

## Iconography and imagery

- Home does not currently use runtime iconography.
- The stored homepage export is a review reference only and must never be imported as full-page application UI.
- The spear pictured in Figma defines intended silhouette and staging, but production currently renders temporary Three.js primitive geometry plus a CSS silhouette beneath the canvas.

Runtime assets belong in `src/assets/`, feature-owned `src/features/*/assets/`, or `public/`. Review exports belong in `design/figma/references/`.

## Accessibility and responsive verification

| Requirement | Current code | Verification status |
| --- | --- | --- |
| Semantic navigation | Links for available routes; disabled buttons for planned routes | Implemented in source; keyboard review unverified |
| Visible focus | Orange outline and non-color movement on available links | Implemented in source; contrast/visibility unverified |
| Reduced motion | Global CSS duration override and scroll-behavior reset | Implemented baseline; browser review unverified |
| WebGL failure | Home DOM and CSS silhouette remain when `SceneErrorBoundary` removes the canvas | Implemented boundary; forced-failure review unverified |
| Narrow layout | `760px` branch plus desktop width/height branches | Implemented CSS; device/touch review unverified |

## Open decisions

- Final licensed typefaces and role mapping
- Final spear model, materials, lighting, camera, scale, silhouette, and crop
- Resolution of stored-export versus implementation copy/type differences
- Approved spacing and alignment values after canonical browser comparison
- Final narrow-layout composition and touch behavior
- Color-contrast and focus-state approval
- Homepage focus, commitment, impact, route-transition, and reduced-motion timing
