# Project Selection Transition

## Current implementation status

The Projects archive currently contains an initial code-level focus, commitment, impact, and route-transition sequence using the temporary procedural spear. It has not been approved against a final motion reference or final 3D model. Its present timing and post-transition behavior are provisional; the reviewed values below therefore remain unresolved.

## Purpose

Define the coordinated transition from a focused project record in the archive to its project-detail view while keeping selection feedback, route timing, and spear placement independently reviewable.

## Participating UI and 3D elements

| Element | Responsibility | Motion reference / notes |
| --- | --- | --- |
| Project card / record | Show hover, keyboard focus, selection, and locked state | TBD after motion review |
| Project metadata | Reflect the actual focused or committed project | TBD after motion review |
| Archive interface | React to impact and leave coherently | TBD after motion review |
| Spear scene | Acknowledge, commit, impact, and follow through | TBD after motion review |
| Project-detail view | Enter with correct content and focus | TBD after motion review |

## Conceptual sequence

1. A project card receives hover or keyboard focus.
2. The spear acknowledges the focused project.
3. The user selects the project.
4. Further selections are temporarily locked.
5. The spear begins the commitment animation.
6. Route navigation occurs at the intended visual impact point.
7. The project detail page enters.
8. The spear reaches its post-transition placement.

## Interaction state mapping

| Phase | Project UI | Spear | Completion signal |
| --- | --- | --- | --- |
| Focus | Hover or keyboard focus remains visible | Acknowledges the focused record | Focus changes or selection occurs |
| Commitment | Selected project is locked and identified | Begins anticipation / commitment | Reviewed impact cue |
| Route transition | Archive exits or reacts to impact | Performs impact and follow-through | Route and destination are ready |
| Detail entry | Correct project content enters; focus transfers logically | Moves toward post-transition outcome | Destination settles |

Final durations and easing are **TBD after motion review**.

## Separation of concerns

Treat these as separate implementation concerns joined by explicit shared state or animation events:

- **Project-selection animation:** how the record and archive acknowledge focus, lock, and impact.
- **Route-change timing:** the reviewed visual event at which navigation occurs.
- **Post-transition spear placement:** the destination scene outcome after navigation.

Changing one concern should not require embedding its timing or target-specific behavior inside the others.

## Post-transition spear placement

The final post-transition spear placement is unresolved. Record the approved outcome before implementation:

| Outcome | Meaning | Status / notes |
| --- | --- | --- |
| `primary-scene` | Spear remains a dominant element in the detail composition | Under consideration |
| `exiting` | Spear follows through and leaves the viewport | Under consideration |
| `docked` | Spear settles into a restrained navigation or layout role | Under consideration |
| `hidden` | Spear is absent from the settled detail view | Under consideration |

## Route-change timing

The route should change at the approved visual impact point using an animation event or completion callback where practical. Exact timing is **TBD after motion review**. Do not navigate immediately on selection or coordinate independent systems with duplicated arbitrary timeouts.

## Input lock and recovery

Lock further project selections after commitment. Release the lock when the destination settles or when a defined fallback completes. If animation or WebGL fails, navigate through the accessible DOM path without waiting indefinitely.

## Reduced-motion expectations

- Selection feedback must remain clear.
- Navigation must still occur.
- Cinematic spear motion may be shortened or skipped.
- Keyboard focus must remain visible and logical.
- Do not add an artificial delay when the cinematic sequence is omitted.

## Unresolved decisions

- Final post-transition spear placement
- Exact acknowledgement, commitment, and impact motion
- Route-change impact cue and timing
- Detail-page entry behavior and focus destination
- Mobile and touch selection behavior
