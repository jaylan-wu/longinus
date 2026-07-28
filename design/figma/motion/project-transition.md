# Project Selection Transition

## Current implementation status

**Staged.** The Projects archive has a feature-owned phase/selection hook, matching DOM and procedural-spear responses, an input lock, a two-tap touch path, reduced-motion timing, and hash navigation. It has not been compared with a Projects Figma frame, final spear model, or authored motion reference.

[`TASKS.md`](../../../TASKS.md) Milestone 5 owns the live implementation
checklist. This file owns the transition-specific current sequence, provisional
timings, intended signals, fallback behavior, and unresolved motion decisions.

Current code in `src/features/projects/projectTransition.ts` uses:

- `idle`, `focused`, `committing`, `impact`, and `transitioning` phases;
- a `settled` type value that is never reached because hash navigation unmounts the archive;
- `420ms` before impact;
- another `280ms` before transitioning;
- navigation at `920ms` from commitment; and
- a reduced-motion navigation delay of `120ms`.

These are named provisional timeouts, not approved motion. Navigation currently happens during `transitioning`, not from an animation completion event. Project detail has no spear or explicit entry-focus handling, and the recorded current spear destination is `inactive-offstage`.

## Purpose

Define the intended coordinated transition from a focused archive record to its project-detail view while keeping selection response, route timing, destination entry, and spear outcome independently reviewable.

## Current participants

| System | Current implementation | Remaining work |
| --- | --- | --- |
| Project record | Pointer/keyboard focus, selected/disabled state, orange focus, red impact treatment | Figma and manual accessibility review |
| Archive metadata | Footer phase and scene label update from current state | Final metadata behavior and copy review |
| Archive interface | Selected row and interface translate during provisional phases | Approved exit composition/motion |
| R3F spear | Procedural geometry damped toward phase/focus-index targets | Final model and authored motion |
| CSS spear silhouette | Responds to the same phase classes beneath the canvas | Fallback/manual review |
| Project detail | Correct staged record data or not-found DOM state | Narrative, demonstration, entry motion, focus, and spear outcome |

## Current code sequence

1. Pointer hover or keyboard focus calls `focusProject`.
2. A touch pointer's first tap primes/focuses a record; the second tap selects it.
3. Selection records `focusedId` and `selectedId`, locks other records, and enters `committing` (or directly `transitioning` for reduced motion).
4. Normal motion advances by timeout to `impact`, then `transitioning`.
5. Another timeout writes `#projects/<encoded-slug>`.
6. The hash router unmounts the archive and renders metadata-only project detail.

Pending timers are cleared on hook cleanup. There is no cancellation UI, completion callback, explicit lock release before navigation, or detail-page focus transfer.

## Intended phase mapping

Use the canonical Longinus terms defined in
[`AGENTS.md`](../../../AGENTS.md):

```text
idle → focused → committing → impact → transitioning → settled
```

| Phase | Project UI | Spear | Intended completion signal |
| --- | --- | --- | --- |
| `idle` | Stable archive; no active record | Restrained idle | Record focus |
| `focused` | Active record and real metadata are clear | Orients toward record | Focus change or activation |
| `committing` | Lock and identify selection | Anticipation | Reviewed impact cue |
| `impact` | Brief local red disruption | Thrust/impact | Motion completion event |
| `transitioning` | Archive exits | Follow-through | Route and destination readiness |
| `settled` | Detail is active and focused | Approved detail-page outcome | Next interaction |

## Separation of concerns

Keep these concerns separate but coordinated through explicit state/events:

- archive focus/selection response;
- spear anticipation, impact, and follow-through;
- route-change cue;
- project-detail entry and focus; and
- post-transition spear placement.

Changing one concern should not require embedding target-specific animation logic in record buttons or duplicating timing across DOM and scene code.

## Post-transition spear placement

Current staged code records `inactive-offstage`, and project detail renders no spear. That is an implementation placeholder, not an approved destination.

| Candidate | Meaning | Status |
| --- | --- | --- |
| `primary-scene` | Spear remains dominant in the detail composition | Under consideration |
| `exiting` | Spear follows through and leaves the viewport | Under consideration |
| `docked` | Spear settles into a restrained layout/navigation role | Under consideration |
| `hidden` | Spear is absent from the settled detail view | Under consideration |
| `inactive-offstage` | Current code-level placeholder | Staged only |

Record the approved outcome after the project-detail composition is designed.

## Input lock, recovery, and fallback

- Keep competing records locked after commitment.
- Define cancellation or fallback recovery before replacing the current guaranteed navigation timeout.
- Preserve the shortened reduced-motion route path without an artificial full-motion delay.
- If WebGL fails, the CSS silhouette and DOM archive must remain usable and navigation must not wait indefinitely.
- Move focus to a meaningful project-detail target after navigation.

## Unresolved decisions

- Projects and project-detail Figma frames
- Final spear asset and authored focus/commit/impact motion
- Approved durations, easing, route-change event, and fallback deadline
- Detail entry composition and focus destination
- Final post-transition spear placement
- Browser-verified keyboard, two-tap touch, reduced-motion, and WebGL-failure behavior
