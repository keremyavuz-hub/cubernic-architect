# Erişilebilirlik İzleme ve Olay Yönetimi
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## İzleme
- Uygulamanın bir sağlık kontrol ucu olmalıdır (ör. /health); veritabanı ve kritik servislerin durumunu kısaca kontrol etmeli, gizli bilgi vermemelidir.
- Canlı sistem dışarıdan düzenli olarak (ör. dakikada bir) kontrol edilmeli; erişilemezse geliştiriciye bildirim gitmelidir.
- SSL sertifikası ve alan adı bitiş tarihleri izlenmelidir.
- Disk, bellek, CPU ve veritabanı bağlantı sayısı için eşik uyarıları kurulmalıdır.
- Hata oranındaki ani artış için uyarı kurulmalıdır (bkz. operations/error-tracking.md).
- Uyarılar gereksiz sık olmamalı; önemsiz uyarılar zamanla görmezden gelinmeye yol açar.
- Müşterili sistemlerde durum sayfası sunulabilir. (Opsiyonel)

## Olay Anında
- Olay anında kimin ne yapacağı, kime haber verileceği önceden yazılı olmalıdır (ör. docs/OLAY.md).
- İlk hedef sistemi çalışır hale getirmektir (geri alma, trafik kesme); kök neden sonra araştırılmalıdır.
- Olay sırasında yapılan her işlem zamanıyla not edilmelidir.
- Güvenlik ihlali veya kişisel veri sızıntısı şüphesinde yasal bildirim yükümlülükleri ve süreleri (KVKK 72 saat) geliştiriciye hatırlatılmalıdır; bu hukuki danışmanlık değildir.

## Olay Sonrası
- Olay sonrası kısa bir değerlendirme yazılmalıdır: ne oldu, etkisi, kök neden, tekrarını önleyecek önlemler.
- Değerlendirme suçlayıcı değil, sistemi iyileştirmeye yönelik olmalıdır.
- Çıkan önlemler iş olarak kaydedilmeli ve takip edilmelidir.

## Önerilen Platformlar
- UptimeRobot, Better Stack, Healthchecks.io, Uptime Kuma (kendi sunucunda): erişilebilirlik ve cron izleme.
- Grafana + Prometheus, Netdata, Hetzner Cloud izleme: sunucu kaynakları.
