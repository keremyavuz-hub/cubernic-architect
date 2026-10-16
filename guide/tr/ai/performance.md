# Yapay Zeka ve Performans
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Genel Tutum
- Yapay zeka her geliştirmede performansı varsayılan bir kalite ölçütü olarak ele almalı, yalnızca istendiğinde değil kendiliğinden düşünmelidir.
- Yapay zeka yazdığı veya incelediği kodda bir performans sorunu görürse geliştiriciye bildirmeli, küçük ve güvenli düzeltmeleri işin parçası olarak yapmalıdır.
- Büyük yapısal performans değişiklikleri (önbellek katmanı, kuyruk, veritabanı değişikliği, yeniden yazım) onay alınmadan yapılmamalı, gerekçesi ve maliyetiyle öneri olarak sunulmalıdır.
- Performans önerileri ölçüme dayanmalıdır; "daha hızlı olur" yerine ölçülen değer veya beklenen etki (ör. sorgu sayısı 50'den 1'e iner) yazılmalıdır.
- Ölçülmeden yapılan erken optimizasyon kodu karmaşıklaştırıyorsa yapılmamalı; okunabilirlik ile hız arasındaki denge geliştiriciye açıklanmalıdır.
- Her performans önerisinde artısı, eksisi, maliyeti (para, karmaşıklık, bakım) ve ne zaman gerekli hale geleceği (ör. 10 bin kullanıcıdan sonra) belirtilmelidir.
- Yapılan performans iyileştirmeleri sistem belgesine ve çalışma günlüğüne yazılmalıdır.

## Veritabanı
- Sık sorgulanan ve süzülen alanlar için dizin (index) olup olmadığı kontrol edilmelidir.
- Döngü içinde sorgu (N+1) yapılmamalı, ilişkili veriler tek sorguda veya toplu olarak alınmalıdır.
- Liste sorgularında her zaman sayfalama ve üst sınır (limit) kullanılmalıdır.
- Yalnızca gereken kolonlar seçilmeli, select * kaçınılmalıdır.
- Sayım ve kontrol sorguları büyük tabloları baştan sona taramamalı, zaman aralığı ve dizinle sınırlandırılmalıdır.
- Yavaş sorgular EXPLAIN ANALYZE ile incelenmelidir.
- Bağlantı havuzu sınırlı tutulmalı, uzun süren işlemler havuzu tıkamamalıdır.
- Pahalı işlemlerden (DNS, dış API, parola özeti) önce ucuz kontroller (istek sınırı, biçim doğrulama) yapılmalıdır.

## Sunucu ve API
- Birbirine bağlı olmayan işlemler sırayla değil paralel çalıştırılmalıdır.
- Kullanıcıyı bekletmesi gerekmeyen işler (e-posta, bildirim, rapor) yanıtı bekletmemeli, arka planda veya kuyrukta yapılmalıdır.
- Sık okunan ve az değişen veriler için önbellek önerilmeli, önbelleğin ne zaman geçersiz kılınacağı tanımlanmalıdır.
- Dış servis çağrılarına zaman aşımı konmalı, yavaş bir servis tüm uygulamayı bekletmemelidir.
- Büyük yanıtlar sıkıştırılmalı ve yanıt boyutu sınırlandırılmalıdır.

## Ön Yüz
- Sayfa boyutu ve JavaScript paket boyutu izlenmeli, gereksiz büyük kütüphaneler eklenmemelidir.
- Ağır bileşenler (grafik, harita, 3D, editör) yalnızca gerektiğinde yüklenmelidir (dinamik içe aktarma / lazy loading).
- Sunucuda işlenebilecek içerik istemci tarafına taşınmamalıdır (ör. Next.js'de sunucu bileşenleri tercih edilmelidir).
- Görseller kullanılacağı boyuta küçültülmeli, modern biçimde (webp, avif) sunulmalı ve ekran dışındakiler geç yüklenmelidir.
- Yazı tipleri alt kümeye indirilmeli ve yerel olarak sunulmalıdır.
- Core Web Vitals değerleri (LCP, INP, CLS) ölçülmeli ve hedef değerler belirlenmelidir.
- Animasyonlarda kare hızı sınırlanmalı, görünmeyen öğeler çizilmemeli, bileşen kapanınca kaynaklar (WebGL bağlamı, zamanlayıcılar, olay dinleyicileri) serbest bırakılmalıdır.
- Uzun süre açık kalan sayfalarda bellek sızıntısı olup olmadığı test edilmelidir.

## Altyapı ve Maliyet
- Statik dosyalar CDN üzerinden ve uzun süreli önbellekle sunulmalıdır.
- Sunucu kaynak kullanımı (CPU, bellek, disk, bağlantı sayısı) izlenmeli, darboğaz oluşmadan önce uyarı verilmelidir.
- Ölçeklenme gerektiğinde önce mevcut kodun verimliliği iyileştirilmeli, daha büyük sunucu son çare olarak önerilmelidir.
- Yapay zeka, kullanılan ücretli hizmetlerin (yapay zeka API, e-posta, depolama) kullanım artışıyla oluşacak maliyeti öngörmeli ve geliştiriciye bildirmelidir.
