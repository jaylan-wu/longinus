# Main Navigation Transition

## Current implementation status

**Specification status: planned and awaiting an authored motion reference.**
[`TASKS.md`](../../../TASKS.md) Milestone 3 owns the live implementation
checklist. This file owns the intended transition sequence, coordination
signals, fallback behavior, and motion decisions.

The sequence below is approved interaction direction, not current or motion-approved behavior.

## Purpose

Define how an available main-navigation choice coordinates the structured DOM interface, page-owned 3D spear scene, and hash-route change.

## Participating systems

| System | Responsibility | Current status |
| --- | --- | --- |
| Navigation target | Communicate focus, commitment, lock, and destination | CSS focus/hover only |
| System UI | Report real target and interaction phase | Planned |
| Home content | Exit or restructure legibly | Planned |
| Home spear scene | Aim, anticipate, impact, and follow through | Planned; current model is static procedural staging |
| Destination | Enter, settle, and receive logical focus | Planned |

## Canonical phases

Use the shared Longinus terms defined in [`AGENTS.md`](../../../AGENTS.md)
rather than a second naming system:

```text
idle → focused → committing → impact → transitioning → settled
```

| Phase | Entry condition | DOM expectation | Spear expectation | Exit condition |
| --- | --- | --- | --- | --- |
| `idle` | Home is interactive with no target | Stable interface | Restrained idle pose/motion | An available target receives pointer or keyboard focus |
| `focused` | Target is identified | Target and real system state are clear | Orient toward target | Focus leaves or activation occurs |
| `committing` | User activates target | Lock competing selections and identify destination | Anticipation/wind-up | Reviewed impact cue |
| `impact` | Spear reaches disruption cue | Brief target-local red disruption | Thrust/impact | Impact completion event |
| `transitioning` | Exit begins | Home leaves/restructures coherently | Follow-through | Destination route and entry are ready |
| `settled` | Destination is active | Restore input and logical focus | Destination-owned outcome | Next interaction |

Not every component needs a global state machine. Home does need one clear feature-owned phase and target source when this interaction is implemented.

## Input behavior

- Pointer and keyboard focus should enter the same `focused` state.
- Focus alone must not navigate.
- Enter, Space on an appropriate button, pointer activation, or an intentional touch commitment should enter `committing`.
- Lock competing in-page selections after commitment without trapping browser controls.
- Music and Playground remain disabled until routes exist and must not enter this sequence.

The final touch behavior, cancellation policy, and lock recovery are unresolved.

## Coordination requirements

| Order | Event | Required signal | Timing |
| --- | --- | --- | --- |
| 1 | Target becomes focused | Home state enters `focused` with stable target ID | TBD after motion review |
| 2 | Activation locks target | Home state enters `committing` | TBD after motion review |
| 3 | Spear reaches disruption cue | Shared event enters `impact` | TBD after motion review |
| 4 | Impact completes and Home exits | Completion event enters `transitioning` | TBD after motion review |
| 5 | Route/destination settles | Destination-ready signal enters `settled` and moves focus | TBD after route/motion review |

Do not copy the Projects timeout sequence into Home. Navigate at a reviewed event or completion callback rather than from unrelated duplicated delays.

## Reduced-motion behavior

- Preserve focused, selected, locked, destination, and route state.
- Keep navigation prompt and avoid an artificial cinematic delay.
- Shorten or omit large spear travel, camera movement, interface displacement, distortion, and overshoot.
- Move focus logically after navigation.

## Failure behavior

Home's semantic links and CSS spear silhouette already remain independent of successful canvas rendering. The future transition must preserve that property: if WebGL or motion fails, release any in-page lock and complete navigation without waiting indefinitely.

## Unresolved decisions

- Final spear asset and authored motion reference
- Per-destination aim and follow-through
- Exact durations, easing, impact event, and route-change cue
- Destination entry and focus target
- Cancellation and recovery policy
- Intentional mobile/touch commitment behavior
