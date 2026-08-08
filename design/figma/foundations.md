# Design Foundations

This file owns audited visual values and open design decisions. It does not own
frame approval or implementation status: see [`README.md`](README.md) for the
approved-frame tracker and [`TASKS.md`](../../TASKS.md) for live implementation
and validation history.

## Audit scope

Audited against source and the recorded browser comparisons on **2026-08-06**.
Theme-architecture and source-ownership notes were reconciled against source
on **2026-08-08** without adding new browser or visual-comparison evidence.

The values below cover the current Home implementation, the browser-compared
About Identity composition, the full static About Trajectory EDU-001
composition plus its bounded large-desktop interpretation, the compared
left-side About Outside the System PHOTO-001 composition, and the later
user-directed chapter-header removal and content reflow across all five About
chapters. Home values are not comparison-approved. Interactive Influences and
Current Direction still have no approved static frames; their measurements
below document current runtime geometry rather than frame approval.

## Theme and color architecture

The base `:root` palette in `src/index.css` defines the established dark
Longinus values; scene code mirrors required values in `src/styles/colors.ts`.
[`AGENTS.md`](../../AGENTS.md) defines the semantic rules and theme direction.

### Established dark palette

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

### Theme runtime and Rei light-mode experiment

The application retains `data-theme="longinus-dark"` as its fresh-session
fallback. A typed provider recognizes `longinus-dark` and `rei-light`, restores
a valid saved `longinus-theme` choice in the document head before the
application module loads, persists later manual selections, and synchronizes
the browser `theme-color`. A temporary fixed application-shell control exposes
both themes for pre-merge QA across every current route. This flow intentionally
does not consult system color preference; its final production selector policy
remains undecided.

The shared CSS contract maps both themes through semantic atmosphere,
structural-line, disruption, on-disruption, ambient-indicator, and overlay
roles. Home and Projects then refine those roles through feature-local custom
properties; About continues to use its shared semantic DOM without a duplicate
theme implementation. Ramiel's own geometric fallback retains its explicit
light palette because it is a theme-specific motif rather than general page
styling.

Home, Projects, and About each own separate dark Spear and light Ramiel scenes.
Their feature motif boundaries lazily import only the active theme's scene;
camera, lighting, staging, and animation do not pass through a universal scene
configuration. [`../experiments/rei-light-mode.md`](../experiments/rei-light-mode.md)
owns the experimental palette and dated light-branch validation evidence.

This architecture establishes code-level coexistence, not visual approval:

- No approved Rei-light exported reference exists.
- Storage persistence is user-reachable through the temporary semantic QA
  control, whose current state is communicated through text, `aria-pressed`,
  an accessible label, and visible focus styling. Headless Chromium verified
  mouse, Enter, Space, visible focus, accessible state, and bounds at three
  viewports, but this is not final production-control approval or human
  cross-browser/device accessibility validation.
- The QA control is explicitly manual-only. Whether system preference should
  participate in a later production policy remains undecided.
- CSS theme values and Three.js material values remain deliberately separate;
  each feature scene still needs authored per-theme review.
- Headless Chromium verified conditional scene replacement, renderer teardown,
  route and refresh persistence, reduced motion, and control placement against
  local development and production preview builds at `1440 × 900`,
  `390 × 844`, and `320 × 568`. It did not close human cross-browser/device
  review, dark-reference regression, full-theme contrast, or final light-mode
  visual approval. Repeated swaps left one healthy active canvas/context and
  stable active listeners/animation-frame sampling, while a bounded three
  detached DOM nodes per six-switch batch remains open for profiling.

The remaining validation matrix belongs in [`TASKS.md`](../../TASKS.md).

## Typography

No font files are present by design. The table records the established runtime
font tokens and the known Home exception:

| Current role | CSS token or stack | Current use | Status |
| --- | --- | --- | --- |
| Display | `var(--font-display)` → `"Times New Roman Condensed", "Times New Roman", Times, serif` | Identity display, navigation labels, title-card copy, watermark, and page index | Established system stack; rendered face varies by device |
| Base interface/content | `var(--font-sans)` → `Arial, Helvetica, sans-serif` | Body default and interface/content not otherwise overridden | Established system stack; rendered face varies by device |
| Metadata/identifier | `var(--font-mono)` → `"SFMono-Regular", Consolas, "Liberation Mono", monospace` | System labels, indices, footer metadata | Established system stack; rendered face varies by device |
| Homepage structural label | `"Archivo Narrow", "Arial Narrow", sans-serif` | `ARCHIVE:` label | Known one-off exception; migrate to an established token unless a new token is explicitly approved |

