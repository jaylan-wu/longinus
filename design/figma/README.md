# Exported Visual Reference System

## Purpose

This directory records Figma as the design authoring environment and owns the
repository-export handoff process, theme-directory organization, reference
naming rules, and approved-frame tracker. [`AGENTS.md`](../../AGENTS.md) defines
the full source-of-truth hierarchy;
[`foundations.md`](foundations.md) records audited visual values and open design
decisions; and [`TASKS.md`](../../TASKS.md) owns detailed implementation and
validation status.

Figma is not an implementation dependency. Codex implements from exported
visual-reference images stored under [`references/`](references/), not from
the Figma API, Figma MCP integrations, Dev Mode, paid implementation features,
or direct Figma URLs. Optional authoring links may be retained as provenance,
but they are never required inputs and must not block implementation.

Exported references define visible composition and measurable typographic
treatment, while written specifications and targeted follow-up answers define
behavior that a static image cannot show. The font tokens in `src/index.css`
define runtime font families. Do not copy authoring-tool-generated code or
font-family names into the production application.

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

## Recommended Figma authoring organization

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

Name authored frames using:

```text
Page / Theme / Viewport / State
```

For chapter- or record-based experiences, insert that view after the page:

```text
Page / Chapter or Record / Theme / Viewport / State
```

For example:

```text
Homepage / Dark / Desktop / Idle
Projects / Dark / Desktop / Idle
Projects / Dark / Desktop / Card Hover
Projects / Dark / Desktop / Selection
Project Detail / Dark / Desktop / Default
About / Identity / Dark / Desktop / Idle
```

## Reference export rules

Images under `references/` are visual comparison references, not runtime assets.
Store each export in the `dark/` or `light/` directory directly beneath
`references/`. Keep this theme-first layer flat: the filename already identifies
the page or section, so additional page directories would duplicate information
and multiply folders across themes.

Each export should:

- use a clear, semantic filename without repeating the theme represented by
  its parent directory;
- represent an approved checkpoint;
- avoid capturing every minor design iteration;
- preferably use `.png`, `.jpg`, or `.webp`; and
- never be imported into the application as full-page UI.

Use the general path structure:

```text
references/<theme>/<section>-<view>-<viewport>-<state>-v<version>.<ext>
```

`<theme>` is `dark` or `light`. Omit or extend a filename segment only when the
page has no meaningful subview or needs a stable record identifier. Examples:

```text
references/dark/homepage-desktop-idle-v1.png
references/dark/projects-archive-desktop-hover-v1.png
references/dark/project-detail-longinus-desktop-default-v1.png
references/dark/about-identity-desktop-idle-v1.png
references/light/about-identity-desktop-idle-v1.png
```

Avoid ambiguous names such as `final-final-2.png`.

Do not rename unrelated production assets to match this convention, and do not
invent light references before they are exported and approved.

## Export-to-implementation workflow

1. Design and review a specific frame in Figma.
2. Export the approved reference image.
3. Store it in the corresponding `references/dark/` or `references/light/`
   directory with a semantic, theme-free filename.
4. Update the approved-frame table below.
5. Have Codex inspect the repository image and identify what is visually clear.
6. Have Codex identify meaningful behavior or responsive decisions that the
   static image cannot establish.
7. Resolve only those meaningful unknowns through written specifications or
   targeted follow-up questions.
8. Implement one complete state at the intended viewport.
9. Compare the implementation with the exported reference and record known
   differences.

Static references are authoritative for visible layout, relative position,
hierarchy, typography scale and alignment, line breaks, negative space, color
application, borders, grid relationships, component proportions, overlap,
cropping, visible 2D/3D relationships, and the pictured state. They do not by
themselves define hover, focus, activation, animation, transition timing,
scroll or sticky behavior, hidden states, touch behavior, reduced-motion
interpretation, camera motion, lighting changes, or responsive behavior beyond
the supplied viewport.

Inspect existing Longinus patterns before asking. Ask a targeted question only
when guessing would materially change art direction, interaction, responsive
composition, animation, or architecture. Resolve minor reversible details from
the image and established project rules.

## Approved-frame tracker

Valid implementation status values include `Not started`, `In progress`, `Implemented`, `Needs revision`, and `Approved`.

