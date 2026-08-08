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

# Documentation Ownership

This file is authoritative for durable product direction, the Longinus visual
and interaction systems, and repository-wide engineering constraints. Keep it
focused on rules that should remain true as implementation status changes.

Use the repository documentation according to these ownership boundaries:

- `AGENTS.md` owns product intent, global design and interaction rules,
  feature-level direction, engineering constraints, and conflict resolution.
- `content/ABOUT_CONTENT.md` owns exact About copy, editorial records,
  publication intent, and verification flags.
- `TASKS.md` owns implementation status, validation history, unresolved work,
  and recommended work order.
- `design/figma/README.md` owns the exported-reference handoff procedure,
  reference inventory, theme-aware reference naming, and frame implementation
  or approval status. The directory name records the authoring origin; it does
  not imply that implementation requires direct Figma access.
- `design/figma/foundations.md` owns audited visual measurements, current token
  mappings, and unresolved foundation decisions.
- `design/figma/motion/*.md` owns transition-specific sequences, provisional
  timing, completion conditions, and unresolved motion decisions.
- `design/experiments/*.md` records scoped art-direction studies and branch
  evidence. An experiment does not override this file's durable product
  direction or `TASKS.md` implementation status.
- The source code and package manifest own executable behavior, dependencies,
  routes, scripts, and runtime values.
- `README.md` is a concise GitHub-facing introduction and onboarding guide. It
  may summarize the other sources but must not override them.

Do not duplicate exact editorial copy, volatile implementation inventories,
dated validation results, or transition timings in this file. Link to the
owning document instead.

When documents drift, repair the owning source first and then update dependent
summaries. Product intent in this file and exact About editorial intent in
`content/ABOUT_CONTENT.md` take priority over a conflicting README summary.
Implementation claims must still be verified against source and recorded in
`TASKS.md`; product direction does not make a feature implemented.

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

Apply the structure-versus-disruption relationship defined above as the
primary visual rule throughout the system.

## Personal Axes

The portfolio represents three connected areas of interest:

- Engineering
- Game design
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

## Current Dark-Theme Color Roles

Use the established Longinus color tokens from `src/index.css`.
`design/figma/foundations.md` owns their audited values and current mappings;
the semantic roles below remain authoritative for the established dark
Longinus experience.

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

# Theme Direction

Longinus has one established default direction and one planned alternate art
direction. Theme support must preserve semantic application structure without
pretending that every visual or physical behavior maps one-to-one.

## Established Dark Theme

The default Longinus experience is the existing dark, Spear-driven system.
Its background, surface, foreground, muted, system-active, personal, and
disruption roles follow **Current Dark-Theme Color Roles**. The Spear remains
the recurring physical motif for this direction unless a later approved dark
reference changes its role within a specific feature.

## Planned Rei-Inspired Light-Mode Experiment

The planned light mode is a deliberate alternate interpretation rather than a
CSS inversion of the dark experience. Its direction includes:

- a white or off-white environment;
- pastel Rei-inspired blue as a major atmospheric and personal color;
- a controlled red derived abstractly from the classroom-uniform ribbon;
- Ramiel as the central motif of the experiment rather than a recolored Spear;
  and
- the option to reconsider typography when an approved light reference
  establishes a quieter direction.

Keep the underlying Longinus content, semantic DOM, information architecture,
routes, accessibility behavior, and feature ownership recognizable where
practical. An approved light reference may intentionally reinterpret layout or
composition, but a dark reference is not an exact light-mode color or style
target.

Use shared semantic behavior where it is genuinely the same. Do not duplicate
entire feature implementations merely to support a theme, and do not force
Ramiel to inherit every Spear interaction. Theme-specific Home, Projects,
About, Music, and Playground scene staging, lighting, camera behavior, motion,
and asset loading remain feature-owned. Do not create one universal scene
configuration for both motifs.

Exported references must identify their theme. Accessibility, visible focus,
contrast, touch behavior, and reduced-motion requirements apply to every
theme. `TASKS.md` owns whether the experiment, a switcher, dark/light
coexistence, or theme-specific assets are actually implemented.

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

Figma is the design authoring environment. Exported visual-reference images
stored under `design/figma/references/` are the static visual implementation
source available to Codex. Implementation must not depend on the Figma API,
Figma MCP integrations, Dev Mode, paid implementation features, or a direct
Figma URL.

