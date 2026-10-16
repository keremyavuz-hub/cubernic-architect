# C#
## Must be considered if such a structure is used in the project.
This is a guide for a proper and sustainable architecture. What is written here should be used, considered and suggested where needed, to the maximum extent, taking into account the project's suitability and needs, if it fits the project's purpose. It must not be overlooked. Whenever an AI reads these items, it must always review the items written here. Some items may be skipped with the permission of the project developer, but that decision must be made by the developer.

## When To Use
- Must be applied if C# is used in the project.

## Rules
- Nullable reference types must be enabled (<Nullable>enable</Nullable>); warnings must be resolved.
- TreatWarningsAsErrors and .NET analyzers should be enabled. (Recommended)
- Asynchronous methods must be named with the Async suffix and must take a CancellationToken.
- async void must only be used in event handlers.
- IDisposable / IAsyncDisposable objects must be disposed with using.
- record must be used for fixed-value data models, and init for immutability.
- decimal must be used for money.
- DateTimeOffset should be preferred for dates; TimeProvider / UtcNow must be used instead of DateTime.Now.
- Code style must be defined with .editorconfig and applied with dotnet format.
- Package versions should be managed centrally with Directory.Packages.props. (Recommended)
- Built-in APIs (RandomNumberGenerator, PasswordHasher) must be used for cryptography.
- BinaryFormatter must not be used.
- Detailed errors (exception.ToString) must not be shown to the user.
