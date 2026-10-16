# Cloudflare
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Genel Yapılacaklar
- Projede Cloudflare'in hangi özelliklerinin kullanılacağı proje başında belirlenmeli ve yalnızca ilgili bölümler uygulanmalıdır.
- Cloudflare hesabında iki adımlı doğrulama açık olmalıdır.
- Ekip üyeleri hesaba kendi kullanıcılarıyla ve en az yetkiyle (Members > rol) eklenmeli, tek hesap paylaşılmamalıdır.
- API erişimi için yalnızca gereken izinlerle API token oluşturulmalı, Global API Key kullanılmamalıdır: https://dash.cloudflare.com/profile/api-tokens
- Ücretsiz plan sınırları (ör. tek Rate Limiting kuralı, WAF kural sayısı, Workers günlük istek sınırı) geliştiriciye belirtilmeli, ücretli plana geçiş gerekiyorsa önceden söylenmelidir.
- Cloudflare'de yapılan değişiklikler canlıyı etkilediği için geliştiricinin açık onayı olmadan uygulanmamalıdır.
- Yapılan her Cloudflare ayarı projenin sistem belgesine yazılmalıdır.

## Alan Adı (Domain) Ekleme
- Alan adı Cloudflare panelinde Add a domain adımıyla eklenmelidir: https://dash.cloudflare.com
- Ekleme sırasında mevcut DNS kayıtlarının otomatik taranan listesi tek tek kontrol edilmeli, eksik kayıt (özellikle MX, TXT, alt alan adları) varsa elle eklenmelidir.
- Alan adının kayıt firmasında (registrar) nameserver'lar Cloudflare'in verdiği iki nameserver ile değiştirilmelidir.
- Nameserver değişikliğinden önce eski DNS sağlayıcısındaki tüm kayıtların yedeği alınmalıdır.
- Nameserver değişimi sırasında e-posta kesintisi olmaması için MX ve e-posta doğrulama kayıtları önceden Cloudflare'e eklenmiş olmalıdır.
- Alan adı aktif olduktan sonra kayıt firmasında DNSSEC kullanılıyorsa Cloudflare'in verdiği DS kaydıyla yeniden etkinleştirilmelidir.
- Alan adının kendisi Cloudflare Registrar'a taşınabilir; yenileme maliyeti avantajı geliştiriciye belirtilmelidir. (Opsiyonel)

## DNS Kayıtları
- Web trafiği taşıyan A, AAAA ve CNAME kayıtları proxied (turuncu bulut) olmalıdır.
- E-posta (MX), doğrulama (TXT) ve proxy desteklemeyen hizmetlere giden kayıtlar DNS only (gri bulut) olmalıdır.
- Sunucunun gerçek IP adresi gri bulutlu bir kayıtla (ör. ftp, mail, direct alt alan adı) açığa çıkarılmamalıdır.
- Her DNS kaydının açıklama (comment) alanına ne için eklendiği yazılmalıdır.
- Kullanılmayan eski DNS kayıtları silinmelidir.
- E-posta kullanılmayan alan adlarında sahte gönderimi engellemek için "v=spf1 -all" SPF kaydı ve "p=reject" DMARC kaydı eklenmelidir.
- SPF kaydı tek olmalı, birden fazla e-posta servisi tek kayıtta birleştirilmelidir (ör. v=spf1 include:_spf.mx.cloudflare.net include:amazonses.com ~all).
- SPF kaydında DNS sorgu sınırı (10 include) aşılmamalıdır.
- DMARC kaydı eklenmeli, başlangıçta p=none ile raporlar izlenmeli, sonra quarantine ve reject seviyesine çıkılmalıdır.
- CAA kaydıyla yalnızca kullanılan sertifika sağlayıcılarına izin verilmelidir. (Önerilen)
- DNS değişikliklerinden önce mevcut kayıtlar dışa aktarılmalıdır (DNS > Records > Export).

