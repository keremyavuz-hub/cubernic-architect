# CSRF Koruması
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Yapılacaklar
- Formlarda CSRF doğrulamaları eklenmelidir.
- Veri değiştiren her istek (GET, HEAD, OPTIONS dışı) yalnızca uygulamanın kendi adresinden gelmelidir.
- Origin başlığı izin verilen adresler listesiyle karşılaştırılmalıdır.
- Origin başlığı yoksa Sec-Fetch-Site değeri same-origin olmalıdır, o da yoksa istek reddedilmelidir.
- null origin ve benzer adres hileleri (ör. site.com.kotu.com) reddedilmelidir.
- Çerçevenin kendi CSRF korumasına ek olarak açık bir kural uygulanmalıdır; ters vekil sunucu ayarından bağımsız olmalıdır.
- Oturum çerezi SameSite=Lax veya Strict olmalıdır.
- Canlı adres ortam değişkeninden okunmalı ve canlıya çıkışta mutlaka tanımlanmalıdır.
- CSRF kuralı için birim testleri yazılmalıdır.
