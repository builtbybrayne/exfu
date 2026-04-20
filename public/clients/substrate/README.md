# substrate

## Purpose

The core substrate skill. When loaded, it tells Claude to read the user's ways-of-working guide, orient to the directory structure, and pull in relevant context for the current conversation.

This is the generic skill that every ExFu client installs — it encodes the shared concepts (substrate, scope, context, data tiers, access modes) so every Claude that loads it understands the architecture. The user's *personal* way of working lives in a separate skill called `wow`, which loads this one first.

## Contents

| File | Purpose |
|---|---|
| `SKILL.md` | The skill itself — install into the client's Claude environment |
| `README.md` | This file |

All files are available at `https://exfu.ai/clients/substrate/[filename]`.

## Prerequisites

- The substrate core must be set up (Box knowledge base with the directory structure and ways-of-working guide in place)
- The `box-filesystem-management` skill should already be installed

## Installation

Fetch `SKILL.md` from `https://exfu.ai/clients/substrate/SKILL.md` and package it as a `.skill` file for the user to install (see the `skill-packaging` skill for how).

After installation, the user's personal `wow` skill delegates to this one. Users don't usually call `/substrate` directly — they call `/wow` (or have it auto-loaded via Global Instructions) and the `wow` skill pulls this one in.

## Dependencies

- `ways-of-working/substrate-guide.md` — the durable reference this skill reads on load
- `box-filesystem-management` skill — for access-mode decisions
- Optional but expected: `reminders`, `inbox` skills (delegated to on load if installed)

## Why This Matters

Claude doesn't always load skills automatically, even when they're relevant. The substrate skill is the one that needs to be loaded most often — it's what connects Claude to everything the user has set up. The user's personal `wow` skill is the trigger; the substrate skill does the actual connecting.