| Page | Frame | Viewport | State | Repository Reference | Optional Authoring Provenance | Implementation Status | Notes |
|---|---|---|---|---|---|---|---|
| Homepage | Homepage / Dark / Desktop / Idle | 1440 × 900 | Idle | `references/dark/homepage-desktop-idle-v1.png` | [Optional authoring frame](https://www.figma.com/design/rUjkiEK09hYodbltprw6kk/Longinus?node-id=15-3&t=HHY6a7bF5595h5wr-4) | In progress | Major DOM regions are staged. Browser comparison, final 3D model, complete 2D/3D review, motion, and boot remain open. |
| About | About / Identity / Dark / Desktop / Idle | 1440 × 900 (16:10) | Idle | `references/dark/about-identity-desktop-idle-v1.png` | [Optional authoring frame](https://www.figma.com/design/rUjkiEK09hYodbltprw6kk/Longinus?node-id=64-24&t=4yJDN38gz5xqZBrG-4) | Implemented | Compared in-browser at the canonical viewport and reviewed at `1440 × 800`, `1680 × 1050`, `1920 × 1200`, `2240 × 1400`, and `2560 × 1600`. The established runtime font stacks and procedural spear are documented implementation differences from the export. The later user-directed removal of the visible top-left chapter heading and first-content reflow are intentional post-reference changes. |
| About | About / Trajectory / EDU-001 / Dark / Desktop / Idle | 1440 × 900 (16:10) | Idle | `references/dark/about-trajectory-edu-001-desktop-idle-v1.png` | [Optional authoring frame](https://www.figma.com/design/rUjkiEK09hYodbltprw6kk/Longinus?node-id=110-147&t=jypyhZZFKMRF2Urs-4) | Implemented | The full static runtime frame was compared at the canonical viewport and its bounded desktop interpretation was reviewed at `1920 × 1080`, `2500 × 1350`, and `2560 × 1440`. The shared record anatomy applies to EDU-001 and EXP-001 through EXP-004. Runtime fonts, the wider canonical panel, the procedural spear, the trajectory-specific display-title fit, and the later visible-heading removal with a `360 × 673px` canonical panel are documented post-reference differences. |
| About | About / Outside the System / PHOTO-001 / Dark / Desktop / Idle | 1440 × 900 (16:10) | Idle | `references/dark/about-outside-photo-001-desktop-idle-v1.png` | — | Implemented | The approved export defined and was directly compared with the left-side chapter composition. The established right navigation and spear scene remain protected prior work. Visible `PHOTO-*` carousel labels, Identity-matched display-title proportions, and the later visible-heading removal with selected-image reflow are intentional runtime refinements. |
| About | About / Interactive Influences / Display 01 / Dark / Desktop / Idle | 1440 × 900 (16:10) | Idle | `references/dark/about-influences-inf-001-desktop-idle-v1.png` | — | Implemented | The full left and center composition was directly compared at the canonical viewport. Display positions and identifiers now share the reference order from Evangelion `INF-001` through Metaphor `INF-004`; the established font tokens, header, right navigation, procedural spear, page index, and temporary theme control remain intact. All four explicitly supplied images are available as optimized WebPs. |

Authoring provenance is optional and may be omitted. A direct link never
substitutes for a repository export and is not a prerequisite for approval or
implementation. Do not mark a frame approved until explicit approval exists.

All references currently tracked above are under `references/dark/`. No
approved light-mode reference exists yet; add `references/light/` with the
first approved light export rather than reserving it with an empty placeholder.

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
- Production code owns current application behavior. A spear or Ramiel study
  shown in an exported reference is a composition reference, not a runtime DOM
  image.

## Homepage dark desktop idle

Reference:

`references/dark/homepage-desktop-idle-v1.png`

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

## About Identity dark desktop idle

Reference:

`references/dark/about-identity-desktop-idle-v1.png`

### Implementation boundaries

- This reference defines only the About / Identity / Desktop / Idle static
  composition at the `1440 × 900` baseline.
- The left narrative and system interface remain semantic DOM content. The
  spear remains in the About-owned React Three Fiber scene.
- Use the established runtime font tokens while matching the reference's type
  scale, weight, line height, letter spacing, wrapping, alignment, and cropping.
- The `04` page index keeps the shared Home component, fixed viewport
  alignment, weight, and opacity. An About-scoped desktop size rule matches
  the shared treatment at `1440 × 900` and grows with the About block unit on
  larger viewports.
- Red identifies the current About chapter and the right-navigation
  hover/focus state. Orange remains the default active-system accent elsewhere,
  and the warm foreground token remains the primary text color.
- The export is a review reference only; it is not a runtime background or
  spear image.
- This static reference does not define the continuous procedural rotation or
  future authored chapter motion.

### Current shared chapter-entry treatment

- The stored About exports retain their original orange-numbered top-left
  chapter headings as historical composition references. The current runtime
  intentionally removes those five visible headings. Each chapter still owns a
  visually hidden `h2`, and each section retains its `aria-labelledby`
  relationship.
- First content uses one responsive anchor: `151px` at the `1440 × 900`
  baseline, `120px` on short desktop and tablet layouts, and `100px` on mobile.
  Identity, Trajectory, Outside the System, Interactive Influences, and Current
  Direction each reflow or extend their own composition into that reclaimed
  space rather than sharing one generic stretch rule.
- At the canonical viewport, Trajectory extends its selected card from
  `y=151–824`, Outside uses an approximately `480 × 320px` selected image at
  `y=330–650` and keeps its carousel at approximately `y=675–789`,
  Interactive Influences extends its index from `y=151–824`, and Current
  Direction balances approximately `144px` above and `145px` below its centered
  content group.
- The persistent top-right Current chapter status and right-side chapter
  navigation remain visible. Their labels, selection behavior, and relationship
  to the fixed header are not removed with the chapter-owned heading.

The tracker above owns the frame status. See [`foundations.md`](foundations.md)
for the compared layout and type values,
[`content/ABOUT_CONTENT.md`](../../content/ABOUT_CONTENT.md) for exact editorial
material, and [`TASKS.md`](../../TASKS.md) Milestone 6 for implemented
behavior, validation evidence, and remaining chapter work. The Identity
comparison does not approve later chapter compositions; Trajectory and Outside
the System have separately scoped statuses below. No authored Blender motion
reference is stored.

## About Trajectory dark desktop idle

Reference:

`references/dark/about-trajectory-edu-001-desktop-idle-v1.png`

### Implementation boundaries

- This checkpoint implements and compares the full static Trajectory
  composition at `1440 × 900` plus its bounded large-desktop interpretation.
- The persistent header, top-right Current chapter status, right-side
  navigation, page index, and Trajectory content scale through the shared About
  desktop units. The chapter-owned visible top-left heading is removed, while a
  visually hidden semantic `h2` remains.
- The spear model, materials, chapter behavior, animation, Three.js scene, and
  camera staging remain unchanged.
- EDU-001 is the base anatomy for the semantic section heading, display title, lead,
  five-record selector, current-record panel, narrative regions, supporting
  metadata, structural rules, and decorative organization mark.
- The same selected-record frame is used by EDU-001 and EXP-001 through
  EXP-004. `EXP-005` remains incomplete, unpublished, and absent from the
  selector.
- At `1440 × 900`, the selector remains `460 × 426px` and ends at `y=824`.
  The runtime selected-record panel now begins at the shared `y=151` content
  anchor and measures `360 × 673px`, ending at the same `y=824` baseline; the
  column gap remains `40px`. The approved exported dark frame remains the
  `325 × 607px` visual baseline. The additional `35px` of runtime width and the
  later `66px` upward extension are intentional user-directed post-reference
  refinements.
  The panel keeps fixed title, record-metadata, narrative, and footer regions so
  record selection cannot move or resize its outer border.
- The runtime-font display title uses a less-condensed `0.81` horizontal stage
  and an `80px` canonical size driven by the directory's responsive inline
  unit. Its text ink ends near `x=532.6` at the canonical viewport—approximately
  `2.4px` before the directory divider endpoint and `42.4px` before the panel—
  while preserving the same near-edge relationship on larger desktops.
- Selected-record titles use named `standard`, `long`, and `extra-long`
  variants. Authored two-line breaks remain data-owned. Long selector-title
  variants keep EDU-001, EXP-002, and EXP-003 clear of the visible state
  column; EXP-004 uses the approved `Lab Facilities Manager` short title while
  its selected record retains the official `Instructional Facilities Manager`
  title.
- Selector rows reuse the right-directory interaction sequence for hover and
  keyboard focus, but map its sweep, leading rail, and role treatment to
  highlight orange. The desktop content displacement is removed on narrow and
  reduced-motion layouts while the visible orange feedback remains.
- NYU, New York Mets, and Major League Baseball marks use feature-owned assets
  with named position and scale variants. The MLB mark uses the supplied
  transparent `3840 × 2160` PNG. All three remain grayscale, faint, decorative,
  proportion-preserving, and reduced-motion aware. All three share a
  lower-content-center position at the midpoint between the second divider and
  the card bottom. The NYU portrait scale follows the card's block unit so it
  preserves divider clearance as wide desktop cards grow.

### Responsive interpretation

- Larger desktops use two bounded About units rather than a page transform.
  The width-sensitive inline unit controls horizontal inset, selector and panel
  widths, their gap, and panel insets. The height-sensitive block unit controls
  typography, row and panel heights, and vertical rhythm. Both interpolate
  continuously from the `1440 × 900` baseline and stop growing beyond the
  supported large-desktop range.
- The `1440 × 800` short-desktop branch begins first content at `120px` and
  applies its own selected-panel extension while keeping all text visible.
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
- The repository implementation intentionally differs from the stored dark
  export through user-approved post-reference refinements: the
  canonical selected-record frame (`360 × 673px` runtime versus
  `325 × 607px` reference), removal of the visible top-left chapter heading,
  revised EXP-002 and EXP-003 title breaks, the EXP-004 constrained directory
  title, `11px` canonical non-heading Current Record text, the increased
  EDU-001 metadata clearance, and lower-region centering for the sports marks.
  Other measured differences are limited to the established runtime fonts,
  procedural spear silhouette, minor raster treatment, and low-opacity mark
  compositing.
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

This implemented checkpoint does not approve other Trajectory interaction
states, authored spear motion, the final spear asset, or later About chapter
compositions.

## About Outside the System dark desktop idle

Reference:

`references/dark/about-outside-photo-001-desktop-idle-v1.png`

### Implementation boundaries

- This checkpoint implements and compares the left-side Outside the System
  composition at `1440 × 900`. The persistent header remains shared About
  work, while the existing right chapter navigation, divider, page index, and
  spear scene are protected prior work and were not changed to match the
  export. A later scoped refinement changed only the active navigation row's
  two horizontal rules to the same primary-red token and rendering primitive;
  navigation structure, geometry, behavior, and spear work remain unchanged.
- The export was inspected directly from the repository. No Figma connection,
  URL, or node was used, and the reference remains a design-development
  artifact rather than a production import.
- The composition uses a visually hidden semantic chapter heading, a
  horizontally staged display title, the approved travel-and-photography
  introduction, an approximately `480 × 320px` selected image, an adjacent
  lavender metadata region, and five visible landscape thumbnails at the
  canonical viewport. At `1440 × 900`, the title begins at `y=151`, the selected
  image spans approximately `y=330–650`, and the carousel spans approximately
  `y=675–789`.
- `PHOTO-001` is the initial record. The gallery renders all seven available
  feature-owned assets and keeps record selection local to the Outside chapter.
- Every thumbnail keeps its visible `PHOTO-*` identifier beneath the image.
  These labels are an intentional functional divergence from the export and
  remain present for pointer, keyboard, touch, narrow, and reduced-motion use.
- Selection uses a lavender outline, a structural corner marker, visible
  identifier treatment, `aria-pressed`, and `aria-current`; red is not used for
  gallery state.
- Previous and next controls compensate for the thumbnail label block so their
  circular rings stay centered on the image at desktop, tablet, and mobile
  widths; the typographic arrow receives a small optical lift within the ring.

### Responsive and interaction interpretation

- The shared About inline and block units scale the display title, selected
  image, metadata, thumbnails, and spacing without changing the fixed
  left/right shell boundary. The pre-reflow composition was reviewed at
  `1440 × 800`, `1440 × 900`, `1920 × 1080`, `2500 × 1350`, and
  `2560 × 1440`. The reduced preview was subsequently browser-measured at
  `1440 × 900`, `1920 × 1080`, `1080 × 900`, and `390 × 844` without caption
  or page-level horizontal overflow; still-larger post-reflow desktops remain
  open for refreshed comparison.
- At `390 × 844`, selected image and metadata stack in document order, the
  control-driven thumbnail track keeps its active record centered, labels
  remain visible, and normal page scrolling exposes the complete chapter
  without horizontal or internal chapter overflow.
- The carousel intentionally wraps through four accessibility-hidden
  presentation clones at each edge. The selected record remains in the middle
  of the five-thumbnail desktop track, including across the final-to-first
  boundary, before the track normalizes invisibly to the equivalent real item.
  Seven real semantic thumbnail buttons remain available, while a roving Tab
  stop follows the selected button. Previous/next, Enter, Space, Left/Right
  Arrow, Home, End, pointer, and touch activation update the same local
  selected-photo state.
- Reduced motion removes the selected-photo reveal and uses immediate
  programmatic carousel repositioning. When WebGL is unavailable, the complete
  gallery and its semantic content remain usable without changing geometry.

The original photography files remain archival JPEG sources. Runtime data uses
2000px WebP display images and 480px WebP thumbnails; broader responsive
`srcset` delivery and loading/performance review remain open in
[`TASKS.md`](../../TASKS.md).

## About Interactive Influences dark desktop idle

Reference:

`references/dark/about-influences-inf-001-desktop-idle-v1.png`

### Implementation boundaries

- This checkpoint implements and directly compares the Interactive Influences
  left-directory and selected-record composition at `1440 × 900`.
- The existing fixed header, top-right Current chapter status, right-side
  chapter navigation, page index, About motif scene, and chapter-level state
  remain protected shared work. Influence selection stays local and does not
  target, animate, or remount the spear.
- The composition begins at `x=75, y=150`, uses a `460px` directory, a `40px`
  gap, and a `325 × 675px` selected panel. The directory introduction occupies
  the first `175px`; four approximately `125px` rows fill the remaining
  `500px`. The initial Evangelion image remains approximately `300 × 200px`,
  the quote divider ends at `y=434`, and the categories divider remains
  bottom-anchored at `y=719`.
- The directory uses display positions `01` through `04` in the reference order,
  and the identifiers now follow that same order: Evangelion `INF-001`, Kafka
  `INF-002`, Persona `INF-003`, and Metaphor `INF-004`.
- The `INFLUENCES` display title uses a less-condensed `0.89` horizontal stage
  and an inline-unit-driven `72px` canonical size. It ends approximately
  `3.8px` before the directory divider at `1440 × 900` and preserves the same
  near-edge relationship across the reviewed large-desktop range.
- Rows reuse the shared `navigation-action` background sweep, leading rail,
  label treatment, visible focus outline, and reduced-motion behavior with the
  highlight-orange analytical-state accent. Selected state also remains
  explicit through `SELECTED`, `aria-pressed`, and paired orange rules.
- The selected panel renders only stable metadata, an optional record-owned
  image, quote, Personal Reflection, and Influence Categories. A flex spacer
  after the reflection pins categories to the panel bottom for every record.
  Each record uses its explicitly supplied image. The Kafka and Metaphor JPEGs
  have optimized WebP derivatives, and the Persona WebP is resized and
  re-encoded for the website. Images retain their native aspect ratios, remain
  centered, and use a `300px` width cap rather than a shared cover crop.

### Responsive and editorial interpretation

- The canonical composition scales through the shared bounded About inline and
  block units. It was browser-inspected at `1440 × 800` and `1920 × 1080`; at
  `1240px` and below, the introduction, directory, and selected panel stack in
  normal document flow.
- Selected imagery remains at or below `300px` wide across desktop and stacked
  layouts. Viewports narrower than the cap shrink the image to the available
  panel width without changing its intrinsic ratio.
- The stacked interpretation was inspected at `1080 × 900`, `390 × 844`, and
  `320 × 568` without page-level horizontal overflow. Content remains available
  through normal scrolling, including when the About WebGL scene is unavailable.
- Runtime typography uses the established display, sans/content, and
  mono/system tokens. The selected panel uses the canonical full release range
  `1995–1997`; its identifier now agrees with the export.
  The existing longer Current chapter label, temporary theme QA control,
  procedural spear silhouette, and page-index rendering are protected runtime
  differences rather than changes owned by this chapter.
- All four featured quotations retain their open wording, punctuation,
  translation, attribution, edition, speaker, or source-scene verification
  flags in [`content/ABOUT_CONTENT.md`](../../content/ABOUT_CONTENT.md).
