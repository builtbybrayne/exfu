# Substrate Guide

version: 2
source: https://exfu.ai/clients/ways-of-working/substrate-guide.md

This is the reference for how this user's Claude substrate works. Read this whenever you need to understand the structure, conventions, or philosophy behind the way things are organised.

---

## What is a substrate?

A Claude substrate is the combination of files, skills, connectors, and scheduled tasks that together create a persistent way of working with Claude across sessions and devices.

No single component is the substrate. It's the interplay between them:
- **Skills** tell Claude how to behave and what conventions to follow
- **Files** in the knowledge base store context, instructions, plans, and data
- **Connectors** (like the Box MCP connector) make files accessible from any Claude surface
- **Scheduled tasks** handle maintenance, monitoring, and proactive work
- **The local filesystem** (via Box Drive) gives Claude Desktop faster access and capabilities connectors lack

Everything cross-references everything else. Skills reference files. Files reference other files and skills. Scheduled tasks maintain the filesystem. That interdependence is the substrate.

Without it, every Claude conversation starts from zero. With it, Claude has memory, context, instructions, and continuity.

---

## Data tiers

The substrate organises data into three tiers. Understanding this helps you decide where things live and how to access them.

### Tier 1: Project files

The actual work product — source code, presentations, documents, assets. These live wherever makes sense for the project (GitHub, Google Drive, a local folder). Claude Desktop accesses them via the filesystem. They must be locally mounted, not accessed through connectors. If they're cloud-synced, mobile access comes via that sync service.

### Tier 2: Third-party tools

SaaS platforms the user works in — task managers, CRMs, email, wikis. Connected via MCP connectors. No local mounting. Interaction is limited to what each connector supports.

### Tier 3: The substrate core (this knowledge base)

The persistent brain. This Box knowledge base is tier 3. It holds instructions, memory, context, project planning, databases, and ways of working. It is accessible from every Claude surface:

- **Box MCP connector** — universal read/write from any Claude instance (Desktop or mobile)
- **Box Drive** (local mount) — faster access on Desktop, plus delete/move/rename that the connector can't do
- **Scheduled tasks** — daily maintenance via the local filesystem

When filesystem access is available, prefer it. When it's not (mobile, or unmounted sessions), use the connector. The box-filesystem-management skill handles this decision.

---

## Directory structure

```
[root]/
  _meta/              # System infrastructure
  _trash/             # Soft-delete, 60-day recovery
  context/            # Background info and persistent context
    me/               # Personal
    work/             # Professional
    ways-of-working/  # This folder — substrate conventions
    [flexible]/       # Add whatever scopes fit (teams, clients, etc.)
  projects/           # Project docs, planning, context, instructions
  scratch/            # Ephemeral work — drafts, experiments, temp files
  databases/          # Claude-managed structured data
```

### Folder purposes

**`_meta/`** — Infrastructure that supports the substrate. Cleanup scripts, schema files for databases, configuration. Not content — plumbing.

**`_trash/`** — Where deleted files go. Mirrors the source directory hierarchy so recovery is obvious (the path inside `_trash/` tells you where the file came from). Files are permanently deleted after 60 days by the cleanup task. To recover a file, move it back to its original location.

**`context/`** — Persistent background information. Things Claude should know across sessions. `me/` and `work/` are starting points — add whatever scoping makes sense. A team context folder, a client-specific context folder, anything. The structure is flexible; the convention is that it's *about the person or group*, not about a specific project.

**`projects/`** — Everything related to a specific project: planning, decisions, context, instructions, notes. One subfolder per project, nested deeper if needed (by client, by team, etc.). This is for project *thinking* — the actual deliverables (code, designs) live in Tier 1 locations and are referenced from here.

**`scratch/`** — Working space. Anything ephemeral, casual, or in-progress. Skill drafts, document drafts, temporary analysis, experiments. The key rule: nothing casual goes in the root folder. If it's not structural, it goes in `scratch/`.

**`databases/`** — When the user asks Claude to manage structured data (contacts, a pipeline, meeting logs, reminders, inbox captures, whatever) without a dedicated SaaS tool, the data lives here. Each database gets its own subfolder. Internal structure is Claude's responsibility — the user interacts with the data through conversation, not by browsing files. Schema files (describing the database structure) should live in `_meta/` so they're discoverable independently of the data itself.

The `reminders` and `inbox` skills (if installed) each own a subfolder here: `databases/reminders/` and `databases/inbox/`. Other databases follow the same pattern — a dedicated subfolder, a README, and whatever data files the owning skill manages.

### The root folder rule

The root level of the knowledge base is structural only. Every entry at root level is one of the defined folders above. Do not create files or folders at root level casually. If the user asks you to save something and it doesn't clearly belong in an existing folder, put it in `scratch/` and discuss proper placement later.

---

## Discoverability

There is no central index. The substrate is self-organising.

### README convention

Every folder must have a `README.md` with three sections in this order:

1. **Purpose** — one or two sentences on what this folder is for
2. **Contents** — an overview of what's inside (or what kinds of things go here)
3. **Dependencies** — a list of other folders or files in the substrate that are related or required

Keep it short. Plain language. No clever formatting. The Purpose and Contents sections can be a sentence each if that's all the folder needs.

