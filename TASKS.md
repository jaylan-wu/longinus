# Longinus Tasks

This file tracks implementation milestones for Longinus.

`AGENTS.md` defines product direction, visual-system rules, interaction intent, architecture guidance, and implementation constraints.

This file defines implementation order.

## Task Rules

- Work incrementally.
- Prefer one complete interaction or visual state over several partially implemented features.
- Do not implement a page's final visual composition without a supplied Figma reference or explicit task direction.
- Do not invent authored 3D motion when a Blender or motion reference is expected.
- Keep changes small enough to review confidently.
- Validate type-check, lint, build, keyboard behavior, and reduced-motion behavior when relevant.
- Mark tasks complete only after the requested behavior has been verified.
- Add newly discovered work to the appropriate milestone rather than expanding the current task without review.

Status reviewed against the repository on 2026-07-14. Checkmarks below represent behavior or structure that can be confirmed from the current codebase. Visual comparison and hands-on interaction checks remain open when they require Figma, Blender, or browser/device verification.

---

# Milestone 0 — Align Repository With Current Direction

## Documentation

- [x] Revise `AGENTS.md` to reflect the current Longinus product direction.
- [x] Define Jaylan Wu as the primary human identity.
- [x] Define `alter-egoist` as the recurring digital and creative identity.
- [x] Define the three personal axes:
  - Engineering
  - Game development
  - Education
- [x] Add Playground as a planned primary page.
- [x] Define Figma as the source of truth for static 2D composition.
- [x] Define Blender and supplied motion references as the source of truth for authored 3D motion.
- [x] Define Longinus as a desktop-first experience.
- [x] Define semantic color roles.
- [x] Define the shared conceptual interaction phases:
  - `idle`
  - `focused`
  - `committing`
  - `impact`
  - `transitioning`
  - `settled`

## Repository Audit

- [x] Audit the current repository against the revised `AGENTS.md`.
- [x] Identify current architecture that remains compatible and should be preserved.
- [x] Identify clear conflicts with the revised feature-ownership model.
- [x] Identify page-specific styles currently living in global CSS.
- [x] Identify current generic red accent usage that conflicts with semantic color roles.
- [x] Identify duplicate or unrelated animation state.
- [x] Identify Three.js resources or animation loops that remain active outside their owning feature.
- [x] Record work that should be deferred until Figma or Blender references exist.

Audit outcome: the lightweight hash router, feature folders, local React state, data-driven project records, semantic DOM, and bounded R3F canvases remain appropriate. Page styles were moved out of global CSS, Home and Projects now own separate spear behavior, and non-home routes are lazy-loaded. Final page composition, authored spear motion, the boot sequence, and project demonstration regions remain deferred pending their relevant references.

Do not restructure the repository solely to match the conceptual folder tree in `AGENTS.md`.

---

# Milestone 1 — Visual Foundations

## Color System

- [x] Confirm the Longinus palette in the application's design tokens:
  - Background `#09090b`
  - Surface `#141317`
  - Foreground `#e8e4dc`
  - Muted `#8d8882`
  - Primary red `#d92332`
  - Secondary lavender `#7a5aa6`
  - Highlight orange `#f28c28`
- [x] Audit generic uses of primary red.
- [x] Move active system selection and connection states toward highlight orange where appropriate.
- [x] Reserve red primarily for the spear, impact, disruption, and spear-affected states.
- [x] Preserve lavender for identity, human context, and `alter-egoist`-related composition.
- [ ] Verify focus indicators remain accessible and visually clear.
- [x] Do not introduce new accent colors without an approved semantic role.

## Typography System

- [ ] Define the four typography roles:
  - Display
  - System
  - Content
  - Identifier
- [ ] Select and verify a legally usable Longinus display typeface.
- [ ] Evaluate an Evangelion title-card-inspired display font direction.
- [ ] Add the approved display font asset to the repository.
- [ ] Record the approved display font and repository path in `AGENTS.md`.
- [ ] Select or confirm the system typography face.
- [ ] Select or confirm the readable content typography face.
- [ ] Implement typography tokens or shared foundations for the four roles.
- [ ] Verify display typography is not used for long-form content.

## Styling Ownership

- [x] Audit `index.css`.
- [x] Keep global CSS focused on tokens, resets, typography foundations, application-wide behavior, and genuinely shared primitives.
- [x] Move page-specific composition rules closer to the owning feature when justified.
- [x] Do not perform a broad CSS rewrite solely for organizational purity.
- [x] Remove abandoned or duplicate styles after ownership is clear.

---

# Milestone 2 — Boot Experience

## Design

