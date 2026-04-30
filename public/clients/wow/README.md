# wow (personal way of working)

## Purpose

The user's personal way-of-working skill. Loaded at the start of every session via Global Instructions. Does two things:

1. **Carries a navigation map** of how this user's substrate is currently shaped — especially where the user has evolved it beyond the basic ExFu starter. Without this, future Claude instances go looking for things in the starter shape and miss the user's actual layout.
2. **Carries a thin always-on kernel** — high-leverage instructions and summaries where the token cost of always-loading is justified, and where forcing a separate file load every session would hurt.

Most of what makes Claude useful for this user lives in substrate **files** (`context/`, `scopes/`, `databases/`). `wow` does *not* hold that material — it points at it.

This is distinct from the generic `substrate` skill: `substrate` is shared across all ExFu clients and encodes the shared architecture. `wow` is personal — generated during setup and iterated as the user's substrate evolves.

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

During initial setup, the Installing Claude fetches the template from `https://exfu.ai/clients/wow/SKILL.md`, customises it lightly — seeding the navigation map with the standard starter layout and the always-on kernel with what's been picked up from the user so far — then packages it as a `.skill` file and hands it to the user to install.

After installation:
1. Add `wow` to the Global Instructions as an always-load skill
2. Show the user how to type `/wow` to manually load it if needed
3. Make sure `substrate` is installed too (it's what `wow` delegates to)

## Why this matters

The user's substrate will evolve. They'll invent new folder structures, custom databases, scope organisations the starter doesn't anticipate. Without `wow` recording those structural decisions, every fresh Claude instance starts looking in the wrong places.

`wow` is also where Claude keeps a thin layer of always-on instruction — the kind of thing that's important enough that paying the load cost on every session is justified. Communication style, decision defaults, hard-won corrections that recur.

What `wow` is **not**: a dump of everything Claude knows about the user. Detail belongs in files. `wow` is the skill that knows where those files are. The discipline is to keep it lean — anything that grows past a handful of lines should be pulled out into a substrate file with a pointer back from `wow`.

The initial version is a minimal template. The user and their Claude grow it together as the substrate evolves.