The exported image defines visible evidence such as page layout, relative
positioning, hierarchy, type scale and alignment, line breaks, negative space,
color application, borders, visible grid relationships, relative dimensions,
overlap, cropping, visible 2D/3D relationships, and the static state shown at
the reference viewport. Do not invent hidden implementation details that the
image cannot communicate.

Written interaction requirements and targeted follow-up answers define
behavior that a static image cannot show. Inspect existing implementation
patterns first. Ask a specific follow-up question before making a major
assumption about interaction, animation, state transitions, responsive
composition, touch behavior, layering, or Three.js motion. Minor reversible
details may be resolved from the reference, established Longinus rules, and
the smallest compatible implementation.

Exported references are not the source of truth for font families. The runtime font tokens in `src/index.css` define the font families used throughout the website:

- Display: `var(--font-display)` — `"Times New Roman Condensed"`, `"Times New Roman"`, `Times`, `serif`
- Sans/content: `var(--font-sans)` — `Arial`, `Helvetica`, `sans-serif`
- Mono/system/identifier: `var(--font-mono)` — `"SFMono-Regular"`, `Consolas`, `"Liberation Mono"`, `monospace`

These are system-font stacks rather than bundled assets, so the first installed face in each stack is used on a given device. Preserve the stacks themselves as the cross-site source of truth.

Blender animations, viewport recordings, renders, and supplied motion references define the intended visual character of authored 3D motion.

This file defines project philosophy, visual-system rules, interaction intent, and expected state transitions.

The existing codebase defines engineering constraints and established implementation patterns.

When an exported frame, screenshot, or design specification is provided for a page:

- Inspect the reference before writing UI code.
- Treat the design as the intended visual target, not loose inspiration.
- Use the established runtime font tokens for every typographic role. Do not import, bundle, imitate, or substitute a font solely because it appears in an exported reference.
- Match layout, scale, spacing, alignment, typographic hierarchy, font size, weight, line height, letter spacing, casing, wrapping, cropping, color roles, and visual weight as closely as practical using the established runtime stacks.
- Reuse existing design tokens and components when they can reproduce the design accurately.
- Do not invent additional cards, sections, buttons, labels, gradients, decorations, or content that are not present in the reference.
- Do not simplify a distinctive composition into a generic portfolio layout.
- Preserve intentional asymmetry, overlap, cropping, whitespace, and unusual positioning.
- Preserve the Longinus visual system when interpreting details not explicitly defined by the reference.
- If the design conflicts with an existing implementation, identify the conflict before making a broad architectural change.

Combine these sources according to **Documentation Ownership**. Use the
conflict procedure in **When Unsure → Resolve Conflicts** rather than silently
choosing whichever reference is most convenient.

## Motion Source of Truth

Motion references may be provided as Blender animations, viewport recordings, rendered clips, video references, or written interaction specifications.

Treat supplied motion references as intentional direction for timing, pacing, acceleration and deceleration, rotation, position, camera relationship, overshoot, follow-through, and overall physical character.

Do not replace distinctive authored motion with generic easing or arbitrary spring animations.

A Blender animation does not automatically require the animation to be exported and played directly in the browser.

Choose the implementation based on interaction requirements:

- Use procedural React Three Fiber animation when motion must react continuously to pointer, keyboard, navigation, or application state.
- Use exported GLTF animation clips when motion is authored, fixed, cinematic, or difficult to reproduce accurately through procedural animation.
- Use CSS or browser-native animation for DOM-based 2D interface elements
  unless a reviewed interaction establishes a concrete need for another
  approach.
- Coordinate 2D and 3D animation through shared interaction state rather than isolated timers and unrelated animation triggers.

When reproducing a supplied Blender motion procedurally, preserve the motion's visual intent and physical character as closely as practical.

If it is unclear whether an animation should be procedural or exported from Blender, explain the tradeoff before committing to an implementation.

## Implementing From Exported References

When implementing a page from an exported repository reference:

1. Inspect the full frame before editing code.
2. Identify the primary, system, navigation, and ambient interface regions.
3. Identify the dominant compositional relationships between typography, negative space, and 3D elements.
4. Map visible typographic roles to the established runtime font tokens; do not carry authoring-tool font-family names into the implementation.
5. Identify reusable components and visual-system roles.
6. Determine which elements belong to the DOM interface and which belong to the Three.js scene.
7. Implement the static 2D composition.
8. Stage required 3D elements so their position, scale, and camera relationship match the intended composition.
9. Define shared interaction states between the 2D interface and 3D scene.
10. Implement responsive behavior.
11. Implement system, content, and theme-appropriate 3D motif motion according
    to their defined motion characteristics.
