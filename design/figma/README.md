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

## Figma organization

Use these sections in the Figma file:

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
| --- | --- | --- | --- | --- | --- | --- | --- |

Do not add a Figma link or mark a frame approved until that link or approval exists.

## Responsibility boundaries

- Figma defines static composition, visual hierarchy, spacing, typography, overlap, cropping, and intended states.
- Markdown motion documents define timing, state changes, and interaction intent.
- React components implement accessible HTML behavior.
- React Three Fiber and Three.js implement the interactive spear.
- A spear shown in Figma may be a static positioning reference, but the production experience must reuse the existing 3D scene.
- `src/assets/` contains runtime application assets.
- `design/figma/references/` contains design-review references only.

## Open design decisions

- Final project-detail spear placement
- Whether the spear exits, remains visible, or docks into the top navigation
- Mobile navigation behavior
- Final project-selection transition timing
