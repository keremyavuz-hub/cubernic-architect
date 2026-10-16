# Loglama
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Genel Kurallar
- Loglama merkezi bir modülden yapılmalı, kodun her yerinde doğrudan console.log kullanılmamalıdır.
- Loglar yapılandırılmış (structured, JSON) biçimde yazılmalıdır: zaman, seviye, mesaj, modül, istek kimliği ve ilgili alanlar.
- Log seviyeleri tutarlı kullanılmalıdır: debug (geliştirme ayrıntısı), info (önemli olay), warn (beklenmedik ama tolere edilen durum), error (başarısız işlem), fatal (uygulama çalışamıyor).
- Canlıda log seviyesi ortam değişkeniyle ayarlanabilmeli (ör. LOG_LEVEL=info), debug logları canlıda kapalı olmalıdır.
- Her isteğe bir istek kimliği (request id) atanmalı ve o isteğe ait tüm loglarda bulunmalıdır; Cloudflare kullanılıyorsa CF-Ray değeri de kaydedilebilir.
- Loglar ile etkinlik kaydı (audit log) karıştırılmamalıdır: loglar teknik izleme içindir ve kısa süre saklanır; etkinlik kaydı iş olaylarının kalıcı kaydıdır ve veritabanında tutulur.

## Ne Loglanmalı
- Uygulamanın başlaması ve durması, ayar hataları (eksik ortam değişkeni) loglanmalıdır.
- Beklenmeyen hatalar yığın iziyle birlikte loglanmalıdır.
- Dış servis çağrılarının hataları, zaman aşımları ve yavaş yanıtları loglanmalıdır.
- Yavaş istekler ve yavaş sorgular eşik değerle loglanmalıdır (ör. 1 saniyeden uzun).
- Güvenlik olayları (başarısız giriş, yetkisiz erişim, sınır aşımı, CSRF reddi) loglanmalı veya etkinlik kaydına yazılmalıdır.
- Zamanlanmış görevlerin başlangıç, bitiş, süre ve sonuçları loglanmalıdır.

## Ne Loglanmamalı
- Parolalar, tokenlar, API anahtarları, oturum çerezleri ve tek kullanımlık kodlar asla loglanmamalıdır.
- Kart bilgisi, kimlik numarası ve özel nitelikli kişisel veriler loglanmamalıdır.
- E-posta, telefon, IP gibi kişisel veriler yalnızca gerekiyorsa ve saklama süresine uygun şekilde loglanmalı, mümkünse maskelenmelidir (ör. a***@alanadi.com).
- İstek ve yanıt gövdeleri tamamen loglanmamalı, yalnızca gerekli alanlar seçilmelidir.
- Log içine yazılan kullanıcı verisi satır sonu ve kontrol karakterlerinden arındırılmalıdır.

## Saklama ve Depolama
- Loglar sunucu diskinde döndürülmeli (rotation) ve sınırlı süre saklanmalıdır (ör. 14–90 gün).
- Birden fazla sunucu varsa loglar merkezi bir yerde toplanmalıdır.
- Log saklama süresi aydınlatma metni ve veri saklama politikasıyla uyumlu olmalıdır.
- Yasal zorunluluk olan erişim kayıtları (ör. 5651 kapsamında) ayrı tutulmalı ve gerekli süre boyunca değiştirilemez şekilde saklanmalıdır.

## Önerilen Kütüphaneler
- Basit projelerde yerleşik console ile JSON biçimli yazan küçük bir log modülü yeterlidir.
- Node.js projelerinde yapılandırılmış ve hızlı loglama için pino önerilebilir; winston daha esnek ama daha ağırdır.
- Log gönderimi için seçilen platformun resmî taşıyıcısı (transport) kullanılmalıdır.
