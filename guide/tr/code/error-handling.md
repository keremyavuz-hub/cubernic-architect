# Hata Yönetimi
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Genel Kurallar
- Hata yönetimi merkezi olmalıdır: hata türleri, hata kodları, kullanıcı mesajları ve kayıt (log) mantığı tek bir modülde tanımlanmalıdır.
- Hatalar ikiye ayrılmalıdır: beklenen hatalar (geçersiz girdi, yetkisiz, bulunamadı, sınır aşıldı, çakışma) ve beklenmeyen hatalar (program hatası, veritabanı kesintisi, dış servis çökmesi).
- Beklenen hatalar kullanıcıya anlaşılır mesajla gösterilmeli ve hata izleme aracına hata olarak gönderilmemelidir.
- Beklenmeyen hatalar kullanıcıya genel bir mesajla gösterilmeli ("Bir sorun oluştu, lütfen tekrar deneyin"), ayrıntıları kayda ve hata izleme aracına gönderilmelidir.
- Hatalar sessizce yutulmamalıdır; boş catch bloğu yazılmamalı, en azından kayıt yapılmalıdır.
- Her hata türünün sabit bir kodu olmalıdır (ör. RATE_LIMITED, NOT_FOUND, FORBIDDEN, VALIDATION_FAILED); arayüz mesajı bu koda göre dil dosyasından seçilmelidir.
- Kullanıcıya gösterilen hata mesajlarında yığın izi, sorgu, dosya yolu, iç kimlik veya sürüm bilgisi bulunmamalıdır.

## Sunucu Tarafı
- Sunucu eylemleri ve API uç noktaları beklenen hataları tutarlı bir biçimde döndürmelidir (ör. { error: { code, message, fields } }).
- API yanıtlarında doğru HTTP durum kodları kullanılmalıdır (400, 401, 403, 404, 409, 422, 429, 500, 503).
- Beklenmeyen hatalar merkezi bir hata işleyicisinde yakalanmalı, kaydedilmeli ve genel yanıta dönüştürülmelidir.
- Dış servis hataları (e-posta, ödeme, yapay zeka) ana akışı çökertmemeli; sonuç kaydedilmeli ve gerekirse yeniden denenmelidir.
- Yeniden denenebilir hatalar (zaman aşımı, 429, 503) sınırlı sayıda ve artan bekleme süresiyle yeniden denenmelidir; yeniden denenmemesi gereken hatalar (400, 401, 403) yeniden denenmemelidir.
- Veritabanı işlemleri hata durumunda geri alınmalı (rollback), veri yarım kalmamalıdır.
- Bilinen veritabanı hata kodları (ör. benzersizlik ihlali) kullanıcıya anlamlı mesaja çevrilmelidir.
- Yakalanmayan istisnalar ve reddedilen sözler (unhandled rejection) süreç düzeyinde yakalanıp kaydedilmelidir.

## Arayüz Tarafı
- React projelerinde sayfa ve bölüm düzeyinde hata sınırları (error boundary; Next.js'de error.js ve global-error.js) bulunmalıdır.
- Bulunamayan sayfalar için tasarıma uygun 404 sayfası (Next.js'de not-found.js) olmalıdır.
- Hata ekranlarında kullanıcıya ne yapabileceği (tekrar dene, ana sayfaya dön, destekle iletişim) sunulmalıdır.
- Ağ hataları ve zaman aşımları kullanıcıya bildirilmeli, form verileri kaybolmamalıdır.
- Tarayıcıda oluşan beklenmeyen hatalar da kayda veya hata izleme aracına gönderilmelidir.
- Hata ekranında destek için kısa bir hata kimliği (istek kimliği) gösterilebilir; kullanıcı bunu bildirdiğinde kayıtlarda bulunabilmelidir. (Önerilen)

## Arka Plan Görevleri
- Zamanlanmış görevler ve kuyruk işleri her hatayı kaydetmeli; sessizce başarısız olan görev bırakılmamalıdır.
- Görev hiç çalışmadığında da fark edilmelidir (ör. görevin her başarılı çalışmada bir izleme adresine bildirim göndermesi).
- Belirli denemeden sonra başarısız olan işler hata kuyruğuna alınmalı ve geliştiriciye bildirilmelidir.
