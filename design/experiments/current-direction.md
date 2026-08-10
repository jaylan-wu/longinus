# Current Direction Composition Experiment

> **Branch-only design study.** This document records the `current-direction`
> experiment and the selected Spatial direction. It does not replace the
> implementation on `main` or authorize a merge.

## Purpose

This study asks how the final About chapter can show Engineering, Game Design,
and Education acting as connected perspectives that shape one current
direction. The composition uses the runtime About copy and identity-axis
records as its source of truth. It preserves the established typography,
semantic color roles, persistent chapter navigation, and right-side motif
region.

After reviewing both prototypes, the Spatial Identity direction was selected
for further development on 2026-08-10. The temporary query selector, baseline
comparison, and Synthesis runtime implementation were removed. The comparison
history remains in this document and branch history; nothing was merged.

## Selected composition — Spatial Identity

The three axes occupy an asymmetric relationship field around an independent
Current Direction resolution. The default state keeps the complete
relationship visible. Pointer hover and keyboard focus preview an axis; click,
Enter, or Space persists it for touch and keyboard review. The focused node
moves inward, its connection gains orange system emphasis, the central status
updates, and the surrounding field counterweights the change without removing
the other perspectives.

The three current exploration areas emerge from a shared junction as staggered
lavender output nodes. The graph is stable when idle: it has no ambient orbit,
particles, bounce, or continuous DOM motion. On wide desktop, the visible
chapter title begins at the same canonical content anchor as the preceding
About chapters, and the title, narrative rail, direction statement, Spatial
field, exploration outputs, and compact Longinus record remain visible within
one viewport.

## Historical comparison — Three-Axis Synthesis

The three axes become offset interpretation channels feeding a narrow
resolution spine. Their regions are open typographic fields rather than equal
cards. Focusing a channel strengthens its structural rule, advances it toward
the shared resolution, and updates the visible emphasis while retaining all
three statements.

The current exploration areas were numbered outputs below the resolution
rather than a conventional list. This version favored analytical hierarchy,
aligned rules, and asymmetrical channel lengths over Spatial Identity's more
personal relationship. It is no longer rendered by the application.

## Final chapter structure

The selected composition includes the five-step About narrative, the exact
current direction statement, and a `REC-001 / Current experiment` Longinus record. The
record only uses project-supported descriptors: interactive portfolio,
software engineering foundation, and testing ground. The existing Longinus
reflection remains intact.

The chapter then becomes quiet in a separate viewport composition around `YOU
ARE (NOT) ALONE.`. View Projects, Contact, and Return Home remain secondary
actions after substantial negative space and remain visible with the closing
statement in the same window.

## Spear and motion

The local axis state never reaches the motif. On desktop, the spear remains
inside the existing sticky right-side scene track and does not target any axis.
Current Direction does not change the spear's established position, scale, or
X/Z orientation. The spear continues its established axial rotation,
scroll-direction reversal, and momentum; the branch does not turn that motion
into an idle endpoint.

On narrow layouts, the existing single scene temporarily becomes a compact,
partially cropped fixed right-edge anchor while Current Direction is observed.
It remains behind the narrative and above neither the content nor the existing
bottom chapter navigation. No duplicate canvas or spear asset is introduced.

Chapter entrance uses the actually observed chapter rather than the requested
navigation target, preventing the sequence from finishing offscreen during a
smooth chapter jump.

## Accessibility and responsive behavior

Axis controls are native buttons with pressed state, controlled relationships,
visible orange focus outlines, and equivalent hover/focus/tap meaning. All
axis statements, exploration areas, the Longinus reflection, closing, and
actions remain in semantic HTML without JavaScript animation or WebGL.

At `1240px` and below, the spatial graph becomes a stepped normal-flow
relationship before its absolute geometry becomes too narrow. The content is
allowed to grow beyond one viewport at those widths so the published copy,
touch targets, and readable type are not mechanically compressed. At `1080px`
and below, the experiment metadata stacks. At `760px` and below, the system
uses a single-column touch composition rather than a scaled desktop diagram.
The closing remains a separate viewport frame, and its actions clear the
persistent mobile chapter navigation.

Reduced motion removes entrance delays and spatial transforms, preserves the
focus hierarchy, exposes final content immediately, and keeps the spear in its
stable, established position without continuous rotation.

## Validation snapshot — 2026-08-10

- `corepack yarn typecheck`
- `corepack yarn lint`
- `corepack yarn build`
- `git diff --check`
- Browser matrix for the selected composition at `1920×1080`, `1440×900`,
  `1440×800`, `1280×720`, `1241×900`, `1240×900`, `1080×900`, `761×900`,
  `760×900`, `390×844`, and `320×568`
- Pointer hover/click across all axes and keyboard Tab/Enter/Space
- Touch persistence, reduced motion at desktop and narrow sizes, and
  WebGL-unavailable semantic fallback
- Scene/canvas bounds, horizontal overflow, content counts, and unchanged
  persistent-navigation bounds

The repository defines no automated test script or tracked browser-test suite.
The production build retains the existing large-chunk warning. Exact final
motion tuning and approval for merge remain intentionally unresolved.

This branch-specific matrix followed the broader About audit recorded in
`TASKS.md`, where the alternate variants initially received a smaller
two-viewport smoke check. Cleanup separated pointer and keyboard preview state,
removed low-contrast whole-node dimming, scoped the narrow fixed scene to the
dark Spear motif, made feature CSS ordering explicit, and removed inert
wrappers and declarations. After Spatial was selected, the temporary comparison
mechanism and Synthesis runtime source were removed, and the selected chapter
was recomposed into one wide-desktop content window plus one closing window.
