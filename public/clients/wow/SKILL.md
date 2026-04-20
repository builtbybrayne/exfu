---
name: wow
description: The user's personal way of working. This is the skill Claude loads first at session start to understand how THIS user works — their preferences, their substrate, their defaults. Triggers on "wow", "way of working", on fresh sessions, or when referenced in Global Instructions. Auto-loads the `substrate` skill (and other supporting skills) on activation so that everything the user depends on is ready from the start.
---

# Way of Working (personal)

This is your personal WoW skill — generated for you during setup and maintained by you as your way of working evolves. It's distinct from the generic `substrate` skill: `substrate` carries the architecture (shared across all ExFu clients); `wow` carries *your* specifics — your preferences, your default behaviours, your personal defaults.

This template is the starting point. Iterate on it as you go. The skill is yours to own.

---

## What this skill does at session start

### 1. Load the `substrate` skill

On activation, load the `substrate` skill. It does the heavy lifting — finds the Box knowledge base, reads the ways-of-working guide, orients to the current folder, checks reminders and inbox. Everything needed to be substrate-aware.

### 2. Load any other skills the user always wants running

By default this includes the user's preferred core skills. Add to this list as you develop new personal skills or as your needs change. Examples of what might go here:

- `reminders` (time-triggered surfacing)
- `inbox` (frictionless capture)
- `writing-styles` (voice/tone for drafting)
- any `scope-<name>` skills the user wants always-on for current priorities

### 3. Apply the user's personal conventions

The personal conventions section below is where you record the defaults that shape how Claude should behave for *this* user — tone, decision-making style, formatting preferences, escalation patterns, whatever.

---

## Personal conventions

*This section is customised during setup and iterated over time. The items below are placeholders — replace with the user's actual preferences as they're discovered.*

### Communication style

- (e.g. "Skip preambles. Get to the point. Assume mutual goodwill.")
- (e.g. "No tickbox choices — make the suggestion and ask for a response in ordinary conversation.")
- (e.g. "No sycophantic openers. No 'that changes everything' framing.")

### Decision-making defaults

- (e.g. "When several paths are reasonable, pick one and say why, rather than laying out options.")
- (e.g. "If something would cost real time or money, surface the trade-off before acting.")

### Formatting preferences

- (e.g. "Prose over bullets for explanations. Bullets OK for lists of things.")
- (e.g. "Short code blocks inline. Long ones in artifacts.")

### Workflow defaults

- (e.g. "After substantial writing, save a draft in `scratch/` before iterating.")
- (e.g. "For new scopes, always create the scope folder + scope skill together.")

### Tools and systems the user works with

- (e.g. task manager, calendar, email client, writing tools) — these may be connected via MCP. Check what's available when relevant.

---

## Iterating this skill

This skill is a living document. When the user corrects your behaviour, or confirms a non-obvious approach as right, consider whether the guidance belongs here. When something becomes a pattern, write it down.

To update: edit this file, then repackage and reinstall the skill (see the `skill-packaging` skill for how).

Keep the list of always-load skills (Section 2 above) honest. If a skill stops being routinely useful, remove it. If a new skill becomes central, add it. The point of this skill is to make every fresh Claude session immediately useful, not to load everything possible.
