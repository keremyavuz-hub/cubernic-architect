# Laravel
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Hangi Durumda Kullanılır
- Projede composer.json içinde laravel/framework paketi varsa uygulanmalıdır.
- Bu dosya Laravel 11 / 12 için yazılmıştır; kurulu sürüm composer.lock'tan okunmalı, yükseltme notları kontrol edilmelidir.
- Dil kuralları için stack/languages/php.md uygulanmalıdır.

## Yapı
- Laravel'in varsayılan klasör yapısı korunmalıdır; iş mantığı controller'da değil, Action / Service sınıflarında tutulmalıdır.
- Controller'lar ince tutulmalı: doğrulama Form Request'te, yetki Policy'de, iş mantığı servis / action sınıfında, yanıt Resource ile olmalıdır.
- Rotalar adlandırılmalı (->name()) ve bağlantılar route() ile oluşturulmalıdır.
- Yapılandırma değerleri config/ dosyalarından okunmalı; env() yalnız config dosyalarında kullanılmalıdır (config:cache sonrası env() null döner).
- Olaylar ve dinleyiciler (Event / Listener) yan etkileri ayırmak için kullanılmalıdır (bkz. code/architecture.md).
- Bağımlılıklar service container ile enjekte edilmelidir.

## Güvenlik
- APP_DEBUG canlıda kesinlikle false olmalıdır; açık kalırsa ortam değişkenleri ve yığın izleri sızabilir.
- APP_KEY güçlü, gizli olmalı ve ortamlar arasında paylaşılmamalıdır; değiştirilmesi şifreli verileri ve oturumları geçersiz kılar.
- Formlarda @csrf kullanılmalı; VerifyCsrfToken istisnaları yalnız imzası doğrulanan webhook'lar için tanımlanmalıdır.
- Modellerde $fillable açıkça tanımlanmalı; $guarded = [] kullanılmamalı, request()->all() doğrudan create / update'e verilmemelidir (mass assignment).
- Doğrulama sonrası yalnız $request->validated() verisi kullanılmalıdır.
- Blade'de {{ }} kullanılmalı; {!! !!} yalnız temizlenmiş HTML için kullanılmalıdır.
- Ham sorgularda (DB::raw, whereRaw, orderByRaw) kullanıcı girdisi bağlanan parametreyle verilmelidir; sıralama kolonu izin listesinden seçilmelidir.
- Yetkilendirme Policy / Gate ile yapılmalı; her controller işleminde authorize() veya can middleware'i kullanılmalıdır.
- Route model binding firma kapsamıyla birlikte kullanılmalıdır (scopeBindings veya global scope) (bkz. security/data-isolation.md).
- Kimlik doğrulama için resmi paketler (Breeze, Jetstream, Fortify, Sanctum) tercih edilmelidir; API token'ları Sanctum ile yetenek (ability) sınırlı verilmelidir.
- Hız sınırlama RateLimiter ve throttle middleware ile yapılmalıdır (bkz. security/rate-limit.md).
- Dosya yüklemede mimes / max kuralları kullanılmalı; dosyalar storage/app/private altında tutulmalı, herkese açık olanlar için storage:link bilinçli kullanılmalıdır (bkz. files/uploads.md).
- Şifreli tutulması gereken alanlar encrypted cast ile saklanmalıdır.
- Proxy arkasında TrustProxies yalnız gerçek vekil IP'leri için ayarlanmalıdır (bkz. security/client-ip.md).
- Oturum çerezi secure, http_only ve same_site ayarlı olmalıdır.
- .env dosyası ve storage/ klasörü web kökünden erişilemez olmalı; web kökü yalnız public/ olmalıdır.
- composer audit düzenli çalıştırılmalıdır.

