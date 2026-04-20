---
name: box-filesystem-management
description: How Claude manages a client's Box knowledge base. Use whenever Claude needs to read, write, organise, or clean up files in the client's Box store. Covers access mode selection (local filesystem vs Box MCP connector), CRUD workarounds for the connector's limitations, trash/recovery workflow, and naming conventions. Triggers include any mention of the client's Box store, knowledge base, file management, or instructions to save, update, move, or delete files.
---

# Box Filesystem Management

## How Claude Manages This Knowledge Base

Claude is the primary manager of this client's Box knowledge base. The client will typically not interact with Box files directly — all organisation, filing, moving, and deletion is handled by Claude on their behalf.

The client may occasionally browse Box Drive on their own machine — that's fine. They should not manually rename, move, or delete files. If Claude detects the client has made manual changes, reconcile the state at the start of the next session.

## Access Mode: Local Filesystem vs Box Connector

How Claude accesses the knowledge base depends on the context:

**Local filesystem access (preferred)**
When the client mounts their Box folder in a Claude Desktop Cowork session, Claude has direct filesystem access. Use the filesystem tools directly — read, write, move, and delete files as normal filesystem operations. Box Drive syncs changes to Box automatically. This is faster and more capable than the connector.

**Box MCP connector (universal fallback)**
Claude mobile and Claude Desktop sessions without a mounted Box folder must use the Box MCP connector. The connector has no native delete or move tools — use the workarounds below.

Always check whether filesystem access is available before defaulting to the connector. If in doubt, ask: "Do you have the Box folder open in this session?"

## CRUD via the Box Connector (workarounds)

The following only applies when operating through the Box MCP connector, not when filesystem access is available.

### Delete (workaround)

The connector has no delete tool. To delete a file, move it to the trash folder:

1. Create the file at `_trash/[original-relative-path]/[filename]` using `upload_file`
2. Rename the original file with a `_DELETED_` prefix so the cleanup task knows to remove it from its original location

Example:
```
Original:  projects/website/old-draft.md
Trash:     _trash/projects/website/old-draft.md
Renamed:   projects/website/_DELETED_2026-04-20_old-draft.md
```

The daily cleanup task (running on Claude Desktop) handles both: it moves the renamed original into trash (if the connector couldn't fully remove it) and permanently deletes anything in `_trash/` older than 60 days.

### Move (workaround)

The connector has no move tool. Simulate a move as two steps:
1. Create a new copy at the destination using `upload_file`
2. Mark the original with `_DELETED_` prefix as above

For large binary files (over ~10 MB), this requires downloading and re-uploading the full content, which may be slow. Flag this to the client before attempting rather than failing silently.

### Copy

Upload the same content to the destination folder. No workaround needed — straightforward create operation.

### Folder IDs

The connector identifies folders by numeric ID, not path. Establish the correct folder ID before any operation. Store frequently used folder IDs in the knowledge base itself (e.g. in a `_meta/folder-ids.md` file) so they don't need to be re-discovered each session. If an operation fails with a not-found error, re-discover the ID before retrying — IDs can become stale if a folder was deleted and recreated.

## Trash Folder

The `_trash/` folder lives at the root of the knowledge base. It mirrors the directory hierarchy of the main knowledge base so that recovery is straightforward — a file's path within `_trash/` tells you exactly where it came from.

Rules:
- Files in `_trash/` are recoverable for 60 days
- After 60 days, the cleanup task permanently deletes them
- To recover a file, move it back to its original location (the path within `_trash/` tells you where it belongs)
- The client can browse `_trash/` at any time to see what's pending deletion

## Naming Conventions

Apply these consistently regardless of access mode:

- Lowercase, hyphen-separated slugs: `meeting-notes-2026-04-15.md`
- Date-prefix time-sensitive files: `YYYY-MM-DD-filename`
- Deleted files (pending cleanup): `_DELETED_YYYY-MM-DD_original-filename`
- No spaces in filenames
- Underscore-prefixed folders for system use: `_trash/`, `_meta/`

## Behaviour Rules

- **Confirm before destructive operations.** Before trashing a file or overwriting content, confirm with the client unless the instruction was unambiguous.
- **External sharing constraint (connector only).** The Box connector restricts uploads to folders that are not externally shared. If an upload fails for this reason, report it clearly and suggest the client adjust the folder's sharing settings in Box Drive.
- **Large binaries.** Flag move/copy limitations for files over ~10 MB before attempting. Offer to create a fresh version at the destination instead of retrieving and re-uploading the original.
