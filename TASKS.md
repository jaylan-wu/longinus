# Longinus Tasks

This file is the detailed implementation plan, status authority, and validation
log. [`AGENTS.md`](AGENTS.md) defines durable product direction and engineering
constraints; [`content/ABOUT_CONTENT.md`](content/ABOUT_CONTENT.md) owns exact
About editorial material; and
[`design/figma/README.md`](design/figma/README.md) owns the approved-frame
tracker. This file records what the repository has actually established and
what remains.

Status reviewed against source on **2026-08-08**. Checkmarks confirm repository evidence only. They do not imply visual approval or hands-on browser/device validation unless the item says so.

Pre-refactor repository modularity, theme-readiness, documentation, and
reference-workflow audit on 2026-08-08: the then-seven CSS files, the
implemented React/TypeScript and Three.js ownership boundaries, all nine
tracked Markdown files, and all four stored visual references were inspected.
The four unambiguous `1440 × 900`
dark exports were renamed with explicit `dark` segments and verified
byte-identical to their originals; no application source imports them. Every
relative Markdown link resolves, and no old reference filename remains.
Safe source cleanup removed only unreachable anchor/button CSS branches, added
a dark semantic fallback to the light photo-overlay token, and made two local
state names motif- or selection-neutral. `corepack yarn typecheck`,
`corepack yarn lint`, `corepack yarn build`, and `git diff --check` passed with
Node `24.18.0`; no automated test script exists. The build retained the known
`1,086.12 kB` initial JavaScript chunk (`299.25 kB` gzip) and its chunk-size
warning. Browser tooling was unavailable for this audit, so it records no new
visual, keyboard, touch, reduced-motion, or WebGL-fallback approval.

Approved repository refactors implemented on 2026-08-08 establish a typed,
persisted `longinus-dark` / `rei-light` runtime contract with dark as the
default and pre-module root/theme-color synchronization. Home, Projects, and
About now retain feature-owned Spear and Ramiel scenes and lazily dispatch only
the active theme's scene. The same pass introduced the shared six-value
interaction-phase type, semantic theme roles, a lightweight Project route
index, the shared navigation-action base for Project records, About-local
chapter/photo/influence modules, and chapter-owned About stylesheets.
`corepack yarn typecheck`, `corepack yarn lint`, and `git diff --check` passed
after these changes, and the final production build passed. The build reduced
the eager entry JavaScript to `202.13 kB` (`64.05 kB` gzip) and emitted six
separate theme-scene chunks. A lazily loaded shared Three.js/WebGL chunk remains
`881.70 kB` (`234.25 kB` gzip) and still triggers Vite's `500 kB` chunk-size
warning. No browser comparison or manual interaction approval was performed
for this refactor.

Branch-only Rei light-mode validation on 2026-08-07: the
`rei-light-mode` experiment translated Home, Projects, and the implemented
About chapters to the selected cool white `#F8F9FC`, Rei blue light `#9DAFE9`,
Rei blue dark `#545D93`, ribbon red `#E7211F`, and orange `#F28C28` palette;
and replaced those features' runtime spear scenes with a shared procedural
octahedral Ramiel study. A supporting blue-black foreground and a pale surface
derived from Rei blue light preserve readable type and quiet depth without
expanding the accent palette. The canonical dark tokens and product direction
remain intact. Canonical, all-Plex clinical, and Newsreader/Plex editorial type
systems were browser-compared on Home and About Identity at `1440 × 900`.
The trial web fonts were removed and the canonical dark-mode font tokens were
restored because their exact metrics best preserve established text placement,
line breaks, symmetry, and negative space; no compensating font-metric spacing
adjustment remains. A later user-directed refinement enlarged the Identity,
Trajectory, and Outside the System display titles without changing their font
stack, authored line breaks, chapter structure, or navigation geometry. At
`1440 × 900`, the Identity title resolves to `92.88px`, and the visible bottom
of `THE SYSTEM.` aligns with the adjacent introduction copy and vertical rule.
Responsive title checks at `1440 × 800`, `1024 × 768`, and `390 × 844` retained
viewport-width root documents without new horizontal page scrolling.
The subsequent Home reference-staging pass placed Ramiel at the exact center of
the desktop right-side scene. WebGL idle and focus poses now retain a zero
position while rotation and scale carry interaction response; the CSS fallback
and its shadow use the same centered anchor. A `1440 × 900` capture placed the
fallback silhouette at the right panel's approximately `(1045px, 450px)`
midpoint without changing the `45.14% / 54.86%` page split.

Stored dark Home/About exports and light runtime captures were compared at
`1440 × 900`; responsive checks also covered `1440 × 800`, `1920 × 1080`, and
`390 × 844`. About's chapter DOM and protected right navigation were unchanged;
its navigator retained the existing `200 × 301px` desktop and approximately
`390 × 58.58px` narrow geometry. All five Trajectory records and seven Outside
photographs fit without page-level horizontal overflow, organization marks
remained grayscale, and photo labels remained present. Keyboard focus and
target response, reduced motion, normal WebGL, forced-unavailable WebGL, and
core token contrast were inspected.

The shared Outside-the-System carousel fix replaces repeated 23–24 megapixel
source decodes with seven 2000px WebP display assets and seven 480px WebP
thumbnails. Cold-browser checks completed all 15 cloned thumbnail nodes at
natural width 480 and every selected `PHOTO-001` through `PHOTO-007` image at
natural width 2000, with `200 image/webp` responses and no loading or decoding
errors. The original photography files remain as archival sources. The same
isolated fix is applied to both `rei-light-mode` and `main`.

`typecheck`, full `lint`, production `build`, and `git diff --check` passed with
Node `22.14.0`; no automated test script exists. The build retained the known
approximately `1.086 MB` initial JavaScript chunk (`299.28 kB` gzip) and its
chunk-size warning. This entry records branch evidence only and is not visual
approval or a change to canonical Longinus direction; the full experiment
record is in [`design/experiments/rei-light-mode.md`](design/experiments/rei-light-mode.md).

Audit validation on 2026-07-21: the pinned Yarn `4.17.1` completed an immutable install without changing `yarn.lock`; `typecheck`, `lint`, and `build` passed through Corepack. The install reported an existing transitive peer-requirement warning (`pfda40d`, involving `tunnel-rat`, `zustand`, and React). Vite reported an approximately `1.08 MB` initial JavaScript chunk (`298 kB` gzip) and its chunk-size warning. No automated tests or Markdown-lint command exist.

