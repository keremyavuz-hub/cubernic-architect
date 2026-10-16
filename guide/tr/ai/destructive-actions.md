# Yapay Zekanın Silme ve Geri Dönüşü Olmayan İşlem Yetkisi
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Kapsam
- Bu dosya yalnızca yapay zekanın kendi başına yapabileceği silme ve geri dönüşü olmayan işlemleri kapsar.
- Panelde kullanıcının veya yöneticinin onay penceresiyle başlattığı silme işlemleri normal uygulama özelliğidir ve bu dosyanın kapsamı dışındadır.
- Yazılan uygulamanın zamanlanmış bakım görevleri, geliştirici tarafından onaylanmış ve proje kurallarına yazılmış olduğu sürece normal uygulama davranışıdır.

## Kesin Yasaklar
- Yapay zeka bir veritabanını asla silmemelidir (DROP DATABASE, veritabanı dosyalarını silme, veritabanı hizmetini kaldırma).
- Yapay zeka tabloları asla silmemeli veya boşaltmamalıdır (DROP TABLE, TRUNCATE, koşulsuz DELETE).
- Yapay zeka geliştiricinin açık onayı olmadan hiçbir kaydı silmemelidir; buna yerel geliştirme veritabanı da dahildir.
- Yapay zeka canlı (production) veritabanında, onay olsa bile, geliştirici işlemi kendisi çalıştırmadıkça yazma veya silme yapmamalıdır.
- Yapay zeka Docker veritabanı birimlerini (volume), yedek dosyalarını, yükleme klasörlerini ve depolama bucket'larını silmemelidir.
- Yapay zeka git geçmişini yok edecek komutları (git reset --hard, git push --force, git clean -fdx, branch silme) onaysız çalıştırmamalıdır.
- Yapay zeka geliştiricinin yaptığı ve henüz commit edilmemiş değişiklikleri geri almamalı veya üzerine yazmamalıdır.
- Yapay zeka sunucu, DNS kaydı, alan adı, API anahtarı, kullanıcı hesabı veya bulut kaynağı silmemelidir.
- Yapay zeka veriyi "temizlemek", "sıfırlamak" veya "baştan başlamak" amacıyla toplu silme önermemeli; gerekiyorsa geliştiriciye seçenek olarak sunmalıdır.

## Onayla Yapılabilecek Silmeler
- Geliştirici açıkça silme istediğinde yapay zeka önce silinecek kayıtları okuyup listelemeli ve geliştiriciye göstermelidir.
- Silme komutu yalnızca listelenen kayıtları hedeflemeli, kesin kimlik (id) ile yapılmalı; geniş koşullar (LIKE, tarih aralığı) kullanılmamalıdır.
- Silme öncesinde ve sonrasında kayıt sayısı raporlanmalıdır.
- Onay yalnızca istenen işlem için geçerlidir; bir silme onayı başka kayıtların veya sonraki silmelerin onayı sayılmamalıdır.
- Silme yerine yumuşak silme, arşivleme veya durum değiştirme (pasifleştirme) mümkünse önce bu seçenekler önerilmelidir.
- Önemli verilerde silmeden önce yedek veya dışa aktarma alınması önerilmelidir.

## Test Verisi
- Yapay zeka test için veri oluşturacaksa bu veriler kolayca ayırt edilebilecek bir işaret taşımalıdır (ör. @e2e-test.com uzantılı e-postalar, test- önekli kimlikler).
- Test sonrası temizlik yalnızca yapay zekanın o test çalışmasında oluşturduğu ve kimliklerini kaydettiği kayıtları silmelidir.
- Test temizliği gerçek kullanıcı kayıtlarına ve geliştiricinin elle oluşturduğu kayıtlara asla dokunmamalıdır.
- Etkinlik kaydı (audit log) gibi yalnızca eklenebilir tablolardaki kayıtlar test temizliğinde silinmemeli; bunun yerine test ayrı bir test veritabanında yapılmalıdır. (Önerilen)
- Mümkünse testler ayrı bir test veritabanında veya her testten sonra geri alınan bir işlem (transaction rollback) içinde çalıştırılmalıdır.
- Test temizliğinin ne sildiği test çıktısında raporlanmalıdır.

## Şema Değişiklikleri (Migration)
- Veri kaybına yol açabilecek şema değişiklikleri (kolon silme, tablo silme, kolon tipini daraltma, NOT NULL ekleme, yeniden adlandırma) yazılmadan önce geliştiriciye ne kaybolacağı açıklanmalı ve onay alınmalıdır.
- Yıkıcı değişiklikler mümkünse iki adımda yapılmalıdır: önce yeni yapı eklenip veri taşınmalı, eski yapı ayrı ve onaylı bir migration ile kaldırılmalıdır.
- Uygulanmış migration dosyaları değiştirilmemeli veya silinmemelidir.
- Canlıda migration çalıştırmadan önce yedek alınması hatırlatılmalıdır.
- Migration'ın geri alınma (rollback) yolu düşünülmeli ve belgelenmelidir.

## Kodda Silme Özelliği Geliştirme
- Yapay zeka uygulamaya silme yapan bir kod (silme butonu, toplu silme, otomatik temizlik görevi, cascade ilişkisi) eklemeden önce geliştiriciden onay almalıdır.
- Onay istenirken neyin, kim tarafından, hangi koşulla silineceği; kalıcı mı yumuşak mı olacağı; ilişkili verilere ne olacağı açıklanmalıdır.
- Panelde kullanıcı veya yönetici tarafından yapılan silmelerde onay penceresi, yetki kontrolü, firma / kullanıcı izolasyonu ve etkinlik kaydı bulunmalıdır.
- Kalıcı silme işlemleri için ek kilit (ör. silinecek adı yazdırma, parola tekrarı, bekleme süresi) kullanılmalıdır.
- Toplu silme işlemlerinde silinecek kayıt sayısı onaydan önce gösterilmelidir.
- Otomatik silme görevleri proje kurallarına yazılı istisna olarak eklenmeli ve ilk çalışmadan önce kuru çalışma (dry run) yapılmalıdır.
- Veritabanında ON DELETE CASCADE ilişkileri eklenirken hangi verilerin zincirleme silineceği geliştiriciye gösterilmelidir.

## Proje Kurallarına Eklenmesi
- Bu dosyadaki kesin yasaklar her projenin yapay zeka kural dosyasına (ör. CLAUDE.md, AGENTS.md, .cursorrules) eklenmelidir.
- Yapay zeka aracının izin ayarlarında yıkıcı komutlar (DROP, TRUNCATE, rm -rf, docker volume rm, git push --force) onay gerektirecek şekilde ayarlanmalıdır. (Önerilen)
- Yapay zekanın canlı veritabanı bağlantı bilgilerine erişimi olmamalı; yalnızca yerel veya test veritabanı bilgisi verilmelidir. (Önerilen)
- Yapay zekanın kullandığı veritabanı kullanıcısı mümkünse DROP ve TRUNCATE yetkisi olmayan kısıtlı bir kullanıcı olmalıdır. (Önerilen)
