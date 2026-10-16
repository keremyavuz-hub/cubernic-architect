# Environment Variables Catalog
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## Usage Rules
- This catalog must be used as the source when preparing the .env.example file according to the services used in the project, and only variables of services actually used in the project must be added.
- Variable names must be used as written here; if the service's own official documentation requires a different name, that name must be preferred.
- Variables marked as secret must never be defined with a browser-public prefix (NEXT_PUBLIC_, VITE_, PUBLIC_).
- Variables marked as public may go to the browser, but must still be described in the .env.example file.
- In frameworks other than Next.js, the browser prefix must be changed according to the framework (Vite: VITE_, SvelteKit: PUBLIC_, Nuxt: NUXT_PUBLIC_, Expo: EXPO_PUBLIC_).
- Separate keys must be used for each service in test and production environments.
- When a new service is used, a related section must be added to this catalog.
- For each service in the catalog, the panel path and link where the value is obtained must be copied into the .env.example file as a description.
- Links may become outdated as platform interfaces change; when preparing .env.example it must be checked that the link still works, and if changed, this catalog must be updated.

## Application
- NODE_ENV must be defined (development, test, production).
- APP_URL or PANEL_URL must be defined as the production address; email links, the CSRF allowlist and OAuth redirects depend on this value.
- NEXT_PUBLIC_APP_URL can be defined for the public address the browser needs to know (public). (Optional)
- HOST and PORT must be defined for the address the application listens on (e.g. 127.0.0.1 and 3100).
- APP_NAME can be defined for the application name used in emails and page titles. (Optional)
- APP_ENV can be defined to distinguish production, staging and local environments. (Optional)
- LOG_LEVEL can be defined for log verbosity (debug, info, warn, error). (Optional)
- TZ can be defined for the server time zone (e.g. Europe/Istanbul). (Optional)
- The application's own secret values such as SESSION_SECRET and ENCRYPTION_KEY are not obtained from a platform; they must be generated with a command: openssl rand -base64 32.

## Database
- DATABASE_URL must be defined for the main database connection (secret).
- DATABASE_URL_TEST must be defined as a separate database for tests (secret).
- DIRECT_URL must be defined as a direct connection for migrations if a connection pooler (PgBouncer, Supavisor) is used (secret).
- DATABASE_POOL_MAX can be defined for the connection pool upper limit. (Optional)
- DATABASE_SSL or sslmode=require in the connection URL must be used for the production database.
- REDIS_URL must be defined if Redis is used for cache, queue or rate limiting (secret).
- UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN must be defined if Upstash is used (secret).
- MONGODB_URI must be defined if MongoDB is used (secret).
- The local database connection must be built from the user, password and port in the project's docker-compose file.
- Upstash Redis values must be obtained from the REST API section on the database page in the Upstash panel: https://console.upstash.com
- The MongoDB Atlas connection must be obtained from Database > Connect in the Atlas panel: https://cloud.mongodb.com

## Supabase
- NEXT_PUBLIC_SUPABASE_URL must be defined as the project address (public).
- NEXT_PUBLIC_SUPABASE_ANON_KEY, or by its new name the publishable key, must be defined as the key used in the browser (public; security depends on Row Level Security rules).
- SUPABASE_SERVICE_ROLE_KEY, or by its new name the secret key, must be used only on the server (secret; bypasses all RLS rules, must never go to the browser).
- SUPABASE_JWT_SECRET must be defined if JWT verification is needed on the server (secret).
- SUPABASE_DB_URL must be defined if a direct Postgres connection is needed (secret).
- SUPABASE_PROJECT_REF can be defined for CLI and type generation. (Optional)
- SUPABASE_ACCESS_TOKEN must be defined only for CI / CLI operations (secret).
- In every server code using the service role key, the tenant / user filter must be applied manually.
- Supabase URL and keys must be obtained from Project Settings > API Keys in the Supabase panel: https://supabase.com/dashboard/project/_/settings/api-keys
- The database connection URL must be obtained from the Connect button at the top of the Supabase panel or from Project Settings > Database: https://supabase.com/dashboard/project/_/settings/database
- JWT settings must be obtained from Project Settings > JWT Keys: https://supabase.com/dashboard/project/_/settings/jwt
- The Supabase CLI access token must be obtained from Account > Access Tokens: https://supabase.com/dashboard/account/tokens
- Supabase docs: https://supabase.com/docs/guides/api/api-keys