This is how Claude discovers relevant context. When working in a project folder, read its README. The Dependencies section tells you what else to load. Follow the chain.

### When to read READMEs

- At the start of a session, read the README of whatever folder the user is working in
- Before creating content, read the README of the target folder to understand conventions
- When the user references something that might exist elsewhere, check READMEs for cross-links

### Maintaining READMEs

When you create a new folder, create a README immediately. When you add content that creates a new dependency (e.g. a project that relies on team context), update the READMEs on both sides of the link.

Keep READMEs simple. No complex formatting. Plain language a non-technical person could read and understand.

---

## Access modes

### Filesystem (preferred on Desktop)

When the knowledge base is mounted in a Cowork session, use filesystem tools directly. This is faster and supports all operations including delete, move, and rename. Box Drive syncs changes automatically.

### Box MCP connector (universal)

When filesystem access isn't available (mobile, unmounted sessions), use the Box connector. Limitations:
- No delete — use the `_DELETED_` prefix convention (see box-filesystem-management skill)
- No move — copy to destination, mark original as deleted
- Folders are identified by numeric ID, not path — store frequently used IDs in `_meta/folder-ids.md`

The box-filesystem-management skill has full details on workarounds and conventions for both modes.

---

## Naming conventions

- Lowercase, hyphen-separated: `meeting-notes-2026-04-15.md`
- Date-prefix for time-sensitive files: `YYYY-MM-DD-filename`
- No spaces in filenames
- Underscore-prefixed folders for system use: `_meta/`, `_trash/`
- Deleted files (pending cleanup): `_DELETED_YYYY-MM-DD_original-filename`

---

## Scoping: personal, work, team, shared

The substrate supports multiple scopes. The structure keeps them separable:

- **Personal** — `context/me/`, personal project folders
- **Professional** — `context/work/`, work project folders
- **Team/shared** — additional context folders (e.g. `context/team-x/`), shared project folders

Box supports shared folders (collaborations) anywhere in the tree. A shared project folder can live inside `projects/` alongside private ones. Team context can live under `context/`. No forced top-level separation.

The key principle: scope is determined by where things live and who has access, not by a rigid hierarchy. The structure accommodates whatever the user's situation requires.

---

## Extending the substrate

The substrate is designed to grow. Here are things it can support that may not be set up yet:

**Custom databases** — Ask Claude to manage structured data (contacts, CRM, task lists, anything). It creates and maintains the data in `databases/`. The user interacts through conversation.

**Custom skills** — Draft skills in `scratch/`, test them, then install as proper skills. Skills can encode any repeated workflow, convention, or way of working.

**Skill versioning** — Teams can store shared skills in a context folder (e.g. `context/team-x/skills/`) with version numbers. A scheduled task can compare installed versions against the latest and notify when updates are available.

**Daily briefings** — A scheduled task that gathers updates from across the substrate and presents a summary. Can be per-user or per-team.

**Inter-agent communication** — Agents for different team members can exchange information via email, Slack, or messages within the substrate. The pattern is defined by the team's way of working; the implementation medium is flexible.

These are all built using the same building blocks: files, skills, connectors, and scheduled tasks. The substrate doesn't need to be extended by a specialist — the user and their Claude can build these features using the conventions documented here.

---

## Substrate hygiene: what not to put here

Box encrypts data in transit and at rest, but it's still cloud storage and the substrate is where Claude reads and writes routinely. A few things don't belong:

- **Credentials, API keys, passwords, access tokens.** Use a password manager. If an operation needs a secret, keep it in the secret store and pass it in at the moment of use.
- **Government identifiers and financial account details.** SSNs, driver's licence numbers, passport numbers, full credit card numbers, bank account numbers.
- **Raw health and medical records.** Diagnoses, test results, therapy notes. Summaries and context are fine — the raw files belong in a purpose-built system.
- **Other people's private information without consent.** Especially anything that would embarrass or harm them if the substrate leaked.

Context, summaries, preferences, decision history, anonymised references — all fine. The line is roughly: "would it matter if this appeared in a breach?"

---

## Evolving this document

This guide is a starting point. The user and their team should modify it as their way of working develops. When making changes:

1. Update the version number at the top
2. Append a changelog entry at the bottom with date, new version, and a one-line summary of what changed and why
3. If the change affects other folders or skills, update their READMEs and dependencies too

### Changelog rule (applies to any versioned file in the substrate)

Any file that carries a `version:` line also carries a `## Changelog` section at the bottom. When you bump the version, append an entry to the changelog on the same edit:

```
- YYYY-MM-DD v[N]: one-line summary of what changed and why.
```

Newest entries at the top of the Changelog section. Append-only. Don't rewrite history.

Team-specific customisations take precedence over the canonical ExFu version. When ExFu publishes updates (available at the source URL above), treat them as suggestions to evaluate, not mandatory upgrades.

---

## Changelog

- 2026-04-20 v2: Added substrate hygiene section (what not to put in the substrate). Added changelog rule and applied it here. Tightened README convention to a three-section stub (Purpose / Contents / Dependencies). Mentioned reminders and inbox as example databases.
- 2026-04-15 v1: Initial version.
