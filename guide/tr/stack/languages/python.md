# Python
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Hangi Durumda Kullanılır
- Projede Python kullanılıyorsa uygulanmalıdır.
- Desteklenen bir Python 3 sürümü kullanılmalıdır.

## Kurallar
- Bağımlılıklar sabitlenmiş sürümlerle yönetilmelidir (uv, Poetry veya pip-tools + lock dosyası).
- Proje sanal ortamda (venv) çalışmalıdır; sistem Python'una paket kurulmamalıdır.
- Tip ipuçları kullanılmalı; mypy veya pyright CI'da çalışmalıdır.
- Ruff ile lint ve format yapılmalıdır.
- Dış veri Pydantic veya serializer ile doğrulanmalıdır.
- pickle, yaml.load (SafeLoader olmadan) ve eval güvenilmez veriyle kullanılmamalıdır.
- subprocess shell=True ile kullanıcı girdisi çalıştırmamalıdır.
- Rastgele güvenlik değerleri için secrets modülü kullanılmalıdır.
- Para için Decimal kullanılmalıdır.
- Zamanlar saat dilimli (timezone-aware) datetime ile işlenmelidir.
- Asenkron kodda bloklayan çağrı (requests, time.sleep) kullanılmamalıdır.
- pip-audit düzenli çalıştırılmalıdır.