## Other Database and Backend Services
- If Firebase is used, NEXT_PUBLIC_FIREBASE_API_KEY, NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN, NEXT_PUBLIC_FIREBASE_PROJECT_ID, NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET, NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID, NEXT_PUBLIC_FIREBASE_APP_ID (public) and FIREBASE_SERVICE_ACCOUNT_KEY for the server (secret) must be defined.
- If Neon is used, DATABASE_URL (pooled) and DATABASE_URL_UNPOOLED (secret) must be defined.
- If PlanetScale or MySQL is used, DATABASE_URL (secret) must be defined.
- If Turso / libSQL is used, TURSO_DATABASE_URL and TURSO_AUTH_TOKEN (secret) must be defined.
- If Convex is used, CONVEX_DEPLOYMENT and NEXT_PUBLIC_CONVEX_URL must be defined.
- If Prisma is used, DATABASE_URL and, if needed, DIRECT_URL must be defined.
- Firebase configuration must be obtained from Project settings > General > Your apps in the Firebase console, and the service account key from Project settings > Service accounts: https://console.firebase.google.com
- The Neon connection URL must be obtained from the Connect button on the project page in the Neon panel: https://console.neon.tech
- The Turso token must be generated with the Turso CLI: turso db tokens create <database>; panel: https://app.turso.tech
- Convex values must be obtained from the Convex panel: https://dashboard.convex.dev
- PlanetScale connection details must be obtained from database > Connect in the PlanetScale panel: https://app.planetscale.com

## Session and Authentication
- SESSION_SECRET must be defined with a random value of at least 32 bytes if signed or encrypted cookies are used (secret).
- SESSION_COOKIE_NAME can be defined for the cookie name. (Optional)
- SESSION_MAX_AGE can be defined for the session duration (seconds). (Optional)
- COOKIE_DOMAIN must be defined if the session will be shared across subdomains.
- JWT_SECRET or JWT_PRIVATE_KEY / JWT_PUBLIC_KEY must be defined if JWT is used (secret / public key).
- ENCRYPTION_KEY must be defined as the master key for data stored encrypted in the database (secret).
- AUTH_SECRET and AUTH_URL (formerly NEXTAUTH_SECRET and NEXTAUTH_URL) must be defined if Auth.js is used (secret / public).
- NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY (public) and CLERK_SECRET_KEY (secret) must be defined if Clerk is used.
- AUTH0_DOMAIN, AUTH0_CLIENT_ID, AUTH0_CLIENT_SECRET (secret), AUTH0_SECRET (secret) must be defined if Auth0 is used.
- BETTER_AUTH_SECRET (secret) and BETTER_AUTH_URL must be defined if Better Auth is used.
- TOTP_ISSUER can be defined for the name shown in the authenticator app in two-factor authentication. (Optional)
- Clerk keys must be obtained from Configure > API Keys in the Clerk panel: https://dashboard.clerk.com (docs: https://clerk.com/docs)
- Auth0 values must be obtained from Applications > application > Settings in the Auth0 panel: https://manage.auth0.com (docs: https://auth0.com/docs)
- AUTH_SECRET and BETTER_AUTH_SECRET must be generated with a command: openssl rand -base64 32 (for Auth.js, npx auth secret).

## Social Login and OAuth
- For Google login, GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET (secret) must be defined.
- For Apple login, APPLE_CLIENT_ID (Services ID), APPLE_TEAM_ID, APPLE_KEY_ID and APPLE_PRIVATE_KEY (secret) must be defined.
- For Microsoft / Entra login, MICROSOFT_CLIENT_ID, MICROSOFT_CLIENT_SECRET (secret) and MICROSOFT_TENANT_ID must be defined.
- For GitHub login, GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET (secret) must be defined.
- For Facebook login, FACEBOOK_APP_ID and FACEBOOK_APP_SECRET (secret) must be defined.
- For LinkedIn login, LINKEDIN_CLIENT_ID and LINKEDIN_CLIENT_SECRET (secret) must be defined.
- OAuth redirect URLs must be generated from the production address and registered exactly in the provider panel.
- The Google OAuth client must be created from Google Cloud Console > APIs & Services > Credentials: https://console.cloud.google.com/apis/credentials
- The Google OAuth consent screen must be configured in the same project: https://console.cloud.google.com/apis/credentials/consent
- The Apple Services ID must be obtained from Apple Developer > Certificates, Identifiers & Profiles > Identifiers, and the key from Keys: https://developer.apple.com/account/resources/identifiers/list/serviceId
- The Microsoft app registration must be done from App registrations in the Microsoft Entra admin center: https://entra.microsoft.com
- The GitHub OAuth app must be created from GitHub > Settings > Developer settings > OAuth Apps: https://github.com/settings/developers
- The Facebook app must be created from the Meta for Developers panel: https://developers.facebook.com/apps
- The LinkedIn app must be created from the LinkedIn Developers panel: https://www.linkedin.com/developers/apps

