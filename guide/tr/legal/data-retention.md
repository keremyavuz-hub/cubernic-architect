# Veri Saklama, Silme ve Yedekleme
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Geliştirici Uyarısı
- Bu dosyaya göre oluşturulan sözleşme ve hukuki metinler yalnızca hazır taslak içeriktir, hukuki danışmanlık yerine geçmez ve yasal bir alt yapı sağlamaz.
- Yapay zeka hukuki bir metin veya sayfa oluşturduğunda, işin sonunda geliştiriciye bu metnin taslak olduğunu ve bir hukukçu tarafından kontrol edilmeden yayına alınmaması gerektiğini açıkça yazmalıdır.
- Taslak metinlerde şirket unvanı, adres, vergi bilgisi, yetkili mahkeme gibi bilgiler uydurulmamalı, köşeli parantezli yer tutucularla bırakılmalıdır (ör. [ŞİRKET UNVANI]).
- Taslak metnin kodunda veya veritabanında taslak durumu, son gözden geçiren kişi ve hukukçu onay tarihi alanları tutulmalıdır.
- Hukukçu onayı alınmamış metinler canlıya çıkış kontrol listesinde açık madde olarak kalmalıdır.
- Mevzuat (KVKK, 6563 sayılı Kanun, Mesafeli Sözleşmeler Yönetmeliği, GDPR) değiştiğinde metinlerin güncelliği geliştiriciye hatırlatılmalıdır.

## Karar Mekanizması
- Proje başında veritabanındaki her tablo / veri türü için bir saklama kararı verilmelidir; karar verilmemiş veri türü bırakılmamalıdır.
- Her veri türü için şu sorular cevaplanmalıdır: neden tutuluyor, yasal saklama zorunluluğu var mı, ne kadar süre gerekli, süre dolunca silinecek mi anonimleştirilecek mi, yedeklerde ne kadar kalacak, silmeyi kim / ne tetikleyecek.
- Saklama kararları bir tabloda belgelenmelidir: veri türü, amaç, hukuki dayanak, saklama süresi, süre sonu işlemi (silme / anonimleştirme / arşiv), yedek saklama süresi, sorumlu.
- Saklama süresinin başlangıç noktası net olmalıdır (ör. kayıt tarihinden, hesap kapanışından, sözleşme bitiminden itibaren).
- Yapay zeka saklama süresi önerirken öneri olduğunu ve hukuki doğrulama gerektiğini belirtmeli, kararı geliştiriciye bırakmalıdır.
- Saklama kararları değiştiğinde aydınlatma metni, sözleşme ve bakım görevleri birlikte güncellenmelidir.
- Bir kayıt üzerinde devam eden uyuşmazlık, şikayet veya resmî talep varsa (yasal bekletme / legal hold) otomatik silme o kayıt için durdurulabilmelidir.

