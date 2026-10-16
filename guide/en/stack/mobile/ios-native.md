# iOS Native (Swift / SwiftUI)
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## When To Use
- Must be applied if the project has an Xcode project and Swift code; stack/mobile/general.md must also be applied.
- The Swift and Xcode version must be specified in the project; Swift 6 strict concurrency checking should be targeted.

## Structure
- New screens must be written with SwiftUI; bridging must be used where UIKit is required.
- Observation (@Observable) and unidirectional data flow must be used for state.
- Dependencies must be managed with Swift Package Manager.
- SwiftLint / swift-format must be used for linting and formatting.

## Security
- Secret data must be stored in the Keychain with an appropriate accessibility class (e.g. kAfterFirstUnlockThisDeviceOnly).
- Sensitive files must be protected with Data Protection (NSFileProtectionComplete).
- ATS exceptions must not be added.
- Universal Links must be verified with the apple-app-site-association file.

## Performance and Freezes
- UI updates must run on @MainActor, and heavy work in background tasks (Task, actor).
- Synchronous network / file operations must not be done on the main thread; Main Thread Checker must be enabled.
- Bottlenecks and leaks must be examined with Instruments (Time Profiler, Leaks, Allocations, Hangs).
- Strong reference cycles (retain cycles) in closures must be prevented with [weak self].
- Hangs and Launch Time reports in Xcode Organizer must be monitored.
- Field hang and crash data should be collected with MetricKit. (Recommended)

## Errors and Crashes
- Crashlytics / Sentry must be set up, and dSYM files must be uploaded with every build.
- Force unwrapping (!) and try! must not be used; error cases must be handled.

## Build and Release
- Build and release must be automated with fastlane or Xcode Cloud.
- Certificates and profiles must be managed with fastlane match or automatic signing, and their expiration dates must be monitored.