## Email
- MAIL_FROM must be defined as the sender address and display name (e.g. "Brand <noreply@domain.com>").
- MAIL_REPLY_TO can be defined for the reply address. (Optional)
- MAIL_ADMIN can be defined as comma-separated team notification addresses. (Optional)
- If Resend is used, RESEND_API_KEY (secret) must be defined.
- If Postmark is used, POSTMARK_SERVER_TOKEN (secret) and, if needed, POSTMARK_MESSAGE_STREAM must be defined.
- If SendGrid is used, SENDGRID_API_KEY (secret) must be defined.
- If Mailgun is used, MAILGUN_API_KEY (secret), MAILGUN_DOMAIN and MAILGUN_API_URL for the EU region must be defined.
- If Amazon SES is used, AWS_SES_REGION, AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY (secret) must be defined.
- If Brevo is used, BREVO_API_KEY (secret) must be defined.
- If SMTP is used, SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD (secret) and SMTP_SECURE must be defined.
- If inbound email or webhooks are used, the provider's webhook signing key (e.g. RESEND_WEBHOOK_SECRET) must be defined (secret).
- The Resend API key must be obtained from Resend > API Keys, and the sending domain must be verified under Domains: https://resend.com/api-keys and https://resend.com/domains
- The Postmark server token must be obtained from Postmark > Servers > server > API Tokens: https://account.postmarkapp.com/servers
- The SendGrid key must be obtained from SendGrid > Settings > API Keys: https://app.sendgrid.com/settings/api_keys
- The Mailgun key must be obtained from Mailgun > API Security: https://app.mailgun.com/settings/api_security
- For Amazon SES, the IAM user and access key must be created from the AWS IAM console, and the sender identity from the SES console: https://console.aws.amazon.com/iam/ and https://console.aws.amazon.com/ses/
- The Brevo key must be obtained from Brevo > SMTP & API > API Keys: https://app.brevo.com/settings/keys/api

## SMS, Notifications and Communication
- If Netgsm is used, NETGSM_USERCODE, NETGSM_PASSWORD (secret) and NETGSM_HEADER (sender header) must be defined.
- If İleti Merkezi is used, ILETIMERKEZI_API_KEY, ILETIMERKEZI_API_HASH (secret) and the sender header must be defined.
- If Twilio is used, TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN (secret) and TWILIO_FROM or TWILIO_VERIFY_SERVICE_SID must be defined.
- If there is an İYS (Turkish commercial message consent registry) integration, IYS_USERNAME, IYS_PASSWORD (secret), IYS_BRAND_CODE and IYS_IYS_CODE must be defined.
- For web push notifications, VAPID_PUBLIC_KEY (public) and VAPID_PRIVATE_KEY (secret) must be defined.
- If Firebase Cloud Messaging is used, a service account key for FCM must be defined (secret).
- For Slack notifications, SLACK_WEBHOOK_URL (secret) can be defined. (Optional)
- For Telegram notifications, TELEGRAM_BOT_TOKEN (secret) and TELEGRAM_CHAT_ID can be defined. (Optional)
- Netgsm API details must be obtained from the subscription / API user settings in the Netgsm panel: https://www.netgsm.com.tr (docs: https://www.netgsm.com.tr/dokuman/)
- The İleti Merkezi API key must be obtained from Settings > API in the İleti Merkezi panel: https://www.iletimerkezi.com
- Twilio values must be obtained from the Account Info section on the Twilio Console home page: https://console.twilio.com
- İYS details must be obtained via brand registration on İYS: https://iys.org.tr (developer docs: https://dev.iys.org.tr)
- VAPID keys must be generated with a command: npx web-push generate-vapid-keys
- The Slack webhook URL must be obtained from Slack API > app > Incoming Webhooks: https://api.slack.com/apps
- The Telegram bot token must be obtained via BotFather on Telegram: https://t.me/BotFather

