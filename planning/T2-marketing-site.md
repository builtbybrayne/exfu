---
id: T2-marketing-site
plan_kind: thematic
tier: 2
status: draft
---

# T2 — Marketing site and setup journey

**Parent:** `T1-overview.md`

**Why.** The single working surface for website changes: page content,
the setup journey, and the design system all move together, and one T2
keeps capture simple while the site is small.

**How.** Content changes track the plugin ecosystem (see T1 — the site
follows the product). The setup journey is deliberately minimal: the user
should reach a working install from /start alone; /prepare covers
machine readiness; /install exists for people arriving from the plugin
manifests' homepage link. Solo plugin only on the site for now — team and
team-admin ship on the marketplace but stay unmentioned until they are
ready to sell.

**What — current state (2026-08-18).**

- Homepage: hero with sticky notes, how-it-works, about, for-business,
  contact. Nav deliberately does not link the setup pages.
- /prepare: apps (Claude required; Dropbox optional, only for phone
  access or sharing), create an `ExFu Library` folder, Claude settings,
  connectors.
- /start: marketplace add + solo install commands, setup prompt, guides.
- /install: solo-only, versionless, marketplace-first.
- Retired: zip downloads (files unlinked in public/downloads), the
  fetch-model `public/clients/` corpus, and the stale `plugin/` tree.

**Open threads.**

- External library viewers (Obsidian, Tolaria): mention only after
  interop is actually verified (operator ruling, 2026-08-18).
- public/downloads zips: unlinked but still served; decide their fate.
- Nav "Install" link stays commented out until the journey should be
  public.