Scoped About Identity validation on 2026-07-27: browser comparisons were
recorded at `1440 × 900`, `1440 × 800`, `1680 × 1050`, `1920 × 1200`,
`2240 × 1400`, and `2560 × 1600`. Pointer, keyboard, observer-driven chapter
changes, reduced motion, route teardown, shared Home/About navigation states,
direct `#about` entry, and About semantics with a forced unavailable WebGL
context were inspected. `corepack yarn typecheck`, `corepack yarn lint`, and
`corepack yarn build` passed. No test script exists. The build retained the
known approximately `1.08 MB` initial JavaScript chunk (`298 kB` gzip) and its
chunk-size warning.

Scoped About rotation validation on 2026-07-28: initial and later Identity
frames were inspected at `1440 × 900` in normal-motion mode and with reduced
motion forced. The normal frames showed continued axial orientation change;
the reduced-motion frames retained the chapter pose. `corepack yarn typecheck`,
`corepack yarn lint`, and `corepack yarn build` passed using the locally
installed Node `22.14.0`; the build retained the known approximately `1.08 MB`
initial JavaScript chunk (`298 kB` gzip) and its chunk-size warning. Full
chapter and device validation remains open.

Scoped About chapter-indicator validation on 2026-07-28: all five
right-navigation targets were activated at `1440 × 900` and `390 × 844`.
Every chapter-owned indicator landed at the shared top-left anchor within
sub-pixel tolerance. A subsequent `120px` manual scroll moved the active
indicator by `120px`, and selecting the chapter again restored the shared
anchor. Forced reduced-motion navigation was also verified at `1440 × 900`.
`corepack yarn typecheck` and `corepack yarn lint` passed. The production build
passed with Node `22.14.0` and retained the known initial chunk-size warning.

Scoped About Trajectory validation on 2026-07-28: the stored `1440 × 900`
export and its optional authoring provenance at that time were compared with the implemented
left-side EDU-001 composition. A user-approved post-reference spacing
refinement widened the runtime selected panel from the reference's `325px` to
`360px` while preserving its `607px` height and bottom anchor. At
`1440 × 900`, all five published records retained that same `360 × 607` frame.
At `390 × 844`, the panel adapted to the approximately `352px` available track
width and retained its `607px` height across every record. Every narrative and
title fit, Connected Axes and Supporting Themes remained pinned to the footer,
each associated organization mark loaded at its source aspect ratio, and no
panel or page-level horizontal overflow was present. The supplied transparent
`mlb.png` replaced the previous checker-backed WebP.
A follow-up typography pass kept all selected-record role-heading sizes
unchanged, increased every other Current Record text role to `11px`, reflowed
EXP-002 as `TECHNOLOGY / SOLUTIONS INTERN.`, reflowed EXP-003 as
`SOFTWARE / ENGINEERING INTERN.`, and adopted the approved
`LAB FACILITIES MANAGER` directory label for EXP-004. All five records retained
their fixed frame and bottom-pinned footer at the audited desktop and narrow
viewports. The header divider was subsequently balanced to `12px` clearance
above and below while preserving at least `15px` between narrative sections in
the densest record. EDU-001 now also keeps a `12px` boundary distance between
`Game Engineering` and the second divider. The Mets and MLB watermarks are
centered on the exact midpoint of the region from that divider to the card
bottom; their rendered box-center delta is `0px`, and their intrinsic
transparent-edge offsets remain below one rendered pixel.
`1440 × 800` and `1680 × 1050` interpretations were also inspected. Pointer,
Enter, Space, visible focus, focus retention, non-color selection state,
reduced motion, and a forced unavailable WebGL context passed. The
`typecheck`, `lint`, and `build` scripts passed through Corepack; no test script
exists. The build retained the known approximately `1.08 MB` initial JavaScript
chunk (`298 kB` gzip) and its chunk-size warning.

Scoped About Trajectory responsive validation on 2026-07-29: the full static
`1440 × 900` runtime frame was compared with the stored approved export, then
the bounded desktop interpretation was browser-inspected at `1920 × 1080`,
`2500 × 1350`, and `2560 × 1440`. The selector and selected-record panel
measured approximately `460 × 426` and `360 × 607`, `613 × 511` and
`480 × 728`, `799 × 639` and `625 × 911`, and `818 × 681` and `640 × 971`
respectively. At each viewport, all five published records retained one stable
outer panel, visible footer metadata, clipped decorative marks, and no internal
or horizontal scrolling, content clipping, title/state overlap, or
selection-driven layout shift. The lead retained its four-line cadence.
Pointer, Enter, and Space selection; focus retention and visible focus;
non-color selected state; reduced-motion mark behavior; normal-motion canvas
mounting; and About canvas teardown after route exit passed without browser
errors. The shared header, chapter indicator, right navigation, page index, and
current spear staging were included in the visual comparison; the spear
remained clear of navigation. `1440 × 800` and `390 × 844` Trajectory smoke
checks and `1440 × 900` / `2560 × 1440` Identity-shell smoke checks also
passed. `corepack yarn typecheck`, `corepack yarn lint`, and
`corepack yarn build` passed; no test script exists. The build retained the
known approximately `1.08 MB` initial JavaScript chunk (`298 kB` gzip) and its
chunk-size warning. An additional explicit
`tsc -p tsconfig.app.json --noEmit` diagnostic remains blocked by four
pre-existing uppercase `.JPG` module-declaration errors in the photography
data; the repository-defined root `typecheck` does not surface those errors.

Scoped About Trajectory NYU-mark alignment validation on 2026-08-06: the
shared NYU portrait for EDU-001, EXP-001, and EXP-004 was moved from its
percentage-based lower-right anchor to the semantic center of the region
between the second divider and the card bottom. Its size cap now follows the
card's block unit so wide desktop growth cannot carry it across the divider.
All three NYU states were browser-measured at `1440 × 900`, `1440 × 800`,
`1920 × 1080`, `2500 × 1350`, `2560 × 1440`, and `390 × 844`. Their image-box
center delta was `0px` at the baseline, short-desktop, and narrow viewports and
remained within `0.01px` of center on larger desktops. Equal divider and card-
bottom clearance measured approximately `13.63px`, `16.37px`, `20.45px`, and
`21.81px` as the card scaled, with no horizontal overflow. Captured frames for
all three canonical selected states plus narrow and large-desktop states were
visually inspected. `yarn typecheck`, `yarn lint`, and `yarn build` passed; no
test script exists. The build retained the known approximately `1.08 MB`
initial JavaScript chunk (`298 kB` gzip) and its chunk-size warning.