## Cloudflare
- CLOUDFLARE_ACCOUNT_ID must be defined as the account ID.
- CLOUDFLARE_API_TOKEN must be defined as a token created with only the required permissions (e.g. DNS edit, cache purge) (secret); the Global API Key must not be used.
- CLOUDFLARE_ZONE_ID must be defined if domain operations will be performed.
- NEXT_PUBLIC_TURNSTILE_SITE_KEY (public) and TURNSTILE_SECRET_KEY (secret) must be defined for bot protection.
- If R2 storage is used, R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY (secret), R2_BUCKET and R2_PUBLIC_URL must be defined.
- If Cloudflare Images is used, CLOUDFLARE_IMAGES_TOKEN (secret) and the delivery URL must be defined.
- If Cloudflare Stream is used, CLOUDFLARE_STREAM_TOKEN (secret) must be defined.
- If Workers AI is used, CLOUDFLARE_ACCOUNT_ID and an authorized API token must be defined.
- For applications behind Cloudflare Access, CF_ACCESS_TEAM_DOMAIN and CF_ACCESS_AUD must be defined.
- The Cloudflare API token must be created from My Profile > API Tokens with only the required permissions: https://dash.cloudflare.com/profile/api-tokens
- The Account ID and Zone ID are found in the right column of the domain's Overview page in the Cloudflare panel: https://dash.cloudflare.com
- The Turnstile site and secret keys must be obtained from the Turnstile section in the Cloudflare panel: https://dash.cloudflare.com/?to=/:account/turnstile
- R2 access keys must be obtained from R2 > Manage R2 API Tokens: https://dash.cloudflare.com/?to=/:account/r2
- Cloudflare docs: https://developers.cloudflare.com/fundamentals/api/get-started/create-token/

## File Storage and Media
- If Amazon S3 is used, S3_REGION, S3_BUCKET, S3_ACCESS_KEY_ID, S3_SECRET_ACCESS_KEY (secret) and, if needed, S3_ENDPOINT and S3_PUBLIC_URL must be defined.
- If Supabase Storage is used, the Supabase variables and bucket name must be defined.
- If Vercel Blob is used, BLOB_READ_WRITE_TOKEN (secret) must be defined.
- If Cloudinary is used, CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY and CLOUDINARY_API_SECRET (secret) must be defined.
- If UploadThing is used, UPLOADTHING_TOKEN (secret) must be defined.
- If Bunny CDN / Storage is used, BUNNY_STORAGE_ZONE, BUNNY_API_KEY (secret) and BUNNY_CDN_URL must be defined.
- UPLOAD_MAX_MB and allowed file types can be defined for upload limits. (Optional)
- Amazon S3 access keys must be created in the AWS IAM console for a user authorized only for the relevant bucket: https://console.aws.amazon.com/iam/
- The Vercel Blob token must be obtained from Vercel > Storage > Blob store: https://vercel.com/dashboard/stores
- Cloudinary keys must be obtained from Cloudinary > Settings > API Keys: https://console.cloudinary.com
- The UploadThing token must be obtained from the UploadThing panel: https://uploadthing.com/dashboard
- The Bunny API key must be obtained from Account > API in the Bunny panel: https://dash.bunny.net

