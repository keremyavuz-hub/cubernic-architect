# Hesap ve Kimlik Güvenliği
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Yapılacaklar
- Parolalar yavaş bir özet fonksiyonuyla (scrypt, bcrypt veya argon2) saklanmalıdır.
- Parola uzunluğuna üst sınır konmalıdır.
- Tüm tek kullanımlık kodlar (oturum, davet, doğrulama, sıfırlama) en az 32 bayt rastgele üretilmeli ve veritabanında özet olarak saklanmalıdır.
- Kod ve parola karşılaştırmaları sabit süreli yapılmalıdır.
- Hesabın varlığı dışarı sızmamalıdır; giriş hatası, sıfırlama yanıtı ve yanıt süresi aynı olmalıdır.
- Yetkili roller için iki adımlı doğrulama sunulmalıdır. (Önerilen)
