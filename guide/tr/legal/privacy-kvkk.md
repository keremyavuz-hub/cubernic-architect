# Kişisel Veriler, KVKK ve Gizlilik
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
- KVKK aydınlatma metni (ve gerekiyorsa GDPR gizlilik politikası) ayrı bir sayfada herkese açık yayınlanmalıdır.
- Aydınlatma metninde veri sorumlusunun kimliği, işlenen veriler, işleme amaçları, hukuki sebepler, aktarılan taraflar ve yurt dışı aktarım bilgisi bulunmalıdır.
- Kişisel veri toplanan her formda aydınlatma metnine bağlantı bulunmalıdır.
- Aydınlatma metni okundu bilgisi ile açık rıza ayrı tutulmalıdır; aydınlatma onay kutusu ile rıza kutusu birleştirilmemelidir.
- Açık rıza yalnızca gerçekten gerekli işlemler için istenmeli, hizmetin şartı haline getirilmemelidir.
- Yurt dışındaki hizmet sağlayıcılara (e-posta, sunucu, analiz, CDN) veri aktarılıyorsa aydınlatma metninde belirtilmeli ve gerekli hukuki dayanak sağlanmalıdır.
- Kullanılan üçüncü taraf hizmetlerin (Resend, Cloudflare, analiz araçları) listesi tutulmalıdır.
- Kullanıcı KVKK madde 11 kapsamındaki haklarını (bilgi alma, düzeltme, silme, itiraz) uygulama içinden veya belirli bir iletişim kanalından kullanabilmelidir.
- Kişisel veri başvurularına en geç 30 gün içinde yanıt verilmelidir.
- Gereğinden fazla kişisel veri toplanmamalıdır (veri minimizasyonu).
- Kişisel veriler loglara, hata kayıtlarına ve analiz araçlarına gereksiz yere yazılmamalıdır.
- Parola, kod ve gizli bilgiler hiçbir kayıtta açık metin olarak yer almamalıdır.
- Veri ihlali durumunda Kurul'a ve ilgili kişilere bildirim yapılacak bir süreç tanımlanmalıdır (en geç 72 saat).
- Veri sorumlusu kriterleri karşılanıyorsa VERBİS kaydı yapılmalıdır.
- Aydınlatma metni de sürümlenmeli ve değişikliklerde kullanıcılar bilgilendirilmelidir.

## Bireysel Kullanıcı Sistemi İse
- Kullanıcı kendi kişisel verilerini hesap ayarlarından görebilmeli ve düzeltebilmelidir.
- Kullanıcı verilerinin bir kopyasını indirebilmelidir (veri taşınabilirliği). (Önerilen)
- Çocuklara yönelik hizmetlerde veli onayı süreci tanımlanmalıdır.

## Firma / Müşteri Bazlı Panel İse
- Firmanın panele yüklediği verilerde kişisel veri varsa (ör. müşteri listesi) platformun veri işleyen, firmanın veri sorumlusu olduğu sözleşmede belirtilmelidir.
- Firma yetkililerinin kişisel verileri (ad, e-posta, IP) ile firmanın ticari verileri ayrı değerlendirilmelidir.
- Firma kullanıcısının kişisel verilerinin silinmesi firmanın ticari kayıtlarını bozmamalıdır.
