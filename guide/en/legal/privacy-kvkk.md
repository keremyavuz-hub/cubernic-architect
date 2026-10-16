# Personal Data, KVKK and Privacy
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
- The KVKK information notice (and, if needed, a GDPR privacy policy) must be published publicly on a separate page.
- The information notice must include the identity of the data controller, data processed, processing purposes, legal bases, parties transferred to and cross-border transfer information.
- Every form that collects personal data must link to the information notice.
- Acknowledgement of the information notice and explicit consent must be kept separate; the information checkbox and the consent checkbox must not be combined.
- Explicit consent must be requested only for operations that truly need it and must not be made a condition of the service.
- If data is transferred to service providers abroad (email, server, analytics, CDN), this must be stated in the information notice and the required legal basis must be provided.
- A list of third-party services used (Resend, Cloudflare, analytics tools) must be kept.
- The user must be able to exercise their rights under KVKK article 11 (access, correction, deletion, objection) within the application or through a specific contact channel.
- Personal data requests must be answered within 30 days at the latest.
- No more personal data than necessary must be collected (data minimization).
- Personal data must not be written unnecessarily to logs, error records and analytics tools.
- Passwords, codes and secret information must not appear in plain text in any record.
- A process must be defined for notifying the Board and the data subjects in case of a data breach (within 72 hours at the latest).
- If the data controller criteria are met, VERBİS (data controllers registry) registration must be made.
- The information notice must also be versioned and users must be informed of changes.

## If Individual User System
- The user must be able to view and correct their own personal data from account settings.
- The user should be able to download a copy of their data (data portability). (Recommended)
- In services aimed at children, a parental consent process must be defined.

## If Company / Customer Based Panel
- If data the company uploads to the panel contains personal data (e.g., a customer list), the agreement must state that the platform is the data processor and the company is the data controller.
- Personal data of company representatives (name, email, IP) and the company's commercial data must be evaluated separately.
- Deleting a company user's personal data must not break the company's commercial records.
