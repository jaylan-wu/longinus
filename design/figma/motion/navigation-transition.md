# Main Navigation Transition

## Current implementation status

The homepage currently provides static pointer-hover and keyboard-focus feedback, but this full coordinated navigation transition has not been implemented. The final 3D Spear model is also outstanding, so the aiming, commitment, impact, follow-through, and route-change timing below remain design targets rather than approved current behavior.

## Purpose

Define how a committed navigation choice coordinates the structured DOM interface, the 3D spear, and route navigation between main portfolio sections.

## Participating UI and 3D elements

| Element | Responsibility | Motion reference / notes |
| --- | --- | --- |
| Navigation target | Communicate focus, commitment, and lock state | TBD after motion review |
| System UI | Report real interaction and destination state | TBD after motion review |
| Current page content | Exit or restructure legibly | TBD after motion review |
| Spear scene | Aim, commit, impact, and follow through | TBD after motion review |
| Destination page | Enter and settle | TBD after motion review |

## Interaction states

```text
idle → aiming → committing → transitioning → complete
```

| State | Entry condition | Expected UI state | Expected spear state | Exit condition |
| --- | --- | --- | --- | --- |
| `idle` | Page is interactive | Stable; no target committed | Restrained idle behavior | A target receives focus |
| `aiming` | Target is focused | Target and system state are clear | Acknowledges or orients toward target | Focus leaves or selection occurs |
| `committing` | User selects target | Target locks; further selection is blocked | Anticipation / commitment begins | Defined transition event |
| `transitioning` | Exit sequence begins | Current view exits or restructures | Impact and follow-through | Destination is ready and entered |
| `complete` | Destination settles | Input restored with logical focus | Destination-specific placement | Next interaction |

## Trigger

Pointer, keyboard, or touch selection of an available main navigation target. Focus alone enters `aiming`; it does not navigate.

## Input-lock behavior

Lock competing navigation selections once `committing` begins. Do not trap browser-level controls. Define restoration and cancellation behavior during implementation review.

**Final timing:** TBD after motion review.

## Animation sequence

| Order | Event | Completion signal | Duration / easing |
| --- | --- | --- | --- |
| 1 | Target becomes focused and spear acknowledges it | Shared state enters `aiming` | TBD after motion review |
| 2 | Selection locks and anticipation begins | Shared state enters `committing` | TBD after motion review |
| 3 | Interface and spear reach the transition cue | Explicit animation event or callback | TBD after motion review |
| 4 | Current view exits while spear follows through | Shared state enters `transitioning` | TBD after motion review |
| 5 | Destination enters and input is restored | Shared state enters `complete` | TBD after motion review |

## Route-change timing

Navigate at an explicitly reviewed visual event, not from an unrelated duplicate timeout. The exact event and timing are **TBD after motion review**.

## Reduced-motion behavior

- Keep focus, selection, and destination feedback clear.
- Preserve navigation and logical focus transfer.
- Shorten or omit cinematic spear motion and large interface displacement.
- Avoid introducing an artificial delay solely to mimic the full-motion sequence.

## Failure or fallback behavior

If WebGL, the 3D scene, or an animation fails, keep the DOM navigation operational. Release the input lock, navigate without waiting indefinitely, and preserve a clear selected state. The existing non-WebGL spear fallback may communicate the visual motif without becoming a route dependency.

## Unresolved decisions

- Exact durations, easing, and impact event
- Per-destination spear acknowledgement and follow-through
- Route-change cue and destination entry overlap
- Input-lock cancellation and recovery details
- Mobile navigation gesture and focus behavior
