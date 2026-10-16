# SEO ve Paylaşım
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Herkese Açık Sayfalar
- Her sayfanın kendine özgü başlığı (title) ve açıklaması (meta description) olmalıdır.
- Paylaşım için Open Graph ve Twitter kart etiketleri ile paylaşım görseli tanımlanmalıdır.
- Her sayfanın canonical adresi belirtilmeli; aynı içeriğin birden fazla adreste görünmesi önlenmelidir.
- Sitemap.xml ve robots.txt oluşturulmalı, arama motoru araçlarına (Google Search Console) eklenmelidir.
- Uygun içerikler için yapılandırılmış veri (JSON-LD: Organization, Product, BreadcrumbList, Article) eklenmelidir.
- Adresler okunabilir, kalıcı ve küçük harfli olmalıdır; değişen adreslerden 301 yönlendirme yapılmalıdır.
- İçerik sunucu tarafında oluşturulmalıdır; yalnız istemcide oluşan içerik dizinlenmeyebilir.
- Sayfa hızı ve Core Web Vitals (LCP, INP, CLS) izlenmelidir (bkz. ui/media-optimization.md, ai/performance.md).
- Çok dilli sitelerde hreflang etiketleri kullanılmalıdır (bkz. code/i18n.md).
- 404 sayfası anlamlı olmalı ve doğru durum kodunu döndürmelidir.

## Panel / Giriş Gerektiren Alanlar
- Panel, giriş, kayıt ve e-posta bağlantı sayfaları dizinlenmemelidir (noindex, robots.txt).
- Test / önizleme ortamları arama motorlarına tamamen kapatılmalıdır (noindex + parola veya IP kısıtı).
