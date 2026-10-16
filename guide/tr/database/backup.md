# Yedekleme ve Felaket Kurtarma
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Ortak Yapılacaklar
- Veritabanı ve yüklenen dosyalar otomatik olarak, düzenli aralıklarla yedeklenmelidir (ör. günlük tam yedek).
- Yedekler aynı sunucuda değil, farklı bir sağlayıcıda veya farklı bir bölgede saklanmalıdır.
- Yedekler şifrelenmeli; şifreleme anahtarı yedeklerden ayrı yerde saklanmalıdır.
- Saklama düzeni belirlenmelidir (ör. 7 günlük, 4 haftalık, 12 aylık); eski yedekler otomatik silinmelidir.
- Kabul edilebilir veri kaybı süresi (RPO) ve sistemin yeniden ayağa kalkma süresi (RTO) belirlenmeli ve belgeye yazılmalıdır.
- Daha az veri kaybı gerekiyorsa sürekli yedekleme (Postgres WAL arşivleme / zamana göre geri dönme) kurulmalıdır. (Önerilen)
- Geri yükleme düzenli olarak (ör. ayda bir) ayrı bir ortamda test edilmelidir; test edilmemiş yedek yok sayılmalıdır.
- Yedekleme işinin başarısız olması veya hiç çalışmaması durumunda geliştiriciye uyarı gitmelidir.
- Geri yükleme adımları belgelenmelidir (ör. docs/YEDEK.md): yedeğin yeri, komutlar, sıra, kontrol.
- Yedeklerde kişisel veri bulunduğu için erişim sınırlanmalı ve saklama süreleri yasal yükümlülüklerle uyumlu olmalıdır (bkz. legal/data-retention.md).
- Sunucunun tamamen kaybedilmesi durumunda sistemin sıfırdan nasıl kurulacağı yazılı olmalıdır (altyapı, DNS, gizli değişkenler, yedekten dönüş).
- Yapay zeka yedekleri asla silmemeli veya üzerine yazmamalıdır (bkz. ai/destructive-actions.md).

## Önerilen Platformlar
- Hetzner Storage Box / Backups, Cloudflare R2, Backblaze B2, AWS S3: sunucu dışı yedek alanı.
- pgBackRest, WAL-G: Postgres için sürekli yedekleme ve zamana göre geri dönme.
- restic, borg: dosya yedekleri için şifreli, tekilleştirmeli yedekleme.
- Yönetilen veritabanları (Supabase, Neon, RDS): yerleşik yedekleme; yine de dışarıya ayrı yedek önerilir.
