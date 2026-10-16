# PHP
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Hangi Durumda Kullanılır
- Projede PHP kullanılıyorsa uygulanmalıdır.
- Desteklenen bir PHP sürümü (güvenlik desteği süren 8.x) kullanılmalıdır.

## Kurallar
- Her dosyada declare(strict_types=1) kullanılmalıdır.
- Parametre, dönüş ve özellik tipleri tanımlanmalıdır; mixed gerekmedikçe kullanılmamalıdır.
- readonly özellikler, enum'lar ve constructor property promotion uygun yerlerde kullanılmalıdır.
- PHPStan / Larastan yüksek seviyede (en az 6, hedef max) çalışmalıdır.
- Kod stili PSR-12 / PER ile uyumlu olmalı; Pint veya PHP-CS-Fixer kullanılmalıdır.
- Autoload PSR-4 ile yapılmalıdır.
- Kullanıcı girdisi unserialize ile açılmamalıdır (nesne enjeksiyonu); JSON kullanılmalıdır.
- eval, exec, shell_exec, system kullanıcı girdisiyle kullanılmamalıdır.
- Parola için password_hash / password_verify kullanılmalıdır.
- Rastgele değer için random_bytes / random_int kullanılmalıdır; rand / mt_rand güvenlik için kullanılmamalıdır.
- Karşılaştırmada === kullanılmalı; gizli değer karşılaştırmasında hash_equals kullanılmalıdır.
- Canlıda display_errors kapalı, log_errors açık olmalı; expose_php kapatılmalıdır.
- OPcache canlıda açık olmalıdır.
- composer.lock git'te tutulmalı, canlıda composer install --no-dev kullanılmalıdır.
- composer audit düzenli çalıştırılmalıdır.
