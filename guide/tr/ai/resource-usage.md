# Yapay Zeka ve Kaynak Tüketimi
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Geliştirmeden Önce
- Yapay zeka bir özelliği geliştirmeden önce özelliğin CPU, RAM, GPU, veritabanı, disk, ağ ve dış servis tüketimini öngörmeli, ciddi bir tüketim bekleniyorsa geliştiriciye önceden bildirmelidir.
- Özelliğin tüketimi kullanıcı sayısı, veri miktarı ve süre arttıkça nasıl büyüyeceği düşünülmelidir (sabit mi, doğrusal mı, kontrolsüz mü).
- Sürekli çalışan, kendini tekrarlayan veya süresiz büyüyen her yapı (döngü, zamanlayıcı, animasyon, kuyruk, önbellek, log, tablo) için bir üst sınır ve durma koşulu tanımlanmalıdır.
- Kullanıcının tetikleyebildiği her pahalı işlem için kötüye kullanım senaryosu düşünülmeli ve sınır konmalıdır (ör. saniyede yüz kez tetiklenirse ne olur).
- Kaynak tüketimine karşı alınacak önlemler özellikle birlikte önerilmeli, sonradan eklenmeye bırakılmamalıdır.
- Geliştirmeden sonra tüketim mümkünse ölçülmeli ve beklentiyle karşılaştırılmalıdır.

## CPU
- Ağır hesaplamalar (görsel işleme, büyük dosya dönüştürme, toplu veri işleme, PDF / Excel üretimi) istek sırasında değil arka plan görevinde yapılmalıdır.
- Tarayıcıda ağır hesaplamalar ana iş parçacığını kilitlememeli, gerekirse Web Worker kullanılmalıdır.
- Sonsuz veya çok sık çalışan döngüler ve zamanlayıcılar (setInterval, polling) kullanılmamalı; sıklık ihtiyaca göre seçilmeli ve sayfa görünmezken durdurulmalıdır.
- Kullanıcı girdisiyle çalışan düzenli ifadelerde (regex) aşırı geri izleme (catastrophic backtracking) riski kontrol edilmeli, girdi uzunluğu sınırlanmalıdır.
- Parola özeti (scrypt, bcrypt, argon2) bilinçli olarak yavaştır; istek sınırı olmadan çağrılmamalı ve girdi uzunluğu sınırlanmalıdır.
- Yoğun CPU kullanan işlerin aynı anda kaç tane çalışabileceği sınırlanmalıdır (eşzamanlılık sınırı).

## RAM (Bellek)
- Büyük veri setleri belleğe tek seferde yüklenmemeli; sayfalama, akış (stream) veya parça parça işleme kullanılmalıdır.
- Dosya yükleme ve indirme işlemleri belleğe tamamen alınmadan akış olarak işlenmelidir.
- Bellekte tutulan önbelleklerin üst boyutu ve süresi olmalı, eski kayıtlar atılmalıdır (LRU, TTL).
- Uzun yaşayan sunucu süreçlerinde modül düzeyinde sürekli büyüyen diziler, haritalar ve dinleyiciler oluşturulmamalıdır.
- Olay dinleyicileri, zamanlayıcılar, abonelikler ve bağlantılar bileşen veya işlem bittiğinde temizlenmelidir.
- İstek ve yanıt gövdelerine boyut sınırı konmalıdır.
- Uzun süre açık kalan sayfalar ve süreçler bellek sızıntısı açısından test edilmelidir.

## GPU ve Animasyon
- WebGL, canvas ve 3D animasyonlarda kare hızı sınırlanmalıdır (ör. 30 fps); 60 fps yalnızca gerçekten gerekiyorsa kullanılmalıdır.
- Piksel oranı sınırlanmalıdır (ör. en fazla 1 veya 1.5); yüksek çözünürlüklü ekranlarda tam çözünürlükte çizim GPU'yu katlanarak yorar.
- Sayfa veya sekme görünmezken (visibilitychange) ve öğe ekranda değilken (IntersectionObserver) animasyon durdurulmalıdır.
- Kullanıcı hareket azaltma tercihi (prefers-reduced-motion) açıksa animasyon durdurulmalı veya sadeleştirilmelidir.
- Bileşen kapanınca WebGL bağlamı, dokular, geometriler ve shader'lar serbest bırakılmalıdır (dispose, forceContextLoss).
- Görünmeyen nesneler çizim döngüsünden çıkarılmalı, gereksiz katman ve parçacık sayısı azaltılmalıdır.
- Shader içinde döngü ve gürültü katmanı sayısı sınırlı tutulmalıdır.
- Düşük güçlü cihazlarda (mobil, eski dizüstü) animasyon test edilmeli, gerekirse sadeleştirilmiş sürüm sunulmalıdır.
- Aynı sayfada birden fazla WebGL bağlamı açılmamalıdır; tarayıcıların bağlam sayısı sınırı vardır.

