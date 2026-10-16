# React Native / Expo
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Hangi Durumda Kullanılır
- Projede react-native veya expo paketi varsa uygulanmalıdır; ayrıca stack/mobile/general.md ve stack/languages/typescript.md uygulanmalıdır.
- Yeni projelerde Expo (geliştirme derlemeleri ve prebuild ile) tercih edilmelidir. (Önerilen)
- Expo SDK ve React Native sürümü package.json'dan okunmalı; New Architecture (Fabric, TurboModules) uyumluluğu kullanılan kütüphanelerde kontrol edilmelidir.

## Yapı
- Gezinme için Expo Router veya React Navigation kullanılmalıdır.
- Sunucu verisi için TanStack Query gibi önbellekli veri katmanı kullanılmalıdır.
- Yerel modül gerektiren kütüphaneler eklenmeden önce Expo uyumluluğu kontrol edilmelidir.
- Ortam değişkenlerinde EXPO_PUBLIC_ öneki uygulama paketine gömülür; gizli değer bu önekle tanımlanmamalıdır.

## Güvenlik
- Token'lar expo-secure-store / react-native-keychain ile saklanmalıdır; AsyncStorage kullanılmamalıdır.
- Kimlik doğrulama expo-auth-session / AppAuth ile PKCE kullanarak yapılmalıdır.
- Canlı derlemede Hermes kullanılmalı; geliştirme menüsü ve uzaktan hata ayıklama kapalı olmalıdır.

## Performans ve Donma
- Uzun listelerde FlashList veya optimize edilmiş FlatList (keyExtractor, getItemLayout, windowSize) kullanılmalıdır.
- Animasyonlar react-native-reanimated ile UI iş parçacığında çalıştırılmalıdır; JS iş parçacığında ağır animasyon yapılmamalıdır.
- Ağır hesaplamalar JS iş parçacığını bloklamamalı; InteractionManager, worklet veya yerel modül kullanılmalıdır.
- Görseller expo-image ile önbellekli ve boyutlandırılmış yüklenmelidir.
- Gereksiz yeniden render React DevTools / why-did-you-render ile izlenmeli; memo ve useCallback bilinçli kullanılmalıdır.
- console.log canlı derlemede kaldırılmalıdır (babel-plugin-transform-remove-console).
- Başlangıç süresi ve paket boyutu izlenmelidir.

## Hata ve Çökme
- Hata sınırları (ErrorBoundary) eklenmeli; @sentry/react-native veya Crashlytics kurulmalıdır.
- Sentry / Crashlytics için kaynak haritaları ve yerel sembol dosyaları her derlemede yüklenmelidir.

## Derleme ve Yayın
- EAS Build ile derleme, EAS Submit ile mağazaya gönderim yapılmalıdır.
- EAS Update ile OTA güncellemeler runtimeVersion uyumuna dikkat edilerek yayınlanmalıdır; yerel kod değişikliği içeren güncellemeler OTA ile gönderilmemelidir.
- Kimlik bilgileri (sertifika, keystore) EAS credentials ile yönetilmeli ve ayrıca yedeklenmelidir.

## Önerilen Paketler
- Expo Router, TanStack Query, react-native-reanimated, react-native-gesture-handler, FlashList, expo-image, expo-secure-store, @sentry/react-native.
