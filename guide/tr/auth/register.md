# Kayıt ve Başvuru İşlemleri
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Önce Karar Verilmelidir
- Projenin hangi kayıt türünü kullanacağı geliştiriciye sorulmalı ve aşağıdaki bölümlerden yalnızca ilgili olanlar uygulanmalıdır.
- Bireysel kullanıcı kaydı: herkes kendi adına hesap açar (e-ticaret müşterisi, topluluk, uygulama kullanıcısı).
- Firma / müşteri bazlı panel: bir firma adına başvuru yapılır, ekip onaylar, firmanın içinde birden çok kullanıcı ve rol olur (B2B panel, tedarikçi paneli, bayi paneli).
- Yalnız davetli sistem: dışarıdan kayıt yoktur, hesapları yalnızca yöneticiler açar (iç araçlar, kurumsal paneller).
- Bir proje birden fazla türü birlikte kullanabilir (ör. firma başvurusu + firmanın kendi kullanıcılarını davet etmesi).

## Ortak Yapılacaklar (Tüm Kayıt Türleri)
- Formun üzerinde uygulamanın logosu ve amaca uygun bir başlık bulunmalıdır.
- Formda yalnızca gerçekten gerekli alanlar istenmeli, sonradan alınabilecek bilgiler kayıttan sonra istenmelidir.
- Formdaki her alanın neyi kanıtladığı netleştirilmelidir. (Ör. doğrulanmış e-posta yalnızca adresin gerçek ve kişiye ait olduğunu kanıtlar.)
- Bir e-posta adresi alanı bulunmalıdır.
- E-posta yazılırken küçük harfe çevrilmeli ve boşluklar atılmalıdır.
- E-posta biçimi katı kurallarla kontrol edilmelidir (ardışık nokta olmamalı, uzantı en az 2 harf olmalı).
- Geçici e-posta servisleri (mailinator, yopmail, temp-mail vb.) ve bunların alt alan adları reddedilmelidir.
- E-posta alan adının MX kaydı kontrol edilmeli, e-posta almayan alan adları reddedilmelidir. DNS zaman aşımında kayıt engellenmemelidir.
- E-posta adresi doğrulanmalıdır; ayrıntılar email-verification.md dosyasındadır.
- Kayıt sözleşmesi / kullanım koşulları onay kutusu bulunmalı, sözleşme ile ilgili tüm maddeler legal/terms.md dosyasına göre uygulanmalıdır.
- KVKK aydınlatma metnine bağlantı bulunmalı, açık rıza gerektiren işlemler için ayrı onay kutusu kullanılmalıdır; ayrıntılar legal/privacy-kvkk.md ve legal/consents.md dosyalarındadır.
- Kullanıcının hesabından nasıl çıkabileceği kayıt anında belirlenmiş olmalıdır; ayrıntılar auth/account-closure.md dosyasındadır.
- Gizli bal küpü (honeypot) alanı eklenmeli, doluysa bota başarılıymış gibi yanıt verilip kayıt yapılmamalıdır.
- Bot koruması (ör. Cloudflare Turnstile) eklenmelidir. (Önerilen)
- Formun native uyarı sistemi kapatılmalı, yerine özel uyarı validasyon mesajları gelmelidir
- Formdaki zorunlu alanlar * işaretiyle işaretlenmelidir.
- Formdaki alanlar doldurulmadan ve sözleşme onaylanmadan buton aktif edilmemelidir.
- Form gönderilirken loader ikonu ve bilgilendirici mesaj gösterilmelidir.
- Formun alanına girmeyecek şekilde üstte "Zaten hesabınız var mı?" metni ve giriş butonu bulunmalıdır.
- Kayıt tamamlanınca formun yerine "E-postanızı doğrulayın" ekranı gelmeli, gönderilen adres ve istenmeyen klasörü uyarısı yazılmalıdır.
- Aynı e-postayla doğrulanmamış bekleyen kayıt varsa yenisi onun yerine geçmeli ve yeni doğrulama bağlantısı gönderilmelidir.
- Aynı IP'den iki kayıt arasında bekleme süresi (ör. 3 dakika) olmalıdır.
- Aynı IP'den saatlik (ör. 3) ve günlük (ör. 10) kayıt tavanı olmalıdır.
- Sınır sayımları silinebilen kayıtlardan değil, yalnızca eklenen etkinlik kaydından yapılmalıdır.
- Sınır kontrolleri pahalı işlemlerden (DNS sorgusu, dış API) önce yapılmalıdır.
- Bekleme gerektiren hatalarda kullanıcıya kalan süre söylenmelidir.
- Form validasyonları UI tarafında yapıldığı gibi backend tarafında da ayrıca kontrol edilmelidir.
- Formlarda CSRF doğrulamaları eklenmelidir.
- Her kayıt etkinlik kaydına yazılmalıdır.
- Hiç doğrulanmamış eski kayıtlar periyodik bakım göreviyle silinmelidir.

