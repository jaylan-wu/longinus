# Project

Longinus is my personal portfolio website.

The website is not intended to feel like a traditional software portfolio. It should feel like an interactive experience where navigation, animation, typography, and 3D elements communicate personality as much as the content itself.

The central visual motif is the Spear of Longinus.

Every significant interaction should feel intentional rather than decorative.

# Primary Goal

Build a portfolio that demonstrates:

- Software engineering ability
- Technical creativity
- Attention to detail
- Strong interaction design
- Performance-conscious engineering
- The ability to translate deliberate art direction into interactive technical systems

Visual design, motion, and engineering should reinforce each other rather than feel like separate layers.

When choosing between adding features and polishing existing interactions, prefer polish.

# Portfolio Intent

Longinus should reflect my long-term interest in game development, interactive technology, and teaching in higher education.

The portfolio should position me as a software engineer with a strong interest in interactive systems, game technology, creative engineering, and technical education.

When presenting projects or designing interactions, prioritize opportunities to communicate:

- How systems work
- Why technical decisions were made
- Experimentation and iteration
- Interaction and game-oriented thinking
- The ability to explain complex technical ideas clearly

Do not turn the website into a traditional academic portfolio or game studio portfolio.

The goal is to show that engineering, interactive design, and teaching are connected parts of my work and interests.

# Documentation Status and Current Repository Snapshot

This file combines durable product direction with repository-specific engineering guidance. Product direction remains authoritative even when it is not implemented. Statements in this section describe the repository as audited on 2026-07-21.

Use these status terms consistently:

- **Implemented** means the behavior or structure is present and verifiable in source.
- **Partially implemented** means a meaningful subset exists but the intended experience is incomplete.
- **Staged** means provisional UI, data, procedural geometry, or timing exists to support later work.
- **Planned** means approved direction exists without a current implementation.
- **Deferred** means work is intentionally waiting for a design, asset, motion reference, content, or decision.
- **Unverified** means code exists but required visual or hands-on validation is not recorded.

## Current Routes and Experiences

`src/App.tsx` contains a lightweight hash router; React Router is not installed.

- Home is available at the empty hash, `#home`, and any unrecognized hash. Its static DOM composition is partially implemented. Its spear is staged procedural geometry, and the coordinated homepage interaction and boot experience are planned.
- Projects is available at `#projects`. Its archive, local interaction state, temporary spear response, and timed transition are staged and have not been approved against a Projects Figma or motion reference.
- Project detail is available at `#projects/<slug>`. It currently renders summary metadata and technologies, or an in-app not-found state. Narrative and demonstration regions are planned.
- About is available at `#about`. Its five chapters, active-chapter navigation, local record selection, photography carousel, content data, and sticky spear scene are partially implemented. No About Figma export or authored motion reference is stored in the repository.
- Music and Playground are planned. Their homepage controls are disabled, and neither feature folder nor route exists.

Home is imported eagerly. About, Projects, and project detail are lazy-loaded with `React.lazy`. Hash changes update the document title and scroll to the top; route-level focus transfer is not implemented.

## Current Assets and Rendering

- `src/components/spear/SpearModel.tsx` constructs a temporary spear from Three.js primitives. No GLTF or GLB asset is present.
- Home, Projects, and About own separate React Three Fiber canvases and staging. The shared base geometry does not imply a shared camera or scene controller.
- Home and Projects also render the shared CSS `SpearFallback` silhouette beneath their canvases. About has no CSS spear silhouette, but its semantic DOM narrative remains when `SceneErrorBoundary` removes a failed canvas.
- No font assets are bundled. The display, sans-serif, and monospace CSS stacks are provisional system stacks.
- About runtime assets live under `src/features/about/assets/`; the site favicon lives at `public/favicon.png`, and no general runtime assets currently live under `src/assets/`.
- The seven About photographs are high-resolution source-sized JPEGs. Responsive variants, explicit lazy-image loading, and production image optimization are not implemented.
- The only stored Figma export is `design/figma/references/homepage/homepage-desktop-idle-v1.png` at `1440 × 900`. Its tracker status is in progress, not approved.

## Current State, Styling, and Data Patterns

- Feature-specific components, data, scene behavior, and CSS live under `src/features/home/`, `src/features/projects/`, and `src/features/about/`.
- Shared code is limited to proven cross-feature primitives: `PageIndex`, the procedural spear, the Home/Projects CSS spear silhouette, `SceneErrorBoundary`, `useReducedMotion`, shared color values, and the navigation type.
- Local React state and focused feature hooks own current interaction state. There are no Context providers, reducers, or global state-library stores.
- `src/index.css` owns global tokens, resets, the shared page-index treatment, and the application-wide reduced-motion baseline. Each implemented feature owns its distinctive stylesheet.
- Project data lives in `src/features/projects/projectData.ts`. Its three records and detail copy are provisional portfolio content, not a verified final project archive.
- About data lives in focused modules under `src/features/about/data/`; editorial source material and verification flags live in `content/ABOUT_CONTENT.md`. The published data intentionally excludes the incomplete future Adjunct Professor record.
- The Projects transition uses explicit phases in `src/features/projects/projectTransition.ts`, but its current coordination is a provisional timeout sequence. Do not treat those values as authored or approved motion.

## Current Tooling and Validation

The checked-in lockfile and `.yarnrc.yml` use Yarn `4.17.1` with the `node-modules` linker. `package.json` pins that release through its `packageManager` field. Do not run Yarn Classic 1.x against this lockfile; use `corepack yarn` so the repository-pinned release owns installs and scripts.

`package.json` defines only these scripts:

- `dev`
- `typecheck`
- `lint`
- `build`
- `preview`

There is no automated test script, test configuration, Markdown linter, formatter, or deployment configuration. Do not report tests or deployment validation as completed. The available automated source validation is `corepack yarn typecheck`, `corepack yarn lint`, and `corepack yarn build`.

# Design Philosophy

Longinus should feel like an interactive visual system rather than a traditional portfolio website.

The primary graphic language draws from the typographic composition of Neon Genesis Evangelion title cards and the structured information systems presented through interfaces such as the MAGI system.

These references should influence design principles rather than be reproduced directly.

## Typographic Composition

Typography is a compositional element.

Use scale, alignment, cropping, spacing, and negative space to create tension and hierarchy.

Prefer:

- Extreme differences in type scale
- Strong vertical and horizontal alignment
- Intentional asymmetry
- Large areas of controlled negative space
- Cropped or interrupted display typography when readability is not compromised
- Labels, identifiers, and numeric markers as structural elements

The interface may draw from the visual tension of Evangelion title cards, but should develop an original typographic system for Longinus.

## System Interface Language

The 2D interface should feel structured, analytical, and deliberate.

Information may be framed through record identifiers, system states, numeric markers, technical labels, connection lines, geometric regions, status indicators, and structured metadata.

System language should frame content without obscuring it.

Do not turn the interface into a generic hacker terminal or fill the screen with meaningless technical text.

Every label and visual indicator should communicate real information, interaction state, or hierarchy.

## Structured Interface and Physical Disruption

The 2D interface represents structure, classification, and control.

The Spear of Longinus exists in contrast to this system. It is physical, dimensional, curved, and capable of breaking the visual structure of the interface.

The spear may cross interface boundaries, interrupt typography, break alignment, penetrate interface regions, trigger structural transitions, or cause controlled distortion and displacement.

These disruptions should be intentional and reserved for meaningful interactions.

Stillness and structure should make moments of impact feel stronger.

## Influences

Interaction and motion may draw inspiration from expressive game interfaces such as Persona and Metaphor: ReFantazio.

Atmosphere and color may draw inspiration from EGOIST and redjuice.

Graphic composition may draw inspiration from Evangelion title cards and fictional system interfaces.

These references are creative influences, not templates.

Never reproduce copyrighted layouts, artwork, logos, characters, or identifiable interface compositions.

Longinus should develop its own visual language from these principles.

# Visual System

Longinus is built around a visual conflict between system and disruption.

The 2D interface represents structure, classification, and control.

The Spear of Longinus represents physical disruption. It is dimensional, curved, reactive, and capable of interrupting the interface.

Use this contrast as a primary visual rule.

## Personal Axes

The portfolio represents three connected areas of interest:

- Engineering
- Game development
- Education

Projects and experiences may exist across multiple axes.

Do not force content into a single category when it naturally represents multiple areas of work.

These axes may influence project classification, metadata, visual connections, and information architecture.

## Interface Regions

Compose interfaces using four conceptual information regions:

- Primary regions contain the current focal content.
- System regions provide structured metadata and state.
- Navigation regions expose available destinations or actions.
- Ambient regions provide meaningful contextual information.