- [ ] Create the boot/loading composition in Figma.
- [ ] Define meaningful system information shown during initialization.
- [ ] Define the linear loading indicator composition.
- [ ] Define the visual relationship between the loading indicator and the spear.
- [ ] Define the final boot-to-home frame.
- [ ] Define the reduced-motion version of the transition.

## Asset Readiness

- [ ] Identify assets required for the first interactive homepage state.
- [ ] Track meaningful readiness for:
  - Primary spear model
  - Critical spear materials and textures
  - Required display fonts
  - Initial Three.js scene
  - Other truly critical homepage assets
- [ ] Ensure the application does not remain trapped in the boot experience when WebGL initialization fails.
- [ ] Avoid arbitrary simulated loading percentages.

## Implementation

- [ ] Implement the boot state.
- [ ] Implement meaningful readiness tracking.
- [ ] Implement the linear indicator.
- [ ] Implement the transition:
  - `loading state`
  - `linear indicator`
  - `spear reveal`
  - `homepage composition`
- [ ] Do not replay the full boot experience during internal route navigation.
- [ ] Avoid forcing a long minimum loading duration when cached assets are already ready.
- [ ] Add a reduced-motion boot transition.
- [ ] Verify semantic navigation remains reachable if the 3D scene fails.

---

# Milestone 3 — Homepage Composition

## Figma

- [x] Create the current desktop homepage composition in Figma.
- [x] Use Evangelion title-card-inspired typography as a compositional influence.
- [x] Use structured system-interface principles inspired by analytical fictional interfaces without copying a specific MAGI screen.
- [x] Preserve the left-side system/navigation and right-side spear relationship.
- [x] Make `JAYLAN WU` unmistakable.
- [x] Integrate `alter-egoist` as a secondary digital identity or compositional signature.
- [ ] Represent the three personal axes with restraint:
  - Engineering
  - Game development
  - Education
- [x] Remove `JW-01` or other fictional subject-number identity language.
- [x] Define real system and ambient information only.
- [x] Define the intended desktop viewport for visual comparison.

## Static Implementation

- [x] Inspect the approved homepage Figma reference.
- [x] Identify primary, system, navigation, and ambient regions.
- [x] Separate DOM elements from Three.js scene elements.
- [x] Implement the primary static 2D composition.
- [ ] Stage the spear at the correct scale, silhouette, and camera framing.
- [ ] Compare the composition to Figma at the intended viewport.
- [ ] Fix major scale, spacing, typography, and 2D/3D relationship differences before animation work.

Homepage composition note: the static 2D composition is now in a good working state, including responsive desktop-height adjustments and current hover/focus presentation. The procedural React Three Fiber spear is only a staging placeholder. The final authored 3D model has not been implemented, so the homepage remains in progress and the final 2D/3D comparison tasks stay open.

## Navigation Data

- [x] Define primary navigation as:
  - Projects
  - Music
  - Playground
  - About
- [x] Keep Home as the navigation scene rather than a primary navigation target.
- [x] Keep navigation data separate from presentation logic.
- [x] Use stable navigation target identifiers.

---

# Milestone 4 — Homepage Interaction Model

## Shared State

- [ ] Define a small homepage interaction model using the conceptual phases:
  - `idle`
  - `focused`
  - `committing`
  - `impact`
  - `transitioning`
  - `settled`
- [ ] Include the active navigation target when a target exists.
- [ ] Coordinate the navigation interface, spear, impact reaction, and route transition through meaningful shared state.
- [ ] Avoid unrelated booleans representing one coordinated interaction.
- [x] Avoid a global state-management dependency unless real project complexity later requires one.

## Focus State

- [ ] Prove `idle → focused` for one navigation target.
- [ ] Make pointer focus update the shared interaction target.
- [ ] Make keyboard focus produce a meaningful equivalent state.
- [x] Use highlight orange for active system-state feedback where appropriate.
- [ ] Make the spear orient toward the focused target.
- [ ] Keep orientation motion weighted and physical.
- [x] Do not use primary red as the generic focus color.

## Commit and Impact

- [ ] Create or supply a Blender motion reference for spear anticipation and thrust.
- [ ] Decide whether the impact sequence is:
  - Procedural
  - Exported GLTF animation
  - Hybrid
- [ ] Prove `focused → committing → impact` for one target.
- [ ] Implement anticipation or wind-up.
- [ ] Implement brief impact.
- [ ] Allow primary red to enter the interface as a consequence of spear impact.
- [ ] Implement controlled local typography or interface disruption.
- [ ] Keep impact visually tied to the selected target.
- [ ] Avoid arbitrary duplicated timeout chains.

## Transition

