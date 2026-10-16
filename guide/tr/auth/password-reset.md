# Parola Sıfırlama ve Değiştirme
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Yapılacaklar
- Giriş formunda parolamı unuttum bağlantısı bulunmalıdır.
- Sıfırlama isteği formunda yalnızca e-posta alanı bulunmalıdır.
- Hesap olsun ya da olmasın aynı yanıt verilmelidir ("Bu adrese kayıtlı bir hesap varsa bağlantı gönderdik").
- Yanıt süresinden hesabın varlığı anlaşılmamalı, e-posta gönderimi yanıtı bekletmemelidir.
- Hesap başına saatte en fazla 3 sıfırlama bağlantısı oluşturulmalıdır.
- IP başına saatte en fazla 10 sıfırlama isteği kabul edilmelidir.
- Sıfırlama isteği formunda bot koruması bulunmalıdır. (Önerilen)
- Pasif hesaplara ve henüz parolası olmayan hesaplara bağlantı gönderilmemelidir.
- Sıfırlama bağlantısı tahmin edilemez olmalı (32 bayt rastgele kod) ve veritabanında özeti saklanmalıdır.
- Sıfırlama bağlantısı kısa ömürlü (ör. 60 dakika) ve tek kullanımlık olmalıdır.
- Geçersiz veya süresi dolmuş bağlantıda "Yeni bağlantı iste" butonu gösterilmelidir.
- Yeni parola formunda parola ve parola tekrarı alanları bulunmalıdır.
- Yeni parola formunda hesap oluşturmadaki parola kuralları uygulanmalıdır.
- Parola kaydedilirken kod tüketilmeli, diğer açık sıfırlama bağlantıları iptal edilmeli ve kullanıcının tüm oturumları kapatılmalıdır; bunlar tek işlemde yapılmalıdır.
- Parola değiştiğinde kullanıcıya tarih ve saat bilgisiyle "parolanız değiştirildi" e-postası gönderilmelidir.
- Parola değişikliğinden sonra kullanıcı giriş ekranına bilgi mesajıyla yönlendirilmelidir.
- Panel içinden mevcut parola ile parola değiştirme imkânı sunulmalıdır. (Önerilen)
- Her sıfırlama isteği ve parola değişikliği etkinlik kaydına yazılmalıdır.
- Süresi geçmiş sıfırlama kayıtları periyodik bakım göreviyle silinmelidir.
