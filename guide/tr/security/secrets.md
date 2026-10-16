# Gizli Anahtarlar
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Yapılacaklar
- Gizli anahtarlar yapay zekaya sorulmamalı, yazdırılmamalı ve konuşmaya yapıştırılmamalıdır.
- Gizli anahtarları geliştirici kendisi ortam dosyasına yazmalıdır.
- Anahtarların dolu olup olmadığı değer gösterilmeden kontrol edilmelidir.
- Ortam dosyaları (.env) git'e eklenmemelidir.
- İstemciye giden değişkenler (NEXT_PUBLIC_) yalnızca açık bilgiler içermelidir.
- Veritabanı ve sunucu modülleri istemci bileşenlerine girmemeli, bunu kontrol eden bir test yazılmalıdır.
- Her ortam ve proje için ayrı, en az yetkili API anahtarı kullanılmalıdır.
