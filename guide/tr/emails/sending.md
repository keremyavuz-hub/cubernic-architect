# E-posta Gönderimi
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Yapılacaklar
- E-posta gönderimi tek bir modülden yapılmalı, sağlayıcı değişirse yalnızca bu modül değişmelidir.
- API anahtarı tanımlı değilse sistem çökmemeli, e-posta atlanmalı ve konsola yazılmalıdır.
- Kullanıcı akışları (kayıt, onay) e-posta gönderilemedi diye durmamalıdır.
- E-posta isteğine zaman aşımı (ör. 10 saniye) konmalıdır.
- Her gönderim ve hata etkinlik kaydına yazılmalıdır.
- Hesap varlığını ele verebilecek gönderimler (parola sıfırlama) yanıtı bekletmemelidir.
- Ekip bildirim adresleri birden fazla olabilmeli (virgülle ayrılmış) ve her alıcıya ayrı e-posta gönderilmelidir.
- Gönderen adres noreply ise alt bilgide "Lütfen yanıtlamayın" yazmalıdır.
- Yanıt alınması isteniyorsa reply_to adresi kullanılmalıdır. (Opsiyonel)
- E-postalara türünü belirten etiket eklenmelidir. (Önerilen)
- E-postalardaki bağlantılar canlı ortam adresinden (PANEL_URL) üretilmelidir.
