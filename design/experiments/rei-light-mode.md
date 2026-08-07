# Rei Light-Mode / Ramiel Experiment

> **Branch-only art-direction study.** This document records the
> `rei-light-mode` experiment. It does not replace the durable Longinus dark
> direction in `AGENTS.md`, approve a new canonical palette, or revise the
> implementation status of existing Figma references.

## Purpose

This experiment asks whether the existing Longinus composition can support a
brighter, quieter visual identity derived abstractly from Rei Ayanami's
classroom-uniform color language. Longinus remains Jaylan Wu's portfolio: its
layout, content hierarchy, routes, responsive interpretation, chapter
navigation, interaction phases, and feature ownership remain intact.

The visual translation is deliberately narrow:

- the environment moves from black to white;
- pale and icy blues become the atmospheric and identity colors;
- ribbon red becomes a scarce, high-intent interruption;
- dark neutral typography replaces warm light typography; and
- a procedural, original octahedral Ramiel study replaces the spear as the
  branch's recurring 3D motif.

The experiment is activated statically with `data-theme="rei-light"` on the
root HTML element. It is not a runtime theme switcher or a generalized skin
system. The canonical dark values remain unchanged in the base `:root`; the
branch-specific selector aliases established semantic tokens to the Rei
palette.

## Selected experimental palette

Jaylan selected five colors for the experiment. Their values are fixed for
this branch; visual approval of their application remains open.

| Token | Value | Semantic role |
| --- | --- | --- |
| `--rei-bg` / `--rei-light` | `#ffffff` | Page environment, negative space, and Ramiel highlight |
| `--rei-surface` | `#f5f7fd` | Derived surface: 10% Rei blue light mixed into white |
| `--rei-surface-blue` / `--rei-blue-soft` / `--rei-blue` / `--rei-line` | `#9dafe9` | Rei blue light: Ramiel, atmospheric fields, and structural graphics |
| `--rei-foreground` | `#172127` | Primary blue-black typography |
| `--rei-muted` / `--rei-blue-ink` / `--rei-blue-deep` / `--rei-highlight` / `--rei-focus` / `--rei-shadow` | `#545d93` | Rei blue dark: readable metadata, focus, edges, and shadow |
| `--rei-orange` | `#f28c28` | Scarce system markers and selected-photo overlay metadata |
| `--rei-red` / `--rei-red-deep` | `#e7211f` | Ribbon-red interaction, interruption, and impact |

The scoped compatibility mapping keeps existing feature CSS intact:

- background, surface, foreground, and muted map directly to their Rei roles;
- primary maps to ribbon red;
- secondary maps to Rei blue dark rather than Rei blue light, because the
  established secondary role is also used for small text and focus states;
- highlight maps to Rei blue dark so routine system feedback remains readable
  and does not exhaust the red accent; and
- orange is separate from `--color-highlight` because orange on white does not
  have enough contrast for the small interface text and focus boundaries that
  consume the established highlight token. Its text use is limited to the
  decorative metadata over selected photographs.

Every color used through `rgba()` has an RGB companion. Pale blue remains a
surface and graphic color; it is not used automatically as body copy. The
supporting neutral and derived surface do not expand the accent palette: they
exist only to keep primary copy readable and create quiet surface depth.

## Typography study

Three deliberately limited systems were rendered in the browser at
`1440 × 900` across the same Home and About Identity compositions. The first
pass selected the editorial hybrid, but the later dark/light positioning audit
found unavoidable glyph-width, baseline, and wrapping drift. Exact
compositional parity was prioritized, so the final experiment restores the
canonical runtime stacks and removes the trial web-font packages.

| Direction | Display | Content | System / identifier | Assessment |
| --- | --- | --- | --- | --- |
| Canonical dark baseline | Times New Roman system stack | Arial / Helvetica | SFMono / Consolas / Liberation Mono | Preserves the established title-card tension, but carries more of the dark Longinus character into the light study. |
| Clinical Rei | IBM Plex Sans Variable | IBM Plex Sans Variable | IBM Plex Mono | Precise and institutional, but reduces the expressive contrast between large display composition and small system language. |
| Editorial Rei | Newsreader Variable | IBM Plex Sans Variable | IBM Plex Mono | Introspective and editorial, but its metrics shift established text positions and wrapping. |

The canonical system preserves the exact hierarchy, line breaks, and
coordinates already refined for dark Longinus. The all-Plex system reduced the
contrast between expressive display and analytical system roles and read too
much like a conventional institutional interface. The editorial system added
the intended quiet texture but changed perceived centering and glyph placement
inside otherwise unchanged boxes. The requested symmetry and positional
fidelity outweighed that branch-only typographic difference.

