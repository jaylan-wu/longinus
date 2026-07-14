# Approved Design Foundations

Record only reviewed decisions here. Reconcile Figma values with existing CSS tokens deliberately; do not automatically turn every Figma measurement into a new CSS variable.

## Color palette

The current palette is defined by CSS custom properties in `src/index.css` and semantic rules in `AGENTS.md`. Reference the existing token (for example, `var(--color-background)`) instead of duplicating its value here unless a comparison is required during review.

| Role | Figma style or variable | Existing CSS token | Status | Notes |
| --- | --- | --- | --- | --- |
| Background | TBD | `var(--color-background)` | Existing | |
| Surface | TBD | `var(--color-surface)` | Existing | |
| Foreground | TBD | `var(--color-foreground)` | Existing | |
| Muted | TBD | `var(--color-muted)` | Existing | |
| Spear / disruption | TBD | `var(--color-primary)` | Existing | Use only for spear-related impact and disruption. |
| Identity / personal context | TBD | `var(--color-secondary)` | Existing | |
| Active system state | TBD | `var(--color-highlight)` | Existing | |

## Typography

Existing font-family tokens are `var(--font-display)`, `var(--font-sans)`, and `var(--font-mono)` in `src/index.css`.

| Text role | Figma style | Existing CSS token | Size / line height | Weight | Status / notes |
| --- | --- | --- | --- | --- | --- |
| Display | TBD | `var(--font-display)` | TBD | TBD | |
| Interface | TBD | `var(--font-sans)` | TBD | TBD | |
| Metadata | TBD | `var(--font-mono)` | TBD | TBD | |

## Spacing

| Use | Figma value | Existing token or implementation | Status | Notes |
| --- | --- | --- | --- | --- |
| Page inset | TBD | TBD | Unresolved | |
| Region gap | TBD | TBD | Unresolved | |
| Component spacing | TBD | TBD | Unresolved | |

## Layout and canonical viewport

The canonical desktop comparison viewport is `1440 × 900`. It is a reference frame, not a fixed implementation size.

| Viewport / region | Grid or bounds | Alignment rules | Responsive intent | Status |
| --- | --- | --- | --- | --- |
| Desktop — 1440 × 900 | TBD | TBD | Primary art direction | In review |
| Mobile | TBD | TBD | Intentional reinterpretation | Unresolved |

## Borders and dividers

| Purpose | Figma style | Existing token or implementation | Status | Notes |
| --- | --- | --- | --- | --- |
| Separation | TBD | TBD | Unresolved | Must communicate structure or state. |
| Connection | TBD | TBD | Unresolved | Must communicate a real relationship. |
| Focus / selection | TBD | TBD | Unresolved | Preserve visible keyboard focus. |

## Iconography

| Icon / function | Source | Size | Accessible label behavior | Status / notes |
| --- | --- | --- | --- | --- |
| TBD | TBD | TBD | TBD | |

## Imagery

| Image / role | Source file or reference | Crop / fit | Responsive behavior | Status / notes |
| --- | --- | --- | --- | --- |
| TBD | TBD | TBD | TBD | |

Runtime imagery belongs in `src/assets/` or `public/` as appropriate. Approved full-page comparison exports belong in `design/figma/references/` and must not be used as application UI.

## Accessibility

| Requirement | Approved behavior | Implementation reference | Verification status |
| --- | --- | --- | --- |
| Color contrast | TBD | TBD | Not reviewed |
| Keyboard focus | Visible and logical | Existing focus patterns | Not reviewed |
| Reduced motion | Preserve state and navigation clarity | `prefers-reduced-motion` handling in `src/index.css` | Not reviewed |
| Semantic structure | TBD | React DOM components | Not reviewed |

## Responsive behavior

| Element / region | Desktop intent | Touch / mobile adaptation | Intermediate widths | Status |
| --- | --- | --- | --- | --- |
| Navigation | TBD | TBD | TBD | Unresolved |
| Primary content | TBD | TBD | TBD | Unresolved |
| Spear framing | TBD | TBD | TBD | Unresolved |
| System metadata | TBD | TBD | TBD | Unresolved |

## Unresolved decisions

| Decision | Options | Owner / review source | Status | Notes |
| --- | --- | --- | --- | --- |
| TBD | TBD | TBD | Open | |