- [ ] Prove `impact → transitioning → settled` for one target.
- [ ] Trigger route change at an intentional point in the transition.
- [ ] Coordinate spear follow-through with 2D transition behavior.
- [ ] Restore input after the destination settles.
- [ ] Expand the proven interaction pattern to all homepage navigation targets.
- [ ] Do not create a universal spear animation controller before a reusable pattern is demonstrated.

## Accessibility

- [ ] Verify all homepage navigation is semantic and keyboard accessible.
- [ ] Verify Enter or Space commits the interaction when appropriate.
- [ ] Provide clear visible focus.
- [ ] Do not rely on color alone for focused or committed state.
- [ ] Implement reduced-motion navigation behavior.
- [x] Preserve semantic navigation when WebGL is unavailable.

---

# Milestone 5 — Routing, Feature Ownership, and Scene Lifecycle

- [ ] Confirm routes for:
  - Projects
  - Music
  - Playground
  - About
- [x] Preserve existing routing architecture when it remains maintainable.
- [x] Establish clear feature ownership for page-specific behavior.
- [x] Share the spear model or base asset where appropriate.
- [x] Keep homepage spear staging and motion within Home ownership.
- [ ] Keep future Music spear behavior within Music ownership.
- [x] Keep project archive spear behavior within Projects ownership.
- [x] Do not create one universal scene configuration.
- [ ] Confirm expensive Three.js loops and resources do not remain active after leaving an owning feature.
- [x] Add route-level code splitting or lazy loading where justified.
- [x] Do not preload every future page scene during initial application entry.

Routing note: Projects, project details, and About have working routes. Music and Playground are intentionally shown as planned, unavailable destinations until their pages are designed, so the full route-confirmation task remains incomplete.

---

# Milestone 6 — Projects Archive

## Figma

- [ ] Create the Projects archive desktop composition.
- [ ] Treat Projects as a record-selection interface rather than a generic card grid.
- [ ] Reserve a strong left-side project collection.
- [ ] Reserve a dominant right-side spear or 3D composition.
- [ ] Define project focus state.
- [ ] Define project metadata behavior.
- [ ] Define commit and impact states.
- [ ] Define the archive-to-detail transition.
- [ ] Preserve title-card-inspired composition and controlled negative space.

## Project Data

- [x] Define a project data model.
- [ ] Support meaningful fields such as:
  - Identifier
  - Name
  - Project type
  - Year
  - Role
  - Technologies
  - Personal axes
  - Narrative sections
  - Demonstration type
  - Relevant assets
  - External links when applicable
- [ ] Assign stable project identifiers such as `PRJ-001`.
- [x] Keep content separate from project archive presentation logic.
- [ ] Curate a small number of strong initial projects.

## Archive Implementation

- [ ] Implement the static archive composition from Figma.
- [x] Implement project focus state.
- [x] Use highlight orange for active system state where appropriate.
- [ ] Coordinate focused project metadata with the selected target.
- [x] Implement spear orientation toward the focused project.
- [x] Implement project commit, anticipation, impact, and transition.
- [x] Use primary red only when the spear disrupts the interface.
- [x] Preserve keyboard navigation and reduced-motion behavior.

Archive note: this is an initial implementation rather than a Figma-verified final composition. The current data model still needs personal axes, narrative sections, demonstration types, real assets, and external links before the broader project-data task is complete.

---

# Milestone 7 — Project Detail Framework

## Narrative

- [ ] Define project-detail narrative data that can support:
  1. Context
  2. Problem
  3. System
  4. Decisions
  5. Outcome
  6. Reflection
- [ ] Allow a project to adapt this structure when a different narrative is more appropriate.
- [ ] Prioritize Jaylan's role, ownership, technical decisions, tradeoffs, outcomes, and reflection.
- [ ] Keep explanations concise and understandable.
- [ ] Do not convert project details into expanded resume bullets.

## Information and Demonstration Regions

- [ ] Create a project-detail Figma composition that supports explanation and demonstration.
- [ ] Treat a roughly split-screen layout as an available grammar, not a mandatory identical template.
- [ ] Preserve substantial room for a demonstration region when the project benefits from it.
- [ ] Define at least one software/system project presentation mode.
- [ ] Define at least one spatial/3D project presentation mode when an appropriate project exists.

## Software Project Demonstrations

- [ ] Create a system demonstration strategy for current software-heavy projects.
- [ ] Evaluate:
  - Architecture diagrams
  - Animated data flow
  - Interactive system diagrams
  - Interface demonstrations
  - Application footage
  - Development artifacts
  - Technical visualizations
- [ ] Do not add meaningless 3D objects to software projects.

## 3D and Game Project Demonstrations

