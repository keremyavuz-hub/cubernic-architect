# Hetzner Sunucu Ayarları
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Yapılacaklar
- Güvenlik duvarında 80 ve 443 portları yalnızca Cloudflare IP aralıklarına açılmalıdır.
- SSH (22) portu yalnızca yönetici IP adreslerine açılmalıdır.
- Diğer tüm portlar kapalı olmalıdır.
- Sunucunun IP adresine doğrudan istek atıldığında bağlantı kurulamadığı kontrol edilmelidir.
- Aynı sunucuda Cloudflare arkasında olmayan site varsa güvenlik duvarı kuralından önce taşınmalıdır.
- Uygulama yalnızca 127.0.0.1 üzerinde dinlemeli, dışarıya ters vekil sunucu (Caddy, Nginx) açılmalıdır.
- Ters vekil sunucu Host ve X-Forwarded başlıklarını doğru iletmelidir.
- Zamanlanmış bakım görevleri cron ile kurulmalı, dakika değeri :00 dışında seçilmelidir.
- Otomatik güvenlik güncellemeleri ve fail2ban kurulmalıdır. (Önerilen)
- Platform değişiklikleri geliştiricinin açık onayı olmadan yapılmamalıdır.
