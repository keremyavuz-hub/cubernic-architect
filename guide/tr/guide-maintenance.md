# Kılavuzun Bakımı, Sürümü ve Projeye Yerleştirilmesi
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Sürüm ve Değişiklik Günlüğü
- Kılavuzun bir sürüm numarası olmalı ve depo kökündeki .claude-plugin/plugin.json ile marketplace.json dosyalarında tutulmalıdır.
- Her değişiklik depo kökündeki CHANGELOG.md dosyasına tarih, sürüm ve kısa açıklamayla yazılmalıdır.
- Mevcut projeleri etkileyecek kural değişiklikleri (ör. yeni zorunlu güvenlik kuralı) ayrıca işaretlenmelidir.
- Her proje, kullandığı kılavuz sürümünü kural dosyasına (CLAUDE.md / AGENTS.md) yazmalıdır.

## Projeye Yerleştirme
- Kılavuz projeye cubernic-architect/ klasörü olarak eklenmelidir; yöntem seçilmeli ve kural dosyasına yazılmalıdır:
- Kopyalama: en basit yol; güncellemeler elle taşınır. (Önerilen, küçük projeler için)
- Git submodule veya subtree: tek kaynaktan güncelleme; ekip git konusunda deneyimliyse.
- Projeye özel değişiklikler kılavuz dosyalarına değil, projenin kendi belgelerine veya kural dosyasındaki "kılavuzdan sapmalar" bölümüne yazılmalıdır; böylece kılavuz güncellenirken çakışma olmaz.
- Kural dosyasında yapay zekanın kılavuzu okuması gerektiği ve README.md'nin giriş noktası olduğu yazmalıdır.

## Güncelleme
- Kılavuz güncellendiğinde yapay zeka değişiklik günlüğündeki yeni maddeleri projeyle karşılaştırmalı ve etkilenen yapıları geliştiriciye kısaca bildirmelidir; uygulama kararı geliştiriciye aittir (bkz. ai/guide-activation.md).
- Projede öğrenilen ve başka projelere de faydalı dersler kılavuza aynı formatta eklenmelidir.

## Yazım Kuralları
- Her dosya şu yapıda olmalıdır: başlık, sabit giriş paragrafı, bölüm başlıkları, "-" ile başlayan ve "...malıdır / ...melidir" ile biten maddeler.
- İsteğe bağlı maddeler (Opsiyonel), tavsiye edilenler (Önerilen) ile bitirilmelidir.
- Proje türüne göre değişen maddeler "Ortak Yapılacaklar", "Bireysel Kullanıcı Sistemi İse", "Firma / Müşteri Bazlı Panel İse", "Yalnız Davetli Sistem İse" bölümlerine ayrılmalıdır.
- Hazır servis önerilebilen konularda "Önerilen Platformlar" bölümü bulunmalıdır.
- Kalın yazı, etiket ve iç içe madde kullanılmamalıdır.
- Yeni dosya README.md dizinine kısa açıklamasıyla eklenmelidir.
