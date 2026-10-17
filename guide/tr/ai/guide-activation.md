# Kılavuzun Devreye Girmesi
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Temel İlke
- Kılavuz bir yapılacaklar listesi değildir; projede olmayan bir yapıyı (ör. kayıt, panel, e-posta, ödeme) kendiliğinden kurdurmaz.
- Kılavuz, geliştirici o yapıyı yapmaya başladığı anda devreye girer; o ana kadar ilgili dosyalar uygulanmaz ve önerilmez.
- Geliştirici bir yapıyı bilerek istemiyorsa (ör. kayıt olmayacak, panel olmayacak) yapay zeka ısrar etmemeli, eksiklik olarak raporlamamalıdır.
- Geliştirici kendi başladığı küçük bir projeye kılavuzu sonradan eklediyse mevcut kod hemen kılavuza göre değiştirilmemeli; geliştirici boğulmamalıdır.

## Tetikleyiciler
- Geliştirici bir yapı üzerinde çalışmaya başladığında veya istediğinde yapay zeka kılavuzda o yapıyla ilgili dosyaları bulmalı ve okumalıdır.
- Örnek tetikleyiciler: giriş / çıkış → auth/login.md, auth/session.md; kayıt → auth/register.md, auth/email-verification.md; panel veya tablo → ui/data-tables.md, security/data-isolation.md; form → forms/; e-posta gönderimi → emails/; kişisel veri, çerez, sözleşme → legal/; .env veya yeni servis → setup/; deploy → operations/deployment.md; kuyruk / arka plan işi → operations/queues.md, operations/jobs.md; framework (package.json, composer.json, *.csproj, pyproject.toml, pubspec.yaml) → stack/framework-rules.md ve ilgili stack/ dosyası; mobil uygulama → stack/mobile/.
- Bir yapı başka yapıları da gerektiriyorsa bağlı yapılar otomatik olarak işin kapsamına alınmalıdır (bkz. Bağlı Yapılar); yapay zeka bunları kısa bir liste halinde bildirmeli, geliştirici açıkça çıkarmadıkça birlikte yapmalıdır.
- Proje türüne bağlı bölümlerde (bireysel, firma bazlı, davetli) hangi bölümün geçerli olduğu belirsizse yapay zeka bir kez sormalı ve cevabı kural dosyasına yazmalıdır.

## Bağlı Yapılar
- Bir sayfa veya özellik kullanılmaya başlandığında, onun eksiksiz çalışması için gereken bağlı yapılar da otomatik devreye alınmalıdır; yarım akış (ör. kayıt var ama doğrulama e-postası yok) bırakılmamalıdır.
- Yapay zeka işe başlarken bağlı yapıları tek listede bildirmeli; geliştirici "bunu istemiyorum" demedikçe hepsi yapılmalıdır, çıkarılanlar kural dosyasına sapma olarak yazılmalıdır.
- Bağlı yapı projede zaten varsa yeniden yazılmamalı, mevcut olan kullanılmalıdır.
- Kayıt → giriş, çıkış, oturum, e-posta doğrulama ve doğrulama e-postası, e-posta bağlantı onay sayfası, şifremi unuttum ve sıfırlama e-postası, parola değişti bildirimi, hız sınırı, bot koruması, kullanım koşulları ve aydınlatma onayı, onay kaydı, hesap kapatma, saklama süresi / temizlik görevi, audit log.
- Giriş → çıkış, oturum yönetimi, şifremi unuttum, hız sınırı, CSRF, güvenli çerez, yetkisiz erişim yönlendirmesi.
- Onaylı başvuru / davet → başvuru alındı e-postası, yönetici bildirimi, onay / red e-postası, davet bağlantısı ve süresi, bekleyen başvuru hatırlatması, yönetici onay ekranı.
- Panel → rol ve yetki kontrolü, veri izolasyonu, tablolarda sayfalama / filtre / sıralama, yükleme ve boş durumları, hata sayfaları, audit log, responsive düzen.
- Form → sunucu doğrulaması, alan hataları, gönderim kilidi, başarı / hata bildirimi, CSRF, hız sınırı (herkese açıksa bot koruması).
- E-posta gönderimi → şablon düzeni, düz metin sürümü, gönderen alan adı doğrulaması (SPF, DKIM, DMARC), gönderim hatası loglama, ortam değişkenleri.
- Dosya yükleme → tür / boyut doğrulama, depolama, erişim kontrolü, görsel optimizasyonu, silinen kaydın dosyasını temizleme.
- Kişisel veri toplama → aydınlatma metni, gerekiyorsa açık rıza, saklama süresi, hesap / veri silme talebi.
- Analiz / pazarlama aracı → çerez onayı, çerez politikası.
- Ödeme → fatura / makbuz e-postası, iade süreci, mesafeli satış sözleşmesi, webhook doğrulaması, idempotency.
- Yeni dış servis → .env değişkeni ve açıklaması, .env.example, hata / zaman aşımı yönetimi, maliyet notu.
- Yeni özellik → sistem belgesi ve gerekiyorsa kural dosyası güncellemesi.
- Bu liste örnektir; yapay zeka ilgili kılavuz dosyalarındaki bağlantılardan diğer bağlı yapıları da çıkarmalıdır.