12. Compare the result against the reference at the intended viewport size.
13. Fix the largest visual and compositional differences first.
14. Profile and polish the final interaction.

Do not treat the Three.js scene as a decorative layer added after the interface is complete.

When a 3D element is visually dominant, its scale, silhouette, camera framing, and relationship to typography are part of the page composition.

Prefer implementing one complete visual and interaction state before building every page state.

When reproducing a design, prioritize composition and dominant 2D/3D relationships, major spacing and proportions, typography scale, font size, line height, letter spacing, line breaks, alignment and cropping, 3D staging and silhouette, color-role accuracy, interaction-state clarity, then fine decorative details. Do not prioritize matching the reference's font family.

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

Unless **Theme Direction** or an approved theme-specific reference says
otherwise, this section defines the established dark Longinus experience.

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

Critical readiness may include the primary Spear of Longinus model, critical model textures and materials, the initial Three.js scene, and other assets required for the first interactive view. The established system-font stacks do not require bundled font-asset readiness.

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

The homepage should communicate that the portfolio belongs to Jaylan Wu and represents work across engineering, game design, and education.

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

These sections describe approved product direction, not implementation status.
Consult `TASKS.md` for what is implemented, staged, planned, deferred, or
unverified.

## Home

Follow **Core Experience → Homepage** and **Homepage Interaction**. Keep the
page focused on identity, atmosphere, interaction, and navigation rather than
long biography, experience history, project summaries, or large content
sections.

## Music

The Music page presents a curated collection of records selected by Jaylan.

It should feel more personal, atmospheric, and fluid than the primary system-oriented pages.

The page should not use Spotify as its primary content source.

Music content is intentionally curated and stored as portfolio data.

The desktop composition should generally include a visible collection of selectable records fanned from the left, a central or visually dominant 3D record player, current record and track information, a sculptural role for the Spear of Longinus, and structured music metadata.

Selecting a record should move or transition the selected record from the collection into the player while preserving spatial continuity.

When a record is active, the record rotates and the spear performs graceful authored motion. The spear may spin, tilt, drift, or orbit around the center composition.

The spear does not function as the turntable spindle.

The spear's motion should feel closer to a ballerina or suspended sculptural performance than a mechanical attachment.

Music is a curated display experience rather than an audio player unless a
future scoped request explicitly adds playback.

Do not implement audio controls, streaming integrations, playback APIs, or simulated playback state unless explicitly requested.

Use state language such as Selected Record, Current Record, Active Record, or Displaying.

Avoid labels such as `PLAYING`, `PAUSED`, playback progress, or elapsed time when no audio is being played.

Structure music data and components so audio playback may be introduced later without requiring a complete redesign.

The Music page may use secondary lavender more prominently to reinforce its personal and atmospheric role.

## Projects

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

Projects may relate to one or more personal axes: Engineering, Game design, and Education.

Do not force each project into a single category or display arbitrary percentage scores for each axis.

## Playground

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

The About page is the human center of Longinus. It connects Jaylan's
engineering background, game-development interests, teaching, professional
experience, travel, photography, and personal influences into one coherent
narrative.

`content/ABOUT_CONTENT.md` is authoritative for exact About copy, editorial
records, publication intent, and verification flags. Runtime data remains in
focused modules under `src/features/about/data/`; synchronize approved
editorial changes deliberately because Markdown edits do not update runtime
data automatically. Use `TASKS.md` for implementation and validation status,
and the exported-reference documents for approved compositions and measurements.

The About page must not become:

- A duplicate résumé
- A conventional employment timeline
- A travel blog
- A standalone photography portfolio
- A ranked list of favorite works
- A collection of disconnected hobbies

Every chapter should help explain how Jaylan observes, teaches, designs, and
builds. The narrative should move from classification toward understanding:

`classification → context → person → influence → direction`

### Chapter Structure

Use one continuous, naturally scrollable narrative with five chapters:

1. Identity
2. Trajectory
3. Outside the System
4. Interactive Influences
5. Current Direction

Use stable identifiers:

- `identity`
- `trajectory`
- `outside-system`
- `interactive-influences`
- `current-direction`

