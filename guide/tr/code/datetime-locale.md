# Tarih, Saat, Para ve Türkçe
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Tarih ve Saat
- Zamanlar veritabanında UTC ve saat dilimli tipte saklanmalı, kullanıcıya kendi saat diliminde gösterilmelidir.
- Sunucu, veritabanı ve uygulama saat dilimi ayarları belgede yazılı olmalıdır.
- Tarih biçimlendirme tek bir yardımcı fonksiyon veya Intl.DateTimeFormat ile yapılmalıdır.
- Yalnız tarih içeren alanlar (doğum günü, son tarih) saat dilimi kaymasından etkilenmeyecek şekilde (date tipi) saklanmalıdır.
- Süre hesaplarında (ör. 48 saat) sunucu saati kullanılmalı, istemci saatine güvenilmemelidir.
- Sunucu tarafında oluşturulan ve istemcide tekrar çizilen tarihler aynı saat dilimiyle biçimlendirilmelidir; aksi halde hydration uyuşmazlığı oluşur.

## Para ve Sayılar
- Para tutarları ondalık hatası olmayacak şekilde saklanmalı ve hesaplanmalıdır (bkz. database/schema.md).
- Tutar her zaman para birimiyle birlikte saklanmalıdır.
- Sayı ve para biçimlendirme Intl.NumberFormat ile yapılmalıdır (Türkçe: 1.234,56 ₺).
- Yuvarlama kuralı (vergi, indirim) belirlenmeli ve tek yerde uygulanmalıdır.

## Türkçe
- Büyük / küçük harf dönüşümünde dil belirtilmelidir (toLocaleLowerCase("tr"), toLocaleUpperCase("tr")); aksi halde I / ı, İ / i dönüşümleri bozulur.
- Arama ve karşılaştırma yaparken Türkçe karakterler normalize edilmeli veya dil duyarlı karşılaştırma kullanılmalıdır (Intl.Collator("tr")).
- Sıralama Türkçe alfabeye göre yapılmalıdır (Ç, Ğ, İ, Ö, Ş, Ü yerleri); veritabanında uygun collation (ör. tr-TR-x-icu) kullanılmalıdır.
- Adres (slug) oluştururken Türkçe karakterler doğru dönüştürülmelidir (ğ→g, ı→i, ş→s).
- E-posta adresleri karşılaştırılırken küçük harfe çevrilmeli; ancak Türkçe dil kuralı değil, dil bağımsız dönüşüm kullanılmalıdır.
- Metin dosyaları ve veritabanı UTF-8 olmalıdır.