- [ ] Allow project-specific interactive 3D models.
- [ ] Allow project-specific Blender animations.
- [ ] Allow gameplay footage or scene demonstrations.
- [ ] Give focal 3D artifacts sufficient screen space.
- [ ] Allow project-specific camera, lighting, and controls.
- [ ] Do not reuse the homepage spear camera or scene configuration by default.

## Initial Project Detail Content

- [x] Add Longinus as a project record.
- [ ] Add the MLB campaign-system migration as a software/system project candidate.
- [ ] Add selected game work as project candidates.
- [ ] Review which embedded or journal-system projects are strong enough for the curated archive.
- [ ] Write real narrative content before polishing final project-detail motion.

---

# Milestone 8 — Music

## Figma

- [ ] Create the Music desktop composition.
- [ ] Give Music a more personal, atmospheric, and fluid character.
- [ ] Allow the `alter-egoist` / human layer and lavender to have greater presence.
- [ ] Design a record collection that fans or arranges from the left.
- [ ] Design the 3D record-player composition.
- [ ] Define current-record metadata.
- [ ] Define the selected-record transition into the player.
- [ ] Define the spear's sculptural role.

## Music Data

- [ ] Create curated local music/record data.
- [ ] Support meaningful metadata such as:
  - Artist
  - Album
  - Track
  - Release year
  - Record identifier
- [ ] Do not use Spotify as the primary content source.
- [ ] Do not implement audio playback yet.
- [ ] Do not use `PLAYING`, `PAUSED`, playback progress, or elapsed-time state.
- [ ] Use selection language such as:
  - Selected Record
  - Current Record
  - Active Record
  - Displaying

## Interaction

- [ ] Implement visible record selection.
- [ ] Preserve spatial continuity as a selected record moves from the collection to the player.
- [ ] Rotate the active record as a visual interaction.
- [ ] Create or supply a Blender motion reference for the Music spear.
- [ ] Implement graceful spear motion that may spin, tilt, drift, or orbit.
- [ ] Keep spear motion visually related to record rotation.
- [ ] Do not use the spear as the turntable spindle.
- [ ] Avoid random floating motion.
- [ ] Structure Music so audio may be added later without requiring a complete redesign.

---

# Milestone 9 — Playground

## Figma and Art Direction

- [ ] Create the Playground desktop composition.
- [ ] Use the concept of an observation interface overlooking a contained experimental chamber.
- [ ] Draw from the sense of scale, separation, and controlled observation of Evangelion testing sequences without reproducing copyrighted architecture or interface layouts.
- [ ] Design an original Longinus observation chamber.
- [ ] Define the visual boundary between observation and experiment.
- [ ] Define real chamber lifecycle states.
- [ ] Define experiment selection behavior.

## Playground Shell

- [ ] Implement the observation interface.
- [ ] Implement the chamber stage.
- [ ] Implement accessible experiment selection.
- [ ] Define chamber lifecycle state only as required by real behavior.
- [ ] Allow experiments to define their own cameras, lighting, controls, and rendering behavior.
- [ ] Do not force the spear into every experiment.
- [ ] Do not build a universal experiment-state schema.

## Experiment Contract

- [ ] Define the smallest interface required for Playground to discover and select experiments.
- [ ] Allow an experiment to expose meaningful observation data when appropriate.
- [ ] Keep experiment-internal state within the experiment.
- [ ] Keep experiment-specific parameters and controls within the experiment.
- [ ] Load experiments on demand.
- [ ] Dispose experiment-specific resources after the experiment is no longer required.

## Initial Experiments

- [ ] Convert a useful spear motion study into a Playground experiment.
- [ ] Consider a Blender-to-R3F motion reproduction study.
- [ ] Consider a DOM/Three.js shared interaction-state study.
- [ ] Consider a shader study after the Playground shell is stable.
- [ ] Do not add experiments solely to fill the page.

## Boundary Experiments

- [ ] Reserve boundary disruption for experiments where crossing or affecting the observation boundary is meaningful.
- [ ] Keep normal chamber selection and metadata motion controlled.
- [ ] Allow less restrained interaction in Playground than elsewhere in Longinus.
- [ ] Keep displayed readings tied to real experiment state.

---

# Milestone 10 — About

## Narrative Structure

* [ ] Use the five approved About chapters:

  1. Identity
  2. Trajectory
  3. Outside the System
  4. Interactive Influences
  5. Current Direction
* [ ] Ensure the page forms one connected personal narrative.
* [ ] Preserve the conceptual progression:

  * Classification
  * Context
  * Person
  * Influence
  * Direction
