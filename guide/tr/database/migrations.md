# Veritabanı Migration
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Ortak Yapılacaklar
- Şema değişiklikleri yalnız migration dosyalarıyla yapılmalı; veritabanında elle değişiklik yapılmamalıdır.
- Migration dosyaları sıralı numara veya tarihle adlandırılmalı ve git'te tutulmalıdır.
- Uygulanmış bir migration dosyası değiştirilmemeli; düzeltme yeni bir migration ile yapılmalıdır.
- Hangi migration'ların uygulandığı veritabanında bir tabloda tutulmalıdır.
- Migration'lar önce yerelde ve test ortamında çalıştırılmalı, sonra canlıya uygulanmalıdır.
- Veri kaybettiren değişiklikler (kolon / tablo silme, tip daraltma) geliştiricinin onayı olmadan yazılmamalı ve çalıştırılmamalıdır (bkz. ai/destructive-actions.md).
- Canlıya veri kaybettiren migration uygulanmadan önce yedek alınmalıdır (bkz. database/backup.md).
- Kesintisiz geçiş için değişiklikler aşamalı yapılmalıdır: yeni kolonu ekle, kodu iki kolonla çalışacak şekilde yayınla, veriyi taşı, eski kolonu daha sonraki bir sürümde kaldır.
- Büyük tablolarda kilit oluşturan işlemlerden kaçınılmalıdır (ör. Postgres'te CREATE INDEX CONCURRENTLY, varsayılan değerli kolon ekleme dikkatle).
- Büyük veri taşımaları tek seferde değil, parçalar halinde yapılmalıdır.
- Geri alma yolu düşünülmeli; geri alınamayan migration'lar belgede işaretlenmelidir.
- Başlangıç verileri (seed) migration'dan ayrı tutulmalı; canlı ortamda test verisi oluşturulmamalıdır.
