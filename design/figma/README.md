# Figma Reference System

## Purpose

Figma is the primary visual source of truth for static page composition. This directory stores approved reference exports and concise implementation notes so designs can be reviewed and reproduced one state at a time.

The existing React, TypeScript, and Three.js architecture remains the source of truth for application behavior. Figma-generated code must not be copied directly into the production application.

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
| About | About / Identity / Desktop / Idle | 1440 × 900 (16:10) | Idle | `references/about/about-identity-desktop-idle-v1.png` | [Open frame](https://www.figma.com/design/rUjkiEK09hYodbltprw6kk/Longinus?node-id=64-24&t=4yJDN38gz5xqZBrG-4) | Implemented | Compared in-browser at the canonical viewport and reviewed at `1440 × 800`, `1680 × 1050`, `1920 × 1200`, `2240 × 1400`, and `2560 × 1600`. Verified editorial copy, semantic color roles, unbundled fonts, and the procedural spear create documented differences from the export. |

Do not add a Figma link or mark a frame approved until that link or approval exists.

## Responsibility boundaries

- Figma defines static composition, visual hierarchy, spacing, typography, overlap, cropping, and intended states.
- Markdown motion documents define timing, state changes, and interaction intent.
- React components implement accessible HTML behavior.
- React Three Fiber and Three.js implement the interactive spear.
- A spear shown in Figma may be a static positioning reference, but the production experience must reuse the existing 3D scene.
- Runtime application assets live in `src/assets/`, feature-owned `src/features/*/assets/` directories, or `public/` according to ownership and loading needs.
- `design/figma/references/` contains design-review references only.

## Open design decisions

- Final project-detail spear placement
- Whether the spear exits, remains visible, or docks into the top navigation
- Mobile navigation behavior
- Final project-selection transition timing
- Approved desktop compositions for About chapters Trajectory, Outside the
  System, Interactive Influences, and Current Direction
- Authored About chapter spear postures and transitions

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
- Production must use the approved final Spear asset in the existing React Three Fiber scene architecture.
- Do not implement the Figma spear image as a DOM image.
- Boot motion, navigation focus, spear orientation, impact, and routing are
  separate implementation milestones.

### Current implementation progress

- Implemented a desktop-first left-interface/right-scene composition with the same major regions as the `1440 × 900` export.
- Implemented Jaylan's identity, numbered navigation, system labels, outer frame, divider, circle, `LONGINUS` watermark, and `00` scene index, but no recorded browser comparison proves an exact match.
- Staged a temporary procedural React Three Fiber spear placeholder with homepage-specific camera, scale, rotation, position, and lighting.
- Kept Projects and About available while presenting Music and Playground as planned destinations.
- Restored orange hover and keyboard-focus feedback for available navigation targets.
- Added intermediate desktop-height handling to prevent the navigation and footer from crowding or clipping below the canonical viewport height.
- Added a title-card phrase that is selected once per page load.
- Documented the current provisional typography stacks in [`foundations.md`](foundations.md).

### Work still open

- The homepage remains a work in progress and is not approved.
- Replace the temporary procedural spear placeholder with the final authored 3D model; that model has not been implemented yet.
- Complete a browser-based comparison at the canonical viewport and representative shorter desktop viewports.
- Resolve current copy and type-metric differences between source and export before claiming a match.
- Finalize and bundle legally usable display, system, content, and identifier fonts.
- Continue refining type metrics, lower-page spacing, ambient typography, and the 2D/3D relationship.
- Revisit camera, lighting, scale, silhouette, and cropping after the final 3D model is integrated.
- Design and implement the final mobile composition separately.
- Keep boot, target-focused spear motion, impact, and route transitions in their later milestones.

## About Identity desktop idle

Reference:

`references/about/about-identity-desktop-idle-v1.png`

### Implementation boundaries

- This reference defines only the About / Identity / Desktop / Idle static
  composition at the `1440 × 900` baseline.
- The left narrative and system interface remain semantic DOM content. The
  spear remains in the About-owned React Three Fiber scene.
- A shell-owned active chapter header provides one fixed top-left anchor and
  reserved bounding region for all five canonical chapter labels. Individual
  sections retain visually hidden semantic headings.
- The site-level `Index` action and right-side chapter controls reuse the Home
  available-navigation hover, keyboard-focus, cursor, easing, and
  reduced-motion treatment through the shared `navigation-action` style. The
  chapter controls retain their compact layout and use red as their scoped
  state accent.
- Identity axis wording is synchronized between the supplied reference,
  `content/ABOUT_CONTENT.md`, and the runtime data.
- About retains the established display and sans-serif font families while
  matching the reference's baseline type scale, line cadence, wrapping, and
  placement.
- The `04` page index uses the unmodified shared Home treatment and viewport
  alignment rather than the reference's About-specific crop.
- Red identifies the current About chapter and the right-navigation
  hover/focus state. Orange remains the default active-system accent elsewhere,
  and the warm foreground token remains the primary text color.
- The export is a review reference only; it is not a runtime background or
  spear image.

### Verified implementation

- The canonical comparison establishes a full-width `67.64% / 32.36%`
  narrative/scene relationship, a stable chapter anchor, four-line display
  statement, adjacent opening statement, three equal axis regions, compact
  identity metadata with Location centered in the gap between Name and
  Creative Signature, and right chapter
  navigation. The shared Home page-index treatment is an intentional exception
  to the reference.
- Major spacing relationships were audited against the export: page header to
  Identity content and chapter anchor; identifier to chapter title; display
  statement to opening statement and axes; internal and inter-column axis
  spacing; name, location, and creative-signature metadata; left content to
  central negative space and scene; spear to chapter navigation; navigation to
  viewport edges; and the structural lines and markers that classify those
  regions. Page-index position was checked against Home instead of the About
  export.
- Responsive desktop tracks, viewport-aware spacing, and bounded type sizes
  preserve the composition across the reviewed `16:10` sizes without
  horizontal overflow or a fixed-width content island.
- The Identity spear pose is stable and does not target, follow the pointer,
  thrust, create impact, or spin continuously. Its staging is a best-fit use of
  the shared procedural placeholder.
- Pointer, keyboard, scroll-driven chapter changes, reduced motion, route
  teardown, and semantic content with a forced unavailable WebGL context were
  exercised in a browser.

### Work still open

- Trajectory, Outside the System, Interactive Influences, and Current
  Direction still require their own approved static compositions. This
  Identity implementation does not approve or redesign their content layouts.
- The final licensed typography and authored Spear of Longinus asset remain
  unavailable. Exact type metrics and the export's forked, twisting spear
  silhouette therefore cannot be reproduced.
- Authored spear postures and transitions for chapters after Identity remain
  pending.
- The existing narrow-layout fallback remains available, but a finished mobile
  reinterpretation and physical touch-device review remain open.
