# TypeScript / JavaScript
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Hangi Durumda Kullanılır
- Projede TypeScript veya JavaScript kullanılıyorsa uygulanmalıdır.
- Yeni projelerde JavaScript yerine TypeScript tercih edilmelidir. (Önerilen)

## Kurallar
- tsconfig içinde strict açık olmalıdır; noUncheckedIndexedAccess ve exactOptionalPropertyTypes değerlendirilmelidir.
- any kullanılmamalı; tipi bilinmeyen veri unknown olarak alınıp doğrulanmalıdır.
- Dış kaynaktan gelen veri (istek gövdesi, API yanıtı, JSON, ortam değişkeni) tip ataması (as) ile değil, şema doğrulamasıyla (Zod, Valibot) tiplenmelidir.
- Non-null assertion (!) ve @ts-ignore kullanılmamalı; gerekiyorsa @ts-expect-error gerekçesiyle yazılmalıdır.
- Promise'ler her zaman await edilmeli veya bilinçli olarak void ile işaretlenmeli; yakalanmayan promise bırakılmamalıdır (no-floating-promises).
- == yerine === kullanılmalıdır.
- Para ve hassas sayısal işlemler number ile yapılmamalı; tamsayı (kuruş) veya decimal kütüphanesi kullanılmalıdır.
- Tarih işlemleri için Date nesnesinin saat dilimi davranışına dikkat edilmeli; Intl veya Temporal / date-fns kullanılmalıdır (bkz. code/datetime-locale.md).
- Ortak tipler tek yerde tanımlanmalı; veritabanı şemasından veya API şemasından türetilmelidir.
- ESLint (typescript-eslint, tip bilgili kurallar) ve Prettier / Biome kullanılmalıdır.
- Derleme sırasında tip kontrolü (tsc --noEmit) CI'da çalışmalıdır.
- Paket yöneticisi tek olmalı (npm, pnpm, yarn, bun) ve lock dosyası git'te tutulmalıdır.
- Bağımlılıklar az tutulmalı; küçük işler için paket eklenmemelidir (bkz. code/dependencies.md).
- postinstall betikleri olan yeni paketler kurulmadan önce incelenmelidir (tedarik zinciri riski).
