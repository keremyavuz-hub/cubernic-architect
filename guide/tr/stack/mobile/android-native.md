# Android Native (Kotlin / Jetpack Compose)
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Hangi Durumda Kullanılır
- Projede Gradle ile Android uygulaması ve Kotlin kodu varsa uygulanmalıdır; ayrıca stack/mobile/general.md uygulanmalıdır.
- targetSdk Google Play'in yıllık zorunluluğuna göre güncel tutulmalıdır.

## Yapı
- Yeni ekranlar Jetpack Compose ile yazılmalıdır.
- Mimari ViewModel + tek yönlü veri akışı (StateFlow) ile kurulmalıdır.
- Bağımlılık enjeksiyonu Hilt / Koin ile yapılmalıdır.
- Sürümler Gradle version catalog (libs.versions.toml) ile merkezi yönetilmelidir.
- Lint için Android Lint, detekt ve ktlint kullanılmalıdır.

## Güvenlik
- Gizli veriler Android Keystore ile şifrelenerek saklanmalıdır.
- android:exported değerleri her bileşen için bilinçli ayarlanmalı; gereksiz dışa açık Activity / Service / Receiver bulunmamalıdır.
- Network Security Config ile düz HTTP kapatılmalıdır.
- android:allowBackup ve yedekleme kuralları hassas verinin yedeğe girmemesi için ayarlanmalıdır.
- App Links assetlinks.json ile doğrulanmalıdır.
- Canlı derlemede R8 (minifyEnabled) açık olmalı, mapping dosyaları saklanmalıdır.

## Performans ve Donma
- Ağ ve disk işleri Coroutines ile Dispatchers.IO üzerinde yapılmalıdır; ana iş parçacığında yapılmamalıdır.
- Geliştirmede StrictMode açılarak ana iş parçacığı ihlalleri yakalanmalıdır.
- Coroutine'ler viewModelScope / lifecycleScope ile yaşam döngüsüne bağlanmalıdır; GlobalScope kullanılmamalıdır.
- Compose'da gereksiz yeniden oluşturma (recomposition) önlenmeli; kararlı tipler, remember ve derivedStateOf kullanılmalıdır.
- Baseline Profiles ile açılış ve kaydırma performansı iyileştirilmelidir. (Önerilen)
- LeakCanary ile bellek sızıntıları geliştirmede izlenmelidir.
- Android vitals'ta ANR ve çökme oranları Google Play'in kötü davranış eşiklerinin altında tutulmalıdır; eşik aşılırsa uygulamanın görünürlüğü düşer.
- Arka plan işleri WorkManager ile yapılmalıdır.

## Hata ve Çökme
- Crashlytics / Sentry kurulmalı, mapping ve NDK sembol dosyaları yüklenmelidir.
- !! operatörü kullanılmamalıdır.

## Derleme ve Yayın
- App Bundle (aab) üretilmeli, Play App Signing kullanılmalıdır.
- Derleme ve yayın fastlane / Gradle Play Publisher / GitHub Actions ile otomatik yapılmalıdır.
- Yükleme anahtarı (upload keystore) ve parolası güvenli kasada yedeklenmelidir.
