# Login İşlemleri
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Yapılacaklar
- Formun üzerinde uygulamanın logosu bulunmalıdır
- Formun amacına uygun bir başlık oluşturulmalıdır
- Bir e-posta adresi alanı bulunmalıdır.
- Bir şifre alanı bulunmalıdır.
- Parolamı unuttum bağlantısı bulunmalıdır. Bağlantı parola etiketinin sağında, form alanına taşmayacak şekilde konumlandırılmalıdır.
- Beni hatırla alanı bulunmalıdır (Opsiyonel)
- Beni hatırla işaretliyse oturum uzun (ör. 30 gün), değilse kısa (ör. 12 saat) süreli olmalı ve varsayılan olarak işaretsiz gelmelidir. (Opsiyonel)
- Parolayı göster/gizle göz ikonu bulunmalıdır. (Önerilen)
- Formun native uyarı sistemi kapatılmalı, yerine özel uyarı validasyon mesajları gelmelidir
- Parola alanı en az 8 karakter olmalıdır.
- Parola alanı karışık, büyük, küçük harf ve sayılardan oluşmalıdır.
- Parola kuralları seçilirken güncel NIST 800-63B önerisi (karışım zorunluluğu yerine uzunluk ve sızdırılmış parola listesi kontrolü) geliştiriciye hatırlatılmalı, karar geliştiriciye bırakılmalıdır.
- Giriş formunda parola biçim kuralı uygulanmamalı, yalnız boş ve aşırı uzun olmaması kontrol edilmelidir. Biçim kuralları hesap oluşturma ve parola değiştirme formlarında uygulanmalıdır.
- Parola alanına üst sınır (ör. 200 karakter) konmalıdır; parola özet fonksiyonuna devasa girdi gönderilmemelidir.
- Parola alanına girilecek şifre formatıyla ilgili kullanıcıyı bilgilendirici bir info ikonu ve açılacak tooltip ekranı tasarlanmalıdır.
- Formdaki zorunlu alanlar * işaretiyle işaretlenmelidir.
- Formdaki alanlar doldurulmadan buton aktif edilmemelidir.
- Kullanıcı bilgileriyle giriş yaptıktan sonra sunucudan hata alınırsa, düzgün bir uyarı metniyle formun altında temaya uygun şekilde yerleştirilmelidir. Uyarılar belli bir saniye sonra otomatik kaybolmalıdır.
- Kullanıcı yok ile parola yanlış ayrımı yapılmamalı, ikisinde de "E-posta ya da parola hatalı." mesajı gösterilmelidir.
- Kullanıcı bulunamasa bile sahte bir parola özeti üzerinde doğrulama çalıştırılmalı, yanıt süresinden hesabın varlığı anlaşılmamalıdır.
- Form gönderilirken ekran kilitlenmelidir.
- Form gönderilirken uygun bir şekilde loader ikonu gösterilmeli ve kullanıcıyı bilgilendirici mesaj yazılmalıdır
- Formlar animasyonlu şekilde gelebilir (Opsiyonel)
- Giriş ve kayıt aynı ekrandaysa sayfa yenilenmeden geçiş yapılmalı, adres çubuğu güncellenmeli ve tarayıcının geri tuşu çalışmalıdır. (Opsiyonel)
- Formun alanına girmeyecek şekilde harici bir yerde üstte veya alt bölümde, "Hesabınız yok mu? metin, yanına uygun metinli kayıt butonu" eklenmelidir. Buton ilgili kayıt sayfasına yönlendirilmelidir.
- Firma bazlı panellerde kayıt butonu metni başvuruya uygun olmalıdır (ör. "Firma başvurusu"); yalnız davetli sistemlerde kayıt butonu yerine "Hesap için yöneticinizle iletişime geçin" bilgisi gösterilmelidir.
- Form validasyonları UI tarafında yapıldığı gibi backend tarafında da ayrıca kontrol edilmelidir.
- Formlarda CSRF doğrulamaları eklenmelidir.
- Form gönderimler 1 saniyede defalarda gönderilememeli ve Backend tarafında kontrolleri yapılmalıdır.
- UI tarafında peşpese istek gönderilememelidir.
- Backend tarafında bot koruması, seri gönderimler ve kısa sürede arka arkaya kayıt işlemleri kontrol edilmelidir.
- Aynı e-posta için kısa sürede çok sayıda hatalı denemede (ör. 15 dakikada 8) geçici kilit uygulanmalıdır.
- Aynı IP için kısa sürede çok sayıda hatalı denemede (ör. 15 dakikada 30) geçici kilit uygulanmalıdır.
- Kilit mesajı kullanıcıya ne kadar beklemesi gerektiğini söylemelidir.
- Oturum varken giriş sayfası açılırsa kullanıcı panele yönlendirilmelidir.
- Doğrulama veya parola değişikliği gibi işlemlerden sonra giriş ekranına gelindiğinde, formun üstünde tek satırlık yeşil bilgi mesajı gösterilmelidir.
- Backend tarafından gelecek tüm uyarı mesajları UI tarafında, uygun şekilde konumlandırılmalı. Uyarı mesajlarıyla ilgili detaylar yukarıda verilmiştir.