Use these tokens according to the runtime-font and exported-reference policy
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
| Theme watermark (`LONGINUS` or `RAMIEL`) | `var(--font-display)`, outlined, weight `400` | Active-theme label; ambient, cropped, and non-interactive |
| `00` scene index | `var(--font-display)`, `clamp(21rem, 31vw, 38rem)`, weight `700` | Shared `PageIndex` treatment; unverified against the exported reference |

### Current About Identity mapping

| Element | Current implementation | Verification note |
| --- | --- | --- |
| Four-line display statement | Existing `var(--font-display)` family, weight `700`, `clamp(4.5rem, 5.14vw, 8rem)`, `0.946` line height, `-0.045em` tracking, and `0.882` desktop horizontal staging | Renders at approximately `74px` on a `70px` cadence at the baseline while preserving the established runtime font family; authored per-line staging remains Identity-owned |
| Opening statement | Existing `var(--font-sans)` family, `clamp(0.8125rem, 0.9vw, 1.125rem)`, `1.52` line height | Renders at `13px / 19.76px` at the baseline with reference-matched line breaks |
| Chapter identity | One visually hidden semantic `h2` per chapter; persistent Current chapter status and right navigation use `var(--font-mono)`, `12px` at baseline | The former orange-numbered top-left headings are no longer visible; section `aria-labelledby`, the top-right status, and chapter navigation remain |
| Axis identifiers | `var(--font-mono)`, responsive from the baseline within bounded sizes | System identifiers remain visually distinct from narrative copy |
| Axis support | Existing `var(--font-sans)` family, `clamp(0.75rem, 0.9vw, 1rem)`, `1.4` line height, bounded to `26ch` | Baseline copy follows the reference's four-line cadence and remains visible at `1440 × 800` |
| Axis short statements | Existing `var(--font-display)` family with bounded `20–20.8px` baseline sizing and controlled two-line wrapping | Reference wording and vertical placement are synchronized with the editorial and runtime sources |
| `04` scene index | Shared `PageIndex` component with an About-scoped desktop size | Keeps Home's fixed right/bottom alignment, type weight, and opacity; matches the shared `31vw` size at `1440 × 900` and follows the About block unit on larger desktops |

### Current About Trajectory mapping

| Element | Current implementation | Verification note |
| --- | --- | --- |
| `TRAJECTORY` display title | `var(--font-display)`, `72px / 68.1px` at the `1440 × 900` baseline, weight `700`, `-0.045em` tracking, and `0.882` desktop horizontal staging | Uses the shared Identity display-title proportions while its size continues to follow the block unit above the baseline |
| Introductory statement | `var(--font-sans)`, `16px / 20px` at the baseline, `-0.05em` tracking, `460px` baseline width | Preserves the reference's four-line wrapping throughout the reviewed desktop matrix |
| Record-selector titles | `var(--font-display)`, standard `20px / 20px` and long `18px / 20px` at the baseline; narrow layouts use the shared wrapping treatment | EDU-001, EXP-002, and EXP-003 use the long selector variant to clear `SELECTED`; EXP-004 uses the approved `Lab Facilities Manager` constrained title while the selected record retains the official title |
| Selector system metadata | `var(--font-mono)`, `12px / 20px` at the baseline | Applies to index, organization, and visible record state; size and cadence follow the block unit |
| Selected-record title | `var(--font-display)` with baseline `standard` `30px / 32px`, `long` `26px / 28px`, and `extra-long` `24px / 26px` variants; long narrow titles reduce to `24px / 26px` and `22px / 24px` | Every record keeps an authored two-line break inside a stable title region without horizontal spill |
| Selected-record system and narrative copy | `var(--font-mono)`, `11px` at the baseline with `12px` label/system cadence and `13px` narrative/footer body cadence | The block unit scales these roles on large desktops; all five records were measured without clipping, clamping, ellipsis, or internal scrolling |

### Current About Outside the System mapping

