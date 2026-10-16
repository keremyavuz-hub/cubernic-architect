# Görsel ve Medya Optimizasyonu
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Görseller
- Görseller gösterileceği en büyük boyuta göre küçültülmeli, orijinal büyük dosyalar sayfaya gönderilmemelidir.
- Fotoğraflar modern biçimlerde (AVIF, WebP) sunulmalı, eski tarayıcılar için yedek biçim gerekiyorsa picture etiketiyle verilmelidir.
- Logo, ikon ve basit çizimler mümkünse SVG olmalı; SVG dosyaları optimize edilmelidir (ör. SVGO).
- Farklı ekran boyutları için srcset ve sizes ile birden fazla boyut sunulmalıdır.
- Her görselde genişlik ve yükseklik (veya aspect-ratio) belirtilmeli, sayfa yüklenirken kayma (CLS) olmamalıdır.
- Ekranın görünmeyen kısmındaki görseller geç yüklenmelidir (loading="lazy"); sayfanın ilk görünen ana görseli ise öncelikli yüklenmelidir (fetchpriority="high").
- Görsellerde anlamlı alt metni bulunmalı, süs amaçlı görsellerde alt="" kullanılmalıdır.
- Next.js kullanılıyorsa görsel optimizasyon bileşeni (next/image) tercih edilmeli; uzak görsel izinleri yalnızca gereken alan adlarıyla sınırlandırılmalıdır.
- Kullanıcıların yüklediği görseller sunucuda boyutlandırılmalı ve sıkıştırılmalı, meta verileri (EXIF, konum bilgisi) silinmelidir.
- Görsel işleme istek sırasında değil arka planda veya bir görsel hizmetinde yapılmalıdır.
- Görseller uzun süreli önbellekle ve CDN üzerinden sunulmalıdır; dosya adı içerik değişince değişmelidir.

## Video ve Animasyon Dosyaları
- Video dosyaları sıkıştırılmış biçimde (MP4 / H.264, WebM) ve gösterim boyutunda sunulmalıdır.
- Otomatik oynatılan arka plan videoları sessiz, kısa ve küçük olmalı; mobilde ve "hareketi azalt" tercihinde durdurulmalıdır.
- GIF yerine video veya animasyonlu WebP kullanılmalıdır.
- Video için kapak görseli (poster) verilmeli, video sayfa açılır açılmaz indirilmemelidir (preload="none" veya "metadata").
- Uzun videolar için akış hizmeti (Cloudflare Stream, Bunny Stream, YouTube) önerilmelidir.

## Yazı Tipleri
- Yazı tipleri yerel olarak sunulmalı, yalnızca kullanılan ağırlıklar ve karakter alt kümesi (Latin + Türkçe karakterler) yüklenmelidir.
- WOFF2 biçimi kullanılmalıdır.
- font-display: swap kullanılmalı, ana yazı tipi önceden yüklenmelidir (preload).
- Next.js'de next/font kullanılabilir; yazı tipini kendisi indirip yerel sunar.
- Değişken yazı tipleri (variable font) birden fazla ağırlık gerektiğinde tercih edilmelidir.

## İkonlar
- İkon kütüphanelerinden yalnızca kullanılan ikonlar içe aktarılmalıdır (ör. lucide-react'ten tek tek içe aktarma); tüm ikon seti pakete girmemelidir.
- İkon yazı tipleri (icon font) yerine SVG ikonlar kullanılmalıdır.

## Ölçüm ve Kontrol
- Sayfa ağırlığı, görsel boyutları ve Core Web Vitals değerleri Lighthouse veya PageSpeed Insights ile ölçülmelidir.
- Görsel başına boyut bütçesi belirlenmelidir (ör. ana görsel 200 KB, küçük görseller 50 KB altı). (Önerilen)
- Projeye eklenen her yeni görsel optimize edilmeden commit edilmemelidir.

## Önerilen Platformlar
- Görselleri önceden optimize etmek için Squoosh, sharp veya ImageMagick kullanılabilir.
- Dinamik görsel boyutlandırma ve biçim dönüştürme için Cloudflare Images, Cloudinary, imgix veya Bunny Optimizer önerilebilir; ücret geliştiriciye belirtilmelidir.
