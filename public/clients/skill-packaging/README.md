# skill-packaging

## What This Skill Does

Teaches Claude how to package and deliver skills for the user to install. This is a foundational skill — without it, Claude doesn't know that it can't install skills directly and needs to create `.skill` packages instead.

## Files in This Folder

| File | Purpose |
|---|---|
| `SKILL.md` | The skill itself — must be the first skill installed |
| `README.md` | This file |

All files are available at `https://exfu.ai/clients/skill-packaging/[filename]`.

## Why This Is Installed First

Every other skill in the setup process needs to be packaged and presented to the user for installation. If the installing Claude doesn't know how to do that, the rest of the setup breaks. This skill teaches the packaging process.

## Installation

The installing Claude should:

1. Fetch `SKILL.md` from `https://exfu.ai/clients/skill-packaging/SKILL.md`
2. Load the skill-creator skill if it's not already loaded (since this skill is an addendum to it)
3. Package this skill and present it to the user for saving
4. Wait for the user to confirm they've installed it