# scope-skills

## Purpose

Template and pattern documentation for scope skills. Every scope in the substrate (`scopes/<scope-name>/`) is paired with a skill named `scope-<scope-name>` that makes it discoverable to Claude. This folder holds the template for generating those skills.

## Contents

| File | Purpose |
|---|---|
| `SKILL-TEMPLATE.md` | The template — fill in the placeholders to generate a new scope skill |
| `README.md` | This file |

All files are available at `https://exfu.ai/clients/scope-skills/[filename]`.

## The scope-skill pattern

The substrate's conventional pairing is: **one scope = one folder under `scopes/` + one skill named `scope-<scope-name>`**.

The folder holds the substance — plans, notes, drafts, decisions. The skill is a short anchor that makes the folder discoverable. When the user mentions the scope or drifts into its subject matter, the skill triggers. Claude then reads the folder's README and pulls in relevant context.

Without the skill, the scope folder risks being invisible. Claude doesn't automatically crawl the substrate — it needs a signal that "this conversation is about X, go look in `scopes/X/`". The skill is that signal.

## How to create a new scope skill

1. **Create the scope folder** at `scopes/<scope-name>/` with a `README.md` (Purpose, Contents, Dependencies).
2. **Copy the template** (`SKILL-TEMPLATE.md`) and fill in the placeholders:
   - `{{SCOPE_NAME}}` — the lowercase-hyphenated scope name
   - `{{SCOPE_DISPLAY_NAME}}` — a human-friendly title
   - `{{ONE_LINE_DESCRIPTION}}` — what the skill's description field should say (this is what Claude matches against to decide when to load the skill, so it matters)
   - Fill in scope purpose, key entities, any scope-specific conventions, related skills
3. **Package as a `.skill` file** (see the `skill-packaging` skill) and install.
4. **Verify** the skill shows up in the user's installed-skills list.

## Naming rules

- Skill name: `scope-<scope-name>` (matches the folder name under `scopes/`)
- Lowercase, hyphen-separated
- No spaces, no underscores
- Keep names short and memorable — they'll be typed and referenced often

## Dependencies

- `ways-of-working/substrate-guide.md` — defines the scope concept and the folder/skill pairing convention
- `skill-packaging` skill — for building the installable `.skill` file
- The scope's own folder at `scopes/<scope-name>/`

## Why This Matters

Scopes are where active work lives. If Claude can't find the scope folder, the scope doesn't function. Scope skills solve the discovery problem without requiring Claude to crawl the whole substrate every time. One skill per scope is overhead, but it's low-cost overhead — a scope skill is small and cheap to maintain.
