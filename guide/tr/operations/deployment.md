# Otomatik Deploy (CI / CD)
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Genel Kurallar
- Proje kurulurken otomatik deploy sisteminin kurulup kurulmayacağı geliştiriciye sorulmalıdır (bkz. project-start.md).
- Kurulacaksa yapay zeka gerekli entegrasyonları (depo, CI servisi, barındırma, DNS, gizli değişkenler) kurabilmeli; her dış sisteme yapılacak değişiklik önce listelenip geliştiriciye onaylatılmalıdır.
- Deploy akışı belgelenmelidir (ör. docs/DEPLOY.md): hangi dal nereye gider, hangi adımlar çalışır, geri alma nasıl yapılır.
- Kurulum yapay zeka tarafından yapılsa bile canlı ortama ilk deploy geliştiricinin onayıyla başlatılmalıdır.

## Ortamlar
- En az iki ortam önerilmelidir: önizleme / test (staging) ve canlı (production). (Önerilen)
- Her ortamın kendi veritabanı, alan adı ve gizli değişkenleri olmalı; test ortamı canlı veriye yazmamalıdır.
- Dal düzeni belirlenmelidir (ör. main → canlı, dev → test, her PR → önizleme).
- Canlıya deploy için onay adımı (manuel onay, korumalı dal) konmalıdır. (Önerilen)

## Akış Adımları
- Her deploy öncesi otomatik olarak bağımlılık kurulumu, lint, tip kontrolü, testler ve derleme çalışmalıdır; biri başarısız olursa deploy durmalıdır.
- Veritabanı migration'ları deploy akışında kontrollü çalışmalı; veri kaybettiren migration otomatik çalışmamalı, onay gerektirmelidir (bkz. ai/destructive-actions.md).
- Deploy kesintisiz (zero-downtime) yapılmalıdır: iki örnek arasında sırayla geçiş, sağlık kontrolü sonrası trafik yönlendirme. (Önerilen)
- Deploy sonrası sağlık kontrolü (health check) yapılmalı; başarısızsa otomatik geri alma veya bildirim olmalıdır.
- Her deploy sürüm / commit bilgisiyle kaydedilmeli; önceki sürüme tek adımda dönülebilmelidir.
- Deploy sonucu (başarılı / başarısız) geliştiriciye bildirilmelidir (e-posta, Slack, Telegram vb.). (Opsiyonel)

## Gizli Değişkenler
- Deploy için gereken anahtarlar CI servisinin gizli değişken alanında (ör. GitHub Secrets) tutulmalı, depoya yazılmamalıdır.
- Gizli değerleri geliştirici kendisi girmelidir; yapay zeka yalnızca hangi değişkenin, nereden alınacağını ve hangi yetkiyle oluşturulacağını yazmalıdır (bkz. ai/secret-handling.md, setup/env-catalog.md).
- Deploy anahtarları en az yetkiyle oluşturulmalıdır (ör. yalnız deploy kullanıcısı, yalnız ilgili sunucu / proje).
- Sunucuya SSH ile deploy yapılıyorsa ayrı bir deploy anahtarı ve kısıtlı kullanıcı kullanılmalıdır.

## Güvenlik
- CI'da çalışan üçüncü taraf eylemler (actions) sabit sürüm veya commit ile kullanılmalıdır.
- Dışarıdan gelen PR'larda gizli değişkenler kullanılmamalıdır.
- Derleme çıktısında ve loglarda gizli değer görünmemelidir.
- Bağımlılık ve güvenlik taraması akışa eklenmelidir. (Önerilen)

## Önerilen Platformlar
- GitHub Actions: depo GitHub'daysa genel amaçlı CI / CD; sunucuya SSH ile deploy, Docker imajı oluşturma.
- Vercel / Netlify: Next.js ve statik siteler için otomatik önizleme ve canlı deploy.
- Cloudflare Pages / Workers: statik siteler ve edge uygulamaları için (bkz. platforms/cloudflare.md).
- Coolify / Dokploy / Kamal: kendi sunucusunda (ör. Hetzner) Heroku benzeri deploy (bkz. platforms/hetzner.md). (Opsiyonel)
- GitLab CI: depo GitLab'daysa.

## Mobil Uygulama Varsa
- Mobil derleme ve mağaza gönderimi ayrı bir akışla otomatik yapılmalıdır (fastlane, EAS, Codemagic, Xcode Cloud) (bkz. stack/mobile/general.md).
- İmzalama anahtarları ve sertifikalar CI gizli değişkenlerinde tutulmalı, ayrıca güvenli kasada yedeklenmelidir.
- Yayın önce test kanalına, sonra aşamalı olarak canlıya yapılmalıdır.
- Sunucu tarafı deploy'ları eski uygulama sürümlerini bozmamalıdır.
