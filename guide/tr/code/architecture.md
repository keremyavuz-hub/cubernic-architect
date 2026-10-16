# Kod Mimarisi
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Merkezilik
- Her ortak iş tek bir yerde yazılmalı ve uygulamanın her yeri o tek kaynağı kullanmalıdır: ayarlar, sabitler, doğrulama kuralları, metinler, renkler, yetki kontrolleri, e-posta gönderimi, veritabanı erişimi, hata mesajları, tarih / para biçimlendirme.
- Ayarlar ve sabitler (süreler, sınırlar, adresler) kodun içine dağıtılmamalı, adlandırılmış sabitler olarak merkezi bir dosyada tutulmalıdır.
- Ortam değişkenleri tek bir modülden okunmalı, kodun her yerinde doğrudan process.env okunmamalıdır.
- Tasarım değerleri (renk, boşluk, yazı tipi, köşe yuvarlaklığı) tek bir tema / token dosyasında tanımlanmalıdır.
- Arayüz metinleri kodun içine yazılmamalı, dil dosyalarından okunmalıdır (bkz. code/i18n.md).
- Aynı kural hem istemcide hem sunucuda çalışıyorsa tek bir dosyadan paylaşılmalıdır.

## Kod Tekrarı
- Kod tekrarı yapılmamalıdır; aynı mantık ikinci kez yazılmak üzereyken ortak bir fonksiyon, bileşen veya modüle çıkarılmalıdır.
- Yeni bir yardımcı yazılmadan önce projede aynı işi yapan bir şey olup olmadığı aranmalıdır.
- Benzer görünen ama farklı amaçlara hizmet eden kodlar zorla birleştirilmemelidir; tekrar yalnızca aynı kuralın / bilginin tekrarıysa ortaklaştırılmalıdır.
- Kopyala-yapıştır ile çoğaltılmış bileşenler (ör. her sayfada ayrı yazılmış aynı form alanı) ortak bileşene dönüştürülmelidir.

## Katmanlar ve Sorumluluklar
- Uygulama katmanlara ayrılmalıdır: arayüz (sayfa ve bileşenler), eylemler / API (istek karşılama, doğrulama, yetki), iş mantığı (servisler), veri erişimi (veritabanı ve dış servisler).
- Arayüz bileşenleri doğrudan veritabanına erişmemeli, iş mantığı arayüz kodunun içine yazılmamalıdır.
- İş mantığı çerçeveden (Next.js, Express vb.) bağımsız modüllerde tutulmalı; böylece komut satırı araçları, arka plan görevleri ve testler aynı mantığı kullanabilmelidir.
- Dış servisler (e-posta, ödeme, depolama, yapay zeka) tek bir adaptör modülünün arkasında tutulmalı; sağlayıcı değişince yalnızca adaptör değişmelidir.
- Sunucuya özel kod (veritabanı, gizli anahtar) istemci tarafına sızmamalı, bunu kontrol eden bir test bulunmalıdır.

## SOLID
- Tek sorumluluk (Single Responsibility): her modül, sınıf ve fonksiyon tek bir işi yapmalı, değişmek için tek bir nedeni olmalıdır.
- Açık / kapalı (Open / Closed): yeni bir özellik eklemek mevcut kodu değiştirmeyi değil genişletmeyi gerektirmelidir (ör. yeni doğrulama yöntemi eklemek için yöntem listesine yeni bir kayıt eklemek).
- Yerine geçebilirlik (Liskov Substitution): aynı arayüzü uygulayan modüller (ör. farklı e-posta sağlayıcıları) birbirinin yerine sorunsuz kullanılabilmelidir.
- Arayüz ayrımı (Interface Segregation): modüller kullanmadıkları fonksiyonlara bağımlı olmamalı; büyük arayüzler küçük ve amaca özel parçalara bölünmelidir.
- Bağımlılıkların tersine çevrilmesi (Dependency Inversion): iş mantığı somut sağlayıcılara değil soyut arayüzlere bağlı olmalı; sağlayıcı dışarıdan verilebilmelidir.
- SOLID ilkeleri projenin ölçeğine göre uygulanmalı; küçük projede gereksiz soyutlama katmanları oluşturulmamalıdır.

## Olay Tabanlı Yapı (Event Driven)
- Bir işlemden sonra birden fazla bağımsız iş yapılacaksa (e-posta gönder, kayıt yaz, bildirim at, istatistik güncelle) bunlar ana işlemin içine sıralanmak yerine olay olarak yayınlanmalıdır (ör. application.verified olayı).
- Olay adları geçmiş zamanlı ve alan önekli olmalıdır (ör. user.registered, shop.verified, order.paid).
- Olay dinleyicileri birbirinden bağımsız olmalı; bir dinleyicinin hatası ana işlemi ve diğer dinleyicileri bozmamalıdır.
- Kullanıcıyı bekletmemesi gereken dinleyiciler arka planda veya kuyrukta çalışmalıdır.
- Olayların tamamlanması kritikse (ödeme, e-posta) olay önce veritabanına yazılmalı, sonra işlenmelidir (outbox deseni). (Önerilen)
- Etkinlik kaydı (audit log) olaylarla tutarlı olmalı; mümkünse aynı olay adları kullanılmalıdır.
- Küçük projelerde olay sistemi basit bir yayınla / dinle modülüyle başlamalı, kuyruk altyapısı ancak ihtiyaç doğunca eklenmelidir.

## Genişletilebilirlik ve Yönetilebilirlik
- Yeni bir türün eklenmesi (ör. yeni doğrulama yöntemi, yeni rol, yeni e-posta şablonu, yeni dil) tek bir listeye / kayda ekleme yaparak mümkün olmalıdır.
- Koşul zincirleri (if / switch) büyüdükçe yerini eşleme tablosu (map) veya strateji yapısına bırakmalıdır.
- Özellikler mümkünse özellik klasörleri halinde gruplanmalı; bir özelliğin dosyaları projeye dağılmamalıdır.
- Özellik bayrakları ile yeni özellikler kod silmeden açılıp kapatılabilmelidir. (Opsiyonel)
- Mimari kararlar (neden bu yapı seçildi, alternatifleri neydi) mimari kayıt dosyasına yazılmalıdır (bkz. code/registry.md).
