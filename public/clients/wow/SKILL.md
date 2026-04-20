---
name: wow
description: Way of Working — the core substrate skill. Bootstraps any Claude session with awareness of the user's substrate. Loads the ways-of-working guide, orients to the directory structure, and pulls in relevant context. Should be loaded at the start of every important conversation. Triggers on "wow", "way of working", "load my substrate", "check my setup", or at session start when referenced in Global Instructions.
---

# Way of Working (wow)

This skill connects you to the user's substrate — their persistent system of files, skills, connectors, and scheduled tasks.

## What to do when this skill loads

### 1. Find the substrate

The user's substrate core lives in a Box knowledge base. Check whether the Box folder is mounted in this session (filesystem access) or whether you need to use the Box MCP connector.

If you're not sure where the knowledge base is, check the Global Instructions — the path should be noted there. If it's not, ask the user.

### 2. Read the ways-of-working guide

Read `context/ways-of-working/substrate-guide.md` from the knowledge base. This is the reference for how everything is structured — directory layout, conventions, access modes, naming rules, and how to find things.

If this file doesn't exist yet, the substrate may not have been fully set up. Tell the user and offer to help complete the setup (point them to https://exfu.ai/clients/start.md).

### 3. Read the current folder's README

If you're working in a specific project or context folder, read its README.md. Pay attention to the **Dependencies** section — it tells you what other parts of the substrate are relevant and should be loaded.

Follow the dependency chain: if a project README points to team context, read that too.

### 4. Check reminders and inbox

If the `reminders` skill is installed, delegate to it: read the reminders file, surface anything due or overdue. If nothing is due, say nothing.

If the `inbox` skill is installed, delegate to it: check the count. If there are items, mention briefly ("Inbox has [n] items"). Don't force processing.

These checks should be fast and quiet. Don't turn session start into a ceremony.

### 5. Orient and proceed

You should now understand:
- How the substrate is structured
- What the user's conventions are
- What context is relevant to the current conversation
- What (if anything) needs their attention from reminders or inbox

Proceed with the user's request. If they haven't asked anything specific yet, briefly confirm what you've loaded and ask what they'd like to work on.

## Ongoing behaviour

While this skill is loaded:

- **Follow the substrate conventions** described in the ways-of-working guide (naming, README maintenance, nothing casual in root, etc.)
- **Use the right access mode** — filesystem when mounted, Box connector when not (see the box-filesystem-management skill for details)
- **Maintain discoverability** — if you create new folders or content, create/update READMEs with dependency links
- **Don't assume context persists between sessions.** If you need information from the substrate, read it. Don't rely on memory or prior conversations.