Ambient and system information must represent real data or real application state.

Do not generate meaningless technical labels or fake system activity for decoration.

## Identity and Identifiers

Use `alter-egoist` as the recurring digital identity associated with Jaylan within the Longinus interface.

Jaylan Wu is the primary human identity presented by the portfolio.

`alter-egoist` may appear as a secondary identity, system signature, creative alias, or compositional typographic element.

Longinus is the name of the interactive portfolio system and experience.

Do not replace Jaylan's name with a fictional subject number or system identifier.

Functional content may use simple identifiers when they improve organization, such as `PRJ-001`, `MUS-001`, `REC-001`, or `TEST-001`.

Avoid excessive fictional acronyms, military-style naming, or terminology that makes the interface feel like science-fiction cosplay.

## Grid

Use strong alignment and intentional spatial relationships.

The interface may imply a grid through typography, spacing, and alignment without drawing every boundary.

Visible lines should communicate separation, connection, selection, state, or motion.

Do not add interface lines only for visual decoration.

## Color Roles

Use the established Longinus color palette:

- Background: `#09090b`
- Surface: `#141317`
- Foreground: `#e8e4dc`
- Muted: `#8d8882`
- Primary red: `#d92332`
- Secondary lavender: `#7a5aa6`
- Highlight orange: `#f28c28`

The palette is semantic.

- Background represents the primary system environment.
- Surface defines secondary interface regions and structural depth.
- Foreground is the primary information and display typography color.
- Muted is used for secondary metadata and lower-priority system information.
- Primary red represents the Spear of Longinus, impact, disruption, and interface states directly affected by the spear.
- Secondary lavender represents identity, personal context, and the `alter-egoist` visual layer.
- Highlight orange represents active system state, selection, connection, and analytical interface feedback.

Treat accent color as a limited resource.

Orange enters through system state. Lavender enters through identity and human context. Red enters through the spear and the disruption it causes.

Do not use primary red as a generic hover, border, or decorative accent when the interaction has no relationship to the spear.

Do not introduce additional colors without a clear visual, semantic, or interaction role.

## Interface Language

Use analytical, restrained system language to frame portfolio content.

Examples include:

- Project Archive
- Access Record
- Current Record
- Subject Profile
- Current View
- Select Record
- System Active
- Retrieving
- Loaded

Avoid generic hacker terminology, meaningless technical phrases, and excessive fictional system language.

# Design Source of Truth

Longinus uses multiple sources of truth for different parts of the experience.

Figma is the primary visual reference for page layout, typography, spacing, hierarchy, color application, and static 2D UI composition.

Blender animations, viewport recordings, renders, and supplied motion references define the intended visual character of authored 3D motion.

This file defines project philosophy, visual-system rules, interaction intent, and expected state transitions.

The existing codebase defines engineering constraints and established implementation patterns.

When a Figma design, exported frame, screenshot, or design specification is provided for a page:

- Inspect the reference before writing UI code.
- Treat the design as the intended visual target, not loose inspiration.
- Match layout, scale, spacing, alignment, typography hierarchy, color roles, and visual weight as closely as practical.
- Reuse existing design tokens and components when they can reproduce the design accurately.
- Do not invent additional cards, sections, buttons, labels, gradients, decorations, or content that are not present in the reference.
- Do not simplify a distinctive composition into a generic portfolio layout.
- Preserve intentional asymmetry, overlap, cropping, whitespace, and unusual positioning.
- Preserve the Longinus visual system when interpreting details not explicitly defined by the reference.
- If the design conflicts with an existing implementation, identify the conflict before making a broad architectural change.

Figma defines static 2D composition.

Blender and supplied motion references define authored 3D motion.

The interaction specification defines triggers and state transitions.

The visual system defines the rules that connect these elements into a consistent interface.

The codebase determines the most maintainable implementation.

When these sources appear to conflict, do not silently guess. Explain the conflict and choose the smallest reversible implementation unless the task explicitly resolves it.

## Motion Source of Truth

Motion references may be provided as Blender animations, viewport recordings, rendered clips, video references, or written interaction specifications.

Treat supplied motion references as intentional direction for timing, pacing, acceleration and deceleration, rotation, position, camera relationship, overshoot, follow-through, and overall physical character.

Do not replace distinctive authored motion with generic easing or arbitrary spring animations.

A Blender animation does not automatically require the animation to be exported and played directly in the browser.

Choose the implementation based on interaction requirements:

- Use procedural React Three Fiber animation when motion must react continuously to pointer, keyboard, navigation, or application state.
- Use exported GLTF animation clips when motion is authored, fixed, cinematic, or difficult to reproduce accurately through procedural animation.
- Use CSS or browser-native animation for current DOM-based 2D interface elements. Consider Motion / Framer Motion only if a scoped task adds it for a reviewed need; it is not installed today.
- Coordinate 2D and 3D animation through shared interaction state rather than isolated timers and unrelated animation triggers.

When reproducing a supplied Blender motion procedurally, preserve the motion's visual intent and physical character as closely as practical.

If it is unclear whether an animation should be procedural or exported from Blender, explain the tradeoff before committing to an implementation.

## Implementing From Figma

When implementing a page from Figma:

1. Inspect the full frame before editing code.
2. Identify the primary, system, navigation, and ambient interface regions.
3. Identify the dominant compositional relationships between typography, negative space, and 3D elements.
4. Identify reusable components and visual-system roles.
5. Determine which elements belong to the DOM interface and which belong to the Three.js scene.
6. Implement the static 2D composition.
7. Stage required 3D elements so their position, scale, and camera relationship match the intended composition.
8. Define shared interaction states between the 2D interface and 3D scene.
9. Implement responsive behavior.
10. Implement system, content, and spear motion according to their defined motion characteristics.
11. Compare the result against the reference at the intended viewport size.
12. Fix the largest visual and compositional differences first.
13. Profile and polish the final interaction.

Do not treat the Three.js scene as a decorative layer added after the interface is complete.

When a 3D element is visually dominant, its scale, silhouette, camera framing, and relationship to typography are part of the page composition.

Prefer implementing one complete visual and interaction state before building every page state.

When reproducing a design, prioritize composition and dominant 2D/3D relationships, major spacing and proportions, typography scale and line breaks, 3D staging and silhouette, color-role accuracy, interaction-state clarity, then fine decorative details.

# Responsive Interpretation

Longinus is a desktop-first interactive experience.

The primary art direction, 2D/3D composition, and interaction model should be designed for desktop viewports first.

Mobile support is still required, but mobile should be treated as an intentional reinterpretation of the experience rather than the primary design constraint.

Do not weaken a distinctive desktop interaction solely because it cannot be reproduced identically on touch devices.

Do not mechanically scale the desktop composition down.

Preserve the current focal content, clear navigation state, the system and disruption visual conflict, meaningful typography hierarchy, the visual importance of the Spear of Longinus, and understandable interaction feedback.

Adapt spatial arrangement, navigation orientation, typography scale, line breaks, cropping, 3D camera framing, spear position and scale, metadata density, ambient information, and motion distance or timing when necessary.

Touch interactions must not depend on hover.

When desktop uses hover to preview or focus a target, define an equivalent touch interaction such as first tap to focus and second tap to commit, swipe or drag to change the focused target, or explicit selection controls.

Responsive layouts should feel intentionally composed for their viewport rather than like reduced desktop layouts.

# Interaction Model

Longinus interactions should be coordinated through explicit shared interaction state.

The 2D interface, Three.js scene, spear animation, and route transition system should react to the same conceptual interaction state rather than directly triggering unrelated animations.

Prefer state-driven coordination over imperative animation chains.

A navigation element should communicate that a target has become focused or committed. It should not directly call spear-specific animation functions.

The spear, interface, and transition systems should independently interpret shared interaction state according to their responsibilities.

## Interaction Phases

Use the following conceptual phases when appropriate:

### idle

No target is currently active. The interface is stable and the spear may perform subtle authored idle motion.

### focused

A target has been identified through pointer, keyboard, touch, or another navigation input. The system communicates selection state and the spear may orient toward the focused target.

### committing

The user has confirmed an interaction. The target is locked and the interaction prepares for impact. Use this phase for anticipation, wind-up, or other pre-impact motion.

### impact

The spear or another dominant interaction reaches the moment of physical or visual disruption. Use this phase for thrust, penetration, displacement, distortion, or other brief high-energy reactions.

### transitioning

The current interface leaves, restructures, or changes route. 3D follow-through and 2D transition motion should remain coordinated.

### settled

The destination view is active and visually stable. Primary input is restored and the system is ready for the next interaction.

