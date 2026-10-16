# Özellik Bayrakları ve Kademeli Yayın
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Ortak Yapılacaklar
- Riskli veya henüz bitmemiş özellikler bayrakla kapalı olarak yayına alınabilir; böylece uzun ömürlü dallar oluşmaz. (Opsiyonel)
- Bayraklar kullanıcı, firma veya yüzde bazında açılabilmelidir.
- Bayrak kontrolü sunucu tarafında yapılmalı; kapalı özelliğin uç noktaları da kapalı olmalıdır.
- Her bayrağın sahibi, amacı ve kaldırılma tarihi yazılmalı; tamamen açılan bayraklar koddan temizlenmelidir.
- Acil durdurma anahtarı olarak kullanılan bayraklar (ör. tarama, e-posta gönderimi) kalıcı tutulabilir.
- Bayrak değişiklikleri audit log'a yazılmalıdır.

## Önerilen Platformlar
- Veritabanında basit bir ayar tablosu: küçük projeler için yeterlidir.
- Unleash, Flagsmith, GrowthBook (kendi sunucunda), PostHog, LaunchDarkly. (Opsiyonel)