* [ ] Avoid turning About into a résumé, travel blog, photography portfolio, game ranking, or collection of disconnected hobbies.
* [ ] Define the intended desktop viewport for visual comparison.

## Identity

* [ ] Create the Identity chapter composition in Figma.
* [ ] Make `JAYLAN WU` the clear primary identity.
* [ ] Introduce a concise personal statement.
* [ ] Represent the three personal axes:

  * Engineering
  * Game development
  * Education
* [ ] Do not use percentage scores or skill ratings.
* [ ] Use `alter-egoist` only as a restrained signature or secondary creative mark.
* [ ] Do not repeat `alter-egoist` throughout every chapter.
* [ ] Define the spear's Identity posture as a quiet anchor.
* [ ] Ensure the spear does not overpower Jaylan's name or opening statement.

## Trajectory Content

* [ ] Create reflective content for Jaylan's college degrees.
* [ ] Include:

  * B.S. in Computer Science
  * B.S. in Computer Engineering
  * Game Engineering study or minor
  * Relevant NYU schools or programs
* [ ] Explain how the degrees connect software, hardware, architecture, embedded systems, graphics, and interactive technology.
* [ ] Create the New York Mets Technology Solutions experience record.
* [ ] Focus on technology within physical, operational, employee-facing, and fan-facing environments.
* [ ] Create the Major League Baseball Software Engineering experience record.
* [ ] Focus on modernization, internal systems, automation, reliability, cloud infrastructure, and organizational workflows.
* [ ] Create the NYU Instructional Facilities Manager experience record.
* [ ] Focus on technical operations, instructional infrastructure, reliability, resources, and support.
* [ ] Create the NYU Adjunct Professor experience record.
* [ ] Focus on teaching, technical communication, mentorship, student confidence, and practical implementation.
* [ ] Verify official role names and degree wording.
* [ ] Add date ranges only when useful to the narrative.
* [ ] Keep detailed technical case studies on Projects rather than About.
* [ ] Add related-project links only when those project details exist.

## Trajectory Design

* [ ] Create the Trajectory composition in Figma.
* [ ] Avoid a conventional résumé timeline.
* [ ] Create a narrative progression:

  * Technical foundation
  * Applied technology
  * Software engineering
  * Educational infrastructure
  * Teaching
* [ ] Allow experience records to reveal reflection, axes, contribution, and related projects.
* [ ] Use orange for local active record state where appropriate.
* [ ] Do not use red as a generic experience-selection color.
* [ ] Define the spear's Trajectory role as a directional spine.
* [ ] Do not make the spear target individual employers, degrees, or roles.

## Travel and Personal Writing

* [ ] Write a concise explanation of why travel matters to Jaylan.
* [ ] Focus on observation, unfamiliar environments, independence, architecture, transit, signage, public space, and atmosphere.
* [ ] Avoid listing every city or country visited.
* [ ] Connect travel to Jaylan's perspective without forcing it into a professional justification.
* [ ] Keep supporting hobbies secondary to travel and photography.

## Photography Curation

* [ ] Curate approximately six to twelve photographs.
* [ ] Select a sequence with variation in:

  * Location
  * Subject
  * Scale
  * Mood
  * Color
  * Composition
* [ ] Select a small number of featured photographs.
* [ ] Avoid near-duplicate images.
* [ ] Write meaningful alt text for every photograph.
* [ ] Add accurate location and year metadata.
* [ ] Add personal captions where useful.
* [ ] Add camera or lens information only when it improves the experience.
* [ ] Do not add fictional coordinates or EXIF information.
* [ ] Preserve original edited masters outside the web repository.
* [ ] Export web-appropriate image versions.
* [ ] Consider thumbnails or responsive image variants where beneficial.

## Photography Design

* [ ] Create the photography archive composition in Figma.
* [ ] Define archive-state presentation.
* [ ] Define selected or expanded presentation.
* [ ] Support the transition:

  * Capture record
  * Selected image
  * Personal memory
* [ ] Apply muted archive treatment non-destructively.
* [ ] Restore natural or intentionally edited color in the selected state.
* [ ] Do not apply one strong Longinus tint to every photograph.
* [ ] Use orange for active system selection where appropriate.
* [ ] Use lavender for personal captions or reflection where appropriate.
* [ ] Do not use red as a generic photo-selection border.
* [ ] Preserve photography as the visual focus of the chapter.
* [ ] Define the spear's Outside the System role as an environmental frame.
* [ ] Prevent the spear from obscuring important photographic subjects.
* [ ] Do not make the spear target individual photographs.

## Interactive Influences Content