Scoped About display-title validation on 2026-08-06: all five semantic chapter
indicators were confirmed to share the same component and computed typography.
The three implemented large chapter display titles—Identity, Trajectory, and
Outside the System—were consolidated onto the Identity treatment: the shared
runtime display stack, weight `700`, `0.946` line-height ratio, `-0.045em`
tracking, uppercase treatment, and `0.882` desktop horizontal staging.
Composition-owned sizes, Identity's authored per-line adjustments, and chapter
wrapping remain local. At the existing `1080px` breakpoint, all three now
return to natural horizontal width together. Computed styles and captured
frames were inspected at `1440 × 900`, `1080 × 900`, and `390 × 844`; the
titles matched at each breakpoint without page-level horizontal overflow.
`yarn typecheck`, `yarn lint`, and `yarn build` passed; no test script exists.
The build retained the known approximately `1.08 MB` initial JavaScript chunk
(`298 kB` gzip) and its chunk-size warning.

Scoped About chapter-header reflow validation on 2026-08-06: a later
user-directed refinement removed the visible orange-numbered top-left heading
from all five chapters while preserving one visually hidden `h2` and its
section `aria-labelledby` relationship for each chapter. The persistent
top-right Current chapter status and right-side chapter navigation remain
visible and unchanged. First content now begins at the shared `151px` canonical
desktop anchor, `120px` short-desktop and tablet anchor, and `100px` mobile
anchor. Chapter-specific use of the reclaimed space was browser-measured at
`1440 × 900`: Identity extends its introduction frame while preserving the
lower axis and metadata alignment; Trajectory extends the selected-record panel
to `360 × 673px` from `y=151` through `y=824`; Outside the System begins its
display title at `y=151` and, at this checkpoint, initially expanded the
selected image to approximately `543 × 362px` from `y=330` through `y=692`,
and keeps the carousel at
approximately `y=719–833`; Interactive Influences extends its four-row index
from `y=151` through `y=824`; and Current Direction centers its content with
approximately `144px` above and `145px` below. These changes intentionally
supersede the visible chapter-heading geometry in the stored About exports
without changing the persistent header, navigation, divider, page index, or
spear scene. The complete five-chapter flow was captured and visually inspected
at `1440 × 900` and `390 × 844`; structural measurements also covered
`1440 × 800`, `1920 × 1080`, and `1080 × 900`. All five Trajectory records and
all seven Outside photographs retained their fixed content without internal or
page-level horizontal overflow. The visible-heading count was zero, all five
hidden heading identifiers were unique, and the fixed header/divider remained
above the reflowed content. `yarn typecheck`, `yarn lint`, and `yarn build`
passed; no test script exists. The build retained the known approximately
`1.08 MB` initial JavaScript chunk (`298 kB` gzip) and its chunk-size warning.

Scoped About Outside preview-size validation on 2026-08-06: the desktop
selected-photo track was reduced while preserving its `3:2` aspect ratio, the
full-width carousel, and the single-column tablet/mobile interpretation. At
`1440 × 900`, the preview now measures approximately `477 × 318px` from
`y=330–648`, the adjacent caption gains approximately `66px` of width, and the
carousel spans approximately `y=675–789`. The preview measures approximately
`633 × 422px` at `1920 × 1080`; the existing full-width `582 × 388px` tablet
and approximately `352 × 234px` mobile frames remain unchanged. All seven
selected-photo captions fit at each audited viewport with no page-level
horizontal overflow. `yarn typecheck`, `yarn lint`, and `yarn build` passed;
no test script exists. The build retained the known approximately `1.08 MB`
initial JavaScript chunk (`298 kB` gzip) and its chunk-size warning.

Scoped About Outside carousel-control alignment validation on 2026-08-06:
the previous/next rings now center against the thumbnail image rather than the
combined image-and-label record height. The shared alignment compensates for
the responsive label block, and the Unicode arrow receives a small optical
lift inside its unchanged ring. Browser measurements at `1440 × 900`,
`1920 × 1080`, `2500 × 1350`, `1080 × 900`, and `390 × 844` placed both
control centers within `0.02px` of the thumbnail-image center; desktop and
mobile captures were visually inspected. `yarn typecheck`, `yarn lint`, and
`yarn build` passed; no test script exists. The build retained the known
approximately `1.08 MB` initial JavaScript chunk (`298 kB` gzip) and its
chunk-size warning.

Scoped About Trajectory role-hover validation on 2026-08-06: all five role
rows now reuse the shared `navigation-action` directory interaction with the
highlight-orange accent. Hover and `:focus-visible` expose the same `400ms`
background sweep, `240ms` leading rail, `320ms` role treatment, and `0.85rem`
desktop content shift while preserving the selected row's orange rules,
`SELECTED` label, `aria-pressed`, and record-selection behavior. Browser
inspection at `1440 × 900` confirmed the orange computed color, completed
pseudo-element transforms, and zero row overflow for every role. Mobile
retains the orange sweep and role treatment without the horizontal shift;
reduced motion retains orange state feedback while removing padding and role
transforms. `yarn typecheck`, `yarn lint`, and `yarn build` passed; no test
script exists. The build retained the known approximately `1.08 MB` initial
JavaScript chunk (`298 kB` gzip) and its chunk-size warning.

