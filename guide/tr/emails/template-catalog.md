# Standart E-posta Şablonları Kataloğu
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Kullanım
- Projede hangi şablonların gerektiği proje türüne göre bu katalogdan seçilmeli ve geliştiriciye liste halinde sunulmalıdır.
- Her şablon emails/templates.md dosyasındaki ortak düzen, ton ve kodlama kurallarına uymalıdır.
- Her şablon için gönderim tetikleyicisi, alıcı, konu, önizleme metni, ana buton ve güvenlik notu belirlenmelidir.

## Hesap ve Kimlik
- E-posta doğrulama: kayıttan hemen sonra gider; doğrulama butonu, bağlantı süresi, tek kullanımlık olduğu bilgisi ve "kayıt olmadıysanız dikkate almayın" notu içermelidir.
- Hoş geldiniz: e-posta doğrulandıktan veya hesap açıldıktan sonra gider; ilk adımlar, panel bağlantısı ve destek bilgisi içermelidir. (Önerilen)
- Parola sıfırlama: istek sonrası gider; sıfırlama butonu, süre (ör. 60 dakika), tek kullanımlık bilgisi ve "talep etmediyseniz parolanız değişmez" notu içermelidir.
- Parola değiştirildi: parola değişince gider; tarih / saat, oturumların kapatıldığı bilgisi ve "siz yapmadıysanız hemen iletişime geçin" uyarısı içermelidir.
- E-posta adresi değişikliği: yeni adrese doğrulama bağlantısı, eski adrese "adresiniz değiştirildi" bilgisi gönderilmelidir; eski adrese değişikliği geri alma bağlantısı eklenmelidir. (Önerilen)
- Yeni cihaz / konumdan giriş: tanınmayan cihazdan girişte tarih, tarayıcı, yaklaşık konum ve "siz değilseniz parolanızı değiştirin" bağlantısı içermelidir. (Opsiyonel)
- İki adımlı doğrulama kodu / sihirli bağlantı (magic link): kısa süreli kod veya bağlantı, istek zamanı ve cihaz bilgisi içermelidir; kod konu satırına yazılmamalıdır.
- İki adımlı doğrulama açıldı / kapatıldı: güvenlik değişikliği bildirimi olarak gönderilmelidir.
- Çok fazla hatalı giriş / hesap kilitlendi: kilit süresi ve parola sıfırlama bağlantısı içerebilir. (Opsiyonel)

## Başvuru, Onay ve Davet (Firma Bazlı Panel)
- Yeni başvuru (ekibe): başvuranın e-postası, başvuru numarası ve yönetim ekranına giden buton içermelidir.
- Bekleyen başvuru hatırlatması (ekibe): toplu liste ve yönetim ekranı butonu içermeli, günde en fazla bir kez gönderilmelidir.
- Başvuru onaylandı + davet: firma adı, hesap oluşturma butonu, davet süresi ve tek kullanımlık bilgisi içermelidir.
- Başvuru reddedildi: kibar ve kısa olmalı; gerekçe yazılacaksa genel tutulmalı, yanıt adresi varsa iletişim yolu belirtilmelidir.
- Ekip üyesi daveti: daveti gönderen kişi, firma adı, rol ve kabul butonu içermelidir.
- Rol değişti / firmadan çıkarıldınız: değişikliği yapan, tarih ve yeni durum bilgisi içermelidir.
- Firma askıya alındı / yeniden etkinleştirildi: neden (genel), etkileri ve iletişim yolu içermelidir.

## Hesap Kapatma ve Veri
- Hesap kapatma talebi alındı: silme tarihi, geri alma süresi ve geri alma bağlantısı içermelidir.
- Hesap silindi: silmenin tamamlandığı ve yasal olarak saklanan verilerin bilgisi içermelidir.
- Veri dışa aktarma hazır: süreli ve tek kullanımlık indirme bağlantısı içermelidir.

## Ödeme ve Abonelik (Varsa)
- Ödeme alındı / sipariş onayı: tutar, vergiler, ürün / hizmet, tarih ve fatura bağlantısı içermelidir.
- Fatura hazır: fatura numarası ve indirme bağlantısı içermelidir.
- Abonelik yenileme hatırlatması: yenileme tarihi, tutar ve iptal yolu içermelidir.
- Ödeme başarısız: neden (genel), tekrar deneme tarihi ve ödeme yöntemini güncelleme bağlantısı içermelidir.
- Abonelik iptal edildi: erişimin ne zamana kadar süreceği bilgisi içermelidir.
- İade yapıldı: tutar ve işlem süresi bilgisi içermelidir.

## Bildirim ve Özet
- İşlem sonucu bildirimleri (ör. içerik yayına alındı, alan adı doğrulandı, doğrulama kayboldu) sonucu, ilgili kaydı ve panel bağlantısını içermelidir.
- Günlük / haftalık özet e-postaları kullanıcı tarafından kapatılabilmeli, bildirim tercihleri sayfasına bağlantı içermelidir.
- Sistem kesintisi / bakım duyurusu: tarih, süre ve etkiler bilgisi içermelidir.

## Örnek Proje
- Markapolitan Vitrin'de bulunan şablonlar: e-posta doğrulama, yeni başvuru (ekibe), bekleyen başvuru hatırlatması (ekibe), başvuru onaylandı + davet, başvuru reddedildi, parola sıfırlama, parola değişti (lib/mail.js).
