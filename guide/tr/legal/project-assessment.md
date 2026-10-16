# Proje Türü ve Yasal Yükümlülük Değerlendirmesi
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Geliştirici Uyarısı
- Bu dosyaya göre oluşturulan sözleşme ve hukuki metinler yalnızca hazır taslak içeriktir, hukuki danışmanlık yerine geçmez ve yasal bir alt yapı sağlamaz.
- Yapay zeka hukuki bir metin veya sayfa oluşturduğunda, işin sonunda geliştiriciye bu metnin taslak olduğunu ve bir hukukçu tarafından kontrol edilmeden yayına alınmaması gerektiğini açıkça yazmalıdır.
- Taslak metinlerde şirket unvanı, adres, vergi bilgisi, yetkili mahkeme gibi bilgiler uydurulmamalı, köşeli parantezli yer tutucularla bırakılmalıdır (ör. [ŞİRKET UNVANI]).
- Taslak metnin kodunda veya veritabanında taslak durumu, son gözden geçiren kişi ve hukukçu onay tarihi alanları tutulmalıdır.
- Hukukçu onayı alınmamış metinler canlıya çıkış kontrol listesinde açık madde olarak kalmalıdır.
- Mevzuat (KVKK, 6563 sayılı Kanun, Mesafeli Sözleşmeler Yönetmeliği, GDPR) değiştiğinde metinlerin güncelliği geliştiriciye hatırlatılmalıdır.

## Yapay Zekanın Bu Dosyadaki Görevi
- Yapay zeka yeni bir projeye başlarken bu dosyadaki "Proje Başında Sorulacaklar" bölümünü geliştiriciye sormalı, cevapları projenin sistem belgesine yazmalıdır.
- Yapay zeka projeye yeni bir özellik eklenirken "Özellik Eklendiğinde Doğan Yükümlülükler" bölümünü kontrol etmeli, yeni bir yükümlülük doğuyorsa özelliği yazmadan önce geliştiriciyi uyarmalıdır.
- Uyarılar kısa, somut ve sonuç odaklı olmalıdır: ne gerekiyor, neden gerekiyor, yapılmazsa ne olur, kimden destek alınmalı.
- Yapay zeka hukuki, vergisel veya mali konularda kesin hüküm vermemeli; "bu konuda bir avukata / mali müşavire danışılmalıdır" demeli, ancak konuyu atlamamalıdır.
- Geliştirici bir uyarıyı bilerek atlarsa bu karar sistem belgesindeki açık maddelere tarihle yazılmalı, canlıya çıkışta yeniden hatırlatılmalıdır.
- Uyarılar projenin türüne göre yapılmalı; hobi projesine ticari şirket yükümlülükleri, ticari projeye "gerek yok" denmemelidir.
- Mevzuat bilgisi zamanla değişebileceği için yapay zeka kendi bilgisinin tarihini göz önünde bulundurmalı, güncel durumun resmî kaynaktan doğrulanmasını önermelidir.

## Proje Başında Sorulacaklar
- Proje kişisel / hobi amaçlı mı, yoksa ticari bir faaliyetin parçası mı olduğu sorulmalıdır.
- Projenin arkasında bir şirket (şahıs şirketi, limited, anonim) olup olmadığı, varsa unvanı ve vergi bilgisinin hazır olup olmadığı sorulmalıdır.
- Uygulamayı kimlerin kullanacağı sorulmalıdır: yalnızca geliştirici, kapalı bir ekip, firmalar (B2B), bireysel tüketiciler (B2C).
- Uygulamanın başka kişilerin kişisel verisini (ad, e-posta, telefon, IP, konum) toplayıp toplamadığı sorulmalıdır.
- Özel nitelikli kişisel veri (sağlık, biyometrik, din, etnik köken, ceza mahkûmiyeti) işlenip işlenmeyeceği sorulmalıdır.
- Kullanıcılar arasında 18 yaş altı kişiler olup olmayacağı sorulmalıdır.
- Uygulamada ödeme alınıp alınmayacağı, abonelik, satış veya bağış olup olmadığı sorulmalıdır.
- Kullanıcıların içerik (yorum, görsel, ilan, ürün) yükleyip yükleyemeyeceği ve bu içeriklerin herkese açık olup olmayacağı sorulmalıdır.
- Uygulamanın yurt dışından kullanıcı alıp almayacağı (özellikle AB) sorulmalıdır.
- Pazarlama e-postası veya SMS gönderilip gönderilmeyeceği sorulmalıdır.
- Uygulamanın başka platformların verisini (API, kazıma / scraping) kullanıp kullanmayacağı sorulmalıdır.
- Uygulamada yapay zeka ile içerik üretilip üretilmeyeceği veya kullanıcı verisinin bir yapay zeka hizmetine gönderilip gönderilmeyeceği sorulmalıdır.
- Mobil uygulama mağazalarında (App Store, Google Play) yayınlanıp yayınlanmayacağı sorulmalıdır.
- Projenin bir müşteri için mi (ajans / serbest çalışan işi) yoksa kendi ürünü olarak mı geliştirildiği sorulmalıdır; müşteri işiyse kod, alan adı ve hesapların sahipliği netleştirilmelidir.

