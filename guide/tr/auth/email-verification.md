# E-posta Doğrulama
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Yapılacaklar
- Kayıttan sonra kullanıcının e-posta adresine doğrulama bağlantısı gönderilmelidir.
- Doğrulama bağlantısı tahmin edilemez olmalı, en az 32 bayt rastgele koddan (base64url, 43 karakter) oluşmalıdır.
- Bağlantı yolu kısa ve anlamsız olmalıdır (ör. /e/<kod>); /basvuru/dogrula?id=5 gibi tahmin edilebilir yollar kullanılmamalıdır.
- Veritabanında kodun kendisi değil özeti (SHA-256) saklanmalıdır.
- Bağlantı süreli (ör. 48 saat) ve tek kullanımlık olmalıdır.
- Bağlantı kullanıldığında kod veritabanından silinmelidir.
- Bağlantı açılınca doğrulama hemen yapılmalı ve kullanıcı giriş ekranına tek satırlık bilgiyle yönlendirilmelidir.
- Kurumsal e-posta tarayıcılarının bağlantıyı önceden açıp tüketme riski kritikse, doğrulama ayrı bir "Doğrula" butonuyla yapılmalıdır. (Opsiyonel)
- Ekip incelemesi gibi iç süreç adımları kullanıcıya gösterilmemelidir.
- Doğrulandı, zaten doğrulanmış, süresi dolmuş ve geçersiz durumları ayrı mesajlarla gösterilmelidir.
- Süresi dolmuş bağlantıda kullanıcı aynı e-postayla yeniden başvurarak yeni bağlantı alabilmelidir.
- Ekibe yeni başvuru bildirimi e-posta doğrulandıktan sonra gönderilmeli, doğrulanmamış başvurular ekibi meşgul etmemelidir.
- Doğrulama işlemi etkinlik kaydına yazılmalıdır.
- Hiç doğrulanmamış eski kayıtlar periyodik bakım göreviyle silinmelidir (ör. 7 gün).
