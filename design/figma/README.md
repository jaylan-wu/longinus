# Figma Reference System

## Purpose

This directory owns the Figma handoff process, reference-export rules, and
approved-frame tracker. [`AGENTS.md`](../../AGENTS.md) defines the full
source-of-truth hierarchy;
[`foundations.md`](foundations.md) records audited visual values and open design
decisions; and [`TASKS.md`](../../TASKS.md) owns detailed implementation and
validation status.

For the handoff itself, Figma defines static composition and measurable
typographic treatment, while the font tokens in `src/index.css` define runtime
font families. Do not copy Figma-generated code or font-family names directly
into the production application.

## Canonical viewport

The current primary desktop design viewport is:

```text
1440 × 900
```

This `16:10` viewport is a visual comparison reference, not a fixed browser
requirement. Desktop compositions should expand through responsive layout
rules at similar-aspect-ratio sizes such as `1680 × 1050`, `1920 × 1200`,
`2240 × 1400`, and `2560 × 1600`; they must not remain inside a fixed
`1440px` island or use one full-page scale transform. Mobile remains an
intentional reinterpretation.

## Recommended Figma organization

Use these sections in the Figma file when maintaining the external design source. The repository cannot verify the Figma file's current section structure from the stored export alone:

```text
00 — Foundations
01 — Homepage
02 — Projects
03 — Project Detail
04 — Music
05 — About
06 — Components
07 — Motion References
```

Name frames using:

```text
Page / Viewport / State
```

For chapter-based experiences, insert the chapter after the page:

```text
Page / Chapter / Viewport / State
```

For example:

```text
Homepage / Desktop / Idle
Projects / Desktop / Idle
Projects / Desktop / Card Hover
Projects / Desktop / Selection
Project Detail / Desktop / Default
About / Identity / Desktop / Idle
```

## Reference export rules

Images under `references/` are visual comparison references, not runtime assets. Each export should:

- use a clear, semantic filename;
- represent an approved checkpoint;
- avoid capturing every minor design iteration;
- preferably use `.png`, `.jpg`, or `.webp`; and
- never be imported into the application as full-page UI.

Use versioned names such as:

```text
projects-desktop-idle-v1.png
projects-desktop-hover-v1.png
project-detail-desktop-default-v1.png
about-identity-desktop-idle-v1.png
```

Avoid ambiguous names such as `final-final-2.png`.

## Figma-to-Codex workflow

1. Select a specific frame in Figma.
2. Copy the link to that frame or selection.
3. Export an approved reference image when useful.
4. Place the export in the corresponding reference directory.
5. Update the approved-frame table below.
6. Give Codex one frame or interaction milestone at a time.
7. Ask Codex to compare its implementation with the reference and list known differences.

## Approved-frame tracker

Valid implementation status values include `Not started`, `In progress`, `Implemented`, `Needs revision`, and `Approved`.

