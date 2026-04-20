# reminders

## What This Skill Does

Manages a lightweight reminders file in the user's substrate at `databases/reminders/reminders.md`. Creates, lists, completes, and snoozes reminders. Called by the `substrate` skill on session load to surface anything due or overdue.

Distinct from a task manager. Reminders here are Claude's own nudges — low-overhead, no external system, no project management. For a user who wants to be pinged about things without turning every thought into a tracked task.

## Files in This Folder

| File | Purpose |
|---|---|
| `SKILL.md` | The skill itself |
| `README.md` | This file |

All files are available at `https://exfu.ai/clients/reminders/[filename]`.

## Prerequisites

- Substrate core set up
- `substrate` skill installed (substrate delegates reminder checks to this skill on load)

## Installation

Use the skill-packaging skill to package and present `SKILL.md` for the client to install.

The data file (`databases/reminders/reminders.md`) and its folder are created on first use — no install-time file setup needed.

## What To Tell The Client

"You now have a lightweight reminder system. Just say 'remind me to [x] on [date]' and I'll track it. I'll surface due reminders at the start of each session. This isn't for tasks or project work — that still belongs in [their task tool]. This is for little things you want me to ping you about, without needing to log them somewhere formal."
