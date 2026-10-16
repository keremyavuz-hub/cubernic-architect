# İzinler, Onaylar ve İzin Ekranları
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Geliştirici Uyarısı
- Bu dosyaya göre oluşturulan sözleşme ve hukuki metinler yalnızca hazır taslak içeriktir, hukuki danışmanlık yerine geçmez ve yasal bir alt yapı sağlamaz.
- Yapay zeka hukuki bir metin veya sayfa oluşturduğunda, işin sonunda geliştiriciye bu metnin taslak olduğunu ve bir hukukçu tarafından kontrol edilmeden yayına alınmaması gerektiğini açıkça yazmalıdır.
- Taslak metinlerde şirket unvanı, adres, vergi bilgisi, yetkili mahkeme gibi bilgiler uydurulmamalı, köşeli parantezli yer tutucularla bırakılmalıdır (ör. [ŞİRKET UNVANI]).
- Taslak metnin kodunda veya veritabanında taslak durumu, son gözden geçiren kişi ve hukukçu onay tarihi alanları tutulmalıdır.
- Hukukçu onayı alınmamış metinler canlıya çıkış kontrol listesinde açık madde olarak kalmalıdır.
- Mevzuat (KVKK, 6563 sayılı Kanun, Mesafeli Sözleşmeler Yönetmeliği, GDPR) değiştiğinde metinlerin güncelliği geliştiriciye hatırlatılmalıdır.

## Ortak Yapılacaklar
- Uygulamada alınan tüm izinlerin listesi tutulmalıdır (ör. kullanım sözleşmesi, aydınlatma okundu, açık rıza, ticari ileti, çerez, yayın onayı).
- Her izin ayrı bir onay kutusuyla alınmalı, birden fazla izin tek kutuda birleştirilmemelidir.
- İzin kutuları varsayılan olarak işaretsiz gelmelidir.
- Hizmet için zorunlu olan onaylar (kullanım sözleşmesi) ile isteğe bağlı izinler (pazarlama) görsel olarak ayrılmalıdır.
- Her izin metninin yanında ilgili tam metne bağlantı bulunmalıdır.
- İzni geri alma, izni vermek kadar kolay olmalıdır.
- İzin geri alındığında ilgili işlem (ör. pazarlama gönderimi, analiz) hemen durdurulmalıdır.
- İzin metinleri değiştiğinde sürüm artırılmalı, gerekiyorsa kullanıcıdan yeniden izin istenmelidir.

## Ekranlar
- Kayıt ve başvuru formlarında izin kutuları gönder butonunun hemen üstünde, okunabilir boyutta yer almalıdır.
- Uzun metinler (sözleşme, açık rıza) küçük kutularda değil, tam ekran veya geniş yan panelde belge görünümünde açılmalıdır.
- Hesap ayarlarında "İzinlerim" veya "Gizlilik ve izinler" sayfası bulunmalıdır.
- İzinlerim sayfasında her izin; adı, açıklaması, durumu (verildi / verilmedi), verilme tarihi ve kabul edilen metin sürümü ile listelenmelidir.
- İzinlerim sayfasında isteğe bağlı izinler anahtar (toggle) ile tek tıkla açılıp kapatılabilmelidir.
- Zorunlu onaylar (kullanım sözleşmesi) izinlerim sayfasında okunabilir olmalı, ancak geri alınması hesap kapatma akışına yönlendirmelidir.
- Kabul edilen metnin o anki sürümü kullanıcıya sonradan gösterilebilmelidir.
- Metin sürümü değiştiğinde girişte tam ekran bir "Güncellenen koşullar" ekranı gösterilmeli, değişiklik özeti ve tam metin bağlantısı sunulmalıdır.
- İzin değişikliği yapıldığında ekranda onay mesajı gösterilmeli, gerekiyorsa e-postayla da bildirilmelidir.

## Kayıt ve Saklama
- Her izin verme ve geri alma işlemi ayrı bir kayıt olarak saklanmalı, eski kayıtlar güncellenmemeli ve silinmemelidir; kayıt yapısı legal/consent-records.md dosyasındadır.
- İzin metinlerinin her sürümü tam metniyle arşivlenmelidir.
- Kullanıcının güncel izin durumu son kayıttan hesaplanmalıdır.
- İzin kayıtları dışa aktarılabilir olmalıdır (denetim, KVKK başvurusu, uyuşmazlık).

## Bireysel Kullanıcı Sistemi İse
- Ticari elektronik ileti (e-posta, SMS, arama) izni ayrı alınmalı ve kanal bazında (e-posta, SMS, arama) ayrı ayrı seçilebilmelidir.
- Türkiye'de ticari ileti izinleri İYS (İleti Yönetim Sistemi) ile senkronize edilmelidir; uygulamada verilen izin İYS'ye bildirilmeli, İYS'den gelen retler uygulamaya işlenmelidir.
- Her pazarlama iletisinde tek tıkla çalışan ret (abonelikten çıkış) bağlantısı bulunmalıdır.

## Firma / Müşteri Bazlı Panel İse
- Firmanın verdiği yayın izni, içerik kullanım izni ve benzeri ticari onaylar açık onay kaydı olarak saklanmalıdır.
- Yayına alma öncesi önizleme ve açık onay adımı bulunmalı, onay kaydı (kim, ne zaman, hangi içerik, hangi sürüm) tutulmalıdır.
- Firma adına verilen onaylarda onayı veren kullanıcı, rolü ve firma kimliği kaydedilmelidir.
- Firma panelinde firmanın verdiği tüm onayların geçmişini gösteren bir ekran bulunmalıdır. (Önerilen)
- B2B ticari iletilerde (firmaya gönderilen tanıtım e-postaları) de izin ve ret seçeneği sunulmalıdır.

## Önerilen Platformlar
- Az sayıda izin türü olan projelerde izin yönetimi uygulamanın kendi veritabanında yapılabilir. (Opsiyonel)
- Çok kanallı pazarlama izinleri ve denetim kaydı isteniyorsa izin / tercih yönetim platformları önerilmelidir: OneTrust Consent & Preference Management, Usercentrics, Didomi.
- İYS entegrasyonu için doğrudan İYS API'si kullanılabilir veya İYS entegratörü olan e-posta / SMS hizmet sağlayıcıları tercih edilebilir; seçim yapılırken entegratör listesi İYS'nin resmî sitesinden kontrol edilmelidir.
- Platform önerilirken maliyeti, veri merkezi konumu (yurt dışı aktarım) ve izin kayıtlarının dışa aktarılabilirliği geliştiriciye belirtilmelidir.
