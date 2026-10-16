# API Tasarımı ve Webhook
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## API Tasarımı
- API dışarıya açılacaksa sürümlü olmalıdır (ör. /api/v1/); geriye uyumsuz değişiklik yeni sürümde yapılmalıdır.
- Uç nokta isimleri ve yanıt yapısı tek bir düzende olmalıdır; düzen proje belgesine yazılmalıdır.
- Hata yanıtları tek formatta olmalıdır (ör. kod, mesaj, alan hataları); iç hata ayrıntısı dışarıya verilmemelidir (bkz. code/error-handling.md).
- Doğru HTTP durum kodları kullanılmalıdır (400, 401, 403, 404, 409, 422, 429, 500).
- Liste uç noktaları her zaman sayfalı olmalı; sayfa boyutu üst sınırla korunmalıdır.
- Girdi her uç noktada şema ile doğrulanmalı; beklenmeyen alanlar reddedilmelidir.
- API dokümantasyonu (ör. OpenAPI) kodla birlikte güncel tutulmalıdır. (Önerilen)
- Kullanımdan kaldırılacak uç noktalar önceden duyurulmalı, belirli bir süre çalışmaya devam etmelidir.

## API Anahtarları
- Müşterilere verilen API anahtarları yalnız bir kez gösterilmeli, veritabanında hash'lenmiş saklanmalıdır.
- Anahtarlar kapsamlı (yalnız okuma, yalnız belirli kaynak) ve iptal edilebilir olmalıdır.
- Anahtara ait son kullanım zamanı ve istek sayısı tutulmalıdır.
- Her anahtar için hız sınırı uygulanmalıdır (bkz. security/rate-limit.md).
- Anahtarlar tanınabilir bir ön ek taşımalıdır (ör. mp_live_...); sızıntı taramasında bulunabilir.

## Giden Webhook'lar
- Gönderilen webhook'lar gizli anahtarla imzalanmalı (HMAC) ve zaman damgası içermelidir.
- Başarısız gönderimler artan beklemeyle yeniden denenmelidir; gönderim geçmişi müşteriye gösterilmelidir. (Önerilen)
- Webhook hedef adresleri SSRF önlemleriyle kontrol edilmelidir (bkz. security/ssrf.md).

## Gelen Webhook'lar
- Gelen webhook'ların imzası doğrulanmalı, zaman damgası eskiyse reddedilmelidir.
- Webhook hızlıca kabul edilip (200) işlem kuyrukta yapılmalıdır.
- Aynı olay birden fazla gelebilir; tekrarlar atlanmalıdır (bkz. code/idempotency.md).

## Mobil İstemciler Varsa
- Eski uygulama sürümleri uzun süre kullanılacağı için API değişiklikleri geriye uyumlu yapılmalı; alan kaldırma ve anlam değiştirme yeni API sürümünde yapılmalıdır.
- İstemci sürümü ve platformu her istekte alınmalı, en düşük desteklenen sürümden eski istemcilere zorunlu güncelleme yanıtı dönülmelidir (bkz. stack/mobile/general.md).
- Hangi API sürümünü hangi uygulama sürümlerinin kullandığı izlenmeli; eski sürüm ancak kullanımı bitince kapatılmalıdır.
