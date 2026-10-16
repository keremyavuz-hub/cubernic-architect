# Kütüphane ve Yapı Kayıtları
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Genel Kurallar
- Projede kullanılan her kütüphane, dış servis ve önemli yapı (mimari karar, desen, modül) proje dizinindeki kayıt dosyalarında belgelenmelidir.
- Kayıtlar geliştiricinin anlayabileceği sade bir dille yazılmalı, teknik terimler kısaca açıklanmalıdır.
- Yeni bir kütüphane veya yapı eklendiğinde, kaldırıldığında veya değiştirildiğinde kayıt aynı commit'te güncellenmelidir.
- Kayıtlar sistem belgesinden (docs/SISTEM.md) bağlantıyla erişilebilir olmalıdır.

## Kütüphane Kaydı
- Kütüphaneler için bir kayıt dosyası tutulmalıdır (ör. docs/KUTUPHANELER.md).
- Her kütüphane için şunlar yazılmalıdır: adı ve sürümü, ne işe yaradığı (bir cümle), neden seçildiği, yerleşik bir alternatif neden yetmedi, değerlendirilen alternatifler, lisansı, yaklaşık boyutu, projede nerelerde kullanıldığı (dosyalar / adaptör modülü), ücretli mi, kaldırılırsa ne olur, eklendiği tarih.
- Geliştirme bağımlılıkları (test, derleme araçları) ayrı başlık altında listelenmelidir.
- Kayıt biçimi örneği:
```
## postgres (3.x)
- Ne işe yarar : Postgres veritabanına bağlanıp sorgu çalıştırır.
- Neden        : Küçük, bağımlılıksız, parametreli sorguları güvenli yazmayı kolaylaştırır.
- Alternatifler: pg (daha yaygın, daha ayrıntılı), Prisma (ORM, ağır).
- Lisans       : Unlicense
- Kullanıldığı : lib/sql.js (tüm erişim bu dosyadan)
- Ücret        : Ücretsiz
- Kaldırılırsa : Tüm veritabanı erişimi lib/sql.js içinde yeniden yazılmalı.
- Eklenme      : 2026-10-01
```

## Dış Servis Kaydı
- Kullanılan dış servisler (e-posta, depolama, bot koruması, yapay zeka, ödeme) ayrı bir bölümde veya dosyada listelenmelidir.
- Her servis için şunlar yazılmalıdır: ne için kullanıldığı, hangi hesapla açıldığı, ortam değişkenleri, plan ve ücret, sınırlar, veri nereye gidiyor (yurt dışı aktarım), panel bağlantısı, servis çökerse uygulamaya etkisi.

## Yapı ve Mimari Kararlar
- Önemli mimari kararlar için kısa karar kayıtları tutulmalıdır (ör. docs/KARARLAR.md veya docs/adr/0001-veritabani-secimi.md).
- Her karar kaydında şunlar yazılmalıdır: tarih, bağlam (sorun neydi), karar, değerlendirilen seçenekler, sonuçları (artı / eksi), durum (geçerli / değiştirildi).
- Projenin ana modülleri ve sorumlulukları bir mimari haritada listelenmelidir (ör. lib/auth.js: oturum ve giriş; lib/mail.js: e-posta gönderimi ve şablonlar).
- Merkezi tutulan yapılar (ayarlar, kurallar, temalar, dil dosyaları, adaptörler) mimari haritada nerede olduklarıyla belirtilmelidir.
- Bir karar değiştirildiğinde eski kayıt silinmemeli, "değiştirildi" olarak işaretlenip yeni kayda bağlanmalıdır.
