# wow (personal way of working)

## Purpose

The user's personal way-of-working skill. Auto-loads the `substrate` skill on activation, plus any other skills the user always wants running. Carries the user's personal conventions (communication, decisions, formatting, workflow).

This is distinct from the generic `substrate` skill: `substrate` is shared across all ExFu clients and encodes the architecture. `wow` is personal — generated during setup and iterated over time.

## Contents

| File | Purpose |
|---|---|
| `SKILL.md` | The skill itself — installed into the client's Claude environment |
| `README.md` | This file |

Canonical template at `https://exfu.ai/clients/wow/[filename]`. The installed version diverges from the template as the user iterates.

## Dependencies

- `substrate` skill — required; `wow` auto-loads it
- Any other skills the user adds to the always-load list

## Installation

During initial setup, the Installing Claude fetches the template from `https://exfu.ai/clients/wow/SKILL.md`, customises it lightly with what's known about the user (communication preferences, known systems, etc.), packages it as a `.skill` file, and hands it to the user to install.

After installation:
1. Add `wow` to the Global Instructions as an always-load skill
2. Show the user how to type `/wow` to manually load it if needed
3. Make sure `substrate` is installed too (it's what `wow` delegates to)

## Why This Matters

The user owns this skill. It's where their preferences live durably, in a form that every future Claude can load automatically. Every correction, every confirmed non-obvious approach, every "actually, always do it this way" — that's what this skill is for.

The initial version is a minimal template. The user and their Claude grow it together.
