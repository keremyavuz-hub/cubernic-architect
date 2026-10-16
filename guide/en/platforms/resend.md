# Resend
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## General To Do
- Resend should be used for transactional emails (verification, invitation, reset, notification) and optionally for bulk emails (Broadcasts).
- Two-factor authentication must be enabled on the Resend account, and team members must be added with their own users.
- Plan limits (monthly and daily send count, domain count, per-second request limit) must be stated to the developer, and current values must be checked on the pricing page: https://resend.com/pricing
- The Resend Node.js package (resend) or the REST API directly can be used; sending must be centralized in a single module.
- Resend docs: https://resend.com/docs

## Adding and Verifying a Domain
- The sending domain must be added under Resend > Domains: https://resend.com/domains
- To protect the main domain's reputation, sending from a subdomain should be recommended (e.g. send.domain.com or mail.domain.com). (Recommended)
- A region must be selected when adding the domain, preferring the one closest to users; the region cannot be changed later.
- The DKIM (TXT) and SPF (MX and TXT) records provided by Resend must be added exactly to the DNS provider.
- If Cloudflare is used, these records must be DNS only (gray cloud).
- If the Cloudflare Domain Connect automatic setup option is available, it can be used. (Optional)
- After adding the records, verification must be done in the Resend panel with Verify DNS Records, and no live sending must be done until the status is Verified.
- If another email service exists on the same domain, SPF records must be merged into a single record.
- The domain must have a DMARC record; otherwise emails may be rejected due to Gmail and Yahoo bulk sender rules.
- Click and open tracking should be kept off if not needed; link tracking in transactional emails can break security links.

## API Keys
- The API key must be created under Resend > API Keys: https://resend.com/api-keys
- The key used by the application must be created with Sending access only and restricted to the relevant domain only.
- A separate key must be created for each project and environment, and the key name must indicate the project and environment (e.g. vitrin-production).
- A Full access key must be created only for administrative tasks and must not be used in the application.
- Since the key is shown only once at creation, the developer must write it to the environment file immediately.
- A leaked key must be deleted immediately and a new one created.

## Sending
- The sender address must be from a verified domain and written together with a display name (e.g. "Brand <noreply@send.domain.com>").
- If replies are expected, reply_to must be used, and email receiving must be set up on the domain for the reply address (e.g. Cloudflare Email Routing).
- A plain text (text) version must be added along with HTML to every email.
- Type tags (tags) must be added to emails and used for filtering in the panel and webhooks.
- An idempotency key should be used to prevent the same email from being sent again (Idempotency-Key header). (Recommended)
- If multiple emails are sent at once, the batch sending endpoint must be used.
- If the per-second request limit is exceeded, a 429 response is returned; retries must be done with waiting (backoff).
- If scheduled sending is needed, the scheduled_at field can be used. (Optional)
- The attachment size limit must be considered; large files must be sent via a time-limited link instead of as attachments.
- In development and tests, Resend's test addresses must be used so that no email reaches real people (e.g. delivered@resend.dev, bounced@resend.dev, complained@resend.dev).
- The sending result (Resend email ID or error) must be written to the application's activity log.

## Templates
- Email templates must be prepared in code with a single layout function or with React Email: https://react.email
- All styles in templates must be inline, the logo must be PNG and served from a public address.
- Template preview should be viewable in the development environment. (Recommended)

## Webhooks and Delivery Tracking
- A webhook must be defined under Resend > Webhooks to receive delivery, bounce, complaint and open events: https://resend.com/webhooks
- Webhook requests must be verified with Resend's signature headers (Svix) and the webhook secret.
- No further sending must be done to hard-bounced and complaining addresses, and the address must be flagged in the application.
- Resend's automatic suppression list must be checked from the panel, and mistakenly added addresses must be removable.
- The webhook endpoint must be exempt from the CSRF rule and protected only by signature verification.

## Bulk Sending (Audiences and Broadcasts)
- Marketing and newsletter emails must be kept separate from transactional emails and, if possible, sent from a different subdomain.
- In bulk sending, emails must be sent only to people who gave consent, and the consent record must be kept in the application.
- Every bulk email must contain an unsubscribe link.
- If commercial messages are sent in Turkey, İYS (Turkish commercial message consent registry) registration and checks must be done.

## Recommended Alternatives
- If very high volume and low cost are needed, Amazon SES can be recommended; its setup is more laborious.
- If deliverability is the priority, Postmark can be recommended.
- If a single platform is wanted for both transactional and marketing, Brevo or SendGrid can be recommended.
- When switching providers, since sending is centralized in a single module, only that module must be changed.
