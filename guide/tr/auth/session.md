# Oturum Yönetimi
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Yapılacaklar
- Oturum veritabanında tutulmalı ve tek tek iptal edilebilmelidir.
- Çerezde yalnızca rastgele üretilmiş bir kod bulunmalı, veritabanında bu kodun özeti (SHA-256) saklanmalıdır.
- Oturum çerezi HttpOnly, SameSite=Lax ve canlıda Secure olmalıdır.
- Oturum ömrü makul bir sürede (ör. 12 saat) tutulmalıdır.
- Her sayfada ve her sunucu eyleminde oturum veritabanından yeniden doğrulanmalıdır.
- Ara katmandaki (proxy/middleware) çerez kontrolü yalnızca ilk süzgeç olarak kullanılmalı, tek güvenlik kontrolü sayılmamalıdır.
- Herkese açık sayfalar bir izin listesinde tutulmalı, geri kalan her yol oturum istemelidir.
- Çıkış yap butonu her sayfada kolayca erişilebilir olmalıdır.
- Çıkış yapıldığında oturum veritabanında iptal edilmeli ve çerez silinmelidir.
- Hesap kapatma ve silme süreçleri auth/account-closure.md dosyasına göre uygulanmalıdır.
- Parola değiştiğinde veya sıfırlandığında kullanıcının tüm oturumları kapatılmalıdır.
- Hesap veya firma askıya alındığında ilgili oturumlar iptal edilmelidir.
- Son giriş zamanı, IP ve tarayıcı bilgisi saklanmalıdır. (Önerilen)
- Kullanıcıya aktif oturumlarını görüp kapatabileceği bir ekran sunulmalıdır. (Opsiyonel)
- Yetkili roller (sahip, yönetici) için iki adımlı doğrulama (TOTP) seçeneği sunulmalıdır. (Önerilen)
- Süresi dolmuş veya kapatılmış oturumlar periyodik bakım göreviyle silinmelidir.
