# Ortam Değişkenleri Kataloğu
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Kullanım Kuralları
- Bu katalog projede kullanılan hizmetlere göre .env.example dosyası hazırlanırken kaynak olarak kullanılmalı, yalnızca projede gerçekten kullanılan hizmetlerin değişkenleri eklenmelidir.
- Değişken adları burada yazıldığı şekilde kullanılmalı, hizmetin kendi resmî belgesinde farklı bir ad zorunluysa o ad tercih edilmelidir.
- Gizli olarak işaretlenen değişkenler hiçbir zaman tarayıcıya açık önekle (NEXT_PUBLIC_, VITE_, PUBLIC_) tanımlanmamalıdır.
- Açık olarak işaretlenen değişkenler tarayıcıya gidebilir, ancak yine de .env.example dosyasında açıklanmalıdır.
- Next.js dışındaki çerçevelerde tarayıcı öneki çerçeveye göre değiştirilmelidir (Vite: VITE_, SvelteKit: PUBLIC_, Nuxt: NUXT_PUBLIC_, Expo: EXPO_PUBLIC_).
- Her hizmet için test ve canlı ortamda ayrı anahtarlar kullanılmalıdır.
- Yeni bir hizmet kullanıldığında bu kataloğa ilgili bölüm eklenmelidir.
- Katalogdaki her hizmet için değerin alınacağı panel yolu ve bağlantısı .env.example dosyasına açıklama olarak kopyalanmalıdır.
- Bağlantılar platform arayüzleri değiştikçe eskiyebilir; .env.example hazırlanırken bağlantının hâlâ çalıştığı kontrol edilmeli, değişmişse bu katalog güncellenmelidir.

## Uygulama
- NODE_ENV tanımlanmalıdır (development, test, production).
- APP_URL veya PANEL_URL canlı adres olarak tanımlanmalıdır; e-posta bağlantıları, CSRF izin listesi ve OAuth yönlendirmeleri bu değere bağlıdır.
- NEXT_PUBLIC_APP_URL tarayıcının bilmesi gereken genel adres için tanımlanabilir (açık). (Opsiyonel)
- HOST ve PORT uygulamanın dinleyeceği adres için tanımlanmalıdır (ör. 127.0.0.1 ve 3100).
- APP_NAME e-posta ve sayfa başlıklarında kullanılacak uygulama adı için tanımlanabilir. (Opsiyonel)
- APP_ENV canlı, hazırlık (staging) ve yerel ortamı ayırt etmek için tanımlanabilir. (Opsiyonel)
- LOG_LEVEL kayıt ayrıntı düzeyi için tanımlanabilir (debug, info, warn, error). (Opsiyonel)
- TZ sunucu saat dilimi için tanımlanabilir (ör. Europe/Istanbul). (Opsiyonel)
- SESSION_SECRET, ENCRYPTION_KEY gibi uygulamanın kendi gizli değerleri bir platformdan alınmaz, komutla üretilmelidir: openssl rand -base64 32.

## Veritabanı
- DATABASE_URL ana veritabanı bağlantısı için tanımlanmalıdır (gizli).
- DATABASE_URL_TEST testler için ayrı veritabanı olarak tanımlanmalıdır (gizli).
- DIRECT_URL bağlantı havuzlayıcısı (PgBouncer, Supavisor) kullanılıyorsa migration için doğrudan bağlantı olarak tanımlanmalıdır (gizli).
- DATABASE_POOL_MAX bağlantı havuzu üst sınırı için tanımlanabilir. (Opsiyonel)
- DATABASE_SSL veya bağlantı adresinde sslmode=require canlı veritabanında kullanılmalıdır.
- REDIS_URL önbellek, kuyruk veya istek sınırı için Redis kullanılıyorsa tanımlanmalıdır (gizli).
- UPSTASH_REDIS_REST_URL ve UPSTASH_REDIS_REST_TOKEN Upstash kullanılıyorsa tanımlanmalıdır (gizli).
- MONGODB_URI MongoDB kullanılıyorsa tanımlanmalıdır (gizli).
- Yerel veritabanı bağlantısı proje içindeki docker-compose dosyasındaki kullanıcı, parola ve porttan oluşturulmalıdır.
- Upstash Redis değerleri Upstash panelinde veritabanı sayfasındaki REST API bölümünden alınmalıdır: https://console.upstash.com
- MongoDB Atlas bağlantısı Atlas panelinde Database > Connect bölümünden alınmalıdır: https://cloud.mongodb.com

## Supabase
- NEXT_PUBLIC_SUPABASE_URL proje adresi olarak tanımlanmalıdır (açık).
- NEXT_PUBLIC_SUPABASE_ANON_KEY veya yeni adıyla publishable key tarayıcıda kullanılacak anahtar olarak tanımlanmalıdır (açık; güvenlik Row Level Security kurallarına bağlıdır).
- SUPABASE_SERVICE_ROLE_KEY veya yeni adıyla secret key yalnızca sunucuda kullanılmalıdır (gizli; tüm RLS kurallarını aşar, tarayıcıya asla gitmemelidir).
- SUPABASE_JWT_SECRET sunucuda JWT doğrulaması gerekiyorsa tanımlanmalıdır (gizli).
- SUPABASE_DB_URL doğrudan Postgres bağlantısı gerekiyorsa tanımlanmalıdır (gizli).
- SUPABASE_PROJECT_REF CLI ve tip üretimi için tanımlanabilir. (Opsiyonel)
- SUPABASE_ACCESS_TOKEN yalnızca CI / CLI işlemleri için tanımlanmalıdır (gizli).
- Service role anahtarı kullanılan her sunucu kodunda kiracı / kullanıcı süzgeci elle uygulanmalıdır.
- Supabase URL ve anahtarları Supabase panelinde Project Settings > API Keys bölümünden alınmalıdır: https://supabase.com/dashboard/project/_/settings/api-keys
- Veritabanı bağlantı adresi Supabase panelinde üstteki Connect butonundan veya Project Settings > Database bölümünden alınmalıdır: https://supabase.com/dashboard/project/_/settings/database
- JWT ayarları Project Settings > JWT Keys bölümünden alınmalıdır: https://supabase.com/dashboard/project/_/settings/jwt
- Supabase CLI erişim tokenı Account > Access Tokens bölümünden alınmalıdır: https://supabase.com/dashboard/account/tokens
- Supabase belgeleri: https://supabase.com/docs/guides/api/api-keys

