# Animasyon, Canvas ve Performans
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Ekranı Kilitlememe
- Canvas, WebGL, 3D veya animasyonlu her yapı sayfayı, tarayıcıyı ve kullanıcının bilgisayarını kilitlemeyecek şekilde geliştirilmeli; bu durum test edilmeden iş bitmiş sayılmamalıdır.
- Animasyon ana iş parçacığını (main thread) uzun süre meşgul etmemelidir; tek bir karede yapılan iş 16 ms'yi (60 fps) veya 33 ms'yi (30 fps) aşmamalı, 50 ms üzeri uzun görevler (long task) oluşmamalıdır.
- Animasyon döngüsü setInterval veya setTimeout ile değil requestAnimationFrame ile kurulmalıdır.
- Kare hızı bilinçli olarak sınırlanmalıdır (ör. 30 fps); her requestAnimationFrame çağrısında çizim yapılmamalı, zaman farkına göre kare atlanmalıdır.
- Karede geçen süre (delta) üst sınırla kısıtlanmalıdır; sekme uzun süre arka planda kalıp geri gelince animasyon tek karede büyük sıçrama veya hesap patlaması yaşamamalıdır.
- Animasyon kullanıcı etkileşimini (tıklama, yazma, kaydırma) geciktirmemeli; form alanlarına yazarken takılma olmamalı ve INP değeri iyi kalmalıdır.
- Fare / dokunma olaylarında ağır hesap yapılmamalı; olaylar yalnızca son konumu kaydetmeli, hesap çizim döngüsünde kare başına bir kez yapılmalıdır.
- Animasyon sayfa ilk açılırken yüklemeyi bekletmemeli; ağır kütüphaneler (three.js vb.) dinamik içe aktarma ile, içerik göründükten sonra yüklenmelidir.
- Sahne kurulumu (shader derleme, doku yükleme, geometri oluşturma) tek seferde ana iş parçacığını kilitliyorsa parçalara bölünmeli veya boşta zaman (requestIdleCallback) kullanılmalıdır.
- Ağır hesaplamalar (fizik, parçacık simülasyonu, büyük veri) mümkünse Web Worker'a, çizim mümkünse OffscreenCanvas ile Worker'a taşınmalıdır. (Önerilen)

## Duraklatma ve Kaynak Bırakma
- Sekme görünmezken (visibilitychange) animasyon tamamen durdurulmalıdır.
- Canvas ekranın görünen alanında değilken (IntersectionObserver) animasyon durdurulmalıdır.
- Animasyonun üzerini kaplayan bir ekran (ör. sözleşme paneli, modal) açıldığında arkadaki animasyon durdurulmalıdır.
- Kullanıcının hareket azaltma tercihi (prefers-reduced-motion) açıksa animasyon durdurulmalı veya sabit görüntüye geçilmelidir.
- Bileşen kapanınca requestAnimationFrame iptal edilmeli, olay dinleyicileri ve zamanlayıcılar kaldırılmalı, WebGL kaynakları (geometri, doku, malzeme, shader, render hedefi) dispose edilmeli ve bağlam serbest bırakılmalıdır (forceContextLoss).
- Sayfa geçişlerinde ve sıcak yeniden yüklemede (hot reload) eski canvas ve bağlamlar birikmemelidir; aynı anda açık WebGL bağlamı sayısı kontrol edilmelidir.

## Kalite ve Uyarlanabilirlik
- Piksel oranı sınırlanmalıdır (ör. en fazla 1 veya 1.5); yüksek çözünürlüklü ekranda tam çözünürlük GPU yükünü katlar.
- WebGL bağlamı düşük güç tercihiyle (powerPreference: 'low-power') açılmalı, gereksiz özellikler (antialias, preserveDrawingBuffer) kapalı tutulmalıdır.
- Kare süresi ölçülmeli; cihaz yetişemiyorsa kalite otomatik düşürülmelidir (piksel oranı, parçacık sayısı, efekt katmanı). (Önerilen)
- Düşük güçlü cihazlarda, mobilde ve pil tasarrufu modunda sadeleştirilmiş sürüm sunulmalıdır.
- Shader'lardaki döngü ve gürültü (noise) katmanı sayısı sınırlı tutulmalı, piksel başına ağır hesap yapılmamalıdır.
- Görünmeyen nesneler çizim döngüsünden çıkarılmalı, gizli nesneler için boşuna hesap yapılmamalıdır.