These phases are conceptual states, not a requirement to build a large global state machine.

Use React state, Context, or a small reducer when sufficient.

Do not introduce a global state library solely to model these phases.

## Interaction Targets

Interaction state should identify both the current phase and the relevant target when a target exists.

Conceptually:

`phase: focused`
`target: projects`

Targets should use stable identifiers defined by navigation or content data.

Avoid duplicating target-specific animation logic across individual navigation components.

## Coordination

System UI responds with precise and controlled feedback.

The spear responds with weighted and physical motion.

Impact effects respond briefly and forcefully.

Content remains restrained and readable.

Do not synchronize independent systems using arbitrary duplicated timeout values when a shared animation event, state transition, or completion callback can coordinate them more reliably.

# Core Experience

Longinus is an interactive portfolio organized through a structured 2D interface and a recurring 3D Spear of Longinus.

The interface presents and classifies information.

The spear acts as the primary physical interaction motif.

The spear should not function as a decorative 3D model placed beside the interface. Its position, motion, and interaction with the 2D system should contribute to navigation, transition, or visual state.

## Boot Experience

Before the homepage becomes interactive, Longinus may present a short loading and initialization experience.

The boot experience is part of the visual and interaction design of the portfolio. Do not treat it as a generic spinner or unrelated loading screen.

Its primary purpose is to prepare critical assets and transition the user into the homepage composition.

Loading indicators should represent meaningful application or asset readiness where practical.

Do not display arbitrary simulated loading percentages solely for visual effect.

Critical readiness may include the primary Spear of Longinus model, critical model textures and materials, required display fonts, the initial Three.js scene, and other assets required for the first interactive view.

The loading indicator should visually relate to the Spear of Longinus.

The intended transition concept is:

`loading state → linear indicator → spear reveal → homepage composition`

Prefer this over an unrelated loading screen that simply disappears before the homepage.

Do not replay a long boot sequence on every internal route change.

If critical assets are already cached or become ready immediately, preserve the transition's visual intent without artificially forcing an excessively long loading duration.

Respect reduced-motion preferences by providing a shorter, simpler transition into the homepage.

## Homepage

The homepage is the primary introduction to Jaylan, the Longinus visual system, and the spear interaction model.

It should function as both an introduction and a navigation scene.

The desktop composition should generally present primary navigation and system information within the left-side composition, and a large interactive Spear of Longinus as the dominant 3D element within the right-side composition.

The layout may use asymmetry, cropping, overlap, and controlled negative space.

Do not simplify the homepage into a conventional hero section and navigation bar.

The homepage should communicate that the portfolio belongs to Jaylan Wu and represents work across engineering, game development, and education.

Jaylan Wu should remain unmistakable as the primary human identity.

`alter-egoist` may appear as a secondary identity, signature, or compositional typographic element.

The homepage should teach interaction through response rather than instructional text.

Do not add tutorial overlays, tooltip instructions, or explanatory onboarding unless interaction testing demonstrates that navigation cannot be understood without them.

The homepage is not an About page.

Its purpose is to establish identity, atmosphere, interaction, and navigation.

## Homepage Interaction

When idle, the interface remains visually restrained and the spear may use subtle authored idle motion.

When a navigation target becomes focused, the system identifies the target, highlight orange may communicate active system state, and the spear physically orients toward the target.

When the user commits to a target, the target becomes locked and the spear prepares through anticipation or wind-up.

At impact, the spear thrusts toward or through the selected interface target. Primary red may enter the interface as a result of the spear's disruption. Typography, lines, or interface regions may briefly displace, distort, separate, or react to the impact.

During transition, the current interface leaves or restructures as part of the spear's follow-through. The route changes at an intentional point within the visual transition.

The interaction should not feel like a click followed by an unrelated page animation.

## Spear Continuity

The Spear of Longinus is a recurring motif across the website.

Its role may change between pages, including navigation actor, transition element, compositional divider, rotating sculptural element, pointer or selector, or source of visual disruption.

Do not force the homepage thrust interaction onto every page.

Each page should define a meaningful role for the spear based on that page's content and interaction model.

The spear may move, rotate, change scale, leave the viewport, become partially obscured, or be reintroduced in a new compositional role.

Do not assume the spear must remain continuously visible.

# Experience Direction

The primary navigation structure is:

- Projects
- Music
- Playground
- About

The homepage is the navigation scene and does not need to appear as one of its own primary navigation targets.

The status notes below describe current availability. The remaining text in each section describes approved direction, including work that is not implemented.

## Home

**Current status: partially implemented and staged.** The route, desktop-first DOM composition, direct hash navigation, system labels, temporary procedural spear, Home-owned canvas, and narrow-layout CSS exist. Boot, shared target/phase state, target-oriented spear motion, impact, and coordinated route transitions are not implemented. The stored desktop-idle Figma frame remains in progress and browser comparison is unverified.

The homepage is the primary introduction to Jaylan, the Longinus visual system, and the spear interaction model.

The desktop composition should prioritize primary navigation, Jaylan's identity, the Spear of Longinus, current system and navigation state, strong title-card-inspired typography, and controlled negative space.

Identity information may use labels, identifiers, or structured metadata, but the user's name and the purpose of the portfolio must remain understandable.

Avoid long biography text, detailed experience history, project summaries, or large content sections.

## Music

**Current status: planned and unavailable.** No route, feature folder, content data, record-player scene, or Music interaction exists. The disabled homepage control exposes the destination without implying availability.

The Music page presents a curated collection of records selected by Jaylan.

It should feel more personal, atmospheric, and fluid than the primary system-oriented pages.

The page should not use Spotify as its primary content source.

Music content is intentionally curated and stored as portfolio data.

The desktop composition should generally include a visible collection of selectable records fanned from the left, a central or visually dominant 3D record player, current record and track information, a sculptural role for the Spear of Longinus, and structured music metadata.

Selecting a record should move or transition the selected record from the collection into the player while preserving spatial continuity.

When a record is active, the record rotates and the spear performs graceful authored motion. The spear may spin, tilt, drift, or orbit around the center composition.

The spear does not function as the turntable spindle.

The spear's motion should feel closer to a ballerina or suspended sculptural performance than a mechanical attachment.

The Music page does not currently provide audio playback.

Do not implement audio controls, streaming integrations, playback APIs, or simulated playback state unless explicitly requested.

Use state language such as Selected Record, Current Record, Active Record, or Displaying.

Avoid labels such as `PLAYING`, `PAUSED`, playback progress, or elapsed time when no audio is being played.

Structure music data and components so audio playback may be introduced later without requiring a complete redesign.

The Music page may use secondary lavender more prominently to reinforce its personal and atmospheric role.

## Projects

**Current status: staged.** The archive route, three provisional project records, focus and selection state, two-tap touch selection, temporary spear response, timeout-driven transition, and metadata-only detail routes exist. No Projects or project-detail Figma export, final project curation, authored motion reference, narrative case-study data, or demonstration region exists.

The Projects page presents a curated archive of selected software engineering, interactive, embedded, and game development work.

Favor a small number of strong projects.

The Projects page should communicate technical ability, creative engineering, decision-making, and the ability to explain complex systems clearly.

### Project Archive

The primary Projects view should function as a project archive or record-selection interface.

The desktop composition should generally include a selectable project collection within the left-side composition, the Spear of Longinus within the right-side or dominant 3D composition, structured project metadata, clear current focus and interaction state, title-card-inspired typography, and controlled negative space.

Avoid generic portfolio card grids.

Projects may be presented as records, entries, or typographic interface regions.

Project metadata may include project name, project type, year, role, technologies, and relevant personal axes.

### Project Selection

When a project becomes focused, the system identifies the active project, highlight orange may communicate focus, relevant metadata may update, and the spear orients toward the focused project.

When the user commits to a project, the project becomes locked, the spear performs an anticipatory motion, and the spear thrusts toward or through the selected project record.

Primary red may enter at impact and the selected typography or interface region may react through controlled displacement, separation, distortion, or structural disruption.

Do not navigate immediately on click before the committed interaction and impact have visually occurred.

### Project Detail

Project detail experiences should explain how the work was approached while providing visual or interactive evidence of the resulting system.

The default desktop project-detail composition should reserve substantial space for both explanation and demonstration.

Conceptually:

- The information region explains the project.
- The demonstration region shows the project, system, artifact, or behavior.

A roughly split-screen composition may be used when appropriate.

Do not assume every project uses an identical template.

The information region should teach the viewer how the project was approached.

Prefer a narrative structure such as:

1. Context
2. Problem
3. System
4. Decisions
5. Outcome
6. Reflection

