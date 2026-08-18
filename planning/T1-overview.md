---
id: T1-overview
plan_kind: thematic
tier: 1
status: draft
---

# T1 — The ExFu website

**Why.** exfu.ai is the public face of ExFu: it has to convert a curious
knowledge worker into an installed user, and hand an already-committed one
a frictionless path to a working Agent Library. Nothing on the site is
documentation for its own sake — every page either persuades or onboards.

**How.** The site follows the product; it never leads it. The ExFu plugins
(public source `ExFu/agent-library`, distributed via the `exfu` marketplace
at `ExFu/exfu-marketplace`) are the source of truth for vocabulary,
storage recommendations, and install mechanics — the website mirrors them
and must be re-checked whenever the plugins move. User-facing register is
the marketed vocabulary (library, Agent Librarians, wow, "your AI");
"substrate" and other internal terms stay off the site.

**What.** An Astro static site (src/pages, src/components, deployed via
Netlify) with two strands:

- **Marketing** — the homepage narrative (hero, how-it-works, about,
  for-business) selling Claude-as-collaborator.
- **Setup journey** — /prepare → /start (the live user path) plus
  /install (kept as the plugin manifests' homepage URL; not linked from
  the journey).

**Constraints** (standing, from repo instructions): warm earth-tone
palette, no cool greys; no colour/visual changes without explicit
approval; sticky-note copy in inner-monologue tone; visual/scannable over
prose; no em-dashes in copy.

**Children.** `T2-marketing-site` carries the working surface of both
strands until volume justifies splitting them.

## History

- 2026-08-18: corpus seeded when the stale `plugin/` tree left main
  (plugins long since extracted to their own repo) and the website strand
  gained first-class APV tracking of its own.
