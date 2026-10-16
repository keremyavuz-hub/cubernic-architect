# İstek Sınırları ve Seri Gönderim
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Yapılacaklar
- Form gönderimler 1 saniyede defalarda gönderilememeli ve Backend tarafında kontrolleri yapılmalıdır.
- Herkese açık ve maliyetli her işlem (giriş, kayıt, sıfırlama, dış siteye istek atan doğrulamalar) için sınır konmalıdır.
- Sayım ve kayıt aynı veritabanı işleminde, aynı anahtar (IP, e-posta) için kilit altında yapılmalıdır.
- Aynı saniyede gelen paralel isteklerin sınırı aşamadığı test edilmelidir.
- Kilit beklemeyen türde olmalı, kilidi alamayan istek hemen reddedilmelidir; bekleyen kilitler veritabanı bağlantılarını tıkamamalıdır.
- Birden fazla kilit alınırken anahtarlar sıralanmalıdır.
- Tek satırlık durumlarda atomik koşullu güncelleme kullanılmalıdır (ör. son kontrol 10 saniyeden eskiyse güncelle, değilse reddet).
- Sınır sayımları silinebilen kayıtlardan değil, yalnızca eklenen etkinlik kaydından yapılmalıdır.
- Peşe peşe gönderim için bekleme süresi ile saatlik ve günlük tavanlar birlikte kullanılmalıdır.
- Ortak IP kullanan kullanıcılar (ofis, mobil operatör) düşünülerek tavanlar çok düşük tutulmamalıdır.
- Sınır kontrolleri pahalı işlemlerden önce yapılmalıdır.
- Genel istek seli uygulamada değil kenar katmanda (ör. Cloudflare Rate Limiting) kesilmelidir.