Prioritize the problem being solved, Jaylan's role and ownership, system architecture or interaction design, important technical decisions, tradeoffs and constraints, experimentation and iteration, measurable or observable outcomes, and lessons or reflection.

The demonstration region provides visual or interactive evidence related to the project.

For software and systems projects, it may contain architecture diagrams, animated data flows, interactive system diagrams, interface demonstrations, application footage, development artifacts, or meaningful technical visualizations.

For game, 3D, embedded, or spatial projects, it may contain interactive 3D models, authored Blender animations, game environments, characters or props, mechanical objects, hardware visualizations, or interactive scene demonstrations.

Do not add a 3D object solely because Longinus uses Three.js.

When an interactive 3D model is provided, preserve sufficient screen space for the model's silhouette, motion, and interaction.

Project-specific cameras, lighting, controls, and scene composition are allowed.

Do not force project demonstration scenes to reuse the homepage spear camera or scene configuration.

Projects may use different presentation modes based on their content.

Consistency should come from typography, color roles, interface language, interaction state, and compositional principles rather than identical page templates.

Projects may relate to one or more personal axes: Engineering, Game development, and Education.

Do not force each project into a single category or display arbitrary percentage scores for each axis.

## Playground

**Current status: planned and unavailable.** No route, feature folder, experiment contract, observation interface, or chamber exists. The disabled homepage control exposes the destination without implying availability.

The Playground presents small technical, visual, game, and interaction experiments that do not require the scope or completion level of a full project.

Projects demonstrate completed work.

The Playground demonstrates experimentation, curiosity, and active technical exploration.

### Observation Chamber

The primary visual concept for the Playground is an observation system overlooking a contained experimental chamber.

The desktop composition should create a clear relationship between an observation and control interface and a visually distinct experimental stage or chamber.

The composition may draw inspiration from the sense of scale, separation, and controlled observation found in Evangelion testing sequences.

Do not reproduce copyrighted rooms, architecture, interface layouts, characters, or Evangelion units.

Create an original Longinus observation chamber using the established visual system.

### Observation Interface

The observation region may present experiment identifier, experiment title, description, current state, meaningful inputs, meaningful outputs, parameters, and selection controls.

System information must describe real experiment data or application state.

Do not generate fake technical readings solely for atmosphere.

### Experimental Chamber

The experimental chamber is a flexible visual and interactive stage.

It may contain interactive 3D models, Blender motion studies, shader experiments, game mechanics, physics experiments, interaction prototypes, particle systems, or technical visualizations.

Experiments may define experiment-specific cameras, lighting, controls, and rendering behavior.

Do not force every experiment to use the Spear of Longinus.

### Experiment Selection

Experiments should be selected through the observation interface.

The spear is not required to act as the primary navigation mechanism within the Playground.

When the active experiment changes, the chamber may visually terminate, clear, reconfigure, and initialize the next experiment.

Any displayed system state should correspond to real application state.

Avoid fake initialization delays when no meaningful loading or setup is occurring.

### Boundary

The visual boundary between the observation interface and experimental chamber is conceptually important.

The interface represents observation and control.

The chamber represents active experimentation.

Experiments may intentionally react to, distort, or cross this visual boundary when the behavior is meaningful to the experiment.

Use boundary disruption sparingly and deliberately.

The Playground is the region of Longinus where experimental interaction may be less restrained than the rest of the portfolio.

## About

**Current status: partially implemented.** The five chapters, active-chapter detection and navigation, local trajectory and influence selection, seven-photo carousel, current-direction actions, feature-owned data/components/assets/CSS, and sticky About canvas exist. The spear remains temporary procedural geometry with provisional continuous scroll-responsive rotation. No About Figma reference or authored motion reference is stored, the experience has not received recorded manual accessibility/device validation, and official organization, role, and degree wording remains partly unverified.

The About page is the human center of Longinus.

It explains the person behind the projects, experiments, visual system, and Spear of Longinus.

The page should connect Jaylan's engineering background, game-development interests, teaching, professional experience, travel, photography, and personal influences into one coherent narrative.

It must not become:

* A duplicate résumé
* A conventional employment timeline
* A travel blog
* A standalone photography portfolio
* A ranked list of favorite games
* A collection of disconnected hobbies

Every chapter should contribute to understanding how Jaylan observes, teaches, designs, and builds.

The page should move conceptually from classification toward understanding.

It may begin with structured system information, records, and labels, but should gradually become more personal, visual, and reflective.

The intended progression is:

`classification → context → person → influence → direction`

### Chapter Structure

The About page should function as one continuous vertical narrative organized into five chapters:

1. Identity
2. Trajectory
3. Outside the System
4. Interactive Influences
5. Current Direction

Use standard browser scrolling as the foundation.

Do not require hard full-screen scroll snapping.

Subtle chapter alignment and chapter-aware transitions are allowed, but users must remain able to scroll naturally, revisit nearby content, and read at their own pace.

### Identity

Jaylan Wu is the primary identity presented by the About page.

The opening composition should make Jaylan's name, perspective, and areas of interest immediately understandable.

The three primary personal axes are:

* Engineering
* Game development
* Education

These axes establish the conceptual framework of the page without reducing Jaylan's identity to categories, percentages, or skill ratings.

The opening personal statement should communicate how Jaylan's interests in engineering, interactive systems, games, education, travel, and photography relate to one another.

Avoid beginning with a résumé summary, job-search statement, or long list of credentials.

Use `alter-egoist` sparingly.

`alter-egoist` is a subtle creative signature associated with Jaylan, not a second character, fictional persona, or replacement for his name.

It may appear in limited contexts such as:

* A small signature in the opening composition
* A personal note
* A photography-series credit
* A restrained metadata field
* A closing mark

Do not repeat `alter-egoist` throughout every chapter, record, photograph, or interface label.

The viewer should not need to decode fictional identity language to understand who the portfolio belongs to.

### Trajectory

The Trajectory chapter explains how Jaylan's education and selected professional experiences shaped his technical, creative, and educational direction.

It should focus on:

1. Computer Science and Computer Engineering degrees at New York University, including Game Engineering study
2. Early teaching and mentorship as a New York University Teaching Assistant
3. Technology Solutions work with the New York Mets
4. Software Engineering work at Major League Baseball
5. Instructional Facilities Management at New York University

The planned New York University Adjunct Professor record must remain unpublished until the role begins and its official title, course wording, and dates are verified. As of the repository audit on 2026-07-21, `EXP-005` appears only as incomplete future source material in `content/ABOUT_CONTENT.md` and is intentionally absent from the published runtime data.

These experiences should form a narrative progression rather than a complete chronological résumé.

The current published progression is:

`technical foundation → early teaching and mentorship → applied technology → software engineering → educational infrastructure and leadership`

#### College Education

Jaylan's education should establish the technical foundation of the chapter.

Present Computer Science and Computer Engineering as complementary areas of study that allowed him to work across:

* Software
* Hardware
* Computer architecture
* Embedded systems
* Graphics
* Interactive technology

Game Engineering should introduce the connection between technical systems, creativity, interaction, and play.

Do not present the degrees only as credentials.

Explain how the combination shaped Jaylan's approach to engineering and interactive work.

#### Teaching Assistant

The New York University Teaching Assistant record should establish teaching and mentorship as an early part of Jaylan's technical practice.

Focus on first-year engineering labs, multidisciplinary prototyping, adapting explanations to different experience levels, mentoring student teams, and developing technical and inclusive instructional practice.

Keep course, tool, and date wording aligned with verified source material rather than expanding the record into a complete teaching résumé.

#### New York Mets

The New York Mets experience should emphasize technology within physical, operational, employee-facing, and fan-facing environments.

Focus on the intersection of:

* Software
* Hardware
* People
* Physical spaces
* Venue operations
* Technology adoption

The experience may reference relevant systems, but the About page should prioritize what Jaylan learned about usability, trust, operational context, and real-world implementation.

Detailed technical work should remain within Projects when appropriate.

#### Major League Baseball

The Major League Baseball experience should communicate Jaylan's development as a software engineer working on internal organizational systems.

Relevant themes include:

* Modernizing legacy systems
* Full-stack development
* Internal tooling
* Automation
* Operational reliability
* Cloud infrastructure
* Supporting time-sensitive workflows
* Collaboration with stakeholders

The About page should focus on the engineering perspective developed through this work.

Do not reproduce detailed technical case studies or every résumé bullet.

Related project details may be linked when those case studies exist.

#### Instructional Facilities Manager

The Instructional Facilities Manager experience should connect technical operations with education.

Focus on the systems, spaces, equipment, documentation, and support required to create reliable instructional environments.

