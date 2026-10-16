# Google Tag Manager Management
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## General To Do
- Google Tag Manager (GTM) should be used to manage analytics, advertising and conversion tags without touching code: https://tagmanager.google.com
- Whether GTM will be used in the project, or tags will be added directly in code, must be asked to the developer at the start of the project.
- Every tag added to GTM is code running on the site; who accesses GTM with which permission must be treated as a security decision.
- The GTM container ID (GTM-XXXXXXX) must be kept in an environment variable (e.g. NEXT_PUBLIC_GTM_ID).
- GTM docs: https://support.google.com/tagmanager

## Account and Container Structure
- A single GTM account must be opened for the company, and a separate container must be created for each website or app.
- Separate container types must be used for web, iOS, Android and server side.
- Account and container names must indicate the brand and domain (e.g. Markapolitan / dash.markapolitan.com).
- The owner of the GTM account must be the company's corporate Google account; a personal account or agency account must not be made owner.

## Users and Permissions
- Users must be added with their own Google accounts and with least privilege (Read, Edit, Approve, Publish).
- Publish permission must be held only by responsible people.
- Agencies or external teams should be added with Edit permission only, and publishing should be done from within the company. (Recommended)
- Account administrator permission must be held by at least two company employees, not tied to a single person.
- Access of departing employees and agencies whose work has ended must be removed immediately.
- The user list must be reviewed periodically.

## Installation
- The GTM code must be added as high as possible in the page head, and the noscript part at the body opening.
- In Next.js projects, the GoogleTagManager component from the @next/third-parties package can be used. (Recommended)
- The GTM code must be loaded only once; GA4 or pixel code must not be added on the same page both directly and via GTM, causing double counting.
- GTM must be loaded only in production or separated with GTM Environments.
- Whether GTM is needed on panel, admin and login-required pages must be evaluated separately, and it must not be loaded if unnecessary.
- If Content-Security-Policy is used, the domains loaded by GTM and tags must be added to the allowlist, and nonce support must be configured.

## Environments and Publishing
- GTM Environments must be used for development, staging and production, and a separate environment snippet (gtm_auth, gtm_preview) must be added to the test environment.
- Changes must be made not directly in the default workspace, but in separate Workspaces named by purpose.
- Every change must be tested with Preview and Tag Assistant before publishing: https://tagassistant.google.com
- Every publish must be made with a meaningful version name and description (what changed, why, who requested it).
- Version history must be kept so that it is possible to roll back to the previous version if problems occur.
- The container should be periodically exported as JSON and backed up (Admin > Export Container). (Recommended)
- For major changes, publishing must be done during low-traffic hours.

## Naming and Organization
- A consistent naming convention must be used for tags, triggers and variables (e.g. "GA4 - Event - form_submit", "Trigger - Click - CTA", "DLV - user_type").
- Tags must be organized into folders (e.g. GA4, Google Ads, Meta, Consent, Utility).
- The purpose and owner of each tag must be written in its notes field.
- Unused tags, triggers and variables must be deleted regularly.
- The tag list and measurement plan must be kept in the project documentation.

## Data Layer (dataLayer)
- Measurement must rely on dataLayer events sent by the application, not on page structure (CSS selectors).
- dataLayer event names and fields must be defined in advance in a measurement plan (e.g. sign_up, login, generate_lead, purchase).
- GA4 recommended event names must be used where possible: https://support.google.com/analytics/answer/9267735
- E-commerce events must be sent in line with the GA4 e-commerce schema (view_item, add_to_cart, begin_checkout, purchase).
- Personal data (email, phone, full name, Turkish ID number) must not be written to the dataLayer in plain text.
- If user data is needed for enhanced conversions, it must be sent only if consent was obtained and in hashed form.
- In single page applications (Next.js, React), a separate page view event must be sent for page changes, or the GA4 history change setting must be checked.
- dataLayer events must be sent from a single helper function in the application.

## Consent Management (Consent Mode)
- Analytics and advertising tags must not run without cookie consent.
- Google Consent Mode v2 must be set up, and the default consent state must be set to "denied" before GTM loads.
- When the user consents, a consent update must be sent: ad_storage, analytics_storage, ad_user_data, ad_personalization.
- If a consent management platform (CMP) is used, the official CMP template in the GTM template gallery must be preferred.
- Non-Google tags (Meta, TikTok, Hotjar) must be triggered with Additional consent checks according to the consent state.
- The consent flow must be tested with the Consent tab of Tag Assistant.
- Cookie and consent rules must be applied according to the legal/cookies.md file.

## Security
- Custom HTML tags and custom JavaScript variables must be minimized; official or gallery templates must be used where possible.
- Permissions of community templates added from the gallery (which domains they send requests to, which data they access) must be reviewed before adding.
- Unwanted tag types can be blocked in the container with an allowlist / blocklist. (Optional)
- GTM tags must not access login forms, password fields or card details fields on payment pages.
- Only necessary tags must run on payment pages (PCI DSS).
- When a new marketing tool is added, the cookie list, privacy notice and CSP must be updated.

## Performance
- Tag count and weight must be monitored, and their impact on page speed must be measured with Lighthouse or PageSpeed.
- Non-critical tags must be triggered after the page has loaded (Window Loaded).
- Duplicate tags doing the same job must be removed.
- For high-traffic or ad-heavy projects, server-side GTM (server-side tagging) should be recommended; it reduces the script load in the browser and increases data control. (Optional)

## Server-Side GTM (Server-Side Tagging)
- For server-side GTM, a separate server container must be created and hosted on its own subdomain (e.g. sgtm.domain.com).
- Google Cloud Run, Stape or similar managed services can be recommended for hosting; the cost must be stated to the developer.
- Requests coming to the server container must be validated, and data must not be accepted from unwanted clients.
- Personal data must be filtered or hashed in the server container before being sent to third parties.
- Server-side integrations such as Meta Conversions API and Google Ads enhanced conversions must be done through this container.

## Linked Accounts
- The GA4 property must be matched with the GTM measurement ID, and it must be tested that GA4 data goes to the correct property.
- Google Ads, Merchant Center and GA4 links must be set up from the respective panels.
- The Google Search Console link with GA4 should be set up. (Recommended)
- Ownership of all marketing accounts (GTM, GA4, Ads, Meta Business) must be with the company, and their list must be documented.

## Recommended Platforms
- In simple projects, GA4 can be added directly in code; GTM may not be needed. (Optional)
- For hosting server-side GTM, Stape (easy setup) or Google Cloud Run (flexible, requires technical knowledge) can be recommended.
- If privacy-focused, cookieless analytics is wanted, Plausible, Umami or PostHog can be recommended instead of GTM and GA4.
- Tools such as Tag Assistant, Omnibug or ObservePoint can be recommended for tag auditing.
