# İzin Kayıtlarının Sistemde Saklanması
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
- İzin kayıtları için ayrı bir tablo (ör. consents) oluşturulmalı, kayıtlar yalnızca eklenebilir olmalıdır.
- Her kayıtta kayıt kimliği, kullanıcı kimliği (veya giriş yapmamış ziyaretçi için izin kimliği), izin türü, durum (verildi / geri alındı), metin sürümü, zaman, IP, tarayıcı bilgisi, kaynak (kayıt formu, çerez banner'ı, izinlerim sayfası, API) ve dil tutulmalıdır.
- Firma bazlı sistemlerde kayda firma kimliği ve onayı veren kullanıcının rolü de eklenmelidir.
- İzin metinleri için ayrı bir tablo (ör. consent_documents) oluşturulmalı; tür, sürüm, tam metin, yürürlük tarihi ve hukukçu onay tarihi saklanmalıdır.
- İzin kaydı her zaman metin sürümüne bağlanmalı, hangi kişinin hangi metni kabul ettiği kesin olarak gösterilebilmelidir.
- Güncel izin durumu her tür için en son kayıttan hesaplanmalı, hızlı okuma için ayrı bir özet alan veya görünüm kullanılabilir.
- Giriş yapmamış ziyaretçinin izin kimliği giriş veya kayıt sonrasında kullanıcı kimliğine bağlanmalıdır.
- İzin kayıtları kişisel veri içerdiğinden saklama süresi tanımlanmalı, ancak ispat yükü süresince (ör. zamanaşımı süresi) silinmemelidir.
- Hesap silindiğinde izin kayıtları kişisel bilgilerden arındırılarak ispat amacıyla saklanabilir; bu durum aydınlatma metninde yazmalıdır.
- İzin kayıtları kullanıcı, tarih aralığı ve izin türüne göre dışa aktarılabilmelidir.
- İzin verme ve geri alma işlemleri ayrıca etkinlik kaydına (audit log) yazılmalıdır.
- İzin kaydı yazılmadan ilgili işlem (pazarlama gönderimi, takip betiği) başlatılmamalıdır.
