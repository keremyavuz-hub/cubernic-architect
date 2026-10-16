# Erişilebilirlik (a11y)
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Ortak Yapılacaklar
- Arayüz WCAG 2.2 AA düzeyini hedeflemelidir; bazı ülkelerde ve kamu / büyük şirket müşterilerinde yasal zorunluluktur.
- Tüm işlemler yalnız klavyeyle yapılabilmelidir; sekme sırası mantıklı olmalı, odak görünür olmalıdır.
- Metin ve arka plan kontrastı yeterli olmalıdır (normal metin için en az 4.5:1).
- Bilgi yalnız renkle verilmemelidir (ör. hata hem kırmızı hem metin / ikonla belirtilmelidir).
- Form alanlarının görünür etiketleri olmalı; hata mesajları alanla ilişkilendirilmelidir (aria-describedby).
- Düğme ve bağlantılar doğru HTML elemanıyla yapılmalıdır (div'e tıklama olayı eklenmemelidir).
- Yalnız ikondan oluşan düğmelere erişilebilir ad verilmelidir (aria-label).
- Görsellere anlamlı alternatif metin verilmeli; süs görsellerinde boş alt kullanılmalıdır.
- Açılır pencerelerde odak pencereye taşınmalı, pencere içinde kalmalı, kapanınca geri dönmelidir; Esc ile kapanmalıdır.
- Sayfa başlıkları sıralı (h1, h2, h3) ve her sayfanın tek bir h1'i olmalıdır.
- Dinamik bildirimler ekran okuyucuya duyurulmalıdır (aria-live) (bkz. forms/alerts.md).
- Hareket azaltma tercihi (prefers-reduced-motion) dikkate alınmalıdır (bkz. ui/animation.md).
- Dokunmatik hedefler yeterince büyük olmalıdır (en az 24x24 px, önerilen 44x44 px).
- Sayfa dili (lang) doğru tanımlanmalıdır.
- Erişilebilirlik otomatik araçlarla kontrol edilmelidir (ör. Lighthouse, axe); ancak klavye ile elle deneme gerekir ve geliştiriciden istenmelidir.
