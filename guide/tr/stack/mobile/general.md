# Mobil Uygulama Genel Kuralları
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Hangi Durumda Kullanılır
- Projede iOS veya Android uygulaması geliştiriliyorsa, kullanılan teknolojiden bağımsız olarak uygulanmalıdır.
- Kullanılan teknolojiye göre ayrıca stack/mobile/ altındaki ilgili dosya uygulanmalıdır.

## Sürümler ve Uyumluluk
- Web'den farklı olarak eski uygulama sürümleri aylarca kullanılmaya devam eder; API değişiklikleri geriye uyumlu olmalıdır (bkz. code/api-design.md).
- Uygulama her istekte sürüm ve platform bilgisini göndermelidir (ör. X-App-Version, X-Platform).
- Zorunlu güncelleme mekanizması ilk sürümden itibaren bulunmalıdır: sunucu en düşük desteklenen sürümü bildirmeli, eski sürümde kullanıcı güncellemeye yönlendirilmelidir.
- İsteğe bağlı güncelleme bildirimi ayrıca sunulabilir. (Opsiyonel)
- Desteklenen en düşük iOS ve Android sürümleri belirlenmeli; mağazaların hedef SDK (targetSdk) zorunlulukları her yıl takip edilmelidir.
- Sürüm numarası (version) ve derleme numarası (build number / versionCode) her yayında artırılmalıdır.

## Güvenlik
- Token, parola ve gizli bilgiler AsyncStorage / SharedPreferences / UserDefaults gibi düz depolamada değil, Keychain (iOS) ve Keystore / EncryptedSharedPreferences (Android) içinde saklanmalıdır.
- Uygulama paketine gizli API anahtarı konmamalıdır; uygulama paketi açılıp okunabilir, gizli anahtar gerektiren işlemler sunucuda yapılmalıdır.
- Erişim token'ı kısa ömürlü, yenileme token'ı dönüşümlü (rotation) ve iptal edilebilir olmalıdır.
- Tüm trafik HTTPS olmalıdır; iOS ATS istisnaları ve Android cleartextTrafficPermitted kapalı tutulmalıdır.
- Yüksek riskli uygulamalarda (ödeme, sağlık, finans) sertifika sabitleme (pinning) değerlendirilmelidir; sabitlenen sertifika yenilendiğinde uygulamanın kilitlenmemesi için yedek anahtar sabitlenmeli ve uzaktan kapatma yolu bulunmalıdır.
- Biyometrik giriş (Face ID, parmak izi) yalnız cihazdaki güvenli anahtarın kilidini açmak için kullanılmalı; tek başına sunucu kimlik doğrulaması sayılmamalıdır.
- Derin bağlantılar (deep link) ve evrensel bağlantılar (Universal Links / App Links) doğrulanmış alan adıyla kurulmalı; derin bağlantıyla gelen parametreler doğrulanmadan işlem yapılmamalıdır.
- OAuth girişleri sistem tarayıcısı (ASWebAuthenticationSession / Custom Tabs) ve PKCE ile yapılmalı; gömülü WebView'de giriş yapılmamalıdır.
- WebView kullanılıyorsa JavaScript köprüsü yalnız güvenilen içeriğe açılmalı, dosya erişimi kapatılmalıdır.
- Hassas ekranlarda ekran görüntüsü / uygulama değiştirici önizlemesi gizlenmelidir (Android FLAG_SECURE, iOS arka plan örtüsü). (Önerilen)
- Loglarda kişisel veri ve token bulunmamalı; canlı derlemede ayrıntılı loglar kapatılmalıdır.
- Kod karıştırma (R8 / ProGuard, Dart obfuscate) canlı derlemede açılmalıdır.
- Root / jailbreak tespiti yalnız yüksek riskli uygulamalarda değerlendirilmelidir; tek başına güvenlik önlemi sayılmamalıdır. (Opsiyonel)
- Cihaz bütünlüğü için App Attest / Play Integrity API değerlendirilebilir. (Opsiyonel)

