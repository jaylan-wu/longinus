# Design Foundations

This file owns audited visual values and open design decisions. It does not own
frame approval or implementation status: see [`README.md`](README.md) for the
approved-frame tracker and [`TASKS.md`](../../TASKS.md) for live implementation
and validation history.

## Audit scope

Audited against source and the recorded browser comparisons on **2026-07-28**.

The values below cover the current Home implementation and the browser-compared
About Identity composition. Home values are not comparison-approved. The four
About chapters after Identity have no approved static frames, so this file does
not infer chapter-specific measurements for them.

## Color palette

The application palette is defined by CSS custom properties in `src/index.css`;
scene code mirrors required values in `src/styles/colors.ts`.
[`AGENTS.md`](../../AGENTS.md) defines the semantic rules.

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

No font files are present by design. The table records the established runtime
font tokens and the known Home exception:

| Current role | CSS token or stack | Current use | Status |
| --- | --- | --- | --- |
| Display | `var(--font-display)` → `"Times New Roman Condensed", "Times New Roman", Times, serif` | Identity display, navigation labels, title-card copy, watermark, and page index | Established system stack; rendered face varies by device |
| Base interface/content | `var(--font-sans)` → `Arial, Helvetica, sans-serif` | Body default and interface/content not otherwise overridden | Established system stack; rendered face varies by device |
| Metadata/identifier | `var(--font-mono)` → `"SFMono-Regular", Consolas, "Liberation Mono", monospace` | System labels, indices, footer metadata | Established system stack; rendered face varies by device |
| Homepage structural label | `"Archivo Narrow", "Arial Narrow", sans-serif` | `ARCHIVE:` label | Known one-off exception; migrate to an established token unless a new token is explicitly approved |

Use these tokens according to the runtime-font and Figma source-of-truth policy
in [`AGENTS.md`](../../AGENTS.md). The measurements below audit composition
without changing the established font families.

### Current homepage mapping

| Element | Current implementation | Verification note |
| --- | --- | --- |
| `JAYLAN WU` | `var(--font-display)`, weight `600`, responsive per-line sizing and horizontal scaling in `src/features/home/home.css` | Differs by installed system fonts; not comparison-approved |
| `ARCHIVE:` | one-off narrow sans fallback, `2.875rem`, weight `700`, uppercase | Known token exception; the stored export says `PORTFOLIO:`, so the copy difference is also unresolved |
| Random title-card phrase | `var(--font-display)`, `2.875rem`, weight `700` | Selected from six phrases once when the module loads; content and longest-line fit require review |
| Primary navigation labels | `var(--font-display)`, `3.05rem`, line height `0.88`, weight `600`, letter spacing `-0.06em` | Pointer/keyboard focus styling exists; exact metrics are unverified |
| System/footer labels | `var(--font-mono)`, generally `0.875rem` | Media queries adjust some desktop sizes |
| `LONGINUS` watermark | `var(--font-display)`, outlined, weight `400` | Ambient, cropped, and non-interactive |
| `00` scene index | `var(--font-display)`, `clamp(21rem, 31vw, 38rem)`, weight `700` | Shared `PageIndex` treatment; unverified against Figma |

### Current About Identity mapping

| Element | Current implementation | Verification note |
| --- | --- | --- |
| Four-line display statement | Existing `var(--font-display)` family, weight `700`, `clamp(4.5rem, 5.14vw, 8rem)`, `0.946` line height, controlled horizontal staging | Renders at approximately `74px` on a `70px` cadence at the baseline while preserving the established runtime font family |
| Opening statement | Existing `var(--font-sans)` family, `clamp(0.8125rem, 0.9vw, 1.125rem)`, `1.52` line height | Renders at `13px / 19.76px` at the baseline with reference-matched line breaks |
| Chapter/system labels | `var(--font-mono)`, `12px` at baseline | Each chapter owns one visible semantic indicator; right-navigation selection aligns it to the shared viewport anchor |
| Axis identifiers | `var(--font-mono)`, responsive from the baseline within bounded sizes | System identifiers remain visually distinct from narrative copy |
| Axis support | Existing `var(--font-sans)` family, `clamp(0.75rem, 0.9vw, 1rem)`, `1.4` line height, bounded to `26ch` | Baseline copy follows the reference's four-line cadence and remains visible at `1440 × 800` |
| Axis short statements | Existing `var(--font-display)` family with bounded `20–20.8px` baseline sizing and controlled two-line wrapping | Reference wording and vertical placement are synchronized with the editorial and runtime sources |
| `04` scene index | Unmodified shared `PageIndex` used by Home | Uses the same fixed right/bottom viewport alignment, type metrics, opacity, and responsive rule as Home |

Do not add or bundle fonts solely to match a Figma reference. Any future change
to the established runtime stacks requires explicit product direction and a
coordinated update to `src/index.css`, `AGENTS.md`, and this document.

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
| About chapter landing anchor | Chapter-owned indicators move with their sections; right-navigation selection aligns each indicator to the same baseline top-left viewport position | All five targets browser-verified at `1440 × 900` and `390 × 844`; natural scrolling and anchor restoration also verified |
| About larger desktop | Relative tracks plus height-aware custom properties and bounded `clamp()` sizing; no full-page transform | Reviewed at four larger `16:10` viewports without horizontal overflow or a fixed `1440px` island |
| About short desktop | Height-aware Identity spacing at `1440 × 800`; no internal chapter scroller | Browser-reviewed |
| Narrow layout | Existing feature-owned single-column fallbacks remain below their breakpoints | Implemented CSS; final mobile/device review unverified |

### About Identity spacing audit

The canonical comparison covered the page header-to-content and
header-to-Identity-indicator gaps; chapter identifier/title spacing; the
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
  the scoped edge, wipe, text, and outline feedback.
- The About chapter navigator retains its compact layout while reusing the Home
  navigation animation with a scoped red accent.
- Planned destinations are disabled buttons and do not show available-link focus/hover behavior.

## Iconography and imagery

- Home does not currently use runtime iconography.
- The spear pictured in Figma defines intended silhouette and staging. Home and
  Projects currently render temporary Three.js primitive geometry plus a CSS
  silhouette beneath the canvas.
- About reuses the same procedural geometry in an About-owned scene and has no
  CSS spear silhouette. Its Identity framing was compared against the
  reference, but the placeholder cannot reproduce the authored forked and
  twisting silhouette.

## Verification boundary

The audited values in this file do not imply site-wide accessibility,
responsive, device, reduced-motion, or WebGL-failure approval.
[`TASKS.md`](../../TASKS.md) owns the recorded validation matrix and all
remaining verification work.

## Open decisions

- Cross-platform validation of hierarchy, wrapping, line cadence, and spacing
  with the established system stacks
- Migration of the Home `ARCHIVE:` one-off font stack to an established token,
  unless a new token is explicitly approved
- Final spear model, materials, lighting, camera, scale, silhouette, and crop
- Resolution of stored-export versus implementation copy/type differences
- Projects and project-detail static compositions, including the settled
  project-detail spear placement
- Approved static compositions and spear staging for the four About chapters
  after Identity
- Final narrow-layout compositions and mobile-navigation treatment
- Approved visible-focus treatment and color contrast
