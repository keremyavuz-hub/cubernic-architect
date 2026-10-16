# iOS Native (Swift / SwiftUI)
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Hangi Durumda Kullanılır
- Projede Xcode projesi ve Swift kodu varsa uygulanmalıdır; ayrıca stack/mobile/general.md uygulanmalıdır.
- Swift ve Xcode sürümü projede belirtilmelidir; Swift 6 sıkı eşzamanlılık denetimi (strict concurrency) hedeflenmelidir.

## Yapı
- Yeni ekranlar SwiftUI ile yazılmalıdır; UIKit gerektiren yerlerde köprüleme yapılmalıdır.
- Durum için Observation (@Observable) ve tek yönlü veri akışı kullanılmalıdır.
- Bağımlılıklar Swift Package Manager ile yönetilmelidir.
- Lint ve format için SwiftLint / swift-format kullanılmalıdır.

## Güvenlik
- Gizli veriler Keychain'de, uygun erişilebilirlik sınıfıyla (ör. kAfterFirstUnlockThisDeviceOnly) saklanmalıdır.
- Hassas dosyalar Data Protection (NSFileProtectionComplete) ile korunmalıdır.
- ATS istisnası eklenmemelidir.
- Universal Links apple-app-site-association dosyasıyla doğrulanmalıdır.

## Performans ve Donma
- UI güncellemeleri @MainActor üzerinde, ağır işler arka plan görevlerinde (Task, actor) yapılmalıdır.
- Ana iş parçacığında senkron ağ / dosya işlemi yapılmamalıdır; Main Thread Checker açık olmalıdır.
- Instruments (Time Profiler, Leaks, Allocations, Hangs) ile darboğaz ve sızıntılar incelenmelidir.
- Closure'larda güçlü referans döngüsü (retain cycle) [weak self] ile önlenmelidir.
- Xcode Organizer'daki Hangs ve Launch Time raporları izlenmelidir.
- MetricKit ile sahadaki donma ve çökme verileri toplanmalıdır. (Önerilen)

## Hata ve Çökme
- Crashlytics / Sentry kurulmalı ve dSYM dosyaları her derlemede yüklenmelidir.
- Zorla açma (!) ve try! kullanılmamalıdır; hata durumları ele alınmalıdır.

## Derleme ve Yayın
- Derleme ve yayın fastlane veya Xcode Cloud ile otomatik yapılmalıdır.
- Sertifika ve profiller fastlane match veya otomatik imzalama ile yönetilmeli, bitiş tarihleri izlenmelidir.
