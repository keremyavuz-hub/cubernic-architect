# Form Genel Kuralları
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Yapılacaklar
- Her alanın görünür bir etiketi olmalı, placeholder etiket yerine kullanılmamalıdır.
- Placeholder gerçekçi ama tarafsız bir örnek olmalıdır (ör. ad.soyad@ornek.com).
- Alanların altında gri renkte kısa bir yardım metni bulunmalı, hata oluştuğunda bu metnin yerine hata yazılmalıdır. (Önerilen)
- Alanlarda doğru type ve autocomplete değerleri kullanılmalıdır (email, current-password, new-password, name).
- E-posta alanında otomatik büyük harf ve yazım denetimi kapatılmalıdır.
- Her alana maksimum karakter sınırı verilmeli, sunucu da aynı sınırı uygulamalıdır.
- Gereksiz alan istenmemeli, sonradan alınabilecek bilgiler formdan çıkarılmalıdır.
- Formdaki zorunlu alanlar * işaretiyle işaretlenmelidir.
- Formun ilk alanı sayfa açıldığında odaklanmalıdır.
- Form klavye ile tamamen kullanılabilir olmalı, odak sırası mantıklı olmalıdır.
- Sunucudan hata alındığında girilen değerler korunmalı, form boşaltılmamalıdır (parola alanları hariç tutulabilir).
- Veri değiştiren işlemler açıkça tetiklenmeli, silme gibi geri dönüşü olmayan işlemler ek onay istemelidir.
- Silme onayı sunucu tarafında da ayrı bir onay alanıyla kontrol edilmelidir.
- Gizli bal küpü (honeypot) alanı eklenmelidir. (Önerilen)