Each chapter owns a semantic heading and a stable section target. The current
composition keeps those headings visually hidden while the persistent
top-right Current chapter status and right-side navigation communicate the
active chapter. Right-side navigation must land each chapter's first content
region at the same shared viewport anchor. The compact navigator may shorten
only `Interactive Influences` to `Influences`.

Use standard browser scrolling. Do not require hard full-screen scroll
snapping. Chapter alignment and transitions may be subtle, but readers must be
able to move naturally, revisit content, and read at their own pace.

### Identity

Jaylan Wu is the primary identity. The opening composition should make his
perspective and the three connected personal axes immediately understandable:

- Engineering
- Game design
- Education

The axes are a conceptual framework, not categories, percentages, or skill
ratings. The opening should connect building systems, asking what systems can
make people feel, and helping other people understand them. Travel and
photography belong primarily in Outside the System.

Use `alter-egoist` as a restrained creative signature associated with Jaylan,
not as a fictional persona or replacement identity. Avoid résumé summaries,
job-search language, long credential lists, or identity language the viewer
must decode.

Keep all three axis statements available without hover. Preserve the deliberate
desktop composition, hierarchy, authored wrapping, negative space, shared
chapter landing anchor, right navigation, spear relationship, and page-index
treatment. Exact copy belongs to `content/ABOUT_CONTENT.md`; measured
composition belongs to the approved exported reference and
`design/figma/foundations.md`.

### Trajectory

Trajectory should explain how selected education and professional experiences
shaped Jaylan's technical, creative, and educational direction. It should read
as a reflective progression rather than a complete chronology.

Each published record should communicate:

- Its environment and Jaylan's role
- A defining responsibility or contribution
- What the experience taught him
- How it influenced his current direction
- Its relevant personal axes

Use concise reflective writing rather than dense résumé bullets. About should
explain how an experience shaped Jaylan; a project case study should explain
what was built and how it worked.

Publish only records identified as publishable in
`content/ABOUT_CONTENT.md`. Do not infer that a draft or future record is
approved merely because it exists in the repository. Preserve every recorded
verification flag for official organizations, titles, programs, courses, and
dates.

The selected record may display one associated organization mark as an
oversized, faint background identifier. Preserve the official asset's
proportions, apply grayscale and low opacity non-destructively, allow
intentional cropping, and keep it decorative when semantic organization text
is already present. Do not tint marks with Longinus accents, create a logo
wall, or invent a replacement. Exact record-to-mark mappings belong to the
editorial and runtime data.

### Outside the System

Outside the System presents travel and photography as meaningful parts of
Jaylan's personal and creative perspective. It should communicate curiosity,
independence, cultural observation, attention to place, and the way Jaylan
notices people and composition.

Do not reduce the chapter to a travel checklist, vacation log, generic hobby
collection, or camera-specification display.

Photography is authored portfolio content rather than decoration. Preserve
original edited images and apply archive treatments non-destructively. The
interface may move between archive and selected states, but images should have
room to breathe and remain legible.

Every published photograph needs a stable identifier, image source, meaningful
alternative text, location, and year. Optional metadata should appear only
when it improves the experience. Exact records, captions, reflections, and
verification flags belong to `content/ABOUT_CONTENT.md`.

### Interactive Influences

Interactive Influences connects Jaylan's personal interests to the work he
wants to create. It is a curated, medium-agnostic collection and may include
games, books, film, television, music, or other meaningful work.

Do not rank selections or turn the chapter into conventional reviews. Each
record should identify a specific influence, Jaylan's reflection, and a useful
design or creative takeaway. Prefer concise original commentary over copied
screenshots, promotional artwork, or long quotations, and never reproduce an
identifiable copyrighted interface composition.

Exact selections, quotations, attribution, editions, translations, speakers,
source scenes, and their verification flags belong to
`content/ABOUT_CONTENT.md`.

### Current Direction

Current Direction should connect the preceding chapters to Jaylan's present
work and future interests. It should communicate that Longinus combines
software engineering, interactive systems, game development, 3D technology,
visual experimentation, and technical education without becoming a generic
job-search statement.

Keep its statement, exploration areas, Longinus reflection, closing, and
actions in focused About editorial and runtime data. Render only actions with
approved destinations; do not synthesize a résumé or contact action from an
unfinished placeholder.

### Spear Role

