# Yetki ve Veri İzolasyonu
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Hangi Durumda Kullanılır
- Birden fazla firmanın veya müşterinin aynı uygulamayı kullandığı (çok kiracılı) sistemlerde tümüyle uygulanmalıdır.
- Bireysel kullanıcı sistemlerinde her kullanıcının yalnızca kendi verisini görmesi maddeleri uygulanmalı, firma ve rol maddeleri atlanmalıdır.

## Yapılacaklar
- Her firma yalnızca kendi verisini görmelidir.
- Çok kiracılı sistemlerde her sorgu oturumdaki kiracı kimliğiyle süzülmeli, kiracı kimliği istemciden alınmamalıdır.
- Rol ve yetki her sunucu eyleminde yeniden kontrol edilmelidir.
- Başka kiracıya ait bir kayda erişim denemesi "bulunamadı" olarak dönmelidir.
- Yönetim sayfaları yetkisiz kullanıcıya 404 dönmelidir.
- Yazma işlemleri yalnızca yetkili rollere (sahip, editör) açık olmalı, görüntüleyici yalnızca okuyabilmelidir.
- Bir alan adı veya benzersiz kaynak yalnızca bir kiracı tarafından doğrulanabilmelidir.
