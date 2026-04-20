# writing-styles

## What This Skill Does

Writes and edits content in the user's voice, not Claude's defaults. Runs a one-time intake to build a voice profile at `context/me/writing-style.md`, then applies that profile plus a universal anti-slop layer to every piece of writing.

Critical for any user who'll have Claude draft emails, posts, messages, or replies on their behalf. Without it, everything Claude produces sounds generically AI — which the user's readers will spot instantly, and which the user themselves will reject on sight.

## Files in This Folder

| File | Purpose |
|---|---|
| `SKILL.md` | The skill itself — install into the client's Claude environment |
| `README.md` | This file |

All files are available at `https://exfu.ai/clients/writing-styles/[filename]`.

## Prerequisites

- Substrate core set up (the skill writes the profile to `context/me/writing-style.md`)
- `substrate` skill installed (so the substrate structure is discoverable)

## Installation

Use the skill-packaging skill to package `SKILL.md` and present it for the client to install.

After the skill is installed, run the intake immediately — don't wait for the client to ask Claude to write something. Getting the profile in place on day one means every piece of writing from that point on sounds like them.

## What To Tell The Client

Explain what this does: every piece of writing Claude produces on their behalf from now on — emails, posts, messages, drafts — will use their voice rather than Claude's. The profile lives in their substrate and they can edit it directly any time. When Claude gets the voice wrong, tell it; the profile updates.

Also tell them: there's a universal anti-slop layer baked into the skill that kills AI-speak regardless of their individual voice. So even if the profile is thin at first, the writing won't sound generic.
