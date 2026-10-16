# ASP.NET Core
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Hangi Durumda Kullanılır
- Projede *.csproj dosyasında Microsoft.NET.Sdk.Web SDK'sı varsa uygulanmalıdır.
- Bu dosya .NET 8 / 9 / 10 için yazılmıştır; uzun süreli destek (LTS) sürümleri tercih edilmeli, hedef framework (TargetFramework) csproj'dan okunmalıdır.
- Dil kuralları için stack/languages/csharp.md uygulanmalıdır.

## Yapı
- Proje katmanlara ayrılmalıdır (ör. Api / Web, Application, Domain, Infrastructure); küçük projelerde dikey dilim (feature folder) yapısı tercih edilebilir.
- Bağımlılıklar yerleşik DI ile kaydedilmeli; yaşam süreleri (Singleton, Scoped, Transient) doğru seçilmelidir; Singleton içine Scoped servis (ör. DbContext) enjekte edilmemelidir.
- Yapılandırma Options pattern (IOptions<T>, ValidateOnStart) ile okunmalı ve başlangıçta doğrulanmalıdır.
- Minimal API veya Controller yaklaşımlarından biri seçilmeli ve proje genelinde tutarlı kullanılmalıdır.
- Uzun süren arka plan işleri BackgroundService / IHostedService veya kuyruk kütüphanesiyle yapılmalıdır.
- Geliştirme gizli değerleri User Secrets ile, canlıda ortam değişkeni veya gizli anahtar kasası (Azure Key Vault vb.) ile tutulmalıdır; appsettings.json içine gizli değer yazılmamalıdır.

## Güvenlik
- Kimlik doğrulama için ASP.NET Core Identity, OpenID Connect veya JWT Bearer kullanılmalı; kendi parola hash algoritması yazılmamalıdır.
- Yetkilendirme politika tabanlı ([Authorize(Policy = ...)], RequireAuthorization) yapılmalı; varsayılan politika (FallbackPolicy) kimlik doğrulama gerektirmelidir.
- Kaynak bazlı yetki (bir kaydın sahibi mi) IAuthorizationService ile kontrol edilmelidir.
- Razor Pages / MVC formlarında antiforgery token kullanılmalı; çerez kimlik doğrulamalı API uç noktalarında da antiforgery doğrulaması yapılmalıdır.
- Model binding'de aşırı bağlama (overposting) önlenmeli; entity'ler doğrudan girdi modeli olarak kullanılmamalı, DTO / ViewModel kullanılmalıdır.
- Girdiler DataAnnotations veya FluentValidation ile doğrulanmalıdır.
- EF Core'da FromSqlRaw yerine FromSql / FromSqlInterpolated kullanılmalı; kullanıcı girdisi ham SQL'e eklenmemelidir.
- Razor otomatik kaçışlar; Html.Raw yalnız temizlenmiş HTML ile kullanılmalıdır.
- Hız sınırlama yerleşik RateLimiter middleware ile yapılmalıdır (bkz. security/rate-limit.md).
- HTTPS yönlendirmesi ve HSTS canlıda açık olmalıdır.
- Proxy arkasında ForwardedHeaders middleware yalnız bilinen vekiller için yapılandırılmalıdır (bkz. security/client-ip.md).
- CORS politikaları açık alan adlarıyla tanımlanmalı; AllowAnyOrigin ile AllowCredentials birlikte kullanılmamalıdır.
- Canlıda DeveloperExceptionPage kapalı olmalı; hatalar ProblemDetails formatında ayrıntısız döndürülmelidir.
- Data Protection anahtarları çok sunuculu yapıda ortak ve kalıcı bir yerde saklanmalıdır; aksi halde çerezler ve antiforgery token'ları geçersiz olur.
- Çerezler HttpOnly, Secure, SameSite ayarlı olmalıdır.
- dotnet list package --vulnerable düzenli çalıştırılmalıdır.

