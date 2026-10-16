# Proje Başlangıcı
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Genel Kurallar
- Yeni bir projeye başlanırken yapay zeka kod yazmadan önce bu dosyadaki soruları geliştiriciye sormalıdır.
- Sorular tek tek değil, gruplar halinde ve seçenekli sorulmalı; geliştiricinin cevaplaması kısa sürmelidir.
- Cevabı proje belgelerinden veya mevcut koddan anlaşılan sorular tekrar sorulmamalıdır.
- Geliştiricinin "bilmiyorum" veya "sonra karar veririm" dediği sorular açık karar olarak kaydedilmeli, ilgili özelliğe gelindiğinde tekrar sorulmalıdır.
- Cevaplar proje kural dosyasına (CLAUDE.md / AGENTS.md) ve proje belgesine (ör. docs/PROJE.md) yazılmalıdır.
- Cevaplara göre kılavuzun hangi dosyalarının uygulanacağı ve hangilerinin uygulanmayacağı listelenmeli, geliştiriciye kısaca onaylatılmalıdır.
- Kılavuz mevcut bir projeye sonradan eklendiyse bu sorular toptan sorulmamalı; ilgili soru, geliştirici o yapıya başladığında sorulmalıdır (bkz. ai/guide-activation.md).
- Proje türü veya kapsamı sonradan değişirse bu sorular yeniden gözden geçirilmelidir.

## Proje Kimliği
- Projenin adı, kısa amacı ve hedef kullanıcısı sorulmalıdır.
- Proje ticari mi, bireysel / kişisel mi, kurum içi mi olduğu sorulmalıdır (bkz. legal/project-assessment.md).
- Proje kimin adına yayınlanacağı (şahıs, şirket, müşteri) ve sözleşme gereği müşteriye teslim edilip edilmeyeceği sorulmalıdır.
- Hedef ülke / bölge ve dil (tek dil, çok dil) sorulmalıdır (bkz. code/i18n.md).
- Projenin canlıya ne zaman çıkacağı ve öncelikli özellikleri sorulmalıdır.

## Proje Türü
- Mobil uygulama olup olmayacağı, hangi platformlar (iOS, Android) ve hangi teknolojiyle (React Native / Expo, Flutter, native) geliştirileceği sorulmalıdır (bkz. stack/mobile/general.md).
- Projenin türü sorulmalıdır: tanıtım sitesi, blog / içerik sitesi, e-ticaret, panel / yönetim uygulaması, SaaS, mobil uygulama arka yüzü, API, araç / betik.
- Panel olup olmayacağı, varsa kimin kullanacağı (yalnız yönetici, müşteriler / firmalar, bireysel kullanıcılar) sorulmalıdır.
- Çok kiracılı yapı (her firma yalnız kendi verisini görür) gerekip gerekmediği sorulmalıdır (bkz. security/data-isolation.md).

## Kullanıcı ve Üyelik
- Giriş (login) olup olmayacağı sorulmalıdır (bkz. auth/login.md).
- Kayıt (register) olup olmayacağı ve türü sorulmalıdır: açık kayıt, onaylı başvuru, yalnız davetli (bkz. auth/register.md, auth/approval-invite.md).
- E-posta doğrulaması, parola sıfırlama ve hesap kapatma gerekip gerekmediği sorulmalıdır.
- Sosyal giriş (Google, Apple vb.) veya tek kullanımlık kodla giriş isteniyor mu sorulmalıdır. (Opsiyonel)
- Roller ve yetkiler sorulmalıdır (ör. yönetici, firma sahibi, firma kullanıcısı).

## Veri ve Altyapı
- Veritabanı tercihi ve mevcut bir veri kaynağı olup olmadığı sorulmalıdır (bkz. platforms/postgres.md).
- Barındırma (sunucu, bulut, serverless) ve alan adı / DNS yönetimi sorulmalıdır (bkz. platforms/).
- E-posta gönderimi gerekip gerekmediği ve hangi servisle yapılacağı sorulmalıdır (bkz. emails/).
- Dosya / görsel yükleme olup olmayacağı, nerede saklanacağı sorulmalıdır.
- Ödeme alınıp alınmayacağı sorulmalıdır.
- Dış servis / API entegrasyonları sorulmalıdır.
- Verilerin ne kadar süre saklanacağı ve yedekleme beklentisi sorulmalıdır (bkz. legal/data-retention.md).

## Hukuk ve Uyum
- Kişisel veri işlenip işlenmeyeceği sorulmalıdır (KVKK / GDPR) (bkz. legal/privacy-kvkk.md).
- Gerekli yasal sayfalar sorulmalıdır: kullanım koşulları, gizlilik / aydınlatma metni, çerez politikası (bkz. legal/legal-pages.md).
- Çerez ve analiz / pazarlama araçları (GTM, Analytics vb.) kullanılıp kullanılmayacağı sorulmalıdır (bkz. legal/cookies.md, platforms/google-tag-manager.md).
- Geliştiriciye yasal metinlerin taslak olduğu ve hukuki danışmanlık yerine geçmediği hatırlatılmalıdır.

## Arayüz ve Tasarım
- Hazır bir tasarım, marka rehberi veya örnek site olup olmadığı sorulmalıdır (bkz. ui/design-preferences.md).
- Açık / koyu tema, mobil öncelik ve desteklenecek cihazlar sorulmalıdır (bkz. ui/theme.md, ui/responsive.md).
- Animasyon, 3D veya canvas gibi ağır görsel öğeler isteniyor mu sorulmalıdır (bkz. ui/animation.md).

## Geliştirme Ortamı ve Çalışma Düzeni
- Kullanılacak dil / framework ve paket yöneticisi sorulmalıdır; framework seçilmemişse stack/selection.md uygulanmalı, seçildiyse stack/framework-rules.md ve ilgili framework dosyası uygulanmalıdır.
- Sunucuyu kimin başlatacağı, hangi portun kullanılacağı sorulmalıdır.
- Otomatik deploy (CI / CD) kurulup kurulmayacağı, hangi platformla ve hangi ortamlarla (test, canlı) çalışacağı sorulmalıdır; kurulacaksa entegrasyonlar yapay zeka tarafından onayla kurulmalıdır (bkz. operations/deployment.md).
- Commit / push düzeni sorulmalıdır (bkz. ai/git-commits.md).
- Zorunlu yapay zeka araçları (Context Mode, skill'ler, MCP) kurulmalı mı sorulmalıdır (bkz. ai/dev-environment.md).
- Hata takibi ve loglama aracı isteniyor mu sorulmalıdır (bkz. operations/error-tracking.md). (Opsiyonel)
- Test beklentisi sorulmalıdır (hangi düzeyde, hangi işler için). (Opsiyonel)
