# Idempotency ve Eşzamanlılık
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Ortak Yapılacaklar
- Kayıt oluşturan, ödeme alan veya e-posta gönderen işlemler iki kez çalıştığında iki kez sonuç üretmemelidir.
- Formlarda gönderim sırasında düğme kilitlenmeli; ancak asıl koruma sunucu tarafında yapılmalıdır (bkz. forms/buttons-loading.md).
- Kritik isteklerde idempotency anahtarı kullanılmalı; aynı anahtarla gelen ikinci istek ilk sonucu döndürmelidir. (Önerilen)
- Benzersizlik veritabanı kısıtlarıyla korunmalıdır; "önce kontrol et sonra ekle" yaklaşımı tek başına yeterli değildir.
- Aynı kaydı birden fazla kişinin düzenleyebildiği yerlerde iyimser kilit (version veya updated_at kontrolü) kullanılmalı; üzerine yazma yerine kullanıcıya çakışma bildirilmelidir.
- Sayaç ve limit kontrolleri yarış durumuna karşı atomik yapılmalıdır (tek sorguda güncelleme veya kilit) (bkz. security/rate-limit.md).
- Birbirine bağlı yazma işlemleri tek bir transaction içinde yapılmalıdır.
- Transaction içinde dış servis çağrısı (e-posta, API) yapılmamalı; işlem tamamlandıktan sonra veya kuyruk üzerinden yapılmalıdır (outbox yaklaşımı).
- Dışarıdan gelen webhook'lar birden fazla kez gelebilir; olay kimliği kaydedilip tekrar gelen olay atlanmalıdır.
