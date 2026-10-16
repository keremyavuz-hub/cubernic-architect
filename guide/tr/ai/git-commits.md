# Yapay Zeka ve Git / Commit Düzeni
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Genel Kurallar
- Yapay zeka her anlamlı iş sonunda commit atmalıdır; geliştirici aksini söylemedikçe push yapmamalıdır.
- Commit mesajı ne yapıldığını ve gerektiğinde nedenini anlatmalı, projenin commit dilini ve biçimini izlemelidir.
- Her commit tek bir konuyu içermeli, ilgisiz değişiklikler aynı commit'e konmamalıdır.
- Commit öncesinde testler ve derleme geçmelidir; geçmiyorsa bu durum commit mesajında ve raporda belirtilmelidir.
- Gizli değer içeren dosyalar (.env, anahtar dosyaları, yedekler, veritabanı dökümleri) commit'e eklenmemelidir; commit öncesi eklenen dosyalar kontrol edilmelidir.
- Geliştiricinin commit edilmemiş değişiklikleri yapay zekanın commit'ine habersiz karıştırılmamalıdır.

## Dal ve Geçmiş
- Ana dal (main / master) üzerinde büyük ve riskli işler için ayrı dal açılması önerilmelidir.
- Geçmişi yeniden yazan işlemler (rebase, amend, reset, force push) geliştiricinin onayı olmadan yapılmamalıdır.
- Hatalı bir commit geri alınacaksa geçmişi silmek yerine geri alma commit'i (git revert) tercih edilmelidir.
- Birleştirme çakışmaları geliştiricinin değişikliklerini kaybetmeyecek şekilde çözülmeli, emin olunamayan durumlarda sorulmalıdır.

## Belgelerle Birlikte
- Özellik değişikliğiyle birlikte sistem belgesi ve çalışma günlüğü aynı commit'te güncellenmelidir.
- Veritabanı şeması değiştiğinde migration dosyası aynı commit'te bulunmalıdır.
- Yeni ortam değişkeni eklendiğinde .env.example aynı commit'te güncellenmelidir.
