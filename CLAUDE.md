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
