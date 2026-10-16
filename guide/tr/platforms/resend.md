# Resend
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Genel Yapılacaklar
- Resend işlemsel e-postalar (doğrulama, davet, sıfırlama, bildirim) ve isteğe bağlı olarak toplu e-postalar (Broadcasts) için kullanılmalıdır.
- Resend hesabında iki adımlı doğrulama açık olmalı, ekip üyeleri kendi kullanıcılarıyla eklenmelidir.
- Plan sınırları (aylık ve günlük gönderim sayısı, alan adı sayısı, saniyelik istek sınırı) geliştiriciye belirtilmeli, güncel değerler fiyat sayfasından kontrol edilmelidir: https://resend.com/pricing
- Resend Node.js paketi (resend) veya doğrudan REST API kullanılabilir; gönderim tek bir modülde toplanmalıdır.
- Resend belgeleri: https://resend.com/docs

## Alan Adı Ekleme ve Doğrulama
- Gönderen alan adı Resend > Domains bölümünden eklenmelidir: https://resend.com/domains
- Ana alan adının itibarını korumak için gönderim alt alan adından yapılması önerilmelidir (ör. send.alanadi.com veya mail.alanadi.com). (Önerilen)
- Alan adı eklenirken bölge (region) seçilmeli, kullanıcıların konumuna yakın bölge tercih edilmelidir; bölge sonradan değiştirilemez.
- Resend'in verdiği DKIM (TXT), SPF (MX ve TXT) kayıtları DNS sağlayıcısına birebir eklenmelidir.
- Cloudflare kullanılıyorsa bu kayıtlar DNS only (gri bulut) olmalıdır.
- Cloudflare Domain Connect ile otomatik kurulum seçeneği varsa kullanılabilir. (Opsiyonel)
- Kayıtlar eklendikten sonra Resend panelinde Verify DNS Records ile doğrulama yapılmalı, durum Verified olmadan canlı gönderim yapılmamalıdır.
- Aynı alan adında başka bir e-posta servisi varsa SPF kayıtları tek kayıtta birleştirilmelidir.
- Alan adında DMARC kaydı bulunmalıdır; yoksa Gmail ve Yahoo toplu gönderim kuralları nedeniyle e-postalar reddedilebilir.
- Click ve open tracking ihtiyaç yoksa kapalı tutulmalıdır; işlemsel e-postalarda bağlantı takibi güvenlik bağlantılarını bozabilir.

## API Anahtarları
- API anahtarı Resend > API Keys bölümünden oluşturulmalıdır: https://resend.com/api-keys
- Uygulamanın kullanacağı anahtar yalnızca Sending access yetkisiyle ve yalnızca ilgili alan adıyla sınırlandırılarak oluşturulmalıdır.
- Her proje ve ortam için ayrı anahtar oluşturulmalı, anahtar adı proje ve ortamı belirtmelidir (ör. vitrin-production).
- Full access anahtarı yalnızca yönetim işleri için oluşturulmalı ve uygulamada kullanılmamalıdır.
- Anahtar yalnızca oluşturulurken bir kez gösterildiği için geliştirici tarafından hemen ortam dosyasına yazılmalıdır.
- Sızan anahtar hemen silinip yenisi oluşturulmalıdır.

## Gönderim
- Gönderen adres doğrulanmış alan adından olmalı ve görünen adla birlikte yazılmalıdır (ör. "Marka <noreply@send.alanadi.com>").
- Yanıt alınacaksa reply_to kullanılmalı, yanıt adresi için alan adında e-posta alımı (ör. Cloudflare Email Routing) kurulmalıdır.
- Her e-postaya HTML ile birlikte düz metin (text) sürümü eklenmelidir.
- E-postalara tür etiketi (tags) eklenmeli, panelde ve webhook'larda süzme için kullanılmalıdır.
- Aynı e-postanın tekrar gönderilmesini önlemek için idempotency anahtarı kullanılmalıdır (Idempotency-Key başlığı). (Önerilen)
- Birden fazla e-posta aynı anda gönderilecekse batch gönderim uç noktası kullanılmalıdır.
- Saniyelik istek sınırı aşılırsa 429 yanıtı gelir; yeniden deneme bekleyerek (backoff) yapılmalıdır.
- İleri tarihli gönderim gerekiyorsa scheduled_at alanı kullanılabilir. (Opsiyonel)
- Ek dosya boyut sınırı dikkate alınmalı, büyük dosyalar ek yerine süreli bağlantıyla gönderilmelidir.
- Geliştirme ve testlerde gerçek kişilere e-posta gitmemesi için Resend'in test adresleri kullanılmalıdır (ör. delivered@resend.dev, bounced@resend.dev, complained@resend.dev).
- Gönderim sonucu (Resend e-posta kimliği veya hata) uygulamanın etkinlik kaydına yazılmalıdır.

## Şablonlar
- E-posta şablonları kod içinde tek bir düzen fonksiyonuyla veya React Email ile hazırlanmalıdır: https://react.email
- Şablonlarda tüm stiller satır içi olmalı, logo PNG olmalı ve genel bir adresten sunulmalıdır.
- Şablon önizlemesi geliştirme ortamında görülebilmelidir. (Önerilen)

## Webhook ve Teslim Takibi
- Teslim, geri dönme (bounce), şikayet (complaint) ve açılma olaylarını almak için Resend > Webhooks bölümünden webhook tanımlanmalıdır: https://resend.com/webhooks
- Webhook istekleri Resend'in imza başlıkları (Svix) ve webhook gizli anahtarı ile doğrulanmalıdır.
- Geri dönen (hard bounce) ve şikayet eden adreslere tekrar gönderim yapılmamalı, adres uygulamada işaretlenmelidir.
- Resend'in otomatik bastırma listesi (suppression list) panelden kontrol edilmeli, yanlışlıkla eklenen adresler kaldırılabilmelidir.
- Webhook uç noktası CSRF kuralından muaf tutulmalı, yalnızca imza doğrulamasıyla korunmalıdır.

## Toplu Gönderim (Audiences ve Broadcasts)
- Pazarlama ve bülten e-postaları işlemsel e-postalardan ayrı tutulmalı, mümkünse farklı bir alt alan adından gönderilmelidir.
- Toplu gönderimde yalnızca izin vermiş kişilere e-posta gönderilmeli, izin kaydı uygulamada tutulmalıdır.
- Her toplu e-postada abonelikten çıkış bağlantısı bulunmalıdır.
- Türkiye'de ticari ileti gönderiliyorsa İYS kaydı ve kontrolü yapılmalıdır.

## Önerilen Alternatifler
- Çok yüksek hacim ve düşük maliyet gerekiyorsa Amazon SES önerilebilir; kurulumu daha zahmetlidir.
- Teslim edilebilirlik önceliğiyse Postmark önerilebilir.
- Hem işlemsel hem pazarlama için tek platform isteniyorsa Brevo veya SendGrid önerilebilir.
- Sağlayıcı değiştirilirken gönderim tek modülde toplandığı için yalnızca o modül değiştirilmelidir.
