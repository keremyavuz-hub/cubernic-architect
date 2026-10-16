# C#
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Hangi Durumda Kullanılır
- Projede C# kullanılıyorsa uygulanmalıdır.

## Kurallar
- Nullable reference types açık olmalıdır (<Nullable>enable</Nullable>); uyarılar giderilmelidir.
- TreatWarningsAsErrors ve .NET analizörleri açık olmalıdır. (Önerilen)
- Asenkron metotlar Async son ekiyle adlandırılmalı ve CancellationToken almalıdır.
- async void yalnız olay işleyicilerinde kullanılmalıdır.
- IDisposable / IAsyncDisposable nesneler using ile kapatılmalıdır.
- Sabit değerli veri modelleri için record, değişmezlik için init kullanılmalıdır.
- Para için decimal kullanılmalıdır.
- Tarih için DateTimeOffset tercih edilmeli; DateTime.Now yerine TimeProvider / UtcNow kullanılmalıdır.
- Kod stili .editorconfig ile tanımlanmalı ve dotnet format ile uygulanmalıdır.
- Paket sürümleri Directory.Packages.props ile merkezi yönetilmelidir. (Önerilen)
- Kriptografide yerleşik API'ler (RandomNumberGenerator, PasswordHasher) kullanılmalıdır.
- BinaryFormatter kullanılmamalıdır.
- Ayrıntılı hata (exception.ToString) kullanıcıya gösterilmemelidir.
