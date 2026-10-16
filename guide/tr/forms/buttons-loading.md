# Form Butonları ve Yükleme Durumları
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Yapılacaklar
- Formdaki alanlar doldurulmadan buton aktif edilmemelidir.
- Pasif buton gri renkte olmalı, imleç not-allowed olmalı, üzerine gelince renk değişmemeli ve tıklanamamalıdır.
- Buton hover stilleri yalnızca buton aktifken uygulanmalıdır.
- Tarayıcının otomatik doldurduğu alanlar için sayfa açılışında kısa bir gecikmeyle (ör. 400 ms) validasyon yeniden çalıştırılmalıdır.
- Form gönderilirken buton kilitlenmelidir.
- Form gönderilirken ekran kilitlenmelidir.
- Form gönderilirken uygun bir şekilde loader ikonu gösterilmeli ve kullanıcıyı bilgilendirici mesaj yazılmalıdır
- Gönderim sırasında buton metni işe uygun şekilde değişmelidir (ör. "Gönderiliyor…", "Giriş yapılıyor…").
- UI tarafında peşpese istek gönderilememelidir.
- Sayfa geçişleri, sekmeler, sayfalama ve süzgeç formlarında yükleme durumu gösterilmelidir.
- Bot koruması belirteci alınana kadar buton aktif edilmemelidir.