## Önerilen Süreler (Doğrulanması Gereken Örnekler)
- Bu bölümdeki süreler başlangıç önerisidir; yasal süreler değişebileceği için hukukçu ve mali müşavirle doğrulanmalıdır.
- Doğrulanmamış kayıt / başvuru kayıtları: 7 gün.
- Tek kullanımlık kodlar (doğrulama, sıfırlama, davet): kullanıldıktan veya süresi dolduktan sonra 7–30 gün.
- Kapanmış veya süresi dolmuş oturum kayıtları: 30–90 gün.
- Başarısız giriş ve güvenlik olayları: 6 ay – 2 yıl.
- Etkinlik kaydı (audit log): en az 1–2 yıl; mali veya hukuki işlem içeriyorsa daha uzun.
- İnternete erişim / trafik kayıtları (5651 kapsamında yer sağlayıcıysa): mevzuatta belirtilen süre (1–2 yıl aralığında) doğrulanarak uygulanmalıdır.
- Fatura ve muhasebe kayıtları: Vergi Usul Kanunu gereği 5 yıl, Türk Ticaret Kanunu gereği 10 yıla kadar.
- Ticari sözleşme ve onay kayıtları: zamanaşımı süresi boyunca (genellikle 10 yıla kadar).
- İzin ve onay kayıtları (pazarlama, çerez, sözleşme kabulü): ispat yükü süresince; izin geri alındıktan sonra da ispat amacıyla saklanabilir.
- Kapatılmış kullanıcı hesabının kişisel verileri: geri alma süresi (14–30 gün) sonunda silinmeli veya anonimleştirilmelidir.
- Kapatılmış firma hesabının ticari verileri: sözleşmede belirtilen süre (ör. 30–90 gün içinde dışa aktarma imkânı, sonra silme).
- Destek / iletişim yazışmaları: 1–3 yıl.
- Sunucu ve uygulama logları: 30–90 gün; kişisel veri içermemesi tercih edilmelidir.
- Analiz verileri: analiz aracının saklama ayarı en kısa yeterli süreye çekilmelidir (ör. GA4'te 2 veya 14 ay).

## Silme ve Anonimleştirme
- Kalıcı silme (hard delete) ile yumuşak silme (soft delete, deleted_at alanı) arasındaki seçim her veri türü için bilinçli yapılmalıdır.
- Yumuşak silinen kayıtlar uygulamanın hiçbir sorgusunda görünmemeli ve belirli bir süre sonra kalıcı olarak silinmelidir; yumuşak silme sonsuza kadar saklama anlamına gelmemelidir.
- Kişisel verinin silinmesi gereken ama kaydın ticari / istatistiksel olarak tutulması gereken durumlarda anonimleştirme yapılmalıdır (ad, e-posta, IP gibi alanlar geri döndürülemez şekilde değiştirilmelidir).
- Takma ad verme (pseudonymization) anonimleştirme sayılmaz; anahtar saklandıkça veri kişisel veri olmaya devam eder.
- İlişkili tablolarda silme sırası ve yabancı anahtar davranışları (cascade, set null) bilinçli seçilmelidir; bir kullanıcının silinmesi başka bir firmanın verisini silmemelidir.
- Dosya depolamadaki (S3, R2) dosyalar veritabanı kaydıyla birlikte silinmeli, yetim dosya kalmamalıdır.
- Üçüncü taraf hizmetlerdeki kopyalar (e-posta sağlayıcısı, analiz, CRM, yapay zeka hizmeti) da silme sürecine dahil edilmelidir.
- Otomatik silme görevleri yalnızca sahipsiz ve süresi dolmuş kayıtları kapsamalı, her çalışma etkinlik kaydına yazılmalıdır.
- Otomatik silme ilk kez canlıda çalıştırılmadan önce "kuru çalışma" (dry run) ile neyin silineceği listelenmeli ve geliştiriciye gösterilmelidir.

## Yedekleme
- Yedekleme politikası yazılı olmalıdır: neyin, ne sıklıkla, nereye, ne kadar süreyle yedeklendiği.
- Önerilen başlangıç: günlük yedek 7–14 gün, haftalık yedek 4–8 hafta, aylık yedek 6–12 ay saklanmalıdır.
- Yönetilen veritabanlarında anlık geri dönüş (Point-in-Time Recovery) özelliği varsa açılmalıdır. (Önerilen)
- 3-2-1 kuralı uygulanmalıdır: en az 3 kopya, 2 farklı ortam, 1 kopya farklı konumda (farklı sağlayıcı veya bölge).
- Yedekler şifrelenmeli, yedek erişim anahtarları veritabanı erişiminden ayrı tutulmalıdır.
- Yedekler ana sunucu silinse veya ele geçirilse bile silinemeyecek şekilde saklanmalıdır (değiştirilemez / immutable depolama veya ayrı hesap). (Önerilen)
- Geri yükleme düzenli aralıklarla (ör. ayda bir) ayrı bir ortamda test edilmelidir; test edilmemiş yedek yedek sayılmamalıdır.
- Geri yükleme süresi (RTO) ve kabul edilebilir veri kaybı (RPO) hedefleri belirlenmelidir.
- Yedeklerdeki kişisel veriler de saklama politikasına tabidir; silinen bir kullanıcının verisi yedek saklama süresi dolunca yedeklerden de çıkmış olmalıdır.
- Yedekten geri yükleme yapıldığında, yedek alındıktan sonra silinmiş kişisel veriler yeniden silinmelidir; bunun için silme talepleri ayrıca kayıt altında tutulmalıdır.
- Yedekleme işinin başarısı izlenmeli, başarısız yedekte uyarı gönderilmelidir.
- Önemli bir değişiklikten (migration, toplu güncelleme) önce elle ek yedek alınmalıdır.

## Firma / Müşteri Bazlı Panel İse
- Firma hesabı kapandıktan sonra firma verilerinin ne kadar saklanacağı sözleşmede yazmalı ve bu süre uygulanmalıdır.
- Firmanın yayından kaldırdığı içeriklerin ne kadar saklanacağı tanımlanmalıdır.
- Onay ve yayın kayıtları itiraz süreçleri için yeterli süre saklanmalıdır.
- Firmalara kendi verilerini dışa aktarma imkânı sunulmalıdır.

## Önerilen Platformlar
- Postgres yedekleri için pgBackRest, WAL-G veya yönetilen hizmetlerin kendi yedekleme özellikleri önerilebilir.
- Hetzner kullanılıyorsa sunucu yedeği (Backups) ve anlık görüntü (Snapshots) özellikleri açılmalı, ancak veritabanı için ayrıca mantıksal yedek (pg_dump) alınmalıdır.
- Yedeklerin farklı konumda saklanması için Cloudflare R2, Backblaze B2, Hetzner Storage Box veya Amazon S3 önerilebilir.
- Yönetilen veritabanı (Supabase, Neon, RDS) kullanılıyorsa plana göre yedek saklama süreleri ve PITR desteği geliştiriciye belirtilmelidir.
