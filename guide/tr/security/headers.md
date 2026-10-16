# Güvenlik Başlıkları
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Yapılacaklar
- Uygulama başka sitelerin içine gömülememelidir (X-Frame-Options: DENY ve frame-ancestors 'none').
- Referrer-Policy same-origin olmalı, adreste gizli kod taşıyan sayfalar kodu dışarı sızdırmamalıdır.
- X-Content-Type-Options: nosniff başlığı eklenmelidir.
- Çerçeve imza başlıkları (X-Powered-By) kapatılmalıdır.
- Tam bir Content-Security-Policy tanımlanmalı, üçüncü taraf betikleri izin listesine yazılmalıdır. (Önerilen)
