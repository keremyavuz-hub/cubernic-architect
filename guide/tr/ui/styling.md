# Stil Kuralları (Tailwind ve CSS)
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Genel Kurallar
- Arayüz tasarımlarında Tailwind CSS kullanılmalıdır.
- HTML / JSX içinde style özniteliği (style="..." veya style={{...}}) ile stil tanımlanmamalıdır.
- Sayfaların içine <style> etiketi yazılmamalıdır.
- Tüm stiller CSS dosyalarında tanımlanmalı ve derleme sırasında paketlenmelidir (bundle); tarayıcıya tek ve küçültülmüş (minified) CSS gitmelidir.
- Renkler, boşluklar, yazı tipleri, gölgeler ve köşe yuvarlaklıkları Tailwind tema değişkenlerinde (Tailwind v4'te @theme) merkezi olarak tanımlanmalı; kodda rastgele renk kodu (#e8741f gibi) yazılmamalıdır.
- Koyu tema ve tema değişkenleri CSS değişkenleriyle yönetilmelidir.

## Tekrar Eden Stiller
- Birden fazla yerde tekrar eden sınıf kombinasyonları (buton, input, kart, rozet, form etiketi) CSS dosyasında bileşen sınıfı olarak tanımlanmalıdır (ör. @layer components içinde .btn, .btn-primary, .input, .card).
- Bileşen sınıfları Tailwind'in @apply yönergesiyle veya tema değişkenleriyle yazılmalıdır.
- Uzun ve okunması zor sınıf listeleri ortak bileşen sınıfına veya ortak React bileşenine dönüştürülmelidir.
- Aynı görünüm için hem bileşen sınıfı hem ayrı yardımcı sınıf listesi kullanılmamalıdır; tek kaynak olmalıdır.
- Tailwind'in kendi önerisinin her şeyi @apply ile soyutlamak olmadığı, tek seferlik yerleşim (flex, grid, boşluk) için yardımcı sınıfların kullanılabileceği geliştiriciye hatırlatılmalı; hangi düzeyde soyutlanacağı proje başında belirlenmelidir.

## Dinamik Değerler
- Çalışma anında değişen değerler (ilerleme çubuğu genişliği, kullanıcının seçtiği renk) style özniteliği yerine CSS değişkeni ve sınıf ile verilmelidir (ör. data-* öznitelikleri veya Tailwind'in keyfi değer sınıfları).
- Bir değeri vermenin style özniteliğinden başka yolu yoksa (ör. üçüncü taraf bileşen, animasyon kütüphanesi) yalnızca CSS değişkeni atanmalı, stilin kendisi CSS dosyasında yazılmalıdır.
- Animasyonlar CSS dosyasında @keyframes ile tanımlanmalı, JavaScript ile stil yazmak yalnızca CSS'in yapamadığı durumlarla sınırlı kalmalıdır.

## İstisnalar
- E-posta şablonlarında satır içi stil zorunludur; e-posta istemcileri (Gmail, Outlook) harici ve <head> içindeki CSS'i kısmen veya tamamen siler. E-posta şablonları bu kuraldan muaftır.
- E-posta şablonlarında stiller elle değil, şablon aracı (React Email, juice gibi CSS satır içine alma araçları) veya tek bir düzen fonksiyonu üzerinden üretilmelidir.
- Üçüncü taraf bir kütüphanenin zorunlu kıldığı satır içi stiller istisnadır; bu durum kodda yorumla belirtilmelidir.

## CSS Kalitesi
- Kullanılmayan CSS derleme sırasında temizlenmelidir (Tailwind bunu kendisi yapar; ek CSS dosyalarında da kontrol edilmelidir).
- !important kullanılmamalıdır; özgüllük sorunu yapı düzeltilerek çözülmelidir.
- Sınıf adları ve tema değişkeni adları çakışmamalıdır (ör. text-muted ile --color-muted çakışması).
- Pasif / devre dışı durumlar (:disabled), odak (:focus-visible), hover ve aria durumları bileşen sınıflarında tanımlanmalıdır.
- Mobil öncelikli (mobile-first) yazılmalı, kırılım noktaları Tailwind'in standart kırılımlarıyla tutarlı olmalıdır.
- Stil dosyaları konuya göre bölünebilir (temel, bileşenler, animasyonlar) ama tek giriş dosyasından içe aktarılmalıdır.