## Bellek ve Çöp Toplama
- Çizim döngüsü içinde her karede yeni nesne, dizi veya vektör oluşturulmamalı; nesneler önceden oluşturulup yeniden kullanılmalıdır.
- Çöp toplayıcı (garbage collector) kaynaklı periyodik takılmalar Performance panelinde kontrol edilmelidir.
- Uzun süre açık kalan sayfada bellek kullanımı zamanla artmamalıdır.

## Hata ve Yedek Durumu
- WebGL desteklenmiyorsa, bağlam oluşturulamıyorsa veya bağlam kaybolursa (webglcontextlost) sayfa çökmemeli, sabit bir görsel veya sade arka plan gösterilmelidir.
- Animasyon hatası sayfanın geri kalanını (formlar, butonlar) etkilememeli; animasyon bileşeni kendi hata sınırı içinde çalışmalıdır.
- Animasyon içeriği erişilebilirlik açısından süs amaçlıysa ekran okuyuculardan gizlenmelidir (aria-hidden).

## Test Yöntemi
- Animasyonlu sayfa geliştirme bittiğinde tarayıcının Performance panelinde kayıt alınmalı, uzun görevler ve kare süreleri incelenmelidir.
- CPU yavaşlatma (ör. 4x / 6x throttling) ile düşük güçlü cihaz koşulları denenmelidir.
- Sayfa en az 15–30 dakika açık bırakılıp bellek ve CPU kullanımının artmadığı, tarayıcının yavaşlamadığı kontrol edilmelidir.
- Sekme arka plana alınıp geri getirilerek animasyonun durup doğru şekilde devam ettiği kontrol edilmelidir.
- Animasyon açıkken formlara yazılarak ve sayfa kaydırılarak takılma olmadığı kontrol edilmelidir.
- Birden fazla sekmede aynı sayfa açılarak toplam kaynak kullanımı kontrol edilmelidir.
- Sayfa geçişleri ve geri / ileri gezinme sonrasında birikmiş canvas veya bağlam kalmadığı kontrol edilmelidir.
- Mobil cihazda ısınma ve pil tüketimi kontrol edilmelidir. (Önerilen)

## Genel Kurallar
- Kullanımdan kalkmış kütüphane API'leri kullanılmamalı, konsoldaki uyarılar giderilmelidir (ör. THREE.Clock yerine performance.now()).
- Fare hareketine bağlı halka, daire ve hep aynı yöne dönen girdap efektleri kullanılmamalıdır.
- Animasyonlar marka ve tasarım diliyle uyumlu, sade ve dikkat dağıtmayan şekilde tasarlanmalıdır.
- Animasyonun sayfaya kattığı değer, getirdiği kaynak maliyetiyle birlikte değerlendirilmeli; gerekirse statik görsel veya CSS animasyonu önerilmelidir.
- Basit hareketler (soluklaşma, kayma, yüzme) JavaScript ve canvas yerine CSS animasyonlarıyla yapılmalı; yalnızca transform ve opacity özellikleri canlandırılmalıdır.

## Ders (Örnek Proje)
- Bir projede three.js arka plan animasyonu bir süre sonra tarayıcıyı kilitledi; nedenleri bırakılmayan WebGL bağlamları, sınırsız kare hızı, yüksek piksel oranı ve gizli nesnelerin çizilmeye devam etmesiydi. Çözüm: 30 fps sınırı, piksel oranı 1, düşük güç tercihi, gizli nesneleri döngüden çıkarma ve kapanışta forceContextLoss. Bu kontroller her animasyonda baştan uygulanmalıdır.
