# Responsive Tasarım
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Genel Kurallar
- Her sayfa ve bileşen telefon, tablet, dizüstü ve geniş ekranda düzgün çalışacak şekilde geliştirilmeli; responsive kontrol yapılmadan iş bitmiş sayılmamalıdır.
- Tasarım mobil öncelikli (mobile-first) yazılmalı; temel stiller küçük ekran için, büyük ekran stilleri kırılım noktalarıyla eklenmelidir.
- Kırılım noktaları projenin tek bir yerinde tanımlanmalı ve Tailwind'in standart kırılımlarıyla tutarlı olmalıdır (sm 640, md 768, lg 1024, xl 1280, 2xl 1536).
- Sayfada hiçbir genişlikte yatay kaydırma çubuğu oluşmamalıdır.
- Sabit piksel genişlikleri yerine esnek birimler (%, fr, rem, min(), max(), clamp()) kullanılmalıdır.
- Sayfa head bölümünde doğru viewport ayarı bulunmalıdır (width=device-width, initial-scale=1); kullanıcının yakınlaştırması engellenmemelidir.
- Bileşen kendi kapsayıcısının genişliğine göre değişiyorsa container query kullanılmalıdır. (Önerilen)

## Test Edilecek Genişlikler
- Her sayfa en az şu genişliklerde kontrol edilmelidir: 320 (küçük telefon), 375 / 390 (yaygın telefon), 768 (tablet dikey), 1024 (tablet yatay / küçük dizüstü), 1280 ve 1440 (dizüstü / masaüstü), 1920 ve üzeri (geniş ekran).
- Telefon yatay konumda (landscape) da kontrol edilmelidir; özellikle tam ekran yükseklik kullanan sayfalarda.
- Tarayıcı yakınlaştırması %200'e çıkarıldığında içerik kullanılabilir kalmalıdır (erişilebilirlik).
- Geliştirici araçlarının cihaz görünümü yanında mümkünse gerçek bir telefonda da test yapılmalıdır.

## Yerleşim
- Kart ızgaraları ekran genişliğine göre kolon sayısını azaltmalı (ör. 6 / 3+3 / 2+2+2 / 1); bir satırda tek kart yalnız kalmamalıdır.
- İki bölmeli yerleşimler (ör. solda form, sağda görsel / animasyon) küçük ekranda tek kolona inmeli; süs amaçlı bölme mobilde gizlenmeli veya küçültülmelidir.
- Kenar çubuğu (sidebar) mobilde açılır kapanır menüye dönüşmeli, içeriğin üstüne açıldığında arka plan kaydırması kilitlenmelidir.
- Tablolar küçük ekranda ya yatay kaydırılabilir bir kapsayıcı içinde olmalı ya da kart görünümüne dönüşmelidir; sayfanın tamamı yatay kaymamalıdır.
- Modal ve paneller mobilde tam ekran veya alttan açılan sayfa (bottom sheet) olarak gösterilmelidir.
- Rozet, buton grubu ve metinler sığmadığında alt satıra inmeli veya kısalmalı, üst üste binmemelidir.
- Yazı boyutları ekran boyutuna göre ölçeklenmeli; başlıklar küçük ekranda taşmamalıdır (clamp() önerilir).
- Geniş ekranlarda okunabilirlik için metin satır uzunluğu sınırlanmalıdır (ör. max-w-prose).

## Taşma ve Uzun İçerik
- Uzun kelimeler, e-posta adresleri, alan adları, adresler ve kodlar kapsayıcıdan taşmamalıdır (break-words, break-all veya truncate kullanılmalıdır).
- Kısaltılan metinlerin tamamı gerektiğinde görülebilmelidir (title özniteliği veya tooltip).
- Kullanıcı tarafından girilen içerikler (firma adı, ürün adı) en uzun haliyle test edilmelidir.
- Türkçe gibi uzun kelimeli dillerde buton ve menü metinleri dar ekranda kontrol edilmelidir.
- Flex ve grid içindeki öğelerde min-w-0 eksikliği nedeniyle taşma olup olmadığı kontrol edilmelidir.

## Dokunmatik Ekranlar
- Tıklanabilir öğeler parmakla rahat basılacak boyutta olmalıdır (en az 44 x 44 px) ve aralarında yeterli boşluk bulunmalıdır.
- Yalnızca fareyle üzerine gelince (hover) görünen işlevler olmamalıdır; dokunmatik ekranda aynı işleve dokunarak erişilebilmelidir.
- Tooltip ve açılır menüler dokunarak açılıp kapanabilmelidir.
- Kaydırma, sürükleme ve kaydırarak geçiş (swipe) hareketleri sayfanın normal kaydırmasını engellememelidir.

## Mobil Tarayıcı Özellikleri
- Form alanlarının yazı boyutu en az 16 px olmalıdır; aksi halde iOS Safari alana dokununca sayfayı yakınlaştırır.
- Form alanlarında doğru klavye türü açılmalıdır (type="email", type="tel", inputmode="numeric").
- Mobil klavye açıldığında aktif form alanı ve gönder butonu görünür kalmalıdır.
- Tam ekran yükseklik için 100vh yerine dinamik birimler (100dvh, 100svh) kullanılmalıdır; mobil tarayıcı adres çubuğu içeriği kesmemelidir.
- Çentikli ve yuvarlak köşeli ekranlarda güvenli alan boşlukları (env(safe-area-inset-*)) dikkate alınmalıdır.
- Sabit (fixed / sticky) üst ve alt çubuklar küçük ekranda içeriğin çok büyük bir kısmını kaplamamalıdır.

## Görseller ve Medya
- Görseller kapsayıcısından taşmamalı (max-width: 100%) ve oranları korunmalıdır.
- Küçük ekranlara küçük görsel gönderilmelidir (srcset ve sizes); bkz. ui/media-optimization.md.
- Ağır animasyonlar ve arka plan videoları mobilde sadeleştirilmeli veya durdurulmalıdır.

## Kontrol Listesi
- Responsive kontrolü her yeni sayfa ve her arayüz değişikliğinden sonra yapılmalıdır.
- Yapay zeka arayüz işini bitirdiğinde hangi genişliklerde kontrol ettiğini, kontrol edemediyse bunu açıkça belirtmelidir.
- Yapay zeka tarayıcıda kontrol edemiyorsa kodda responsive sınıfların, taşma önlemlerinin ve mobil davranışların bulunduğunu doğrulamalı ve geliştiriciye hangi genişliklerde bakması gerektiğini yazmalıdır.
