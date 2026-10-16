# Dosya Yükleme ve Depolama
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Ortak Yapılacaklar
- Yüklenebilecek dosya türleri izin listesiyle sınırlanmalıdır; uzantıya değil dosyanın içeriğine (magic bytes) bakılmalıdır.
- Dosya boyutu hem istemcide hem sunucuda sınırlanmalıdır.
- Yüklenen dosyanın adı kullanılmamalı; sunucu tarafından rastgele bir ad verilmeli, özgün ad yalnız veritabanında saklanmalıdır.
- Dosyalar uygulama kodunun bulunduğu dizine ve doğrudan çalıştırılabilecek bir yere kaydedilmemelidir.
- Dosyalar nesne depolamada (S3 uyumlu) tutulmalı; sunucu diskine bağımlı kalınmamalıdır. (Önerilen)
- Özel dosyalar herkese açık adresle değil, süreli imzalı URL ile sunulmalıdır.
- Görsellerden konum ve cihaz bilgisi (EXIF) temizlenmelidir.
- SVG ve HTML dosyaları XSS taşıyabileceği için ya reddedilmeli ya temizlenmeli ya da indirme olarak (Content-Disposition: attachment) sunulmalıdır.
- Kullanıcıların yüklediği dosyalar virüs taramasından geçirilmelidir (ör. ClamAV). (Önerilen)
- Görseller yüklemeden sonra boyutlandırılmalı ve modern formata dönüştürülmelidir (bkz. ui/media-optimization.md).
- Büyük dosyalar parça parça veya doğrudan depolamaya (presigned upload) yüklenmeli; uygulama sunucusu üzerinden geçirilmemelidir.
- Silinen kayıtların dosyaları da saklama süresine göre temizlenmelidir; sahipsiz dosya kalmamalıdır.
- Yükleme kotası (kullanıcı / firma başına toplam boyut) belirlenmelidir.

## Firma / Müşteri Bazlı Panel İse
- Dosyalar firma kimliğiyle ayrılmış yollarda saklanmalıdır (ör. companies/<id>/...); erişim kontrolü yine sunucuda yapılmalıdır.
- Bir firmanın dosya adresi tahmin edilerek başka firmanın dosyasına ulaşılamamalıdır.

## Önerilen Platformlar
- Cloudflare R2: çıkış ücreti yok, S3 uyumlu (bkz. platforms/cloudflare.md).
- Hetzner Object Storage, Backblaze B2, AWS S3: S3 uyumlu depolama.
- Cloudflare Images, imgproxy: görsel dönüştürme ve boyutlandırma.