## Diğer Veritabanı ve Arka Uç Hizmetleri
- Firebase kullanılıyorsa NEXT_PUBLIC_FIREBASE_API_KEY, NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN, NEXT_PUBLIC_FIREBASE_PROJECT_ID, NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET, NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID, NEXT_PUBLIC_FIREBASE_APP_ID (açık) ve sunucu için FIREBASE_SERVICE_ACCOUNT_KEY (gizli) tanımlanmalıdır.
- Neon kullanılıyorsa DATABASE_URL (havuzlu) ve DATABASE_URL_UNPOOLED (gizli) tanımlanmalıdır.
- PlanetScale veya MySQL kullanılıyorsa DATABASE_URL (gizli) tanımlanmalıdır.
- Turso / libSQL kullanılıyorsa TURSO_DATABASE_URL ve TURSO_AUTH_TOKEN (gizli) tanımlanmalıdır.
- Convex kullanılıyorsa CONVEX_DEPLOYMENT ve NEXT_PUBLIC_CONVEX_URL tanımlanmalıdır.
- Prisma kullanılıyorsa DATABASE_URL ve gerekiyorsa DIRECT_URL tanımlanmalıdır.
- Firebase yapılandırması Firebase konsolunda Project settings > General > Your apps bölümünden, servis hesabı anahtarı Project settings > Service accounts bölümünden alınmalıdır: https://console.firebase.google.com
- Neon bağlantı adresi Neon panelinde proje sayfasındaki Connect butonundan alınmalıdır: https://console.neon.tech
- Turso tokenı Turso CLI ile üretilmelidir: turso db tokens create <veritabanı>; panel: https://app.turso.tech
- Convex değerleri Convex panelinden alınmalıdır: https://dashboard.convex.dev
- PlanetScale bağlantı bilgileri PlanetScale panelinde veritabanı > Connect bölümünden alınmalıdır: https://app.planetscale.com

## Oturum ve Kimlik Doğrulama
- SESSION_SECRET imzalı veya şifreli çerez kullanılıyorsa en az 32 bayt rastgele değerle tanımlanmalıdır (gizli).
- SESSION_COOKIE_NAME çerez adı için tanımlanabilir. (Opsiyonel)
- SESSION_MAX_AGE oturum süresi (saniye) için tanımlanabilir. (Opsiyonel)
- COOKIE_DOMAIN alt alan adları arasında oturum paylaşılacaksa tanımlanmalıdır.
- JWT_SECRET veya JWT_PRIVATE_KEY / JWT_PUBLIC_KEY JWT kullanılıyorsa tanımlanmalıdır (gizli / açık anahtar).
- ENCRYPTION_KEY veritabanında şifrelenerek saklanan veriler için ana anahtar olarak tanımlanmalıdır (gizli).
- AUTH_SECRET ve AUTH_URL (eski adıyla NEXTAUTH_SECRET ve NEXTAUTH_URL) Auth.js kullanılıyorsa tanımlanmalıdır (gizli / açık).
- NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY (açık) ve CLERK_SECRET_KEY (gizli) Clerk kullanılıyorsa tanımlanmalıdır.
- AUTH0_DOMAIN, AUTH0_CLIENT_ID, AUTH0_CLIENT_SECRET (gizli), AUTH0_SECRET (gizli) Auth0 kullanılıyorsa tanımlanmalıdır.
- BETTER_AUTH_SECRET (gizli) ve BETTER_AUTH_URL Better Auth kullanılıyorsa tanımlanmalıdır.
- TOTP_ISSUER iki adımlı doğrulamada doğrulayıcı uygulamada görünecek ad için tanımlanabilir. (Opsiyonel)
- Clerk anahtarları Clerk panelinde Configure > API Keys bölümünden alınmalıdır: https://dashboard.clerk.com (belge: https://clerk.com/docs)
- Auth0 değerleri Auth0 panelinde Applications > uygulama > Settings bölümünden alınmalıdır: https://manage.auth0.com (belge: https://auth0.com/docs)
- AUTH_SECRET ve BETTER_AUTH_SECRET komutla üretilmelidir: openssl rand -base64 32 (Auth.js için npx auth secret).

## Sosyal Giriş ve OAuth
- Google girişi için GOOGLE_CLIENT_ID ve GOOGLE_CLIENT_SECRET (gizli) tanımlanmalıdır.
- Apple girişi için APPLE_CLIENT_ID (Services ID), APPLE_TEAM_ID, APPLE_KEY_ID ve APPLE_PRIVATE_KEY (gizli) tanımlanmalıdır.
- Microsoft / Entra girişi için MICROSOFT_CLIENT_ID, MICROSOFT_CLIENT_SECRET (gizli) ve MICROSOFT_TENANT_ID tanımlanmalıdır.
- GitHub girişi için GITHUB_CLIENT_ID ve GITHUB_CLIENT_SECRET (gizli) tanımlanmalıdır.
- Facebook girişi için FACEBOOK_APP_ID ve FACEBOOK_APP_SECRET (gizli) tanımlanmalıdır.
- LinkedIn girişi için LINKEDIN_CLIENT_ID ve LINKEDIN_CLIENT_SECRET (gizli) tanımlanmalıdır.
- OAuth yönlendirme adresleri canlı adresten üretilmeli ve sağlayıcı panelinde birebir kayıtlı olmalıdır.
- Google OAuth istemcisi Google Cloud Console > APIs & Services > Credentials bölümünden oluşturulmalıdır: https://console.cloud.google.com/apis/credentials
- Google OAuth izin ekranı (consent screen) aynı projede yapılandırılmalıdır: https://console.cloud.google.com/apis/credentials/consent
- Apple Services ID Apple Developer > Certificates, Identifiers & Profiles > Identifiers bölümünden, anahtar Keys bölümünden alınmalıdır: https://developer.apple.com/account/resources/identifiers/list/serviceId
- Microsoft uygulama kaydı Microsoft Entra yönetim merkezinde App registrations bölümünden yapılmalıdır: https://entra.microsoft.com
- GitHub OAuth uygulaması GitHub > Settings > Developer settings > OAuth Apps bölümünden oluşturulmalıdır: https://github.com/settings/developers
- Facebook uygulaması Meta for Developers panelinden oluşturulmalıdır: https://developers.facebook.com/apps
- LinkedIn uygulaması LinkedIn Developers panelinden oluşturulmalıdır: https://www.linkedin.com/developers/apps

