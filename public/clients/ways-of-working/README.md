# Ways of Working

version: 2
source: https://exfu.ai/clients/ways-of-working/

This folder contains the reference documentation for how this substrate works. Every Claude instance should read this when it needs to understand the conventions, structure, or philosophy behind the user's way of working.

## Contents

- **substrate-guide.md** — The complete reference. How the substrate is structured, how to find things, how to create and maintain content, what the conventions are.

## Dependencies

None — this is the foundational reference. Other folders depend on this, not the other way around.

## Versioning

The `version` field above tracks the installed version of this folder's content. The source URL points to the canonical version hosted by ExFu. A scheduled task can compare the installed version against the source and notify the user when updates are available.

When the user or their team modifies content in this folder, increment the version in the affected file and add a changelog entry (see the rule below). Team-specific customisations take precedence over the canonical ExFu version — updates from ExFu are suggestions, not overrides.

## Changelog rule (applies to any versioned file in the substrate)

Any file that carries a `version:` line also carries a `## Changelog` section. When Claude bumps the version, it must append a new entry to the changelog on the same edit. One line per entry:

```
- YYYY-MM-DD v[N]: one-line summary of what changed and why.
```

Don't rewrite history. New entries go at the top of the Changelog section (newest first). The changelog is append-only.

## Changelog

- 2026-04-20 v2: Added the changelog rule to this README. Bumped substrate-guide to v2 (see its changelog for details).
- 2026-04-15 v1: Initial version.
