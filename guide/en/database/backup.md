# Backup and Disaster Recovery
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## Common To Do
- The database and uploaded files must be backed up automatically at regular intervals (e.g., daily full backup).
- Backups must not be stored on the same server, but with a different provider or in a different region.
- Backups must be encrypted; the encryption key must be stored separately from the backups.
- A retention scheme must be defined (e.g., 7 daily, 4 weekly, 12 monthly); old backups must be deleted automatically.
- The acceptable data loss window (RPO) and the system recovery time (RTO) must be defined and written in the documentation.
- If less data loss is required, continuous backup (Postgres WAL archiving / point-in-time recovery) should be set up. (Recommended)
- Restores must be tested regularly (e.g., once a month) in a separate environment; an untested backup must be considered nonexistent.
- If the backup job fails or does not run at all, an alert must be sent to the developer.
- Restore steps must be documented (e.g., docs/YEDEK.md): backup location, commands, order, checks.
- Since backups contain personal data, access must be restricted and retention periods must comply with legal obligations (see legal/data-retention.md).
- How to rebuild the system from scratch in case of total server loss must be written down (infrastructure, DNS, secret variables, restore from backup).
- AI must never delete or overwrite backups (see ai/destructive-actions.md).

## Recommended Platforms
- Hetzner Storage Box / Backups, Cloudflare R2, Backblaze B2, AWS S3: off-server backup storage.
- pgBackRest, WAL-G: continuous backup and point-in-time recovery for Postgres.
- restic, borg: encrypted, deduplicated backup for files.
- Managed databases (Supabase, Neon, RDS): built-in backup; a separate external backup is still recommended.