The behavior below defines the established dark-theme About motif. A future
approved light-mode About reference may give Ramiel a quieter, chapter-owned
role without inheriting the Spear's continuous axial behavior.

On About, the spear is a quiet witness, spatial anchor, connective thread, and
representation of narrative progression. It must not behave like the
homepage's targeting and impact actor.

In normal-motion mode, the spear must never be idle:

- Begin rotating counterclockwise on the first About frame.
- Continue rotating without an endpoint across every chapter.
- Reverse clockwise while the user scrolls upward.
- Return to counterclockwise rotation while the user scrolls downward.
- Let scroll speed add restrained momentum in the active direction.

The rotation is continuous axial behavior, not a finite animation with a final
angle. Future approved chapter postures may layer position, depth, camera, or
orientation changes over that seam, but they must not introduce an idle
endpoint or silently replace the scroll-direction response.

Keep the motion slow, reflective, smooth, spatial, and restrained. Avoid
thrusting, target locking, impact, pointer following, reactions to every local
selection, and red interface rupture. Individual records, photographs, and
influences do not directly control the spear.

### Interaction and Navigation

On desktop, the narrative may scroll beside a persistent sticky Three.js
region. The balance between content and 3D space may change by chapter; do not
require one fixed split-screen ratio throughout the page.

The active chapter may coordinate chapter-interface state, spear staging,
camera relationship, lighting, ambient treatment, and chapter navigation.
Prefer explicit active-chapter state over tightly coupling every scene value to
raw scroll coordinates. Keep continuous high-frequency values inside React
Three Fiber rendering patterns rather than React state.

Experience, photograph, and influence selection should remain local 2D state
and must not trigger homepage-style targeting or impact behavior.

Chapter navigation must:

- Identify the active chapter
- Provide keyboard-accessible movement to every section
- Remain visually secondary to the narrative
- Avoid imitating homepage navigation

About scopes primary red to the current chapter and the compact right-side
navigation hover and keyboard-focus state. Both the number and label change to
red together. This is an About-specific state connected to the spear; do not
generalize it to unrelated controls.

### Responsive Interpretation

On narrow layouts, the spear does not need to remain permanently fixed beside
the content. Mobile may use a smaller sticky region, alternate content with
intentional spear moments, reposition the scene at chapter transitions, reduce
ambient information, or give photography additional width.

Preserve chapter identity, clear content order, spear narrative presence,
photography scale, accessible controls, and readable personal writing. Do not
sacrifice essential reading space merely to keep the full spear visible.

### Reduced Motion

For `prefers-reduced-motion`, stop continuous and scroll-linked spear
rotation, reduce parallax and camera travel, shorten transitions, and preserve
an understandable static chapter pose. The narrative, chapter state,
navigation feedback, and content hierarchy must remain coherent without large
spatial motion.

### Content and State Architecture

Keep About editorial data, presentation, local interaction state, active
chapter coordination, and Three.js behavior clearly separated. The feature
should own its chapter components, record components, assets, data modules,
active-chapter logic, page-specific styles, and persistent scene.

Use shared About state only when separate systems coordinate around the same
concept, such as the active chapter. Keep record, photograph, and influence
selection local to the owning chapter. Do not create a global About state
object or speculative data abstraction simply because the page contains
multiple record types.

Stable identifiers and semantic metadata should make content editable without
requiring changes to scene logic. About content must remain accessible in the
DOM when WebGL is unavailable.

# Technical Constraints

Prefer the existing React, TypeScript, Vite, Three.js, React Three Fiber, and
feature-owned CSS architecture. `package.json` and the checked-in package
manager files are authoritative for exact versions, installed dependencies,
and scripts; `README.md` owns setup and command documentation.

Use an installed dependency only when it directly supports approved work. Do
not add a router, animation library, state library, test framework, or other
package without a concrete need and an in-scope request. An installed but
unused package is not automatically an established project pattern.

## Technology Responsibilities

Use React and the DOM for interface structure, semantic content, typography, navigation, and accessible controls.

Use TypeScript to define application data, interaction state, content models, and contracts between interface systems.

Use React Three Fiber for visually meaningful 3D scenes, models, cameras, lighting, and interactive spatial behavior.

Use an installed Three.js helper only when it simplifies standard behavior
without obscuring important project-specific logic.

Use CSS or browser-native animation for DOM behavior unless a reviewed
interaction establishes a concrete need for another approach.

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