## E-posta
- MAIL_FROM gönderen adres ve görünen ad olarak tanımlanmalıdır (ör. "Marka <noreply@alanadi.com>").
- MAIL_REPLY_TO yanıt alınacak adres için tanımlanabilir. (Opsiyonel)
- MAIL_ADMIN ekip bildirim adresleri için virgülle ayrılmış olarak tanımlanabilir. (Opsiyonel)
- Resend kullanılıyorsa RESEND_API_KEY (gizli) tanımlanmalıdır.
- Postmark kullanılıyorsa POSTMARK_SERVER_TOKEN (gizli) ve gerekiyorsa POSTMARK_MESSAGE_STREAM tanımlanmalıdır.
- SendGrid kullanılıyorsa SENDGRID_API_KEY (gizli) tanımlanmalıdır.
- Mailgun kullanılıyorsa MAILGUN_API_KEY (gizli), MAILGUN_DOMAIN ve AB bölgesi için MAILGUN_API_URL tanımlanmalıdır.
- Amazon SES kullanılıyorsa AWS_SES_REGION, AWS_ACCESS_KEY_ID ve AWS_SECRET_ACCESS_KEY (gizli) tanımlanmalıdır.
- Brevo kullanılıyorsa BREVO_API_KEY (gizli) tanımlanmalıdır.
- SMTP kullanılıyorsa SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD (gizli) ve SMTP_SECURE tanımlanmalıdır.
- Gelen e-posta veya webhook kullanılıyorsa sağlayıcının webhook imza anahtarı (ör. RESEND_WEBHOOK_SECRET) tanımlanmalıdır (gizli).
- Resend API anahtarı Resend > API Keys bölümünden alınmalı, gönderen alan adı Domains bölümünde doğrulanmalıdır: https://resend.com/api-keys ve https://resend.com/domains
- Postmark sunucu tokenı Postmark > Servers > sunucu > API Tokens bölümünden alınmalıdır: https://account.postmarkapp.com/servers
- SendGrid anahtarı SendGrid > Settings > API Keys bölümünden alınmalıdır: https://app.sendgrid.com/settings/api_keys
- Mailgun anahtarı Mailgun > API Security bölümünden alınmalıdır: https://app.mailgun.com/settings/api_security
- Amazon SES için IAM kullanıcısı ve erişim anahtarı AWS IAM konsolundan, gönderen kimliği SES konsolundan oluşturulmalıdır: https://console.aws.amazon.com/iam/ ve https://console.aws.amazon.com/ses/
- Brevo anahtarı Brevo > SMTP & API > API Keys bölümünden alınmalıdır: https://app.brevo.com/settings/keys/api

## SMS, Bildirim ve İletişim
- Netgsm kullanılıyorsa NETGSM_USERCODE, NETGSM_PASSWORD (gizli) ve NETGSM_HEADER (gönderici başlığı) tanımlanmalıdır.
- İleti Merkezi kullanılıyorsa ILETIMERKEZI_API_KEY, ILETIMERKEZI_API_HASH (gizli) ve gönderici başlığı tanımlanmalıdır.
- Twilio kullanılıyorsa TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN (gizli) ve TWILIO_FROM veya TWILIO_VERIFY_SERVICE_SID tanımlanmalıdır.
- İYS entegrasyonu varsa IYS_USERNAME, IYS_PASSWORD (gizli), IYS_BRAND_CODE ve IYS_IYS_CODE tanımlanmalıdır.
- Web push bildirimleri için VAPID_PUBLIC_KEY (açık) ve VAPID_PRIVATE_KEY (gizli) tanımlanmalıdır.
- Firebase Cloud Messaging kullanılıyorsa FCM için servis hesabı anahtarı tanımlanmalıdır (gizli).
- Slack bildirimleri için SLACK_WEBHOOK_URL (gizli) tanımlanabilir. (Opsiyonel)
- Telegram bildirimleri için TELEGRAM_BOT_TOKEN (gizli) ve TELEGRAM_CHAT_ID tanımlanabilir. (Opsiyonel)
- Netgsm API bilgileri Netgsm panelinde abonelik / API kullanıcısı ayarlarından alınmalıdır: https://www.netgsm.com.tr (belge: https://www.netgsm.com.tr/dokuman/)
- İleti Merkezi API anahtarı İleti Merkezi panelinde Ayarlar > API bölümünden alınmalıdır: https://www.iletimerkezi.com
- Twilio değerleri Twilio Console ana sayfasındaki Account Info bölümünden alınmalıdır: https://console.twilio.com
- İYS bilgileri İYS üzerinden marka kaydı ile alınmalıdır: https://iys.org.tr (geliştirici belgeleri: https://dev.iys.org.tr)
- VAPID anahtarları komutla üretilmelidir: npx web-push generate-vapid-keys
- Slack webhook adresi Slack API > uygulama > Incoming Webhooks bölümünden alınmalıdır: https://api.slack.com/apps
- Telegram bot tokenı Telegram'da BotFather ile alınmalıdır: https://t.me/BotFather

