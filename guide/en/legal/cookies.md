# Cookies and Cookie Consent Screens
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
- A list of all cookies and similar technologies (localStorage, pixels, SDKs) used by the application must be kept: name, purpose, category, duration, provider, first / third party.
- The cookie list must be updated as the code changes; before a new analytics or advertising tool is added, it must be added to the list and the policy.
- Cookies must be divided into categories: necessary, functional (preference), analytics / performance, marketing / advertising.
- No consent is required for necessary cookies (session, security, CSRF, load balancing, the cookie preference itself); consent must be obtained for all other categories.
- Analytics, advertising or tracking scripts must not be loaded before cookie consent is obtained; third-party scripts added to the page must run conditionally based on consent status.
- Applications using only necessary cookies do not need a consent window, but a cookie policy page must still be published and linked from the footer.
- Session cookies must be created with the HttpOnly, Secure and SameSite attributes.
- The cookie preference must have an expiry (e.g., 6 or 12 months) and must be asked again when it expires or the cookie policy changes.
- The cookie policy page must be prepared according to the headings in legal/legal-pages.md.

## Screens
- On the first visit, a cookie notice (banner) must be shown at the bottom or corner of the page and must not fully cover the page content.
- The notice must contain a short explanation, a link to the cookie policy and "Accept all", "Reject" and "Manage preferences" buttons.
- The "Accept" and "Reject" buttons must have the same size, color weight and visibility; rejecting must not be harder than accepting.
- The close (X) button of the notice must not mean acceptance; the user must continue with necessary cookies only.
- Scrolling the page or continuing to browse must not be considered consent.
- On the "Manage preferences" screen, each category must be shown as a separate toggle with its description, and the necessary category must be on and locked.
- On the preferences screen, the cookies used under each category should be shown in an expandable list with name, purpose and duration. (Recommended)
- Optional categories must be off by default.
- The preferences screen must have "Save choices", "Accept all" and "Reject all" buttons.
- The user must be able to change their preference later; the site footer must have a "Cookie preferences" link or a small fixed cookie icon.
- Cookie screens must be usable with the keyboard, focus must move to the notice and they must be compatible with screen readers.
- Cookie screens must be designed to fit the application's theme and must not cover the screen on mobile.
- Cookie screen texts must match the site's language and change by language on multilingual sites.

## Recording and Storage
- The user's cookie preference must be stored in the browser (first-party cookie) and read as soon as the page opens, so scripts load accordingly.
- Cookie preferences should also be kept on the server as an evidence record; the record structure is in legal/consent-records.md. (Recommended)
- For non-logged-in visitors, a random consent id must be generated, the record kept with this id and linked to the user on login.
- The record must keep the chosen categories, cookie policy version, time, language and source (banner, preferences screen).
- When the user withdraws their preference, the related cookies must be deleted from the browser and scripts stopped.
- If tools such as Google Analytics or Google Ads are used, Google Consent Mode v2 signals (ad_storage, analytics_storage, ad_user_data, ad_personalization) must be sent according to consent status.

## Recommended Platforms
- In simple projects with few third-party tools, the cookie screen can be written within the application or an open source library can be used (e.g., orestbida/cookieconsent, Klaro). (Optional)
- If a more enterprise, auditable setup with automatic cookie scanning is wanted, a cookie / consent management platform (CMP) should be suggested.
- CMP platforms that can be suggested: OneTrust (large enterprises), Usercentrics / Cookiebot (medium and large scale, automatic scanning, Google certified), Didomi, CookieYes and iubenda (small and medium scale, affordable).
- When choosing a CMP, Google CMP certification, Consent Mode v2 support, Turkish interface, automatic cookie scanning, exportability of consent records and data center location must be compared.
- Even if a CMP is used, the accuracy of the cookie list and the legal compliance of the policy must remain the responsibility of the developer and the lawyer.
- When suggesting a platform, that it is paid, its monthly cost and free plan limits must be stated to the developer.
