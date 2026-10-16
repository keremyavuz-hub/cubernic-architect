# Güvenlik Standartları ve Denetim
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Talimat
- Geliştirilen her sistem aşağıdaki güvenlik standartlarına uymalı ve yapay zeka bu uyumu düzenli olarak denetlemelidir.
- Yapay zeka güvenlik denetimini yalnızca istendiğinde değil, bu dosyada belirtilen zamanlarda kendiliğinden önermeli ve geliştiricinin onayıyla çalıştırmalıdır.
- Denetim sonuçları kayıt altına alınmalı, bulunan açıklar önceliklendirilip kapatılmalı ve kapatıldığı tekrar doğrulanmalıdır.
- Denetim, ai/security-review.md dosyasındaki her işten sonraki güvenlik kontrolünün yerine geçmez; ikisi birlikte uygulanmalıdır.

## Uyulacak Güvenlik Standartları
- Web uygulamalarında OWASP Top 10 risklerine karşı önlem alınmalıdır: https://owasp.org/Top10/
- Uygulama doğrulama düzeyi olarak OWASP ASVS kullanılmalıdır; kişisel veri işleyen ve oturum açılan sistemlerde en az Seviye 2 hedeflenmelidir: https://owasp.org/www-project-application-security-verification-standard/
- API sunan sistemlerde OWASP API Security Top 10 dikkate alınmalıdır: https://owasp.org/API-Security/
- Yapay zeka / LLM özelliği olan sistemlerde OWASP Top 10 for LLM Applications dikkate alınmalıdır: https://genai.owasp.org/
- Kod düzeyindeki zayıflıklar için CWE Top 25 referans alınmalıdır: https://cwe.mitre.org/top25/
- Bu kılavuzun security/ ve ai/ klasörlerindeki kurallar projeye özgü standart olarak uygulanmalıdır.

## Cloudflare Security Audit Skill
- Kod tabanı güvenlik denetimi için Cloudflare'in açık kaynak security-audit skill'i kullanılmalıdır: https://github.com/cloudflare/security-audit-skill (MIT lisansı).
- Skill kod tabanını keşif, kapsam listesi (coverage ledger), açık avı, her bulgunun bağımsız bir ajan tarafından çürütülmeye çalışılması, şemaya göre doğrulanmış bulgu kaydı ve rapor aşamalarıyla denetler.
- Kurulum Skills CLI ile yapılmalıdır: npx skills add https://github.com/cloudflare/security-audit-skill --skill security-audit (tüm projeler için --global eklenir).
- Kurulumdan önce üçüncü taraf kod olduğu için SKILL.md ve yardımcı betikler okunmalı, kurulan sürüm (commit) kayda geçirilmelidir.
- Skill iki modda çalışır: rehber modu (odaklı soru ve inceleme, dosya üretmez) ve tam denetim modu (altı aşama, rapor dosyaları üretir).
- Tam denetim modu yalnızca geliştirici açıkça "güvenlik denetimi yap" dediğinde çalıştırılmalıdır.
- Tam denetim çok sayıda paralel alt ajan çalıştırır ve ciddi model maliyeti oluşturur; yapay zeka çalıştırmadan önce bunu geliştiriciye söylemeli ve profil seçtirmelidir: quick (küçük proje / hızlı ilk bakış), standard (varsayılan), deep (yüksek riskli veya büyük proje).
- Belirli bir değişikliği denetlemek için kapsamlı (scoped) çalıştırma kullanılmalıdır: belirli klasörler veya iki commit arasındaki fark.
- Skill hedef kodu yalnızca ağdan yalıtılmış, kaynakları sınırlı bir sanal ortamda (sandbox) çalıştırır; sanal ortam yoksa kod çalıştırmaz ve ilgili bulguları "needs_validation" olarak bırakır. Bu durum geliştiriciye açıklanmalıdır.
- Denetim çıktıları varsayılan olarak proje dışında saklanır (~/security-audit-skill/<proje>/run-<N>); proje içine yazılacaksa klasör .gitignore içinde olmalıdır. Raporlar açık bilgisi içerdiği için git'e eklenmemeli ve paylaşılmamalıdır.
- Denetim canlı sistemlere, dış servislere veya gerçek kullanıcı verisine karşı yapılmamalıdır.
- Aynı projede tekrarlanan çalıştırmalar birbirini tamamlar; tek çalıştırmanın tüm açıkları bulduğu varsayılmamalıdır.
- Skill kurulu değilse yapay zeka kurulumu önermeli; geliştirici istemezse aşağıdaki diğer araçlarla ve bu kılavuzdaki kontrol listeleriyle denetim yapmalıdır.

## Ne Zaman Denetim Yapılmalı
- Canlıya ilk çıkıştan önce tam denetim (en az standard profil) yapılmalıdır.
- Kimlik doğrulama, yetki, oturum, ödeme, dosya yükleme, firma izolasyonu veya dış adrese istek atan bir özellik eklendiğinde ya da değiştirildiğinde ilgili kısım için kapsamlı denetim yapılmalıdır.
- Her büyük sürümden önce son sürümden bu yana olan değişiklikler için kapsamlı denetim yapılmalıdır.
- Belirli aralıklarla (ör. ayda bir veya üç ayda bir) quick profilde genel denetim yapılmalıdır. (Önerilen)
- Yeni bir bağımlılık, entegrasyon veya yapay zeka özelliği eklendiğinde ilgili alan rehber moduyla incelenmelidir.
- Bir güvenlik olayı veya şüphesi olduğunda ilgili alan derhal denetlenmelidir.

## Sonuçların İşlenmesi
- Skill bulguları üç sınıfta verir: confirmed (kanıtlanmış), needs_validation (doğrulanması gereken, eksik bilgisiyle), rejected (çürütülmüş).
- Confirmed bulgular önem derecesine göre önceliklendirilmeli; kritik ve yüksek bulgular canlıya çıkışı durdurmalıdır.
- Her bulgu için düzeltme yapılmalı, düzeltmeyi doğrulayan bir test eklenmeli ve ilgili alan yeniden denetlenmelidir.
- Needs_validation bulguları için eksik bilginin nasıl doğrulanacağı planlanmalı ve geliştiriciye sorulmalıdır.
- Bulgu özetleri (açık ayrıntısı olmadan) sistem belgesindeki yapılacaklar listesine, kapatılanlar çalışma günlüğüne yazılmalıdır.
- Bulunan açık türü bu kılavuzda kapsanmıyorsa ilgili güvenlik dosyasına yeni kural olarak eklenmelidir.
- Savunma katmanı eksikliği (bir katman saldırıyı zaten durduruyorsa diğerinin olmaması) açık değil iyileştirme notu olarak ele alınmalıdır.

## Tamamlayıcı Araçlar
- Bağımlılık açıkları için npm audit, GitHub Dependabot veya Renovate kullanılmalıdır.
- Gizli anahtar sızıntısı için gitleaks veya trufflehog ile depo ve git geçmişi taranmalıdır.
- Statik kod analizi için Semgrep veya GitHub CodeQL önerilebilir.
- Çalışan uygulamayı dışarıdan test etmek için yalnızca yerel veya test ortamında OWASP ZAP önerilebilir; canlı sisteme karşı izinsiz tarama yapılmamalıdır.
- Güvenlik başlıkları ve TLS ayarları için securityheaders.com ve SSL Labs ile canlı adres kontrol edilmelidir.
- Bu araçların ücretli planları varsa geliştiriciye belirtilmelidir.