| Page | Frame | Viewport | State | Reference File | Figma Link | Implementation Status | Notes |
|---|---|---|---|---|---|---|---|
| Homepage | Homepage / Desktop / Idle | 1440 × 900 | Idle | `references/homepage/homepage-desktop-idle-v1.png` | [Open frame](https://www.figma.com/design/rUjkiEK09hYodbltprw6kk/Longinus?node-id=15-3&t=HHY6a7bF5595h5wr-4) | In progress | Major DOM regions are staged. Browser comparison, final 3D model, complete 2D/3D review, motion, and boot remain open. |
| About | About / Identity / Desktop / Idle | 1440 × 900 (16:10) | Idle | `references/about/about-identity-desktop-idle-v1.png` | [Open frame](https://www.figma.com/design/rUjkiEK09hYodbltprw6kk/Longinus?node-id=64-24&t=4yJDN38gz5xqZBrG-4) | Implemented | Compared in-browser at the canonical viewport and reviewed at `1440 × 800`, `1680 × 1050`, `1920 × 1200`, `2240 × 1400`, and `2560 × 1600`. The established runtime font stacks and procedural spear are documented implementation differences from the export. |
| About | About / Trajectory / EDU-001 / Desktop / Idle | 1440 × 900 (16:10) | Idle | `references/about/about-trajectory-edu-001-desktop-idle-v1.png` | [Open frame](https://www.figma.com/design/rUjkiEK09hYodbltprw6kk/Longinus?node-id=110-147&t=jypyhZZFKMRF2Urs-4) | Implemented | Figma node `110:147` defines the left-side EDU-001 composition. The shared frame is applied to EDU-001 and EXP-001 through EXP-004. Header, right chapter navigation, and spear/scene were unchanged and remain outside this scoped implementation. |

Do not add a Figma link or mark a frame approved until that link or approval exists.

## Responsibility boundaries

- [`AGENTS.md`](../../AGENTS.md) owns durable visual, interaction, motion, and
  runtime-font policy.
- This file owns frame naming, export handling, handoff workflow, and frame
  status.
- [`foundations.md`](foundations.md) owns audited values and open visual
  decisions.
- [`motion/`](motion/) owns transition-specific sequences, timings, signals, and
  unresolved motion decisions.
- [`content/ABOUT_CONTENT.md`](../../content/ABOUT_CONTENT.md) owns exact About
  copy and verification flags.
- [`TASKS.md`](../../TASKS.md) owns detailed implementation status and
  validation history.
- Production code owns current application behavior. A spear shown in Figma is
  a composition reference, not a runtime DOM image.

## Homepage desktop idle

Reference:

`references/homepage/homepage-desktop-idle-v1.png`

### Implementation boundaries

- This reference defines the static desktop composition.
- Jaylan Wu is the primary identity.
- `alter-egoist` is a secondary digital/creative identity.
- The primary destinations are Projects, Music, Playground, and About.
- The spear visible in the reference is a composition guide for scale,
  silhouette, camera framing, rotation, and cropping.
- Use the established runtime font tokens while matching the frame's type scale,
  weight, line height, letter spacing, wrapping, alignment, and cropping.
- Boot and navigation motion are outside this static frame; see
  [`motion/navigation-transition.md`](motion/navigation-transition.md).

The tracker above owns the frame status. See [`foundations.md`](foundations.md)
for the audited implementation mapping and [`TASKS.md`](../../TASKS.md)
Milestone 3 for detailed progress, validation, and remaining work.

## About Identity desktop idle

Reference:

`references/about/about-identity-desktop-idle-v1.png`

### Implementation boundaries

- This reference defines only the About / Identity / Desktop / Idle static
  composition at the `1440 × 900` baseline.
- The left narrative and system interface remain semantic DOM content. The
  spear remains in the About-owned React Three Fiber scene.
- Use the established runtime font tokens while matching the reference's type
  scale, weight, line height, letter spacing, wrapping, alignment, and cropping.
- The `04` page index uses the unmodified shared Home treatment and viewport
  alignment rather than the reference's About-specific crop.
- Red identifies the current About chapter and the right-navigation
  hover/focus state. Orange remains the default active-system accent elsewhere,
  and the warm foreground token remains the primary text color.
- The export is a review reference only; it is not a runtime background or
  spear image.
- This static reference does not define the continuous procedural rotation or
  future authored chapter motion.

The tracker above owns the frame status. See [`foundations.md`](foundations.md)
for the compared layout and type values,
[`content/ABOUT_CONTENT.md`](../../content/ABOUT_CONTENT.md) for exact editorial
material, and [`TASKS.md`](../../TASKS.md) Milestone 6 for implemented
behavior, validation evidence, and remaining chapter work. The Identity
comparison does not approve Trajectory or the three later chapter
compositions; Trajectory's separately scoped status is recorded below. No
authored Blender motion reference is stored.

## About Trajectory desktop idle

Reference:

`references/about/about-trajectory-edu-001-desktop-idle-v1.png`

Live selection:

[About / Trajectory / EDU-001 / Desktop / Idle — node 110:147](https://www.figma.com/design/rUjkiEK09hYodbltprw6kk/Longinus?node-id=110-147&t=jypyhZZFKMRF2Urs-4)

### Implementation boundaries

- This checkpoint implements only the left-side Trajectory composition.
- The persistent header, its typography and behavior, the right-side chapter
  navigation, the page index, the spear, the About Three.js scene, and camera
  staging remain unchanged.
- EDU-001 is the base anatomy for the chapter heading, display title, lead,
  five-record selector, current-record panel, narrative regions, supporting
  metadata, structural rules, and decorative organization mark.
- The same selected-record frame is used by EDU-001 and EXP-001 through
  EXP-004. `EXP-005` remains incomplete, unpublished, and absent from the
  selector.
- At `1440 × 900`, the selector is `460 × 426`, the runtime selected-record
  panel is `360 × 607`, the column gap is `40px`, and both regions bottom-align.
  The approved Figma frame remains the `325 × 607` visual baseline; the
  additional `35px` of runtime width is an intentional, user-approved
  post-reference refinement. The panel keeps fixed title, record-metadata,
  narrative, and footer regions so record selection cannot move or resize its
  outer border.
- Selected-record titles use named `standard`, `long`, and `extra-long`
  variants. Authored two-line breaks remain data-owned. The selector uses the
  approved `Lab Facilities Manager` short title so the role and visible state
  label do not collide; the selected record retains the official
  `Instructional Facilities Manager` title.
- NYU, New York Mets, and Major League Baseball marks use feature-owned assets
  with named position and scale variants. The MLB mark uses the supplied
  transparent `3840 × 2160` PNG. All three remain grayscale, faint, decorative,
  proportion-preserving, and reduced-motion aware. The Mets and MLB marks share
  a lower-content-center position at the midpoint between the second divider
  and the card bottom.

### Responsive interpretation

- Larger desktops retain the controlled `460px` selector and `360px` panel
  maxima, keep the composition grouped at the left, and let negative space
  absorb additional viewport area.
- The `1440 × 800` short-desktop branch tightens the vertical relationship
  between the chapter heading, introduction, selector, and panel while keeping
  the `360 × 607` frame and all text visible.
- Below `1240px`, the selector and stable selected-record frame stack within
  the left narrative region. At `390 × 844`, the full text remains available
  through natural page scrolling with no horizontal overflow, clipping,
  clamping, ellipsis, or internal panel scrollbar. Because the mark is below
  the selector in this stacked flow, it swaps immediately instead of animating
  while offscreen.

### Editorial and visual notes

- [`content/ABOUT_CONTENT.md`](../../content/ABOUT_CONTENT.md) and the runtime
  Trajectory data contain the revised EDU-001 copy and concise three-section
  narratives for EXP-001 through EXP-004.
- The repository implementation intentionally differs from the live node and
  stored export through user-approved post-reference refinements: the
  selected-record width (`360px` runtime versus `325px` reference), revised
  EXP-002 and EXP-003 title breaks, the EXP-004 constrained directory title,
  `11px` non-heading Current Record text, the increased EDU-001 metadata
  clearance, and lower-region centering for the sports marks. Other measured
  differences are limited to minor raster and low-opacity mark compositing.
- The stored visual still contains the older EDU-001 narrative. Its
  `LAB FACILITIES MANAGER` selector wording is now an approved constrained
  display title, while the selected-record heading preserves the official
  `INSTRUCTIONAL FACILITIES MANAGER` wording.
- Runtime typography continues to use the established font tokens. Dominant
  reference text that is pure white maps to the warm foreground token, and the
  reference surface `#141318` maps to the established surface token `#141317`.
- The supplied transparent `mlb.png` is used directly with a compact-wide,
  proportion-preserving treatment; the superseded checker-backed `mlb.webp`
  has been removed.
- Official degree, school/program, role, course, organization, and date wording
  retains the verification flags in
  [`content/ABOUT_CONTENT.md`](../../content/ABOUT_CONTENT.md) and
  [`TASKS.md`](../../TASKS.md).

This scoped implementation does not approve the complete Trajectory chapter,
its right-side scene, other interaction states, or the three later About
chapter compositions.
