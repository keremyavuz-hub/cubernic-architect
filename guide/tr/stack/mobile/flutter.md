# Flutter
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Hangi Durumda Kullanılır
- Projede pubspec.yaml içinde Flutter SDK'sı varsa uygulanmalıdır; ayrıca stack/mobile/general.md uygulanmalıdır.
- Flutter ve Dart sürümleri pubspec.yaml / fvm ile sabitlenmelidir.

## Yapı
- Durum yönetimi için tek bir yaklaşım seçilmelidir (Riverpod, Bloc, Provider) ve proje genelinde tutarlı kullanılmalıdır.
- Katmanlar ayrılmalıdır: arayüz, durum / iş mantığı, veri (repository).
- Gezinme go_router ile yapılmalıdır.
- Model sınıfları freezed / json_serializable ile üretilmelidir.
- Lint için flutter_lints veya very_good_analysis kullanılmalıdır.

## Güvenlik
- Token'lar flutter_secure_storage ile saklanmalıdır; SharedPreferences kullanılmamalıdır.
- --dart-define ile verilen değerler uygulama paketinde okunabilir; gizli değer bu yolla verilmemelidir.
- Canlı derlemede --obfuscate ve --split-debug-info kullanılmalı, sembol dosyaları saklanmalıdır.

## Performans ve Donma
- Ağır hesaplamalar ve büyük JSON ayrıştırma compute() / Isolate ile ana iş parçacığı dışında yapılmalıdır.
- Uzun listeler ListView.builder / SliverList ile oluşturulmalıdır.
- const constructor'lar kullanılmalı; build metodunda ağır işlem yapılmamalıdır.
- setState kapsamı küçük tutulmalı; gereksiz yeniden çizim önlenmelidir.
- Görseller cached_network_image ve cacheWidth / cacheHeight ile boyutlandırılarak yüklenmelidir.
- StreamSubscription, AnimationController, TextEditingController gibi nesneler dispose içinde kapatılmalıdır.
- async işlemlerden sonra widget'ın hâlâ ekranda olduğu (mounted) kontrol edilmelidir.
- Performans profile modunda ve gerçek cihazda ölçülmelidir (Flutter DevTools); debug modu performans ölçümü için kullanılmamalıdır.

## Hata ve Çökme
- FlutterError.onError ve PlatformDispatcher.instance.onError ile global hata yakalanmalıdır.
- Crashlytics veya sentry_flutter kurulmalı, Dart sembol dosyaları yüklenmelidir.

## Derleme ve Yayın
- Android için App Bundle (aab), iOS için Xcode arşivi üretilmelidir.
- Derleme ve yayın Codemagic, fastlane veya GitHub Actions ile otomatik yapılmalıdır.
- Shorebird ile OTA yalnız Dart kodu için ve mağaza kurallarına uygun kullanılmalıdır. (Opsiyonel)

## Önerilen Paketler
- Riverpod / flutter_bloc, go_router, dio, freezed, json_serializable, flutter_secure_storage, cached_network_image, sentry_flutter / firebase_crashlytics.
