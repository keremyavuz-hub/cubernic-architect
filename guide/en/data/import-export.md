# Import and Export
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## Import
- Import must first show a preview; data must not be saved without the user's confirmation.
- A column mapping screen should be offered; headers in the file must be mappable to fields in the system. (Recommended)
- Each row must be validated separately; invalid rows must be reported with row number and reason, and errors must be downloadable.
- For invalid rows, whether to stop the whole operation or import only valid rows must be chosen explicitly.
- Re-uploading the same file must not create duplicate records; a matching key (e.g., SKU, barcode) must be defined.
- Large files must be processed in a background job, not during the request (see operations/jobs.md); progress must be shown to the user.
- File size and row count must be limited.
- Character encoding (UTF-8, Windows-1254), delimiter (comma, semicolon) and decimal format (1.234,56) must be auto-detected or asked; Turkish Excel files usually use semicolons and comma decimals.
- XML files must be read with a parser that is closed to external entity (XXE) attacks.
- Every import must be recorded with who, when, how many rows and how many errors.
- Making an import reversible should be evaluated (records added with the same import ID). (Optional)

## Sync via Feed / Connection
- Remote feed URLs must be fetched with SSRF protections (see security/ssrf.md).
- Sync frequency and timeouts must be defined; the remote server must not be overloaded (see code/external-requests.md).
- Records no longer present in the feed must not be deleted immediately; they must be deactivated and shown to the user.
- The result of each sync (added, updated, failed) must be recorded and visible in the panel.

## Export
- In CSV / Excel exports, cells starting with =, +, -, @ must be escaped so they do not run as formulas (CSV formula injection).
- Exports must contain only data the user is authorized for; company based filtering must be applied.
- Large exports must be prepared in the background, and a time-limited download link must be given when ready.
- CSV files must be written with a UTF-8 BOM so that Turkish characters open correctly in Excel.
- Exports containing personal data must be written to the audit log.
