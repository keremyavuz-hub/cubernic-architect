# Bot Koruması
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Yapılacaklar
- Backend tarafında bot koruması, seri gönderimler ve kısa sürede arka arkaya kayıt işlemleri kontrol edilmelidir.
- Herkese açık ve e-posta gönderen formlarda (kayıt, parola sıfırlama) Cloudflare Turnstile gibi bir bot koruması kullanılmalıdır.
- Bot koruması kullanıcıya bulmaca göstermemeli, yalnızca şüpheli durumda kısa bir onay istemelidir.
- Bot belirteci sunucu tarafında sağlayıcının doğrulama servisiyle kontrol edilmelidir.
- Belirtecin hangi form için alındığı (action) kontrol edilmeli, bir formun belirteci başka formda geçmemelidir.
- Belirteç tek kullanımlık olmalı ve her gönderimden sonra yenilenmelidir.
- Doğrulama servisine ulaşılamazsa istek reddedilmelidir.
- Anahtar tanımlı değilse yerel geliştirmede kontrol atlanmalı, canlıda anahtarlar mutlaka tanımlanmalıdır.
- Gizli bal küpü alanı ikinci katman olarak kullanılmalıdır.
- IP bazlı sınırlar üçüncü katman olarak kullanılmalıdır.