| Element | Current implementation | Verification note |
| --- | --- | --- |
| `OUTSIDE THE SYSTEM` display title | `var(--font-display)`, `72px / 68.1px` at the `1440 × 900` baseline, weight `700`, `-0.045em` tracking, and `0.882` desktop horizontal staging | Uses the shared Identity display-title proportions and retains its one-line canonical treatment without importing the reference font family |
| Approved introduction | `var(--font-sans)`, `13px / 19.76px` at the baseline with `-0.04em` tracking | Preserves the reference four-line cadence at the canonical viewport and scales through the About block unit |
| Selected-photo title | `var(--font-display)`, `24px` baseline with restrained horizontal staging; named long-location treatment uses `18px / 19.44px` | `PHOTO-001` stays on one line while every reviewed record remains contained in the selected-photo region |
| Selected-photo metadata | `var(--font-mono)`, `12px` baseline for system label, identifier, personal caption, and reflection | Lavender identifies personal context; all seven selected states fit without overflow |
| Thumbnail identifiers | `var(--font-mono)`, `10px` baseline, visible beneath every thumbnail | Labels remain a deliberate divergence from the approved export and use lavender only for the selected record |

Do not add or bundle fonts solely to match an exported reference. Any future change
to the established runtime stacks requires explicit product direction and a
coordinated update to `src/index.css`, `AGENTS.md`, and this document.

Identity, Trajectory, and Outside the System are the implemented chapters with
explicit large display titles. They share one typographic rule for family,
weight, line-height ratio, tracking, casing, and character-width staging while
retaining composition-owned font sizes and wraps. At `1080px` and below, all
three return to natural horizontal width together. Interactive Influences and
Current Direction do not yet define large chapter display titles; their record
title and closing statement remain separate content roles.

## Layout and canonical viewport

The canonical desktop comparison viewport for the supplied Home, About
Identity, About Trajectory, and About Outside the System frames is
`1440 × 900` (`16:10`). It is a comparison frame, not a fixed browser
requirement.

### About desktop scaling units

The About feature uses two bounded baseline units:

```css
--about-desktop-inline-unit: clamp(1rem, 1.1111vw, 1.7778rem);
--about-desktop-block-unit:
  clamp(1rem, min(1.7778svh, 1.1111vw), 1.7778rem);
```

Both resolve to `16px` at `1440 × 900`. The inline unit controls horizontal
insets, column and panel widths, column gaps, horizontal panel spacing, and
organization-mark width. The block unit controls header and chapter-content
anchor height, system typography, navigation and record rows, selected-record
height, and internal vertical rhythm. The width guard prevents a tall narrow viewport
from inflating desktop typography, and the upper bounds prevent indefinite
growth. Trajectory aliases these shared units rather than maintaining an
unrelated large-desktop override set.

| Region | Current implementation | Status |
| --- | --- | --- |
| Home desktop split | `45.14% / 54.86%` columns with a divider at `45.14%` | Staged from current CSS |
| Home ambient grid | `90px × 90px` background lines | Implemented visual treatment; not an approved component grid |
| Home outer frame | Fixed insets defined in `src/features/home/home.css` | Implemented; comparison unverified |
| About Identity desktop split | `67.64% / 32.36%`, shared by header, narrative, and sticky scene | Compared at the canonical viewport |
| About Trajectory desktop composition | Canonical `75px` left inset; `460 × 426px` selector; `40px` gap; `360 × 673px` runtime selected-record panel; `860px` total width at `1440 × 900` | The panel extends upward from `y=151` while retaining the selector's shared `y=824` bottom; the stored dark export retains the earlier `325 × 607px` baseline |
| About Trajectory stable frame | `360 × 673px` at the canonical viewport with chapter-specific responsive height extensions; stable internal title, record-metadata, narrative, and footer regions | Outer bounds remain identical across EDU-001 and EXP-001 through EXP-004 at a given viewport; the complete post-reflow large-desktop matrix still requires remeasurement |
| About Outside desktop composition | Canonical `75px` left inset; approximately `821px` content width; approximately `480 × 320px` selected image from `y=330–650` with an adjacent metadata column | The preview uses part of the reclaimed chapter space while giving the caption column more width; the fixed right boundary remains the shared `67.64% / 32.36%` About split |
| About Outside carousel | Approximately `821px` total width from `y=675–789`, with five visible records plus persistent identifier labels | The active record occupies the middle slot through ordinary selection and the wrapping boundary; previous/next rings align to the thumbnail-image center after compensating for the label block, while the active outline and corner marker provide a non-color cue |
| About first-content anchor | `151px` at `1440 × 900`, `120px` on short desktop and tablet, and `100px` on mobile | The visible orange-numbered headings are removed; each section retains a visually hidden `h2`, while the persistent top-right Current chapter status and right navigation remain visible |
| About larger desktop | Relative tracks plus the bounded inline/block units; no full-page transform | The shared shell was reviewed previously; the post-reflow Trajectory and Outside size matrix requires refreshed measurement |
| About short desktop | Shared `120px` first-content anchor with height-aware chapter-specific reflow; no internal chapter scroller | Implemented and browser-measured |
| Narrow layout | Shared `100px` first-content anchor with feature-owned single-column fallbacks below their breakpoints | Implemented; final cross-device mobile review remains open |

