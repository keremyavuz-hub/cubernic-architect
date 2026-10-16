# Çerezler ve Çerez İzin Ekranları
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
- Uygulamanın kullandığı tüm çerezlerin ve benzeri teknolojilerin (localStorage, piksel, SDK) listesi tutulmalıdır: ad, amaç, kategori, süre, sağlayıcı, birinci / üçüncü taraf.
- Çerez listesi kod değiştikçe güncellenmeli, yeni bir analiz veya reklam aracı eklenmeden önce listeye ve politikaya işlenmelidir.
- Çerezler kategorilere ayrılmalıdır: zorunlu, işlevsel (tercih), analiz / performans, pazarlama / reklam.
- Zorunlu çerezler (oturum, güvenlik, CSRF, yük dengeleme, çerez tercihinin kendisi) için izin gerekmez; diğer tüm kategoriler için izin alınmalıdır.
- Çerez izni alınmadan analiz, reklam veya takip betikleri yüklenmemeli, sayfaya eklenen üçüncü taraf betikler izin durumuna göre koşullu çalıştırılmalıdır.
- Yalnızca zorunlu çerez kullanılan uygulamalarda izin penceresi gerekmez, ancak çerez politikası sayfası yine yayınlanmalı ve alt bilgiden bağlantı verilmelidir.
- Oturum çerezleri HttpOnly, Secure ve SameSite özellikleriyle oluşturulmalıdır.
- Çerez tercihi süreli olmalı (ör. 6 veya 12 ay), süre dolunca veya çerez politikası değişince yeniden sorulmalıdır.
- Çerez politikası sayfası legal/legal-pages.md dosyasındaki başlıklara göre hazırlanmalıdır.

## Ekranlar
- İlk ziyarette sayfanın altında veya köşesinde çerez bildirimi (banner) gösterilmeli, sayfanın içeriğini tamamen kapatmamalıdır.
- Bildirimde kısa bir açıklama, çerez politikasına bağlantı ve "Tümünü kabul et", "Reddet" ve "Tercihleri yönet" butonları bulunmalıdır.
- "Kabul et" ve "Reddet" butonları aynı boyut, renk ağırlığı ve görünürlükte olmalıdır; reddetmek kabul etmekten zor olmamalıdır.
- Bildirimi kapatma (X) butonu kabul anlamına gelmemeli, yalnızca zorunlu çerezlerle devam edilmelidir.
- Sayfayı kaydırmak veya gezinmeye devam etmek izin olarak kabul edilmemelidir.
- "Tercihleri yönet" ekranında her kategori açıklamasıyla ayrı bir anahtar (toggle) olarak gösterilmeli, zorunlu kategori açık ve kilitli olmalıdır.
- Tercih ekranında her kategorinin altında kullanılan çerezler ad, amaç ve süre ile açılır liste halinde gösterilmelidir. (Önerilen)
- İsteğe bağlı kategoriler varsayılan olarak kapalı gelmelidir.
- Tercih ekranında "Seçimleri kaydet", "Tümünü kabul et" ve "Tümünü reddet" butonları bulunmalıdır.
- Kullanıcı tercihini sonradan değiştirebilmeli; site alt bilgisinde "Çerez tercihleri" bağlantısı veya sabit küçük bir çerez ikonu bulunmalıdır.
- Çerez ekranları klavye ile kullanılabilir olmalı, odak bildirime taşınmalı ve ekran okuyucularla uyumlu olmalıdır.
- Çerez ekranları uygulamanın temasına uygun tasarlanmalı, mobilde ekranı kaplamamalıdır.
- Çerez ekranı metinleri sitenin diline uygun olmalı, çok dilli sitelerde dile göre değişmelidir.

## Kayıt ve Saklama
- Kullanıcının çerez tercihi tarayıcıda (birinci taraf çerez) saklanmalı ve sayfa açılır açılmaz okunarak betikler buna göre yüklenmelidir.
- Çerez tercihleri ayrıca sunucuda kanıt kaydı olarak tutulmalıdır; kayıt yapısı legal/consent-records.md dosyasındadır. (Önerilen)
- Giriş yapmamış ziyaretçiler için rastgele bir izin kimliği üretilmeli, kayıt bu kimlikle tutulmalı, giriş yapılınca kullanıcıya bağlanmalıdır.
- Kayıtta tercih edilen kategoriler, çerez politikası sürümü, zaman, dil ve kaynak (banner, tercih ekranı) tutulmalıdır.
- Kullanıcı tercihini geri aldığında ilgili çerezler tarayıcıdan silinmeli ve betikler durdurulmalıdır.
- Google Analytics, Google Ads gibi araçlar kullanılıyorsa Google Consent Mode v2 sinyalleri (ad_storage, analytics_storage, ad_user_data, ad_personalization) izin durumuna göre gönderilmelidir.

## Önerilen Platformlar
- Basit ve az sayıda üçüncü taraf aracı olan projelerde çerez ekranı uygulamanın içinde yazılabilir veya açık kaynaklı bir kütüphane kullanılabilir (ör. orestbida/cookieconsent, Klaro). (Opsiyonel)
- Daha kurumsal, denetlenebilir ve otomatik çerez taraması isteniyorsa bir çerez / izin yönetim platformu (CMP) önerilmelidir.
- Önerilebilecek CMP platformları: OneTrust (büyük kurumlar), Usercentrics / Cookiebot (orta ve büyük ölçek, otomatik tarama, Google sertifikalı), Didomi, CookieYes ve iubenda (küçük ve orta ölçek, uygun fiyatlı).
- CMP seçilirken Google sertifikalı CMP olması, Consent Mode v2 desteği, Türkçe arayüz, otomatik çerez taraması, izin kayıtlarının dışa aktarılabilmesi ve veri merkezi konumu karşılaştırılmalıdır.
- CMP kullanılsa bile çerez listesinin doğruluğu ve politikanın hukuki uygunluğu geliştiricinin ve hukukçunun sorumluluğunda kalmalıdır.
- Platform önerilirken ücretli olduğu, aylık maliyeti ve ücretsiz plan sınırları geliştiriciye belirtilmelidir.