## Sertifikalar ve İmzalama
- Android yükleme (upload) anahtarı ve iOS dağıtım sertifikaları kaybedilmeyecek şekilde parola yöneticisinde / güvenli kasada yedeklenmelidir; kaybolan anahtar uygulamanın güncellenememesine yol açabilir.
- Android için Play App Signing kullanılmalıdır; böylece yükleme anahtarı kaybolursa sıfırlanabilir.
- İmzalama anahtarları ve sertifikalar git'e eklenmemelidir; CI'da gizli değişken olarak tutulmalıdır.
- iOS sertifika ve provisioning profile'larının bitiş tarihleri izlenmeli; süresi dolmadan yenilenmelidir (dağıtım sertifikaları genelde 1 yıl geçerlidir).
- Push bildirimi için APNs anahtarı (.p8) sertifika yerine tercih edilmelidir; süresi dolmaz.
- Apple Developer ve Google Play hesapları kişisel değil şirket hesabı olmalı, iki adımlı doğrulama açık olmalıdır (bkz. operations/handover.md).
- Sertifika ve profil yönetimi otomatikleştirilmelidir (fastlane match, EAS credentials, Xcode Cloud).
- Sunucu tarafındaki SSL sertifikası yenilemeleri sertifika sabitleme yapılan uygulamalarla uyumlu planlanmalıdır.

