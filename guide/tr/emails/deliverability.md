# E-posta Teslim Edilebilirliği
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Yapılacaklar
- Gönderen alan adı e-posta sağlayıcısında doğrulanmalıdır.
- Gönderen alan adında SPF kaydı tanımlı olmalı ve tek bir SPF kaydı bulunmalıdır.
- Gönderen alan adında DKIM kayıtları tanımlı olmalıdır.
- Gönderen alan adında DMARC kaydı tanımlı olmalıdır; başlangıçta p=none ile raporlar izlenmeli, sonra sıkılaştırılmalıdır.
- Canlıya çıkmadan önce Gmail, Outlook ve kurumsal bir adrese test gönderimi yapılıp spama düşmediği kontrol edilmelidir.
- Yalnızca yanıt alınacak adresler için e-posta yönlendirme kuralı kurulmalıdır; noreply adresi için gerekmez.
