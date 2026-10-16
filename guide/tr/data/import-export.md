# İçe ve Dışa Aktarma
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## İçe Aktarma
- İçe aktarma önce önizleme göstermeli; kullanıcı onaylamadan veri kaydedilmemelidir.
- Kolon eşleştirme ekranı sunulmalıdır; dosyadaki başlıklar sistemdeki alanlara eşlenebilmelidir. (Önerilen)
- Her satır ayrı doğrulanmalı; hatalı satırlar satır numarası ve sebebiyle raporlanmalı, hatalar indirilebilir olmalıdır.
- Hatalı satırlarda tüm işlemin mi durdurulacağı yoksa yalnız geçerli satırların mı alınacağı açıkça seçilmelidir.
- Aynı dosyanın tekrar yüklenmesi çift kayıt oluşturmamalıdır; eşleştirme anahtarı (ör. SKU, barkod) belirlenmelidir.
- Büyük dosyalar istek sırasında değil, arka plan işinde işlenmelidir (bkz. operations/jobs.md); kullanıcıya ilerleme gösterilmelidir.
- Dosya boyutu ve satır sayısı sınırlandırılmalıdır.
- Karakter kodlaması (UTF-8, Windows-1254), ayraç (virgül, noktalı virgül) ve ondalık biçimi (1.234,56) otomatik algılanmalı veya sorulmalıdır; Türkçe Excel dosyaları genelde noktalı virgül ve virgüllü ondalık kullanır.
- XML dosyaları dış varlık (XXE) saldırılarına kapalı ayrıştırıcıyla okunmalıdır.
- Her içe aktarma kim, ne zaman, kaç satır, kaç hata bilgisiyle kaydedilmelidir.
- İçe aktarmanın geri alınabilmesi değerlendirilmelidir (aynı içe aktarma kimliğiyle eklenen kayıtlar). (Opsiyonel)

## Feed / Bağlantı ile Eşitleme
- Uzak feed adresleri SSRF önlemleriyle çekilmelidir (bkz. security/ssrf.md).
- Eşitleme sıklığı ve zaman aşımları belirlenmeli; karşı sunucu yorulmamalıdır (bkz. code/external-requests.md).
- Feed'de artık bulunmayan kayıtlar hemen silinmemeli; pasife alınmalı ve kullanıcıya gösterilmelidir.
- Her eşitlemenin sonucu (eklenen, güncellenen, hatalı) kaydedilmeli ve panelde görünmelidir.

## Dışa Aktarma
- CSV / Excel dışa aktarmada =, +, -, @ ile başlayan hücreler formül olarak çalışmaması için kaçışlanmalıdır (CSV formula injection).
- Dışa aktarma yalnız kullanıcının yetkili olduğu verileri içermelidir; firma bazlı süzme uygulanmalıdır.
- Büyük dışa aktarmalar arka planda hazırlanmalı, hazır olunca süreli indirme bağlantısı verilmelidir.
- Türkçe karakterlerin Excel'de doğru açılması için CSV dosyası UTF-8 BOM ile yazılmalıdır.
- Kişisel veri içeren dışa aktarmalar audit log'a yazılmalıdır.
