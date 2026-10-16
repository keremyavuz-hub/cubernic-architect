# Panel Tabloları
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Genel Kurallar
- Panellerdeki her veri tablosunda sayfalama, filtreleme ve sıralama bulunmalıdır.
- Tablo davranışı (sayfalama, filtre, sıralama, arama, boş / yükleniyor durumu) tek bir ortak tablo bileşeni ve ortak sorgu yardımcısıyla sağlanmalı; her sayfada yeniden yazılmamalıdır.
- Sayfalama, filtreleme ve sıralama veri sunucuda yapılmalıdır; tüm veri tarayıcıya çekilip orada süzülmemelidir.
- Küçük ve sabit listelerde (ör. 20 kaydı geçmeyen ayar listeleri) istemci tarafı sıralama kabul edilebilir; bu durum bilinçli seçilmelidir.
- Tablonun mevcut durumu (sayfa, sayfa boyutu, filtreler, sıralama, arama) adres çubuğundaki sorgu parametrelerinde tutulmalıdır (ör. ?sayfa=2&durum=bekleyen&sirala=created_at&yon=desc); böylece bağlantı paylaşılabilmeli, sayfa yenilenince ve geri tuşunda durum korunmalıdır.
- Filtre ve sıralama değiştiğinde sayfa numarası 1'e dönmelidir.

## Sayfalama
- Sayfa boyutu seçilebilmelidir (ör. 10, 25, 50, 100); sunucu en büyük sayfa boyutunu sınırlamalıdır (ör. en fazla 100).
- Toplam kayıt sayısı ve gösterilen aralık yazılmalıdır (ör. "51–75 / 312 kayıt").
- İlk, önceki, sonraki, son sayfa düğmeleri ve sayfa numaraları bulunmalıdır; çok sayfalı tablolarda sayfa numaraları kısaltılmalıdır (1 … 4 5 6 … 20).
- Büyük tablolarda (yüz binlerce satır) ofset (OFFSET) yerine imleç / anahtar tabanlı sayfalama (keyset pagination) kullanılmalıdır.
- Toplam sayım çok pahalıysa yaklaşık sayım veya "daha fazla" düğmesi kullanılabilir. (Opsiyonel)
- Sayfa değiştirildiğinde tablonun başına kaydırılmalıdır.

## Filtreleme ve Arama
- Tablonun önemli kolonları için filtreler bulunmalıdır: durum, tarih aralığı, tür, sahip, etiket gibi.
- Metin araması yazarken her tuşta değil kısa bir gecikmeyle (debounce, ör. 300 ms) çalışmalıdır.
- Aktif filtreler görünür olmalı (ör. filtre etiketleri / chip) ve tek tek veya toptan temizlenebilmelidir.
- Tarih aralığı filtreleri saat dilimini doğru işlemeli, bitiş tarihi gün sonunu kapsamalıdır.
- Türkçe aramada büyük / küçük harf ve İ / ı dönüşümleri doğru çalışmalıdır.
- Sık kullanılan filtre kombinasyonları kaydedilebilir olabilir. (Opsiyonel)
- Filtre sonucu boşsa "Sonuç bulunamadı" mesajı ve filtreleri temizleme düğmesi gösterilmelidir.

## Sıralama
- Sıralanabilir kolon başlıkları tıklanabilir olmalı ve mevcut sıralama yönü ikonla gösterilmelidir.
- Varsayılan sıralama anlamlı olmalıdır (çoğu zaman en yeni kayıt en üstte).
- Sıralama her zaman benzersiz bir ikincil alanla (ör. id) tamamlanmalıdır; aynı değerli satırlar sayfalar arasında kaymamalıdır.
- Metin sıralaması dile uygun yapılmalıdır (Türkçe harf sırası).
- Boş değerlerin sıralamadaki yeri tutarlı olmalıdır (NULLS LAST).

## Sunucu Tarafı Güvenlik ve Performans
- Sıralama ve filtre parametreleri sunucuda izin listesiyle doğrulanmalıdır; kullanıcıdan gelen kolon adı veya yön doğrudan sorguya yazılmamalıdır (SQL injection).
- Sayfa ve sayfa boyutu sayıya çevrilip sınırlandırılmalı, geçersiz değerler varsayılana dönmelidir.
- Çok kiracılı sistemlerde her tablo sorgusu oturumdaki firma / kullanıcı ile süzülmelidir; filtre parametresiyle başka firmanın verisi istenememelidir.
- Kullanıcının rolüne göre görmemesi gereken kolonlar ve satırlar sunucuda çıkarılmalıdır.
- Sık filtrelenen ve sıralanan kolonlar için dizin (index) bulunmalıdır.
- Liste sorgularında yalnızca tabloda gösterilen kolonlar seçilmelidir.
- Arama için gerekiyorsa tam metin arama (ör. Postgres full text search, pg_trgm) kullanılmalıdır; büyük tablolarda baştan joker karakterli LIKE ('%metin%') sorgularına dikkat edilmelidir.

