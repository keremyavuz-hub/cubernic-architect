# Ortam Değişkenleri ve .env Dosyaları
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Dosyalar
- Projede .env.example dosyası oluşturulmalı ve git'e eklenmelidir; tüm değişkenlerin adı, açıklaması ve örnek / boş değeri bu dosyada bulunmalıdır.
- Gerçek değerler .env.local dosyasında tutulmalı ve bu dosya git'e eklenmemelidir.
- .gitignore dosyasında .env, .env.local, .env.*.local ve .env.production kalıpları bulunmalıdır.
- Ortama göre ayrı dosyalar kullanılabilir (.env.development, .env.test, .env.production); gizli değer içerenler git'e eklenmemelidir. (Opsiyonel)
- Test ortamı ayrı bir veritabanı ve ayrı API anahtarları kullanmalı, canlı değerler testte kullanılmamalıdır.
- Canlı ortam değerleri sunucuda dosya olarak veya barındırma platformunun gizli değişken yönetiminde tutulmalıdır.
- Yeni bir değişken eklendiğinde aynı anda .env.example dosyasına, belgelere ve uygulama başlangıç kontrolüne eklenmelidir.
- Bir değişken kaldırıldığında .env.example ve belgelerden de kaldırılmalıdır.

## Dosyanın İçeriği ve Düzeni
- Değişkenler kategorilere göre gruplanmalı ve her grubun üstünde yorum satırıyla başlık bulunmalıdır (ör. # Veritabanı, # E-posta, # Güvenlik).
- Her değişkenin üstünde ne işe yaradığı, zorunlu mu isteğe bağlı mı olduğu ve boş bırakılırsa ne olacağı yorum olarak yazılmalıdır.
- Değişken adları büyük harf ve alt çizgiyle yazılmalı, hizmet veya konu adıyla başlamalıdır (ör. MAIL_FROM, TURNSTILE_SECRET_KEY).
- Tarayıcıya gidecek değişkenler çerçevenin öneki ile adlandırılmalıdır (ör. Next.js için NEXT_PUBLIC_, Vite için VITE_); bu önekle gizli değer tanımlanmamalıdır.
- Birden fazla değer alan değişkenlerde ayraç belgelenmelidir (ör. virgülle ayrılmış e-posta listesi).
- Dosyanın ilk satırlarında rastgele metin veya hatalı satır bulunmamalıdır.
- Değerlerde boşluk veya özel karakter varsa tırnak içinde yazılmalıdır (ör. MAIL_FROM="Marka <noreply@alanadi.com>").

## Değişken Açıklamaları ve Kaynak Bağlantıları
- .env.example dosyasında her değişkenin üstünde ne işe yaradığı mutlaka yorum satırı olarak yazılmalıdır.
- Her değişkenin açıklamasında zorunlu mu isteğe bağlı mı olduğu ve boş bırakılırsa ne olacağı yazılmalıdır.
- Her değişkenin açıklamasında değerin hangi platformdan, panelin hangi menüsünden alınacağı yazılmalıdır (ör. Cloudflare > My Profile > API Tokens).
- Her değişkenin açıklamasında değerin alınacağı sayfaya doğrudan giden bağlantı bulunmalıdır.
- Anahtar oluşturulurken seçilmesi gereken izin veya yetki kapsamı açıklamada yazılmalıdır (ör. "Zone > DNS > Edit", "Sending access").
- Anahtar almak için önce bir API'nin etkinleştirilmesi gerekiyorsa (ör. Google Cloud'da YouTube Data API v3) etkinleştirme sayfasının bağlantısı da yazılmalıdır.
- Değer bir komutla üretiliyorsa komut açıklamada yazılmalıdır (ör. openssl rand -base64 32, npx web-push generate-vapid-keys).
- Değerin beklenen biçimi örnekle gösterilmelidir (ör. re_xxxxxxxx, https://xxxx.supabase.co); gerçek değer yazılmamalıdır.
- Test (sandbox) ve canlı anahtarlar farklı sayfalardan alınıyorsa ikisinin bağlantısı da yazılmalıdır.
- Platformun resmî belge sayfasının bağlantısı da eklenmelidir. (Önerilen)
- Bağlantılar platform arayüzü değiştikçe eskiyebileceği için emin olunamayan durumlarda doğrudan panel sayfası yerine platformun ana paneli ve resmî belge sayfası verilmeli, geliştiriciye bağlantıyı doğrulaması hatırlatılmalıdır.
- Hizmetlerin değerlerinin nereden alınacağı setup/env-catalog.md dosyasında hizmet bazında bulunmalı, .env.example hazırlanırken oradan kopyalanmalıdır.
- .env.example dosyasında her değişken için aşağıdaki biçim kullanılmalıdır:
```
# ── E-posta (Resend) ──────────────────────────────────────────
# Ne işe yarar : Doğrulama, davet ve parola sıfırlama e-postalarını gönderir.
# Zorunlu mu   : Hayır. Boşsa e-postalar gönderilmez, konsola yazılır.
# Nereden      : Resend > API Keys > Create API Key
# Bağlantı     : https://resend.com/api-keys
# Yetki        : Sending access (yalnız gönderim), ilgili alan adı
# Biçim        : re_xxxxxxxxxxxxxxxxxxxx
# Belge        : https://resend.com/docs
RESEND_API_KEY=
```

## Gizli Değerler
- Gizli değerler (API anahtarı, veritabanı parolası, imza anahtarı) yapay zekaya sorulmamalı, yazdırılmamalı ve konuşmaya yapıştırılmamalıdır.
- Yapay zeka .env dosyasına yalnızca değişken adlarını boş değerle eklemeli, gizli değerleri geliştirici kendisi doldurmalıdır.
- Değerlerin dolu olup olmadığı kontrol edilecekse değer gösterilmeden yalnızca dolu / boş bilgisi raporlanmalıdır.
- Oturum veya imza anahtarı gibi uygulamanın kendi ürettiği gizli değerler güçlü rastgele üretilmelidir (ör. openssl rand -base64 32).
- Her ortam ve proje için ayrı anahtar kullanılmalı, bir anahtar birden fazla projede paylaşılmamalıdır.
- API anahtarları en az yetkiyle oluşturulmalıdır (ör. yalnızca gönderim yetkisi).
- Anahtar sızdığında hemen iptal edilip yenisi oluşturulmalı, eski anahtar git geçmişine girdiyse geçmiş temizlense bile anahtar yenilenmelidir.
- Anahtarların düzenli aralıklarla yenilenmesi planlanmalıdır. (Önerilen)

## Başlangıç Kontrolü
- Uygulama açılırken zorunlu değişkenler kontrol edilmeli, eksik olan varsa adı açıkça yazılarak hata verilmelidir.
- Değişkenlerin biçimi doğrulanmalıdır (ör. URL geçerli mi, sayı mı, e-posta listesi geçerli mi). (Önerilen)
- Değişken okuma tek bir modülde toplanmalı, kodun her yerinde doğrudan process.env okunmamalıdır. (Önerilen)
- İsteğe bağlı değişken eksikse uygulama çökmemeli, ilgili özellik güvenli şekilde devre dışı kalmalı ve konsola uyarı yazılmalıdır (ör. e-posta anahtarı yoksa gönderim atlanır).
- Güvenlik özelliklerinin devre dışı kalması yalnızca yerel geliştirmede kabul edilmeli, canlı ortamda bu değişkenler eksikse uygulama başlamamalıdır (ör. bot koruması, CSRF izinli adresi).
- Değişkenler değiştiğinde geliştirme sunucusunun yeniden başlatılması gerektiği geliştiriciye hatırlatılmalıdır.

## Standart Değişkenler
- Kullanılan hizmetlere göre değişken adları setup/env-catalog.md dosyasındaki katalogdan seçilmelidir.
- Her projede en az uygulama adresi, veritabanı ve kullanılan hizmetlerin anahtarları tanımlanmalıdır.

## Firma / Müşteri Bazlı Panel İse
- Ekip bildirim adresleri (ör. MAIL_ADMIN) ve platform yöneticisi ayarları tanımlanmalıdır.
- Panel başka bir sistemin verisini okuyorsa o sistemin bağlantı bilgileri ayrı ve salt okunur yetkili bir anahtarla tanımlanmalıdır.
- Firmaya özel gizli değerler (firma API anahtarları, webhook gizli anahtarları) .env dosyasında değil, veritabanında şifrelenerek saklanmalı; .env dosyasında yalnızca bu şifrelemenin ana anahtarı bulunmalıdır.

## Bireysel Kullanıcı Sistemi İse
- Sosyal giriş kullanılıyorsa sağlayıcıların istemci kimliği ve gizli anahtarları (ör. GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET) ve yönlendirme adresleri tanımlanmalıdır.
- SMS doğrulaması kullanılıyorsa SMS sağlayıcısının anahtarları ve gönderici başlığı tanımlanmalıdır.
- İYS entegrasyonu varsa İYS API bilgileri ve marka kodu tanımlanmalıdır.

## Önerilen Platformlar
- Küçük projelerde .env.local ve sunucudaki .env dosyası yeterlidir.
- Ekip büyüdüğünde veya birden fazla ortam yönetildiğinde gizli değer yönetim platformu önerilmelidir: Doppler, Infisical (açık kaynak, kendi sunucunda barındırılabilir), 1Password Secrets Automation, HashiCorp Vault (büyük kurumlar).
- Barındırma platformu kullanılıyorsa kendi gizli değişken yönetimi tercih edilebilir (Vercel, Cloudflare, GitHub Actions secrets).
- Değişkenlerin tür ve biçim doğrulaması için şema kütüphaneleri önerilebilir (ör. zod ile env doğrulama, @t3-oss/env-nextjs). (Opsiyonel)
- Platform önerilirken ücret, ücretsiz plan sınırları ve verinin nerede saklandığı geliştiriciye belirtilmelidir.