## Mevcut Kod
- Tetiklenen yapı daha önce kılavuz dışında yazılmışsa yapay zeka eksikleri önem sırasına göre kısaca listelemeli; düzeltmeyi geliştiricinin onayıyla yapmalıdır.
- Güvenlik açığı (ör. parolanın düz metin saklanması, CSRF koruması olmaması) her durumda geliştiriciye bildirilmelidir; diğer eksikler yalnız ilgili yapı üzerinde çalışılırken söylenmelidir.
- Kılavuzla çelişen bilinçli bir geliştirici kararı kural dosyasına "kılavuzdan sapma" olarak gerekçesiyle yazılmalı ve bir daha sorulmamalıdır.

## Dokunulan Yapının Kontrolü
- Bir dosyada değişiklik yapılırken (yeni ya da mevcut proje) yapay zeka o dosyanın hangi yapıya ait olduğunu belirlemeli ve ilgili kılavuz dosyalarının maddelerini hem yazdığı koda hem dosyadaki mevcut yapıya uygulamalıdır.
- Eklenti bunu hook ile destekler: düzenlenen dosya yol ve içerik desenleriyle kılavuz dosyalarına eşlenir, eşleşen dosyaların metni bağlama otomatik eklenir. Yapay zeka bu metni yok saymamalıdır.
- Mevcut kodda karşılanmayan maddeler (ör. tabloda sıralama veya sayfalama yok) işin sonunda kısa liste halinde bildirilmeli; düzeltme geliştiricinin onayıyla yapılmalıdır.
- Eşleme desenlerine uymayan dosyalar olabileceği için proje genelinde kontrol /cubernic-architect:audit komutuyla yapılır; denetimde her tetiklenen kılavuz dosyasının her maddesi tek tek kontrol edilmelidir.

## Uyumsuzlukları Yakalama
- Yapay zeka projeye uymayan, projenin kendi kararlarıyla veya kılavuzla ters düşen ve geliştiricinin fark etmediği durumları mutlaka yakalamalı ve kısaca bildirmelidir.
- Örnekler: yalnız davetli bir sisteme açık kayıt formu eklenmesi; firma bazlı panelde veri izolasyonu olmadan sorgu yazılması; kişisel veri toplanırken aydınlatma / onay olmaması; ticari projede bireysel lisanslı bir kütüphane veya servis kullanılması; kural dosyasındaki port, veri kaynağı veya mimari kararla çelişen kod; aynı işi yapan ikinci bir yapı kurulması.
- Geliştiricinin isteği projenin önceki bir kararıyla çelişiyorsa yapay zeka işi yapmadan önce çelişkiyi söylemeli ve hangisinin geçerli olacağını sormalıdır.
- Bildirim tek cümlelik ve gerekçeli olmalı; karar geliştiriciye aittir, kabul edilen sapma kural dosyasına yazılmalıdır.
- Uyumsuzluk yalnız o anki işte değil, iş sırasında okunan dosyalarda fark edildiğinde de bildirilmelidir; ancak bunun için ek tarama yapılmamalıdır.

## Ölçü
- Yapay zeka yalnız o anki işle ilgili kılavuz dosyalarını okumalı, tüm kılavuzu her işte taramamalıdır.
- Öneriler kısa olmalı; geliştiricinin işini yavaşlatacak uzun uyum raporları hazırlanmamalıdır.
- İstisna: geliştirici proje incelemesi / denetimi isterse (/cubernic-architect:audit) tam rapor işin kendisidir.