Scoped About Outside the System validation on 2026-08-05: the approved static
export at
`design/figma/references/about/about-outside-photo-001-dark-desktop-idle-v1.png`
was compared directly with the implemented left-side `PHOTO-001` composition
at `1440 × 900`. The persistent header, right chapter navigation, divider,
page index, and About spear scene remained protected prior work; their source
components were not changed, and their canonical before/after geometry was
unchanged. A subsequent scoped refinement changed only the active chapter
row's horizontal-rule rendering: both rules now use the same primary-red token
and box-shadow primitive, with no navigation geometry or behavior change. The
visible `PHOTO-001` through `PHOTO-007` labels beneath the carousel remain an
intentional functional divergence from the export.
The left composition was also inspected at `1440 × 800`, `1920 × 1080`,
`2500 × 1350`, `2560 × 1440`, and `390 × 844`; the reviewed frames had no
page-level horizontal overflow or internal chapter scrollbar, and the short
and large desktop frames retained readable carousel labels. All seven selected
states fit their fixed selected-photo region and updated the expected asset,
identifier, location, year, caption, reflection, and main-image alternative
text without changing scroll position, active chapter, or the existing canvas.
Every selected thumbnail was measured in the center slot, including the
`PHOTO-007` to `PHOTO-001` loop; ordinary and wrapping movement progressed
across multiple sampled frames before hidden-clone normalization. Wrapping
previous/next controls, Enter, Space, Left and Right Arrow, Home, End, the
selected-thumbnail roving Tab stop, focus retention, visible lavender focus,
non-color selection markers, pointer activation, and emulated touch activation
passed. Reduced motion removed the selected-photo reveal and used immediate
carousel repositioning. With WebGL forced unavailable, the canvas was absent
while the complete semantic gallery and its geometry remained intact. About
route teardown and `1440 × 900` Identity and Trajectory smoke checks passed
without browser exceptions.
`corepack yarn typecheck`, `corepack yarn lint`, and `corepack yarn build`
passed; no test script exists. The build retained the known approximately
`1.08 MB` initial JavaScript chunk (`298 kB` gzip) and its chunk-size warning.

## Status language

- **Implemented** — present and verifiable in source.
- **Partially implemented** — a meaningful subset exists, but the intended experience is incomplete.
- **Staged** — provisional UI, data, procedural geometry, or timing supports later work.
- **Planned** — approved direction without an implementation.
- **Deferred** — waiting for a design, asset, motion reference, verified content, or decision.
- **Unverified** — code exists, but required visual or manual validation is not recorded.

## Task rules

- Follow the durable implementation and source-of-truth rules in
  [`AGENTS.md`](AGENTS.md).
- Treat a checkmark as a repository-evidence claim, not as editorial, visual, or
  authored-motion approval unless the item explicitly records that approval.
- Do not claim an exported-reference match without a recorded comparison
  against an approved repository image.
- Do not claim authored motion without a supplied Blender or motion reference and comparison.
- Do not describe staged project data, procedural geometry, or provisional timing as final.
- Run only commands that exist. The current automated checks are `corepack yarn typecheck`, `corepack yarn lint`, and `corepack yarn build`; no test command exists.
- Keep manual browser, keyboard, touch, responsive, reduced-motion, and WebGL-failure checks open until they are actually performed.

---

# Milestone 0 — Documentation and Repository Alignment

## Documentation

- [x] Audit every tracked Markdown file against the repository.
- [x] Preserve Jaylan Wu as the primary identity and `alter-egoist` as a secondary creative identity.
- [x] Preserve Engineering, Game design, and Education as the three personal axes.
- [x] Define shared `engineering`, `game-design`, and `education` axis identifiers with canonical interface labels.
- [x] Preserve Figma as the optional design authoring environment and exported
  repository images as the static visual implementation source.
- [x] Preserve Blender and supplied motion references as the source for authored 3D motion.
- [x] Distinguish implemented, partial, staged, planned, deferred, and unverified work.
- [x] Document the real hash routes and unavailable destinations.
- [x] Correct the package-manager, script, dependency-use, asset, and architecture descriptions.
- [x] Reconcile About implementation status with its editorial source and verification flags.
- [x] Remove implementation dependence on direct Figma URLs, APIs, MCP
  integrations, Dev Mode, and paid implementation features.
- [x] Document the exported-reference workflow and targeted-question boundary.
- [x] Establish the dark/light reference naming convention.
- [x] Update every unambiguous stored dark reference name.
- [x] Verify Markdown paths after reference renaming.

## Verified repository baseline

- [x] Confirm feature ownership under `src/features/home/`, `src/features/projects/`, and `src/features/about/`.
- [x] Confirm global styling is limited to tokens, reset/foundations, the shared page index, and reduced-motion baseline.
- [x] Confirm page-specific CSS remains feature-owned.
- [x] Confirm local React state and feature hooks remain the established state
  pattern, with one narrow Context for the runtime theme and no general-purpose
  global store.
- [x] Confirm each implemented feature owns its React Three Fiber canvas and scene staging.
- [x] Confirm no font files, tests, formatter, Markdown linter, or deployment configuration exist.
- [x] Confirm the modern Yarn lockfile is not compatible with the previously documented Yarn Classic workflow.
- [x] Pin Yarn `4.17.1` in `package.json` so Corepack setup is deterministic.

---

# Milestone 1 — Visual Foundations

## Color and styling

- [x] Define the semantic palette in `src/index.css` and record its audited
  values in `design/figma/foundations.md`.
- [x] Mirror scene-required color values in `src/styles/colors.ts`.
- [x] Use orange for implemented focus/active-system states and red for spear/disruption states where applicable.
- [x] Keep feature composition out of `src/index.css`.
- [ ] Perform and record a color-contrast and visible-focus review.

## Typography

- [x] Establish the display, sans-serif, and monospace CSS tokens as the site-wide font-family source of truth.
- [x] Record that all current stacks are system fallbacks and can vary by device.
- [x] Map Display to `var(--font-display)`, Content to `var(--font-sans)`, and System/Identifier to `var(--font-mono)`.
- [x] Record that authoring-tool font families are not implementation requirements.
- [ ] Replace the Home `ARCHIVE:` label's one-off Archivo/Arial Narrow stack with an established runtime token unless an explicit new token is approved.
- [ ] Verify the established system stacks preserve intentional hierarchy, wrapping, line cadence, and spacing across representative operating systems.
- [ ] Verify long-form About and project content does not inherit display typography.

---

# Milestone 1A — Theme Architecture and Rei Light-Mode Production Readiness

