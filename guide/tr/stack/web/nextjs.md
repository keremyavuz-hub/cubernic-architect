# Next.js
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Hangi Durumda Kullanılır
- Projede package.json içinde next paketi varsa uygulanmalıdır.
- Bu dosya Next.js 15 / 16 ve App Router için yazılmıştır; Pages Router kullanan projelerde App Router'a özgü maddeler uyarlanmalıdır.
- Kurulu sürüm package.json'dan okunmalı; sürüme özgü değişiklikler (ör. middleware.js yerine proxy.js, async params / cookies / headers) resmi yükseltme notlarından kontrol edilmelidir.
- Dil kuralları için stack/languages/typescript.md uygulanmalıdır.

## Yapı
- App Router klasör düzeni kullanılmalıdır: app/ altında rotalar, components/ altında paylaşılan bileşenler, lib/ altında sunucu tarafı iş mantığı.
- Varsayılan olarak Server Component kullanılmalı; "use client" yalnız etkileşim, tarayıcı API'si veya durum gerektiren en küçük bileşene eklenmelidir.
- İstemci bileşenine yalnız gerekli ve serileştirilebilir veriler prop olarak geçirilmelidir; tüm kayıt nesneleri istemciye taşınmamalıdır.
- Sunucuya özel kod (veritabanı, gizli anahtar kullanan modüller) "server-only" paketiyle işaretlenmeli; yanlışlıkla istemci paketine girmesi engellenmelidir.
- Veri değiştiren işlemler Server Action veya Route Handler ile yapılmalı; iş mantığı lib/ altında, action / handler yalnız giriş noktası olmalıdır.
- layout, page, loading, error, not-found dosyaları amacına uygun kullanılmalı; her rota grubunda error.js ve uygun yerlerde loading.js bulunmalıdır.
- Rota grupları ((grup)) ve özel klasörler (_klasor) düzen için kullanılmalıdır.
- Ortak kimlik / yönlendirme kontrolleri proxy (middleware) dosyasında yapılabilir; ancak yetki kontrolü yalnız proxy'ye bırakılmamalı, veri erişim katmanında tekrar yapılmalıdır.
- Ortam değişkenlerinde NEXT_PUBLIC_ önekli değişkenler istemci paketine gömülür; gizli değer asla NEXT_PUBLIC_ önekiyle tanımlanmamalıdır.

