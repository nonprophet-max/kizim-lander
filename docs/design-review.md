# Kizim design review — 31 October 2026

The five-page redesign preserves the original graphite/gold palette, Red Hat font family, editorial paragraphs, biographies and 24 dashboard data labels. The original deployment remains separate from this feature branch.

## Design sources

- [Emil Kowalski's official design-engineering skill](https://github.com/emilkowalski/skills/blob/main/skills/emil-design-eng/SKILL.md): purposeful feedback, short transitions, reduced motion, native-feeling keyboard interactions.
- [shadcn documentation](https://ui.shadcn.com/docs): reused the project's Radix-backed Button, Sheet, Tabs, Badge and Separator sources.
- [Neo-brutalist component system](https://www.neobrutalism.dev/docs/): flat fields, visible structure, square geometry and selective hard shadows, interpreted with an editorial/minimalist treatment.

## Verification

- `npm run check:content`: 73 original text/data checks pass against a frozen snapshot of main at 06dff9d. Only whitespace reflow is ignored.
- `npm run check`: passes. Excludes pre-existing orphaned example/demo files whose imports point at removed components; application, server and shared source remain checked.
- `npm run build`: passes. Existing Browserslist age warning remains; dependency upgrades are outside this change.
- `git diff --check`: passes.
- Browser: all five routes inspected. No horizontal overflow at 320, 390, 768, 1024 and default desktop widths; large desktop home inspected at 1440px.
- Solution: real tab semantics verified (original had zero tab roles); ArrowRight changes selected tab and content.
- Sheet: compact 320×480 navigation scrolls; selecting a route ends focused on main after exit; Escape returns focus to trigger after exit.
- Hash mode: Explore and Skip controls preserve the route and work without fragment collisions.
- Reduced-motion CSS: removed an important Sheet duration that overrode the preference rule. Cascade checked; OS preference was not changed or browser-emulated.
- Final production build served separately; all routes load, one h1 each, no browser runtime errors observed.

An independent review found four P2 issues: mobile route focus, short-screen menu clipping, fragment/hash conflicts and the reduced-motion cascade. Each was addressed in one correction pass. A narrow-phone MVP headline wrap was also corrected from visual evidence. No additional material findings or deferred minors.

## Deliberate boundaries

The new coverage, relationship and workflow diagrams illustrate existing source statements. They do not add measured results, product screenshots, customer data or verified performance claims. Existing claims and biographies have not been fact-checked or rewritten. The site remains static with no functional VIP dashboard or new backend integration.
