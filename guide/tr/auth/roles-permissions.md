# Roller ve Yetkiler (RBAC)
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Ortak Yapılacaklar
- Roller ve her rolün yapabildikleri bir tablo (yetki matrisi) halinde proje belgesine yazılmalıdır.
- Yetki kontrolü tek bir merkezi fonksiyon üzerinden yapılmalıdır (ör. can(user, "product.publish", resource)); sayfalara dağılmış rol karşılaştırmaları yazılmamalıdır.
- Yetki kontrolü her zaman sunucu tarafında yapılmalıdır; arayüzde düğmeyi gizlemek koruma sayılmaz.
- Varsayılan durum "yetkisiz" olmalı; izin açıkça verilmeyen işlem reddedilmelidir.
- Yetkisiz erişimde kaynağın varlığı belli edilmemelidir (gerekirse 404).
- Rol değişiklikleri audit log'a yazılmalıdır.
- Kullanıcının rolü düşürüldüğünde veya hesabı kapatıldığında açık oturumları geçersiz kılınmalıdır.
- Son yöneticinin kendini veya rolünü silmesi engellenmelidir.

## Firma / Müşteri Bazlı Panel İse
- Platform rolleri (ör. platform yöneticisi) ile firma içi roller (ör. firma sahibi, firma kullanıcısı) ayrı tutulmalıdır.
- Bir kullanıcı birden fazla firmada farklı rollere sahip olabilecekse rol, kullanıcı-firma ilişkisi üzerinde tutulmalıdır.
- Firma sahibi kendi firmasına kullanıcı davet edebilmeli, rol atayabilmeli; başka firmaya erişememelidir.

## Kullanıcı Gözünden Görme (Impersonation)
- Destek için yöneticinin bir kullanıcının gözünden paneli görmesi gerekiyorsa bu özellik yalnız platform yöneticilerine açılmalıdır. (Opsiyonel)
- Bu modda ekranda belirgin bir uyarı bulunmalı, başlangıç ve bitiş audit log'a yazılmalıdır.
- Bu modda parola değiştirme, ödeme, kalıcı silme gibi hassas işlemler engellenmelidir.
