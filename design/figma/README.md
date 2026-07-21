# Figma Reference System

## Purpose

Figma is the primary visual source of truth for static page composition. This directory stores approved reference exports and concise implementation notes so designs can be reviewed and reproduced one state at a time.

The existing React, TypeScript, and Three.js architecture remains the source of truth for application behavior. Figma-generated code must not be copied directly into the production application.

## Canonical viewport

The current primary desktop design viewport is:

```text
1440 × 900
```

This is a visual comparison reference, not a fixed browser requirement. The implementation must still adapt responsively and treat mobile as an intentional reinterpretation.

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

For example:

```text
Homepage / Desktop / Idle
Projects / Desktop / Idle
Projects / Desktop / Card Hover
Projects / Desktop / Selection
Project Detail / Desktop / Default
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