## Güvenlik
- Server Action'lar herkese açık POST uç noktalarıdır; her action içinde oturum ve yetki kontrolü yeniden yapılmalıdır.
- Server Action girdileri şema ile doğrulanmalıdır (ör. Zod); istemciden gelen gizli alanlara (id, firma kimliği, fiyat, rol) güvenilmemelidir.
- Server Action'larda Next.js'in yerleşik Origin kontrolüne ek olarak durum değiştiren Route Handler'larda CSRF / Origin kontrolü yapılmalıdır (bkz. security/csrf.md); serverActions.allowedOrigins gereksiz genişletilmemelidir.
- Yetkilendirme proxy / middleware'e dayanmamalıdır; middleware atlatma açıkları (ör. CVE-2025-29927) geçmişte görülmüştür, kontrol veri erişim katmanında da yapılmalıdır.
- Veri erişim katmanı (DAL) oluşturulmalı; oturum doğrulaması ve firma süzmesi bu katmanda merkezi yapılmalıdır (bkz. security/data-isolation.md).
- Sunucudan istemciye dönen veride hassas alanlar (parola hash'i, token, iç notlar) bulunmamalı; DTO / seçili alanlar döndürülmelidir.
- React taint API'leri (experimental_taintObjectReference) hassas nesnelerin istemciye geçmesini engellemek için değerlendirilebilir. (Opsiyonel)
- dangerouslySetInnerHTML yalnız temizlenmiş HTML ile kullanılmalıdır (ör. DOMPurify / sanitize-html).
- next/image remotePatterns yalnız güvenilen alan adlarına izin vermelidir; '**' joker karakteri kullanılmamalıdır (görsel optimizasyonu SSRF ve maliyet riski).
- Güvenlik başlıkları next.config headers() ile tanımlanmalı; gerekiyorsa nonce tabanlı CSP proxy'de üretilmelidir (bkz. security/headers.md).
- Çerezler cookies() ile httpOnly, secure, sameSite ayarlı yazılmalıdır.
- redirect() içinde kullanıcıdan gelen adres kullanılıyorsa açık yönlendirme engellenmeli, yalnız iç yollara izin verilmelidir.
- Hata sayfalarında ve error.js'de iç hata ayrıntısı gösterilmemeli; production'da digest ile loglanmalıdır.
- Kaynak haritaları (productionBrowserSourceMaps) gerekmedikçe herkese açık yayınlanmamalıdır.
- poweredByHeader kapatılmalıdır.

## Performans
- Veri sunucuda, kullanıldığı bileşende çekilmeli; bağımsız istekler Promise.all ile paralel yapılmalı, şelale (waterfall) oluşturulmamalıdır.
- Aynı istekte tekrar eden veri çağrıları React cache() ile tekilleştirilmelidir.
- Önbellek davranışı bilinçli seçilmelidir: Next.js 15+ sürümlerinde fetch ve rotalar varsayılan olarak önbelleğe alınmaz; statik olabilecek sayfalar statik / ISR yapılmalı, kullanıcıya özel sayfalar dinamik kalmalıdır.
- Kullanılan sürümde "use cache", cacheLife, cacheTag gibi önbellek direktifleri varsa bunlar resmi belgeye göre kullanılmalıdır.
- Veri değiştiğinde revalidatePath / revalidateTag ile ilgili önbellek temizlenmelidir (bkz. code/caching.md).
- Yavaş bölümler Suspense ile sarılmalı, sayfanın geri kalanı akışla (streaming) önce gönderilmelidir.
- Görseller next/image ile, yazı tipleri next/font ile yüklenmeli; LCP görseline priority / fetchPriority verilmelidir.
- Ağır istemci kütüphaneleri (grafik, harita, editör, 3D) next/dynamic ile gerektiğinde yüklenmelidir (bkz. ui/animation.md).
- Üçüncü taraf betikler next/script ile uygun strateji (afterInteractive, lazyOnload) kullanılarak yüklenmelidir.
- Paket boyutu @next/bundle-analyzer ile düzenli kontrol edilmelidir.
- Link bileşeninin ön yükleme (prefetch) davranışı çok sayıda bağlantı içeren sayfalarda gözden geçirilmelidir.
- Sunucusuz ortamda veritabanı bağlantı havuzu dikkatle ayarlanmalı; her istekte yeni bağlantı açılmamalıdır.
- after() ile yanıt gönderildikten sonra yapılacak işler (log, analiz) yanıt süresini uzatmamalıdır; uzun işler kuyruğa verilmelidir (bkz. operations/queues.md).

## Veri
- ORM veya sorgu katmanı tek yerde tanımlanmalıdır (ör. Drizzle, Prisma, postgres / pg); veritabanı istemcisi geliştirme modunda sıcak yeniden yüklemede çoğalmaması için global tekil tutulmalıdır.
- Migration'lar ORM aracıyla veya SQL dosyalarıyla sürümlü yapılmalıdır (bkz. database/migrations.md).
- Server Action içinde birden fazla yazma tek transaction'da yapılmalıdır.

## Formlar
- Formlar Server Action + useActionState ile kurulmalı; bekleme durumu useFormStatus veya isPending ile gösterilmelidir (bkz. forms/buttons-loading.md).
- İyimser arayüz gerekiyorsa useOptimistic kullanılmalıdır. (Opsiyonel)
- Sunucu doğrulama hataları alan bazında döndürülmeli ve form değerleri korunmalıdır (bkz. forms/validations.md).

## Test
- Birim testleri için Vitest veya Jest, uçtan uca testler için Playwright kullanılmalıdır.
- Server Action ve DAL fonksiyonları doğrudan çağrılarak test edilebilmelidir.
- Async Server Component'ler için uçtan uca test tercih edilmelidir.

## Deploy
- next build hatasız ve uyarıları incelenmiş olmalıdır; tip ve lint hataları derlemede yok sayılmamalıdır (ignoreBuildErrors kullanılmamalıdır).
- Kendi sunucuda çalıştırılıyorsa output: "standalone" kullanılmalı, süreç yöneticisi ve ters vekil (Caddy / Nginx) arkasında çalışmalıdır.
- Birden fazla örnek çalışıyorsa önbellek ve ISR verisi paylaşılmalı (cacheHandler) veya tutarsızlık kabul edilmelidir.
- Birden fazla örnekte Server Action şifreleme anahtarı (NEXT_SERVER_ACTIONS_ENCRYPTION_KEY) ve derleme kimliği sabit tutulmalıdır.
- Statik dosyalar ve _next/static uzun süreli önbellekle sunulmalıdır.
- Vercel kullanılıyorsa fonksiyon süresi, bölge ve maliyet sınırları kontrol edilmelidir.

## Sık Yapılan Hatalar
- Server Action'da yetki kontrolünü unutmak, yalnız arayüzde düğmeyi gizlemek.
- Gizli anahtarı NEXT_PUBLIC_ ile tanımlamak.
- Tüm sayfayı "use client" yapmak.
- Kullanıcıya özel veriyi statik / paylaşılan önbelleğe almak.
- Sunucu ve istemcide farklı sonuç veren değerlerle (Date, Math.random, saat dilimi) hydration hatası oluşturmak.
- useEffect içinde veri çekmek; veri sunucuda çekilmelidir.
- Hata sınırı (error.js) eklememek.
- remotePatterns'i tüm alan adlarına açmak.

## Önerilen Paketler
- zod: girdi doğrulama.
- server-only: sunucu kodunun istemciye sızmasını engelleme.
- Auth.js, Better Auth, Lucia benzeri yaklaşım veya kendi oturum katmanı (bkz. auth/session.md).
- Drizzle ORM, Prisma, postgres: veri erişimi.
- next-intl: çok dilli yapı (bkz. code/i18n.md).
- @next/bundle-analyzer: paket boyutu analizi.
- @sentry/nextjs: hata takibi (bkz. operations/error-tracking.md). (Opsiyonel)
