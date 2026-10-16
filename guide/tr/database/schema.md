# Veritabanı Tasarımı
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Ortak Yapılacaklar
- Tablo ve kolon isimleri tek bir düzende olmalıdır (ör. snake_case, tablolar çoğul: users, company_users); düzen proje belgesine yazılmalıdır.
- Her tabloda birincil anahtar olmalıdır; dışarıya açılan kimliklerde tahmin edilemez değerler (UUID / ULID) kullanılmalıdır.
- Her tabloda created_at ve gerektiğinde updated_at kolonları olmalı; zamanlar saat dilimli (timestamptz) ve UTC olarak saklanmalıdır.
- İlişkiler yabancı anahtarla (foreign key) korunmalı; silme davranışı (RESTRICT, CASCADE, SET NULL) bilinçli seçilmelidir.
- Veri bütünlüğü veritabanı kısıtlarıyla korunmalıdır: NOT NULL, UNIQUE, CHECK; yalnız uygulama koduna güvenilmemelidir.
- Durum alanları serbest metin değil, sınırlı değer kümesi (CHECK veya enum) olmalıdır.
- Para tutarları kayan noktalı sayı ile değil numeric / decimal veya en küçük birim (kuruş) tamsayısıyla saklanmalıdır.
- Filtrelenen, sıralanan ve birleştirilen kolonlara index eklenmeli; gereksiz index yazma performansını düşürdüğü için eklenmemelidir.
- Yavaş sorgular EXPLAIN ile incelenmeli; N+1 sorgu sorunu önlenmelidir (bkz. ai/performance.md).
- Sorgular her zaman parametreli olmalı; kullanıcı girdisi sorgu metnine eklenmemelidir.
- Uygulama veritabanına süper kullanıcıyla değil, yalnız gerekli yetkileri olan kullanıcıyla bağlanmalıdır.
- Bağlantı havuzu (connection pool) kullanılmalı, bağlantı sayısı sunucu kapasitesine göre sınırlanmalıdır.
- Kalıcı silme yerine gerektiğinde silindi işareti (deleted_at) kullanılmalı; saklama süresi dolunca kalıcı silinmelidir (bkz. legal/data-retention.md). (Önerilen)
- Önemli kayıtlarda değişiklik geçmişi tutulmalıdır (kim, ne zaman, neyi değiştirdi) (bkz. operations/audit-log.md).

## Firma / Müşteri Bazlı Panel İse
- Firmaya ait her tabloda firma kimliği kolonu bulunmalı ve sorgular bu kolonla süzülmelidir (bkz. security/data-isolation.md).
- Firma kimliği içeren benzersizlik kuralları firma bazında tanımlanmalıdır (ör. UNIQUE (company_id, slug)).
- Satır düzeyi güvenlik (Postgres RLS) ek bir koruma katmanı olarak değerlendirilmelidir. (Opsiyonel)
