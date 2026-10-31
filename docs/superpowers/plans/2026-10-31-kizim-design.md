# Kizim Design Implementation Plan

> Use Superpowers execution, verification and review with pi-loop-police bounded checks.

**Goal:** Substantially improve Kizim's five-page marketing site without changing its written content or palette.
**Architecture:** Existing React/Vite and shadcn primitives; shared editorial CSS tokens and route shell, dedicated page compositions and explanatory SVG/CSS diagrams.
**Spec:** ../specs/2026-10-31-kizim-design.md

## Global constraints
Preserve source copy, palette and existing routes. No backend changes, invented evidence or product data. Work only in this checkout on the feature branch. Reviewable PR/preview, no production overwrite.

## Tasks
- [x] 1. Capture original copy as a verification manifest; confirm baseline type check. Create shared shell, footer, navigation and CSS tokens. Use existing Button and Sheet primitives. Verify menu keyboard/focus behavior and direct routes.
- [x] 2. Recompose Hero, Problem and Solution with preserved text and purposeful diagrams. Use shadcn Tabs. Check tab keyboard operation and content comparison, label result figures as illustrative.
- [x] 3. In parallel, recompose MVP and Team in bounded disjoint files with the same tokens. Preserve every paragraph/data point. Verify mobile layout and copy against the original.
- [x] 4. Run type check and production build, inspect all routes in browser, mobile at 390px, reduced motion, zoom/reflow and direct loads. Fix only observed failures.
- [ ] 5. Independent review of full branch and content parity; one focused correction pass as necessary. Commit, push feature branch, open draft PR and attach it; hand back local preview and screenshot.

## Review focus
Mobile menu close/focus restoration, tab keyboard navigation, long data labels at 390px, route scroll reset and focus, full copy parity including result tab. Use rendered DOM comparison where source structure changes.
