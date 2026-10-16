# React Native / Expo
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## When To Use
- Must be applied if the project has the react-native or expo package; stack/mobile/general.md and stack/languages/typescript.md must also be applied.
- Expo (with development builds and prebuild) should be preferred for new projects. (Recommended)
- The Expo SDK and React Native version must be read from package.json; New Architecture (Fabric, TurboModules) compatibility must be checked for the libraries used.

## Structure
- Expo Router or React Navigation must be used for navigation.
- A cached data layer such as TanStack Query must be used for server data.
- Expo compatibility must be checked before adding libraries that require native modules.
- Environment variables with the EXPO_PUBLIC_ prefix are embedded in the app bundle; secret values must not be defined with this prefix.

## Security
- Tokens must be stored with expo-secure-store / react-native-keychain; AsyncStorage must not be used.
- Authentication must be done with expo-auth-session / AppAuth using PKCE.
- Hermes must be used in production builds; the dev menu and remote debugging must be disabled.

## Performance and Freezes
- FlashList or an optimized FlatList (keyExtractor, getItemLayout, windowSize) must be used for long lists.
- Animations must run on the UI thread with react-native-reanimated; heavy animations must not run on the JS thread.
- Heavy computation must not block the JS thread; InteractionManager, worklets or native modules must be used.
- Images must be loaded cached and resized with expo-image.
- Unnecessary re-renders must be monitored with React DevTools / why-did-you-render; memo and useCallback must be used deliberately.
- console.log must be removed in production builds (babel-plugin-transform-remove-console).
- Startup time and bundle size must be monitored.

## Errors and Crashes
- Error boundaries (ErrorBoundary) must be added; @sentry/react-native or Crashlytics must be set up.
- Source maps and native symbol files must be uploaded to Sentry / Crashlytics with every build.

## Build and Release
- Builds must be done with EAS Build, and store submission with EAS Submit.
- OTA updates with EAS Update must be published with attention to runtimeVersion compatibility; updates containing native code changes must not be sent via OTA.
- Credentials (certificates, keystore) must be managed with EAS credentials and also backed up separately.

## Recommended Packages
- Expo Router, TanStack Query, react-native-reanimated, react-native-gesture-handler, FlashList, expo-image, expo-secure-store, @sentry/react-native.
