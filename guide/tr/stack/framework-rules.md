# Framework Kuralları
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Temel İlke
- Geliştirici hangi framework ve dille çalışıyorsa yapay zeka o sisteme ait güvenlik, geliştirme, performans, test, deploy ve bakım kurallarının tamamına uymalıdır.
- Kılavuzun diğer dosyaları ne yapılması gerektiğini söyler; framework dosyaları bunun o sistemde nasıl yapılacağını söyler. İkisi birlikte uygulanmalıdır.
- Framework'ün yerleşik çözümü varsa (CSRF, doğrulama, ORM, kuyruk, önbellek, kimlik doğrulama) o kullanılmalı; aynı işi yapan özel kod yazılmamalıdır.
- Framework'ün yerleşik güvenlik korumaları kapatılmamalı, atlatılmamalıdır; kapatılması gerekiyorsa gerekçesiyle geliştiriciye onaylatılmalıdır.
- Framework'ün önerdiği klasör yapısı, isimlendirme ve kod düzeni izlenmelidir (bkz. code/architecture.md, code/naming.md).

## Algılama ve Sürüm
- Yapay zeka framework'ü ve sürümünü projeden okumalıdır (ör. package.json, composer.json, *.csproj, requirements.txt / pyproject.toml, Gemfile, go.mod).
- Kod, projede kurulu olan ana sürüme uygun yazılmalıdır; eski veya daha yeni sürüme ait API kullanılmamalıdır.
- Yapay zekanın bilgisi kurulu sürümden eski olabilir; emin olunmayan konularda framework'ün resmi belgesi veya projedeki paketin kendi belgeleri kontrol edilmelidir.
- Kullanılan sürüm desteği bitmiş (EOL) veya bitmek üzereyse geliştiriciye bildirilmelidir.
- Framework ve sürümü proje kural dosyasına yazılmalıdır.
- Projede birden fazla framework varsa (ör. Next.js ön yüz + Laravel API) her bölüm kendi framework kurallarıyla geliştirilmelidir.

## Her Framework İçin Kontrol Edilecekler
- Güvenlik: kimlik doğrulama, yetkilendirme, CSRF, XSS (şablon kaçışlama), SQL enjeksiyonu (ORM / parametreli sorgu), toplu atama (mass assignment), dosya yükleme, gizli değişkenler, güvenlik başlıkları, hata ayrıntısının canlıda gizlenmesi, debug modunun kapalı olması.
- Geliştirme: önerilen proje yapısı, katmanlar, bağımlılık enjeksiyonu, doğrulama, hata yönetimi, loglama, yapılandırma ve ortam ayrımı.
- Performans: sorgu optimizasyonu ve N+1, önbellek katmanları, sunucu / istemci ayrımı, statik üretim, paket boyutu, arka plan işleri, bağlantı havuzu.
- Veri: ORM, migration, seed, transaction kullanımı.
- Test: framework'ün test araçları ve önerilen test düzeni.
- Deploy: üretim derlemesi, ortam değişkenleri, önbelleklerin ısıtılması, sağlık kontrolü, sıfır kesintili geçiş.
- Bakım: sürüm yükseltme yolu, kullanımdan kalkan özellikler, güvenlik bültenleri.

## Framework Dosyası Yoksa
- Kılavuzda kullanılan framework için ayrı dosya yoksa yapay zeka yukarıdaki başlıkları o framework'ün resmi belgeleri ve yerleşik çözümleriyle karşılamalıdır.
- Bu durumda geliştiriciye framework dosyasının eksik olduğu söylenmeli; projede öğrenilenler kılavuza yeni framework dosyası olarak eklenmesi önerilmelidir.

## Framework Dosyalarının Yazımı
- Her framework dosyasının başında hangi ana sürüm için yazıldığı belirtilmelidir.
- Dosya bölümleri aynı sırayla olmalıdır: Hangi Durumda Kullanılır, Yapı, Güvenlik, Performans, Veri, Test, Deploy, Sık Yapılan Hatalar, Önerilen Paketler.
- Framework dosyaları genel kılavuz dosyalarını tekrar etmemeli, onlara bağlantı vermelidir.