### About Identity spacing audit

The original canonical comparison covered the page header-to-content and
header-to-Identity-indicator gaps; chapter identifier/title spacing; the
display/opening/axes sequence; internal and inter-record axis spacing; the
name/location/signature metadata row; content-to-negative-space-to-scene
relationships; spear-to-navigation and navigation-to-edge spacing; and the
lines and markers attached to those regions. The current user-directed runtime
removes the visible Identity indicator, moves the display statement to the
shared `y=151` first-content anchor, and extends the introduction frame by the
reclaimed space so the lower axes and metadata retain their established
alignment. The page index keeps Home's shared component, fixed edge alignment,
opacity, and canonical size, then uses the About block unit above the baseline.
Future About frames must repeat this audit for their chapter-specific content
rather than inheriting Identity measurements without comparison.

### About Trajectory spacing and frame audit

At `1440 × 900`, the selector measures `460 × 426` at approximately
`x=75, y=398`; the runtime selected-record panel measures `360 × 673px` at
approximately `x=575, y=151`. Their `40px` column gap and shared `y=824` bottom
edge remain stable within sub-pixel browser rounding. The display title also
begins at approximately `x=75, y=151`. The exported dark reference retains its
`325 × 607px` panel and visible top-left chapter heading; the wider panel,
upward extension, hidden semantic heading, and first-content reflow are
intentional user-directed post-reference refinements.

The panel uses `16px` content insets and rules extending `5px` beyond the
content track. Its internal grid reserves `125px` for the title/header, `72px`
for record metadata, `372px` for three content-sized narrative sections
distributed through the available space, and a `72px` bottom-anchored
supporting-metadata footer. The company/date row and the first metadata line
each sit `12px` from their shared divider. EDU-001 also keeps a `12px`
boundary distance below `Game Engineering` before the second divider. The NYU
portrait mark measures approximately `255 × 367`, the Mets mark `267 × 267`,
and the MLB mark `259 × 146` at the desktop baseline while each preserves its
source ratio. All three marks share the exact horizontal and vertical center
of the region between the second divider and the card bottom. The NYU portrait
uses the block unit for its size cap, and the extended lower region increases
its equal divider and card-bottom clearance while preventing wide desktop cards
from growing the portrait across the second divider.

All five records retain the same canonical panel bounds. Short desktop and
tablet content begins at `y=120`; mobile begins at `y=100`. Below `1240px`, the
selector and selected panel stack and use natural page scrolling. The complete
post-reflow large-desktop and narrow panel matrix still requires a refreshed
browser measurement; the earlier matrix remains preserved as dated validation
history in [`TASKS.md`](../../TASKS.md).

### About Outside the System spacing and frame audit

At `1440 × 900`, the visible chapter indicator is absent and its semantic `h2`
is visually hidden. The staged display title begins at `x=75, y=151` on the
shared first-content anchor. The selected-photo region begins at approximately
`x=75, y=330`; its primary image measures approximately `480 × 320px` and
ends near `y=650`, with the wider lavender metadata region remaining adjacent.
The carousel begins at approximately `x=75, y=675` and ends near `y=789`,
including the runtime identifier-label row.

Short desktop and tablet content begins at `y=120`; mobile content begins at
`y=100`. Below the desktop layout, selected image and metadata stack and use
natural document scrolling. The current selected-image width incorporates a
restrained portion of the chapter's reclaimed block space. It was measured at
approximately `633 × 422px` at `1920 × 1080`; still-larger post-reflow desktop
comparisons remain open.

### About Interactive Influences spacing audit

Interactive Influences has no approved static frame. In the current
`1440 × 900` runtime, its visually hidden `h2`, record index, and detail region
begin at the shared `y=151` first-content anchor. The four-row index extends to
`y=824`, matching the canonical Trajectory lower boundary while distributing
the reclaimed space evenly across its selectable records. Its index returns to
natural row height when the composition stacks.

### About Current Direction spacing audit

