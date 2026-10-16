# Environment Variables and .env Files
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## Files
- A .env.example file must be created in the project and added to git; the name, description and example / empty value of all variables must be in this file.
- Real values must be kept in the .env.local file, and this file must not be added to git.
- The .gitignore file must contain the .env, .env.local, .env.*.local and .env.production patterns.
- Separate files per environment can be used (.env.development, .env.test, .env.production); those containing secret values must not be added to git. (Optional)
- The test environment must use a separate database and separate API keys; production values must not be used in tests.
- Production values must be kept on the server as a file or in the hosting platform's secret variable management.
- When a new variable is added, it must be added at the same time to the .env.example file, the documentation and the application startup check.
- When a variable is removed, it must also be removed from .env.example and the documentation.

## File Content and Layout
- Variables must be grouped by category, and each group must have a heading as a comment line above it (e.g. # Database, # Email, # Security).
- Above each variable, what it does, whether it is required or optional, and what happens if left empty must be written as a comment.
- Variable names must be written in uppercase with underscores and must start with the service or topic name (e.g. MAIL_FROM, TURNSTILE_SECRET_KEY).
- Variables going to the browser must be named with the framework's prefix (e.g. NEXT_PUBLIC_ for Next.js, VITE_ for Vite); secret values must not be defined with this prefix.
- For variables taking multiple values, the separator must be documented (e.g. comma-separated email list).
- The first lines of the file must not contain random text or invalid lines.
- If values contain spaces or special characters, they must be written in quotes (e.g. MAIL_FROM="Brand <noreply@domain.com>").

## Variable Descriptions and Source Links
- In the .env.example file, what each variable does must always be written as a comment line above it.
- Each variable's description must state whether it is required or optional and what happens if left empty.
- Each variable's description must state from which platform and which panel menu the value is obtained (e.g. Cloudflare > My Profile > API Tokens).
- Each variable's description must contain a direct link to the page where the value is obtained.
- The permission or scope to select when creating the key must be written in the description (e.g. "Zone > DNS > Edit", "Sending access").
- If an API must be enabled first to get a key (e.g. YouTube Data API v3 in Google Cloud), the link to the enable page must also be written.
- If the value is generated with a command, the command must be written in the description (e.g. openssl rand -base64 32, npx web-push generate-vapid-keys).
- The expected format of the value must be shown with an example (e.g. re_xxxxxxxx, https://xxxx.supabase.co); the real value must not be written.
- If test (sandbox) and live keys are obtained from different pages, links to both must be written.
- A link to the platform's official documentation page should also be added. (Recommended)
- Since links may become outdated as the platform interface changes, in uncertain cases the platform's main panel and official documentation page must be given instead of a direct panel page, and the developer must be reminded to verify the link.
- Where to obtain service values must be listed per service in the setup/env-catalog.md file, and copied from there when preparing .env.example.
- The following format must be used for each variable in the .env.example file:
```
# ── Email (Resend) ────────────────────────────────────────────
# Purpose      : Sends verification, invitation and password reset emails.
# Required     : No. If empty, emails are not sent, they are written to the console.
# Where        : Resend > API Keys > Create API Key
# Link         : https://resend.com/api-keys
# Permission   : Sending access (send only), relevant domain
# Format       : re_xxxxxxxxxxxxxxxxxxxx
# Docs         : https://resend.com/docs
RESEND_API_KEY=
```

## Secret Values
- Secret values (API key, database password, signing key) must not be asked of the AI, printed, or pasted into the conversation.
- The AI must add only variable names with empty values to the .env file; the developer must fill in secret values themselves.
- If it is to be checked whether values are filled, only filled / empty information must be reported without showing the value.
- Secret values generated by the application itself, such as session or signing keys, must be generated with strong randomness (e.g. openssl rand -base64 32).
- A separate key must be used for each environment and project; a key must not be shared across multiple projects.
- API keys must be created with least privilege (e.g. send permission only).
- When a key leaks, it must be revoked immediately and a new one created; if the old key entered git history, the key must be renewed even if the history is cleaned.
- Regular rotation of keys should be planned. (Recommended)

## Startup Check
- On application startup, required variables must be checked, and if any is missing, an error must be raised clearly stating its name.
- The format of variables should be validated (e.g. is the URL valid, is it a number, is the email list valid). (Recommended)
- Variable reading should be centralized in a single module; process.env should not be read directly everywhere in the code. (Recommended)
- If an optional variable is missing, the application must not crash; the related feature must be safely disabled and a warning written to the console (e.g. if there is no email key, sending is skipped).
- Disabling security features must be accepted only in local development; in production the application must not start if these variables are missing (e.g. bot protection, CSRF allowed origin).
- The developer must be reminded that the development server needs to be restarted when variables change.

## Standard Variables
- Variable names must be chosen from the catalog in the setup/env-catalog.md file according to the services used.
- Every project must define at least the application URL, the database and the keys of the services used.

## If Company / Customer Based Panel
- Team notification addresses (e.g. MAIL_ADMIN) and platform administrator settings must be defined.
- If the panel reads another system's data, that system's connection details must be defined separately with a read-only key.
- Company-specific secret values (company API keys, webhook secrets) must not be stored in the .env file but encrypted in the database; the .env file must contain only the master key of this encryption.

## If Individual User System
- If social login is used, the providers' client IDs and secrets (e.g. GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET) and redirect URLs must be defined.
- If SMS verification is used, the SMS provider's keys and sender header must be defined.
- If there is an İYS (Turkish commercial message consent registry) integration, the İYS API details and brand code must be defined.

## Recommended Platforms
- In small projects, .env.local and the .env file on the server are sufficient.
- When the team grows or multiple environments are managed, a secret management platform should be recommended: Doppler, Infisical (open source, can be self-hosted), 1Password Secrets Automation, HashiCorp Vault (large enterprises).
- If a hosting platform is used, its own secret variable management can be preferred (Vercel, Cloudflare, GitHub Actions secrets).
- Schema libraries can be recommended for type and format validation of variables (e.g. env validation with zod, @t3-oss/env-nextjs). (Optional)
- When recommending a platform, the cost, free plan limits and where data is stored must be stated to the developer.