## Bireysel Kullanıcı Kaydı İse
- Ad ve soyad alanları bulunmalıdır.
- Parola ve parola tekrarı alanları kayıt formunda bulunmalıdır.
- Parola kuralları uygulanmalı, bilgi ikonu ve yazdıkça işaretlenen kural listesi gösterilmelidir.
- Parolayı göster/gizle göz ikonu bulunmalıdır. (Önerilen)
- Ücretsiz e-posta servisleri (Gmail, Hotmail vb.) kabul edilmelidir.
- Kullanıcı adı alanı bulunabilir; varsa benzersizliği yazarken kontrol edilmelidir. (Opsiyonel)
- Telefon alanı bulunabilir; varsa ülke koduyla alınmalı ve SMS ile doğrulanmalıdır. (Opsiyonel)
- Yaş sınırı olan hizmetlerde doğum tarihi veya yaş onayı alınmalıdır. (Opsiyonel)
- Pazarlama / ticari ileti izni ayrı bir onay kutusuyla alınmalı ve varsayılan olarak işaretsiz gelmelidir; ayrıntılar legal/consents.md dosyasındadır.
- Google, Apple gibi sosyal giriş seçenekleri sunulabilir; sosyal girişte de sözleşme onayı alınmalıdır. (Opsiyonel)
- E-posta zaten kayıtlıysa "bu e-posta kayıtlı" denmemeli; aynı yanıt verilip mevcut hesap sahibine "hesabınız zaten var" e-postası gönderilmelidir. (Önerilen)
- E-posta doğrulandıktan sonra kullanıcı otomatik giriş yapabilmeli veya giriş ekranına yönlendirilmelidir.
- E-posta doğrulanmadan kritik işlemler (ödeme, paylaşım, mesajlaşma) kısıtlanmalıdır.
- Profil bilgileri (adres, fotoğraf, tercih) kayıt formunda değil, ilk girişten sonra profil tamamlama adımında istenmelidir.
- Kullanıcıya hesabını kendi kendine silebileceği bir seçenek sunulmalıdır; ayrıntılar auth/account-closure.md dosyasındadır.

## Firma / Müşteri Bazlı Panel İse
- Kayıt doğrudan hesap açmamalı, firma adına başvuru olarak alınmalı ve ekip onayından sonra hesap açılmalıdır.
- E-postanın firmayı değil yalnızca başvuranın gerçek bir kişi olduğunu kanıtladığı kabul edilmelidir.
- Firma yetkisi e-posta alan adından değil, ayrı bir sahiplik doğrulamasından (ör. alan adı doğrulama: meta etiketi, DNS kaydı, dosya) gelmelidir.
- E-posta alan adı ile firmanın sitesinin alan adı aynı olmak zorunda tutulmamalıdır; bir firmanın e-posta alanı ile mağaza alanı farklı olabilir.
- Ücretsiz e-posta servisleri engellenebilir veya serbest bırakılabilir; küçük işletmelerin çoğunun Gmail kullandığı geliştiriciye hatırlatılmalıdır. (Opsiyonel)
- Başvuru formunda yalnızca e-posta, yetkili adı ve sözleşme onayı istenmeli; firma adı, vergi bilgisi, site, telefon gibi bilgiler hesap açıldıktan sonra panelde istenmelidir.
- Yetkili adı alanı bulunabilir (Opsiyonel)
- Başvuru formunda parola istenmemeli, parola onay sonrası gönderilen davet bağlantısıyla belirlenmelidir.
- Firma panellerine özel sözleşme maddeleri legal/terms.md dosyasının "Firma / Müşteri Bazlı Panel İse" bölümüne göre uygulanmalıdır.
- Tekrar kontrolü e-posta ile yapılmalı, alan adına göre yapılmamalıdır; aynı firmadan farklı kişiler birbirinin başvurusunu silmemelidir.
- Aynı e-postayla doğrulanmış bekleyen başvuru varsa yeni başvuru reddedilmeli ve kullanıcı bilgilendirilmelidir.
- Ekibe yeni başvuru bildirimi e-posta doğrulandıktan sonra gönderilmelidir.
- Ekip incelemesi gibi iç süreç adımları başvurana gösterilmemelidir.
- Başvurana dönüş süresi hakkında beklenti bilgisi verilmelidir (ör. 1–3 iş günü). (Önerilen)
- Onay, ret ve davet akışı approval-invite.md dosyasındaki maddelere göre kurulmalıdır.
- Firma hesabı açıldıktan sonra firmanın kendi kullanıcılarını rol ile davet edebilmesi sağlanmalıdır (sahip, editör, görüntüleyici).
- Her firmanın yalnızca kendi verisini görmesi sağlanmalıdır; ayrıntılar security/data-isolation.md dosyasındadır.
- Firma bilgileri (unvan, vergi no, adres) yasal fatura veya sözleşme gerekiyorsa panelde ayrı bir adımda alınmalı ve doğrulanmalıdır. (Opsiyonel)

## Yalnız Davetli Sistem İse
- Herkese açık kayıt veya başvuru sayfası bulunmamalıdır.
- Giriş ekranında "Hesabınız yok mu?" bağlantısı yerine "Hesap için yöneticinizle iletişime geçin" bilgisi gösterilmelidir.
- Hesaplar yalnızca yetkili yöneticiler tarafından davet bağlantısıyla açılmalıdır.
- Davet bağlantısı süreli ve tek kullanımlık olmalı, yalnızca davet edilen e-posta için geçerli olmalıdır.
- Davet kabulünde kişi adını ve parolasını belirlemelidir.
- Bekleyen davetler listelenebilmeli ve iptal edilebilmelidir.
- Kurumsal tek oturum açma (SSO: Google Workspace, Microsoft Entra) seçeneği sunulabilir. (Opsiyonel)
