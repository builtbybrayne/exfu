# ExFu Website

## Preview tool: scrolling workaround

The Claude Preview screenshot tool cannot reliably capture scroll positions on this site. Two workarounds:

1. **Tall viewport**: Use `preview_resize` with a very tall height (e.g. 2400px) so the target content fits without scrolling. Reset to `preset: "desktop"` after.
2. **Separate test pages**: For comparisons (fonts, layouts), create a temporary page at `src/pages/test-*.astro` with all variants visible at once. Delete after use.

Do NOT waste time trying `scrollTo`, `scrollIntoView`, or hash navigation for screenshots. They don't work reliably in this preview context.

## Design constraints

- Warm earth-tone palette, no cool greys
- Never change colours or visual properties without explicit approval
- Sticky note copy = inner monologue tone, not feature specs
- Visual/scannable over paragraphs of text
- For precise visual positioning, use `?debug` URL param tools, don't guess from screenshots
<!-- apv:orientation -->
## agent-plan-visualiser (APV) tracking

This repository is tracked by agent-plan-visualiser. The append-only event
log at `.apv/events.jsonl` is the source of truth for planning state;
plans and status prose are secondary. After each logical unit of work and
**before committing**, run /apv-capture to append a sealed event block —
the pre-commit guard rejects uncaptured commits (`git commit --no-verify`
is the sanctioned hatch for capture-free trivia). Land branches on main via
/apv-merge; the gate hooks refuse a main that fails the integrity check.
