# Node.js Sunucu (NestJS / Express / Fastify)
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Hangi Durumda Kullanılır
- Projede Next.js dışında Node.js tabanlı bir sunucu (NestJS, Express, Fastify, Hono) varsa uygulanmalıdır.
- Node.js LTS sürümü kullanılmalıdır; sürüm .nvmrc / engines alanıyla sabitlenmelidir.
- Dil kuralları için stack/languages/typescript.md uygulanmalıdır.

## Yapı
- Yeni projelerde yapı gerektiren büyük uygulamalar için NestJS, hafif API'ler için Fastify veya Hono tercih edilmelidir; Express kullanılıyorsa sürüm 5 tercih edilmelidir.
- Katmanlar ayrılmalıdır: rota / controller, servis (iş mantığı), veri erişimi (repository); controller'da iş mantığı yazılmamalıdır.
- Yapılandırma başlangıçta şema ile doğrulanmalı (ör. Zod, @nestjs/config + validation); eksik ortam değişkeninde uygulama başlamamalıdır.
- Hata yönetimi merkezi bir hata ara katmanında / exception filter'da yapılmalıdır (bkz. code/error-handling.md).
- ES modülleri (ESM) veya CommonJS'ten biri seçilmeli, proje genelinde tutarlı kullanılmalıdır.

## Güvenlik
- Tüm girdiler şema ile doğrulanmalıdır (Zod, class-validator + ValidationPipe whitelist / forbidNonWhitelisted, Fastify JSON Schema).
- Güvenlik başlıkları helmet / @fastify/helmet ile eklenmelidir (bkz. security/headers.md).
- CORS izin listesiyle yapılandırılmalıdır.
- Hız sınırlama eklenmelidir (express-rate-limit, @nestjs/throttler, @fastify/rate-limit) (bkz. security/rate-limit.md).
- İstek gövdesi boyutu sınırlanmalıdır.
- Çerez tabanlı oturumda CSRF koruması eklenmelidir (bkz. security/csrf.md).
- Proxy arkasında trust proxy yalnız bilinen vekil için ayarlanmalıdır (bkz. security/client-ip.md).
- Prototype pollution'a karşı kullanıcı girdisi nesne birleştirmelerinde (merge, Object.assign) dikkatli kullanılmalı; __proto__, constructor anahtarları reddedilmelidir.
- child_process ile kullanıcı girdisi içeren komut çalıştırılmamalı; gerekiyorsa execFile ve argüman dizisi kullanılmalıdır.
- Dosya yollarında kullanıcı girdisi path.resolve + kök dizin kontrolüyle doğrulanmalıdır (path traversal).
- Düzenli ifadeler kullanıcı girdisinde ReDoS riskine karşı kontrol edilmelidir.
- JWT kullanılıyorsa algoritma sabitlenmeli (alg: none reddedilmeli), kısa ömürlü olmalı ve iptal mekanizması bulunmalıdır.
- npm audit ve lock dosyası kullanılmalı; npm install yerine CI'da npm ci kullanılmalıdır.
- Yakalanmayan hata ve promise reddi (unhandledRejection) loglanmalı ve süreç kontrollü yeniden başlatılmalıdır.

## Performans
- Olay döngüsü (event loop) bloklanmamalıdır: senkron dosya işlemleri, büyük JSON işleme, yoğun hesaplama istek sırasında yapılmamalı; worker_threads veya kuyruk kullanılmalıdır.
- Veritabanı bağlantı havuzu kullanılmalı ve boyutu ayarlanmalıdır.
- Bağımsız asenkron işler Promise.all ile paralel yapılmalıdır.
- Büyük veri akış (stream) ile işlenmeli, belleğe tamamen alınmamalıdır.
- Yanıt sıkıştırma ters vekilde veya uygulamada yapılmalıdır.
- Çok çekirdekli sunucuda birden fazla süreç (PM2 cluster, konteyner kopyası) çalıştırılmalıdır.
- Loglama asenkron ve hızlı bir kütüphaneyle (pino) yapılmalıdır.

## Veri
- ORM / sorgu kütüphanesi tek yerde tanımlanmalıdır (Prisma, Drizzle, TypeORM, Kysely, postgres).
- Ham sorgularda parametre bağlama kullanılmalıdır.
- Migration'lar sürümlü ve deploy akışında çalıştırılmalıdır (bkz. database/migrations.md).

## Test
- Vitest / Jest ile birim, supertest / Fastify inject ile API testleri yazılmalıdır.
- Veritabanı testleri ayrı test veritabanında veya Testcontainers ile yapılmalıdır.

## Deploy
- NODE_ENV=production ile çalıştırılmalıdır.
- Süreç yöneticisi (systemd, PM2, Docker) ile yeniden başlatma sağlanmalıdır.
- SIGTERM yakalanmalı; açık istekler ve bağlantılar kapatılarak düzgün kapanış yapılmalıdır.
- Konteyner imajı çok aşamalı derleme ile küçük tutulmalı, root olmayan kullanıcıyla çalışmalıdır.

## Sık Yapılan Hatalar
- Olay döngüsünü bloklayan senkron işlemler.
- Doğrulanmamış req.body kullanımı.
- Hata ara katmanı olmadan async hataları yakalamamak.
- Her istekte yeni veritabanı bağlantısı açmak.
- Yakalanmayan promise reddini görmezden gelmek.

## Önerilen Paketler
- NestJS, Fastify, Hono, Express 5.
- zod, class-validator: doğrulama.
- helmet, cors, rate limit paketleri.
- pino: loglama.
- BullMQ, pg-boss: kuyruk (bkz. operations/queues.md).
- Prisma, Drizzle, Kysely: veri erişimi.