* [ ] Select approximately three to six games.
* [ ] Do not structure the chapter as a ranking or top-ten list.
* [ ] For each game, write a concise original reflection.
* [ ] Identify the specific influence, such as:

  * Interface
  * Visual direction
  * Systems design
  * Worldbuilding
  * Atmosphere
  * Environmental storytelling
  * Character writing
  * Mechanical expression
  * Music and sound
  * Player agency
* [ ] Focus on what each game taught Jaylan about the experiences he wants to create.
* [ ] Avoid copied review or marketing language.
* [ ] Avoid relying on copyrighted screenshots, logos, character artwork, or promotional assets.
* [ ] Do not reproduce an identifiable game interface inside Longinus.

## Interactive Influences Design

* [ ] Create the Interactive Influences composition in Figma.
* [ ] Use concise influence records rather than conventional cards.
* [ ] Allow local 2D focus to reveal commentary.
* [ ] Keep this chapter visually distinct from Music.
* [ ] Use the chapter as a bridge from personal observation toward future creative direction.
* [ ] Define the spear's role as emerging direction.
* [ ] Do not make the spear target individual game records.

## Current Direction Content

* [ ] Write a concise statement describing the kind of work Jaylan wants to pursue.
* [ ] Preserve software engineering as a central professional identity.
* [ ] Connect engineering with:

  * Interactive systems
  * Game technology
  * Real-time graphics
  * Three-dimensional web experiences
  * Expressive interface design
  * Creative development
* [ ] Include teaching and mentorship as part of Jaylan's future direction.
* [ ] Explain how travel, photography, and games influence attention to space, atmosphere, interaction, and detail.
* [ ] Avoid forcing every personal interest into a direct career justification.
* [ ] Add a short explanation of what Longinus represents.
* [ ] Do not turn the explanation into a second Longinus project case study.
* [ ] Define a restrained set of current areas of exploration.
* [ ] Avoid adding technologies solely because they are fashionable.
* [ ] Write a concise closing statement.
* [ ] Decide which practical actions appear after the closing:

  * View Projects
  * View résumé
  * Contact
  * Return Home

## Current Direction Design

* [ ] Create the Current Direction composition in Figma.
* [ ] Make the ending reflective and forward-looking.
* [ ] Keep practical actions visually secondary to the closing statement.
* [ ] Define the spear's final role as a forward vector.
* [ ] Consider:

  * A resolved diagonal
  * Alignment with a vanishing point
  * Gradual movement into depth
  * A final still posture
* [ ] Do not use thrusting, impact, text penetration, or automatic navigation.
* [ ] Ensure the final spear state suggests continuation rather than completion.

## Scroll and Chapter Navigation

* [ ] Use standard vertical browser scrolling.
* [ ] Do not require hard full-screen scroll snapping.
* [ ] Define stable chapter identifiers:

  * `identity`
  * `trajectory`
  * `outside-system`
  * `interactive-influences`
  * `current-direction`
* [ ] Implement active-chapter detection.
* [ ] Use active chapter state to coordinate the About interface and spear scene.
* [ ] Avoid tightly coupling all scene behavior to raw scroll coordinates.
* [ ] Use continuous progress only for restrained interpolation, depth, lighting, or parallax.
* [ ] Create restrained chapter navigation.
* [ ] Make chapter navigation keyboard accessible.
* [ ] Use orange for active chapter state where appropriate.
* [ ] Do not make chapter navigation imitate the homepage navigation.

## Persistent About Scene

* [ ] Reuse the shared spear model.
* [ ] Keep all About-specific spear behavior inside the About feature.
* [ ] Create a persistent or sticky desktop Three.js region when supported by the final Figma design.
* [ ] Define an authored spear posture for each chapter:

  * Identity: quiet anchor
  * Trajectory: directional spine
  * Outside the System: environmental frame
  * Interactive Influences: emerging direction
  * Current Direction: forward vector
* [ ] Define chapter-specific position, rotation, scale, camera relationship, and lighting mood.
* [ ] Keep transitions slow, restrained, and reflective.
* [ ] Allow the spear to remain still for extended periods.
* [ ] Avoid target locking, impact, pointer following, and constant decorative motion.
* [ ] Confirm the spear does not cover essential content.

## Data Architecture

* [ ] Keep About content separate from presentation and scene logic.
* [ ] Create a focused experience data model.
* [ ] Create a focused photography data model.
* [ ] Create a focused game-influence data model.
* [ ] Do not store every résumé bullet in experience data.
* [ ] Do not create a game-rating or ranking system.
* [ ] Use stable record identifiers.
* [ ] Keep content editable without changes to `AboutScene` or `AboutSpear`.
* [ ] Use shared About state only for cross-system coordination such as active chapter.
* [ ] Keep focused experience, selected photo, and focused influence state local to their owning chapters.
* [ ] Do not store frame-by-frame spear values in React state.
* [ ] Avoid creating one large universal About reducer unless real coordination requires it.

