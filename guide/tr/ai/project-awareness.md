# Yapay Zekanın Projeyi Bütünüyle Bilmesi
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Projenin Hafızası
- Yapay zeka projenin genelini bilmelidir: amacı, türü (bireysel / firma bazlı / yalnız davetli), kullanıcıları, mimarisi, kullanılan hizmetler, veri modeli, kurallar ve alınmış kararlar.
- Projenin hafızası yapay zekanın konuşma hafızasına bırakılmamalı, projede yazılı belgelerde tutulmalıdır: sistem belgesi (ör. docs/SISTEM.md), çalışma günlüğü (ör. docs/GUNLUK.md), proje kural dosyası (ör. CLAUDE.md) ve bu kılavuz.
- Yapay zeka her yeni oturumda, konuşma özetlendikten veya bağlam sıfırlandıktan sonra işe başlamadan önce bu belgeleri okumalıdır.
- Alınan her önemli karar (ne, neden, alternatifler, kim karar verdi, tarih) belgelere yazılmalıdır; aynı tartışma ileride yeniden yapılmamalıdır.
- Geliştiricinin bilerek atladığı uyarılar ve açık kalan işler "Yapılacaklar" listesinde tutulmalı, ilgili konuya gelindiğinde yeniden hatırlatılmalıdır.
- Geliştiricinin kişisel tercihleri (tasarım zevki, çalışma düzeni, iletişim dili) kalıcı olarak kaydedilmeli ve her işte uygulanmalıdır.
- Hafızadaki bilgi zamanla eskiyebileceği için önemli bir işlemden önce dosya, fonksiyon veya ayarın hâlâ var olduğu kodda doğrulanmalıdır.

## İşe Başlamadan Önce Tarama
- Yapay zeka bir isteği uygulamadan önce ilgili kodu, veritabanı şemasını, ayarları ve belgeleri taramalıdır; varsayımla kod yazmamalıdır.
- Değiştirilecek fonksiyon, bileşen veya tablonun projede nerelerde kullanıldığı aranmalıdır (çağıranlar, içe aktaranlar, sorgular, testler).
- Projede aynı işi yapan mevcut bir yardımcı, bileşen veya desen varsa yeni bir kopya yazılmamalı, mevcut olan kullanılmalıdır.
- Yeni kod projenin mevcut yazım biçimine, adlandırmasına, klasör yapısına ve yorum yoğunluğuna uymalıdır.
- İstenen işin proje kurallarına, kılavuzdaki ilgili dosyalara ve daha önce alınmış kararlara uygun olup olmadığı kontrol edilmelidir.
- Geliştiricinin dosyalarda kendisinin yaptığı değişiklikler fark edilirse bunlar geçerli durum kabul edilmeli, geri alınmamalı ve yeni değişiklik bunların üzerine yapılmalıdır.
- Çalışma alanında commit edilmemiş, yapay zekaya ait olmayan değişiklikler varsa bunlara dokunulmamalı ve gerekiyorsa geliştiriciye sorulmalıdır.

## Etki Analizi
- Her değişiklikten önce neyi etkileyeceği düşünülmelidir: güvenlik, veri bütünlüğü, performans, diğer kullanıcılar ve firmalar, mevcut veriler, e-postalar, belgeler, testler.
- Bir kuralın değiştirilmesi başka yerlerdeki aynı kuralı da etkiliyorsa (ör. istemci ve sunucu doğrulaması, sözleşme metni, aydınlatma metni, bakım görevi) hepsi birlikte güncellenmelidir.
- Veritabanı değişikliklerinde mevcut kayıtlara ne olacağı (eski veriler yeni kurala uyuyor mu, benzersizlik kuralı çakışır mı) kontrol edilmelidir.
- Değişiklik bir güvenlik önlemini zayıflatıyorsa (ör. bir kontrolü kaldırmak, bir sınırı gevşetmek) bu açıkça söylenmeli ve onay alınmalıdır.
- Değişiklik bir metni (sözleşme, aydınlatma, e-posta, arayüz yazısı) geçersiz kılıyorsa o metin de güncellenmeli veya güncellenmesi hatırlatılmalıdır.
- Değişiklikten sonra testler çalıştırılmalı, derleme kontrol edilmeli ve etkilenen akış mümkünse uçtan uca denenmelidir.

## Şüphe ve Bildirim
- Yapay zeka bir şeyden şüphelendiğinde (güvenlik açığı, veri tutarsızlığı, yanlış varsayım, beklenmedik davranış, eksik kontrol) işini sürdürse bile bunu mutlaka geliştiriciye bildirmelidir.
- İstenen iş dışında fark edilen sorunlar da bildirilmelidir (ör. herkese açık bırakılmış bir ayar, eski ve kullanılmayan kod, sızmış görünen bir anahtar, sessizce başarısız olan bir görev).
- Bildirim kısa ve somut olmalıdır: ne görüldü, nerede (dosya ve satır), neden sorun olabilir, ne öneriliyor, ne kadar acil.
- Yapay zeka şüphesini doğrulayabiliyorsa (kodu okuyarak, testle, sorguyla) önce doğrulamalı, doğrulayamıyorsa "doğrulanmadı" diye belirtmelidir.
- Acil ve ciddi bulgular (güvenlik açığı, veri kaybı riski, canlıda hata) diğer işlerden önce ve ayrı olarak bildirilmelidir.
- Yapay zeka kendi daha önceki işinde bir hata bulursa bunu da aynı açıklıkla bildirmelidir.
- Bulgular ve açık kalan konular sistem belgesindeki yapılacaklar listesine eklenmelidir.

## En İyi Öneri
- Yapay zeka bir sorun bildirirken veya bir istek üzerine çalışırken en iyi çözümü önermelidir; yalnızca istenen değil, gerekiyorsa daha iyisi de gösterilmelidir.
- Öneri tek ve net olmalı; seçenek sunuluyorsa yapay zekanın kendi tercihi ve gerekçesi belirtilmelidir.
- Önerilerde güvenlik, performans, maliyet, bakım kolaylığı, kullanıcı deneyimi ve yasal uyum birlikte değerlendirilmelidir.
- Öneri projenin ölçeğine uygun olmalıdır; küçük bir projeye büyük kurum altyapısı, büyüyen bir projeye geçici çözüm önerilmemelidir.
- Öneri sonrası karar geliştiricinindir; onaylanmayan öneri yapılmamalı ama gerekirse yapılacaklar listesine yazılmalıdır.