The selected assignments therefore remain:

- Display: `"Times New Roman Condensed"`, `"Times New Roman"`, Times, serif.
- Content: Arial, Helvetica, sans-serif.
- System and Identifier: `"SFMono-Regular"`, Consolas,
  `"Liberation Mono"`, monospace.

These are the existing system-font stacks owned by `src/index.css`; this
experiment adds no font assets or font requests. The rejected web-font trials
were legally suitable and were sourced through Fontsource under SIL Open Font
License 1.1 packages, but they are no longer installed or loaded.

| Font | Package | Source | License |
| --- | --- | --- | --- |
| Newsreader Variable | [`@fontsource-variable/newsreader`](https://www.npmjs.com/package/@fontsource-variable/newsreader) | [Fontsource: Newsreader](https://fontsource.org/fonts/newsreader) | [SIL Open Font License 1.1](https://openfontlicense.org/open-font-license-official-text/) |
| IBM Plex Sans Variable | [`@fontsource-variable/ibm-plex-sans`](https://www.npmjs.com/package/@fontsource-variable/ibm-plex-sans) | [Fontsource: IBM Plex Sans](https://fontsource.org/fonts/ibm-plex-sans) | [SIL Open Font License 1.1](https://openfontlicense.org/open-font-license-official-text/) |
| IBM Plex Mono | [`@fontsource/ibm-plex-mono`](https://www.npmjs.com/package/@fontsource/ibm-plex-mono) | [Fontsource: IBM Plex Mono](https://fontsource.org/fonts/ibm-plex-mono) | [SIL Open Font License 1.1](https://openfontlicense.org/open-font-license-official-text/) |

The trial names and licensing are retained here to document what was evaluated,
not to declare runtime dependencies.

## Ramiel prototype

The prototype uses an original procedural octahedral form rather than a copied
character asset or a custom Blender model. Visual importance should come from
silhouette, scale, crop, orientation, tonal variation, and controlled lighting
rather than geometry density, bloom, or an expensive post-processing stack.

The intended physical vocabulary is suspended and geometric:

- idle favors long still moments with restrained angular drift;
- focus rotates a face or vertex toward the active target;
- commitment aligns and briefly stills the geometry; and
- impact or transition uses controlled scale, rotation, or planar separation
  with only a brief red interruption.

The existing interaction phases and route timing remain the coordination
structure. Page-owned scenes retain their camera, staging, and motion
responsibilities. Reduced motion should remove continuous drift and use stable
authored orientations. A simple standard or restrained physical material is
preferred over costly transmission if glass treatment becomes noisy against
the white environment.

## Implementation tradeoffs

- The static root attribute is intentionally less flexible than a theme
  provider, but it is reversible and appropriate for a single experimental
  branch.
- Existing semantic aliases provide broad palette coherence without moving
  page composition into global CSS. A few feature-owned atmospheric effects
  still require deliberate blue/red interpretation rather than blind token
  substitution.
- A compact octahedron cannot inherit the spear's long visual footprint.
  Camera proximity, scale, asymmetry, cropping, and shadow footprint must carry
  equivalent visual weight without changing the underlying layout.
- Retaining the canonical font tokens preserves established text metrics and
  avoids branch-only spacing compensation. Typography now differs from dark
  Longinus only through color application, not family or positioning.
- The existing favicon is a blue octahedral raster and fits the palette, but
  its provenance and small-size legibility have not been approved as part of
  this experiment.

## Implemented branch scope

- Home, Projects, and the implemented About chapters receive the Rei palette
  through the scoped semantic layer plus feature-owned atmospheric styling.
  Music, Playground, and unrelated staged work were not expanded.
- A shared low-poly `OctahedronGeometry` supplies Ramiel's body, translucent
  shell, core, and edge definition. Geometry is allocated once at module
  scope; the scenes use bounded DPR, no shadow map, no transmission sampling,
  and no post-processing.
- Home translates pointer and keyboard focus into restrained target-owned
  orientations without changing link order or destinations. Projects keeps
  the existing phase reducer and route timings, but maps focus, commitment,
  impact, and transition to orientation, compression, stillness, and expansion
  instead of a thrust. About retains its page-owned scene and assigns stable
  chapter orientations.
- Home and Projects retain a geometric CSS fallback when WebGL is unavailable.
  About preserves its existing failure invariant: the scene can disappear
  while all semantic content and navigation remain available.
- The canonical Spear source remains in the repository as unreferenced branch
  context, but no Home, Projects, or About runtime scene instantiates it. This
  keeps the study reversible without introducing a generalized motif system.
- About chapter DOM, content order, selected-record structures, header,
  chapter positions, observer behavior, and right-side navigation structure
  are unchanged. No font-metric spacing repair remains after restoring the
  canonical stacks. A later user-directed scale refinement enlarges the three
  implemented About display titles while preserving their authored line breaks
  and containers; it does not alter the chapter navigator.
- About continues to receive the established chapter and scroll state, but its
  visual response deliberately translates the spear's continuous velocity
  reaction into chapter-owned orientations and long still intervals. This is
  a motif-level motion change, not a navigation or observer change.

## Validation snapshot — 2026-08-07

The stored dark Home and About exports were compared with branch captures at
equivalent `1440 × 900` viewports. Runtime checks also covered `1440 × 800`,
`1920 × 1080`, and `390 × 844`; Home, Projects, About Identity, all five
Trajectory records, and all seven Outside photographs were included. Major
regions, hierarchy, negative space, and root document widths remained stable.
Home retained its `45.14% / 54.86%` desktop composition and Projects retained
its established interface/scene tracks. The About right navigator measured its
unchanged `200 × 301px` at `1440 × 900` and adapted to the existing
`390 × 58.58px` bottom treatment at `390 × 844`. On the narrow About layout,
the deliberately cropped display title remains wider than its content box, but
the existing page clipping keeps the root and body at `390px`; this matches the
dark implementation rather than introducing horizontal page scrolling.
Organization marks retained their grayscale filter, every photograph retained
its identifier label, and photographs received no global color treatment.

Computed styles confirmed the canonical Times New Roman display, Arial
content, and SFMono identifier stacks. The later About display-title refinement
intentionally changes only the responsive font-size rules for Identity,
Trajectory, and Outside the System. At `1440 × 900`, Identity resolves to
`92.88px`; the visible bottom of `THE SYSTEM.` aligns within a few pixels of
the adjacent introduction copy and vertical rule. Checks at `1440 × 900`,
`1440 × 800`, `1024 × 768`, and `390 × 844` found no new root-level horizontal
overflow. Line height, letter spacing, padding, margins, grid tracks, chapter
DOM, and navigation geometry remain unchanged.

Keyboard checks observed visible focus and target response on Home links,
Project records, and About chapter controls. A Project activation reached the
existing committing phase; reducer timings and native-button activation paths
remain unchanged. Reduced-motion emulation removed fallback animation, held
Ramiel at stable authored poses, and retained immediate navigation feedback.
Normal WebGL and forced-unavailable WebGL states were both inspected.
With WebGL explicitly disabled, no scene canvas was mounted, Home and Projects
kept their CSS Ramiel fallbacks, About kept its semantic interface, and the
three-route audit recorded no renderer exception.

Selected contrast ratios are:

| Pair | Ratio |
| --- | ---: |
| Supporting foreground / white | `16.36:1` |
| Rei blue dark / white | `6.24:1` |
| Ribbon red / white | `4.53:1` |
| Rei blue dark / derived surface | `5.83:1` |
| Supporting foreground / Rei blue light | `7.59:1` |
| Rei blue light / white | `2.16:1` — graphic or surface only |
| Orange / white | `2.45:1` — non-text marker only |
| Rei blue dark / Rei blue light | `2.90:1` — do not pair for small text |

The final `typecheck`, full `lint`, production `build`, and `git diff --check`
passed with Node `22.14.0`. No automated test script exists. Vite retains the
known approximately `1.086 MB` initial JavaScript chunk (`299.24 kB` gzip) and
its chunk-size warning. The procedural Ramiel adds no downloaded model or
post-processing asset, and the experiment adds no font asset.

## Visual review still required

- Does pure white remain quiet and authored rather than reading as a generic
  product-interface background?
- Does the selected pastel blue remain visible behind dark typography without
  becoming over-saturated or clinical in a generic way?
- Does Ramiel carry the spear's compositional weight at canonical desktop,
  short desktop, large desktop, and narrow viewports?
- Are ribbon-red moments scarce enough that they retain impact?
- Beyond the audited token pairs, do the translucent atmospheric layers remain
  comfortably legible on the full range of target displays?
- Does retaining the canonical typography provide enough quiet editorial
  character through scale, spacing, and color alone?
- Do grayscale organization marks remain neutral and sufficiently legible on
  pale surfaces without recoloring?
- Do photographs remain visually dominant without a global blue cast?
- Does the Ramiel commitment/transition vocabulary feel sufficiently distinct
  from the spear once reviewed interactively, or is a second motion pass
  warranted after the static direction is approved?
- Does the result still read unmistakably as Jaylan Wu's Longinus portfolio?

The checks above establish engineering and first-pass visual confidence, not
subjective approval of this direction.
