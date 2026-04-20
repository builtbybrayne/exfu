# daily-briefing

## What This Is

A scheduled task that produces a morning briefing each day. Pulls together due reminders, inbox state, today's calendar, and priority items from connected task tools into a single Cowork session.

Not a skill — a scheduled task prompt. Installs into Claude Desktop Cowork → Scheduled.

## Files in This Folder

| File | Purpose |
|---|---|
| `TASK.md` | The scheduled task prompt and setup instructions |
| `README.md` | This file |

All files are available at `https://exfu.ai/clients/daily-briefing/[filename]`.

## Prerequisites

- Substrate core set up
- `wow`, `reminders`, and `inbox` skills installed
- Ideally at least one of: calendar MCP, task manager MCP — the briefing works without them but is much richer with them

## Installation

Follow the instructions inside `TASK.md`. Summary:

1. Open Claude Desktop → Cowork → Scheduled → + New Task
2. Paste the task prompt from `TASK.md`
3. Set schedule to Daily at a time that suits the client (07:00 is common)
4. Save

Then run it manually once from the Scheduled tab as a smoke test.

## What To Tell The Client

"Every morning when Claude Desktop is open, you'll get an automatic briefing — what's due, what's on your calendar, what needs attention. The session shows up in the Cowork Scheduled tab. It's there whether you look at it or not, so no fear of missing things if you skip a day. As you connect more tools, the briefing gets richer."

Remind them that scheduled tasks only run while Desktop is open. If the laptop is shut, the task catches up next time the app opens.