Relevant themes include:

* Technical operations
* Instructional infrastructure
* Reliability
* Resource coordination
* Leadership
* Supporting students and instructors

This role should communicate that effective education depends on infrastructure that may become invisible when it functions well.

#### Adjunct Professor

**Deferred content direction:** once the role has begun and the record is verified, the Adjunct Professor experience should represent formal teaching as a meaningful part of Jaylan's professional identity.

Focus on:

* Teaching technical and engineering material
* Explaining complicated systems clearly
* Mentoring students
* Supporting confidence and independence
* Connecting concepts to practical implementation
* Learning through the act of teaching

The chapter should communicate that education is not separate from Jaylan's engineering practice.

Teaching influences how he understands, designs, documents, and evaluates technical systems.

#### Experience Presentation

Each experience should communicate:

* The environment or context
* Jaylan's role
* A defining responsibility or contribution
* What the experience taught him
* How it influenced his current direction
* The personal axes connected to it

The primary personal axes remain:

* Engineering
* Game development
* Education

Supporting labels such as operations, infrastructure, mentorship, reliability, and human-centered technology may appear as metadata.

Do not introduce additional primary axes or arbitrary percentage scores.

Work-experience writing should be concise and reflective.

Avoid dense résumé bullets and exhaustive responsibility lists.

The same experience may appear on About and Projects only when each page answers a different question:

* About explains how the experience shaped Jaylan.
* Projects explains what was built and how the system worked.

### Outside the System

The Outside the System chapter presents travel and photography as meaningful parts of Jaylan's personal and creative perspective.

It should explain how travel encourages:

* Observation
* Curiosity
* Independence
* Attention to unfamiliar environments
* Awareness of architecture, transit, public spaces, signage, and atmosphere

Photography should show how Jaylan notices and documents:

* Spaces
* Architecture
* Landscapes
* Transit
* Typography
* Environmental details
* People within larger environments
* Quiet or transitional moments

Do not treat this chapter as a list of vacations or a generic collection of hobbies.

Travel and photography should contribute to understanding how Jaylan observes the world and how that perspective relates to his technical and creative work.

Music, games, and other interests may appear as supporting personal context, but should not compete with the primary travel and photography narrative.

Music already has a dedicated page and does not require another full presentation within About.

#### Photography Collection

Begin with a small curated collection of approximately six to twelve photographs.

Prefer a deliberate sequence of strong images over a large gallery.

The collection may contain:

* A small number of featured photographs
* Supporting photographic records
* Real location and year metadata
* Optional camera or lens information
* Short personal captions

Only display metadata that is accurate and meaningful.

Do not generate fictional coordinates, EXIF data, or technical readings for atmosphere.

Do not expose dense capture metadata unless it contributes to the viewing experience.

#### Archive and Selected States

The photography experience may initially present images as structured capture records.

Archive-state presentation may use:

* Controlled cropping
* Slightly reduced saturation
* Restrained brightness or contrast adjustments
* Structured metadata
* Consistent framing
* Subtle overlays required for readability

When a photograph is focused or expanded, the interface should allow it to become more personal and visually open.

Selected-state presentation may:

* Restore the photograph's natural or intentionally edited color
* Increase its visual scale
* Reduce system-interface prominence
* Reveal a personal caption
* Preserve more of the original composition and aspect ratio

The conceptual transition is:

`capture record → selected image → personal memory`

Apply visual treatment non-destructively through CSS, overlays, framing, and motion.

Do not permanently alter source photographs solely to make them match the Longinus palette.

Do not apply one aggressive red, orange, or lavender tint to every image.

Standardize presentation behavior while preserving the individual character of each photograph.

Use highlight orange for active system selection where appropriate.

Lavender may support personal captions and reflection.

Primary red should not be used as a generic photograph-selection color.

### Interactive Influences

Interactive Influences should function as a distinct chapter connecting Jaylan's personal interests to the kind of work he wants to create.

Present approximately three to six selected games.

The purpose is not to rank favorites or provide reviews.

Each selection should explain a specific influence, such as:

* Interface and visual direction
* Systems design
* Worldbuilding
* Atmosphere
* Environmental storytelling
* Character writing
* Mechanical expression
* Music and sound
* Player agency
* Technical or creative ambition

Focus on what Jaylan learned from each experience and how it shaped his interest in game development and interactive technology.

Prefer concise original commentary over large collections of copyrighted screenshots, logos, character artwork, or promotional assets.

Do not reproduce a game's identifiable interface composition within Longinus.

The chapter should move the narrative from observation and personal influence toward creation and future direction.

### Current Direction

The Current Direction chapter brings the About narrative from Jaylan's past experiences and personal influences into the kind of work he wants to pursue next.

It should explain how engineering, game development, education, travel, photography, and interactive influences contribute to one connected direction.

The chapter should not function as a rigid career plan or list of aspirational job titles.

It should communicate qualities Jaylan wants his future work to combine:

* Strong software engineering
* Interactive and game-oriented systems
* Expressive visual and motion design
* Real-time or spatial technology
* Maintainability and performance
* Clear technical communication
* Teaching and mentorship

Jaylan's interest in creative and interactive work should not replace his identity as a software engineer.

Reliable engineering and expressive design should be presented as mutually reinforcing.

Teaching should remain part of Jaylan's future direction rather than appearing only as a previous role.

The chapter may express a long-term interest in continuing to teach, mentor, and connect professional engineering practice with higher education.

Travel, photography, and selected games may be referenced as influences on Jaylan's attention to space, atmosphere, composition, interaction, and detail.

Do not force every personal interest into a direct professional justification.

The relationship should remain credible and personal.

#### Longinus

Current Direction may briefly frame Longinus itself as an expression of Jaylan's developing interests.

Longinus brings together:

* Software engineering
* React and TypeScript
* Real-time 3D
* Authored motion
* Game-inspired interaction
* Visual-system design
* Personal storytelling
* Technical experimentation

Do not turn this into a second Longinus project case study.

Use it to explain why the portfolio takes the form of an interactive system rather than a conventional personal website.

#### Current Areas of Exploration

The chapter may identify a restrained set of real areas Jaylan is currently exploring, such as:

* Interactive software
* Game systems
* Real-time graphics
* Three-dimensional web experiences
* Creative development
* Technical education

Do not include technologies or fields solely because they are fashionable.

#### Closing

The final writing should be concise, reflective, and forward-looking.

It should leave the viewer with an understanding of:

* What Jaylan values
* What kind of work he wants to create
* How his interests connect
* Why education remains important
* What Longinus represents within that direction

Practical actions such as viewing Projects, opening a résumé, making contact, or returning Home may appear after the closing statement.

These controls should remain part of the 2D interface.

### Spear Role

The current About scene proves feature ownership and scroll-aware rendering, but it is staged rather than final: normal-motion mode applies continuous axial rotation whose velocity responds to scroll direction and speed, while reduced-motion mode damps toward chapter-specific axial values. This does not yet satisfy the authored chapter-posture direction below. Preserve the implementation seam, but do not treat its constant rotation or pose values as approved motion.

The Spear of Longinus should remain present throughout the About experience, but its role should differ from Home, Projects, Music, and Playground.

On About, the spear acts as:

* A quiet witness
* A spatial anchor
* A connective thread
* A representation of narrative progression

It should respond primarily to chapter progression rather than individual hover states, experience records, photographs, or game selections.

Its motion should be:

* Slow
* Reflective
* Smooth
* Spatial
* Restrained
* Occasionally still for extended periods

Avoid:

* Thrusting
* Target locking
* Impact
* Pointer following
* Reactions to every local interaction
* Constant decorative spinning
* Red interface rupture

Each chapter should define an intentional spear role:

* Identity: quiet anchor
* Trajectory: directional spine
* Outside the System: environmental frame
* Interactive Influences: emerging direction
* Current Direction: forward vector

During Identity, the spear may remain partially cropped, stable, or quietly suspended.

During Trajectory, it may evolve through position, depth, and rotation as a representation of development.

During Outside the System, it may recede into depth, frame negative space, sit behind photographs, or remain still.

During Interactive Influences, it may begin moving toward a more directional posture without targeting individual games.

During Current Direction, it should settle into a resolved diagonal or align with a distant vanishing point.

The final state should suggest continuation and intention without automatically initiating navigation.

The spear should remain recognizable as the Longinus motif without overpowering personal writing, work experiences, photography, or game commentary.

### Interaction and Scroll Model

The About page should use standard vertical browser scrolling.

On desktop, it may use a persistent or sticky Three.js region while narrative content scrolls.

The spear may remain technically present throughout the page while becoming:

* Partially cropped
* Repositioned
* Moved into depth
* Obscured by composition
* Visually secondary
* Still for extended periods

The balance between content and 3D space may change by chapter.

Do not require one fixed split-screen ratio for the entire page.

#### Chapter State

Use stable identifiers for the five chapters:

* `identity`
* `trajectory`
* `outside-system`
* `interactive-influences`
* `current-direction`

The active chapter may coordinate:

* Chapter-interface state
* Spear posture
* Camera relationship
* Lighting mood
* Ambient treatment
* Chapter navigation

Prefer explicit active-chapter state over tightly coupling the scene to raw scroll coordinates.

Continuous chapter progress may influence restrained interpolation, depth, lighting, or parallax when useful.

Do not map every scroll pixel directly to dramatic spear movement.

#### Local Interaction Ownership

Individual experience records, photographs, and game-influence records should use local 2D interaction state.

Experience records may reveal:

* Reflection
* Personal axes
* Contributions
* Related projects

Photographs may transition between archive and selected states.

Interactive-influence records may reveal concise personal commentary.

These local interactions should not trigger homepage-style spear targeting or impact behavior.

#### Chapter Navigation

The page may include restrained chapter navigation displaying:

* Identity
* Trajectory
* Outside the System
* Interactive Influences
* Current Direction

Chapter navigation should:

* Indicate the active chapter
* Allow keyboard-accessible movement to each section
* Remain visually secondary to the main content
* Avoid imitating homepage navigation

Use highlight orange for active system state where appropriate.

Do not use primary red as a generic chapter-selection color.

### Responsive Interpretation

On narrow layouts, the spear does not need to remain permanently fixed beside the content.

Mobile may:

* Alternate between chapter content and intentional spear moments
* Use a smaller sticky scene region
* Present the spear at chapter transitions
* Reduce ambient system information
* Give photography additional width

Preserve:

* Spear narrative presence
* Chapter identity
* Clear content order
* Photography scale
* Accessible controls
* Readable personal writing

Do not sacrifice essential reading space merely to keep the full spear visible at all times.

### Reduced Motion

For reduced-motion preferences:

* Remove continuous scroll-linked movement where possible
* Reduce parallax and camera travel
* Use shorter transitions between chapter postures
* Preserve understandable chapter and spear state
* Allow the spear to remain still in authored poses

The About narrative must remain coherent without large spatial animation.

### Content and Data Architecture

Keep About content, presentation, interaction state, and Three.js behavior clearly separated.

Do not encode all five chapters, experiences, photographs, and game influences directly inside one large page component.

The About feature should own its:

* Chapter components
* Experience-record components
* Photography components
* Interactive-influence components
* Page-specific data
* Local interaction state
* Active-chapter logic
* Persistent Three.js scene
* About-specific spear configurations

Prefer the smallest structure that remains clear.

Do not create every possible component or data abstraction before real content requires it.

#### Experience Data

Experience records may define:

* Stable identifier
* Organization
* Role or degree
* Period
* Context
* Defining responsibility or contribution
* Personal reflection
* Personal axes
* Supporting themes
* Related project identifiers

Do not fill About records with every résumé bullet.

#### Photography Data

Each photograph should include:

* Stable identifier
* Image source
* Useful alternative text
* Location
* Year

Optional fields may include:

* Country
* Personal caption
* Camera
* Lens
* Focal length
* Orientation
* Featured status

Only display optional metadata when it improves the experience.

Preserve original edited photographs and apply archive treatment non-destructively.

#### Interactive-Influence Data

Each selected game influence may define:

* Stable identifier
* Game title
* Release year
* Relevant influence categories
* Jaylan's original reflection

Do not build a rating, ranking, or review system.

#### State Ownership

Use shared About state only for information that coordinates separate systems, such as the active chapter.

Keep local state within the chapter that owns it.

Examples include:

* Focused experience
* Selected photograph
* Focused game influence

Do not create one large global About state object solely because the page contains multiple chapters.

Continuous Three.js values such as spear interpolation, camera movement, depth, and lighting transitions should remain within React Three Fiber rendering patterns rather than frame-by-frame React state.

About content should remain editable without requiring changes to spear animation or scene logic.


# Technical Stack

Prefer the existing stack and established project patterns.

The current implemented stack is:

- React 19 and React DOM
- TypeScript 5 with strict no-emit configuration
- Vite 8
- Three.js
- React Three Fiber
- Feature-owned CSS plus global CSS tokens and foundations
- ESLint with TypeScript, React Hooks, and React Refresh rules
- Yarn 4.17.1 with the `node-modules` linker

The dependency manifest also contains Drei, React Three Postprocessing, React Three Rapier, and GSAP, but current source does not import them. Treat them as installed but unused, not as established implementation patterns. Motion / Framer Motion is not installed. No Blender-authored GLTF or GLB asset is present.

Use an already installed dependency only when it directly supports approved work. Do not add Motion, a router, a state library, a test framework, or another package without a concrete need and an in-scope request.

## Technology Responsibilities

Use React and the DOM for interface structure, semantic content, typography, navigation, and accessible controls.

Use TypeScript to define application data, interaction state, content models, and contracts between interface systems.

Use React Three Fiber for visually meaningful 3D scenes, models, cameras, lighting, and interactive spatial behavior.

Use Drei when its installed utilities simplify standard React Three Fiber behavior without obscuring important project-specific logic; current scenes use React Three Fiber and Three.js directly.

Use CSS or browser-native animation for current DOM behavior. Motion / Framer Motion may be evaluated later when a reviewed interaction clearly benefits from it; it is not a current dependency.

Use Blender for future 3D asset creation and authored motion references or exported animation clips when supplied.

Do not move semantic interface content into WebGL solely to achieve a visual effect.

Do not reproduce 3D behavior in the DOM when the behavior fundamentally depends on spatial position, camera relationship, lighting, or model animation.

Coordinate DOM and Three.js behavior through shared application or interaction state.

Avoid introducing additional frameworks, animation libraries, or state-management systems unless they clearly simplify an existing problem.

# Engineering Principles

Prioritize readability, maintainability, simplicity, performance, clear ownership of behavior, and reversible implementation decisions.

Visual complexity does not justify unnecessary architectural complexity.

Prefer the simplest architecture that can clearly express the intended interaction.

Avoid premature abstraction, large monolithic components, deep prop drilling, duplicate interaction logic, magic numbers without named meaning, anonymous exports, generic systems designed for hypothetical future requirements, large animation controllers that own unrelated page behavior, and coupling page-specific 3D scenes to global application behavior.

Prefer named exports, small focused components, data-driven UI, composition over inheritance, explicit interaction state, clear separation between DOM interface and Three.js scene responsibilities, page-specific behavior remaining close to the page or feature that owns it, and custom hooks only when they improve clarity or reuse real behavior.

Abstract behavior after a pattern becomes clear.

Do not create a generic animation, scene, experiment, or interaction framework solely because multiple future pages may eventually need one.

# State Management

Start simple.

Use local React state for component-specific behavior, lifted React state when a small number of nearby components coordinate, Context when state must coordinate separate interface systems within a meaningful feature or application boundary, and small reducers when state transitions are easier to understand as explicit events and phases.

Do not introduce Redux, Zustand, MobX, or another global state library unless the project's complexity genuinely requires it.

State should live as close as practical to the systems that use it.

Page-specific state should remain within the relevant page or feature.

Use shared state when separate systems must coordinate around the same user intent or interaction phase.

Prefer explicit state such as `phase: focused` and `target: projects` over combinations of duplicated booleans when those booleans represent one coordinated interaction.

Do not store frame-by-frame animation values in React state.

Continuous values such as model rotation, camera interpolation, pointer tracking, and other high-frequency Three.js values should use rendering patterns appropriate to React Three Fiber.

Each Playground experiment may own its own internal state and parameters.

Do not create one universal experiment-state schema that attempts to represent every possible future experiment.

# Animation Principles

Animation in Longinus should communicate state, physical character, hierarchy, or transition.

Motion is part of the interface language.

Do not add animation solely to prevent the interface from feeling static.

Stillness is intentional.

Moments of restraint should create contrast for moments of impact.

## Motion Systems

System interface motion should feel precise, controlled, brief, and deliberate.

Spear motion should feel weighted, physical, curved when appropriate, anticipatory, and momentum-driven.

Impact motion should be fast, forceful, brief, and visually distinct.

Content motion should remain calm, readable, and restrained.

Do not use high-energy impact motion for routine hover or metadata changes.

Once explanatory content is presented, allow the viewer to read and understand it.

## Authored Motion

When Blender animations, viewport recordings, renders, or other supplied motion references are provided, preserve their intended timing, anticipation, weight, and physical character.