**Status: runtime architecture implemented; visual approval and user-facing
selection remain incomplete.** The application defaults to `longinus-dark`,
restores a valid persisted choice before module loading, and supports
coexisting feature-owned Spear and Ramiel scenes. It does not expose a visible
theme control or system-preference policy, and no approved light reference is
stored.

- [x] Audit the current semantic-token, feature CSS, metadata, and Three.js
  theme boundaries.
- [x] Record the branch-only Rei palette, typography study, Ramiel prototype,
  and validation evidence in `design/experiments/rei-light-mode.md`.
- [ ] Define and approve the production light-mode semantic palette.
- [ ] Create and approve Rei-inspired exported light-mode visual references.
- [x] Implement provisional feature-owned Ramiel staging and interaction roles
  for Home, Projects, and About; final authored roles remain unapproved.
- [x] Define the typed runtime theme identifier, dark-default initial policy,
  persisted-choice policy, and no-flash initial-paint contract.
- [x] Synchronize the root theme attribute and browser metadata through the
  runtime contract.
- [ ] Design and implement an accessible visible theme control, then decide
  whether system preference participates in initial selection.
- [x] Implement coexisting light-mode DOM styling without duplicating complete
  feature styles or replacing the established dark styling.
- [x] Restore and preserve feature-owned dark Spear scenes alongside
  feature-owned light Ramiel scenes; do not create a universal scene system.
- [ ] Verify contrast, visible focus, and non-color state cues in light mode.
- [ ] Verify reduced-motion behavior in light mode.
- [ ] Verify narrow, tablet, short-desktop, canonical desktop, and large-desktop
  light-mode interpretations.
- [ ] Compare light mode against approved exported light references.
- [ ] Confirm dark mode remains visually and behaviorally unchanged against its
  exported dark references.
- [ ] Profile whether supporting both themes affects initial loading, bundle
  size, memory, or renderer lifecycle.

---

# Milestone 2 — Boot Experience

**Status: planned. No boot component or readiness system exists.**

- [ ] Create, approve, and store the boot composition as a theme-explicit
  exported repository reference.
- [ ] Identify genuinely critical homepage assets.
- [ ] Track real readiness for the final spear, critical textures/materials, and initial scene.
- [ ] Define the linear indicator and its relationship to the spear.
- [ ] Implement `loading → linear indicator → spear reveal → homepage`.
- [ ] Avoid simulated percentages and excessive minimum delays.
- [ ] Do not replay the full boot sequence on internal hash navigation.
- [ ] Provide a shorter reduced-motion transition.
- [ ] Ensure scene failure cannot trap semantic navigation behind boot.

---

# Milestone 3 — Homepage

## Stored design reference

- [x] Store the `1440 × 900` dark desktop-idle export at
  `design/figma/references/homepage/homepage-dark-desktop-idle-v1.png`.
- [x] Track the frame as **In progress**, not approved.
- [x] Implement corresponding identity, navigation, frame, divider, scene-label, watermark, footer, and page-index regions.
- [x] Keep Projects and About available while Music and Playground are visibly disabled/planned.
- [x] Add pointer-hover and keyboard-focus styling for available links.
- [x] Add responsive width and desktop-height CSS branches.
- [ ] Record a browser comparison at exactly `1440 × 900`.
- [ ] Compare representative shorter desktop heights.
- [ ] Resolve the current copy and type-metric differences from the stored export.
- [ ] Approve the complete 2D composition only after comparison evidence exists.

## Theme-specific 3D motif staging

- [x] Create a Home-owned React Three Fiber canvas with bounded DPR.
- [x] Stage the Rei-light shared procedural `RamielModel` with
  Home-owned camera, lights, transform, scale, and CSS fallback.
- [x] Restore the established dark Home Spear scene alongside the light Ramiel
  scene and lazily dispatch both from a Home-owned motif boundary.
- [ ] Replace procedural geometry with the final authored spear asset.
- [ ] Revisit camera, lighting, scale, silhouette, rotation, and cropping with the final asset.
- [ ] Compare each implemented theme's final 2D/3D composition against its
  approved exported reference.

## Homepage interaction

**Status: partially staged.** Pointer and keyboard focus update one Home-owned
target and the Rei-light Ramiel scene responds; the shared interaction-phase
type is available, but direct hash links still navigate immediately and the
complete commitment/impact sequence is planned.

- [ ] Add Home-owned shared phase and target state using `idle`, `focused`, `committing`, `impact`, `transitioning`, and `settled` where needed.
- [x] Make pointer and keyboard focus update the same target state.
- [x] Map focused targets to restrained Rei-light Ramiel orientations.
- [ ] Make the dark-theme Spear orient toward a focused available target.
- [ ] Supply a Blender or other authored reference for anticipation, impact, and follow-through.
- [ ] Prove the complete interaction on one destination.
- [ ] Use completion signals or shared events instead of unrelated duplicate timers.
- [ ] Transfer focus logically after route completion.
- [ ] Expand the proven interaction to all available destinations.
- [ ] Define an intentional touch equivalent.
- [ ] Implement and manually verify reduced-motion behavior.

---

# Milestone 4 — Routing and Scene Lifecycle

- [x] Resolve empty, `#home`, and unknown hashes to Home.
- [x] Route `#projects` to the archive.
- [x] Route `#projects/<slug>` to detail or an in-app not-found state.
- [x] Route `#about` to About.
- [x] Update document titles for implemented routes.
- [x] Scroll to the top when the route state changes.
- [x] Lazy-load About, Projects, and project detail.
- [x] Lazy-load each feature's active Spear or Ramiel scene rather than placing
  both theme implementations in the eager graph.
- [x] Keep project route/title metadata in a lightweight index so document
  titles do not eagerly import full Project records.
- [x] Unmount the previous route component instead of retaining every scene.
- [ ] Add Music only when its approved implementation begins.
- [ ] Add Playground only when its approved implementation begins.
- [ ] Implement route-level focus restoration/transfer.
- [ ] Manually verify canvases, event listeners, and animation loops stop after route exit.

---

# Milestone 5 — Projects Archive and Detail

## Project data

- [x] Define the current `Project` type in `src/features/projects/projectData.ts`.
- [x] Keep data separate from archive and detail presentation.
- [x] Provide stable slugs and three staged records.
- [ ] Replace or verify the provisional records; `Signal Archive` and `Unit Cerberus` must not be presented as final portfolio work without confirmation.
- [ ] Adopt final identifiers and naming conventions.
- [ ] Add personal axes, narrative sections, demonstration types, real assets, and external links where verified.
- [ ] Curate a small set of real, strong projects.

