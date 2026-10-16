# Dış Adreslere İstek (SSRF Koruması)
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Yapılacaklar
- Kullanıcının verdiği bir adrese sunucu istek atıyorsa (alan adı doğrulama, webhook, görsel çekme) SSRF koruması uygulanmalıdır.
- Alan adı normalleştirilmeli; IP adresi, port, kullanıcı bilgisi ve localhost reddedilmelidir.
- Alan adı çözülmeli ve tüm adresler genel (public) olmalıdır; özel ağ adresleri reddedilmelidir.
- Yalnızca 80 ve 443 portlarına istek atılmalıdır.
- Yönlendirmeler yalnızca aynı alan adı içinde ve sayıyla sınırlı (ör. 3) izlenmelidir.
- İsteklere zaman aşımı (ör. 6 saniye) ve yanıt boyutu sınırı (ör. 512 KB) konmalıdır.
- DNS rebinding riski geliştiriciye bildirilmeli, gerekirse çözülen IP adresine doğrudan bağlanılmalıdır.
- Next.js görsel ayarlarında (remotePatterns) tüm adreslere izin verilmemelidir.