## SSL / TLS
- SSL/TLS şifreleme modu Full (strict) olmalıdır; Flexible kullanılmamalıdır.
- Sunucuda Cloudflare Origin CA sertifikası kullanılmalı (SSL/TLS > Origin Server) ve sertifikanın bitiş tarihi belgelenmelidir.
- Always Use HTTPS ve Automatic HTTPS Rewrites açık olmalıdır.
- Minimum TLS sürümü 1.2 olmalıdır.
- HSTS, tüm alt alan adlarının HTTPS desteklediğinden emin olunduktan sonra açılmalıdır; geri alınması zor olduğu geliştiriciye belirtilmelidir.
- Authenticated Origin Pulls ile sunucunun yalnızca Cloudflare'den gelen istekleri kabul etmesi sağlanabilir. (Önerilen)

## E-posta Yönlendirme (Email Routing)
- Email Routing, alan adına gelen e-postaları başka bir adrese (ör. Gmail) ücretsiz yönlendirmek için kullanılabilir; e-posta göndermez, yalnızca alır ve yönlendirir.
- Email Routing alan adının Email > Email Routing bölümünden etkinleştirilmeli, Cloudflare'in istediği MX ve SPF kayıtları eklenmelidir.
- Hedef adresler (Destination addresses) önce doğrulanmalıdır; doğrulanmayan adrese yönlendirme yapılmaz.
- Her yönlendirme adresi için ayrı kural (Custom address) oluşturulmalıdır (ör. destek@, iletisim@).
- Catch-all kuralı spam riski nedeniyle dikkatli kullanılmalıdır. (Opsiyonel)
- Yalnızca gönderim yapılan adresler (ör. noreply@) için yönlendirme kuralı kurulmasına gerek yoktur.
- Email Routing'in MX kayıtları ile başka bir e-posta sağlayıcısının (Google Workspace, Microsoft 365) MX kayıtları aynı alan adında birlikte kullanılamaz.
- E-posta gönderimi için ayrı bir hizmet (Resend, SES vb.) kullanılıyorsa SPF kaydı iki hizmeti birlikte içerecek şekilde birleştirilmelidir.
- Gelen e-postaları kodla işlemek gerekiyorsa Email Workers kullanılabilir. (Opsiyonel)

## Workers
- Workers, kenarda çalışan sunucusuz kod (API, yönlendirme, webhook, zamanlanmış görev) için kullanılmalıdır.
- Workers projeleri Wrangler CLI ile oluşturulmalı ve yapılandırma wrangler.toml veya wrangler.jsonc dosyasında git'te tutulmalıdır.
- Gizli değerler wrangler secret put komutuyla eklenmeli, yapılandırma dosyasına yazılmamalıdır.
- Yerel geliştirmede gizli değerler .dev.vars dosyasında tutulmalı ve bu dosya git'e eklenmemelidir.
- Worker'lar özel alan adına (Custom Domain veya Route) bağlanmalı, workers.dev adresi canlıda kapatılmalıdır.
- Ücretsiz plan istek ve CPU süresi sınırları geliştiriciye belirtilmelidir.
- Zamanlanmış görevler için Cron Triggers kullanılabilir. (Opsiyonel)
- Veri saklamak için ihtiyaca göre KV (anahtar-değer), D1 (SQLite), R2 (dosya), Durable Objects (durumlu nesne) veya Queues (kuyruk) seçilmelidir.
- Worker'lara gelen istekler için de CSRF, istek sınırı ve kimlik doğrulama kuralları uygulanmalıdır.
- Worker hataları için Workers Logs veya Logpush ile kayıt tutulmalıdır.

## Pages
- Statik site veya ön yüz projeleri Cloudflare Pages ile yayınlanabilir; Git deposuna bağlanarak otomatik dağıtım yapılmalıdır.
- Önizleme (preview) dağıtımlarının herkese açık olup olmayacağı belirlenmeli, gerekirse Cloudflare Access ile korunmalıdır.
- Ortam değişkenleri Pages > Settings > Variables and Secrets bölümünden, canlı ve önizleme için ayrı tanımlanmalıdır.
- Özel alan adı Pages > Custom domains bölümünden bağlanmalıdır.

