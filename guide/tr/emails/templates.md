# E-posta Şablonlarının Yönetimi, Tasarımı ve Kodlanması
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Şablon Yönetimi
- Tüm e-posta şablonları tek bir yerde (ör. emails/ veya lib/mail klasörü) ve tek bir şablon kaydında tanımlanmalıdır; her şablonun adı, konusu, değişkenleri ve etiketi bu kayıtta görülebilmelidir.
- Tüm şablonlar ortak bir düzeni (layout) kullanmalıdır: başlık / logo, içerik, buton, bilgi kutusu, kapanış, alt bilgi; düzen değişince tüm e-postalar birlikte değişmelidir.
- Buton, bilgi kutusu, detay tablosu, uyarı kutusu gibi parçalar ortak bileşen olarak yazılmalıdır.
- Her şablon bir fonksiyon olmalı, gerekli değişkenleri parametre olarak almalı ve konu, HTML ve düz metin sürümünü birlikte döndürmelidir.
- Şablon değişkenleri belgelenmeli, eksik değişkenle e-posta gönderilmemelidir (ör. boş ad yerine "Merhaba," kullanılmalıdır).
- E-posta metinleri dil dosyalarında tutulmalıdır; çok dilli projelerde e-posta kullanıcının dilinde gönderilmelidir.
- Şablonlar marka ayarlarından (ad, logo adresi, renkler, adres, destek e-postası) merkezi olarak beslenmelidir.
- Şablonlar geliştirme ortamında tarayıcıda önizlenebilmelidir (ör. /dev/emails sayfası veya React Email önizleme sunucusu); bu önizleme canlıda kapalı olmalıdır. (Önerilen)
- Yerel geliştirmede gönderilen e-postalar gerçek alıcıya değil yerel bir yakalayıcıya gitmelidir (ör. Mailpit, MailHog) veya sağlayıcının test adresleri kullanılmalıdır.
- Şablonların panelden düzenlenebilmesi isteniyorsa yalnızca metin alanları düzenlenebilmeli, HTML ve betik eklenememeli, değişiklikler sürümlenmeli ve önizlenebilmelidir. (Opsiyonel)
- Pazarlama e-postaları işlemsel şablonlardan ayrı tutulmalı ve ayrı gönderim akışından geçmelidir.

## Tasarım ve Ton
- E-postalar kurumsal tonda yazılmalı, emoji kullanılmamalıdır.
- Hitap resmî olmalıdır ("Sayın Ad Soyad," veya "Merhaba,").
- Kapanış "Saygılarımızla, X Ekibi" şeklinde olmalıdır.
- Her e-postanın tek bir ana amacı ve tek bir ana butonu olmalıdır.
- Tasarım sade olmalı; küçük logo, başlık, kısa metin, tek buton, ince kenarlı bilgi kutusu ve koyu alt bilgi kullanılmalıdır.
- Gölgeli, parlak ve büyük butonlardan kaçınılmalıdır.
- Konu satırı kısa, açık ve işlemi anlatan şekilde yazılmalıdır (ör. "Parola sıfırlama · Marka"); büyük harf, ünlem ve spam kelimeleri kullanılmamalıdır.
- Gelen kutusunda konu satırının yanında görünen önizleme metni (preheader) her şablonda tanımlanmalıdır.
- Güvenlikle ilgili e-postalarda "Bu işlemi siz yapmadıysanız…" satırı bulunmalıdır.
- Süreli bağlantılarda süre ve tek kullanımlık olduğu bilgi kutusunda yazılmalıdır.
- Alt bilgide marka adı, yıl, otomatik gönderim bilgisi ve gerekiyorsa şirket unvanı ile adresi yer almalıdır.

## HTML E-posta Kodlama Kuralları
- Düzen tablolarla kurulmalıdır (table, role="presentation"); flex ve grid e-posta istemcilerinde desteklenmez.
- İçerik genişliği en fazla 600 px olmalı ve mobilde tam genişliğe inmelidir.
- Tüm stiller satır içi (inline) olmalıdır; e-posta istemcileri <style> ve harici CSS'i kısmen veya tamamen siler. Bu kural ui/styling.md dosyasındaki satır içi stil yasağının istisnasıdır.
- Stiller elle değil şablon aracıyla veya ortak düzen fonksiyonuyla üretilmelidir (ör. React Email, MJML veya juice ile CSS'i satır içine alma).
- Butonlar resim değil HTML olarak yapılmalı ve Outlook'ta da düzgün görünecek şekilde (bulletproof button) kodlanmalıdır.
- Logo PNG olmalı, genişliği ve yüksekliği belirtilmeli, alt metni bulunmalıdır; SVG kullanılmamalıdır.
- Görseller herkese açık ve kalıcı bir adresten (HTTPS) sunulmalı; yerel adres (127.0.0.1) kullanılmamalıdır. Gerekirse gömülü ek (cid) kullanılabilir.
- Görseller kapatıldığında da e-posta anlaşılır olmalıdır; önemli bilgi görselin içine yazılmamalıdır.
- Yazı tipi olarak sistem yazı tipleri kullanılmalıdır; özel web yazı tipleri çoğu istemcide yüklenmez.
- Koyu mod (dark mode) için renkler kontrol edilmeli, logonun koyu arka planda görünür olduğundan emin olunmalıdır.
- Butonun altında "Buton çalışmıyorsa bu adresi yapıştırın" metni ve düz bağlantı bulunmalıdır.
- Her e-postanın düz metin (text) sürümü bulunmalıdır.
- Kullanıcıdan gelen her değer HTML kaçışından geçirilmelidir.
- Bağlantılarda tam adres (https://...) kullanılmalı, adresler ortam değişkenindeki canlı adresten üretilmelidir.
- Pazarlama e-postalarında List-Unsubscribe ve List-Unsubscribe-Post başlıkları eklenmelidir; işlemsel e-postalarda gerekmez.
- E-posta HTML boyutu 100 KB altında tutulmalıdır; Gmail daha büyük e-postaları keser.

## Test
- Her şablon Gmail (web ve mobil), Outlook (masaüstü ve web), Apple Mail ve iOS / Android e-posta uygulamalarında kontrol edilmelidir.
- Koyu mod ve görseller kapalı görünüm kontrol edilmelidir.
- Bağlantıların doğru adrese gittiği, sürelerin doğru yazdığı ve değişkenlerin dolduğu kontrol edilmelidir.
- Spam puanı kontrol edilmelidir (ör. mail-tester.com).
- Çoklu istemci testi için Litmus veya Email on Acid önerilebilir; ücretli olduğu belirtilmelidir. (Opsiyonel)

## Önerilen Araçlar
- Basit projelerde tek bir düzen fonksiyonu ve şablon fonksiyonları yeterlidir; kütüphane gerekmez.
- React projelerinde React Email (bileşenlerle şablon, önizleme sunucusu, satır içi stil üretimi) önerilebilir: https://react.email
- Çerçeveden bağımsız ve Outlook uyumlu şablon için MJML önerilebilir: https://mjml.io
- Yerel e-posta yakalayıcı olarak Mailpit önerilebilir: https://mailpit.axllent.org
