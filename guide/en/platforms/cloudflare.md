# Cloudflare
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## General To Do
- Which Cloudflare features will be used in the project must be determined at the start of the project, and only the relevant sections must be applied.
- Two-factor authentication must be enabled on the Cloudflare account.
- Team members must be added to the account with their own users and least privilege (Members > role); a single account must not be shared.
- For API access, an API token must be created with only the required permissions; the Global API Key must not be used: https://dash.cloudflare.com/profile/api-tokens
- Free plan limits (e.g. single Rate Limiting rule, WAF rule count, Workers daily request limit) must be stated to the developer, and if moving to a paid plan is needed, it must be said in advance.
- Since changes made in Cloudflare affect production, they must not be applied without the developer's explicit approval.
- Every Cloudflare setting made must be written to the project's system documentation.

## Adding a Domain
- The domain must be added in the Cloudflare panel with the Add a domain step: https://dash.cloudflare.com
- During adding, the automatically scanned list of existing DNS records must be checked one by one, and missing records (especially MX, TXT, subdomains) must be added manually.
- At the domain's registrar, the nameservers must be replaced with the two nameservers provided by Cloudflare.
- Before the nameserver change, a backup of all records at the old DNS provider must be taken.
- To avoid email interruption during the nameserver change, MX and email verification records must be added to Cloudflare beforehand.
- After the domain is active, if DNSSEC is used at the registrar, it must be re-enabled with the DS record provided by Cloudflare.
- The domain itself can be transferred to Cloudflare Registrar; the renewal cost advantage must be stated to the developer. (Optional)

## DNS Records
- A, AAAA and CNAME records carrying web traffic must be proxied (orange cloud).
- Records for email (MX), verification (TXT) and services that do not support proxying must be DNS only (gray cloud).
- The server's real IP address must not be exposed with a gray-cloud record (e.g. ftp, mail, direct subdomain).
- The purpose of each DNS record must be written in its comment field.
- Unused old DNS records must be deleted.
- On domains not using email, a "v=spf1 -all" SPF record and a "p=reject" DMARC record must be added to prevent spoofed sending.
- There must be a single SPF record; multiple email services must be merged into a single record (e.g. v=spf1 include:_spf.mx.cloudflare.net include:amazonses.com ~all).
- The DNS lookup limit (10 includes) in the SPF record must not be exceeded.
- A DMARC record must be added, reports must be monitored initially with p=none, then raised to quarantine and reject level.
- Only the certificate authorities in use should be allowed with a CAA record. (Recommended)
- Before DNS changes, existing records must be exported (DNS > Records > Export).

## SSL / TLS
- The SSL/TLS encryption mode must be Full (strict); Flexible must not be used.
- A Cloudflare Origin CA certificate must be used on the server (SSL/TLS > Origin Server), and the certificate's expiry date must be documented.
- Always Use HTTPS and Automatic HTTPS Rewrites must be enabled.
- The minimum TLS version must be 1.2.
- HSTS must be enabled after making sure all subdomains support HTTPS; it must be stated to the developer that it is hard to undo.
- With Authenticated Origin Pulls, the server can be made to accept only requests coming from Cloudflare. (Recommended)

## Email Routing
- Email Routing can be used to forward emails coming to the domain to another address (e.g. Gmail) for free; it does not send email, it only receives and forwards.
- Email Routing must be enabled under the domain's Email > Email Routing section, and the MX and SPF records requested by Cloudflare must be added.
- Destination addresses must be verified first; forwarding is not done to an unverified address.
- A separate rule (Custom address) must be created for each forwarding address (e.g. support@, contact@).
- The catch-all rule must be used carefully due to spam risk. (Optional)
- There is no need to set up a forwarding rule for send-only addresses (e.g. noreply@).
- Email Routing MX records and another email provider's (Google Workspace, Microsoft 365) MX records cannot be used together on the same domain.
- If a separate service (Resend, SES etc.) is used for sending email, the SPF record must be merged to include both services.
- If incoming emails need to be processed with code, Email Workers can be used. (Optional)