## Bireysel / Hobi Proje İse
- Yalnızca geliştiricinin kendisinin kullandığı, başkasının verisini toplamayan projelerde sözleşme ve aydınlatma metni gerekmeyebileceği belirtilmelidir.
- Proje hobi amaçlı olsa bile başka kişilerin kişisel verisi toplanıyorsa KVKK'nın uygulanabileceği, "kişisel / ev içi kullanım" istisnasının herkese açık uygulamaları kapsamadığı geliştiriciye söylenmelidir.
- Hobi projesinde şirket unvanı olmadığı için sözleşmeye uydurma bir şirket adı yazılmamalı, gerçek kişi olarak hizmet verildiği açıkça belirtilmeli veya metin hiç eklenmemelidir.
- Hobi projesine büyük şirketlerin metinlerini kopyalamak, olmayan hizmetleri ve yükümlülükleri taahhüt etmek anlamına gelebileceği belirtilmelidir.
- Herkese açık hobi projelerinde en azından kısa ve dürüst bir gizlilik notu (hangi veri toplanıyor, ne için, nasıl silinir) önerilmelidir.
- Hobi projesi zamanla gelir elde etmeye başlarsa (reklam, bağış, ücretli özellik) ticari proje maddelerinin devreye gireceği hatırlatılmalıdır.
- Hobi projesinde bile parola, e-posta ve oturum güvenliği ticari projedeki kadar ciddi uygulanmalıdır; veri ihlalinin sorumluluğu projenin küçüklüğüne bakmaz.

## Ticari Proje İse
- Ticari faaliyet için vergi mükellefiyeti (şahıs şirketi veya şirket) gerekebileceği, ödeme almadan önce mali müşavire danışılması gerektiği belirtilmelidir.
- Sözleşmelerde, faturalarda ve sitenin alt bilgisinde şirketin tam unvanı, adresi, vergi dairesi ve numarası, MERSİS numarası (varsa) ve iletişim bilgileri yer almalıdır.
- E-ticaret yapılıyorsa ETBİS (Elektronik Ticaret Bilgi Sistemi) kaydının gerekip gerekmediği kontrol edilmelidir.
- Satış yapılıyorsa mesafeli satış sözleşmesi, ön bilgilendirme formu, cayma hakkı ve iade koşulları zorunludur; fiyatların vergiler dahil gösterilmesi gerekir.
- Satılan her şey için fatura / e-arşiv fatura kesilmesi gerekir; e-fatura / e-arşiv entegrasyonu geliştiriciye hatırlatılmalıdır.
- Abonelik satılıyorsa otomatik yenileme, iptal yolu ve yenileme öncesi bilgilendirme açıkça tasarlanmalıdır; iptal, abone olmak kadar kolay olmalıdır.
- Ödeme kart bilgisi uygulamada tutulmamalı, lisanslı bir ödeme kuruluşu (iyzico, PayTR, Stripe vb.) kullanılmalıdır.
- Uygulama kullanıcılar adına para tutuyor, aktarıyor veya cüzdan / bakiye sunuyorsa ödeme hizmetleri mevzuatı (6493 sayılı Kanun) kapsamında lisans gerekebileceği mutlaka uyarılmalıdır.
- Ticari projede VERBİS kaydı yükümlülüğü (çalışan sayısı, bilanço eşiği veya ana faaliyetin özel nitelikli veri işlemek olması) kontrol edilmelidir.
- Marka adı kullanılacaksa marka tescili (TÜRKPATENT) ve benzer marka araştırması önerilmelidir.
- Alan adı ve tüm hizmet hesapları (sunucu, e-posta, ödeme, analiz) şirket adına ve şirketin kurumsal e-postasıyla açılmalıdır; kişisel hesaplara bağlı bırakılmamalıdır.

