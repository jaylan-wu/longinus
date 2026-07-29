# Design Foundations

This file owns audited visual values and open design decisions. It does not own
frame approval or implementation status: see [`README.md`](README.md) for the
approved-frame tracker and [`TASKS.md`](../../TASKS.md) for live implementation
and validation history.

## Audit scope

Audited against source and the recorded browser comparisons on **2026-07-29**.

The values below cover the current Home implementation, the browser-compared
About Identity composition, and the full static About Trajectory EDU-001
composition plus its bounded large-desktop interpretation. Home values are not
comparison-approved. Outside the System, Interactive Influences, and Current
Direction have no approved static frames, so this file does not infer
chapter-specific measurements for them.

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

The Trajectory reference uses pure white for some dominant typography and
`#141318` for its panel. Runtime preserves the established semantic mappings:
dominant text uses `var(--color-foreground)` (`#e8e4dc`) and the panel uses
`var(--color-surface)` (`#141317`).

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
| `04` scene index | Shared `PageIndex` component with an About-scoped desktop size | Keeps Home's fixed right/bottom alignment, type weight, and opacity; matches the shared `31vw` size at `1440 × 900` and follows the About block unit on larger desktops |

### Current About Trajectory mapping

| Element | Current implementation | Verification note |
| --- | --- | --- |
| `TRAJECTORY` display title | `var(--font-display)`, `72px / 70px` at the `1440 × 900` baseline, weight `700`, `-0.05em` tracking | Browser bounds align to the reference title region at the canonical viewport; size follows the block unit above the baseline |
| Introductory statement | `var(--font-sans)`, `16px / 20px` at the baseline, `-0.05em` tracking, `460px` baseline width | Preserves the reference's four-line wrapping throughout the reviewed desktop matrix |
| Record-selector titles | `var(--font-display)`, standard `20px / 20px` and long `18px / 20px` at the baseline; narrow layouts use the shared wrapping treatment | EDU-001, EXP-002, and EXP-003 use the long selector variant to clear `SELECTED`; EXP-004 uses the approved `Lab Facilities Manager` constrained title while the selected record retains the official title |
| Selector system metadata | `var(--font-mono)`, `12px / 20px` at the baseline | Applies to index, organization, and visible record state; size and cadence follow the block unit |
| Selected-record title | `var(--font-display)` with baseline `standard` `30px / 32px`, `long` `26px / 28px`, and `extra-long` `24px / 26px` variants; long narrow titles reduce to `24px / 26px` and `22px / 24px` | Every record keeps an authored two-line break inside a stable title region without horizontal spill |
| Selected-record system and narrative copy | `var(--font-mono)`, `11px` at the baseline with `12px` label/system cadence and `13px` narrative/footer body cadence | The block unit scales these roles on large desktops; all five records were measured without clipping, clamping, ellipsis, or internal scrolling |

Do not add or bundle fonts solely to match a Figma reference. Any future change
to the established runtime stacks requires explicit product direction and a
coordinated update to `src/index.css`, `AGENTS.md`, and this document.

## Layout and canonical viewport

The canonical desktop comparison viewport for the supplied Home, About
Identity, and About Trajectory frames is `1440 × 900` (`16:10`). It is a
comparison frame, not a fixed browser requirement.

### About desktop scaling units

The About feature uses two bounded baseline units:

```css
--about-desktop-inline-unit: clamp(1rem, 1.1111vw, 1.7778rem);
--about-desktop-block-unit:
  clamp(1rem, min(1.7778svh, 1.1111vw), 1.7778rem);
```

Both resolve to `16px` at `1440 × 900`. The inline unit controls horizontal
insets, column and panel widths, column gaps, horizontal panel spacing, and
organization-mark width. The block unit controls header and chapter-anchor
height, system typography, navigation and record rows, selected-record height,
and internal vertical rhythm. The width guard prevents a tall narrow viewport
from inflating desktop typography, and the upper bounds prevent indefinite
growth. Trajectory aliases these shared units rather than maintaining an
unrelated large-desktop override set.

| Region | Current implementation | Status |
| --- | --- | --- |
| Home desktop split | `45.14% / 54.86%` columns with a divider at `45.14%` | Staged from current CSS |
| Home ambient grid | `90px × 90px` background lines | Implemented visual treatment; not an approved component grid |
| Home outer frame | Fixed insets defined in `src/features/home/home.css` | Implemented; comparison unverified |
| About Identity desktop split | `67.64% / 32.36%`, shared by header, narrative, and sticky scene | Compared at the canonical viewport |
| About Trajectory desktop composition | Canonical `75px` left inset; `460px` selector; `40px` gap; `360px` runtime selected-record panel; `860px` total width at `1440 × 900` | The Figma node and stored export retain the `325px` panel baseline; the additional runtime width is an approved post-reference refinement and the complete runtime composition scales through the About units |
| About Trajectory stable frame | `360 × 607` at the canonical and short-desktop viewports; fluid width/height above the baseline; stable internal title, record-metadata, narrative, and footer regions | Outer bounds and content containment verified for EDU-001 and EXP-001 through EXP-004 at every reviewed viewport |
| About chapter landing anchor | Chapter-owned indicators move with their sections; right-navigation selection aligns each indicator to the same baseline top-left viewport position | All five targets browser-verified at `1440 × 900` and `390 × 844`; natural scrolling and anchor restoration also verified |
| About larger desktop | Relative tracks plus the bounded inline/block units; no full-page transform | Trajectory reviewed at `1920 × 1080`, `2500 × 1350`, and `2560 × 1440`; the shared Identity shell was smoke-checked at `2560 × 1440` |
| About short desktop | Height-aware Identity spacing at `1440 × 800`; no internal chapter scroller | Browser-reviewed |
| Narrow layout | Existing feature-owned single-column fallbacks remain below their breakpoints | Implemented CSS; final mobile/device review unverified |

