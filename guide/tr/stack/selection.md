# Framework Seçimi
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Hangi Durumda Kullanılır
- Yeni bir projede framework henüz seçilmemişse uygulanmalıdır; framework zaten seçilmişse bu dosya atlanmalı, stack/framework-rules.md uygulanmalıdır.

## Sorulacaklar
- Geliştiricinin ve ekibin bildiği diller ve framework'ler sorulmalıdır; bilinen bir framework genelde en doğru seçimdir.
- Proje türü sorulmalıdır: içerik / tanıtım sitesi, panel, e-ticaret, API, gerçek zamanlı uygulama, mobil arka yüzü.
- SEO ihtiyacı, barındırma tercihi (kendi sunucu, serverless, kurumsal bulut) ve bütçe sorulmalıdır.
- Müşteri veya kurum tarafından zorunlu tutulan teknoloji olup olmadığı sorulmalıdır.
- Projenin ne kadar süre bakımının yapılacağı sorulmalıdır.

## Seçim Ölçütleri
- Framework olgun, aktif geliştirilen ve uzun süreli destek (LTS) sunan bir sürüme sahip olmalıdır.
- Topluluk, belge ve hazır paket desteği yeterli olmalıdır.
- Barındırma maliyeti ve kolaylığı proje bütçesine uygun olmalıdır.
- Projeyi ileride devralacak kişilerin bulunabilirliği dikkate alınmalıdır.
- Proje için gereğinden ağır bir yapı seçilmemelidir (ör. basit tanıtım sitesi için mikro servis mimarisi).

## Karar
- Geliştirici bir tercih belirtmezse yapay zeka gerekçesiyle en fazla iki seçenek önermeli, artı ve eksilerini kısaca söylemelidir.
- Karar ve gerekçesi proje kural dosyasına ve docs/KARARLAR.md gibi bir karar kaydına yazılmalıdır (bkz. code/registry.md).
- Seçilen framework için stack/ klasöründeki ilgili dosya uygulanmalıdır.
