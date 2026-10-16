# Mobile App General Rules
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## When To Use
- Must be applied if an iOS or Android app is developed in the project, regardless of the technology used.
- Additionally, the relevant file under stack/mobile/ must be applied according to the technology used.

## Versions and Compatibility
- Unlike the web, old app versions stay in use for months; API changes must be backward compatible (see code/api-design.md).
- The app must send version and platform information with every request (e.g. X-App-Version, X-Platform).
- A forced update mechanism must exist from the first release: the server must report the minimum supported version, and users on an old version must be directed to update.
- An optional update notice may also be offered. (Optional)
- The minimum supported iOS and Android versions must be defined; store target SDK (targetSdk) requirements must be tracked every year.
- The version and build number (build number / versionCode) must be incremented with every release.

## Security
- Tokens, passwords and secrets must be stored in Keychain (iOS) and Keystore / EncryptedSharedPreferences (Android), not in plain storage like AsyncStorage / SharedPreferences / UserDefaults.
- Secret API keys must not be put in the app bundle; the bundle can be unpacked and read, so operations requiring secret keys must be done on the server.
- Access tokens must be short-lived, and refresh tokens must be rotated and revocable.
- All traffic must be HTTPS; iOS ATS exceptions and Android cleartextTrafficPermitted must be kept off.
- Certificate pinning should be considered in high-risk apps (payments, health, finance); a backup key must be pinned and a remote kill switch must exist so the app does not lock up when the pinned certificate is renewed.
- Biometric login (Face ID, fingerprint) must only be used to unlock a secure key on the device; it must not count as server authentication on its own.
- Deep links and universal links (Universal Links / App Links) must be set up with a verified domain; no action must be taken on deep link parameters without validation.
- OAuth logins must use the system browser (ASWebAuthenticationSession / Custom Tabs) and PKCE; login must not happen in an embedded WebView.
- If WebView is used, the JavaScript bridge must only be exposed to trusted content and file access must be disabled.
- Screenshots / app switcher previews should be hidden on sensitive screens (Android FLAG_SECURE, iOS background overlay). (Recommended)
- Logs must not contain personal data or tokens; verbose logs must be disabled in production builds.
- Code obfuscation (R8 / ProGuard, Dart obfuscate) must be enabled in production builds.
- Root / jailbreak detection should only be considered in high-risk apps; it must not count as a security measure on its own. (Optional)
- App Attest / Play Integrity API may be considered for device integrity. (Optional)

## Certificates and Signing
- The Android upload key and iOS distribution certificates must be backed up in a password manager / secure vault so they are never lost; a lost key may make the app impossible to update.
- Play App Signing must be used for Android so the upload key can be reset if lost.
- Signing keys and certificates must not be added to git; they must be kept as secret variables in CI.
- Expiration dates of iOS certificates and provisioning profiles must be monitored and renewed before they expire (distribution certificates are usually valid for 1 year).
- An APNs key (.p8) should be preferred over a certificate for push notifications; it does not expire.
- Apple Developer and Google Play accounts must be company accounts, not personal, with two-factor authentication enabled (see operations/handover.md).
- Certificate and profile management must be automated (fastlane match, EAS credentials, Xcode Cloud).
- Server-side SSL certificate renewals must be planned to be compatible with apps that use certificate pinning.

## Freezes, Crashes and Stability
- Network requests, file / database operations, large JSON parsing or heavy computation must not run on the main (UI) thread; on Android blocking longer than 5 seconds produces an ANR (Application Not Responding), and on iOS the watchdog kills the app.
- Work done at app launch must be minimized; startup time must be measured (on iOS the system terminates the app if launch takes too long).
- All network requests must have a timeout; the UI must not lock up when no response arrives, and a retry option must be offered.
- Long lists must be rendered with virtualized list components (FlatList / FlashList, ListView.builder, LazyColumn, UICollectionView).
- Images must be loaded downscaled to the screen size and cached; loading full-resolution images causes out-of-memory (OOM) errors.
- Memory leaks must be monitored (uncleaned listeners, timers, subscriptions); subscriptions must be cancelled when a screen closes.
- Infinite redraw / re-render loops must be prevented; heavy components must not be redrawn unnecessarily.
- Background work must follow platform rules (WorkManager, BGTaskScheduler); iOS background time is limited.
- Session, token and data state must be checked when the app returns to the foreground.
- Null / unexpected API responses must not crash the app; responses must be validated, and there must be default behavior for missing fields.
- There must be a global error handler for uncaught errors and a meaningful error screen for the user.
- A crash and ANR reporting tool must be set up (Firebase Crashlytics, Sentry); symbol files (dSYM, mapping.txt, Dart symbols) must be uploaded with every release, otherwise reports are unreadable.
- The crash-free sessions rate must be monitored and a target must be set (e.g. above 99.5%).
- Google Play Console "Android vitals" and Xcode Organizer crash / hang / battery reports must be reviewed regularly.
- Testing must be done on low-end devices and slow networks (3G, network outage).
- Device rotation, dark mode, large fonts, different screen sizes and notched screens must be tested.

## Network and Offline
- Network state must be monitored; a meaningful message must be shown when offline, and cached data must be shown where appropriate.
- If actions taken offline are queued and sent when the connection returns, an idempotency key must be used against resubmission (see code/idempotency.md).
- Requests must not be repeated unnecessarily; list data must be fetched with pagination.

## Notifications
- Notification permission must be requested when the user understands its value, not as soon as the app opens.
- Push tokens must be associated with the user and device on the server, and invalid tokens must be cleaned up.
- Notification content must not contain sensitive data; it may be visible on the lock screen.
- Notifications must be sent through a queue (see operations/queues.md).

## Permissions and Privacy
- Only necessary device permissions (camera, location, contacts, photos) must be requested; the reason must be explained to the user before requesting permission.
- iOS Info.plist permission descriptions (NS...UsageDescription) must be written meaningfully; if missing, the app crashes or is rejected.
- The Apple Privacy Manifest (PrivacyInfo.xcprivacy), App Store privacy labels and the Google Play Data Safety form must be filled in correctly.
- If user tracking is done, iOS App Tracking Transparency permission must be obtained.
- Apps that allow account creation must offer in-app account deletion (App Store and Google Play requirement) (see auth/account-closure.md).
- If the app has third-party login (Google, Facebook), Sign in with Apple must also be offered on iOS (App Store rule; exceptions must be checked).

## Store and Release
- Digital content / subscription sales are subject to in-app purchase rules; the payment method must be chosen according to store rules.
- Pre-release test channels must be used (TestFlight, Google Play internal / closed testing).
- Staged rollout on Google Play and phased release on the App Store must be used; the rollout must be halted if the crash rate increases.
- Out-of-store instant updates (OTA, e.g. Expo Updates, Shorebird) must only be used for the JavaScript / Dart layer and in line with store rules; native changes require a store release.
- Store review times and rejection risks must be included in the release plan.
- Store descriptions, screenshots, privacy policy and support address must be ready (see legal/legal-pages.md).
- Build and release must be automated with CI / CD (fastlane, EAS Build / Submit, Codemagic, Bitrise, Xcode Cloud) (see operations/deployment.md).

## Accessibility and Localization
- Screen reader (VoiceOver, TalkBack) labels, dynamic type and sufficient touch targets must be provided (see ui/accessibility.md).
- Texts must be kept in localization files (see code/i18n.md).

## Analytics
- Analytics and error tools must be initialized in line with privacy consents (see legal/consents.md).