Follow **Design Source of Truth → Motion Source of Truth** and the relevant
transition document. Preserve authored timing and physical character while
choosing exported, procedural, or hybrid motion according to interaction needs.

## Coordination

Follow the shared phases and event-driven coordination rules in
**Interaction Model**. Coordinate timing and intent rather than applying the
same easing curve to every element. Transition-specific exceptions and
provisional timings belong in `design/figma/motion/` and `TASKS.md`.

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

When implementing an exported design reference, extract repeated values into
the token system when they represent a reusable visual rule.

Do not create a token for every one-off measurement.

Prefer semantic tokens and visual roles over tokens named after individual pages or components.

## Color

Follow **Current Dark-Theme Color Roles** and **Theme Direction**. Do not
redefine page-local color meanings that conflict with the applicable semantic
roles.

## Typography

Typography is part of the page composition.

Use the authoritative runtime stacks and exported-reference boundary defined once in
**Design Source of Truth**. Map display typography to `var(--font-display)`,
content to `var(--font-sans)`, and system or identifier typography to
`var(--font-mono)` rather than hardcoding feature-specific families.

Preserve typographic composition through font size, weight, line height, letter
spacing, casing, line breaks, wrapping width, alignment, cropping, and
surrounding negative space.

Because the stacks use system fonts, the resolved face and exact metrics may
vary by operating system. Validate that the hierarchy, line cadence, wrapping,
spacing, and overall composition remain intentional across representative
environments instead of changing the font family to force a pixel-identical
authoring-tool result.

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

`README.md` owns the current repository tree. Preserve the feature-oriented
ownership rules here even as individual files and directories change.

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

Separate project content from presentation logic.

Project data may define identifier, name, type, year, role, technologies, personal axes, narrative sections, demonstration type, and relevant assets.

Do not encode every project as a large page component containing duplicated layout and metadata logic.

Allow distinctive projects to provide specialized demonstration behavior when required.

## Playground Experiments

Playground experiments should remain independently owned.

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

Before considering a source task complete, run the relevant scripts that
actually exist in `package.json` and are documented in `README.md`. Record
validation status in `TASKS.md` when it changes, and never claim checks that
were not run.

# Workflow

Before implementing a task:

1. Read the relevant task and project instructions.
2. Inspect the existing feature, components, styles, scene behavior, and data involved.
3. Inspect supplied exported repository references before implementing static interface composition.
4. Inspect supplied Blender animations, renders, viewport recordings, or motion references before implementing referenced 3D motion.
5. Identify which behavior belongs to the DOM interface and which belongs to the Three.js scene.
6. Identify the meaningful interaction state shared between systems.
7. Reuse established project patterns where they remain appropriate.
8. Choose the smallest focused implementation that can prove the intended result.

Do not begin by creating new abstractions or dependencies.

## Visual Implementation Workflow

Follow **Design Source of Truth → Implementing From Exported References** and the handoff
procedure in `design/figma/README.md`. Implement and compare one complete state
at the intended viewport before expanding to additional states. Correct the
largest compositional differences before minor decoration or detailed motion.

## Motion Reference Workflow

Follow **Design Source of Truth → Motion Source of Truth** and the relevant
document under `design/figma/motion/`. Identify the motion's states, physical
character, interaction requirements, and completion signals before choosing an
exported, procedural, or hybrid implementation. Compare the smallest
representative interaction before adding secondary effects.

Do not translate keyframes mechanically or replace distinctive authored timing
with default easing without understanding the visual intent.

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

Apply **Documentation Ownership** and **Design Source of Truth** rather than
redefining source priorities inside an individual task.

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
- Introduce a visual theme beyond the documented dark direction and planned
  Rei-inspired light experiment, or promote an experiment without approval
- Change the relationship between Jaylan Wu, `alter-egoist`, and Longinus
- Add major external services or APIs
- Introduce a backend
- Add a global state-management framework
- Replace an approved exported-reference composition with a generic layout
- Replace the established runtime font stacks solely to match an exported reference
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

If an intended result cannot be reproduced accurately because of missing
assets, incomplete motion references, browser limitations, performance
constraints, accessibility conflicts, or library limitations, state the
limitation clearly. A font-family difference from an exported reference is
expected and should be resolved with the established runtime font stacks, not
treated as a missing implementation asset.

Implement the closest maintainable result only when the divergence is understood.

Do not describe an approximation as an exact reproduction.
