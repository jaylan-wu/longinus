# Rei Light-Mode / Ramiel Experiment

> **Branch-only art-direction study.** This document records the
> `rei-light-mode` experiment. It does not replace the durable Longinus dark
> direction in `AGENTS.md`, approve a new canonical palette, or revise the
> implementation status of existing exported dark references.

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
- a procedural, original octahedral Ramiel study replaces the spear within the
  light interpretation's recurring 3D role.

The experiment began as a statically activated branch. Runtime retains
`data-theme="longinus-dark"` as the fallback when no valid preference exists,
while a saved `longinus-theme` choice is restored before application rendering.
The provider synchronizes the root attribute and browser theme color, and a
temporary top-right application-shell control now exposes both themes for
pre-merge comparison without navigating or reloading. Explicit selection
persists across internal routes and refreshes. This QA flow does not consult
system color preference; the final production selector behavior remains
undecided. The canonical dark values remain unchanged in the base `:root`; the
light selector aliases shared semantic roles to the Rei palette.

This work remains on `rei-light-mode`. It does not merge either branch or
modify `main`, and the temporary control does not promote the experiment to an
approved production theme.

No approved light-mode visual-reference export is stored in the repository.
This branch study is implementation evidence, not a substitute for the
theme-explicit exported-reference workflow in `design/figma/README.md`.

## Selected experimental palette

Jaylan selected five colors for the experiment. Their values are fixed for
this branch; visual approval of their application remains open.

| Token | Value | Semantic role |
| --- | --- | --- |
| `--rei-bg` | `#f8f9fc` | Cool-white page environment and negative space |
| `--rei-light` | `#ffffff` | Ramiel highlight and crystalline edge contrast |
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

- The runtime provider establishes dark/light selection, persistence, and
  initial-paint synchronization. One restrained, semantic app-shell button
  exposes that contract for temporary pre-merge QA; it is not an approved
  production selector design.
- Shared semantic aliases provide broad palette coherence without moving page
  composition into global CSS. Feature-owned atmosphere variables still carry
  deliberate blue/red interpretation rather than blind token substitution.
- Each feature retains separate Spear and Ramiel scene modules and lazily
  imports only the active one. This costs a small dispatch boundary per feature
  while preserving theme-specific camera, lighting, staging, and motion.
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

- One fixed top-right `ThemeToggle` is mounted at the application shell rather
  than duplicated across features. It reports the active theme in text and an
  accessible pressed state, switches without changing the current hash, and
  writes the existing `longinus-theme` preference for later routes and
  refreshes. Initial selection remains manual-only: valid storage first, then
  the canonical dark fallback, with no system-preference branch.
- Home, Projects, and the implemented About chapters receive the Rei palette
  when `rei-light` is active through the scoped semantic layer plus
  feature-owned atmospheric styling. Music, Playground, and unrelated staged
  work were not expanded.
- A shared low-poly `OctahedronGeometry` supplies Ramiel's body, translucent
  shell, core, and edge definition. Geometry is allocated once at module
  scope; the scenes use bounded DPR, no shadow map, no transmission sampling,
  and no post-processing.
- Home translates pointer and keyboard focus into restrained target-owned
  orientations without changing link order or destinations. Its later
  reference-staging pass centers Ramiel and its fallback in the desktop
  right-side scene; focus changes rotation and scale without translating the
  object away from that anchor. Projects keeps the existing phase reducer and
  route timings, but maps focus, commitment, impact, and transition to
  orientation, compression, stillness, and expansion instead of a thrust.
  About retains its page-owned scene and assigns stable chapter orientations.
- Home and Projects retain a geometric CSS fallback when WebGL is unavailable.
  About preserves its existing failure invariant: the scene can disappear
  while all semantic content and navigation remain available.
- The canonical procedural Spear now coexists as the default-dark scene in
  feature-owned Home, Projects, and About modules. A theme-aware motif boundary
  lazy-loads Spear or Ramiel without introducing a generalized camera, light,
  or motion system.
