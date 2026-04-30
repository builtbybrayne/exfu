# Team Considerations — supplement for installs with team members

Load this document during a personal install if the user is part of a team or organisation. It supplements `start.md` with considerations specific to working with a team member rather than a fully independent user. Read `start.md` first if you haven't.

## When to load this

Pull this in if the user mentions, in any form: colleagues, an employer, a workplace, work tools, a company, a team they belong to, internal IT policies, a shared CRM or project tracker, work email or calendar that's not personal. Most team users mention at least some of these during the about-me phase.

If the user is a fully independent operator — sole trader, freelancer with no team — you don't need this. The personal install is enough.

If the user is asking how to roll the substrate out to their *whole team* rather than how to make their own setup work as a team member, that is a different engagement. Hand off to `al@exfu.ai`, or point at Lope (`https://lope.works`) for team-rollout conversations. This document is for installing one person who happens to be on a team.

---

## What's different about installing for a team member

The personal install assumes the user has full control over their environment. A team member often does not. They may have IT restrictions on what they can install or connect, mandated cloud storage, sensitive information they have to handle carefully, and a working life that is partly individual and partly shared with colleagues.

The substrate still works in all of these cases — it just needs accommodating. The principles do not change; the specifics do.

---

## Things to surface early

Once you've spotted that the user is on a team, work these into the conversation as they become relevant — not as a checklist to grind through:

**Cloud storage.** Box is the canonical recommendation but not the only option. What does their team use? Common alternatives: Google Drive, OneDrive, Dropbox, SharePoint. The substrate works with any folder that's locally mountable on their machine *and* reachable from another Claude surface (mobile, scheduled tasks). If the team mandates Google Drive, use Google Drive — Box is not load-bearing. The structure (`context/`, `scopes/`, `databases/`, etc.) lives wherever they keep their files. If their only viable option is local-filesystem-only, flag that mobile and scheduled-task access will be limited and decide with them whether that's acceptable.

**IT restrictions.** Can they install Claude Desktop on their work machine, or only access claude.ai via browser? Can they authorise MCP connectors against work systems (email, calendar, task tracker), or are those locked down? Are there approval steps for new tools? Don't fight the restrictions — work with what's available. A constrained install is still useful. Document the restrictions in `context/me/tools.md` so every future Claude session knows what's off-limits without having to rediscover.

**Their role in the org.** Capture this. Role shapes how Claude reads everything else — a CFO and a CTO ask the same question and need different default framing. A coach and an operator have different rhythms. See *Capturing role* below.

**Shared tools they live in.** Team CRM, project tracker, shared Slack/Teams, shared docs. These usually go via MCP connectors authenticated against the user's individual access. The data Claude reads is what the user can see, no more.

**Confidentiality.** Team users have additional hygiene to think about. Don't store company confidential information in places where it shouldn't leave their personal access boundary. Don't write specifics about colleagues into substrate files without thinking about whether that's appropriate. The user is responsible for what they put in their setup; surface the consideration when it's relevant rather than policing it.

---

## Capturing role

Role goes in `context/me/`. Brief — a paragraph, sometimes a short bullet list. What's their job title, what does their role actually involve, what kind of decisions do they make, who do they work with regularly, what tools do they live in, what's currently on their plate at the role level (not at the project level — that goes in scopes). The kind of brief you'd give a chief of staff on day one.

Once captured, it's available to every future Claude session via the `context/me/` convention, surfaced through `wow`'s navigation map.

If the user wants their role visible to colleagues' Claude instances too — for shared scopes or shared team conventions — they can reproduce the relevant bits in a shared team context folder, or have their personal `wow` reference a shared "role and working style" file. Pointer-style sharing is cleaner than copy-paste, because the source of truth stays in one place when the role evolves.

---

## A small operating principle

When in doubt about whether something belongs in personal substrate or shared team substrate: prefer personal first. The user's personal setup must work even if no colleague ever adopts a similar one. Sharing is opt-in and additive, not a precondition for the install to land.