## Responsive Interpretation

* [ ] Create an intentional narrow-layout interpretation after the desktop composition is stable.
* [ ] Do not mechanically shrink the desktop layout.
* [ ] Allow chapter content and spear moments to alternate.
* [ ] Consider a smaller sticky scene rather than permanently displaying the full spear.
* [ ] Preserve sufficient width for photographs and personal writing.
* [ ] Ensure touch interactions do not depend on hover.
* [ ] Define touch behavior for:

  * Experience focus
  * Photograph selection and expansion
  * Game-influence focus
  * Chapter navigation
* [ ] Preserve chapter order and spear narrative presence.

## Accessibility and Reduced Motion

* [ ] Use semantic section headings and landmarks.
* [ ] Make experience, photograph, influence, and chapter controls keyboard accessible.
* [ ] Provide visible focus states.
* [ ] Ensure state is not communicated through color alone.
* [ ] Provide useful alternative text for photography.
* [ ] Ensure expanded photographs can be closed using keyboard controls.
* [ ] Preserve reading order when the 3D scene is unavailable.
* [ ] Preserve the full narrative without WebGL.
* [ ] Implement reduced-motion chapter transitions.
* [ ] Remove continuous scroll-linked spear motion for reduced-motion users.
* [ ] Reduce parallax and camera travel.
* [ ] Keep the spear in stable authored poses when necessary.

## Validation

* [ ] Compare every chapter against its approved Figma reference.
* [ ] Verify desktop composition.
* [ ] Verify narrow-layout composition.
* [ ] Verify keyboard navigation.
* [ ] Verify touch interactions.
* [ ] Verify reduced-motion behavior.
* [ ] Verify WebGL fallback.
* [ ] Verify photograph metadata and alt text.
* [ ] Verify official role and degree wording.
* [ ] Verify experience reflections do not duplicate project case studies.
* [ ] Verify game commentary is original.
* [ ] Verify the spear responds to chapters rather than local record hover.
* [ ] Verify About does not become a duplicate résumé or separate photo portfolio.
* [ ] Run the relevant type-check, lint, and build commands.

---

# Milestone 11 — Responsive Reinterpretation

Longinus is desktop-first.

Complete the strongest desktop composition and interaction first, then deliberately reinterpret it for narrower viewports.

## Global

- [ ] Define a small number of intentional responsive breakpoints.
- [ ] Preserve focal content and understandable interaction state.
- [ ] Reduce ambient information when necessary.
- [ ] Do not mechanically scale desktop compositions down.
- [ ] Allow viewport-specific Three.js camera and staging configurations.
- [ ] Verify the spear does not obscure essential content or controls.

## Touch

- [ ] Identify every primary interaction that depends on hover.
- [ ] Define a touch equivalent for each.
- [ ] Evaluate:
  - First tap to focus, second tap to commit
  - Swipe or drag to change focus
  - Explicit selection controls
- [x] Implement first tap to focus and second tap to commit for project records.
- [ ] Choose interactions page by page based on intent.
- [ ] Do not replace distinctive desktop interactions with generic mobile buttons unless the mobile design explicitly requires them.

## Page Reinterpretation

- [ ] Reinterpret Home for narrow layouts.
- [ ] Reinterpret Projects archive for narrow layouts.
- [ ] Reinterpret project-detail information and demonstration regions.
- [ ] Reinterpret Music for touch.
- [ ] Reinterpret Playground observation and chamber relationships.
- [ ] Reinterpret About without losing the three-axis concept.

---

# Milestone 12 — Accessibility and Fallbacks

## Global

- [ ] Verify semantic headings and landmarks.
- [ ] Verify real buttons and links are used for semantic controls.
- [ ] Verify keyboard navigation.
- [ ] Verify visible focus.
- [ ] Verify sufficient color contrast.
- [ ] Verify state is not communicated by color alone.
- [ ] Verify accessible labels.
- [ ] Verify touch alternatives for hover.
- [ ] Verify reduced-motion behavior.

## WebGL Fallback

- [x] Detect or handle critical Three.js initialization failure.
- [x] Preserve primary navigation.
- [x] Preserve page identity and primary content.
- [x] Preserve project information and relevant external links/actions.
- [ ] Avoid trapping the user in the boot experience.
- [x] Create a restrained fallback state consistent with Longinus.
- [x] Do not recreate the complete 3D experience in CSS.

## Playground