## Donma, Çökme ve Kararlılık
- Ana (UI) iş parçacığında ağ isteği, dosya / veritabanı işlemi, büyük JSON ayrıştırma veya yoğun hesaplama yapılmamalıdır; Android'de 5 saniyeyi aşan bloklama ANR (Uygulama Yanıt Vermiyor) üretir, iOS'ta watchdog uygulamayı kapatır.
- Uygulama açılışında yapılan işler en aza indirilmeli; başlangıç süresi ölçülmelidir (iOS'ta açılış uzun sürerse sistem uygulamayı sonlandırır).
- Tüm ağ isteklerinin zaman aşımı olmalı; yanıt gelmediğinde arayüz kilitlenmemeli, yeniden deneme seçeneği sunulmalıdır.
- Uzun listeler sanallaştırılmış liste bileşenleriyle gösterilmelidir (FlatList / FlashList, ListView.builder, LazyColumn, UICollectionView).
- Görseller ekran boyutuna göre küçültülmüş olarak yüklenmeli ve önbelleğe alınmalıdır; tam çözünürlüklü görsel yükleme bellek taşmasına (OOM) yol açar.
- Bellek sızıntıları izlenmelidir (dinleyici, zamanlayıcı, abonelik temizlenmemesi); ekran kapanınca abonelikler iptal edilmelidir.
- Sonsuz yeniden çizim / yeniden render döngüleri önlenmeli; ağır bileşenler gereksiz yeniden çizilmemelidir.
- Arka plan işleri platform kurallarına uygun yapılmalıdır (WorkManager, BGTaskScheduler); iOS arka plan süreleri sınırlıdır.
- Uygulama ön plana döndüğünde oturum, token ve veri durumu kontrol edilmelidir.
- Null / beklenmeyen API yanıtları uygulamayı çökertmemeli; yanıtlar doğrulanmalı, eksik alanlarda varsayılan davranış olmalıdır.
- Yakalanmayan hatalar için global hata yakalayıcı ve kullanıcıya anlamlı hata ekranı bulunmalıdır.
- Çökme ve ANR raporlama aracı kurulmalıdır (Firebase Crashlytics, Sentry); sembol dosyaları (dSYM, mapping.txt, Dart symbols) her yayında yüklenmelidir; aksi halde raporlar okunamaz.
- Çökmesiz oturum oranı (crash-free sessions) izlenmeli, hedef belirlenmelidir (ör. %99,5 üzeri).
- Google Play Console "Android vitals" ve Xcode Organizer çökme / donma / pil raporları düzenli incelenmelidir.
- Düşük donanımlı cihazlarda ve yavaş ağda (3G, ağ kesintisi) test yapılmalıdır.
- Cihaz döndürme, karanlık mod, büyük yazı tipi, farklı ekran boyutları ve çentikli ekranlar test edilmelidir.

## Ağ ve Çevrimdışı
- Ağ durumu izlenmeli; çevrimdışı durumda anlamlı mesaj gösterilmeli, uygun yerlerde önbellekten veri gösterilmelidir.
- Çevrimdışı yapılan işlemler kuyruğa alınıp bağlantı gelince gönderilecekse tekrar gönderime karşı idempotency anahtarı kullanılmalıdır (bkz. code/idempotency.md).
- İstekler gereksiz tekrar edilmemeli; liste verileri sayfalı çekilmelidir.

## Bildirimler
- Bildirim izni uygulama açılır açılmaz değil, kullanıcı değerini anladığında istenmelidir.
- Push token'ları sunucuda kullanıcı ve cihazla ilişkilendirilmeli, geçersiz token'lar temizlenmelidir.
- Bildirim içeriğinde hassas veri bulunmamalıdır; kilit ekranında görünebilir.
- Bildirim gönderimi kuyruk üzerinden yapılmalıdır (bkz. operations/queues.md).

## İzinler ve Gizlilik
- Yalnız gerekli cihaz izinleri (kamera, konum, rehber, fotoğraf) istenmeli; izin istenmeden önce nedeni kullanıcıya açıklanmalıdır.
- iOS Info.plist izin açıklamaları (NS...UsageDescription) anlamlı yazılmalıdır; eksikse uygulama çöker veya reddedilir.
- Apple Privacy Manifest (PrivacyInfo.xcprivacy) ve App Store gizlilik etiketleri, Google Play Data Safety formu doğru doldurulmalıdır.
- Kullanıcı takibi yapılıyorsa iOS App Tracking Transparency izni alınmalıdır.
- Hesap oluşturulabilen uygulamalarda uygulama içinden hesap silme imkânı sunulmalıdır (App Store ve Google Play zorunluluğu) (bkz. auth/account-closure.md).
- Uygulamada üçüncü taraf girişi (Google, Facebook) varsa iOS'ta Sign in with Apple da sunulmalıdır (App Store kuralı; istisnalar kontrol edilmelidir).

## Mağaza ve Yayın
- Dijital içerik / abonelik satışı mağaza içi satın alma kurallarına tabidir; ödeme yöntemi mağaza kurallarına göre seçilmelidir.
- Yayın öncesi test kanalları kullanılmalıdır (TestFlight, Google Play internal / closed testing).
- Google Play'de aşamalı yayın (staged rollout), App Store'da aşamalı sürüm (phased release) kullanılmalı; çökme oranı artarsa yayın durdurulmalıdır.
- Mağaza dışı anlık güncellemeler (OTA, ör. Expo Updates, Shorebird) yalnız JavaScript / Dart katmanı için ve mağaza kurallarına uygun kullanılmalıdır; yerel (native) değişiklikler mağaza yayını gerektirir.
- Mağaza inceleme süreleri ve ret riskleri yayın planına eklenmelidir.
- Mağaza açıklamaları, ekran görüntüleri, gizlilik politikası ve destek adresi hazır olmalıdır (bkz. legal/legal-pages.md).
- Derleme ve yayın CI / CD ile otomatik yapılmalıdır (fastlane, EAS Build / Submit, Codemagic, Bitrise, Xcode Cloud) (bkz. operations/deployment.md).

## Erişilebilirlik ve Yerelleştirme
- Ekran okuyucu (VoiceOver, TalkBack) etiketleri, dinamik yazı boyutu ve yeterli dokunma alanı sağlanmalıdır (bkz. ui/accessibility.md).
- Metinler yerelleştirme dosyalarında tutulmalıdır (bkz. code/i18n.md).

## Analiz
- Analiz ve hata araçları gizlilik izinlerine uygun başlatılmalıdır (bkz. legal/consents.md).
