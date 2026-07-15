# Approved Design Foundations

Record only reviewed decisions here. Reconcile Figma values with existing CSS tokens deliberately; do not automatically turn every Figma measurement into a new CSS variable.

## Current implementation status

These values reflect the homepage's current working 2D implementation as of 2026-07-14. The homepage composition is in a good state but remains in progress: font assets are still provisional, and the final authored 3D Spear model has not been implemented. Spear geometry, materials, lighting, and camera decisions should be recorded after that asset is integrated and reviewed.

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

| Text role | Current font stack | Existing CSS token | Current use | Status / notes |
| --- | --- | --- | --- | --- |
| Display | `"Times New Roman Condensed", "Times New Roman", Times, serif` | `var(--font-display)` | Large identity type, title-card text, `LONGINUS`, and `00` | Provisional system stack; no font asset is bundled. `Times New Roman Condensed` may fall back to Times New Roman depending on the device. |
| Interface | `Arial, Helvetica, sans-serif` | `var(--font-sans)` | Base interface text and the homepage `PORTFOLIO:` label | Existing system stack; no font asset is bundled. |
| Metadata / identifier | `"SFMono-Regular", Consolas, "Liberation Mono", monospace` | `var(--font-mono)` | System labels, navigation indices, location, and availability state | Existing system stack; the rendered face varies by operating system. |
| Homepage navigation display | `"Times New Roman Condensed", "Times New Roman", Times, serif` | `var(--font-display)` | Projects, Music, Playground, and About labels | Current homepage treatment at weight `600`; no font asset is bundled. |

### Current homepage type mapping

| Element | Font role | Current implementation value | Figma note |
| --- | --- | --- | --- |
| `JAYLAN WU` | Display | `var(--font-display)`, weight `600` | Uses the original Times-based display stack with a moderately stronger weight. |
| `PORTFOLIO:` | Interface | `var(--font-sans)`, `2rem`, weight `700` | Uppercase sans-serif structural label. |
| Random title-card phrase | Display | `var(--font-display)`, `2.2rem`, weight `700` | Copy changes once per page load; design enough horizontal room for the longest approved phrase. |
| Primary navigation labels | Homepage navigation display | `var(--font-display)`, `3.3rem`, line height `0.88`, weight `600`, letter spacing `-0.06em` | Times-based direction; still under visual review. |
| System and footer labels | Metadata / identifier | `var(--font-mono)`, generally `0.875rem` | Uppercase analytical interface text. |
| `LONGINUS` watermark | Display | `var(--font-display)`, outlined, weight `400` | Right-aligned ambient typography with restrained opacity. |
| `00` scene index | Display | `var(--font-display)`, weight `700` | Two separately spaced glyphs; intentionally heavier than the current Figma reference. |

These fonts are current implementation choices, not final approved font assets. Figma should use the closest available face from each stack and record any metric differences. If a final typeface is approved, add the licensed font asset to the repository and update both the CSS token and this document together.

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
| Desktop — 1440 × 900 | 90 px ambient square grid; 16 columns across the viewport | Aligns to the viewport origin and supports compositional measurement without defining component boundaries | Primary art direction | In review |
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
