# Data Retention, Deletion and Backup
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## Developer Warning
- Contracts and legal texts produced based on this file are only ready-made draft content; they do not replace legal advice and do not provide a legal basis.
- When the AI produces a legal text or page, at the end of the work it must clearly tell the developer that the text is a draft and must not be published without being checked by a lawyer.
- In draft texts, information such as company title, address, tax information and competent court must not be invented; it must be left as square-bracket placeholders (e.g., [COMPANY TITLE]).
- The draft text's code or database must keep fields for draft status, last reviewer and lawyer approval date.
- Texts without lawyer approval must remain as open items in the go-live checklist.
- When legislation (KVKK (Turkish data protection law), Law No. 6563 (Turkish e-commerce law), Mesafeli Sözleşmeler Yönetmeliği (Distance Contracts Regulation), GDPR) changes, the developer must be reminded to check that texts are up to date.

## Decision Mechanism
- At project start, a retention decision must be made for every table / data type in the database; no data type must be left undecided.
- For each data type the following questions must be answered: why it is kept, whether there is a legal retention obligation, how long it is needed, whether it will be deleted or anonymized when the period ends, how long it will remain in backups, who / what will trigger deletion.
- Retention decisions must be documented in a table: data type, purpose, legal basis, retention period, end-of-period action (delete / anonymize / archive), backup retention period, owner.
- The starting point of the retention period must be clear (e.g., from the registration date, account closure, end of contract).
- When suggesting a retention period, the AI must state that it is a suggestion that requires legal verification and leave the decision to the developer.
- When retention decisions change, the information notice, agreement and maintenance tasks must be updated together.
- If there is an ongoing dispute, complaint or official request on a record (legal hold), automatic deletion must be able to be stopped for that record.

## Recommended Periods (Examples To Be Verified)
- The periods in this section are starting suggestions; since legal periods can change, they must be verified with a lawyer and an accountant.
- Unverified registration / application records: 7 days.
- One-time codes (verification, reset, invitation): 7–30 days after use or expiry.
- Closed or expired session records: 30–90 days.
- Failed logins and security events: 6 months – 2 years.
- Activity log (audit log): at least 1–2 years; longer if it contains financial or legal transactions.
- Internet access / traffic records (if a hosting provider under Law No. 5651 (Turkish internet law)): the period specified in the legislation (in the 1–2 year range) must be verified and applied.
- Invoice and accounting records: 5 years under the Vergi Usul Kanunu (Tax Procedure Law), up to 10 years under the Türk Ticaret Kanunu (Turkish Commercial Code).
- Commercial contract and approval records: for the statute of limitations period (generally up to 10 years).
- Consent and approval records (marketing, cookies, agreement acceptance): for the burden-of-proof period; may also be kept for proof after consent is withdrawn.
- Personal data of a closed user account: must be deleted or anonymized at the end of the recovery period (14–30 days).
- Commercial data of a closed company account: the period stated in the agreement (e.g., export possible within 30–90 days, then deletion).
- Support / contact correspondence: 1–3 years.
- Server and application logs: 30–90 days; they should preferably not contain personal data.
- Analytics data: the analytics tool's retention setting must be set to the shortest sufficient period (e.g., 2 or 14 months in GA4).

## Deletion and Anonymization
- The choice between permanent deletion (hard delete) and soft deletion (soft delete, deleted_at field) must be made consciously for each data type.
- Soft-deleted records must not appear in any application query and must be permanently deleted after a certain period; soft delete must not mean keeping forever.
- Where personal data must be deleted but the record must be kept for commercial / statistical purposes, anonymization must be done (fields such as name, email, IP must be changed irreversibly).
- Pseudonymization does not count as anonymization; as long as the key is kept, the data remains personal data.
- Deletion order and foreign key behaviors (cascade, set null) in related tables must be chosen consciously; deleting a user must not delete another company's data.
- Files in file storage (S3, R2) must be deleted together with the database record; no orphan files must remain.
- Copies in third-party services (email provider, analytics, CRM, AI service) must also be included in the deletion process.
- Automatic deletion tasks must cover only orphaned and expired records, and every run must be written to the activity log.
- Before automatic deletion runs in production for the first time, what will be deleted must be listed with a "dry run" and shown to the developer.

## Backup
- The backup policy must be written: what is backed up, how often, where and for how long.
- Recommended start: daily backups must be kept 7–14 days, weekly backups 4–8 weeks, monthly backups 6–12 months.
- If managed databases have Point-in-Time Recovery, it should be enabled. (Recommended)
- The 3-2-1 rule must be applied: at least 3 copies, 2 different media, 1 copy in a different location (different provider or region).
- Backups must be encrypted, and backup access keys must be kept separate from database access.
- Backups should be stored so that they cannot be deleted even if the main server is deleted or compromised (immutable storage or a separate account). (Recommended)
- Restores must be tested regularly (e.g., monthly) in a separate environment; an untested backup must not be considered a backup.
- Restore time (RTO) and acceptable data loss (RPO) targets must be set.
- Personal data in backups is also subject to the retention policy; a deleted user's data must be gone from backups once the backup retention period ends.
- When restoring from a backup, personal data deleted after the backup was taken must be deleted again; for this, deletion requests must be recorded separately.
- The success of backup jobs must be monitored, and an alert must be sent on a failed backup.
- An additional manual backup must be taken before a significant change (migration, bulk update).

## If Company / Customer Based Panel
- How long company data will be kept after the company account is closed must be written in the agreement, and this period must be applied.
- How long content unpublished by the company will be kept must be defined.
- Approval and publication records must be kept long enough for objection processes.
- Companies must be offered the ability to export their own data.

## Recommended Platforms
- For Postgres backups, pgBackRest, WAL-G or the managed services' own backup features can be suggested.
- If Hetzner is used, server backup (Backups) and Snapshots features must be enabled, but a separate logical backup (pg_dump) must be taken for the database.
- For storing backups in a different location, Cloudflare R2, Backblaze B2, Hetzner Storage Box or Amazon S3 can be suggested.
- If a managed database (Supabase, Neon, RDS) is used, backup retention periods and PITR support by plan must be stated to the developer.
