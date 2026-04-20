# inbox

## What This Skill Does

Manages a lightweight quick-capture file in the user's substrate at `databases/inbox/inbox.md`. Appends, reviews, sorts, and processes items. Called by the `wow` skill on session load to flag that there are pending items.

Distinct from reminders. Reminders are time-triggered. Inbox is for "don't lose this thought" — capture fast, sort later.

## Files in This Folder

| File | Purpose |
|---|---|
| `SKILL.md` | The skill itself |
| `README.md` | This file |

All files are available at `https://exfu.ai/clients/inbox/[filename]`.

## Prerequisites

- Substrate core set up
- `wow` skill installed (wow delegates inbox checks to this skill on load)

## Installation

Use the skill-packaging skill to package and present `SKILL.md` for the client to install.

The data file (`databases/inbox/inbox.md`) and its folder are created on first use — no install-time file setup needed.

## What To Tell The Client

"You now have a quick-capture inbox. When you have a thought, a link, or a loose idea you don't want to lose, just say 'save this to inbox' or 'capture that'. I'll timestamp it and file it. When you want to clean up, say 'process my inbox' and we'll sort through together — some items become reminders, some become tasks, some go to projects, some just get dropped. Dump first, decide later."

Pair this with reminders in the client's head: inbox is for thoughts without a deadline; reminders are for ping-me-about-this-on-[date].