Do not automatically replace authored motion with generic spring animation or procedural interpolation.

Exported animation clips may be used directly when they reproduce the intended result effectively.

Procedural motion may be used when behavior must respond dynamically to interaction.

Hybrid approaches are allowed.

For example, a spear may procedurally orient toward a focused target and then transition into an authored impact animation when the user commits.

## Coordination

The 2D interface and Three.js scene may respond to the same interaction state, but they do not need to move identically.

Coordinate timing and intent rather than applying the same easing curve to every element.

Use animation completion events, shared interaction phases, or explicit callbacks when systems must coordinate.

Avoid duplicated arbitrary timeout values as the primary synchronization mechanism.

`src/features/projects/projectTransition.ts` is a known staged exception: named timeouts currently advance the archive through commitment, impact, transition, and hash navigation. Keep its provisional status visible. Replace or retune it only when a reviewed motion reference or focused transition task supplies a better completion signal.

## Reduced Motion

Respect `prefers-reduced-motion`.

Reduced-motion behavior should preserve interaction state, navigation clarity, content hierarchy, route completion, and meaningful feedback.

Reduce or remove large spatial movement, camera travel, repeated idle motion, rapid distortion, strong overshoot, and non-essential environmental animation.

Do not remove essential interaction feedback.

# Accessibility

Accessibility is a functional requirement.

The visual and interactive character of Longinus should not prevent users from navigating the portfolio or accessing its primary content.

Requirements include keyboard navigation, visible focus states, semantic HTML, accessible labels, sufficient color contrast, reduced-motion support, clear interaction state, and touch-accessible alternatives where hover is used on desktop.

Do not rely on color alone to communicate selection, focus, status, or interaction phase.

Use real buttons, links, headings, lists, and other semantic elements when they represent those behaviors.

Do not replace semantic interface controls with Three.js meshes solely for visual consistency.

Primary navigation and interactive content must remain keyboard accessible.

Keyboard focus should produce a meaningful equivalent to pointer focus.

For spear-driven navigation, keyboard focus may enter the `focused` interaction phase and cause the spear to orient toward the focused target.

Activation through Enter or Space should commit the interaction when appropriate.

Longinus is fundamentally a 3D interactive portfolio.

The complete visual experience does not need to be reproduced when WebGL is unavailable.

However, primary navigation and portfolio content must remain accessible.

If a required Three.js scene cannot initialize, preserve semantic navigation, page identity, primary content, project information, and relevant external actions; avoid trapping the user behind the boot experience; and provide a restrained fallback state that fits the Longinus visual system.

Do not build a separate CSS recreation of the complete 3D experience.

3D interactions that expose essential information must provide an accessible DOM equivalent.

Playground experiments may be inherently visual, spatial, or pointer-driven.

Each experiment should be evaluated according to the behavior it demonstrates.

The Playground must still provide accessible experiment selection and descriptions even when a specific chamber experiment cannot be fully experienced through assistive technology.

# Performance

Assume users may have mid-range hardware.

Longinus is visually ambitious, but visual complexity does not justify unnecessary rendering or asset cost.

Performance is part of the interaction design.

Prioritize the assets required for the boot experience and homepage.

Do not load every project demonstration, Playground experiment, music asset, or page-specific 3D scene during initial application entry.

Prefer route-level code splitting, lazy loading, dynamic imports for heavy page-specific systems, on-demand loading of project-specific 3D assets, on-demand loading of Playground experiments, and intentional preloading when the next likely interaction is known.

Preload strategically.

Do not preload the entire site solely because assets may eventually be visited.

Optimize Three.js work for reused materials and geometries when genuinely shared, bounded device pixel ratio, minimal unnecessary allocations inside animation loops, efficient `useFrame` behavior, limited unnecessary scene updates, appropriate texture resolution and model complexity, and disposal of resources that are no longer required.

Do not use React state for frame-by-frame animation values.

Page-specific scenes and Playground experiments should own their rendering behavior and resources.

Do not keep every page's Three.js scene mounted solely to make route transitions easier.

Optimize Blender exports and textures before compensating for unnecessarily heavy assets through application complexity.

When appropriate, remove unused geometry and animation clips, reduce excessive texture resolution, compress production assets, avoid unnecessary duplicate materials, and validate model scale and transforms before export.

When a visual effect is expensive and non-essential, consider reducing its cost on constrained devices while preserving composition and interaction meaning.

Profile performance when adding complex Three.js scenes, post-processing, large Blender assets, particle systems, multiple animated models, or interactive Playground experiments.

# Styling

Use the existing design-token system whenever possible.

When implementing a Figma design, extract repeated values into the token system when they represent a reusable visual rule.

Do not create a token for every one-off measurement.

Prefer semantic tokens and visual roles over tokens named after individual pages or components.

## Color

Follow the palette and semantic rules in **Visual System → Color Roles**. Do not redefine page-local color meanings that conflict with those shared roles.

## Typography

Typography is part of the page composition.

Longinus may use an Evangelion title-card-inspired display typeface when a legally usable font asset has been selected and added to the project.

When an approved display font exists in the repository, treat it as the primary typeface for title-card-inspired display typography unless the supplied Figma reference specifies otherwise.

Do not substitute the approved display font with a generic condensed or system font solely for convenience.

Typography should follow the established visual roles:

- Display
- System
- Content
- Identifier

Display typography carries the strongest title-card influence and may use extreme scale, unconventional line breaks, tight line height, vertical composition, controlled cropping, and large differences in character and word scale.

Do not use the display typeface for all interface text.

System typography should remain structured, precise, and highly legible.

Content typography must prioritize readability.

Identifiers may function as graphic compositional elements.

Semantic HTML requirements still apply regardless of visual role.

If an exact approved font is unavailable, identify the limitation before introducing an unrelated replacement.

## Layout and Composition

Prefer CSS Grid and Flexbox for structural layout.

Absolute positioning is appropriate when intentional overlap, title-card composition, cropping, or art direction requires it.

Do not convert distinctive compositions into conventional centered containers solely to simplify implementation.

Use responsive CSS intentionally.

Avoid large collections of unexplained pixel values.

## Effects

Use visual effects with restraint.

Distortion, blur, bloom, glow, scan lines, noise, and glass treatment must have a compositional, interaction, environmental, or state-related purpose.

Do not add effects solely to make the interface appear futuristic.

The Playground observation boundary may use subtle environmental treatment to distinguish the chamber from the observation interface.

Do not default to generic glassmorphism.

## CSS Ownership

Keep global styles focused on design tokens, typography foundations, resets, application-wide behavior, and shared visual primitives.

Keep page-specific composition and distinctive interaction styling close to the feature or page that owns it.

Do not allow `index.css` to become a collection of unrelated page-specific rules.

# Repository Organization

Organize code by feature and responsibility.

Prefer page or feature ownership over large global folders containing unrelated components.

The established structure is:

```text
.
├── content/
│   └── ABOUT_CONTENT.md
├── design/figma/
│   ├── README.md
│   ├── foundations.md
│   ├── motion/
│   └── references/
├── public/
└── src/
    ├── components/
    │   ├── spear/
    │   └── three/
    ├── features/
    │   ├── about/
    │   │   ├── assets/
    │   │   └── components/chapters/
    │   ├── home/
    │   └── projects/
    ├── hooks/
    ├── styles/
    └── types/
```

Feature folders may contain their own components, hooks, scene elements, animation logic, types, utilities, and styles.

Keep behavior close to the feature that owns it.

Shared components should represent genuinely reusable interface behavior or visual primitives.

Do not move a component into a shared folder solely because it may theoretically be reused later.

Do not create empty Music, Playground, application, data, or scene directories to imitate a conceptual architecture. Add a feature boundary when implementation of that approved feature actually begins.

## Three.js Scenes

Reusable 3D assets or behavior may live within shared scene infrastructure when multiple features genuinely depend on them.

Page-specific or project-specific scene behavior should remain close to the feature that owns it.

The primary Spear of Longinus asset may be shared.

Its page-specific staging, camera behavior, and interaction logic should remain within the relevant feature when those behaviors differ.

Do not create one universal scene configuration for every page.

## Project Data

Project content should be data-driven where practical.

The current `Project` type and three records live in `src/features/projects/projectData.ts`. The model currently contains `id`, `slug`, `title`, `shortDescription`, `description`, `technologies`, `role`, `year`, and `status`. The records are provisional and must not be presented as a verified final archive.

Separate project content from presentation logic.

Project data may define identifier, name, type, year, role, technologies, personal axes, narrative sections, demonstration type, and relevant assets.

