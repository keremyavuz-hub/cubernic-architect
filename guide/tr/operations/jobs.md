# Arka Plan İşleri ve Zamanlanmış Görevler
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Ortak Yapılacaklar
- Uzun süren işler (e-posta, içe aktarma, görsel işleme, eşitleme, rapor) istek sırasında değil, arka plan işi olarak çalıştırılmalıdır.
- İşler bir kuyruk üzerinden çalıştırılmalıdır; kuyruk sunucu yeniden başladığında işleri kaybetmemelidir.
- Her iş birden fazla çalıştırıldığında aynı sonucu verecek şekilde (idempotent) yazılmalıdır (bkz. code/idempotency.md).
- Başarısız işler sınırlı sayıda, artan beklemeyle yeniden denenmelidir.
- Sürekli başarısız olan işler ayrı bir listeye (dead-letter) alınmalı, geliştiriciye bildirilmeli ve elle yeniden çalıştırılabilmelidir.
- Her işe zaman aşımı konmalıdır; takılan iş kuyruğu kilitlememelidir.
- Aynı zamanlanmış görevin birden fazla sunucuda aynı anda çalışması kilitle engellenmelidir (ör. Postgres advisory lock).
- Zamanlanmış görevlerin son çalışma zamanı ve sonucu kaydedilmeli; beklenen zamanda çalışmayan görev için uyarı verilmelidir (ör. Healthchecks.io, Cronitor).
- İşler büyük veriyi parçalar halinde işlemeli; bellek ve veritabanı yükü sınırlanmalıdır (bkz. ai/resource-usage.md).
- Kuyruk uzunluğu ve iş süreleri izlenmelidir.
- Veri silen zamanlanmış görevler geliştiricinin onayı olmadan eklenmemelidir (bkz. ai/destructive-actions.md).

## Önerilen Platformlar
- pg-boss, Graphile Worker: Postgres üzerinde kuyruk; ek altyapı gerektirmez.
- BullMQ: Redis tabanlı kuyruk.
- Sistem cron / systemd timer: basit zamanlanmış görevler.
- Cloudflare Queues / Cron Triggers, Inngest, Trigger.dev: yönetilen arka plan işleri. (Opsiyonel)
- Kuyruk sistemlerinin ayrıntılı kuralları için bkz. operations/queues.md.
