# Android Native (Kotlin / Jetpack Compose)
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## When To Use
- Must be applied if the project has an Android app built with Gradle and Kotlin code; stack/mobile/general.md must also be applied.
- targetSdk must be kept up to date according to Google Play's annual requirement.

## Structure
- New screens must be written with Jetpack Compose.
- The architecture must be built with ViewModel + unidirectional data flow (StateFlow).
- Dependency injection must be done with Hilt / Koin.
- Versions must be managed centrally with the Gradle version catalog (libs.versions.toml).
- Android Lint, detekt and ktlint must be used for linting.

## Security
- Secret data must be stored encrypted with the Android Keystore.
- android:exported values must be set deliberately for each component; there must be no unnecessarily exported Activity / Service / Receiver.
- Plain HTTP must be disabled with Network Security Config.
- android:allowBackup and backup rules must be configured so sensitive data is not included in backups.
- App Links must be verified with assetlinks.json.
- R8 (minifyEnabled) must be enabled in production builds, and mapping files must be kept.

## Performance and Freezes
- Network and disk work must be done with Coroutines on Dispatchers.IO; it must not be done on the main thread.
- StrictMode must be enabled during development to catch main thread violations.
- Coroutines must be bound to the lifecycle with viewModelScope / lifecycleScope; GlobalScope must not be used.
- Unnecessary recomposition in Compose must be prevented; stable types, remember and derivedStateOf must be used.
- Startup and scrolling performance should be improved with Baseline Profiles. (Recommended)
- Memory leaks must be monitored during development with LeakCanary.
- ANR and crash rates in Android vitals must be kept below Google Play's bad behavior thresholds; if exceeded, the app's visibility drops.
- Background work must be done with WorkManager.

## Errors and Crashes
- Crashlytics / Sentry must be set up, and mapping and NDK symbol files must be uploaded.
- The !! operator must not be used.

## Build and Release
- An App Bundle (aab) must be produced, and Play App Signing must be used.
- Build and release must be automated with fastlane / Gradle Play Publisher / GitHub Actions.
- The upload keystore and its password must be backed up in a secure vault.