## Durumlar
- Veri yüklenirken tablo iskeleti (skeleton) veya yükleniyor göstergesi gösterilmelidir; sayfa değiştirme, filtre ve sıralama sırasında meşgul (busy) durumu görünmelidir.
- Tablo hiç kayıt içermiyorsa açıklayıcı boş durum ekranı ve varsa ilk işlemi yapma düğmesi (ör. "Mağaza ekle") gösterilmelidir.
- Hata durumunda tekrar dene seçeneği sunulmalıdır.
- Yükleme sırasında tablo yüksekliği zıplamamalıdır.

## Satır İşlemleri ve Toplu İşlemler
- Satır işlemleri (görüntüle, düzenle, sil) tutarlı bir yerde (satır sonu veya üç nokta menüsü) bulunmalıdır.
- Silme ve geri dönüşü olmayan işlemler onay ister; onay penceresinde hangi kaydın etkileneceği yazmalıdır.
- Toplu seçim varsa seçili kayıt sayısı gösterilmeli, toplu işlem öncesi etkilenecek kayıt sayısı onaylatılmalıdır.
- "Tümünü seç" yalnızca görünen sayfayı mı yoksa tüm filtre sonucunu mu seçtiği açıkça belirtilmelidir.
- Satır işlemleri kullanıcının yetkisine göre gösterilmeli, sunucuda ayrıca yetki kontrolü yapılmalıdır.
- Her toplu ve yazan işlem etkinlik kaydına yazılmalıdır.

## Kolonlar ve Görünüm
- Kolon başlıkları sabit kalmalıdır (sticky header). (Önerilen)
- Kolonların gösterilip gizlenmesi sağlanabilir; tercih kullanıcı bazında hatırlanabilir. (Opsiyonel)
- Sayılar, tutarlar ve tarihler sağa / tutarlı hizalanmalı ve dile göre biçimlendirilmelidir.
- Uzun metinler kısaltılmalı, tamamı tooltip veya detay görünümünde okunabilmelidir.
- Durum kolonları renkli rozetlerle gösterilmeli, renk tek başına anlam taşımamalı (metin de bulunmalı).

## Dışa Aktarma
- Gerekli tablolarda mevcut filtrelere göre dışa aktarma (CSV / Excel) sunulmalıdır. (Önerilen)
- Dışa aktarılan dosyada formül olarak çalışabilecek hücreler (=, +, -, @ ile başlayan) etkisizleştirilmelidir (CSV injection).
- Büyük dışa aktarmalar arka planda hazırlanmalı ve hazır olunca indirme bağlantısı verilmelidir.
- Dışa aktarma da yetki ve firma izolasyonuna tabi olmalı, etkinlik kaydına yazılmalıdır.
- Türkçe karakterlerin Excel'de bozulmaması için CSV dosyası UTF-8 BOM ile yazılmalıdır.

## Mobil ve Erişilebilirlik
- Küçük ekranda tablo ya yatay kaydırılabilir kapsayıcıda olmalı ya da her satır bir karta dönüşmelidir; sayfanın tamamı yatay kaymamalıdır.
- Filtreler mobilde açılır panelde toplanmalıdır.
- Tablo anlamsal HTML ile yazılmalıdır (table, thead, th scope, tbody); sıralanan kolonda aria-sort bulunmalıdır.
- Sayfalama ve sıralama kontrolleri klavye ile kullanılabilmelidir.

## Önerilen Kütüphaneler
- Basit tablolarda kütüphane gerekmez; ortak bir tablo bileşeni ve sunucu tarafı sorgu yardımcısı yeterlidir.
- Karmaşık tablolarda (kolon gizleme, sanal kaydırma, gruplama) başsız (headless) bir kütüphane olan TanStack Table önerilebilir; görünüm projenin kendi bileşenleriyle yazılır.
- Adres çubuğu durum yönetimi için nuqs gibi küçük bir kütüphane veya yerleşik URLSearchParams kullanılabilir.
- Çok büyük listelerde sanal kaydırma (TanStack Virtual) önerilebilir.