## Archive

- [x] Implement the record-list archive route.
- [x] Implement pointer and keyboard focus state.
- [x] Implement first-tap focus and second-tap commitment for touch pointer events.
- [x] Coordinate DOM and each active-theme motif response through
  motif-neutral `useProjectTransition` phases backed by the shared canonical
  interaction-phase type.
- [x] Reuse the shared `navigation-action` sweep, rail, label, focus, and
  reduced-motion base while preserving Project-specific timing and phase rules.
- [x] Implement commitment, impact styling, input lock, and delayed hash navigation.
- [x] Use a semantic high-contrast on-disruption role for selected impact text.
- [x] Provide a shortened reduced-motion code path and remove the Project
  selection/interface displacement transforms under reduced motion.
- [x] Clean up pending transition timers when the hook unmounts.
- [ ] Create, approve, and store theme-explicit Projects archive and
  focus/impact exported references.
- [ ] Replace provisional timeout values with reviewed timing or completion signals.
- [ ] Define recovery/cancellation beyond the guaranteed navigation timeout.
- [ ] Manually verify keyboard, touch, reduced-motion, and scene-failure behavior.

## Project detail

- [x] Render the selected record's title, description, role, year, status, and technologies.
- [x] Render a DOM not-found state for unknown slugs.
- [x] Keep detail CSS inside the Projects feature.
- [ ] Create an approved project-detail composition.
- [ ] Add real narrative data for Context, Problem, System, Decisions, Outcome, and Reflection, adapting per project where needed.
- [ ] Add meaningful information and demonstration regions.
- [ ] Define software/system and 3D/game presentation modes only when real projects require them.
- [ ] Resolve each theme's post-transition 3D motif outcome; the current code
  records `inactive-offstage` and detail renders no 3D motif.
- [ ] Implement logical entry focus.

---

# Milestone 6 — About

## Implemented narrative and architecture

- [x] Define one canonical typed source for the five chapter identifiers and order:
  1. Identity
  2. Trajectory
  3. Outside the System
  4. Interactive Influences
  5. Current Direction
- [x] Split chapters and repeated record UI into feature-owned components.
- [x] Split the About stylesheet entry into shell, chapter-owned, and adaptive
  files while preserving selector names and cascade order.
- [x] Keep published content in focused modules under `src/features/about/data/` and editorial/draft source in `content/ABOUT_CONTENT.md`.
- [x] Keep active chapter state cross-cutting and record/photo/influence selection local to each chapter.
- [x] Isolate requested-versus-observed chapter selection in an About-owned
  hook without merging it with active-chapter detection.
- [x] Extract the photography controller, carousel, selected-photo
  presentation, and live announcement into About-owned modules without
  introducing a global carousel abstraction.
- [x] Split the influence record list and selected detail along their existing
  chapter-owned boundaries.
- [x] Use standard vertical browser scrolling without full-screen scroll snapping.
- [x] Implement `IntersectionObserver`-driven active-chapter detection with a scroll/resize fallback and complete observer, listener, and animation-frame cleanup.
- [x] Implement keyboard-accessible chapter navigation and reduced-motion-aware scrolling.
- [x] Store the approved About / Identity / Dark / Desktop / Idle export at
  `design/figma/references/about/about-identity-dark-desktop-idle-v1.png`.
- [x] Remove the chapter-owned visible orange-numbered top-left headings while
  retaining a visually hidden `h2` and valid `aria-labelledby` relationship for
  every section.
- [x] Align each chapter's first content region to the shared responsive anchor
  and reflow or extend chapter-specific content into the reclaimed space while
  preserving the persistent top-right Current chapter status and right-side
  chapter navigation.
- [x] Store the approved About / Trajectory / EDU-001 / Dark / Desktop / Idle
  export at
  `design/figma/references/about/about-trajectory-edu-001-dark-desktop-idle-v1.png`
  and implement its full static composition plus bounded large-desktop
  interpretation from that repository reference.
- [x] Store the approved About / Outside the System / PHOTO-001 / Dark /
  Desktop / Idle export at
  `design/figma/references/about/about-outside-photo-001-dark-desktop-idle-v1.png`
  and implement and compare its left-side static composition while preserving
  the established right navigation and dark Spear composition.
- [x] Normalize the implemented Identity, Trajectory, and Outside the System
  large display titles to the Identity character-width and typography
  treatment across desktop and narrow layouts.
- [ ] Create and approve complete static frames for Interactive Influences and
  Current Direction.
- [ ] Record full visual comparisons for the two remaining chapter frames and
  the finished narrow-layout reinterpretation.

## Identity

- [x] Present Jaylan Wu, New York City, the opening statement, three axes, and `alter-egoist` as a restrained signature.
- [x] Keep all axis statements visible rather than hover-gated.
- [x] Implement the static About / Identity / Dark / Desktop / Idle composition
  from the approved `1440 × 900` repository reference.
- [x] Complete the original direct browser comparison at `1440 × 900`,
  including region proportions, the reference-era Identity indicator placement,
  type hierarchy, navigation placement, spear framing, spacing, and shared Home
  page-index alignment; record the later user-directed header removal and
  content reflow separately.
- [x] Verify responsive expansion at `1680 × 1050`, `1920 × 1200`, `2240 × 1400`, and `2560 × 1600` without a fixed-width island or horizontal overflow.
- [x] Verify the shorter `1440 × 800` desktop layout remains usable without an internal chapter scrollbar.
- [x] Reuse and browser-verify the Home available-navigation hover/focus treatment for About's site-level `Index` action and right chapter controls; keep the controls compact and use the About-scoped red accent.
- [x] Verify direct `#about` entry, About Identity keyboard focus, chapter selection, reduced-motion feedback, semantic content with WebGL unavailable, and canvas teardown after route exit.
- [ ] Perform final copy and typography review.

## Trajectory

