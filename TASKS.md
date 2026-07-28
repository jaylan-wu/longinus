# Longinus Tasks

This file is the implementation plan and status tracker. `AGENTS.md` defines durable product direction and engineering constraints; this file records what the repository has actually established and what remains.

Status reviewed against source on **2026-07-28**. Checkmarks confirm repository evidence only. They do not imply visual approval or hands-on browser/device validation unless the item says so.

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

## Status language

- **Implemented** — present and verifiable in source.
- **Partially implemented** — a meaningful subset exists, but the intended experience is incomplete.
- **Staged** — provisional UI, data, procedural geometry, or timing supports later work.
- **Planned** — approved direction without an implementation.
- **Deferred** — waiting for a design, asset, motion reference, verified content, or decision.
- **Unverified** — code exists, but required visual or manual validation is not recorded.

## Task rules

- Prefer one complete interaction or visual state over several partial features.
- Do not claim a Figma match without a recorded comparison against an approved frame.
- Do not claim authored motion without a supplied Blender or motion reference and comparison.
- Do not describe staged project data, procedural geometry, or provisional timing as final.
- Keep feature behavior, data, assets, scenes, and CSS within the owning feature unless reuse is proven.
- Run only commands that exist. The current automated checks are `corepack yarn typecheck`, `corepack yarn lint`, and `corepack yarn build`; no test command exists.
- Keep manual browser, keyboard, touch, responsive, reduced-motion, and WebGL-failure checks open until they are actually performed.

---

# Milestone 0 — Documentation and Repository Alignment

## Documentation

- [x] Audit every tracked Markdown file against the repository.
- [x] Preserve Jaylan Wu as the primary identity and `alter-egoist` as a secondary creative identity.
- [x] Preserve Engineering, Game design, and Education as the three personal axes.
- [x] Define shared `engineering`, `game-design`, and `education` axis identifiers with canonical interface labels.
- [x] Preserve Figma as the source for supplied static 2D composition.
- [x] Preserve Blender and supplied motion references as the source for authored 3D motion.
- [x] Distinguish implemented, partial, staged, planned, deferred, and unverified work.
- [x] Document the real hash routes and unavailable destinations.
- [x] Correct the package-manager, script, dependency-use, asset, and architecture descriptions.
- [x] Reconcile About implementation status with its editorial source and verification flags.

## Verified repository baseline

- [x] Confirm feature ownership under `src/features/home/`, `src/features/projects/`, and `src/features/about/`.
- [x] Confirm global styling is limited to tokens, reset/foundations, the shared page index, and reduced-motion baseline.
- [x] Confirm page-specific CSS remains feature-owned.
- [x] Confirm local React state and hooks are the established state pattern; no Context, reducer, or global store exists.
- [x] Confirm Home is eager and About, Projects, and project detail are lazy-loaded.
- [x] Confirm each implemented feature owns its React Three Fiber canvas and scene staging.
- [x] Confirm the shared spear is temporary procedural geometry and that no GLTF/GLB asset exists.
- [x] Confirm no font files, tests, formatter, Markdown linter, or deployment configuration exist.
- [x] Confirm the modern Yarn lockfile is not compatible with the previously documented Yarn Classic workflow.
- [x] Pin Yarn `4.17.1` in `package.json` so Corepack setup is deterministic.

---

# Milestone 1 — Visual Foundations

## Color and styling

- [x] Define the semantic palette in `src/index.css`:
  - Background `#09090b`
  - Surface `#141317`
  - Foreground `#e8e4dc`
  - Muted `#8d8882`
  - Spear/disruption red `#d92332`
  - Identity lavender `#7a5aa6`
  - Active-system orange `#f28c28`
- [x] Mirror scene-required color values in `src/styles/colors.ts`.
- [x] Use orange for implemented focus/active-system states and red for spear/disruption states where applicable.
- [x] Keep feature composition out of `src/index.css`.
- [ ] Align the `index.html` theme-color metadata (`#0D1117`) with the approved Longinus background role (`#09090b`) or document an intentional exception.
- [ ] Perform and record a color-contrast and visible-focus review.

## Typography

- [x] Provide provisional display, sans-serif, and monospace CSS tokens.
- [x] Record that all current stacks are system fallbacks and can vary by device.
- [ ] Approve the Display, System, Content, and Identifier roles as a complete typography system.
- [ ] Select and license the final display face.
- [ ] Select or confirm final system, content, and identifier faces.
- [ ] Bundle approved font assets and update CSS tokens plus Figma foundations together.
- [ ] Verify long-form About and project content does not inherit display typography.

---

# Milestone 2 — Boot Experience

**Status: planned. No boot component or readiness system exists.**

