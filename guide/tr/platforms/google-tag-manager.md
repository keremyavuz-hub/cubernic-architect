# Google Tag Manager Yönetimi
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Genel Yapılacaklar
- Google Tag Manager (GTM), analiz, reklam ve dönüşüm etiketlerini koda dokunmadan yönetmek için kullanılmalıdır: https://tagmanager.google.com
- Projede GTM kullanılıp kullanılmayacağı, yoksa etiketlerin doğrudan kodla mı ekleneceği proje başında geliştiriciye sorulmalıdır.
- GTM'ye eklenen her etiket sitede çalışan koddur; GTM'ye kimin hangi yetkiyle erişeceği güvenlik kararı olarak ele alınmalıdır.
- GTM kapsayıcı kimliği (GTM-XXXXXXX) ortam değişkeninde tutulmalıdır (ör. NEXT_PUBLIC_GTM_ID).
- GTM belgeleri: https://support.google.com/tagmanager

## Hesap ve Kapsayıcı Yapısı
- Şirket için tek bir GTM hesabı açılmalı, her web sitesi veya uygulama için ayrı kapsayıcı (container) oluşturulmalıdır.
- Web, iOS, Android ve sunucu tarafı için ayrı kapsayıcı türleri kullanılmalıdır.
- Hesap ve kapsayıcı adları marka ve alan adını belirtmelidir (ör. Markapolitan / dash.markapolitan.com).
- GTM hesabının sahibi şirketin kurumsal Google hesabı olmalı, kişisel hesap veya ajans hesabı sahip yapılmamalıdır.

## Kullanıcılar ve Yetkiler
- Kullanıcılar kendi Google hesaplarıyla ve en az yetkiyle eklenmelidir (Okuma, Düzenleme, Onaylama, Yayınlama).
- Yayınlama (Publish) yetkisi yalnızca sorumlu kişilerde olmalıdır.
- Ajans veya dış ekip yalnızca Düzenleme yetkisiyle eklenmeli, yayın şirket içinden yapılmalıdır. (Önerilen)
- Hesap yönetici yetkisi en az iki şirket çalışanında olmalı, tek kişiye bağlı kalınmamalıdır.
- Ayrılan çalışan ve iş bitirilen ajansların erişimi hemen kaldırılmalıdır.
- Kullanıcı listesi periyodik olarak gözden geçirilmelidir.

## Kurulum
- GTM kodu sayfanın head bölümüne mümkün olduğunca üstte, noscript parçası body açılışına eklenmelidir.
- Next.js projelerinde @next/third-parties paketindeki GoogleTagManager bileşeni kullanılabilir. (Önerilen)
- GTM kodu yalnızca bir kez yüklenmeli, aynı sayfada GA4 veya piksel kodu hem doğrudan hem GTM ile eklenip çift sayım yapılmamalıdır.
- GTM yalnızca canlı ortamda veya GTM ortamları (Environments) ile ayrılmış şekilde yüklenmelidir.
- Panel, yönetim ve giriş gerektiren sayfalarda GTM'nin gerekip gerekmediği ayrıca değerlendirilmeli, gereksizse yüklenmemelidir.
- Content-Security-Policy kullanılıyorsa GTM ve etiketlerin yüklediği alan adları izin listesine eklenmeli, nonce desteği ayarlanmalıdır.

## Ortamlar ve Yayınlama
- Geliştirme, hazırlık (staging) ve canlı için GTM Environments kullanılmalı, test ortamına ayrı ortam parçacığı (gtm_auth, gtm_preview) eklenmelidir.
- Değişiklikler doğrudan varsayılan çalışma alanında değil, amaca göre adlandırılmış ayrı çalışma alanlarında (Workspaces) yapılmalıdır.
- Her değişiklik yayından önce Önizleme (Preview) ve Tag Assistant ile test edilmelidir: https://tagassistant.google.com
- Her yayın anlamlı bir sürüm adı ve açıklamasıyla yapılmalıdır (ne değişti, neden, kim istedi).
- Sorun çıkarsa önceki sürüme geri dönülebilmesi için sürüm geçmişi korunmalıdır.
- Kapsayıcı periyodik olarak JSON olarak dışa aktarılıp yedeklenmelidir (Yönetici > Kapsayıcıyı Dışa Aktar). (Önerilen)
- Büyük değişikliklerde yayın, trafiğin az olduğu saatlerde yapılmalıdır.

## Adlandırma ve Düzen
- Etiket, tetikleyici ve değişkenler için tutarlı bir adlandırma kuralı kullanılmalıdır (ör. "GA4 - Event - form_submit", "Trigger - Click - CTA", "DLV - user_type").
- Etiketler klasörlere ayrılmalıdır (ör. GA4, Google Ads, Meta, Consent, Yardımcı).
- Her etiketin notlar alanına amacı ve sahibi yazılmalıdır.
- Kullanılmayan etiket, tetikleyici ve değişkenler düzenli olarak silinmelidir.
- Etiket listesi ve ölçüm planı projenin belgelerinde tutulmalıdır.