- [ ] Keep experiment selection and descriptions accessible.
- [ ] Evaluate each experiment based on the behavior it demonstrates.
- [ ] Provide labels, instructions, or equivalent output where practical.
- [ ] Do not require a complete non-visual recreation of every experimental visual.

---

# Milestone 13 — Performance and Asset Pipeline

## Initial Load

- [ ] Measure initial application loading.
- [ ] Confirm only boot and homepage-critical assets are prioritized.
- [x] Confirm project demonstrations are not loaded initially.
- [x] Confirm Playground experiments are not loaded initially.
- [x] Confirm page-specific 3D scenes are loaded on demand.

## Strategic Preloading

- [ ] Evaluate preloading destination code/assets after a user focuses or commits to a navigation target.
- [ ] Use preloading only when it improves transition continuity.
- [x] Do not preload the entire application.

## Three.js

- [x] Bound device pixel ratio.
- [x] Audit `useFrame` loops.
- [x] Remove avoidable per-frame allocations.
- [ ] Reuse materials and geometries only when genuinely shared.
- [ ] Verify non-visible scenes do not continue expensive work.
- [x] Verify event listeners are cleaned up.
- [ ] Verify disposable resources are disposed when no longer required.

## Blender Assets

- [ ] Remove unused geometry before production export.
- [ ] Remove unused animation clips.
- [ ] Validate scale and transforms.
- [ ] Review duplicate materials.
- [ ] Review texture resolution.
- [ ] Compress production GLB/GLTF assets when appropriate.
- [ ] Preserve quality for dominant focal assets.

## Adaptive Effects

- [ ] Profile expensive post-processing.
- [ ] Reduce particle counts on constrained devices when necessary.
- [ ] Reduce non-essential environmental effects when necessary.
- [ ] Reduce shadow cost when necessary.
- [ ] Pause non-visible animation.
- [ ] Preserve interaction meaning and composition when adapting quality.

---

# Milestone 14 — Final Content and Portfolio Review

- [ ] Confirm the primary navigation remains:
  - Projects
  - Music
  - Playground
  - About
- [ ] Confirm Jaylan Wu remains the primary human identity.
- [ ] Confirm `alter-egoist` is used as a digital/creative identity rather than a fictional subject ID.
- [ ] Confirm the three personal axes are represented coherently.
- [ ] Confirm system labels describe real information or application state.
- [ ] Remove fake technical readings and meaningless futuristic copy.
- [ ] Remove generic portfolio/SaaS visual defaults that conflict with the approved designs.
- [ ] Review every use of red for semantic consistency.
- [ ] Review every major spear appearance for a meaningful role.
- [ ] Review every continuous animation and remove motion that exists only to keep the page moving.
- [ ] Confirm Projects demonstrates technical ability and decision-making.
- [ ] Confirm Music demonstrates personal taste and atmosphere.
- [ ] Confirm Playground demonstrates curiosity and experimentation.
- [ ] Confirm About connects engineering, game development, and education.
- [ ] Proofread all portfolio content.
- [ ] Verify external links.
- [ ] Verify project metadata.
- [ ] Verify music metadata.
- [ ] Verify experiment labels and state.
- [ ] Run the final type-check.
- [ ] Run the final lint command.
- [ ] Run the final build.
- [ ] Perform a final keyboard review.
- [ ] Perform a final reduced-motion review.
- [ ] Perform a final desktop composition review.
- [ ] Perform a final narrow-layout review.
- [ ] Perform a final performance review on mid-range hardware or representative throttled conditions.

---

# Current Recommended Work Order

Completed foundations: repository audit, semantic palette alignment, feature-owned CSS, primary-navigation data, a strong working homepage 2D composition, temporary shared spear geometry with page-owned scene behavior, initial Projects archive/detail routing, and non-home route code splitting.

1. Select the Longinus typography stack.
2. Implement the final authored 3D Spear model and stage it against the current homepage composition.
3. Visually verify and polish the complete homepage 2D/3D composition.
4. Create the homepage spear motion reference in Blender.
5. Implement the boot experience around real final-asset readiness.
6. Prove the full homepage interaction on one navigation target.
7. Expand the homepage interaction to all available navigation targets.
8. Finalize the Projects archive design against Figma and replace placeholder content with curated work.
9. Build the project-detail information/demonstration framework.
10. Design and implement Playground.
11. Design and implement Music.
12. Redesign About around the three personal axes when its Figma reference is available.
13. Reinterpret completed desktop experiences for narrow and touch viewports.
14. Complete accessibility, WebGL fallback, performance, and final content validation.

The order may change when a supplied Figma or Blender reference makes another milestone ready first.

Prefer polish over feature count.