- [ ] Create and approve the boot composition in Figma.
- [ ] Identify genuinely critical homepage assets.
- [ ] Track real readiness for the final spear, critical textures/materials, fonts, and initial scene.
- [ ] Define the linear indicator and its relationship to the spear.
- [ ] Implement `loading → linear indicator → spear reveal → homepage`.
- [ ] Avoid simulated percentages and excessive minimum delays.
- [ ] Do not replay the full boot sequence on internal hash navigation.
- [ ] Provide a shorter reduced-motion transition.
- [ ] Ensure scene failure cannot trap semantic navigation behind boot.

---

# Milestone 3 — Homepage

## Stored design reference

- [x] Store the `1440 × 900` desktop-idle export at `design/figma/references/homepage/homepage-desktop-idle-v1.png`.
- [x] Track the frame as **In progress**, not approved.
- [x] Implement corresponding identity, navigation, frame, divider, scene-label, watermark, footer, and page-index regions.
- [x] Keep Projects and About available while Music and Playground are visibly disabled/planned.
- [x] Add pointer-hover and keyboard-focus styling for available links.
- [x] Add responsive width and desktop-height CSS branches.
- [ ] Record a browser comparison at exactly `1440 × 900`.
- [ ] Compare representative shorter desktop heights.
- [ ] Resolve the current copy and type-metric differences from the stored export.
- [ ] Approve the complete 2D composition only after comparison evidence exists.

## Spear staging

- [x] Create a Home-owned React Three Fiber canvas with bounded DPR.
- [x] Stage the shared procedural `SpearModel` with Home-owned camera, lights, transform, and scale.
- [x] Keep the Home/Projects CSS spear silhouette present beneath the canvas.
- [ ] Replace procedural geometry with the final authored spear asset.
- [ ] Revisit camera, lighting, scale, silhouette, rotation, and cropping with the final asset.
- [ ] Compare the final 2D/3D composition against Figma.

## Homepage interaction

**Status: planned beyond CSS focus feedback. Direct hash links navigate immediately.**

- [ ] Add Home-owned shared phase and target state using `idle`, `focused`, `committing`, `impact`, `transitioning`, and `settled` where needed.
- [ ] Make pointer and keyboard focus update the same target state.
- [ ] Make the spear orient toward a focused available target.
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
- [x] Coordinate DOM and temporary spear responses through `useProjectTransition` phases.
- [x] Implement commitment, impact styling, input lock, and delayed hash navigation.
- [x] Provide a shortened reduced-motion code path.
- [x] Clean up pending transition timers when the hook unmounts.
- [ ] Create and approve the Projects Figma composition and focus/impact states.
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
- [ ] Resolve the post-transition spear outcome; the current code records `inactive-offstage` and detail renders no spear.
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
- [x] Keep published content in focused modules under `src/features/about/data/` and editorial/draft source in `content/ABOUT_CONTENT.md`.
- [x] Keep active chapter state cross-cutting and record/photo/influence selection local to each chapter.
- [x] Use standard vertical browser scrolling without full-screen scroll snapping.
- [x] Implement `IntersectionObserver`-driven active-chapter detection with a scroll/resize fallback and complete observer, listener, and animation-frame cleanup.
- [x] Implement keyboard-accessible chapter navigation and reduced-motion-aware scrolling.
- [x] Store the approved About / Identity / Desktop / Idle export at `design/figma/references/about/about-identity-desktop-idle-v1.png`.
- [x] Implement a shell-owned persistent chapter header whose anchor is shared by all five chapters.
- [x] Verify pointer, keyboard, and scroll-driven chapter changes replace the persistent header text without moving its bounding region.
- [ ] Create and approve About Figma frames for Trajectory, Outside the System, Interactive Influences, and Current Direction.
- [ ] Record visual comparisons for the four remaining chapter frames and the finished narrow-layout reinterpretation.

## Identity

- [x] Present Jaylan Wu, New York City, the opening statement, three axes, and `alter-egoist` as a restrained signature.
- [x] Keep all axis statements visible rather than hover-gated.
- [x] Implement the static About / Identity / Desktop / Idle composition from the approved `1440 × 900` reference.
- [x] Complete a direct browser comparison at `1440 × 900`, including region proportions, persistent chapter anchor, type hierarchy, navigation placement, spear framing, spacing, and shared Home page-index alignment.
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
- [ ] Verify official organization, role, degree, school/program, course, and date wording.
- [ ] Publish an Adjunct Professor record only after the role begins and official wording is verified.
- [ ] Add related-project links only when corresponding case studies exist.

## Outside the System