## Veritabanı
- Her sorgunun sonuç sayısı sınırlandırılmalı, sınırsız liste sorgusu yazılmamalıdır.
- Sık çalışan sorgular dizinle desteklenmeli, tam tablo taraması yapan sorgular tespit edilmelidir.
- Tablo büyüme hızı öngörülmeli; süresiz büyüyen tablolar (log, etkinlik kaydı, oturum, bildirim) için saklama süresi ve temizlik görevi tanımlanmalıdır.
- Bağlantı havuzu sınırlı tutulmalı ve sızan (kapatılmayan) bağlantı olmamalıdır.
- Veritabanı işlemleri (transaction) kısa tutulmalı; işlem içinde dış servis çağrısı, e-posta gönderimi veya uzun hesaplama yapılmamalıdır.
- Kilitler beklemeyen türde seçilmeli veya zaman aşımına sahip olmalı, kilit bekleyen istekler bağlantıları tüketmemelidir.
- Arayüzün sık aralıklarla veritabanını yoklaması (polling) yerine gerektiğinde gerçek zamanlı bildirim veya daha seyrek yoklama tercih edilmelidir.
- Toplu güncelleme ve silmeler parça parça (batch) yapılmalı, tek seferde milyonlarca satır kilitlenmemelidir.
- Veritabanı disk kullanımı, bağlantı sayısı ve yavaş sorgular izlenmelidir.

## Disk
- Log dosyaları döndürülmeli (log rotation) ve eski loglar silinmelidir.
- Geçici dosyalar işlem bitince silinmeli, geçici klasörler düzenli temizlenmelidir.
- Kullanıcı yüklemelerine dosya boyutu ve toplam kota sınırı konmalıdır.
- Yedekler aynı diskte birikmemeli, saklama süresine göre silinmelidir.
- Docker imajları, eski derlemeler ve kullanılmayan birimler disk doldurmaması için izlenmelidir (silme işlemi geliştirici onayıyla yapılmalıdır).
- Disk doluluk oranı için uyarı tanımlanmalıdır (ör. yüzde 80).

## Ağ ve Dış Servisler
- Her dış istek için zaman aşımı, yeniden deneme sayısı ve bekleme süresi (exponential backoff) tanımlanmalıdır; sonsuz yeniden deneme yapılmamalıdır.
- Hata durumunda birbirini tetikleyen istek fırtınası (retry storm) oluşmamalıdır.
- Dış servislerin istek sınırlarına (rate limit) ve kotalarına uyulmalı, 429 yanıtları doğru işlenmelidir.
- Ücretli dış servislerin (yapay zeka, SMS, e-posta, harita, depolama) kullanımı kullanıcı başı ve günlük sınırlarla korunmalı, harcama sınırı ve uyarısı kurulmalıdır.
- Yapay zeka çağrılarında token sınırı, istek başı en fazla çıktı ve önbellek kullanımı değerlendirilmelidir.
- Büyük yanıtlar sıkıştırılmalı, gereksiz veri istemciye gönderilmemelidir.
- Gerçek zamanlı bağlantılarda (WebSocket, SSE) bağlantı sayısı ve boşta kalan bağlantıların kapatılması planlanmalıdır.

## Arka Plan Görevleri ve Zamanlanmış İşler
- Zamanlanmış görevler üst üste binmemelidir; önceki çalışma bitmeden yenisi başlamamalı (kilit veya tek örnek kontrolü).
- Görevlerin en uzun çalışma süresi sınırlanmalıdır.
- Görevler aynı dakikada (ör. her saat başı) toplanmamalı, farklı dakikalara dağıtılmalıdır.
- Kuyruklardaki başarısız işler sonsuza kadar yeniden denenmemeli, belirli denemeden sonra hata kuyruğuna alınmalıdır.
- Kuyruk uzunluğu izlenmeli, birikme durumunda uyarı verilmelidir.

## İzleme ve Uyarı
- Canlı ortamda CPU, bellek, disk, veritabanı bağlantısı ve yanıt süresi izlenmeli, eşik aşıldığında uyarı gönderilmelidir.
- Ücretli hizmetlerin kullanımı ve faturası izlenmeli, beklenmedik artışta uyarı verilmelidir.
- Önemli özelliklerden önce yük testi yapılması önerilmelidir (ör. k6, autocannon). (Önerilen)
- Kaynak sorunlarında önce ölçüm (profiling) yapılmalı, tahmine göre değişiklik yapılmamalıdır.

## Geliştirme Ortamı
- Geliştirme ortamında çalışan izleyiciler (watcher), geliştirme sunucuları ve konteynerler kullanılmadığında kapatılabilmelidir.
- Yapay zeka arka planda başlattığı süreçleri iş bitince kapatmalı, sonsuz çalışan süreç bırakmamalıdır.
- Geliştiricinin bilgisayarını yoran bir durum (ör. açık kalan sekmede donan animasyon, bellek sızıntısı) fark edilirse nedeni araştırılmalı ve bildirilmelidir.
