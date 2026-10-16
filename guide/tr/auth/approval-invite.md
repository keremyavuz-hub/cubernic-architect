# Başvuru Onayı ve Davet
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Hangi Durumda Kullanılır
- Kullanıcı kaydı ekip onayından geçen (firma / müşteri bazlı panel) veya yalnız davetle hesap açılan sistemlerde kullanılmalıdır.
- Bireysel kullanıcıların doğrudan hesap açtığı sistemlerde bu dosya uygulanmamalıdır.

## Yapılacaklar
- Yalnızca e-postası doğrulanmış başvurular onaylanabilmelidir.
- Aynı başvuru iki kez onaylanamamalı veya reddedilememelidir; işlem sırasında kayıt kilitlenmelidir.
- Onay ve ret işlemleri yönetici ekranından yapılabilmelidir.
- Komut satırı aracı yedek olarak bulunabilir, ancak ekran ve komut aynı fonksiyonu çağırmalıdır. (Opsiyonel)
- Yönetici ekranı yalnızca platform yöneticilerine görünmeli, yetkisiz kullanıcıya 404 dönmelidir.
- Yönetici ekranında bekleyen, onaylanan ve reddedilen başvurular sekmelerle ayrılmalıdır.
- Onay ve ret işlemleri ayrıca onay sorusu istemeli, sunucu da onay alanını kontrol etmelidir.
- Onay sırasında hesap veya firma oluşturulmalı ve başvurana süreli (ör. 7 gün), tek kullanımlık davet bağlantısı gönderilmelidir.
- Davet bağlantısı tahmin edilemez olmalı ve veritabanında özeti saklanmalıdır.
- Davet kabulünde kişi adını ve parolasını belirlemelidir.
- Davet yalnızca davet edilen e-posta için geçerli olmalıdır.
- Ret işleminde başvurana kibar bir bilgi e-postası gönderilmelidir.
- Otomatik ret yapılmamalı, ret bilinçli bir karar olmalıdır.
- Karar bekleyen doğrulanmış başvurular için ekibe günde en fazla bir toplu hatırlatma gönderilmelidir.
- Ekibe giden bildirim e-postalarında komut yerine ilgili yönetim ekranına giden buton bulunmalıdır.
- Her onay, ret ve davet işlemi işlemi yapan kişiyle birlikte etkinlik kaydına yazılmalıdır.
