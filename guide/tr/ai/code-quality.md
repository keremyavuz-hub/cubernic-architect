# Yapay Zeka ve Kod Kalitesi
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Genel Kurallar
- Mimari, adlandırma, dil dosyası ve kütüphane kuralları code/ klasöründeki dosyalara göre uygulanmalıdır.
- Yazılan kod projenin mevcut yazım biçimine, adlandırmasına, klasör yapısına ve yorum yoğunluğuna uymalıdır.
- Kod okunabilir olmalı; kısa ama anlaşılmaz yazım yerine açık yazım tercih edilmelidir.
- Aynı mantık birden fazla yerde kopyalanmamalı, tek bir yerde tutulup paylaşılmalıdır (ör. doğrulama kuralları, e-posta gönderimi, IP okuma).
- Kullanılmayan kod, eski yorumlar ve geçici hata ayıklama satırları (console.log) bırakılmamalıdır.
- Yorumlar kodun ne yaptığını değil neden öyle yapıldığını açıklamalıdır.
- Sihirli sayılar yerine adlandırılmış sabitler kullanılmalıdır (ör. RESET_MINUTES = 60).
- Fonksiyonlar tek bir işi yapmalı, çok uzun fonksiyonlar bölünmelidir.

## Hata Yönetimi
- Hatalar sessizce yutulmamalı; ya işlenmeli ya da kaydedilip yukarı iletilmelidir.
- Beklenen hatalar (geçersiz girdi, bulunamadı, yetkisiz) kullanıcıya anlaşılır mesajla, beklenmeyen hatalar genel mesajla gösterilmeli ve kaydedilmelidir.
- Dış servis hataları uygulamanın ana akışını çökertmemelidir (ör. e-posta gönderilemedi diye kayıt başarısız olmamalı).
- Veritabanı işlemleri yarıda kalırsa veri tutarsız bırakılmamalı, işlem (transaction) kullanılmalıdır.

## Bağımlılık ve Karmaşıklık
- Küçük bir iş için büyük bir kütüphane eklenmemelidir; dilin veya platformun kendi özellikleri yetiyorsa onlar kullanılmalıdır.
- Yeni bir bağımlılık eklenmeden önce geliştiriciye gerekçesiyle bildirilmelidir.
- Gereğinden fazla soyutlama, ileride belki gerekir diye esneklik ve kullanılmayan seçenekler eklenmemelidir.
- Çerçevenin kullanımdan kalkmış (deprecated) API'leri kullanılmamalı, uyarı veren kodlar düzeltilmelidir.

## Değişiklik Boyutu
- İstenen iş için gereken en küçük ve en temiz değişiklik yapılmalıdır.
- İstenmeyen yeniden düzenlemeler (refactor) işin içine karıştırılmamalı; gerekiyorsa ayrıca önerilmelidir.
- Bir değişiklik birden fazla bağımsız iş içeriyorsa ayrı commit'lere bölünmelidir.