## Veri Katmanı (dataLayer)
- Ölçüm, sayfa yapısına (CSS seçicilerine) değil, uygulamanın gönderdiği dataLayer olaylarına dayanmalıdır.
- dataLayer olay adları ve alanları önceden bir ölçüm planında tanımlanmalıdır (ör. sign_up, login, generate_lead, purchase).
- Mümkün olduğunda GA4 önerilen olay adları kullanılmalıdır: https://support.google.com/analytics/answer/9267735
- E-ticaret olayları GA4 e-ticaret şemasına uygun gönderilmelidir (view_item, add_to_cart, begin_checkout, purchase).
- dataLayer'a kişisel veri (e-posta, telefon, ad soyad, TC kimlik) açık metin olarak yazılmamalıdır.
- Gelişmiş dönüşümler (enhanced conversions) için kullanıcı verisi gerekiyorsa yalnızca izin alınmışsa ve özetlenmiş (hash) olarak gönderilmelidir.
- Tek sayfa uygulamalarda (Next.js, React) sayfa değişimleri için ayrı sayfa görüntüleme olayı gönderilmeli veya GA4 geçmiş değişikliği (history change) ayarı kontrol edilmelidir.
- dataLayer olayları uygulamada tek bir yardımcı fonksiyondan gönderilmelidir.

## İzin Yönetimi (Consent Mode)
- Çerez izni olmadan analiz ve reklam etiketleri çalışmamalıdır.
- Google Consent Mode v2 kurulmalı, varsayılan izin durumu (default) GTM yüklenmeden önce "denied" olarak ayarlanmalıdır.
- Kullanıcı izin verdiğinde izin güncellemesi (update) gönderilmelidir: ad_storage, analytics_storage, ad_user_data, ad_personalization.
- Çerez izin platformu (CMP) kullanılıyorsa GTM şablon galerisindeki resmî CMP şablonu tercih edilmelidir.
- Google dışı etiketler (Meta, TikTok, Hotjar) izin durumuna göre ek izin kontrolü (Additional consent checks) ile tetiklenmelidir.
- İzin akışı Tag Assistant'ın Consent sekmesiyle test edilmelidir.
- Çerez ve izin kuralları legal/cookies.md dosyasına göre uygulanmalıdır.

## Güvenlik
- Özel HTML (Custom HTML) etiketleri ve özel JavaScript değişkenleri en aza indirilmeli, mümkünse resmî veya galeri şablonları kullanılmalıdır.
- Galeriden eklenen topluluk şablonlarının izinleri (hangi alan adlarına istek attığı, hangi verilere eriştiği) eklemeden önce incelenmelidir.
- Kapsayıcıda izin listesi / engelleme listesi (allowlist / blocklist) ile istenmeyen etiket türleri engellenebilir. (Opsiyonel)
- GTM etiketleri giriş formlarına, parola alanlarına veya ödeme sayfalarındaki kart bilgisi alanlarına erişmemelidir.
- Ödeme sayfalarında yalnızca gerekli etiketler çalışmalıdır (PCI DSS).
- Yeni bir pazarlama aracı eklendiğinde çerez listesi, aydınlatma metni ve CSP güncellenmelidir.

## Performans
- Etiket sayısı ve ağırlığı izlenmeli, sayfa hızına etkisi Lighthouse veya PageSpeed ile ölçülmelidir.
- Kritik olmayan etiketler sayfa yüklendikten sonra (Window Loaded) tetiklenmelidir.
- Aynı işi yapan çift etiketler kaldırılmalıdır.
- Yüksek trafikli veya reklam yoğun projelerde sunucu tarafı GTM (server-side tagging) önerilmelidir; tarayıcıdaki betik yükünü azaltır, veri kontrolünü artırır. (Opsiyonel)

## Sunucu Tarafı GTM (Server-Side Tagging)
- Sunucu tarafı GTM için ayrı bir sunucu kapsayıcısı oluşturulmalı ve kendi alt alan adında (ör. sgtm.alanadi.com) barındırılmalıdır.
- Barındırma için Google Cloud Run, Stape veya benzeri yönetilen hizmetler önerilebilir; maliyet geliştiriciye belirtilmelidir.
- Sunucu kapsayıcısına gelen istekler doğrulanmalı, istenmeyen istemcilerden veri kabul edilmemelidir.
- Kişisel veriler sunucu kapsayıcısında üçüncü taraflara gönderilmeden önce süzülmeli veya özetlenmelidir.
- Meta Conversions API, Google Ads gelişmiş dönüşümler gibi sunucu tarafı entegrasyonlar bu kapsayıcı üzerinden yapılmalıdır.

## Bağlantılı Hesaplar
- GA4 mülkü ile GTM ölçüm kimliği eşleştirilmeli, GA4 verisinin doğru mülke gittiği test edilmelidir.
- Google Ads, Merchant Center ve GA4 bağlantıları ilgili panellerden kurulmalıdır.
- Google Search Console ile GA4 bağlantısı kurulmalıdır. (Önerilen)
- Tüm pazarlama hesaplarının (GTM, GA4, Ads, Meta Business) sahipliği şirkette olmalı ve listesi belgelenmelidir.

## Önerilen Platformlar
- Basit projelerde GA4 doğrudan kodla eklenebilir; GTM'ye gerek olmayabilir. (Opsiyonel)
- Sunucu tarafı GTM barındırmak için Stape (kolay kurulum) veya Google Cloud Run (esnek, teknik bilgi ister) önerilebilir.
- Gizlilik odaklı, çerezsiz analiz isteniyorsa GTM ve GA4 yerine Plausible, Umami veya PostHog önerilebilir.
- Etiket denetimi için Tag Assistant, Omnibug veya ObservePoint gibi araçlar önerilebilir.
