# box-filesystem-management

## What This Skill Does

Instructs Claude to manage a client's Box cloud storage as a fully Claude-operated knowledge base. The client stores files in Box; Claude handles all organisation, filing, moving, and deletion on their behalf.

## Files in This Folder

| File | Purpose |
|---|---|
| `SKILL.md` | The skill itself — install into the client's Claude environment |
| `CLEANUP-TASK.md` | A daily scheduled task that manages the trash folder — install into Claude Desktop Cowork |
| `cleanup.py` | The Python script that does the actual cleanup work — install into `_meta/` in the knowledge base |
| `README.md` | This file — installation instructions for the installing Claude |

All files are available at `https://exfu.ai/clients/box-filesystem/[filename]`.

## Prerequisites

Before installing, confirm with the client:

- They have a **Box account** (personal or Business)
- **Box Drive** is installed on their machine and the knowledge base folder is mounted and syncing
- The **Box MCP connector** is active in Claude (connected via Claude Settings → Connectors → Box)
- They are on a **paid Claude plan** (Pro or above) — required for Cowork and scheduled tasks

If any of these are missing, pause and help them resolve it before continuing. Alastair will typically be present for initial installs and can help with any issues. If he's not available, the client can reach him at al@exfu.ai.

## Installation Steps

Work through these in order.

### Step 1: Confirm prerequisites

Ask the client to confirm:
1. Box Drive is installed and showing files in Finder (macOS) or Explorer (Windows)
2. Box appears as a connected tool in their Claude settings

Walk them through fixing anything that's missing.

### Step 2: Install SKILL.md

Fetch `SKILL.md` from `https://exfu.ai/clients/box-filesystem/SKILL.md` and install it as a skill in the client's Claude environment.

### Step 3: Install the cleanup script

Fetch `cleanup.py` from `https://exfu.ai/clients/box-filesystem/cleanup.py` and save it to `_meta/cleanup.py` inside the client's knowledge base folder. This script handles the actual filesystem cleanup work (collecting deleted files, purging old trash) so the scheduled task uses minimal tokens.

### Step 4: Install CLEANUP-TASK.md as a scheduled task

Fetch `CLEANUP-TASK.md` from `https://exfu.ai/clients/box-filesystem/CLEANUP-TASK.md` and follow its setup instructions. This involves:

1. Asking the client for their Box knowledge base path (the local folder where Box Drive mounts their knowledge base)
2. Replacing `[BOX_KNOWLEDGE_BASE_PATH]` in the task prompt with that actual path
3. Creating the scheduled task in Claude Desktop Cowork → Scheduled → New Task
4. Setting the cadence to **Daily**

Explain to the client what this does: it runs a small Python script each day that does two things — collects files that have been marked for deletion and moves them to a trash folder, then permanently deletes anything that's been in trash for more than 60 days. So they always have a 60-day window to recover something if needed. It only runs while Claude Desktop is open — if they miss a day it catches up next time.

Run a dry test to confirm it works:
```
python3 [BOX_KNOWLEDGE_BASE_PATH]/_meta/cleanup.py [BOX_KNOWLEDGE_BASE_PATH] --dry-run
```

### Step 5: Smoke test

Once everything is installed:

- Ask Claude to list the contents of the knowledge base root folder via the Box connector
- Confirm it returns the expected files and folders
- If the client has their Box folder mounted in this Cowork session, confirm Claude uses the filesystem directly rather than the connector
- Create a test file, then delete it using the `_DELETED_` workflow, and verify it appears correctly for cleanup

## Ongoing Notes

- The client may browse files in Box Drive — that's fine. They should not manually rename, move, or delete files. If they do, Claude should reconcile the state at the start of the next session.
- The cleanup task only runs while Claude Desktop is open. Skipped runs catch up automatically on next open.
- If the Box MCP connector gains native delete or move tools in a future update, the CRUD workarounds in SKILL.md can be simplified. Check https://developer.box.com/guides/box-mcp/remote/ for the current tool list.
