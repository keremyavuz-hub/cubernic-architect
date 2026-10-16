# Harici Kaynaklara İstekler ve Crawl
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Ortak Yapılacaklar
- Harici kaynaklara (API, web sitesi, feed, dosya sunucusu) atılan her istek merkezi bir istemci üzerinden yapılmalıdır; zaman aşımı, yeniden deneme ve hız sınırı tek yerde yönetilmelidir.
- Her isteğe zaman aşımı (timeout) konmalıdır; yanıt vermeyen sunucu uygulamayı kilitlememelidir.
- Yeniden denemeler sınırlı sayıda ve artan bekleme süresiyle (exponential backoff + rastgele gecikme) yapılmalıdır.
- 429 (çok fazla istek) ve 503 yanıtlarında Retry-After başlığına uyulmalı, istek hızı düşürülmelidir.
- Aynı veri tekrar tekrar istenmemeli; önbellek, ETag / If-Modified-Since ve değişiklik kontrolü kullanılmalıdır.
- Harici kaynağın hata vermesi uygulamanın tamamını durdurmamalıdır; hata loglanmalı, eski veri veya anlamlı mesaj gösterilmelidir.
- Kullanıcıdan gelen adreslere istek atılıyorsa SSRF önlemleri uygulanmalıdır (bkz. security/ssrf.md).
- Harici yanıtlar güvenilmez veri sayılmalı; doğrulanmadan veritabanına yazılmamalı veya sayfada gösterilmemelidir.

## API Kullanımı
- Servisin kullanım koşulları, hız sınırları ve kotaları okunmalı; sınırların altında kalınmalıdır.
- Toplu işlemler için servisin toplu (batch) uç noktaları tercih edilmelidir.
- Ücretli API'lerde istek sayısı ve maliyet izlenmeli, beklenmedik artışta uyarı verilmelidir (bkz. ai/resource-usage.md).
- API anahtarları yalnız sunucu tarafında kullanılmalıdır (bkz. ai/secret-handling.md).

## Crawl / Veri Toplama
- Crawl yapılmadan önce hedef sitenin kullanım koşulları ve robots.txt dosyası kontrol edilmeli; yasaklanan yollar taranmamalıdır.
- Site resmi bir API veya feed (XML, JSON, sitemap) sunuyorsa sayfa taramak yerine o kullanılmalıdır.
- Aynı sunucuya eş zamanlı istek sayısı düşük tutulmalıdır (ör. alan adı başına 1–2 eş zamanlı istek).
- İstekler arasına bekleme konmalıdır (ör. en az 1 saniye); robots.txt'deki Crawl-delay değerine uyulmalıdır.
- Karşı sunucunun yanıt süresi uzarsa veya hata oranı artarsa tarama otomatik yavaşlamalı, gerekirse durmalıdır.
- Taramalar karşı sitenin yoğun olmadığı saatlere planlanmalıdır. (Önerilen)
- Her alan adı için günlük / saatlik istek üst sınırı konmalıdır.
- İstekler kendini tanıtan bir User-Agent ile atılmalıdır (proje adı ve iletişim adresi); tarayıcı taklidi veya engel aşma yapılmamalıdır.
- Engellenme (403, captcha) bir uyarı olarak kabul edilmeli; engeli aşmaya çalışılmamalı, geliştiriciye bildirilmelidir.
- Daha önce taranan sayfalar değişmediyse tekrar indirilmemelidir; tarama sıklığı içeriğin değişme hızına göre ayarlanmalıdır.
- Görseller ve büyük dosyalar gerekmedikçe indirilmemeli; indirilenler saklanmalı, tekrar indirilmemelidir.
- Toplanan verinin telif, kişisel veri ve kullanım hakları geliştiriciye hatırlatılmalıdır (bkz. legal/project-assessment.md); bu bir hukuki değerlendirme değildir.
- Tarama işleri kuyruk üzerinden, kaldığı yerden devam edebilecek şekilde çalışmalı ve her çalışma loglanmalıdır.

## Yapay Zeka İçin
- Yapay zeka geliştirme sırasında kendisi de harici kaynaklara gereksiz istek atmamalı; aynı sayfayı tekrar tekrar çekmemeli, döngü içinde toplu istek göndermemelidir.
- Yapay zeka crawl veya toplu istek yapan bir kodu çalıştırmadan önce hedefi, istek sayısını ve hızını geliştiriciye söylemeli ve onay almalıdır.
- Test sırasında canlı dış servislere yük bindirilmemeli; mümkünse küçük örneklem veya sahte (mock) yanıt kullanılmalıdır.

## Önerilecek Önlemler
- Yapay zeka harici istek veya crawl içeren bir iş başladığında aşağıdaki önlemlerden projeye uygun olanları geliştiriciye kısa bir liste halinde önermelidir; hangilerinin uygulanacağına geliştirici karar verir.
- Alan adı bazlı hız sınırlayıcı (token bucket) ve eş zamanlılık sınırı kurulmalıdır (ör. Node.js için p-limit / bottleneck, Python için aiolimiter). (Önerilen)
- Devre kesici (circuit breaker) kullanılmalıdır; art arda hata veren kaynağa bir süre istek atılmamalıdır. (Önerilen)
- İşler kuyruk üzerinden çalıştırılmalıdır (ör. BullMQ, pg-boss, Postgres tabanlı iş tablosu); kaldığı yerden devam, tekrar deneme ve iş başına zaman aşımı kuyruğun üzerinde yönetilmelidir. (Önerilen)
- Alan adı başına durum tablosu tutulmalıdır: son istek zamanı, hata sayısı, ortalama yanıt süresi, engel durumu, günlük istek sayısı.
- robots.txt dosyası önbelleğe alınmalı ve düzenli yenilenmelidir (ör. günlük); ayrıştırma için hazır kütüphane kullanılmalıdır (ör. robots-parser).
- Koşullu istekler (ETag, Last-Modified) ve içerik özeti (hash) ile değişmeyen sayfalar atlanmalıdır.
- Sitemap ve feed öncelikli tarama stratejisi uygulanmalıdır; yalnız değişen adresler taranmalıdır.
- Tarama sıklığı içeriğe göre uyarlanmalıdır: sık değişen sayfalar daha sık, durağan sayfalar seyrek taranmalıdır.
- Acil durdurma anahtarı (ortam değişkeni veya panel ayarı) olmalı; tüm taramalar tek adımda durdurulabilmelidir.
- İzleme ve uyarı kurulmalıdır: alan adı başına istek sayısı, hata oranı, 429 / 403 sayısı, maliyet; eşik aşılırsa geliştiriciye bildirim gitmelidir (bkz. operations/logging.md, operations/error-tracking.md).
- Ağır tarayıcı (headless browser) yalnız JavaScript gerektiren sayfalarda kullanılmalı; diğerlerinde düz HTTP isteği tercih edilmelidir (kaynak tüketimi için bkz. ai/resource-usage.md).
- Toplanan veride kişisel veri varsa ayıklama veya anonimleştirme önerilmelidir (bkz. legal/privacy-kvkk.md).
- Hedef site sahibinin itiraz etmesi veya engel koyması durumunda izlenecek yol (taramayı durdurma, alan adını engelli listesine alma) önceden belirlenmelidir.
- Uygun durumlarda hazır ve kurallara uyan servisler önerilebilir (ör. resmi API'ler, veri sağlayıcılar, Common Crawl). (Opsiyonel)
