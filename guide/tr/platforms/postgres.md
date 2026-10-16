# Postgres Ayarları
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Yapılacaklar
- Yerel geliştirmede veritabanı Docker Compose ile ayrı bir portta (ör. 5433) çalıştırılmalıdır.
- Şema değişiklikleri numaralı migration dosyalarıyla yapılmalı, her biri tek işlemde ve bir kez uygulanmalıdır.
- Uygulanmış migration dosyaları değiştirilmemeli, düzeltme yeni bir migration ile yapılmalıdır.
- Bağlantı havuzu sınırlı tutulmalıdır (ör. 5).
- Uzun süren işlemler bağlantı havuzunu tıkamamalıdır.
- Sınır sayımlarında kullanılan sorgular için dizin (index) eklenmelidir.
- Düzenli yedekleme yapılmalı ve geri yükleme test edilmelidir.