## AI
- If Anthropic (Claude) is used, ANTHROPIC_API_KEY (secret) must be defined.
- If OpenAI is used, OPENAI_API_KEY (secret) and, if needed, OPENAI_ORG_ID and OPENAI_PROJECT_ID must be defined.
- If Google Gemini is used, GEMINI_API_KEY or GOOGLE_GENERATIVE_AI_API_KEY (secret) must be defined.
- If Google Vertex AI is used, GOOGLE_CLOUD_PROJECT, GOOGLE_CLOUD_LOCATION and the service account credential (GOOGLE_APPLICATION_CREDENTIALS, secret) must be defined.
- If Azure OpenAI is used, AZURE_OPENAI_ENDPOINT, AZURE_OPENAI_API_KEY (secret), AZURE_OPENAI_DEPLOYMENT and AZURE_OPENAI_API_VERSION must be defined.
- If Amazon Bedrock is used, AWS_REGION, AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY (secret) must be defined.
- If Mistral is used, MISTRAL_API_KEY (secret) must be defined.
- If Groq is used, GROQ_API_KEY (secret) must be defined.
- If DeepSeek is used, DEEPSEEK_API_KEY (secret) must be defined.
- If xAI is used, XAI_API_KEY (secret) must be defined.
- If OpenRouter is used, OPENROUTER_API_KEY (secret) must be defined.
- If Together AI is used, TOGETHER_API_KEY (secret) must be defined.
- If Replicate is used, REPLICATE_API_TOKEN (secret) must be defined.
- If Hugging Face is used, HF_TOKEN (secret) must be defined.
- If ElevenLabs (voice) is used, ELEVENLABS_API_KEY (secret) must be defined.
- If a local model (Ollama) is used, OLLAMA_BASE_URL must be defined.
- If a vector database is used, the related keys must be defined (e.g. PINECONE_API_KEY and PINECONE_INDEX, QDRANT_URL and QDRANT_API_KEY, WEAVIATE_URL and WEAVIATE_API_KEY).
- Model names to be used must not be hardcoded, they must be defined with variables (e.g. AI_MODEL, AI_MODEL_FAST, EMBEDDING_MODEL).
- To limit AI cost, AI_MAX_TOKENS, AI_DAILY_BUDGET or a per-user request limit should be defined. (Recommended)
- If an AI observability tool is used, its keys must be defined (e.g. LANGFUSE_PUBLIC_KEY, LANGFUSE_SECRET_KEY, LANGFUSE_HOST; HELICONE_API_KEY). (Optional)
- AI keys must never be sent to the browser; requests must be made through the server.
- The Anthropic API key must be obtained from Anthropic Console > API Keys: https://console.anthropic.com/settings/keys
- The OpenAI API key must be obtained from OpenAI Platform > API keys: https://platform.openai.com/api-keys
- The Gemini API key must be obtained from Google AI Studio: https://aistudio.google.com/apikey
- For Vertex AI, the Vertex AI API must be enabled in the Google Cloud project and a service account must be created: https://console.cloud.google.com/iam-admin/serviceaccounts
- The Azure OpenAI key and endpoint must be obtained from the resource page in Azure AI Foundry or Azure Portal: https://ai.azure.com and https://portal.azure.com
- For Amazon Bedrock, model access must be enabled from the Bedrock console: https://console.aws.amazon.com/bedrock/
- Mistral key: https://console.mistral.ai/api-keys (docs: https://docs.mistral.ai)
- Groq key: https://console.groq.com/keys
- DeepSeek key: https://platform.deepseek.com/api_keys
- xAI key: https://console.x.ai
- OpenRouter key: https://openrouter.ai/settings/keys
- Together AI key: https://api.together.ai/settings/api-keys
- Replicate token: https://replicate.com/account/api-tokens
- Hugging Face token: https://huggingface.co/settings/tokens
- ElevenLabs key: https://elevenlabs.io/app/settings/api-keys
- Pinecone key: https://app.pinecone.io; Qdrant Cloud: https://cloud.qdrant.io
- Langfuse keys must be obtained from project settings: https://cloud.langfuse.com
- When creating AI keys, the platform's spending limit (usage limit) setting must also be configured.

