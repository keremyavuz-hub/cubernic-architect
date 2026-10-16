# Hata İzleme, Gözlemleme ve Uyarılar
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Karar
- Hata izleme ve gözlemleme aracı kullanmak zorunlu değildir; projenin ölçeğine, bütçesine ve veri konumu ihtiyacına göre geliştiriciyle birlikte karar verilmelidir.
- Asgari düzey her projede bulunmalıdır: yapılandırılmış loglar, etkinlik kaydı, merkezi hata işleyicisi ve sağlık kontrolü adresi (ör. /api/health).
- Aşağıdaki durumlardan biri varsa hata izleme aracı önerilmelidir: projede gerçek kullanıcılar var, birden fazla sunucu var, tarayıcı tarafı hataları görülemiyor, hatalar kullanıcı bildirmeden fark edilmiyor, ekip birden fazla kişi.
- Araç seçilirken şu ölçütler karşılaştırılmalıdır: ücretsiz plan sınırı, aylık maliyet, verinin saklandığı bölge (AB / ABD), kendi sunucunda barındırma imkânı, kaynak haritası (source map) desteği, oturum tekrarı (session replay) olup olmadığı, kişisel veri maskeleme.
- Yapay zeka araç önerirken ücret ve veri konumunu belirtmeli, aracı geliştiricinin onayı olmadan projeye eklememelidir.

## Hata İzleme Araçları
- Sentry: en yaygın hata izleme aracı; sunucu ve tarayıcı hataları, performans izleme, oturum tekrarı, ücretsiz plan var, AB veri bölgesi seçilebilir: https://sentry.io
- GlitchTip: Sentry ile uyumlu, açık kaynak, kendi sunucunda barındırılabilir; daha hafif ve ucuz alternatif: https://glitchtip.com
- Self-hosted Sentry: tam özellikli ama ciddi sunucu kaynağı ister; küçük projeler için önerilmemelidir.
- Bugsnag, Rollbar, Honeybadger: Sentry alternatifleri; ekip alışkanlığına göre seçilebilir.
- PostHog: ürün analizi ile birlikte hata izleme ve oturum tekrarı sunar; AB bölgesi seçilebilir: https://posthog.com
- Highlight.io / LaunchDarkly Observability ve benzeri araçlar oturum tekrarı odaklı izleme sunar. (Opsiyonel)
- Oturum tekrarı (session replay) özellikli araçlarda form alanları ve kişisel veriler maskelenmeli, aydınlatma metni ve çerez izni güncellenmelidir.

## Log Toplama ve Gözlemleme
- Better Stack (Logs + Uptime): log toplama, izleme ve uyarı tek panelde, ücretsiz plan var: https://betterstack.com
- Axiom: büyük hacimli log için uygun fiyatlı, ücretsiz plan var: https://axiom.co
- Grafana Cloud (Loki, Prometheus, Tempo): açık kaynak tabanlı, ücretsiz plan var; kendi sunucunda da kurulabilir: https://grafana.com
- OpenTelemetry: sağlayıcıdan bağımsız standart; izleme verisini istenen araca göndermek için önerilir, araç değişince kod değişmez: https://opentelemetry.io
- Datadog, New Relic: büyük kurumlar için kapsamlı ama pahalı çözümler.
- Cloudflare kullanılıyorsa Workers Logs, Logpush ve Web Analytics ek maliyetsiz veya düşük maliyetli seçeneklerdir.

## Erişilebilirlik ve Zamanlanmış Görev İzleme
- Uygulamanın ayakta olup olmadığı dışarıdan düzenli kontrol edilmelidir (uptime monitoring).
- Uptime araçları: Better Stack Uptime, UptimeRobot (ücretsiz plan), Uptime Kuma (açık kaynak, kendi sunucunda).
- Zamanlanmış görevlerin hiç çalışmaması durumunu yakalamak için Healthchecks.io (ücretsiz plan, açık kaynak) veya Better Stack Heartbeat önerilebilir.
- Sağlık kontrolü adresi veritabanı bağlantısını da kontrol etmeli, ancak iç bilgi döndürmemelidir.

## Uyarılar
- Kritik durumlar için uyarı tanımlanmalıdır: uygulama erişilemiyor, hata oranı arttı, zamanlanmış görev çalışmadı, disk dolmak üzere, ücretli servis harcaması beklenmedik arttı.
- Uyarılar doğru kişiye ve doğru kanala gitmelidir (e-posta, Slack, Telegram, SMS).
- Uyarı yorgunluğu oluşturmamak için önemsiz durumlar için uyarı kurulmamalı, aynı hata için tekrar eden uyarılar gruplanmalıdır.
- Her uyarının ne anlama geldiği ve ne yapılması gerektiği kısa bir notla belgelenmelidir. (Önerilen)

## Kurulum Kuralları
- Hata izleme aracına kişisel veri ve gizli değer gönderilmemeli, araçların veri temizleme (scrubbing) ayarları açılmalıdır.
- Canlı, hazırlık ve yerel ortamlar ayrı ortam adlarıyla raporlanmalıdır; yerel geliştirme hataları canlı projeye gönderilmemelidir.
- Sürüm (release) bilgisi gönderilmeli, hangi hatanın hangi sürümde başladığı görülebilmelidir.
- Kaynak haritaları (source map) hata izleme aracına yüklenmeli ancak herkese açık sunulmamalıdır.
- Kullanılan araç aydınlatma metnindeki üçüncü taraflar listesine ve kütüphane / servis kaydına eklenmelidir.
- Gönderilen olay sayısı örneklenmeli (sampling), ücretsiz plan sınırı aşılmamalıdır.
