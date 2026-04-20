# wow (Way of Working)

## What This Skill Does

The core substrate skill. When loaded, it tells Claude to read the user's ways-of-working guide, orient to the directory structure, and pull in relevant context for the current conversation.

Think of it as the "boot sequence" for substrate-aware sessions. Without it, Claude might not know the substrate exists.

## Files in This Folder

| File | Purpose |
|---|---|
| `SKILL.md` | The skill itself — install into the client's Claude environment |
| `README.md` | This file |

All files are available at `https://exfu.ai/clients/wow/[filename]`.

## Prerequisites

- The substrate core must be set up (Box knowledge base with the directory structure and ways-of-working guide in place)
- The box-filesystem-management skill should already be installed

## Installation

Fetch `SKILL.md` from `https://exfu.ai/clients/wow/SKILL.md` and install it as a skill in the client's Claude environment.

After installation:
1. Add `wow` to the Global Instructions as an always-load skill (see the Global Instructions step in start.md for the exact wording)
2. Tell the user they can also type `/wow` at the start of any conversation to manually load it
3. Show them where to check whether skills are loaded — the capabilities/skills indicator in the conversation

## Why This Matters

Explain to the user: Claude doesn't always load skills automatically, even when they're relevant. This skill is the one you want loaded most often — it's what connects Claude to everything you've set up. Adding it to Global Instructions means Claude will load it by default in Cowork sessions. For regular chats, typing `/wow` at the start tells Claude to load it manually. Either way, keep an eye on the skills indicator to confirm it's active.