## Workers
- Workers should be used for serverless code running at the edge (API, redirects, webhooks, scheduled tasks).
- Workers projects must be created with the Wrangler CLI, and configuration must be kept in git in a wrangler.toml or wrangler.jsonc file.
- Secret values must be added with the wrangler secret put command and must not be written to the configuration file.
- In local development, secret values must be kept in a .dev.vars file, and this file must not be added to git.
- Workers must be bound to a custom domain (Custom Domain or Route), and the workers.dev address must be disabled in production.
- Free plan request and CPU time limits must be stated to the developer.
- Cron Triggers can be used for scheduled tasks. (Optional)
- For storing data, KV (key-value), D1 (SQLite), R2 (files), Durable Objects (stateful objects) or Queues must be chosen as needed.
- CSRF, rate limiting and authentication rules must also be applied to requests coming to Workers.
- Worker errors must be logged with Workers Logs or Logpush.

## Pages
- Static sites or front-end projects can be published with Cloudflare Pages; automatic deployment must be done by connecting to the Git repository.
- Whether preview deployments will be public must be determined, and if needed they must be protected with Cloudflare Access.
- Environment variables must be defined under Pages > Settings > Variables and Secrets, separately for production and preview.
- A custom domain must be connected under Pages > Custom domains.

## R2 Storage
- R2 can be used for file storage (S3 compatible, free egress).
- A separate bucket and an R2 API token authorized only for that bucket must be created for each application.
- Public files must be served via a custom domain (Custom Domain), and the r2.dev address must not be used in production.
- Time-limited signed URLs (presigned URL) must be used for private files.
- If direct upload from the browser is done, the bucket CORS setting must allow only the application's address.
- Temporary files should be deleted automatically with lifecycle rules. (Recommended)

## Turnstile (Bot Protection)
- The Turnstile site must be added from the Turnstile section in the Cloudflare panel: https://dash.cloudflare.com/?to=/:account/turnstile
- When adding the site, only the application's domains (and 127.0.0.1 for local testing) must be entered.
- The widget mode must be Managed in most cases.
- The site key is public to the browser; the secret key must be used only on the server.
- Cloudflare's official test keys can be used in local development and tests.

## Security Rules (WAF, Rate Limiting, Bot)
- Rate Limiting rules must be defined for POST paths such as login, sign-up and password reset (Security > WAF > Rate limiting rules).
- Admin panels can be restricted by country, IP or Cloudflare Access. (Optional)
- Bot Fight Mode must be enabled, and it must be tested that it does not block API or webhook paths.
- During an attack, Under Attack Mode can be enabled temporarily; it must be stated to the developer that it affects user experience.
- Paths receiving webhooks (e.g. payment notifications) must be exempt from security rules or the provider's IP addresses must be allowed.

## Cache and Redirect Rules
- Pages containing sessions and API responses must not be cached (Bypass with Cache Rules).
- Static files must be cached long-term.
- After a release, the cache must be purged if needed (Caching > Purge Cache or API).
- The redirect between www and the root domain must be done in one direction with Redirect Rules.

## Tunnel and Access
- Cloudflare Tunnel (cloudflared) can be used to publish without exposing server ports to the internet; in this case there is no need to open ports 80 and 443 in the firewall. (Optional)
- Internal tools, admin panels and preview environments can be placed behind email or SSO authentication with Cloudflare Access (Zero Trust); it must be stated that it can be used for up to 50 users on the free plan. (Optional)

## Server-Side Compatibility
- The application must read the client IP address from the CF-Connecting-IP header.
- In the server firewall, ports 80 and 443 must be open only to Cloudflare IP ranges: https://www.cloudflare.com/ips/
- Since Cloudflare IP ranges are updated from time to time, firewall rules must be checked regularly.
