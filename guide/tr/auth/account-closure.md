# Hesap Kapatma ve Sistemden Çıkış
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Ortak Yapılacaklar
- Kullanıcının hesabını kapatma veya silme isteği, destek ekibine yazmasına gerek kalmadan uygulama içinden yapılabilmelidir.
- Hesap kapatma seçeneği hesap ayarları sayfasında açıkça görünür olmalı, gizlenmemeli veya zorlaştırılmamalıdır.
- Hesap kapatma işlemi geri dönüşü olmayan bir işlem olarak ek onay istemelidir (ör. onay penceresi ve "SİL" yazdırma veya parola tekrarı).
- Hesap kapatmadan önce kullanıcıya nelerin silineceği, nelerin yasal zorunluluk nedeniyle saklanacağı ve ne kadar süre saklanacağı açıkça gösterilmelidir.
- Hesap kapatma isteği için kimlik yeniden doğrulanmalıdır (parola veya e-posta ile gönderilen onay bağlantısı).
- Silme işlemi hemen yapılmak yerine bekleme süreli olabilir (ör. 14 veya 30 gün); bu sürede kullanıcı giriş yaparak işlemi geri alabilmelidir. (Önerilen)
- Bekleme süresi boyunca hesap pasif olmalı, profil ve içerikler başkalarına görünmemelidir.
- Hesap kapatma isteği alındığında ve silme tamamlandığında kullanıcıya bilgi e-postası gönderilmelidir.
- Hesap silindiğinde kullanıcının tüm oturumları kapatılmalı, açık davet ve sıfırlama bağlantıları iptal edilmelidir.
- Kişisel veriler silinmeli veya geri döndürülemez şekilde anonimleştirilmelidir.
- Yasal saklama zorunluluğu olan kayıtlar (fatura, sözleşme onayı, etkinlik kaydı) silinmemeli, kişisel bilgilerden arındırılarak veya erişimi kısıtlanarak saklanmalıdır.
- Etkinlik kaydındaki kullanıcı bağlantısı silme sonrası kopmamalı, kayıt anonim kimlikle korunmalıdır.
- Silinen hesabın e-posta adresi ile yeniden kayıt olunabilmelidir.
- Kullanıcı hesabını silmeden önce verilerinin bir kopyasını indirebilmelidir (veri taşınabilirliği). (Önerilen)
- Veri dışa aktarma isteği arka planda hazırlanmalı, hazır olduğunda süreli ve tek kullanımlık indirme bağlantısı e-postayla gönderilmelidir.
- Pazarlama izinlerinden ve bildirimlerden çıkış, hesabı silmeden ayrıca yapılabilmelidir.
- Her e-postada abonelikten çıkış bağlantısı bulunmalı ve tek tıkla çalışmalıdır (yalnızca pazarlama ve bülten e-postalarında; işlemsel e-postalarda gerekmez).
- Oturumu kapatma (çıkış yap) butonu her sayfada kolayca erişilebilir olmalıdır.
- Tüm cihazlardaki oturumları kapatma seçeneği sunulmalıdır. (Önerilen)
- Hesap kapatma, iptal ve silme işlemleri etkinlik kaydına yazılmalıdır.
- Hesap kapatma talebi için hukuki yanıt süresi (KVKK için en geç 30 gün) aşılmamalıdır.

## Bireysel Kullanıcı Sistemi İse
- Kullanıcı tek başına kendi hesabını kapatabilmelidir.
- Hesap kapatılırken kullanıcıya isteğe bağlı olarak ayrılma nedeni sorulabilir; bu soru zorunlu olmamalıdır. (Opsiyonel)
- Aktif abonelik, bakiye veya bekleyen sipariş varsa hesap kapatmadan önce kullanıcı bilgilendirilmeli ve bu işlemlerin nasıl sonuçlanacağı açıklanmalıdır.
- Uygulama mağazalarında yayınlanan mobil uygulamalarda hesap silme uygulama içinden yapılabilmelidir (Apple ve Google kuralı).
- Kullanıcının paylaştığı herkese açık içeriklerin (yorum, değerlendirme) silineceği veya anonim kalacağı önceden söylenmelidir.

## Firma / Müşteri Bazlı Panel İse
- Kişinin firmadan ayrılması (üyeliğin bırakılması) ile firma hesabının kapatılması ayrı işlemler olarak sunulmalıdır.
- Firma üyesi kendi üyeliğini bırakabilmeli; bu işlem firmanın verisini silmemelidir.
- Firmanın tek sahibi (owner) üyeliğini bırakamamalı; önce sahipliği başka bir üyeye devretmesi istenmelidir.
- Firma sahibi başka bir kullanıcıyı firmadan çıkarabilmeli, çıkarılan kullanıcının o firmadaki oturumları kapatılmalıdır.
- Firma hesabını yalnızca firma sahibi kapatabilmeli, işlem ek onay ve kimlik yeniden doğrulaması istemelidir.
- Firma hesabı kapatılmadan önce firmanın yayındaki içeriklerinin (ürün, ilan, mağaza) ne olacağı açıkça gösterilmelidir (yayından kaldırma, devir, saklama).
- Firma hesabı kapatıldığında tüm üyelere bilgi e-postası gönderilmelidir.
- Firma hesabı kapatılmadan önce firmanın verileri dışa aktarılabilmelidir (ör. CSV/Excel). (Önerilen)
- Firma verileri sözleşmede belirtilen süre boyunca saklanmalı, sonra silinmeli veya anonimleştirilmelidir.
- Firmanın doğruladığı kaynaklar (alan adı, mağaza) hesap kapanınca serbest bırakılmalı, başka bir firma tarafından doğrulanabilmelidir.
- Bir kullanıcının hesabı silindiğinde üyesi olduğu firmaların verisi silinmemelidir.
- Platform yöneticisi bir firmayı askıya alabilmeli; askıya alma silme anlamına gelmemeli ve geri alınabilmelidir.

## Yalnız Davetli Sistem İse
- Hesap kapatma kullanıcı tarafından talep edilebilmeli, işlem yönetici onayıyla tamamlanmalıdır.
- Kurum çalışanının ayrılmasında hesap yönetici tarafından anında pasifleştirilebilmeli ve tüm oturumları kapatılmalıdır.
- Pasifleştirilen hesabın oluşturduğu kayıtlar ve sahip olduğu işler başka bir kullanıcıya devredilebilmelidir.

## Mobil Uygulama Varsa
- Uygulama içinde hesap oluşturulabiliyorsa hesap silme de uygulama içinden başlatılabilmelidir (App Store ve Google Play zorunluluğu); yalnız e-posta ile talep yeterli değildir.
- Google Play için uygulama dışından erişilebilen bir hesap / veri silme bağlantısı da sunulmalıdır.
- Sign in with Apple kullanan hesaplar silinirken Apple token'ı iptal edilmelidir.