## Cloudflare
- CLOUDFLARE_ACCOUNT_ID hesap kimliği olarak tanımlanmalıdır.
- CLOUDFLARE_API_TOKEN yalnızca gereken izinlerle (ör. DNS düzenleme, cache temizleme) oluşturulmuş token olarak tanımlanmalıdır (gizli); genel API anahtarı (Global API Key) kullanılmamalıdır.
- CLOUDFLARE_ZONE_ID alan adı işlemleri yapılacaksa tanımlanmalıdır.
- NEXT_PUBLIC_TURNSTILE_SITE_KEY (açık) ve TURNSTILE_SECRET_KEY (gizli) bot koruması için tanımlanmalıdır.
- R2 depolama kullanılıyorsa R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY (gizli), R2_BUCKET ve R2_PUBLIC_URL tanımlanmalıdır.
- Cloudflare Images kullanılıyorsa CLOUDFLARE_IMAGES_TOKEN (gizli) ve teslim adresi tanımlanmalıdır.
- Cloudflare Stream kullanılıyorsa CLOUDFLARE_STREAM_TOKEN (gizli) tanımlanmalıdır.
- Workers AI kullanılıyorsa CLOUDFLARE_ACCOUNT_ID ve yetkili API token tanımlanmalıdır.
- Cloudflare Access arkasındaki uygulamalar için CF_ACCESS_TEAM_DOMAIN ve CF_ACCESS_AUD tanımlanmalıdır.
- Cloudflare API tokenı My Profile > API Tokens bölümünden, yalnızca gereken izinlerle oluşturulmalıdır: https://dash.cloudflare.com/profile/api-tokens
- Hesap kimliği (Account ID) ve alan adı kimliği (Zone ID) Cloudflare panelinde alan adının Overview sayfasında sağ sütunda bulunur: https://dash.cloudflare.com
- Turnstile site ve gizli anahtarı Cloudflare panelinde Turnstile bölümünden alınmalıdır: https://dash.cloudflare.com/?to=/:account/turnstile
- R2 erişim anahtarları R2 > Manage R2 API Tokens bölümünden alınmalıdır: https://dash.cloudflare.com/?to=/:account/r2
- Cloudflare belgeleri: https://developers.cloudflare.com/fundamentals/api/get-started/create-token/

## Dosya Depolama ve Medya
- Amazon S3 kullanılıyorsa S3_REGION, S3_BUCKET, S3_ACCESS_KEY_ID, S3_SECRET_ACCESS_KEY (gizli) ve gerekiyorsa S3_ENDPOINT ve S3_PUBLIC_URL tanımlanmalıdır.
- Supabase Storage kullanılıyorsa Supabase değişkenleri ve bucket adı tanımlanmalıdır.
- Vercel Blob kullanılıyorsa BLOB_READ_WRITE_TOKEN (gizli) tanımlanmalıdır.
- Cloudinary kullanılıyorsa CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY ve CLOUDINARY_API_SECRET (gizli) tanımlanmalıdır.
- UploadThing kullanılıyorsa UPLOADTHING_TOKEN (gizli) tanımlanmalıdır.
- Bunny CDN / Storage kullanılıyorsa BUNNY_STORAGE_ZONE, BUNNY_API_KEY (gizli) ve BUNNY_CDN_URL tanımlanmalıdır.
- Yükleme sınırları için UPLOAD_MAX_MB ve izin verilen dosya türleri tanımlanabilir. (Opsiyonel)
- Amazon S3 erişim anahtarları AWS IAM konsolunda yalnızca ilgili bucket'a yetkili bir kullanıcı için oluşturulmalıdır: https://console.aws.amazon.com/iam/
- Vercel Blob tokenı Vercel > Storage > Blob mağazası bölümünden alınmalıdır: https://vercel.com/dashboard/stores
- Cloudinary anahtarları Cloudinary > Settings > API Keys bölümünden alınmalıdır: https://console.cloudinary.com
- UploadThing tokenı UploadThing panelinden alınmalıdır: https://uploadthing.com/dashboard
- Bunny API anahtarı Bunny panelinde Account > API bölümünden alınmalıdır: https://dash.bunny.net

