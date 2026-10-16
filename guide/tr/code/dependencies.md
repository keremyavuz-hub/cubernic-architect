# Kütüphane Seçimi ve Kullanımı
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Önce Yerleşik Çözüm
- Bir ihtiyaç için önce dilin, çalışma ortamının veya çerçevenin kendi (native) özellikleri kullanılmalıdır.
- Yerleşik özelliklerle karşılanabilecek işler için kütüphane eklenmemelidir; örnekler: fetch (axios yerine), Intl (tarih / para biçimlendirme kütüphaneleri yerine), crypto (parola özeti ve rastgele kod için), URL ve URLSearchParams, structuredClone, Array ve Object metotları, CSS animasyonları, tarayıcının dialog ve form özellikleri.
- Birkaç satırla yazılabilecek küçük yardımcılar için kütüphane eklenmemelidir.

## Kütüphane Gerekiyorsa
- Yerleşik çözüm yetersizse kütüphane seçilmeden önce geliştiriciye gerekçesiyle bildirilmeli ve onay alınmalıdır.
- Seçimde şu ölçütler kontrol edilmelidir: bakımı sürüyor mu (son sürüm tarihi), indirme sayısı ve topluluk, açık güvenlik bildirimleri, lisans (MIT, Apache gibi serbest lisanslar tercih edilmeli; GPL / AGPL ticari projede riskli), paket boyutu ve ağaç sallama (tree-shaking) desteği, bağımlılık sayısı, TypeScript desteği, ücretli olup olmadığı.
- Zararsız, küçük, bağımlılığı az ve ücretsiz kütüphaneler tercih edilmelidir.
- Aynı işi yapan birden fazla kütüphane projede bulunmamalıdır.
- Kütüphanenin yalnızca gereken kısmı içe aktarılmalıdır.
- Paket adı doğru yazılmalı, taklit (typosquatting) paketlere karşı resmî kaynaktan kontrol edilmelidir.
- Seçilen kütüphane uygun değilse veya ileride sorun çıkarabilecekse alternatifleri artı ve eksileriyle önerilmelidir.

## Kullanım ve Bakım
- Kütüphaneler doğrudan her yerde kullanılmamalı, mümkünse projenin kendi ince adaptör modülünün arkasında tutulmalıdır; kütüphane değişince yalnızca adaptör değişmelidir.
- Sürümler kilit dosyasıyla sabitlenmeli, büyük sürüm güncellemeleri değişiklik notları okunarak ve testle yapılmalıdır.
- Bağımlılıklar düzenli olarak güvenlik taramasından geçirilmeli (npm audit) ve kullanılmayan kütüphaneler kaldırılmalıdır (ör. depcheck, knip).
- Kullanımdan kalkmış kütüphaneler ve API'ler için uyarılar takip edilmeli, geçiş planı yapılmalıdır.
- CDN'den yüklenen kütüphanelerde sabit sürüm kullanılmalıdır.
- Projede kullanılan her kütüphane kütüphane kayıt dosyasına yazılmalıdır (bkz. code/registry.md).
