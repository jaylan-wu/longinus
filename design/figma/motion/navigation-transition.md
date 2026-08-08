# Main Navigation Transition

## Current implementation status

**Specification status: planned beyond focused-target response and awaiting an
authored motion reference.**
[`TASKS.md`](../../../TASKS.md) Milestone 3 owns the live implementation
checklist. This file owns the intended transition sequence, coordination
signals, fallback behavior, and motion decisions.

The sequence below is approved interaction direction, not complete or
motion-approved behavior. Runtime defaults to the dark Spear scene and can
select the Rei-light Ramiel scene through the typed theme contract. Both scenes
are Home-owned and lazy-loaded; only Ramiel currently maps target focus to a
3D orientation. Ramiel must not inherit Spear impact behavior automatically.

## Purpose

Define how an available main-navigation choice coordinates the structured DOM interface, page-owned 3D spear scene, and hash-route change.

## Participating systems

| System | Responsibility | Current status |
| --- | --- | --- |
| Navigation target | Communicate focus, commitment, lock, and destination | Pointer/keyboard focus shares one target; Rei-light Ramiel interprets it, while commitment remains planned |
| System UI | Report real target and interaction phase | Planned |
| Home content | Exit or restructure legibly | Planned |
| Home 3D motif scene | Interpret focus and later commitment according to the active theme | Dark Spear and light Ramiel scenes coexist behind lazy feature dispatch; light Ramiel focus response is staged, while dark Spear focus and both commitment/impact interpretations remain planned |
| Destination | Enter, settle, and receive logical focus | Planned |

## Canonical phases

Use the shared Longinus terms defined in [`AGENTS.md`](../../../AGENTS.md)
rather than a second naming system:

```text
idle → focused → committing → impact → transitioning → settled
```

Source now defines this exact union once as `InteractionPhase`. Home currently
derives only `idle` and `focused`; the shared type does not imply that the later
phases or their transition rules are implemented.

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

Home's semantic links and active-theme CSS Spear or Ramiel fallback remain
independent of successful canvas rendering. The active scene is lazy-loaded
inside the same Home-owned boundary. This is source-level resilience only; the
new runtime dispatch has not received browser failure validation. If WebGL or
motion fails, release any in-page lock and complete navigation without waiting
indefinitely.

## Unresolved decisions

- Final dark Spear asset and authored motion reference
- Approved light-mode exported reference and Ramiel-specific commitment role
- Per-destination aim and follow-through
- Exact durations, easing, impact event, and route-change cue
- Destination entry and focus target
- Cancellation and recovery policy
- Intentional mobile/touch commitment behavior
