# Yapay Zeka ve Gizli Bilgiler
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Kesin Yasaklar
- Yapay zeka .env, .env.local, .env.production ve benzeri ortam dosyalarındaki değerleri oturumda asla göstermemeli, yazdırmamalı, alıntılamamalı, özetlememeli ve açık etmemelidir.
- Bu yasak geliştirici istese bile geçerlidir; değer geliştiricinin kendi dosyasında zaten vardır, oturuma taşınmasına gerek yoktur.
- Gizli değerler (API anahtarı, parola, token, veritabanı bağlantı adresi, özel anahtar, webhook sırrı) yapay zekanın bağlamına okunmamalıdır; dosya bütünüyle okunmamalı, cat / head / grep gibi komutlarla ekrana dökülmemelidir.
- Gizli değerler yapay zeka tarafından hiçbir dış servise, web isteğine, arama sorgusuna, issue / PR açıklamasına, commit mesajına, log dosyasına, belgeye veya hafıza dosyasına yazılmamalıdır.
- Gizli değerler test betiklerine, örnek kodlara, .env.example dosyasına veya hata mesajlarına sabit olarak yazılmamalıdır.
- Yapay zeka geliştiriciden gizli değeri sohbete yapıştırmasını istememelidir; değerleri geliştirici kendisi dosyaya yazmalıdır.
- Geliştirici yanlışlıkla sohbete gizli değer yapıştırırsa yapay zeka değeri tekrar etmemeli, kullanmamalı ve anahtarın sızmış sayılıp yenilenmesini önermelidir.

## İzin Verilen Kontroller
- Yapay zeka yalnızca bir değişkenin tanımlı olup olmadığını, boş / dolu olduğunu veya beklenen biçime uyup uymadığını kontrol edebilir; çıktıda yalnızca değişken adı ve dolu / boş / geçerli / geçersiz bilgisi yer almalıdır.
- Biçim kontrolü gerekiyorsa değerin kendisi değil, uzunluğu veya ön ekinin türü (ör. "test anahtarı mı canlı anahtar mı") raporlanmalıdır.
- Uygulama kodu gizli değerleri ortam değişkeninden okumalı; yapay zeka kodu yazarken değişken adını kullanmalı, değeri bilmesine gerek olmamalıdır.

## Sızıntı Önlemleri
- Yapay zeka aracının izin ayarlarında ortam dosyalarının okunması yasaklanmalıdır (Claude Code için .claude/settings.json içinde "permissions": { "deny": ["Read(./.env)", "Read(./.env.*)"] }); .env.example bu yasağın dışında tutulabilir.
- Context Mode gibi bağlam / dizin araçlarına ortam dosyaları ve gizli bilgi içeren dosyalar eklenmemelidir; eklendiyse geliştirici onayıyla temizlenmelidir.
- Komut çıktısında gizli değer görünme ihtimali varsa (ör. env, printenv, docker inspect, bağlantı hatası mesajları) çıktı filtrelenmeli veya maskelenmelidir.
- Uygulama logları, hata takip araçları ve denetim kayıtları gizli değerleri maskelemelidir (bkz. security/secrets.md, operations/logging.md).
- Ortam dosyaları .gitignore içinde olmalı; yapay zeka commit öncesi gizli değerin git'e girmediğini kontrol etmelidir.
- Bir gizli değerin sızdığından şüphelenilirse yapay zeka bunu hemen geliştiriciye bildirmeli ve anahtarın ilgili platformdan yenilenmesini önermelidir.