Do not encode every project as a large page component containing duplicated layout and metadata logic.

Allow distinctive projects to provide specialized demonstration behavior when required.

## Playground Experiments

Playground experiments should remain independently owned.

This section is planned architecture. No Playground directory or experiment implementation currently exists.

A conceptual structure may resemble:

```text
src/
└── features/
    └── playground/
        └── experiments/
            ├── spear-motion/
            ├── shader-study/
            └── interaction-study/
```

Each experiment may own its scene, state, parameters, controls, observation data, and supporting assets.

Do not create a universal experiment implementation that attempts to represent every experiment type.

The Playground should coordinate experiment discovery, selection, and chamber lifecycle without owning every experiment's internal behavior.

# Coding Standards

Use TypeScript consistently.

Avoid `any` unless an external API or library genuinely prevents a more accurate type.

Prefer explicit domain types for meaningful Longinus concepts such as interaction phases, navigation targets, personal axes, project records, music records, and Playground experiment metadata.

Do not create types solely to wrap primitive values without improving clarity.

Prefer small, focused components and functions.

Extract helpers when they clarify intent, remove meaningful duplication, isolate a calculation, or make interaction logic easier to test or understand.

Do not extract every small expression into a utility function.

Keep page-specific logic close to the feature that owns it.

Use names that describe responsibility and intent.

Prefer names such as `HomeSpear`, `ProjectArchive`, `ObservationChamber`, and `useHomeInteraction` over generic names such as `SceneObject`, `MainContainer`, `AnimationHandler`, or `Utils`.

Animation names should describe visual or interaction intent when possible.

Avoid unexplained magic numbers.

Named values should communicate visual or physical intent, such as `SPEAR_FOCUS_DAMPING`, `IMPACT_DURATION_MS`, or `CHAMBER_CAMERA_DISTANCE`.

Keep constants near the behavior they control unless they are genuinely shared.

Comments should explain why a technical decision exists, why an unusual implementation is required, important interaction timing relationships, browser or library limitations, performance-sensitive behavior, or intentional divergence from a supplied visual or motion reference.

Do not use comments to restate obvious code.

Remove dead code, unused imports, abandoned animation experiments, accidental console logging, duplicate styles, and unused assets or animation clips.

When preserving experimental code is valuable, move the experiment into the Playground or version history rather than leaving inactive code inside production features.

Follow the repository's existing linting, formatting, and TypeScript configuration.

Do not weaken TypeScript, ESLint, or build rules solely to make a new implementation pass.

Before considering a source task complete, run the relevant commands that actually exist: `corepack yarn typecheck`, `corepack yarn lint`, and `corepack yarn build`. There is no automated test command. Do not claim automated test coverage.

# Workflow

Before implementing a task:

1. Read the relevant task and project instructions.
2. Inspect the existing feature, components, styles, scene behavior, and data involved.
3. Inspect supplied Figma references before implementing static interface composition.
4. Inspect supplied Blender animations, renders, viewport recordings, or motion references before implementing referenced 3D motion.
5. Identify which behavior belongs to the DOM interface and which belongs to the Three.js scene.
6. Identify the meaningful interaction state shared between systems.
7. Reuse established project patterns where they remain appropriate.
8. Choose the smallest focused implementation that can prove the intended result.

Do not begin by creating new abstractions or dependencies.

## Visual Implementation Workflow

When implementing a visually directed feature:

1. Understand the full composition.
2. Implement the primary static 2D structure.
3. Stage dominant 3D elements within the intended composition.
4. Compare scale, spacing, typography, silhouette, and visual hierarchy against the reference.
5. Correct the largest visual differences.
6. Define and implement the required interaction states.
7. Add system motion.
8. Add spear or authored 3D motion.
9. Coordinate impact and transition behavior.
10. Implement responsive reinterpretation.
11. Add accessibility and reduced-motion behavior.
12. Profile and polish the final interaction.

Do not begin with detailed animation before the static composition and 3D staging are credible.

Do not polish minor decorative details while major compositional differences remain.

## Motion Reference Workflow

When a Blender or motion reference is provided:

1. Identify the intended starting and ending states.
2. Identify anticipation, acceleration, impact, follow-through, and recovery where present.
3. Determine whether the motion must react continuously to user input.
4. Determine whether an exported GLTF animation clip, procedural animation, or hybrid implementation best preserves the reference.
5. Implement the smallest representative interaction.
6. Compare the result against the supplied motion reference.
7. Adjust timing and physical character before adding secondary effects.

Do not translate Blender keyframes mechanically into application code without understanding the visual intent of the motion.

Do not replace distinctive authored timing with default easing values without a reason.

## Figma and Blender Responsibilities

Use Figma to define and evaluate static 2D composition, typography, hierarchy, spacing, color application, interface regions, and major responsive intentions when supplied.

Use Blender and motion references to define and evaluate 3D asset appearance, silhouette, authored motion, physical character, camera relationships shown in the reference, and timing and pacing of intentional 3D sequences.

Use the codebase to implement responsive application behavior, interaction state, accessibility, asset lifecycle, DOM and Three.js coordination, dynamic and procedural behavior, and performance constraints.

Do not expect Figma to define every interaction microstate.

Do not expect Blender to define application state or navigation behavior.

## Focused Changes

Keep changes focused on the requested feature.

Avoid broad unrelated refactors unless an existing architectural problem directly blocks the implementation.

If a broader refactor is genuinely required, identify the specific coupling or limitation being resolved.

Preserve working behavior outside the requested scope.

Do not rewrite an established feature solely to make it match a preferred personal coding style.

## Validation

Before considering a task complete:

- Verify the requested interaction.
- Verify relevant keyboard behavior.
- Verify reduced-motion behavior when animation changed.
- Verify the intended desktop composition.
- Check the relevant narrow or mobile interpretation.
- Confirm Three.js resources and animation loops are not unintentionally active after leaving the feature.
- Run the relevant type-check, lint, and build commands available in the repository. Run tests only if a future task adds a real test script and configuration.
- Review the final result for dead code and abandoned implementation paths.

When implementing from a visual or motion reference, explicitly compare the result against that reference before declaring the work complete.

## Reporting

When summarizing completed work, explain what changed, important implementation decisions, any meaningful divergence from the supplied design or motion reference, validation performed, and remaining known limitations.

Do not describe unverified behavior as complete.

# When Unsure

When implementation details are not explicitly defined, preserve the established Longinus concept, visual system, interaction model, and feature responsibilities.

Use the available sources of truth according to their roles:

- Figma defines static 2D composition.
- Blender and supplied motion references define authored 3D motion and physical character.
- The interaction specification defines user intent, phases, and state transitions.
- The Longinus visual system defines typography, color roles, interface language, and compositional principles.
- The existing codebase defines current engineering constraints and established implementation patterns.

Do not invent major product behavior solely to complete an ambiguous task.

## Make Small Decisions

Codex may make small, reversible implementation decisions when the intended outcome is clear.

Examples include choosing a maintainable component boundary, selecting an appropriate semantic HTML element, defining a local TypeScript type, choosing between CSS Grid and Flexbox, selecting a reasonable internal file name, adjusting minor responsive spacing, and using an established project animation pattern.

Prefer the smallest decision that preserves the intended visual and interaction result.

## Protect Product Direction

Do not independently decide to:

- Add new pages
- Remove planned pages
- Change the primary navigation model
- Replace the Spear of Longinus interaction concept
- Change the established color roles
- Introduce a new visual theme
- Change the relationship between Jaylan Wu, `alter-egoist`, and Longinus
- Add major external services or APIs
- Introduce a backend
- Add a global state-management framework
- Replace an approved Figma composition with a generic layout
- Replace distinctive authored Blender motion with unrelated animation

These decisions affect product direction or architecture and should be explicitly resolved.

## Resolve Conflicts

When references appear to conflict, identify the type of conflict.

Explain the conflict clearly.

Prefer the smallest reversible implementation that preserves the highest-priority intent.

Do not silently ignore one source of truth.

## Avoid Generic Defaults

When a detail is missing, do not automatically fall back to common portfolio or SaaS patterns.

Avoid introducing generic hero sections, rounded card grids, gradient backgrounds, glass panels, pill-shaped navigation, default spring animations, cyberpunk terminal decoration, or fake system data.

Use the established Longinus visual system to interpret missing details.

## Communicate Limitations

If an intended result cannot be reproduced accurately because of missing assets, missing font files, incomplete motion references, browser limitations, performance constraints, accessibility conflicts, or library limitations, state the limitation clearly.

Implement the closest maintainable result only when the divergence is understood.

Do not describe an approximation as an exact reproduction.