### About Identity spacing audit

The canonical comparison covered the page header-to-content and
header-to-Identity-indicator gaps; chapter identifier/title spacing; the
display/opening/axes sequence; internal and inter-record axis spacing; the
name/location/signature metadata row; content-to-negative-space-to-scene
relationships; spear-to-navigation and navigation-to-edge spacing; and the
lines and markers attached to those regions. The page index keeps Home's
shared component, fixed edge alignment, opacity, and canonical size, then uses
the About block unit above the baseline. Future About frames must repeat this
audit for their chapter-specific content rather than inheriting Identity
measurements without comparison.

### About Trajectory spacing and frame audit

At `1440 × 900`, the selector measures `460 × 426` at approximately
`x=75, y=398`; the runtime selected-record panel measures `360 × 607` at
approximately `x=575, y=217`. Their `40px` gap and shared `y=824` bottom edge
remain stable within sub-pixel browser rounding. The Figma reference panel is
`325px` wide; the runtime right edge now reaches approximately `x=935` as an
intentional post-reference refinement. The display title begins at
approximately `x=75, y=211`; the introductory statement begins at
approximately `y=295`.

The panel uses `16px` content insets and rules extending `5px` beyond the
content track. Its internal grid reserves `125px` for the title/header, `72px`
for record metadata, `306px` for three content-sized narrative sections
distributed through the available space, and a `72px` bottom-anchored
supporting-metadata footer. The company/date row and the first metadata line
each sit `12px` from their shared divider. EDU-001 also keeps a `12px`
boundary distance below `Game Engineering` before the second divider. The NYU
portrait mark measures approximately `255 × 367`, the Mets mark `267 × 267`,
and the MLB mark `259 × 146` at the desktop baseline while each preserves its
source ratio. The Mets and MLB marks share the exact horizontal and vertical
center of the region between the second divider and the card bottom.

The same panel bounds were browser-measured for all five records at
`1440 × 900`; at `390 × 844`, the panel adapts to approximately `352 × 607`.
The short-desktop branch keeps the frame at `360 × 607` and moves its top to
approximately `y=164` at `1440 × 800`.

The large-desktop matrix measured:

| Viewport | Selector | Column gap | Selected-record panel |
| --- | --- | --- | --- |
| `1440 × 900` | `460 × 426` | `40px` | `360 × 607` |
| `1920 × 1080` | approximately `613 × 511` | approximately `53px` | approximately `480 × 728` |
| `2500 × 1350` | approximately `799 × 639` | approximately `69px` | approximately `625 × 911` |
| `2560 × 1440` | approximately `818 × 681` | approximately `71px` | approximately `640 × 971` |

All five records retained the same panel bounds at each viewport. Below
`1240px`, the selector and panel stack and use natural page scrolling.

## Borders, dividers, and focus

- The Home outer frame, navigation separators, main divider, and scene circle are current structural treatments.
- Available Home links, About's site-level `Index` link, and the right-side
  About chapter controls share the `navigation-action` primitive: a `320ms`
  displaced label, `400ms` background wipe, `240ms` edge,
  and a `2px` `:focus-visible` outline. Home and `Index` use orange; the
  chapter controls use red.
- Reduced motion removes the shared padding/skew displacement while retaining
  the scoped edge, wipe, text, and outline feedback.
- The About chapter navigator retains its compact layout while reusing the Home
  navigation animation with a scoped red accent.
- Trajectory selection uses orange top/bottom rules plus the visible
  `SELECTED` label and `aria-pressed`; keyboard focus retains the shared `2px`
  orange outline, so state is not communicated by color alone.
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
- About Trajectory reuses one feature-owned NYU mark for EDU-001, EXP-001, and
  EXP-004, plus the feature-owned Mets and MLB marks for their associated
  records. Named portrait, large-square, and compact-wide rules preserve
  proportions. The Mets and MLB use one semantic lower-content-center position
  so their visible artwork is centered between the second divider and the card
  bottom; their intrinsic transparent-edge offsets remain below one rendered
  pixel. MLB uses the supplied transparent `3840 × 2160` PNG; the superseded
  checker-backed WebP has been removed.

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
- Approved static compositions for Outside the System, Interactive Influences,
  and Current Direction
- Final narrow-layout compositions and mobile-navigation treatment
- Approved visible-focus treatment and color contrast