## Performans
- G/Ç işlemleri async / await ile yapılmalı; .Result veya .Wait() ile bloklayan çağrı yapılmamalıdır (thread havuzu tükenir).
- HttpClient IHttpClientFactory ile oluşturulmalı; her istekte new HttpClient() yapılmamalıdır.
- EF Core'da salt okuma sorgularında AsNoTracking kullanılmalı; yalnız gerekli kolonlar Select ile çekilmelidir.
- İlişkiler Include ile bilinçli yüklenmeli; lazy loading kapalı tutulmalı, N+1 önlenmelidir; çoklu Include'larda AsSplitQuery değerlendirilmelidir.
- Sık kullanılan sorgular için derlenmiş sorgu (EF.CompileQuery) değerlendirilebilir. (Opsiyonel)
- Yanıt sıkıştırma, Output Caching / HybridCache ve dağıtık önbellek (Redis) ihtiyaca göre kullanılmalıdır (bkz. code/caching.md).
- DbContext havuzu (AddDbContextPool) yüksek trafikte değerlendirilmelidir.
- Büyük dosyalar ve yanıtlar akış (stream) ile işlenmelidir.
- Native AOT ve trimming yalnız uyumlu projelerde değerlendirilmelidir. (Opsiyonel)

## Veri
- EF Core migration'ları sürümlü tutulmalı; canlıda uygulama başlangıcında otomatik Migrate() yerine deploy adımında SQL script veya migration bundle ile uygulanmalıdır.
- Veri kaybettiren migration'lar onaysız uygulanmamalıdır (bkz. database/migrations.md).
- Eşzamanlılık için concurrency token (RowVersion / xmin) kullanılmalıdır (bkz. code/idempotency.md).
- Firma bazlı veride global query filter kullanılmalıdır (bkz. security/data-isolation.md).
- Birden fazla yazma tek SaveChanges veya açık transaction ile yapılmalıdır.

## Test
- xUnit / NUnit ile birim testleri, WebApplicationFactory ile entegrasyon testleri yazılmalıdır.
- Veritabanı testleri gerçek veritabanı motoruyla (Testcontainers) yapılmalı; InMemory sağlayıcı davranış farkı nedeniyle tercih edilmemelidir.
- Nullable uyarıları ve analizörler (TreatWarningsAsErrors) derlemede açık olmalıdır. (Önerilen)

## Deploy
- dotnet publish -c Release ile derlenmeli; canlıda ASPNETCORE_ENVIRONMENT=Production olmalıdır.
- Kestrel ters vekil (Nginx / Caddy / IIS / YARP) arkasında çalıştırılmalıdır.
- Sağlık kontrolleri (AddHealthChecks, MapHealthChecks) tanımlanmalıdır (bkz. operations/uptime-incidents.md).
- Loglama ILogger ile yapılandırılmış (structured) olmalı; Serilog veya OpenTelemetry ile merkezi toplanmalıdır.
- Konteyner imajları resmi küçük imajlardan (chiseled / alpine) ve root olmayan kullanıcıyla oluşturulmalıdır.

## Sık Yapılan Hatalar
- Async kodda .Result kullanmak.
- Her istekte yeni HttpClient oluşturmak.
- Entity'yi doğrudan API girdisi / çıktısı yapmak.
- Singleton servise DbContext enjekte etmek.
- Data Protection anahtarlarını çok sunucuda paylaşmamak.
- appsettings.json'a gizli değer yazmak.
- AllowAnyOrigin + AllowCredentials.

## Önerilen Paketler
- ASP.NET Core Identity, Microsoft.Identity.Web: kimlik doğrulama.
- EF Core, Dapper: veri erişimi.
- FluentValidation: doğrulama.
- Serilog, OpenTelemetry: loglama ve izleme.
- Hangfire, MassTransit, Quartz.NET: arka plan işleri ve kuyruk (bkz. operations/queues.md).
- Polly / Microsoft.Extensions.Http.Resilience: yeniden deneme ve devre kesici (bkz. code/external-requests.md).
- Testcontainers, xUnit.
