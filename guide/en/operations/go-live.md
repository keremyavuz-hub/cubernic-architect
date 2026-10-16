# Go-Live Checklist
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## To Do
- Before going live, a full security audit must be done according to ai/security-audit.md, and no critical or high findings must remain.
- The production URL environment variable (PANEL_URL) must be defined.
- Bot protection keys must be defined.
- Email SPF, DKIM and DMARC records must be checked, and sending and spam tests must be done.
- In the firewall, 80 and 443 must be open only to Cloudflare, and 22 only to administrators.
- A Cloudflare Rate Limiting rule must be defined.
- The maintenance task must be added to cron and run manually once.
- It must be checked that cookies are Secure (production mode).
- The remote host allowance in image settings must be restricted.
- A database backup must be taken and restore must be tested.
- The platform administrator account must be created.
- The agreement, privacy notice, cookie policy and all other legal pages must be reviewed by a lawyer, draft markers must be removed and placeholders must be filled in.