## Yapay Zeka
- Anthropic (Claude) kullanılıyorsa ANTHROPIC_API_KEY (gizli) tanımlanmalıdır.
- OpenAI kullanılıyorsa OPENAI_API_KEY (gizli) ve gerekiyorsa OPENAI_ORG_ID ve OPENAI_PROJECT_ID tanımlanmalıdır.
- Google Gemini kullanılıyorsa GEMINI_API_KEY veya GOOGLE_GENERATIVE_AI_API_KEY (gizli) tanımlanmalıdır.
- Google Vertex AI kullanılıyorsa GOOGLE_CLOUD_PROJECT, GOOGLE_CLOUD_LOCATION ve servis hesabı kimlik bilgisi (GOOGLE_APPLICATION_CREDENTIALS, gizli) tanımlanmalıdır.
- Azure OpenAI kullanılıyorsa AZURE_OPENAI_ENDPOINT, AZURE_OPENAI_API_KEY (gizli), AZURE_OPENAI_DEPLOYMENT ve AZURE_OPENAI_API_VERSION tanımlanmalıdır.
- Amazon Bedrock kullanılıyorsa AWS_REGION, AWS_ACCESS_KEY_ID ve AWS_SECRET_ACCESS_KEY (gizli) tanımlanmalıdır.
- Mistral kullanılıyorsa MISTRAL_API_KEY (gizli) tanımlanmalıdır.
- Groq kullanılıyorsa GROQ_API_KEY (gizli) tanımlanmalıdır.
- DeepSeek kullanılıyorsa DEEPSEEK_API_KEY (gizli) tanımlanmalıdır.
- xAI kullanılıyorsa XAI_API_KEY (gizli) tanımlanmalıdır.
- OpenRouter kullanılıyorsa OPENROUTER_API_KEY (gizli) tanımlanmalıdır.
- Together AI kullanılıyorsa TOGETHER_API_KEY (gizli) tanımlanmalıdır.
- Replicate kullanılıyorsa REPLICATE_API_TOKEN (gizli) tanımlanmalıdır.
- Hugging Face kullanılıyorsa HF_TOKEN (gizli) tanımlanmalıdır.
- ElevenLabs (ses) kullanılıyorsa ELEVENLABS_API_KEY (gizli) tanımlanmalıdır.
- Yerel model (Ollama) kullanılıyorsa OLLAMA_BASE_URL tanımlanmalıdır.
- Vektör veritabanı kullanılıyorsa ilgili anahtarlar tanımlanmalıdır (ör. PINECONE_API_KEY ve PINECONE_INDEX, QDRANT_URL ve QDRANT_API_KEY, WEAVIATE_URL ve WEAVIATE_API_KEY).
- Kullanılacak model adları koda gömülmemeli, değişkenle tanımlanmalıdır (ör. AI_MODEL, AI_MODEL_FAST, EMBEDDING_MODEL).
- Yapay zeka maliyetini sınırlamak için AI_MAX_TOKENS, AI_DAILY_BUDGET veya kullanıcı başı istek sınırı tanımlanmalıdır. (Önerilen)
- Yapay zeka gözlemleme aracı kullanılıyorsa anahtarları tanımlanmalıdır (ör. LANGFUSE_PUBLIC_KEY, LANGFUSE_SECRET_KEY, LANGFUSE_HOST; HELICONE_API_KEY). (Opsiyonel)
- Yapay zeka anahtarları hiçbir zaman tarayıcıya gönderilmemeli, istekler sunucu üzerinden yapılmalıdır.
- Anthropic API anahtarı Anthropic Console > API Keys bölümünden alınmalıdır: https://console.anthropic.com/settings/keys
- OpenAI API anahtarı OpenAI Platform > API keys bölümünden alınmalıdır: https://platform.openai.com/api-keys
- Gemini API anahtarı Google AI Studio'dan alınmalıdır: https://aistudio.google.com/apikey
- Vertex AI için Google Cloud projesinde Vertex AI API etkinleştirilmeli ve servis hesabı oluşturulmalıdır: https://console.cloud.google.com/iam-admin/serviceaccounts
- Azure OpenAI anahtarı ve adresi Azure AI Foundry veya Azure Portal'daki kaynak sayfasından alınmalıdır: https://ai.azure.com ve https://portal.azure.com
- Amazon Bedrock için model erişimi Bedrock konsolundan açılmalıdır: https://console.aws.amazon.com/bedrock/
- Mistral anahtarı: https://console.mistral.ai/api-keys (belge: https://docs.mistral.ai)
- Groq anahtarı: https://console.groq.com/keys
- DeepSeek anahtarı: https://platform.deepseek.com/api_keys
- xAI anahtarı: https://console.x.ai
- OpenRouter anahtarı: https://openrouter.ai/settings/keys
- Together AI anahtarı: https://api.together.ai/settings/api-keys
- Replicate tokenı: https://replicate.com/account/api-tokens
- Hugging Face tokenı: https://huggingface.co/settings/tokens
- ElevenLabs anahtarı: https://elevenlabs.io/app/settings/api-keys
- Pinecone anahtarı: https://app.pinecone.io; Qdrant Cloud: https://cloud.qdrant.io
- Langfuse anahtarları proje ayarlarından alınmalıdır: https://cloud.langfuse.com
- Yapay zeka anahtarları oluşturulurken platformun harcama sınırı (usage limit) ayarı da yapılmalıdır.

