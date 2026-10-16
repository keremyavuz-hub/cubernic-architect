# İstemci IP Adresi
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Yapılacaklar
- X-Forwarded-For başlığının ilk değerine güvenilmemelidir; istemci bu değeri uydurabilir.
- Cloudflare arkasında istemci IP'si CF-Connecting-IP başlığından okunmalıdır.
- Yedek olarak yalnızca kendi vekil sunucumuzun eklediği son X-Forwarded-For değeri kullanılmalıdır.
- IP okuma tek bir fonksiyonda yapılmalı ve tüm sistem bu fonksiyonu kullanmalıdır.
- Sunucu yalnızca Cloudflare IP aralıklarından gelen istekleri kabul etmelidir.
