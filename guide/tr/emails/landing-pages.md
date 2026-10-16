# E-posta Bağlantılarının Açtığı Onay Sayfaları
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Genel Kurallar
- E-postadaki bağlantının açtığı her sayfa (doğrulama, sıfırlama, davet, abonelikten çıkış, geri alma) tasarım diline uygun, sade ve mobil uyumlu olmalıdır.
- Bağlantı adresleri tahmin edilemez kodlar içermeli, kısa ve anlamsız yollar kullanmalıdır (ör. /e/<kod>, /s/<kod>, /davet/<kod>).
- Sayfa açıldığında kodun durumu kontrol edilmeli ve her durum için ayrı ekran veya mesaj gösterilmelidir: geçerli, süresi dolmuş, kullanılmış, geçersiz.
- Süresi dolmuş veya geçersiz bağlantı ekranında kullanıcıya bir sonraki adım sunulmalıdır (ör. "Yeni bağlantı iste", "Başvuruyu yeniden gönder").
- Hata ekranlarında hesabın var olup olmadığı veya kodun neden geçersiz olduğu gibi iç bilgiler sızdırılmamalıdır.
- Sayfada iç süreç adımları (ekip incelemesi, sıradaki işlemler) gösterilmemeli; kullanıcıya yalnızca kendisini ilgilendiren sonuç söylenmelidir.
- Sayfalar arama motorlarında dizine eklenmemelidir (noindex).
- Bu sayfalar Referrer-Policy ile korunmalı, adresteki kod başka sitelere sızmamalıdır.
- Bu sayfalarda analiz / reklam etiketleri çalıştırılmamalıdır; adresteki kod üçüncü taraflara gönderilmemelidir.

## Otomatik İşlem mi, Butonla İşlem mi
- Bağlantı açılınca işlemin hemen yapılması (otomatik doğrulama) kullanıcı için en kolay yoldur; işlem sonrası kullanıcı giriş ekranına veya panele tek satırlık bilgiyle yönlendirilmelidir.
- Kurumsal e-posta güvenlik tarayıcıları bağlantıları önceden açabildiği için, geri dönüşü olmayan veya kritik işlemlerde (hesap silme onayı, e-posta değiştirme, ödeme) işlem sayfadaki bir butonla ve sunucu eylemiyle yapılmalıdır.
- Parola sıfırlama ve davet sayfalarında bağlantı açılınca yalnızca form gösterilmeli, kod form gönderilince tüketilmelidir.
- Abonelikten çıkış bağlantıları tek tıkla çalışmalıdır; ek giriş veya onay istenmemelidir.
- Hangi yöntemin seçildiği ve nedeni geliştiriciyle kararlaştırılmalı ve belgelenmelidir.

## İşlem Sonrası
- İşlem başarılı olduğunda kullanıcı mantıklı bir sonraki sayfaya yönlendirilmelidir (giriş ekranı, panel, ayarlar).
- Yönlendirilen sayfada sonucu anlatan kısa bir bilgi satırı gösterilmelidir (ör. "E-posta adresiniz doğrulandı.").
- Kullanıcı zaten giriş yapmışsa doğrudan panele yönlendirilmelidir.
- Aynı bağlantı ikinci kez açıldığında işlem tekrarlanmamalı, kullanıcıya anlamlı bir mesaj gösterilmelidir (ör. "Bu adres zaten doğrulanmış.").
- Her işlem etkinlik kaydına yazılmalıdır.

## Örnek Proje
- Markapolitan Vitrin'de: /e/<kod> e-posta doğrulamayı açılınca yapar ve giriş ekranına bilgi satırıyla yönlendirir; /s/<kod> parola sıfırlama formunu gösterir; /davet/<kod> davet kabul formunu gösterir.
