# Yapay Zeka ve Test / Doğrulama
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Genel Kurallar
- Yapay zeka bir işi "bitti" olarak bildirmeden önce çalıştığını doğrulamalıdır; derlenmesi çalıştığı anlamına gelmez.
- Her işin sonunda testler çalıştırılmalı ve derleme (build) kontrol edilmelidir.
- Değişikliğin etkilediği akış mümkünse uçtan uca denenmelidir (veritabanı, e-posta, yönlendirme dahil).
- Yeni bir kural, sınır veya güvenlik kontrolü eklendiğinde bunu doğrulayan otomatik test de yazılmalıdır.
- Hem başarılı yol hem hata yolları test edilmelidir: geçersiz girdi, yetkisiz erişim, süresi dolmuş bağlantı, tekrar gönderim, paralel istek.
- Sınır değerler test edilmelidir (boş, en uzun, bir eksik / bir fazla, özel karakter, Türkçe karakter).
- Dış servislerin kendisi test edilirken resmî test anahtarları ve test adresleri kullanılmalı, gerçek kişilere e-posta / SMS gönderilmemelidir.

## Raporlama
- Yapay zeka neyi test ettiğini, nasıl test ettiğini ve sonucunu açıkça yazmalıdır.
- Test edilmeyen kısımlar ayrıca belirtilmelidir (ör. "tarayıcıda açıp denemedim", "gerçek e-posta gönderimini denemedim").
- Test başarısız olduysa bu gizlenmemeli, hata çıktısıyla birlikte bildirilmelidir.
- Bir testi geçirmek için test değiştirilmemeli veya kontrol gevşetilmemelidir; önce kodun neden başarısız olduğu bulunmalıdır.
- Doğrulanamayan durumlarda geliştiriciye nasıl doğrulayabileceği tarif edilmelidir (hangi sayfayı açsın, ne görmesi gerekir).

## Test Ortamı
- Testler mümkünse ayrı bir test veritabanında veya geri alınan işlem (rollback) içinde çalışmalıdır.
- Test verileri ayırt edilebilir olmalı ve yalnızca testin kendi oluşturduğu kayıtlar temizlenmelidir (bkz. ai/destructive-actions.md).
- Testler birbirine ve çalışma sırasına bağımlı olmamalıdır.
- Testler hızlı olmalı; yavaş testler ayrı çalıştırılabilmelidir.
- Canlı ortamda test yapılmamalıdır.

## Gereksiz Test ve Bağlam Tasarrufu
- Gerekmeyen hiçbir test yapılmamalıdır; test yalnızca değişikliğin doğruluğunu kanıtlamak için gerektiğinde ve gerektiği kadar yapılmalıdır.
- Bağlamı dolduracak işlemlerden kaçınılmalıdır (uzun çıktılar, tekrar eden çalıştırmalar, gereksiz sayfa görüntüleri, büyük log dökümleri).
- Tarayıcıdan veya cihazdan gözle kontrol gerekiyorsa yapay zeka bunu kendisi denemek yerine geliştiriciden neyin, nerede kontrol edileceğini kısaca belirterek istemelidir.