## Google Services
- For most Google APIs, a Google Cloud project must be created first: https://console.cloud.google.com/projectcreate
- Each API to be used must be enabled separately from Google Cloud Console > APIs & Services > Library: https://console.cloud.google.com/apis/library
- For server-to-server access, a service account must be used, and the JSON key must be defined as GOOGLE_APPLICATION_CREDENTIALS or GOOGLE_SERVICE_ACCOUNT_KEY (secret): https://console.cloud.google.com/iam-admin/serviceaccounts
- For access on behalf of a user, an OAuth client must be used, and GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET (secret) with the refresh token GOOGLE_REFRESH_TOKEN (secret) must be defined: https://console.cloud.google.com/apis/credentials
- For simple APIs reading public data, a restricted API key GOOGLE_API_KEY (secret) can be defined; the key must be restricted by API type and IP / domain.
- If Google Search Console data will be read, the Search Console API must be enabled and the service account's email address must be added as a user to the property in Search Console: https://console.cloud.google.com/apis/library/searchconsole.googleapis.com and https://search.google.com/search-console
- For Search Console, the property address must be defined as GSC_SITE_URL (e.g. sc-domain:domain.com or https://domain.com/).
- If the Google Search Console site verification meta tag is used, GOOGLE_SITE_VERIFICATION (public) can be defined; the value must be obtained from Search Console > Settings > Ownership verification.
- If YouTube data will be read, YouTube Data API v3 must be enabled and YOUTUBE_API_KEY (secret) must be defined: https://console.cloud.google.com/apis/library/youtube.googleapis.com
- If uploading to a YouTube channel or acting on behalf of a channel, an API key is not enough; an OAuth client and refresh token must be used; the channel ID must be defined as YOUTUBE_CHANNEL_ID.
- The developer must be reminded that the YouTube Data API has a daily quota limit; the quota must be monitored from Google Cloud Console > APIs & Services > Quotas.
- If Google Analytics data will be read from the server, the Google Analytics Data API must be enabled, the service account must be added as a user to the GA property, and the property ID must be defined as GA4_PROPERTY_ID: https://console.cloud.google.com/apis/library/analyticsdata.googleapis.com
- If Google Merchant Center is used, the Merchant API (formerly Content API for Shopping) must be enabled and the account ID must be defined as GOOGLE_MERCHANT_ID: https://merchants.google.com
- If the Google Ads API is used, GOOGLE_ADS_DEVELOPER_TOKEN (secret), GOOGLE_ADS_CUSTOMER_ID and OAuth details must be defined; the developer token must be obtained from Google Ads > Tools > API Center: https://ads.google.com
- If the Google Business Profile API is used, an access application must be made and OAuth details must be defined: https://developers.google.com/my-business
- If Google Places / Geocoding is used, the related APIs must be enabled and a separate, IP-restricted key must be defined for the server side.
- If Google reCAPTCHA is used, NEXT_PUBLIC_RECAPTCHA_SITE_KEY (public) and RECAPTCHA_SECRET_KEY (secret) must be defined: https://www.google.com/recaptcha/admin
- If Google Sheets / Drive access is needed, the related API must be enabled and the file must be shared with the service account.
- APIs that require billing to be enabled in Google services must be stated to the developer, and a budget alert must be set up: https://console.cloud.google.com/billing

## Other Search Engine and Webmaster Tools
- If Bing Webmaster Tools is used, site verification and the API key BING_WEBMASTER_API_KEY (secret) must be obtained from Bing Webmaster > Settings > API Access: https://www.bing.com/webmasters
- If Yandex Webmaster is used, the verification code and OAuth token must be obtained from the Yandex panel: https://webmaster.yandex.com
- If IndexNow is used, INDEXNOW_KEY must be generated with a command and a key file must be published at the site root: https://www.indexnow.org

## Payment
- If Iyzico is used, IYZICO_API_KEY, IYZICO_SECRET_KEY (secret) and IYZICO_BASE_URL (sandbox / live) must be defined.
- If PayTR is used, PAYTR_MERCHANT_ID, PAYTR_MERCHANT_KEY and PAYTR_MERCHANT_SALT (secret) must be defined.
- If Param / Sipay / bank virtual POS is used, the provider's merchant number and secret keys must be defined (secret).
- If Stripe is used, NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY (public), STRIPE_SECRET_KEY (secret) and STRIPE_WEBHOOK_SECRET (secret) must be defined.
- If Lemon Squeezy is used, LEMONSQUEEZY_API_KEY, LEMONSQUEEZY_STORE_ID and LEMONSQUEEZY_WEBHOOK_SECRET (secret) must be defined.
- If Paddle is used, PADDLE_API_KEY (secret), NEXT_PUBLIC_PADDLE_CLIENT_TOKEN (public) and PADDLE_WEBHOOK_SECRET (secret) must be defined.
- Test and live payment keys must be kept in separate variables or separate environment files; the live key must not be used locally.
- Every incoming payment notification must be verified with the webhook signing key.
- Iyzico live keys must be obtained from Iyzico Merchant Panel > Settings > Company Settings, and test keys from the sandbox panel: https://merchant.iyzipay.com and https://sandbox-merchant.iyzipay.com
- PayTR merchant number, key and salt values must be obtained from PayTR Merchant Panel > Support & Setup / Information: https://www.paytr.com (docs: https://dev.paytr.com)
- Stripe keys must be obtained from Developers > API keys, and the webhook secret from Developers > Webhooks: https://dashboard.stripe.com/apikeys and https://dashboard.stripe.com/webhooks
- The Lemon Squeezy key must be obtained from Settings > API: https://app.lemonsqueezy.com/settings/api
- Paddle keys must be obtained from Developer tools > Authentication: https://vendors.paddle.com/authentication-v2

## E-Invoice and Accounting
- If an e-invoice / e-archive integrator is used, the integrator's username, password or API key (secret) and test / live address must be defined.
- If Paraşüt is used, PARASUT_CLIENT_ID, PARASUT_CLIENT_SECRET (secret), PARASUT_COMPANY_ID and user credentials must be defined.
- For ERP integrations such as Logo, Mikro and Netsis, the connection address and service user must be defined (secret).
- Paraşüt API access must be requested from the Paraşüt support team; client credentials are given after approval: https://www.parasut.com (docs: https://apidocs.parasut.com)
- E-invoice integrator details must be obtained from the integrator's customer panel or customer representative.

## Shipping and Logistics
- If shipping companies are used, each company's customer code, username and API key must be defined with separate variables (e.g. YURTICI_USERNAME, YURTICI_PASSWORD; ARAS_USERNAME, ARAS_PASSWORD; MNG_CLIENT_ID, MNG_CLIENT_SECRET) (secret).
- If a shipping integration platform is used, the platform's API key must be defined (secret).
- Shipping companies' API details must be obtained from the company's customer representative or corporate panel after a corporate customer agreement; whom to get the details from must be written for the developer.

## Marketplaces and E-Commerce Platforms
- For Trendyol integration, TRENDYOL_SUPPLIER_ID, TRENDYOL_API_KEY and TRENDYOL_API_SECRET (secret) must be defined.
- For Hepsiburada integration, HEPSIBURADA_MERCHANT_ID, username and password / key (secret) must be defined.
- For N11 integration, N11_API_KEY and N11_API_SECRET (secret) must be defined.
- For Amazon SP-API, the LWA client ID, client secret and refresh token (secret) must be defined.
- For Shopify, SHOPIFY_STORE_DOMAIN and SHOPIFY_ADMIN_ACCESS_TOKEN (secret) must be defined.
- For WooCommerce, WOO_URL, WOO_CONSUMER_KEY and WOO_CONSUMER_SECRET (secret) must be defined.
- For platforms such as ikas, Ticimax, T-Soft and IdeaSoft, the store address and API keys (secret) must be defined.
- Company-specific integration keys must not be stored in the .env file but encrypted in the database.
- Trendyol API details must be obtained from Trendyol Seller Panel > My Account Information > Integration Information: https://partner.trendyol.com
- Hepsiburada integration details must be obtained via an integration request through the Hepsiburada Seller Panel: https://merchant.hepsiburada.com
- N11 API keys must be obtained from N11 Store Panel > My Account > API Accounts: https://so.n11.com
- Amazon SP-API details must be obtained from Seller Central > Apps and Services > Develop Apps: https://sellercentral.amazon.com/sellingpartner/developerconsole
- The Shopify Admin API token must be obtained from Shopify Admin > Settings > Apps and sales channels > Develop apps: https://admin.shopify.com
- WooCommerce keys must be obtained from WooCommerce > Settings > Advanced > REST API in the WordPress admin panel.
- ikas, Ticimax, T-Soft and IdeaSoft API details must be obtained from the integration / API section in the store's admin panel or from the platform company's support team.

## Search and Data
- If Algolia is used, NEXT_PUBLIC_ALGOLIA_APP_ID and NEXT_PUBLIC_ALGOLIA_SEARCH_KEY (public, search-only) and ALGOLIA_ADMIN_KEY (secret) must be defined.
- If Meilisearch is used, MEILISEARCH_HOST and MEILISEARCH_API_KEY (secret) must be defined.
- If Typesense is used, TYPESENSE_HOST and TYPESENSE_API_KEY (secret) must be defined.
- If Elasticsearch / OpenSearch is used, the connection address and credentials (secret) must be defined.
- Algolia keys must be obtained from Settings > API Keys in the Algolia panel: https://dashboard.algolia.com/account/api-keys
- Meilisearch Cloud keys must be obtained from project settings: https://cloud.meilisearch.com
- Typesense Cloud keys must be obtained from the cluster page: https://cloud.typesense.org

## Maps and Location
- If Google Maps is used, NEXT_PUBLIC_GOOGLE_MAPS_API_KEY (public, restricted to domain) must be defined.
- If Mapbox is used, NEXT_PUBLIC_MAPBOX_TOKEN (public, restricted) must be defined.
- Browser-public map keys must be restricted by domain and API type in the provider panel.
- The Google Maps key must be obtained from Google Cloud Console > Google Maps Platform > Keys & Credentials and restricted to the domain: https://console.cloud.google.com/google/maps-apis/credentials
- The Mapbox token must be obtained from Mapbox Account > Access tokens: https://account.mapbox.com/access-tokens/

## Monitoring, Errors and Analytics
- If Sentry is used, SENTRY_DSN, NEXT_PUBLIC_SENTRY_DSN, SENTRY_ORG, SENTRY_PROJECT and SENTRY_AUTH_TOKEN (secret) for uploading source maps must be defined.
- If Better Stack / Logtail is used, the source token (secret) must be defined.
- If Axiom is used, AXIOM_TOKEN (secret) and AXIOM_DATASET must be defined.
- If Datadog is used, DD_API_KEY (secret), DD_SITE and DD_SERVICE must be defined.
- If Google Analytics is used, NEXT_PUBLIC_GA_MEASUREMENT_ID (public) must be defined and must not be loaded without cookie consent.
- If Google Tag Manager is used, NEXT_PUBLIC_GTM_ID (public) must be defined.
- If PostHog is used, NEXT_PUBLIC_POSTHOG_KEY and NEXT_PUBLIC_POSTHOG_HOST (public; the EU server can be preferred) must be defined.
- If Plausible or Umami is used, the site ID and script address must be defined (public).
- If Microsoft Clarity or Hotjar is used, the site ID must be defined, and since it is a session recording tool, it must be stated in the cookie consent and privacy notice.
- If Meta Pixel is used, NEXT_PUBLIC_META_PIXEL_ID (public) and META_CAPI_TOKEN (secret) for the server-side Conversions API must be defined.
- If uptime monitoring is used, the health check address and, if needed, a secret check token must be defined.
- The Sentry DSN must be obtained from Project Settings > Client Keys (DSN), and the auth token from Settings > Auth Tokens: https://sentry.io/settings/account/api/auth-tokens/
- The Better Stack source token must be obtained from Telemetry > Sources: https://telemetry.betterstack.com
- The Axiom token must be obtained from Settings > API tokens: https://app.axiom.co
- The Datadog key must be obtained from Organization Settings > API Keys: https://app.datadoghq.com/organization-settings/api-keys
- The Google Analytics measurement ID must be obtained from Analytics > Admin > Data streams: https://analytics.google.com
- The Google Tag Manager container ID must be obtained from the GTM panel: https://tagmanager.google.com
- The PostHog project key must be obtained from Project Settings: https://eu.posthog.com or https://us.posthog.com
- Plausible site settings: https://plausible.io/sites
- Microsoft Clarity project ID: https://clarity.microsoft.com
- The Meta Pixel ID and Conversions API token must be obtained from Meta Events Manager: https://business.facebook.com/events_manager2

## Queues, Scheduled Jobs and Background Tasks
- CRON_SECRET must be defined to protect scheduled task endpoints (secret).
- If Inngest is used, INNGEST_EVENT_KEY and INNGEST_SIGNING_KEY (secret) must be defined.
- If Trigger.dev is used, TRIGGER_SECRET_KEY (secret) must be defined.
- If QStash is used, QSTASH_TOKEN, QSTASH_CURRENT_SIGNING_KEY and QSTASH_NEXT_SIGNING_KEY (secret) must be defined.
- If BullMQ is used, REDIS_URL must be defined (secret).
- CRON_SECRET must be generated with a command: openssl rand -hex 32.
- Inngest keys must be obtained from Manage > Event Keys / Signing Key in the Inngest panel: https://app.inngest.com
- The Trigger.dev key must be obtained from the API Keys section on the project page: https://cloud.trigger.dev
- The QStash token and signing keys must be obtained from the QStash page in the Upstash panel: https://console.upstash.com/qstash

## Webhooks and External API
- If webhooks are sent out, WEBHOOK_SIGNING_SECRET must be defined for signing (secret).
- If webhooks are received from outside, each provider's signing key must be defined with a separate variable (secret).
- If the application has its own public API, API keys must be stored hashed in the database, and the .env file must contain only the signing / encryption master key.
- INTERNAL_API_TOKEN must be defined for requests between internal services (secret).
- Own webhook signing keys and internal service tokens must be generated with a command: openssl rand -hex 32.

## Hosting, Deployment and CI
- If Vercel is used, VERCEL_URL and VERCEL_ENV are provided by the platform; APP_URL must still be defined for the production address.
- If deploying to the server via SSH, DEPLOY_HOST, DEPLOY_USER and the SSH key must be kept in CI secret variables (secret).
- If the Hetzner API is used, HCLOUD_TOKEN must be defined (secret).
- If a Docker image registry is used, REGISTRY_URL, REGISTRY_USER and REGISTRY_TOKEN must be defined (secret).
- If the GitHub API is used, GITHUB_TOKEN must be defined with least privilege (secret).
- Variables in the CI environment must be kept in the hosting or CI platform's secret variable management and must not be written to the repository.
- The Hetzner API token must be obtained from Hetzner Cloud Console > project > Security > API Tokens: https://console.hetzner.cloud
- The Vercel token must be obtained from Account Settings > Tokens: https://vercel.com/account/tokens
- The GitHub token must be created fine-grained and authorized only for the required repositories: https://github.com/settings/personal-access-tokens
- GitHub Actions secret variables must be added under repository > Settings > Secrets and variables > Actions.
- The Docker Hub access token must be obtained from Account settings > Personal access tokens: https://app.docker.com/settings/personal-access-tokens (docs: https://docs.docker.com/security/for-developers/access-tokens/)

## Feature Flags and Maintenance Mode
- MAINTENANCE_MODE can be defined to enable the maintenance page. (Optional)
- Feature flags can be defined with the FEATURE_ prefix (e.g. FEATURE_SIGNUP_ENABLED). (Optional)
- If a feature flag platform is used, its keys must be defined (e.g. LaunchDarkly, Flagsmith, PostHog feature flags). (Optional)
- LaunchDarkly keys must be obtained from project settings: https://app.launchdarkly.com
- Flagsmith keys must be obtained from environment settings: https://app.flagsmith.com