Current Direction has no approved static frame. Removing its visible heading
also removes the former one-sided first-statement offset. At the canonical
viewport, the complete content group remains centered within its section with
approximately `144px` of space above and `145px` below. This chapter uses
balanced section space rather than stretching an individual content record.

## Borders, dividers, and focus

- The Home outer frame, navigation separators, main divider, and scene circle are current structural treatments.
- Available Home links, About's site-level `Index` link, the right-side About
  chapter controls, Trajectory role rows, and Project records share the
  `navigation-action`
  primitive: a `320ms` displaced label, `400ms` background wipe, `240ms` edge,
  and a `2px` `:focus-visible` outline. Home, `Index`, and Trajectory roles use
  orange; the chapter controls use red. Project records override only their
  feature-specific distances and provisional durations.
- Reduced motion removes the shared padding/skew displacement while retaining
  the scoped edge, wipe, text, and outline feedback.
- The About chapter navigator retains its compact layout while reusing the Home
  navigation animation with a scoped red accent. Its active row renders both
  horizontal rules with paired box shadows using the same primary-red token so
  their rasterization and color remain consistent.
- Trajectory role hover/focus uses the shared orange sweep, leading rail, and
  role displacement. Selection retains orange top/bottom rules plus the
  visible `SELECTED` label and `aria-pressed`; keyboard focus retains the
  shared `2px` orange outline, so state is not communicated by color alone.
- Outside selection uses a `2px` lavender outline, a structural corner marker,
  the selected identifier treatment, `aria-pressed`, and `aria-current`.
  Keyboard focus uses a `2px` lavender outline and does not rely on color alone.
- Planned destinations are disabled buttons and do not show available-link focus/hover behavior.

## Iconography and imagery

- Home does not currently use runtime iconography.
- The spear pictured in the exported dark references defines intended
  silhouette and staging. The `longinus-dark` theme dispatches the shared
  procedural Spear geometry in separate Home-, Projects-, and About-owned
  scenes; `rei-light` dispatches the shared procedural Ramiel geometry through
  the corresponding feature-owned scenes. Home and Projects retain
  theme-appropriate CSS fallbacks; About keeps semantic content when either
  scene is unavailable.
- About Trajectory reuses one feature-owned NYU mark for EDU-001, EXP-001, and
  EXP-004, plus the feature-owned Mets and MLB marks for their associated
  records. Named portrait, large-square, and compact-wide rules preserve
  proportions. All three use one semantic lower-content-center position so
  their image boxes are centered between the second divider and the card
  bottom; the NYU portrait uses the block unit for divider-safe responsive
  scaling, and the Mets and MLB intrinsic transparent-edge offsets remain below
  one rendered pixel. MLB uses the supplied transparent `3840 × 2160` PNG; the
  superseded checker-backed WebP has been removed.
- About Outside retains seven feature-owned archival JPEGs and serves separate
  2000px WebP display images plus 480px WebP thumbnails from runtime data.
  Their intrinsic dimensions preserve the `3:2` selected-photo frame,
  `PHOTO-001` is prioritized, and image decoding/loading behavior remains
  explicit. Broader responsive `srcset` delivery and route-level performance
  review remain open.

## Verification boundary

The audited values in this file do not imply site-wide accessibility,
responsive, device, reduced-motion, or WebGL-failure approval.
[`TASKS.md`](../../TASKS.md) owns the recorded validation matrix and all
remaining verification work.

## Open decisions

- Final production theme-selector design and whether system preference should
  participate; the current control is deliberately temporary and manual-only
- Human cross-browser/device verification of no-flash initialization and
  browser-metadata synchronization
- Follow-up profiling of the consistent three detached DOM nodes retained per
  six-switch batch on each motif route; active documents, listeners, renderer,
  canvas, context, and animation-frame measurements remained healthy
- Approved light-mode exported references and final semantic palette
- Dark-reference regression review after runtime theme coexistence
- Cross-platform validation of hierarchy, wrapping, line cadence, and spacing
  with the established system stacks
- Migration of the Home `ARCHIVE:` one-off font stack to an established token,
  unless a new token is explicitly approved
- Final spear model, materials, lighting, camera, scale, silhouette, and crop
- Resolution of stored-export versus implementation copy/type differences
- Projects and project-detail static compositions, including the settled
  project-detail spear placement
- Approved static compositions for Interactive Influences and Current
  Direction
- Final narrow-layout compositions and mobile-navigation treatment
- Approved visible-focus treatment and color contrast
