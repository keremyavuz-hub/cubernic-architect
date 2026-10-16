# Form Validasyonları
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Yapılacaklar
- Formun native uyarı sistemi kapatılmalı, yerine özel uyarı validasyon mesajları gelmelidir
- Validasyon kuralları tek bir yerde yazılmalı, UI ve backend aynı kural fonksiyonlarını kullanmalıdır.
- Kural dosyası veritabanı veya sunucu modülü içermemeli, istemci tarafından güvenle içe aktarılabilmelidir.
- Form validasyonları UI tarafında yapıldığı gibi backend tarafında da ayrıca kontrol edilmelidir.
- UI validasyonu yalnızca kullanıcı deneyimi içindir, güvenlik kontrolü olarak kabul edilmemelidir.
- Alan, odaktan çıkınca kontrol edilmelidir.
- Alanda hata varsa kullanıcı yazdıkça yeniden kontrol edilmeli, düzelince hata kaybolmalıdır.
- Kullanıcı yazmaya başlar başlamaz hata gösterilmemelidir.
- Hatalı alanın kenarlığı kırmızı olmalı ve aria-invalid özelliği verilmelidir.
- Gönderim sırasında hata varsa ilk hatalı alana odaklanılmalıdır.
- Backend yalnızca beklenen alanları kabul etmelidir; fazla, tekrarlı veya metin olmayan alan gelirse istek reddedilmelidir.
- Kimlik ve yetki her sunucu eyleminde yeniden kontrol edilmelidir.
- Kullanıcıdan gelen değerler kayıt öncesi kırpılmalı ve normalleştirilmelidir (boşluk, küçük harf).
