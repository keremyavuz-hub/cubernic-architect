# Önbellek Stratejisi
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Ortak Yapılacaklar
- Önbelleğe alınacak her veri için nerede (tarayıcı, CDN, sunucu belleği, Redis, veritabanı), ne kadar süre ve nasıl geçersiz kılınacağı belirlenmelidir.
- Önbellek bir performans aracıdır; yanlış veri göstermek yavaş veri göstermekten daha kötüdür, geçersiz kılma kuralı olmayan önbellek eklenmemelidir.
- Kullanıcıya veya firmaya özel veriler paylaşılan önbelleğe (CDN, ortak sunucu önbelleği) konmamalıdır; aksi halde bir kullanıcının verisi diğerine görünebilir.
- Oturum gerektiren yanıtlarda Cache-Control: private veya no-store kullanılmalıdır.
- Değişmeyen statik dosyalar (adında hash olan) uzun süre ve immutable olarak önbelleğe alınmalıdır.
- Veri değiştiğinde ilgili önbellek anahtarları hemen temizlenmelidir (ör. Next.js revalidateTag / revalidatePath).
- Önbellek anahtarları firma / kullanıcı / dil gibi ayırt edici bilgileri içermelidir.
- Önbellek boşaldığında aynı anda gelen çok sayıda isteğin veritabanını yormaması için önlem alınmalıdır (tek isteğin yenilemesi, stale-while-revalidate).
- Önbellek isabet oranı ölçülmeli; işe yaramayan önbellek kaldırılmalıdır.
- Önce sorgu ve index iyileştirmesi denenmeli; önbellek yavaş sorguyu gizlemek için kullanılmamalıdır.
