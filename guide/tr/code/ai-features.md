# Ürün İçinde Yapay Zeka Özellikleri
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Hangi Durumda Kullanılır
- Geliştirilen ürünün içinde yapay zeka modeli (LLM, görsel, ses) kullanılan bir özellik varsa uygulanmalıdır; geliştirme sırasında kullanılan yapay zeka asistanı için ai/ klasörüne bakılmalıdır.

## Ortak Yapılacaklar
- Model çağrıları yalnız sunucu tarafında yapılmalı; API anahtarı istemciye verilmemelidir.
- Model sağlayıcısı ve model adı tek bir yerde tanımlanmalı; değiştirilebilir olmalıdır.
- Kullanıcı ve firma başına istek / token kotası konmalı; maliyet izlenmeli ve bütçe uyarısı olmalıdır (bkz. operations/cost.md).
- Kullanıcı girdisi ve modelin okuduğu dış içerik (web sayfası, dosya, e-posta) talimat olarak değil veri olarak ele alınmalıdır; prompt injection'a karşı sistem talimatı ile kullanıcı verisi ayrılmalıdır.
- Model çıktısı güvenilmez veri sayılmalıdır: HTML olarak doğrudan basılmamalı, sorguya veya komuta eklenmemeli, yapılandırılmış çıktı şema ile doğrulanmalıdır.
- Modelin araç çağırabildiği durumlarda (veri silme, e-posta gönderme, ödeme) araçlar en az yetkiyle tanımlanmalı, geri dönüşü olmayan işlemler kullanıcı onayı gerektirmelidir.
- Modelin firma verisine erişimi firma bazlı süzülmelidir; bir firmanın verisi başka firmanın isteğinde bağlama girmemelidir.
- Kişisel verinin model sağlayıcısına gönderilmesi aydınlatma metninde belirtilmeli, yurt dışı aktarım değerlendirilmelidir (bkz. legal/privacy-kvkk.md); bu hukuki danışmanlık değildir.
- Sağlayıcının verileri eğitimde kullanıp kullanmadığı ve saklama süresi kontrol edilmelidir.
- Yapay zekayla üretilen içerik kullanıcıya bu şekilde belirtilmelidir. (Önerilen)
- Yanıtlar akış (streaming) ile gösterilmeli, zaman aşımı ve hata durumları ele alınmalıdır.
- Aynı girdiye aynı yanıt yeterliyse önbellek kullanılmalıdır.
- Kalite için örnek girdi / beklenen çıktı setiyle düzenli değerlendirme yapılmalıdır. (Önerilen)