- [x] Implement travel and photography statements.
- [x] Store and render seven feature-owned photographs with location, country, year, caption, camera, reflection, and alternative text.
- [x] Implement selected-photo content and an infinite three-cycle carousel with previous/next controls.
- [x] Keep duplicate carousel cycles out of the tab order and accessibility tree.
- [x] Respect reduced motion for programmatic carousel scrolling.
- [ ] Verify all visible alternative text, locations, years, captions, and reflections with Jaylan.
- [ ] Export web-appropriate image sizes and responsive variants; current JPEGs are high-resolution source-sized files.
- [ ] Add explicit lazy-loading/decoding behavior where useful.
- [ ] Create and compare against an approved photography composition.

## Interactive Influences

- [x] Implement four locally selectable influence records with authored quotes, reflections, design takeaways, and optional work-specific metadata.
- [x] Include video games, a novel, and an anime television series and film within one medium-agnostic influence-record model.
- [x] Keep `interactive-influences` as the stable section identifier and canonical visible chapter name; use the shorter `Influences` label only in the compact chapter navigator.
- [x] Avoid ratings, rankings, and copied screenshots or promotional artwork.
- [ ] Verify the featured-quote wording, punctuation, translations, speakers, and source scenes or editions identified in `content/ABOUT_CONTENT.md`.
- [ ] Create and compare against an approved chapter composition.

## Current Direction

- [x] Render a direction statement, Longinus statement, exploration areas, closing, and actions.
- [x] Provide working Projects, email Contact, and Home actions.
- [x] Omit the résumé action because no destination is supplied.
- [ ] Verify the public contact address and final exploration-area wording.
- [ ] Create and compare against an approved final-chapter composition.

## About spear and responsive behavior

- [x] Reuse the shared procedural spear within an About-owned canvas.
- [x] Keep the desktop scene sticky and derive its layout from the canvas size.
- [x] Rotate the spear counterclockwise continuously from the initial Identity view across every chapter in normal-motion mode.
- [x] Reverse the spear clockwise while scrolling upward and return it counterclockwise while scrolling downward.
- [x] Let scroll speed add axial momentum in the active direction without introducing a rotation endpoint.
- [x] Stop continuous scroll-linked rotation and damp toward chapter values in reduced-motion mode.
- [x] Keep the Identity spear quietly framed and free of pointer targeting, thrust, or impact while its axial rotation continues.
- [x] Provide narrow-layout CSS that repositions the scene and compresses chapter navigation.
- [ ] Supply authored chapter postures and transitions.
- [ ] Layer authored quiet chapter progression over the continuous scroll-direction-responsive axial rotation.
- [ ] Verify the spear never obscures essential content at representative viewport sizes.
- [ ] Manually verify normal and reduced-motion behavior.
- [ ] Manually verify reading order and all About controls with WebGL unavailable.

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
- [ ] Do not force the spear into every experiment.
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
- [x] Keep a CSS spear silhouette beneath Home and Projects canvases.
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
- [ ] Investigate and reduce or deliberately accept the current Vite initial-chunk warning.
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
- [ ] Review every use of red, lavender, and orange for semantic consistency.
- [ ] Review every spear appearance for a meaningful page-specific role.
- [ ] Review every continuous animation and remove motion that is only decorative.
- [ ] Proofread all public content.
- [ ] Complete Figma comparisons for every supplied frame.
- [ ] Complete Blender/motion comparisons for every supplied authored reference.
- [ ] Run type-check, lint, and build.
- [ ] Complete keyboard, touch, responsive, reduced-motion, WebGL-fallback, and performance reviews.

---

# Current Recommended Work Order

1. Verify official About degree, school/program, role, course, date, contact, photo-metadata, and future Adjunct Professor wording; keep unverified future content unpublished.
2. Curate and verify the real Projects archive before finalizing layouts around provisional records.
3. Approve and bundle the Longinus typography system.
4. Integrate the final authored spear asset and re-stage the homepage.
5. Compare and approve the complete homepage desktop-idle composition at `1440 × 900` and representative shorter heights.
6. Supply the homepage spear motion reference, then prove one complete accessible Home interaction.
7. Implement boot around real readiness for the final spear and fonts.
8. Create Projects Figma and motion references, replace provisional timing/content, and polish the archive transition.
9. Build the project-detail narrative and demonstration framework from real case-study material.
10. Create About Figma/motion references, optimize photography delivery, and layer authored chapter progression over the continuous scroll-direction-responsive spear rotation.
11. Design and implement Playground, then Music, when their content and references are ready.
12. Reinterpret completed desktop experiences for narrow/touch layouts and complete the outstanding manual accessibility, fallback, and performance validation.

The order may change when a supplied Figma, Blender, content, or asset decision makes a later milestone actionable. Prefer polish over feature count.
