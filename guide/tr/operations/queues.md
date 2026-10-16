# Kuyruk Sistemleri
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Hangi Durumda Kullanılır
- İstek süresini uzatan, dış servise bağlı, toplu veya zamanlanmış işler varsa kuyruk kullanılmalıdır: e-posta / SMS / bildirim gönderimi, içe / dışa aktarma, görsel / video işleme, feed eşitleme, crawl, rapor üretimi, webhook gönderimi, yapay zeka çağrıları.
- Basit ve hızlı işler için kuyruk kurulmamalıdır; gereksiz altyapı bakım yükü getirir.
- Genel arka plan işi kuralları için bkz. operations/jobs.md.

## Kuyruk Seçimi
- Projede zaten kullanılan altyapı tercih edilmelidir; yalnız Postgres varsa önce Postgres tabanlı kuyruk değerlendirilmelidir (pg-boss, Graphile Worker, Laravel database driver, Hangfire SQL).
- Yüksek hacim, düşük gecikme veya çok sayıda worker gerekiyorsa Redis tabanlı kuyruk değerlendirilmelidir (BullMQ, Laravel Horizon, Sidekiq, Celery + Redis).
- Servisler arası olay dağıtımı veya çok yüksek hacim gerekiyorsa mesaj aracısı değerlendirilmelidir (RabbitMQ, Kafka, NATS, AWS SQS, Cloudflare Queues).
- Framework'ün yerleşik kuyruk sistemi varsa o kullanılmalıdır (Laravel Queue, Django + Celery, ASP.NET + Hangfire / MassTransit, NestJS + BullMQ) (bkz. stack/framework-rules.md).
- Seçim gerekçesiyle karar kaydına yazılmalıdır (bkz. code/registry.md).

## İş Tasarımı
- Her iş tek bir sorumluluğa sahip, küçük ve bağımsız olmalıdır.
- İşe büyük veri değil, kayıt kimliği gönderilmelidir; iş çalıştığında güncel veriyi veritabanından okumalıdır.
- İş verisinde gizli değer (parola, token, API anahtarı) bulunmamalıdır; kuyruk verisi loglarda ve panellerde görünebilir.
- Her iş birden fazla çalıştırıldığında aynı sonucu vermelidir (idempotent); kuyruklar en az bir kez teslim garantisi verir, iş iki kez çalışabilir (bkz. code/idempotency.md).
- Aynı kayıt için aynı işin kuyrukta birden fazla bekleme durumu tekil anahtarla (job id / unique job) engellenmelidir.
- İş, kaydın hâlâ geçerli olup olmadığını kontrol etmelidir (ör. silinmiş kullanıcıya e-posta gönderilmemelidir).
- İşler veritabanı transaction'ı tamamlandıktan sonra kuyruğa eklenmelidir; aksi halde iş henüz kaydedilmemiş veriyi arar (after commit / outbox).
- İş verisinin yapısı değiştiğinde kuyrukta bekleyen eski işler de çalışabilmelidir; iş verisine sürüm bilgisi eklenmelidir. (Önerilen)

## Yeniden Deneme ve Hata
- Her iş türü için deneme sayısı, artan bekleme süresi (exponential backoff + rastgele gecikme) ve zaman aşımı belirlenmelidir.
- Kalıcı hatalar (geçersiz veri, silinmiş kayıt, 4xx yanıt) yeniden denenmemeli; geçici hatalar (zaman aşımı, 5xx, 429) yeniden denenmelidir.
- Tüm denemeleri tükenen işler kayıp olmamalı; başarısız işler listesinde (dead-letter) hata nedeniyle tutulmalıdır.
- Başarısız işler panelden veya komutla incelenip yeniden çalıştırılabilmelidir.
- Başarısız iş sayısı eşiği aşınca geliştiriciye uyarı gitmelidir.
- Hatalar hata takip aracına iş adı ve kayıt kimliğiyle gönderilmelidir (bkz. operations/error-tracking.md).