- About chapter DOM, content order, selected-record structures, header,
  chapter positions, observer behavior, and right-side navigation structure
  remain visually unchanged. Source ownership is narrower: requested chapter
  arbitration, photography behavior/presentation, influence list/detail UI,
  and chapter styles are separated into About-owned modules. No font-metric
  spacing repair remains after restoring the canonical stacks. A later
  user-directed scale refinement enlarges the three implemented About display
  titles while preserving their authored line breaks and containers; it does
  not alter the chapter navigator.
- In Rei-light, About continues to receive the established chapter and scroll
  state, but its visual response deliberately translates the spear's
  continuous velocity reaction into chapter-owned orientations and long still
  intervals. This is a motif-level motion change, not a navigation or observer
  change.

## Runtime-toggle validation snapshot — 2026-08-08

Headless Chromium passed the same 24 combinations against local Vite
development and production preview builds, spanning Home, Projects, all three
valid project details, missing project detail, About, and unknown-hash Home
fallback at `1440 × 900`, `390 × 844`, and `320 × 568`.
Every case contained exactly one in-bounds, non-overlapping toggle. Mouse,
Enter, and Space changed themes in both directions with visible focus and the
expected label/pressed state while the hash, content, and `main` bounds stayed
unchanged. Each route exposed the correct active motif canvas or correctly
contained no motif canvas.

Saved light and dark choices survived reload; empty or invalid storage fell
back to dark. The sequences `Light Home → Projects → About` and
`Dark About → Projects → Home` retained their selections. Reduced-motion
behavior, Home hover followed by About navigation, About chapter selection,
and Projects hover followed by detail navigation also passed without browser
or console errors.

Six warmed rapid swaps on each of Home, Projects, and About created six
replacement renderers, lost all six retired contexts, and ended with exactly
one healthy final context and canvas. Animation-frame sampling remained
`60 → 60` with one request pending, and scene modules produced no repeated
network responses. The shared `SceneCanvas` explicitly disposes its renderer
after a disconnected canvas unmount, fixing three retained Three.js canvas
listeners per retired renderer.

An independent uninstrumented Chrome DevTools Protocol run, sampled after five
seconds plus garbage collection, kept active document and listener counts flat
but consistently retained three additional detached DOM nodes per six-switch
batch on each motif route. This bounded residual remains an open profiling
question; no active renderer, listener, or animation-frame leak was observed.
Screenshots were inspected in headless Chromium only. These results do not
constitute human, cross-browser/device, exported-reference, or final light-mode
visual approval.

## Validation snapshot — 2026-08-07

This snapshot records the earlier statically activated light branch, before
the runtime theme and lazy scene-dispatch refactor. It remains historical
evidence and does not validate the new runtime boundary.

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
| Supporting foreground / page environment | `15.54:1` |
| Rei blue dark / page environment | `5.93:1` |
| Ribbon red / page environment | `4.30:1` |
| Ribbon red / derived surface | `4.23:1` |
| Rei blue dark / derived surface | `5.83:1` |
| Supporting foreground / Rei blue light | `7.59:1` |
| Rei blue light / page environment | `2.05:1` — graphic or surface only |
| Orange / page environment | `2.33:1` — non-text marker only |
| Rei blue dark / Rei blue light | `2.90:1` — do not pair for small text |

The ribbon red clears `4.5:1` against pure white but not against either actual
light-theme environment. Existing small red labels therefore require a color,
size, or role adjustment before light-mode approval. Orange remains unsuitable
for ordinary text, and its decorative selected-photo overlay still needs
visual review against the full photograph set.

For this 2026-08-07 snapshot, `typecheck`, full `lint`, production `build`, and
`git diff --check` passed with Node `22.14.0`. No automated test script exists.
Vite reported the then-current approximately `1.086 MB` initial JavaScript
chunk (`299.24 kB` gzip) and its chunk-size warning. The procedural Ramiel adds
no downloaded model or post-processing asset, and the experiment adds no font
asset.

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
