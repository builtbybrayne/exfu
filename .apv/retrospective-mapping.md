---
project_name: exfu-website
authored_by: al (drafted by the backfill agent from a read-only survey, 2026-07-03 — review before the full run)
authored_at: 2026-07-03
target_schema_version: 0.4.0
---

# Retrospective mapping for exfu_website

One repo, two workstreams: the **marketing/website** (Astro site at the
root — `src/`, `public/`, `assets/`) and the **ExFu plugin suite**
(`plugin/` — solo/team/team-admin Claude Code plugins, their build system,
and a semi-native planning corpus). Treat them as distinct strands: website
commits are mostly implicit-work; plugin commits usually serve a plan.

## Plan-equivalent artefacts

- Path: **`plugin/planning/*.md`** — NOT the standard `planning/` location.
- Convention: near-native T1/T2/T3 + `M<n>-` milestones (including a
  sub-milestone `M2.1-exfu-dashboard`), **but no YAML frontmatter**:
  derive every plan id from the FILENAME STEM verbatim (`T3-versioning.md`
  → plan `T3-versioning`; `M2-substrate-redesign.md` → milestone
  `M2-substrate-redesign`). Parents appear as bold prose lines
  ("**Parents:** `T2-substrate-architecture.md` (domain),
  `M2-substrate-redesign.md` (milestone)") — use them for
  `relationship.spawns` on creation; "**Status:**" prose lines are weak
  lifecycle evidence (prefer commit-message evidence).
- `cross-cut-*.md` are crosscut workstream plans (the local equivalent of
  the XT convention): plan entities, ids = filename stems.
- `v0.3.0-*.md`, `v0.2.0-substrate-revision.md` etc. are **revision/
  reconciliation documents** — plan entities in their own right AND prime
  fulcrum evidence: their prose frequently states why an approach was
  replaced (citable, recovered rationale).
- `audit-skills-and-resources.md`, files under `research/` and
  `diagram-instructions/`: plan entities only if a commit clearly works
  them as plans; otherwise fold into the touching commit's summary.
- The website strand has NO planning artefacts — never invent plans for it.

## Decision artefacts

- No ADRs and no decisions log. Recovered rationale lives in: commit
  message bodies (release commits often say why), the `v0.*-revision`
  documents, and supersession banners inside documents (e.g.
  `plugin/MORNING-HANDOVER.md` opens with a dated "Superseded" note
  explaining a conventions revision — citable).

## Blocker conventions

- None observed. Do not force blockers.

## HITL-question conventions

- No formal marker. "Open questions" style sections inside plans may
  exist — treat as plan content, not entities, unless a commit clearly
  resolves one.

## Implicit-work expectation

- **High on the website strand**, especially the early era (subjects like
  "tweaks", "fix contact 404", "favicons etc") — pure implicit-work,
  created-and-completed per commit.
- `public/downloads/*.zip`, `dist/`, favicon regenerations: build/release
  artefacts — fold into the release commit's summary, never separate
  entities.
- Merge commits titled "Merge claude/<branch>: ..." land whole features:
  attribute to the plans the description names, else implicit-work.

## Known pivots (recovered rationale — citable)

| commit (sha or subject) | what pivoted | rationale (citable source) |
|---|---|---|
| "Split ExFu install into 3 Claude Code plugins (solo, team, team-admin)" | one install → three plugin variants | the commit and T1-overview's workstreams section state the split |
| "Switch plugin distribution to .zip in public/downloads/" | distribution mechanism pivot | commit message states it |
| "Total forgetting: remove the retired folder-type concept entirely" | folder-type concept retired | commit subject states the removal is deliberate ("total forgetting") |
| MORNING-HANDOVER.md supersession banner (2026-06-10) | librarians → agents conventions revision (librarians.py→agents.py, nightly-librarians→nightly-agents, registry rename) | the banner text itself |
| "v0.3.2: changelog vocabulary sweep..." era | substrate/wow become glossed brand terms | "Communication contract" commit subject |

## Anything else the extractor should know

- Release-style subjects (`v0.3.4: ...`) mark milestone-era progress:
  emit `entity.progressed` on the plans the body/diff clearly serves;
  the version number itself is not an entity.
- `node_modules/`, `dist/`, `package-lock.json`: never attribute work.
- The plugin planning corpus arrived in bulk around the "Post-plugin-
  planning" commit — expect many `entity.created` in that block; that is
  correct, not noise.