## Eşzamanlılık ve Sıra
- Worker sayısı ve her worker'ın eşzamanlılık değeri sunucu kaynaklarına ve veritabanı bağlantı sayısına göre ayarlanmalıdır (bkz. ai/resource-usage.md).
- Dış servise istek atan işler o servisin hız sınırına göre sınırlanmalıdır (bkz. code/external-requests.md).
- Sıranın önemli olduğu işler (ör. aynı kaydın ardışık güncellemeleri) aynı grup / bölüm anahtarıyla sıralı işlenmelidir.
- Aynı kaynağı değiştiren işler yarış durumuna karşı kilit veya atomik güncelleme kullanmalıdır.
- Farklı öncelikteki işler ayrı kuyruklara ayrılmalıdır (ör. kritik: parola sıfırlama e-postası, normal: bildirim, düşük: rapor); yavaş işler kritik işleri bekletmemelidir.
- Firma bazlı sistemlerde bir firmanın büyük işi diğer firmaların işlerini bekletmemelidir; firma başına eşzamanlılık veya adil sıralama uygulanmalıdır.

## Zamanlanmış ve Gecikmeli İşler
- Zamanlanmış işler (cron) birden fazla sunucuda aynı anda çalışmamalıdır; tek çalıştırıcı veya kilit kullanılmalıdır.
- Uzun süreli gecikmeli işler (ör. 48 saat sonra hatırlatma) yerine zamanı gelen kayıtları tarayan periyodik iş tercih edilmelidir; uzun bekleyen işler deploy ve kuyruk değişikliklerinde kaybolabilir.
- Zamanlanmış işin her çalışması ve sonucu kaydedilmelidir.

## Deploy ve Çalıştırma
- Worker'lar web sunucusundan ayrı süreçlerde çalışmalı ve süreç yöneticisiyle (systemd, PM2, Supervisor, Docker restart policy) ayakta tutulmalıdır.
- Deploy sırasında worker'lar mevcut işi bitirip düzgün kapanmalıdır (graceful shutdown); yarıda kesilen iş yeniden denenebilir olmalıdır.
- Yeni kod deploy edildiğinde worker'lar da yeniden başlatılmalıdır; aksi halde eski kod çalışmaya devam eder.
- Worker bellek sızıntısına karşı belirli sayıda iş veya süre sonra yeniden başlatılmalıdır. (Önerilen)
- Kuyruk altyapısı (Redis vb.) kalıcı depolama ve yedekle çalışmalı; yeniden başlatmada işler kaybolmamalıdır.
- Redis / aracı dışarıya açık olmamalı, parola ve mümkünse TLS ile korunmalıdır.

## İzleme
- Kuyruk uzunluğu, bekleme süresi, işlem süresi, başarı / hata oranı ve worker sayısı izlenmelidir.
- Kuyruk uzunluğu sürekli artıyorsa (worker yetişemiyor) uyarı verilmelidir.
- Kuyruk paneli kullanılıyorsa yalnız yöneticilere açık ve kimlik doğrulamalı olmalıdır (Horizon, Bull Board, Flower, Hangfire Dashboard).
- Acil durumda belirli bir kuyruk veya iş türü tek adımda durdurulabilmelidir.

## Test
- İşler kuyruk olmadan doğrudan çağrılarak test edilebilmelidir.
- Yeniden deneme, iki kez çalışma ve kalıcı hata davranışı test edilmelidir.
- Testlerde gerçek dış servise istek atılmamalıdır.

## Yapay Zeka İçin
- Yapay zeka kuyruğu, bekleyen işleri veya başarısız işler listesini geliştiricinin onayı olmadan boşaltmamalı ve silmemelidir (bkz. ai/destructive-actions.md).
- Toplu iş kuyruğa eklemeden önce iş sayısı ve etkisi (gönderilecek e-posta sayısı, dış istek sayısı, maliyet) geliştiriciye söylenmelidir.

## Önerilen Platformlar
- pg-boss, Graphile Worker: Node.js + Postgres.
- BullMQ (+ Bull Board): Node.js + Redis.
- Laravel Queue + Horizon: Laravel.
- Celery (+ Flower), Dramatiq, RQ: Python.
- Hangfire, MassTransit: .NET.
- Sidekiq / Solid Queue: Ruby on Rails.
- RabbitMQ, Kafka, NATS: servisler arası mesajlaşma.
- AWS SQS, Google Cloud Tasks, Cloudflare Queues, Inngest, Trigger.dev: yönetilen kuyruklar.