## R2 Depolama
- R2 dosya depolama (S3 uyumlu, çıkış trafiği ücretsiz) için kullanılabilir.
- Her uygulama için ayrı bucket ve yalnızca o bucket'a yetkili R2 API tokenı oluşturulmalıdır.
- Herkese açık dosyalar özel alan adıyla (Custom Domain) sunulmalı, r2.dev adresi canlıda kullanılmamalıdır.
- Özel dosyalar için süreli imzalı adresler (presigned URL) kullanılmalıdır.
- Tarayıcıdan doğrudan yükleme yapılacaksa bucket CORS ayarı yalnızca uygulamanın adresine izin vermelidir.
- Yaşam döngüsü kurallarıyla geçici dosyalar otomatik silinmelidir. (Önerilen)

## Turnstile (Bot Koruması)
- Turnstile site Cloudflare panelinde Turnstile bölümünden eklenmelidir: https://dash.cloudflare.com/?to=/:account/turnstile
- Site eklenirken yalnızca uygulamanın alan adları (ve yerel deneme için 127.0.0.1) girilmelidir.
- Widget modu çoğu durumda Managed seçilmelidir.
- Site anahtarı tarayıcıya açık, gizli anahtar yalnızca sunucuda kullanılmalıdır.
- Yerel geliştirme ve testlerde Cloudflare'in resmî test anahtarları kullanılabilir.

## Güvenlik Kuralları (WAF, Rate Limiting, Bot)
- Giriş, kayıt ve parola sıfırlama gibi POST yolları için Rate Limiting kuralı tanımlanmalıdır (Security > WAF > Rate limiting rules).
- Yönetim panelleri ülke, IP veya Cloudflare Access ile kısıtlanabilir. (Opsiyonel)
- Bot Fight Mode açılmalı, API veya webhook yollarını engellemediği test edilmelidir.
- Saldırı anında Under Attack Mode geçici olarak açılabilir; kullanıcı deneyimini etkilediği geliştiriciye belirtilmelidir.
- Webhook alan yollar (ör. ödeme bildirimi) güvenlik kurallarından muaf tutulmalı veya sağlayıcının IP adreslerine izin verilmelidir.

## Önbellek ve Yönlendirme Kuralları
- Oturum içeren sayfalar ve API yanıtları önbelleğe alınmamalıdır (Cache Rules ile Bypass).
- Statik dosyalar uzun süreli önbelleğe alınmalıdır.
- Yayın sonrası önbellek gerekiyorsa temizlenmelidir (Caching > Purge Cache veya API).
- www ve kök alan adı arasındaki yönlendirme Redirect Rules ile tek yönde yapılmalıdır.

## Tunnel ve Access
- Sunucu portlarını internete açmadan yayın yapmak için Cloudflare Tunnel (cloudflared) kullanılabilir; bu durumda güvenlik duvarında 80 ve 443 portlarının açılmasına gerek kalmaz. (Opsiyonel)
- İç araçlar, yönetim panelleri ve önizleme ortamları Cloudflare Access (Zero Trust) ile e-posta veya SSO doğrulamasının arkasına alınabilir; ücretsiz planda 50 kullanıcıya kadar kullanılabildiği belirtilmelidir. (Opsiyonel)

## Sunucu Tarafı Uyumu
- Uygulama istemci IP adresini CF-Connecting-IP başlığından okumalıdır.
- Sunucu güvenlik duvarında 80 ve 443 portları yalnızca Cloudflare IP aralıklarına açık olmalıdır: https://www.cloudflare.com/ips/
- Cloudflare IP aralıkları zaman zaman güncellendiği için güvenlik duvarı kuralları düzenli kontrol edilmelidir.
