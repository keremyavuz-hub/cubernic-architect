# İki Adımlı Doğrulama ve Passkey
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Ortak Yapılacaklar
- Yönetici ve yetkili hesaplar için iki adımlı doğrulama zorunlu tutulmalıdır. (Önerilen)
- Diğer kullanıcılar için iki adımlı doğrulama isteğe bağlı sunulmalıdır. (Opsiyonel)
- Uygulama tabanlı tek kullanımlık kod (TOTP: Google Authenticator, 1Password vb.) SMS'e tercih edilmelidir; SMS kod ele geçirmeye (SIM swap) açıktır.
- Passkey (WebAuthn) desteği değerlendirilmelidir; parolasız ve oltalamaya dayanıklıdır. (Önerilen)
- Kurulumda tek kullanımlık yedek kodlar verilmeli, bunlar hash'lenerek saklanmalıdır.
- TOTP gizli anahtarı veritabanında şifreli saklanmalıdır.
- Kod denemeleri hız sınırına tabi olmalıdır (bkz. security/rate-limit.md).
- İki adımlı doğrulamanın açılıp kapatılması parola tekrarı istemeli, kullanıcıya e-postayla bildirilmelidir.
- Cihaz kaybında hesap kurtarma yolu önceden belirlenmeli; kurtarma süreci saldırganın kullanabileceği bir kestirme olmamalıdır.
- Parola sıfırlama iki adımlı doğrulamayı atlatmamalıdır.