- [x] Implement published records `EDU-001` and `EXP-001` through `EXP-004`.
- [x] Exclude future incomplete `EXP-005` Adjunct Professor content from `src/features/about/data/experiences.ts`.
- [x] Implement local selected-record state, reflective sections, axes/themes, and decorative organization marks.
- [x] Reuse one NYU mark and apply named mark-position variants.
- [x] Apply non-destructive grayscale/opacity treatment and reduced-motion-aware mark transitions.
- [x] Use EDU-001 as the shared Trajectory anatomy, extend the canonical
  selected-record frame to `360 × 673px` within the reclaimed heading space,
  scale its chapter-specific height fluidly at other breakpoints, and preserve
  one stable outer frame across EDU-001 and EXP-001 through EXP-004 at each
  viewport.
- [x] Reserve fixed title, record-metadata, narrative, and supporting-metadata
  regions; distribute the narrative sections through the available space, pin
  Connected Axes and Supporting Themes to the footer, and use named standard,
  long, and extra-long title variants.
- [x] Replace the checker-backed MLB WebP with the supplied transparent PNG and
  remove the superseded WebP.
- [x] Give EDU-001 additional clearance below `Game Engineering`, and center
  the Mets and MLB watermarks between the second divider and the card bottom.
- [x] Center the shared NYU watermark between the second divider and the card
  bottom for EDU-001, EXP-001, and EXP-004, and size its portrait from the
  block unit so it remains clear of the divider on wide desktop cards.
- [x] Apply the approved EXP-002 and EXP-003 selected-record line breaks, use
  `Lab Facilities Manager` in the EXP-004 directory while retaining the
  official selected-record title, and increase all non-title Current Record
  text to the `11px` canonical baseline without moving the footer or
  overflowing the frame.
- [x] Synchronize the revised EDU-001 copy and concise three-section experience
  narratives between `content/ABOUT_CONTENT.md` and runtime data.
- [x] Browser-compare the original pre-reflow EDU-001 static frame with the
  stored dark `1440 × 900` export; the optional authoring provenance was also
  inspected at that historical checkpoint. Verify all five selected states, short
  desktop, the `1920 × 1080` through `2560 × 1440` large-desktop
  interpretation, and the current narrow layout without panel movement,
  meaningful-content clipping, overlap, or internal scrolling; record the
  later header removal and canonical panel extension separately above.
- [x] Verify Trajectory pointer selection, Enter and Space activation, visible
  focus, focus retention, non-color selected state, reduced-motion mark swaps,
  and textual access with WebGL unavailable.
- [x] Reuse the right-directory `navigation-action` hover/focus sequence for
  Trajectory role rows with the highlight-orange accent, preserving selected,
  reduced-motion, and narrow-layout behavior.
- [ ] Verify official organization, role, degree, school/program, course, and date wording.
- [ ] Publish an Adjunct Professor record only after the role begins and official wording is verified.
- [ ] Add related-project links only when corresponding case studies exist.

## Outside the System

- [x] Implement travel and photography statements.
- [x] Store and render seven feature-owned photographs with location, country, year, caption, camera, reflection, and alternative text.
- [x] Implement selected-photo content and an intentionally wrapping carousel
  with previous/next controls and buffered hidden presentation clones that keep
  the active record centered through the loop boundary.
- [x] Keep carousel clones out of the tab order and accessibility tree.
- [x] Respect reduced motion for programmatic carousel scrolling.
- [x] Preserve visible `PHOTO-001` through `PHOTO-007` thumbnail labels, with
  lavender selected/focus treatment and a non-color structural marker.
- [x] Support Enter, Space, Left and Right Arrow, Home, End, Tab, pointer, and
  touch selection while keeping photo state local to the gallery. The selected
  real thumbnail owns the carousel's roving Tab stop.
- [ ] Verify all visible alternative text, locations, years, captions, and reflections with Jaylan.
- [x] Export and serve 2000px WebP display images and 480px WebP thumbnails for
  all seven records while retaining the original JPEGs as archival sources.
- [ ] Decide whether additional responsive `srcset` variants are warranted and
  profile route/image loading on representative devices.
- [x] Prioritize `PHOTO-001`, provide intrinsic dimensions, and use explicit
  lazy-loading and asynchronous decoding for non-selected thumbnail imagery.
- [x] Compare the original pre-reflow left-side photography composition against
  the approved `1440 × 900` export and inspect its bounded desktop and narrow
  interpretations. The protected right navigation and dark Spear composition were
  intentionally excluded from correction scope; the later selected-image
  reflow and preview-size reduction are recorded separately above.

## Interactive Influences

- [x] Implement four locally selectable influence records with authored quotes, reflections, design takeaways, and optional work-specific metadata.
- [x] Include video games, a novel, and an anime television series and film within one medium-agnostic influence-record model.
- [x] Keep `interactive-influences` as the stable section identifier and
  canonical chapter name exposed by the persistent Current chapter status and
  visually hidden section heading; use the shorter `Influences` label only in
  the compact chapter navigator.
- [x] Avoid ratings, rankings, and copied screenshots or promotional artwork.
- [ ] Verify the featured-quote wording, punctuation, translations, speakers, and source scenes or editions identified in `content/ABOUT_CONTENT.md`.
- [ ] Create and compare against an approved chapter composition.

## Current Direction

- [x] Render a direction statement, Longinus statement, exploration areas, closing, and actions.
- [x] Provide working Projects, email Contact, and Home actions.
- [x] Omit the résumé action because no destination is supplied.
- [ ] Verify the public contact address and final exploration-area wording.
- [ ] Create and compare against an approved final-chapter composition.

## About theme-specific 3D and responsive behavior

- [x] Keep the desktop scene sticky, About-owned, and derived from its canvas
  size.
- [x] Restore the recorded canonical dark behavior in the active About scene:
  the Spear rotates continuously counterclockwise, reverses while scrolling upward,
  gains restrained scroll-speed momentum, and becomes static in reduced motion.
- [x] Implement the Rei-light Ramiel interpretation with About-owned stable
  chapter orientations, long held intervals, restrained drift, and static
  reduced-motion poses.
- [x] Keep local record, photograph, and influence selection independent from
  the 3D motif in both interpretations.
- [x] Provide narrow-layout CSS that repositions the scene and compresses
  chapter navigation.
- [x] Restore the dark About Spear scene alongside the light Ramiel scene and
  lazily dispatch both from an About-owned motif boundary.
