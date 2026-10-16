# Canlıya Çıkış Kontrol Listesi
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Yapılacaklar
- Canlıya çıkıştan önce ai/security-audit.md dosyasına göre tam güvenlik denetimi yapılmalı, kritik ve yüksek bulgu kalmamalıdır.
- Canlı adres ortam değişkeni (PANEL_URL) tanımlanmalıdır.
- Bot koruması anahtarları tanımlanmalıdır.
- E-posta SPF, DKIM ve DMARC kayıtları kontrol edilmeli, gönderim ve spam testi yapılmalıdır.
- Güvenlik duvarında 80 ve 443 yalnızca Cloudflare'e, 22 yalnızca yöneticilere açık olmalıdır.
- Cloudflare Rate Limiting kuralı tanımlanmalıdır.
- Bakım görevi cron'a eklenmeli ve bir kez elle çalıştırılmalıdır.
- Çerezlerin Secure olduğu (production modu) kontrol edilmelidir.
- Görsel ayarlarındaki uzak adres izni sınırlandırılmalıdır.
- Veritabanı yedeği alınmalı ve geri yükleme test edilmelidir.
- Platform yöneticisi hesabı oluşturulmalıdır.
- Sözleşme, aydınlatma metni, çerez politikası ve diğer tüm hukuki sayfalar hukukçu tarafından kontrol edilmeli, taslak işaretleri kaldırılmalı ve yer tutucular doldurulmalıdır.