## Performans
- N+1 sorguları eager loading (with, load) ile önlenmeli; geliştirmede Model::preventLazyLoading() açılmalıdır.
- Model::preventSilentlyDiscardingAttributes() ve preventAccessingMissingAttributes() geliştirmede açılmalıdır. (Önerilen)
- Büyük veri işlemleri chunk / chunkById / lazy / cursor ile yapılmalıdır.
- Canlıda config:cache, route:cache, view:cache, event:cache ve composer --optimize-autoloader kullanılmalıdır (php artisan optimize).
- OPcache açık olmalıdır; uygun projelerde Laravel Octane değerlendirilebilir (Octane'de durum sızıntısına dikkat edilmelidir). (Opsiyonel)
- Önbellek ve oturum sürücüsü canlıda dosya yerine Redis veya veritabanı olmalıdır (çok sunuculu yapıda zorunludur).
- Uzun işler kuyruğa verilmelidir (ShouldQueue) (bkz. operations/queues.md).
- Sık kullanılan sorgular Cache::remember / flexible ile önbelleğe alınmalı, ilgili veride değişiklikte temizlenmelidir.
- Sayfalama paginate / cursorPaginate ile yapılmalıdır (bkz. ui/data-tables.md).
- Vite ile varlıklar derlenmeli, canlıda npm run build çıktısı kullanılmalıdır.

## Veri
- Şema değişiklikleri migration ile yapılmalı; canlıda migrate --force yalnız deploy akışında çalışmalıdır.
- migrate:fresh, migrate:reset, db:wipe gibi komutlar yapay zeka tarafından asla çalıştırılmamalıdır (bkz. ai/destructive-actions.md).
- Birden fazla yazma işlemi DB::transaction içinde yapılmalıdır.
- Soft delete gereken modellerde SoftDeletes kullanılmalı, kalıcı silme saklama süresine göre yapılmalıdır (bkz. legal/data-retention.md).
- Factory ve seeder'lar test / geliştirme verisi için kullanılmalı; canlıda test verisi oluşturulmamalıdır.
- Firma bazlı modellerde global scope ile firma süzmesi yapılmalıdır.

## Kuyruk ve Zamanlama
- Kuyruk işleri ShouldQueue ile tanımlanmalı; tries, backoff, timeout, maxExceptions değerleri her işte belirlenmelidir.
- Tekil olması gereken işler ShouldBeUnique, aynı kaydı değiştiren işler WithoutOverlapping ile korunmalıdır.
- Veritabanı transaction'ı içinde kuyruğa eklenen işler afterCommit ile eklenmelidir.
- Başarısız işler failed_jobs tablosunda tutulmalı, queue:retry ile yeniden çalıştırılabilmelidir; yapay zeka queue:flush çalıştırmamalıdır.
- Redis kuyruğunda Horizon kullanılmalı, Horizon paneli yalnız yöneticilere açık olmalıdır.
- Zamanlanmış görevler routes/console.php içinde Schedule ile tanımlanmalı; çok sunuculu yapıda onOneServer, uzun görevlerde withoutOverlapping kullanılmalıdır.
- Deploy sonrası queue:restart çalıştırılmalıdır.

## Test
- Pest veya PHPUnit kullanılmalıdır; testler RefreshDatabase / DatabaseTransactions ile ayrı test veritabanında çalışmalıdır.
- Mail::fake, Queue::fake, Http::fake, Storage::fake ile dış etkiler taklit edilmelidir.
- Policy ve yetki kuralları için testler yazılmalıdır.
- Larastan / PHPStan ve Laravel Pint kod kalitesi için kullanılmalıdır.

## Deploy
- Deploy sırası: composer install --no-dev --optimize-autoloader, npm run build, migrate --force, optimize, queue:restart.
- Bakım modu (down / up) gerektiğinde gizli bypass anahtarıyla kullanılmalıdır.
- Sıfır kesintili deploy için sürüm klasörleri ve sembolik bağlantı (Envoyer, Deployer) veya konteyner kullanılmalıdır.
- storage/ ve bootstrap/cache yazılabilir, kod dosyaları web sunucusu kullanıcısı tarafından yazılamaz olmalıdır.
- Log kanalı canlıda günlük dönen dosya veya merkezi log servisi olmalıdır (bkz. operations/logging.md).

## Sık Yapılan Hatalar
- APP_DEBUG=true ile yayına çıkmak.
- $guarded = [] ve request()->all() ile toplu atama.
- Controller'da env() kullanmak.
- Policy olmadan route model binding ile başka firmanın kaydına erişime izin vermek.
- Döngü içinde ilişki çağırarak N+1 sorgu üretmek.
- Kuyruk worker'larını deploy sonrası yeniden başlatmamak.
- Telescope / Debugbar'ı canlıda açık bırakmak.

## Önerilen Paketler
- Laravel Sanctum, Fortify, Breeze: kimlik doğrulama.
- Laravel Horizon: Redis kuyruk yönetimi.
- Laravel Pulse: performans izleme. (Opsiyonel)
- Larastan, Laravel Pint, Pest.
- spatie/laravel-permission: rol ve yetki (bkz. auth/roles-permissions.md).
- spatie/laravel-activitylog: audit log (bkz. operations/audit-log.md).
- spatie/laravel-backup: yedekleme (bkz. database/backup.md).
- Sentry Laravel: hata takibi. (Opsiyonel)