- [ ] Supply and compare authored per-theme chapter postures and transitions.
- [ ] Preserve the dark continuous scroll-direction-responsive axial behavior
  when layering its authored chapter progression.
- [ ] Verify the active theme's motif never obscures essential content at
  representative viewport sizes.
- [ ] Manually verify normal and reduced-motion behavior across every chapter
  and representative viewport/device sizes; the recorded Identity checks do not
  cover that full matrix.
- [ ] Manually verify reading order and every chapter interaction with WebGL
  unavailable; the recorded Identity semantic check does not cover the full
  About experience.

---

# Milestone 7 — Music

**Status: planned and unavailable. No route, feature, data, asset, or scene exists.**

- [ ] Create and approve the desktop and narrow-layout compositions.
- [ ] Create curated local record data without a Spotify dependency.
- [ ] Design the selectable collection, 3D player, selected-record continuity, and metadata.
- [ ] Use selection language; do not simulate audio playback state.
- [ ] Supply authored graceful spear motion and keep the spear separate from the spindle.
- [ ] Implement the feature and route only after the design/data are ready.
- [ ] Validate keyboard, touch, responsive, reduced-motion, fallback, and performance behavior.

---

# Milestone 8 — Playground

**Status: planned and unavailable. No route, feature, experiment contract, or chamber exists.**

- [ ] Create an original observation-interface and chamber design.
- [ ] Define only real chamber lifecycle states and observation data.
- [ ] Implement accessible experiment discovery and selection.
- [ ] Define the smallest experiment contract after the first real experiment is selected.
- [ ] Keep experiment cameras, controls, state, and resources experiment-owned.
- [ ] Load experiments on demand and dispose resources after use.
- [ ] Do not force the Spear, Ramiel, or another shared motif into every experiment.
- [ ] Validate selection and descriptions even when a visual experiment has no full non-visual equivalent.

---

# Milestone 9 — Responsive, Accessibility, Fallback, and Performance

## Current code-level support

- [x] Add responsive CSS branches for Home, Projects, project detail, and About.
- [x] Add global and feature-specific `prefers-reduced-motion` handling.
- [x] Use semantic links, buttons, headings, lists, sections, and main landmarks for primary content.
- [x] Add visible `:focus-visible` treatments to current primary controls.
- [x] Keep essential content in the DOM rather than WebGL.
- [x] Wrap all current canvases in `SceneErrorBoundary`.
- [x] Keep theme-appropriate CSS Spear or Ramiel fallbacks beneath Home and
  Projects canvases while lazily mounting only the active feature scene.
- [x] Bound current canvas DPR to `[1, 1.5]`.
- [x] Avoid frame-by-frame React state in current scenes.
- [x] Clean up current media-query, scroll, resize, ResizeObserver, animation-frame, and timeout subscriptions in source.

## Required validation and polish

- [ ] Perform a complete keyboard review, including post-route focus.
- [ ] Perform touch-device testing for project two-tap behavior and all About controls.
- [ ] Test representative narrow, tablet, canonical desktop, and short-desktop viewports.
- [ ] Test reduced motion in a real browser.
- [ ] Force WebGL initialization failure and verify Home, Projects, project detail, and About.
- [ ] Verify sufficient color contrast and non-color state cues.
- [ ] Measure initial route loading and About image loading.
- [ ] Investigate and reduce or deliberately accept the current oversized
  shared Three.js/WebGL lazy-chunk warning.
- [ ] Verify no non-visible scene continues rendering after route changes.
- [ ] Profile mid-range hardware before adding post-processing, physics, or heavy final assets.
- [ ] Remove or justify unused runtime assets and installed-but-unused dependencies.

---

# Milestone 10 — Final Content and Portfolio Review

- [ ] Confirm the primary navigation remains Projects, Music, Playground, and About.
- [ ] Confirm Jaylan Wu remains primary and `alter-egoist` remains secondary.
- [ ] Confirm the three personal axes remain coherent across real projects and About.
- [ ] Replace all provisional project records and copy with verified portfolio content.
- [ ] Verify all official organization, role, degree, course, and date wording.
- [ ] Verify the public contact method and every external action.
- [ ] Remove fake system readings and any unsupported availability/status claims.
- [ ] Review every theme's semantic color roles and contrast in context.
- [ ] Review every Spear or Ramiel appearance for a meaningful,
  theme-appropriate, page-specific role.
- [ ] Review every continuous animation and remove motion that is only decorative.
- [ ] Proofread all public content.
- [ ] Complete comparisons against every supplied exported reference.
- [ ] Complete Blender/motion comparisons for every supplied authored reference.
- [ ] Run type-check, lint, and build.
- [ ] Complete keyboard, touch, responsive, reduced-motion, WebGL-fallback, and performance reviews.

---

# Current Recommended Work Order

1. Verify official About degree, school/program, role, course, date, contact, photo-metadata, and future Adjunct Professor wording; keep unverified future content unpublished.
2. Curate and verify the real Projects archive before finalizing layouts around provisional records.
3. Complete the cross-platform typography audit and migrate the Home `ARCHIVE:` font exception to an established token.
4. Approve light-mode exported references, design an accessible visible theme
   control, and browser-verify the implemented dark-default runtime contract.
5. Integrate the final authored dark-theme Spear asset and re-stage the homepage.
6. Compare and approve the complete dark homepage desktop-idle composition at
   `1440 × 900` and representative shorter heights.
7. Supply the homepage Spear motion reference, then prove one complete accessible Home interaction.
8. Implement boot around real readiness for the active theme's critical scene assets.
9. Create and store Projects exported visual and motion references, replace provisional timing/content, and polish the archive transition.
10. Build the project-detail narrative and demonstration framework from real case-study material.
11. Create approved exported frames for Interactive Influences and Current
    Direction, supply authored About chapter-motion references, decide whether
    further responsive photography delivery is warranted, and layer authored
    dark progression over the continuous scroll-direction-responsive Spear
    rotation.
12. Design and implement Playground, then Music, when their content and references are ready.
13. Reinterpret completed desktop experiences for narrow/touch layouts and complete the outstanding manual accessibility, fallback, and performance validation.

The order may change when a supplied exported visual reference, Blender or
other motion reference, verified content, or asset decision makes a later
milestone actionable. Prefer polish over feature count.
