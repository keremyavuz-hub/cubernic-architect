# Storing Consent Records in the System
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## Developer Warning
- Contracts and legal texts produced based on this file are only ready-made draft content; they do not replace legal advice and do not provide a legal basis.
- When the AI produces a legal text or page, at the end of the work it must clearly tell the developer that the text is a draft and must not be published without being checked by a lawyer.
- In draft texts, information such as company title, address, tax information and competent court must not be invented; it must be left as square-bracket placeholders (e.g., [COMPANY TITLE]).
- The draft text's code or database must keep fields for draft status, last reviewer and lawyer approval date.
- Texts without lawyer approval must remain as open items in the go-live checklist.
- When legislation (KVKK (Turkish data protection law), Law No. 6563 (Turkish e-commerce law), Mesafeli Sözleşmeler Yönetmeliği (Distance Contracts Regulation), GDPR) changes, the developer must be reminded to check that texts are up to date.

## Common To Do
- A separate table (e.g., consents) must be created for consent records, and records must be append-only.
- Each record must keep a record id, user id (or a consent id for a visitor who has not logged in), consent type, status (given / withdrawn), text version, time, IP, browser information, source (registration form, cookie banner, my permissions page, API) and language.
- In company-based systems, the company id and the role of the approving user must also be added to the record.
- A separate table (e.g., consent_documents) must be created for consent texts; type, version, full text, effective date and lawyer approval date must be stored.
- A consent record must always be linked to a text version, so which person accepted which text can be shown definitively.
- The current consent status must be calculated from the latest record for each type; a separate summary field or view can be used for fast reads.
- A non-logged-in visitor's consent id must be linked to the user id after login or registration.
- Since consent records contain personal data, a retention period must be defined, but they must not be deleted during the burden-of-proof period (e.g., the statute of limitations).
- When an account is deleted, consent records may be kept for proof after being stripped of personal information; this must be written in the information notice.
- Consent records must be exportable by user, date range and consent type.
- Consent grant and withdrawal operations must also be written to the activity log (audit log).
- The related operation (marketing send, tracking script) must not start before the consent record is written.