## Google Hizmetleri
- Google API'lerinin çoğu için önce bir Google Cloud projesi oluşturulmalıdır: https://console.cloud.google.com/projectcreate
- Kullanılacak her API, Google Cloud Console > APIs & Services > Library bölümünden ayrı ayrı etkinleştirilmelidir: https://console.cloud.google.com/apis/library
- Sunucudan sunucuya erişimde servis hesabı (service account) kullanılmalı, JSON anahtarı GOOGLE_APPLICATION_CREDENTIALS veya GOOGLE_SERVICE_ACCOUNT_KEY (gizli) olarak tanımlanmalıdır: https://console.cloud.google.com/iam-admin/serviceaccounts
- Kullanıcı adına erişimde OAuth istemcisi kullanılmalı, GOOGLE_CLIENT_ID ve GOOGLE_CLIENT_SECRET (gizli) ile yenileme tokenı GOOGLE_REFRESH_TOKEN (gizli) tanımlanmalıdır: https://console.cloud.google.com/apis/credentials
- Basit, herkese açık veri okuyan API'ler için kısıtlanmış API anahtarı GOOGLE_API_KEY (gizli) tanımlanabilir; anahtar API türüne ve IP / alan adına kısıtlanmalıdır.
- Google Search Console verisi okunacaksa Search Console API etkinleştirilmeli ve servis hesabının e-posta adresi Search Console'da mülke kullanıcı olarak eklenmelidir: https://console.cloud.google.com/apis/library/searchconsole.googleapis.com ve https://search.google.com/search-console
- Search Console için mülk adresi GSC_SITE_URL olarak tanımlanmalıdır (ör. sc-domain:alanadi.com veya https://alanadi.com/).
- Google Search Console site doğrulama meta etiketi kullanılıyorsa GOOGLE_SITE_VERIFICATION (açık) tanımlanabilir; değer Search Console > Ayarlar > Sahiplik doğrulaması bölümünden alınmalıdır.
- YouTube verisi okunacaksa YouTube Data API v3 etkinleştirilmeli ve YOUTUBE_API_KEY (gizli) tanımlanmalıdır: https://console.cloud.google.com/apis/library/youtube.googleapis.com
- YouTube kanalına yükleme veya kanal adına işlem yapılacaksa API anahtarı yetmez, OAuth istemcisi ve yenileme tokenı kullanılmalıdır; kanal kimliği YOUTUBE_CHANNEL_ID olarak tanımlanmalıdır.
- YouTube Data API günlük kota sınırı olduğu geliştiriciye hatırlatılmalıdır; kota Google Cloud Console > APIs & Services > Quotas bölümünden izlenmelidir.
- Google Analytics verisi sunucudan okunacaksa Google Analytics Data API etkinleştirilmeli, servis hesabı GA mülküne kullanıcı olarak eklenmeli ve mülk kimliği GA4_PROPERTY_ID olarak tanımlanmalıdır: https://console.cloud.google.com/apis/library/analyticsdata.googleapis.com
- Google Merchant Center kullanılıyorsa Merchant API (eski Content API for Shopping) etkinleştirilmeli ve hesap kimliği GOOGLE_MERCHANT_ID olarak tanımlanmalıdır: https://merchants.google.com
- Google Ads API kullanılıyorsa GOOGLE_ADS_DEVELOPER_TOKEN (gizli), GOOGLE_ADS_CUSTOMER_ID ve OAuth bilgileri tanımlanmalıdır; geliştirici tokenı Google Ads > Araçlar > API Merkezi bölümünden alınmalıdır: https://ads.google.com
- Google Business Profile API kullanılıyorsa erişim başvurusu yapılmalı ve OAuth bilgileri tanımlanmalıdır: https://developers.google.com/my-business
- Google Places / Geocoding kullanılıyorsa ilgili API'ler etkinleştirilmeli ve sunucu tarafı için ayrı, IP kısıtlı anahtar tanımlanmalıdır.
- Google reCAPTCHA kullanılıyorsa NEXT_PUBLIC_RECAPTCHA_SITE_KEY (açık) ve RECAPTCHA_SECRET_KEY (gizli) tanımlanmalıdır: https://www.google.com/recaptcha/admin
- Google Sheets / Drive erişimi gerekiyorsa ilgili API etkinleştirilmeli ve dosya servis hesabıyla paylaşılmalıdır.
- Google hizmetlerinde faturalandırma (billing) açık olması gereken API'ler geliştiriciye belirtilmeli, bütçe uyarısı kurulmalıdır: https://console.cloud.google.com/billing

## Diğer Arama Motoru ve Web Yöneticisi Araçları
- Bing Webmaster Tools kullanılıyorsa site doğrulaması ve API anahtarı BING_WEBMASTER_API_KEY (gizli) Bing Webmaster > Ayarlar > API Erişimi bölümünden alınmalıdır: https://www.bing.com/webmasters
- Yandex Webmaster kullanılıyorsa doğrulama kodu ve OAuth tokenı Yandex panelinden alınmalıdır: https://webmaster.yandex.com
- IndexNow kullanılıyorsa INDEXNOW_KEY komutla üretilmeli ve sitenin kökünde anahtar dosyası yayınlanmalıdır: https://www.indexnow.org

## Ödeme
- Iyzico kullanılıyorsa IYZICO_API_KEY, IYZICO_SECRET_KEY (gizli) ve IYZICO_BASE_URL (sandbox / canlı) tanımlanmalıdır.
- PayTR kullanılıyorsa PAYTR_MERCHANT_ID, PAYTR_MERCHANT_KEY ve PAYTR_MERCHANT_SALT (gizli) tanımlanmalıdır.
- Param / Sipay / banka sanal POS kullanılıyorsa sağlayıcının üye işyeri numarası ve gizli anahtarları tanımlanmalıdır (gizli).
- Stripe kullanılıyorsa NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY (açık), STRIPE_SECRET_KEY (gizli) ve STRIPE_WEBHOOK_SECRET (gizli) tanımlanmalıdır.
- Lemon Squeezy kullanılıyorsa LEMONSQUEEZY_API_KEY, LEMONSQUEEZY_STORE_ID ve LEMONSQUEEZY_WEBHOOK_SECRET (gizli) tanımlanmalıdır.
- Paddle kullanılıyorsa PADDLE_API_KEY (gizli), NEXT_PUBLIC_PADDLE_CLIENT_TOKEN (açık) ve PADDLE_WEBHOOK_SECRET (gizli) tanımlanmalıdır.
- Test ve canlı ödeme anahtarları ayrı değişkenlerde veya ayrı ortam dosyalarında tutulmalı, canlı anahtar yerelde kullanılmamalıdır.
- Webhook imza anahtarı ile gelen her ödeme bildirimi doğrulanmalıdır.
- Iyzico canlı anahtarları Iyzico Merchant Panel > Ayarlar > Firma Ayarları bölümünden, test anahtarları sandbox panelinden alınmalıdır: https://merchant.iyzipay.com ve https://sandbox-merchant.iyzipay.com
- PayTR mağaza numarası, anahtar ve tuz (salt) değerleri PayTR Mağaza Paneli > Destek & Kurulum / Bilgi bölümünden alınmalıdır: https://www.paytr.com (belge: https://dev.paytr.com)
- Stripe anahtarları Developers > API keys bölümünden, webhook gizli anahtarı Developers > Webhooks bölümünden alınmalıdır: https://dashboard.stripe.com/apikeys ve https://dashboard.stripe.com/webhooks
- Lemon Squeezy anahtarı Settings > API bölümünden alınmalıdır: https://app.lemonsqueezy.com/settings/api
- Paddle anahtarları Developer tools > Authentication bölümünden alınmalıdır: https://vendors.paddle.com/authentication-v2

## E-Fatura ve Muhasebe
- E-fatura / e-arşiv entegratörü kullanılıyorsa entegratörün kullanıcı adı, parola veya API anahtarı (gizli) ve test / canlı adresi tanımlanmalıdır.
- Paraşüt kullanılıyorsa PARASUT_CLIENT_ID, PARASUT_CLIENT_SECRET (gizli), PARASUT_COMPANY_ID ve kullanıcı bilgileri tanımlanmalıdır.
- Logo, Mikro, Netsis gibi ERP entegrasyonlarında bağlantı adresi ve servis kullanıcısı tanımlanmalıdır (gizli).
- Paraşüt API erişimi Paraşüt destek ekibinden talep edilmeli, istemci bilgileri onay sonrası verilir: https://www.parasut.com (belge: https://apidocs.parasut.com)
- E-fatura entegratörü bilgileri entegratörün müşteri panelinden veya müşteri temsilcisinden alınmalıdır.

## Kargo ve Lojistik
- Kargo firmaları kullanılıyorsa her firmanın müşteri kodu, kullanıcı adı ve API anahtarı ayrı değişkenlerle tanımlanmalıdır (ör. YURTICI_USERNAME, YURTICI_PASSWORD; ARAS_USERNAME, ARAS_PASSWORD; MNG_CLIENT_ID, MNG_CLIENT_SECRET) (gizli).
- Kargo entegrasyon platformu kullanılıyorsa platformun API anahtarı tanımlanmalıdır (gizli).
- Kargo firmalarının API bilgileri kurumsal müşteri sözleşmesi sonrası firmanın müşteri temsilcisi veya kurumsal panelinden alınmalıdır; bilgiyi kimden alacağı geliştiriciye yazılmalıdır.

## Pazar Yerleri ve E-Ticaret Altyapıları
- Trendyol entegrasyonu için TRENDYOL_SUPPLIER_ID, TRENDYOL_API_KEY ve TRENDYOL_API_SECRET (gizli) tanımlanmalıdır.
- Hepsiburada entegrasyonu için HEPSIBURADA_MERCHANT_ID, kullanıcı adı ve parola / anahtar (gizli) tanımlanmalıdır.
- N11 entegrasyonu için N11_API_KEY ve N11_API_SECRET (gizli) tanımlanmalıdır.
- Amazon SP-API için LWA istemci kimliği, gizli anahtarı ve yenileme tokenı (gizli) tanımlanmalıdır.
- Shopify için SHOPIFY_STORE_DOMAIN ve SHOPIFY_ADMIN_ACCESS_TOKEN (gizli) tanımlanmalıdır.
- WooCommerce için WOO_URL, WOO_CONSUMER_KEY ve WOO_CONSUMER_SECRET (gizli) tanımlanmalıdır.
- ikas, Ticimax, T-Soft, IdeaSoft gibi altyapılar için mağaza adresi ve API anahtarları (gizli) tanımlanmalıdır.
- Firmaya özel entegrasyon anahtarları .env dosyasında değil, veritabanında şifrelenerek saklanmalıdır.
- Trendyol API bilgileri Trendyol Satıcı Paneli > Hesap Bilgilerim > Entegrasyon Bilgileri bölümünden alınmalıdır: https://partner.trendyol.com
- Hepsiburada entegrasyon bilgileri Hepsiburada Satıcı Paneli üzerinden entegrasyon talebiyle alınmalıdır: https://merchant.hepsiburada.com
- N11 API anahtarları N11 Mağaza Paneli > Hesabım > API Hesapları bölümünden alınmalıdır: https://so.n11.com
- Amazon SP-API bilgileri Seller Central > Apps and Services > Develop Apps bölümünden alınmalıdır: https://sellercentral.amazon.com/sellingpartner/developerconsole
- Shopify Admin API tokenı Shopify Admin > Settings > Apps and sales channels > Develop apps bölümünden alınmalıdır: https://admin.shopify.com
- WooCommerce anahtarları WordPress yönetim panelinde WooCommerce > Settings > Advanced > REST API bölümünden alınmalıdır.
- ikas, Ticimax, T-Soft, IdeaSoft API bilgileri ilgili mağazanın yönetim panelindeki entegrasyon / API bölümünden veya altyapı firmasının destek ekibinden alınmalıdır.

## Arama ve Veri
- Algolia kullanılıyorsa NEXT_PUBLIC_ALGOLIA_APP_ID ve NEXT_PUBLIC_ALGOLIA_SEARCH_KEY (açık, yalnız arama yetkili) ile ALGOLIA_ADMIN_KEY (gizli) tanımlanmalıdır.
- Meilisearch kullanılıyorsa MEILISEARCH_HOST ve MEILISEARCH_API_KEY (gizli) tanımlanmalıdır.
- Typesense kullanılıyorsa TYPESENSE_HOST ve TYPESENSE_API_KEY (gizli) tanımlanmalıdır.
- Elasticsearch / OpenSearch kullanılıyorsa bağlantı adresi ve kimlik bilgileri (gizli) tanımlanmalıdır.
- Algolia anahtarları Algolia panelinde Settings > API Keys bölümünden alınmalıdır: https://dashboard.algolia.com/account/api-keys
- Meilisearch Cloud anahtarları proje ayarlarından alınmalıdır: https://cloud.meilisearch.com
- Typesense Cloud anahtarları küme sayfasından alınmalıdır: https://cloud.typesense.org

## Harita ve Konum
- Google Maps kullanılıyorsa NEXT_PUBLIC_GOOGLE_MAPS_API_KEY (açık, alan adına kısıtlı) tanımlanmalıdır.
- Mapbox kullanılıyorsa NEXT_PUBLIC_MAPBOX_TOKEN (açık, kısıtlı) tanımlanmalıdır.
- Tarayıcıya açık harita anahtarları sağlayıcı panelinde alan adı ve API türüne göre kısıtlanmalıdır.
- Google Maps anahtarı Google Cloud Console > Google Maps Platform > Keys & Credentials bölümünden alınmalı ve alan adına kısıtlanmalıdır: https://console.cloud.google.com/google/maps-apis/credentials
- Mapbox tokenı Mapbox Account > Access tokens bölümünden alınmalıdır: https://account.mapbox.com/access-tokens/

## İzleme, Hata ve Analiz
- Sentry kullanılıyorsa SENTRY_DSN, NEXT_PUBLIC_SENTRY_DSN, SENTRY_ORG, SENTRY_PROJECT ve kaynak haritası yüklemek için SENTRY_AUTH_TOKEN (gizli) tanımlanmalıdır.
- Better Stack / Logtail kullanılıyorsa kaynak tokenı (gizli) tanımlanmalıdır.
- Axiom kullanılıyorsa AXIOM_TOKEN (gizli) ve AXIOM_DATASET tanımlanmalıdır.
- Datadog kullanılıyorsa DD_API_KEY (gizli), DD_SITE ve DD_SERVICE tanımlanmalıdır.
- Google Analytics kullanılıyorsa NEXT_PUBLIC_GA_MEASUREMENT_ID (açık) tanımlanmalı, çerez izni olmadan yüklenmemelidir.
- Google Tag Manager kullanılıyorsa NEXT_PUBLIC_GTM_ID (açık) tanımlanmalıdır.
- PostHog kullanılıyorsa NEXT_PUBLIC_POSTHOG_KEY ve NEXT_PUBLIC_POSTHOG_HOST (açık; AB sunucusu tercih edilebilir) tanımlanmalıdır.
- Plausible veya Umami kullanılıyorsa site kimliği ve betik adresi tanımlanmalıdır (açık).
- Microsoft Clarity veya Hotjar kullanılıyorsa site kimliği tanımlanmalı, oturum kaydı aracı olduğu için çerez izni ve aydınlatma metninde belirtilmelidir.
- Meta Pixel kullanılıyorsa NEXT_PUBLIC_META_PIXEL_ID (açık) ve sunucu tarafı dönüşüm API'si için META_CAPI_TOKEN (gizli) tanımlanmalıdır.
- Uptime izleme kullanılıyorsa sağlık kontrolü adresi ve gerekiyorsa gizli kontrol tokenı tanımlanmalıdır.
- Sentry DSN Project Settings > Client Keys (DSN) bölümünden, yetki tokenı Settings > Auth Tokens bölümünden alınmalıdır: https://sentry.io/settings/account/api/auth-tokens/
- Better Stack kaynak tokenı Telemetry > Sources bölümünden alınmalıdır: https://telemetry.betterstack.com
- Axiom tokenı Settings > API tokens bölümünden alınmalıdır: https://app.axiom.co
- Datadog anahtarı Organization Settings > API Keys bölümünden alınmalıdır: https://app.datadoghq.com/organization-settings/api-keys
- Google Analytics ölçüm kimliği Analytics > Yönetici > Veri akışları bölümünden alınmalıdır: https://analytics.google.com
- Google Tag Manager kapsayıcı kimliği GTM panelinden alınmalıdır: https://tagmanager.google.com
- PostHog proje anahtarı Project Settings bölümünden alınmalıdır: https://eu.posthog.com veya https://us.posthog.com
- Plausible site ayarları: https://plausible.io/sites
- Microsoft Clarity proje kimliği: https://clarity.microsoft.com
- Meta Pixel kimliği ve dönüşüm API tokenı Meta Events Manager bölümünden alınmalıdır: https://business.facebook.com/events_manager2

## Kuyruk, Zamanlanmış İşler ve Arka Plan Görevleri
- CRON_SECRET zamanlanmış görev uç noktalarını korumak için tanımlanmalıdır (gizli).
- Inngest kullanılıyorsa INNGEST_EVENT_KEY ve INNGEST_SIGNING_KEY (gizli) tanımlanmalıdır.
- Trigger.dev kullanılıyorsa TRIGGER_SECRET_KEY (gizli) tanımlanmalıdır.
- QStash kullanılıyorsa QSTASH_TOKEN, QSTASH_CURRENT_SIGNING_KEY ve QSTASH_NEXT_SIGNING_KEY (gizli) tanımlanmalıdır.
- BullMQ kullanılıyorsa REDIS_URL tanımlanmalıdır (gizli).
- CRON_SECRET komutla üretilmelidir: openssl rand -hex 32.
- Inngest anahtarları Inngest panelinde Manage > Event Keys / Signing Key bölümünden alınmalıdır: https://app.inngest.com
- Trigger.dev anahtarı proje sayfasındaki API Keys bölümünden alınmalıdır: https://cloud.trigger.dev
- QStash tokenı ve imza anahtarları Upstash panelinde QStash sayfasından alınmalıdır: https://console.upstash.com/qstash

## Webhook ve Harici API
- Dışarıya webhook gönderiliyorsa imzalama için WEBHOOK_SIGNING_SECRET tanımlanmalıdır (gizli).
- Dışarıdan webhook alınıyorsa her sağlayıcının imza anahtarı ayrı değişkenle tanımlanmalıdır (gizli).
- Uygulamanın kendi açık API'si varsa API anahtarları veritabanında özet olarak saklanmalı, .env dosyasında yalnızca imza / şifreleme ana anahtarı bulunmalıdır.
- İç servisler arası istekler için INTERNAL_API_TOKEN tanımlanmalıdır (gizli).
- Kendi webhook imza anahtarları ve iç servis tokenları komutla üretilmelidir: openssl rand -hex 32.

## Barındırma, Dağıtım ve CI
- Vercel kullanılıyorsa VERCEL_URL ve VERCEL_ENV platform tarafından sağlanır; canlı adres için yine APP_URL tanımlanmalıdır.
- Sunucuya SSH ile dağıtım yapılıyorsa DEPLOY_HOST, DEPLOY_USER ve SSH anahtarı CI gizli değişkenlerinde tutulmalıdır (gizli).
- Hetzner API kullanılıyorsa HCLOUD_TOKEN tanımlanmalıdır (gizli).
- Docker imaj deposu kullanılıyorsa REGISTRY_URL, REGISTRY_USER ve REGISTRY_TOKEN tanımlanmalıdır (gizli).
- GitHub API kullanılıyorsa GITHUB_TOKEN en az yetkiyle tanımlanmalıdır (gizli).
- CI ortamındaki değişkenler barındırma veya CI platformunun gizli değişken yönetiminde tutulmalı, depoya yazılmamalıdır.
- Hetzner API tokenı Hetzner Cloud Console > proje > Security > API Tokens bölümünden alınmalıdır: https://console.hetzner.cloud
- Vercel tokenı Account Settings > Tokens bölümünden alınmalıdır: https://vercel.com/account/tokens
- GitHub tokenı ince ayarlı (fine-grained) ve yalnızca gereken depolara yetkili oluşturulmalıdır: https://github.com/settings/personal-access-tokens
- GitHub Actions gizli değişkenleri depo > Settings > Secrets and variables > Actions bölümüne eklenmelidir.
- Docker Hub erişim tokenı Account settings > Personal access tokens bölümünden alınmalıdır: https://app.docker.com/settings/personal-access-tokens (belge: https://docs.docker.com/security/for-developers/access-tokens/)

## Özellik Bayrakları ve Bakım Modu
- MAINTENANCE_MODE bakım sayfasını açmak için tanımlanabilir. (Opsiyonel)
- FEATURE_ önekiyle özellik bayrakları tanımlanabilir (ör. FEATURE_SIGNUP_ENABLED). (Opsiyonel)
- Özellik bayrağı platformu kullanılıyorsa anahtarları tanımlanmalıdır (ör. LaunchDarkly, Flagsmith, PostHog feature flags). (Opsiyonel)
- LaunchDarkly anahtarları proje ayarlarından alınmalıdır: https://app.launchdarkly.com
- Flagsmith anahtarları ortam ayarlarından alınmalıdır: https://app.flagsmith.com