## Özellik Eklendiğinde Doğan Yükümlülükler
- Kayıt / üyelik eklenirse: kullanım sözleşmesi, KVKK aydınlatma metni, hesap kapatma yolu ve veri silme süreci gerekir.
- E-posta ile iletişim eklenirse: işlemsel e-postalar için izin gerekmez, ancak pazarlama e-postası için ayrı izin, ret bağlantısı ve İYS kaydı gerekir.
- Analiz / reklam etiketi (GA4, Meta Pixel, Hotjar, Clarity) eklenirse: çerez izni, çerez politikası, aydınlatma metninde yurt dışı aktarım bilgisi gerekir.
- Oturum kaydı aracı (Hotjar, Clarity) eklenirse: kullanıcının ekran hareketlerinin kaydedildiği açıkça bildirilmeli, form alanları maskelenmelidir.
- Ödeme eklenirse: mesafeli satış sözleşmesi, ön bilgilendirme, iade koşulları, fatura, ödeme kuruluşu sözleşmesi ve vergi mükellefiyeti gerekir.
- Kullanıcı içeriği (yorum, görsel, ilan) eklenirse: içerik kuralları, şikayet / bildir butonu, kaldırma süreci, içerik sahipliği ve kullanım izni maddeleri gerekir.
- Kullanıcılar arası mesajlaşma eklenirse: kötüye kullanım bildirimi, engelleme ve içerik saklama süresi tanımlanmalıdır.
- Herkese açık içerik barındırılırsa: 5651 sayılı Kanun kapsamında yer sağlayıcı yükümlülükleri (trafik bilgisi saklama, uyar-kaldır süreci, iletişim bilgisi) kontrol edilmelidir.
- Konum verisi eklenirse: açık rıza, amaç sınırlaması ve konumun ne kadar hassas tutulacağı belirlenmelidir.
- Dosya / belge yükleme eklenirse: kişisel veri içerebileceği, saklama süresi, virüs taraması ve erişim yetkisi düşünülmelidir.
- Kimlik, vergi numarası veya TC kimlik numarası toplanırsa: gerçekten gerekli olup olmadığı sorgulanmalı, gerekiyorsa şifreli saklanmalı ve maskelenerek gösterilmelidir.
- 18 yaş altı kullanıcı kabul edilirse: veli onayı, yaşa uygun içerik ve ek veri koruma önlemleri gerekir.
- Sağlık, biyometrik veya diğer özel nitelikli veri eklenirse: açık rıza, ek güvenlik önlemleri (Kurul'un yeterli önlemler kararı) ve büyük olasılıkla VERBİS kaydı gerekir.
- Sosyal giriş (Google, Apple, Facebook) eklenirse: sağlayıcıların istediği gizlilik politikası ve kullanım koşulları bağlantıları, uygulama doğrulama süreçleri gerekir.
- Mobil uygulama mağazası eklenirse: uygulama içinden hesap silme, gizlilik etiketleri (App Privacy, Data Safety) ve gizlilik politikası bağlantısı zorunludur.
- Yurt dışından kullanıcı alınırsa: GDPR, AB temsilcisi gerekliliği ve yurt dışı aktarım kuralları değerlendirilmelidir.
- Pazar yeri / çok satıcılı yapı eklenirse: aracı hizmet sağlayıcı yükümlülükleri, satıcı doğrulaması ve satıcı sözleşmesi gerekir.
- Yapay zeka özelliği eklenirse: "Yapay Zeka Özellikleri" bölümü uygulanmalıdır.
- Başka platformların verisi kullanılırsa: "Üçüncü Taraf Platform Kuralları" bölümü uygulanmalıdır.

## Sözleşme Eklemenin ve Eklememenin Riskleri
- Sözleşme eklememek her zaman risksiz değildir: kişisel veri toplanıyorsa aydınlatma yükümlülüğü sözleşme olsun olmasın vardır.
- Hazır veya kopyalanmış bir sözleşme eklemek de risklidir: metinde yazan her taahhüt (ör. "verileriniz 30 gün içinde silinir", "7/24 destek", "verileriniz Türkiye'de saklanır") uygulamanın gerçekten yaptığı bir şey olmalıdır.
- Başka bir şirketin sözleşme metni kopyalanmamalıdır; hem telif sorunu doğurur hem de o şirketin yaptığı ama projenin yapmadığı işleri taahhüt eder.
- Tüketicilere karşı "hiçbir sorumluluk kabul edilmez" gibi genel sorumluluk reddi maddeleri çoğu zaman geçersizdir; geliştirici bu maddelere güvenmemelidir.
- Gerekmeyen yerde açık rıza istemek de hatalıdır: hizmetin zaten gerektirdiği işlemler için rıza istenirse rıza geri alındığında hizmet sunulamaz hale gelir.
- Sözleşmede yazan şirket unvanı, adres ve vergi bilgisi gerçek olmalıdır; boş veya uydurma bilgi bırakılan metin yayına alınmamalıdır.
- Yetkili mahkeme ve uygulanacak hukuk maddesi tüketicinin yasal haklarını kısıtlayacak şekilde yazılmamalıdır.
- Sözleşme değiştirildiğinde eski kullanıcıların hangi metne tabi olduğu belirsiz kalmamalı; sürümleme ve yeniden onay süreci kurulmalıdır.
- Yapay zekanın yazdığı metin yalnızca bir taslaktır; avukat kontrolünden geçmeden yayına alınması geliştiricinin sorumluluğundadır.

## Metin ile Sistemin Uyumu
- Sözleşme, aydınlatma metni ve çerez politikasında yazan her şey sistemin gerçek davranışıyla birebir uyuşmalıdır.
- Aydınlatma metninde listelenen veri türleri ile veritabanında gerçekten tutulan alanlar karşılaştırılmalıdır.
- Aydınlatma metninde listelenen üçüncü taraflar ile uygulamanın gerçekten veri gönderdiği hizmetler (e-posta, analiz, CDN, yapay zeka, hata izleme) karşılaştırılmalıdır.
- Çerez politikasındaki liste ile tarayıcıda gerçekten oluşan çerezler karşılaştırılmalıdır.
- Metinde yazan saklama süreleri ile bakım görevlerinin gerçekten sildiği süreler aynı olmalıdır.
- Metinde yazan hesap silme süreci uygulamada gerçekten çalışmalıdır.
- Yeni bir hizmet, alan veya çerez eklendiğinde yapay zeka ilgili metnin güncellenmesi gerektiğini hatırlatmalıdır.
- Uyum kontrolü canlıya çıkıştan önce ve her büyük sürümde yapılmalıdır.

## Üçüncü Taraf Platform Kuralları
- Kullanılan her API'nin kullanım koşulları (Terms of Service) okunmalı, verinin nasıl saklanabileceği ve gösterilebileceği kontrol edilmelidir.
- Google API'leri (YouTube, Search Console, Ads) kullanılıyorsa gizlilik politikası yayınlanması, veri saklama süresi sınırları ve OAuth uygulama doğrulaması gibi şartlar kontrol edilmelidir.
- YouTube API kullanılıyorsa YouTube API Hizmetleri Şartları gereği gizlilik politikasında YouTube'a ve Google Gizlilik Politikası'na bağlantı verilmesi gibi ek şartlar olduğu hatırlatılmalıdır.
- Pazar yeri API'leri (Trendyol, Hepsiburada, Amazon) yalnızca hesap sahibinin kendi verisi için kullanılmalı, başka satıcıların verisi toplanmamalıdır.
- Web sitelerinden veri kazıma (scraping) yapılacaksa sitenin kullanım koşulları, robots.txt, telif ve kişisel veri boyutu değerlendirilmeli, geliştirici yasal risk konusunda uyarılmalıdır.
- Harita, yazı tipi, ikon ve görsel servislerinin lisans ve atıf (attribution) şartları uygulanmalıdır.
- Sosyal medya içerikleri gömülürken (embed) platformun izin verdiği yöntem kullanılmalıdır.
- Ücretsiz plan kullanılan hizmetlerin ticari kullanıma izin verip vermediği kontrol edilmelidir.

## Fikri Mülkiyet ve Lisanslar
- Kullanılan açık kaynak paketlerin lisansları kontrol edilmeli; GPL / AGPL gibi lisansların kapalı kaynak ticari projelerde kaynak kodu paylaşma yükümlülüğü doğurabileceği uyarılmalıdır.
- Projede kullanılan görsel, ikon, yazı tipi, video ve müziklerin lisansı olmalıdır; internetten bulunan görseller izinsiz kullanılmamalıdır.
- Yapay zeka ile üretilen görsel ve metinlerin kullanım hakkı, kullanılan aracın koşullarına göre kontrol edilmelidir.
- Başka markaların logo ve adları yalnızca izinli veya açıklayıcı (nominatif) kullanım sınırında kullanılmalıdır.
- Müşteri için yapılan işlerde kodun, tasarımın ve içeriğin mülkiyeti yazılı olarak belirlenmelidir.
- Projenin kendi kodunun lisansı (kapalı, MIT vb.) bilinçli olarak seçilmeli, herkese açık depolarda lisans dosyası bulunmalıdır.

## Yapay Zeka Özellikleri
- Kullanıcı verisi bir yapay zeka hizmetine (OpenAI, Anthropic, Google) gönderiliyorsa bu aktarım aydınlatma metninde ve yurt dışı aktarım bilgisinde yer almalıdır.
- Yapay zeka hizmetinin gönderilen veriyi eğitimde kullanıp kullanmadığı ve ne kadar sakladığı kontrol edilmeli, kurumsal / API koşulları tercih edilmelidir.
- Kişisel veya gizli veriler gereksiz yere yapay zekaya gönderilmemeli, mümkünse maskelenmelidir.
- Yapay zeka ile üretilen içeriklerin yapay zeka ürünü olduğu kullanıcıya belirtilmelidir. (Önerilen)
- Yapay zekanın verdiği kararlar (ör. otomatik reddetme, puanlama) kişileri etkiliyorsa insan denetimi ve itiraz yolu sunulmalıdır.
- AB'ye hizmet veriliyorsa AB Yapay Zeka Yasası (AI Act) kapsamındaki şeffaflık ve risk yükümlülükleri değerlendirilmelidir.
- Yapay zeka çıktılarının yanlış olabileceği, özellikle sağlık, hukuk ve finans konularında kullanıcıya açıkça belirtilmelidir.
- Yapay zeka maliyetleri için kullanıcı başı ve günlük sınır konmalı, kötüye kullanımla oluşacak fatura riski geliştiriciye belirtilmelidir.

## Erişilebilirlik ve Tüketici Koruma
- Kamuya açık hizmetlerde erişilebilirlik (WCAG) kurallarına uyulmalıdır; bazı sektörlerde ve ülkelerde yasal zorunluluk olabileceği belirtilmelidir.
- Kullanıcıyı yanıltan tasarımlar (dark pattern) kullanılmamalıdır: gizli ücret, zor iptal, önceden işaretli onay kutusu, sahte geri sayım, yanıltıcı "son 2 ürün" uyarıları.
- Fiyat, indirim ve kampanya gösterimleri tüketici mevzuatına uygun olmalıdır (ör. indirim öncesi fiyatın gerçek olması).
- Kullanıcı yorumları ve puanları gerçek olmalı, sahte yorum üretilmemeli veya satın alınmamalıdır.
