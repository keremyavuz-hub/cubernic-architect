# Flutter
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## When To Use
- Must be applied if the project has the Flutter SDK in pubspec.yaml; stack/mobile/general.md must also be applied.
- Flutter and Dart versions must be pinned with pubspec.yaml / fvm.

## Structure
- A single state management approach must be chosen (Riverpod, Bloc, Provider) and used consistently across the project.
- Layers must be separated: UI, state / business logic, data (repository).
- Navigation must be done with go_router.
- Model classes must be generated with freezed / json_serializable.
- flutter_lints or very_good_analysis must be used for linting.

## Security
- Tokens must be stored with flutter_secure_storage; SharedPreferences must not be used.
- Values passed with --dart-define are readable in the app bundle; secret values must not be passed this way.
- --obfuscate and --split-debug-info must be used in production builds, and symbol files must be kept.

## Performance and Freezes
- Heavy computation and large JSON parsing must be done off the main thread with compute() / Isolate.
- Long lists must be built with ListView.builder / SliverList.
- const constructors must be used; heavy work must not be done in the build method.
- setState scope must be kept small; unnecessary redraws must be prevented.
- Images must be loaded resized with cached_network_image and cacheWidth / cacheHeight.
- Objects such as StreamSubscription, AnimationController and TextEditingController must be closed in dispose.
- After async operations, it must be checked that the widget is still on screen (mounted).
- Performance must be measured in profile mode on a real device (Flutter DevTools); debug mode must not be used for performance measurement.

## Errors and Crashes
- Global errors must be caught with FlutterError.onError and PlatformDispatcher.instance.onError.
- Crashlytics or sentry_flutter must be set up, and Dart symbol files must be uploaded.

## Build and Release
- An App Bundle (aab) must be produced for Android and an Xcode archive for iOS.
- Build and release must be automated with Codemagic, fastlane or GitHub Actions.
- OTA with Shorebird must only be used for Dart code and in line with store rules. (Optional)

## Recommended Packages
- Riverpod / flutter_bloc, go_router, dio, freezed, json_serializable, flutter_secure_storage, cached_network_image, sentry_flutter / firebase_crashlytics.
