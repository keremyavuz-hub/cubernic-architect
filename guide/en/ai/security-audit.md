# Security Standards and Audit
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## Instructions
- Every system developed must comply with the security standards below, and the AI must audit this compliance regularly.
- The AI must suggest a security audit not only when asked, but on its own at the times specified in this file, and run it with the developer's approval.
- Audit results must be recorded; vulnerabilities found must be prioritized and closed, and their closure must be verified again.
- The audit does not replace the post-task security check in ai/security-review.md; both must be applied together.

## Security Standards To Follow
- Web applications must take measures against the OWASP Top 10 risks: https://owasp.org/Top10/
- OWASP ASVS must be used as the application verification level; in systems that process personal data and have login, at least Level 2 must be targeted: https://owasp.org/www-project-application-security-verification-standard/
- Systems providing APIs must consider the OWASP API Security Top 10: https://owasp.org/API-Security/
- Systems with AI / LLM features must consider the OWASP Top 10 for LLM Applications: https://genai.owasp.org/
- CWE Top 25 must be used as a reference for code-level weaknesses: https://cwe.mitre.org/top25/
- The rules in this guide's security/ and ai/ folders must be applied as project-specific standards.

## Cloudflare Security Audit Skill
- Cloudflare's open source security-audit skill must be used for codebase security audits: https://github.com/cloudflare/security-audit-skill (MIT license).
- The skill audits the codebase in stages: discovery, coverage ledger, vulnerability hunting, an independent agent trying to refute each finding, schema-validated finding records, and reporting.
- Installation must be done with the Skills CLI: npx skills add https://github.com/cloudflare/security-audit-skill --skill security-audit (add --global for all projects).
- Since it is third-party code, SKILL.md and helper scripts must be read before installation, and the installed version (commit) must be recorded.
- The skill runs in two modes: guide mode (focused questions and review, produces no files) and full audit mode (six stages, produces report files).
- Full audit mode must be run only when the developer explicitly says "run a security audit".
- A full audit runs many parallel sub-agents and creates significant model cost; before running it, the AI must tell the developer this and have them choose a profile: quick (small project / quick first look), standard (default), deep (high-risk or large project).
- To audit a specific change, a scoped run must be used: specific folders or the diff between two commits.
- The skill runs target code only in a network-isolated, resource-limited sandbox; if there is no sandbox, it does not run code and leaves related findings as "needs_validation". This must be explained to the developer.
- Audit outputs are stored outside the project by default (~/security-audit-skill/<project>/run-<N>); if they will be written inside the project, the folder must be in .gitignore. Since reports contain vulnerability information, they must not be added to git or shared.
- The audit must not be run against live systems, external services or real user data.
- Repeated runs on the same project complement each other; it must not be assumed that a single run finds all vulnerabilities.
- If the skill is not installed, the AI must suggest installing it; if the developer does not want it, the audit must be done with the other tools below and the checklists in this guide.

## When To Audit
- A full audit (at least the standard profile) must be done before the first production launch.
- When a feature involving authentication, authorization, session, payment, file upload, company isolation or requests to external URLs is added or changed, a scoped audit must be done for the related part.
- Before every major release, a scoped audit must be done for the changes since the last release.
- A general audit with the quick profile should be done at regular intervals (e.g., monthly or quarterly). (Recommended)
- When a new dependency, integration or AI feature is added, the related area must be reviewed in guide mode.
- When there is a security incident or suspicion, the related area must be audited immediately.

## Processing Results
- The skill reports findings in three classes: confirmed (proven), needs_validation (requires verification, with missing information), rejected (refuted).
- Confirmed findings must be prioritized by severity; critical and high findings must block the production launch.
- For each finding, a fix must be made, a test verifying the fix must be added, and the related area must be audited again.
- For needs_validation findings, how to verify the missing information must be planned and the developer must be asked.
- Finding summaries (without vulnerability details) must be written into the to-do list in the system document, and closed ones into the work log.
- If the vulnerability type found is not covered in this guide, it must be added as a new rule to the related security file.
- Missing defense-in-depth layers (the absence of one layer when another already stops the attack) must be treated as an improvement note, not a vulnerability.

## Complementary Tools
- npm audit, GitHub Dependabot or Renovate must be used for dependency vulnerabilities.
- For secret leaks, the repository and git history must be scanned with gitleaks or trufflehog.
- Semgrep or GitHub CodeQL can be suggested for static code analysis.
- OWASP ZAP can be suggested for testing the running application from outside, only in a local or test environment; unauthorized scans must not be run against live systems.
- For security headers and TLS settings, the live address must be checked with securityheaders.com and SSL Labs.
- If these tools have paid plans, this must be told to the developer.
