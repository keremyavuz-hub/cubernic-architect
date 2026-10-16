# Yapay Zeka Geliştirme Ortamı Kurulumu
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Genel Kurallar
- Projede kullanılan yapay zeka araçları, eklentiler (plugin), skill'ler, MCP sunucuları ve hook'lar proje belgesinde kurulum talimatlarıyla birlikte listelenmelidir (ör. docs/GELISTIRME-ORTAMI.md).
- Her araç için şunlar yazılmalıdır: ne işe yaradığı, kurulum komutu, kurulumun doğrulanması, proje düzeyinde mi kullanıcı düzeyinde mi kurulduğu, sürümü, lisansı, dışarıya veri gönderip göndermediği.
- Projeye yeni katılan bir geliştirici veya yeni bir yapay zeka oturumu bu belgeyle aynı ortamı kurabilmelidir.
- Üçüncü taraf eklenti, skill ve MCP sunucuları kurulmadan önce kaynakları okunmalı, yayıncısı ve lisansı kontrol edilmeli, kurulan sürüm kayda geçirilmelidir; bunlar yapay zekaya komut çalıştırma ve dosya erişimi verdiği için tedarik zinciri riski taşır.
- Yapay zeka bir aracı kendi başına kurmamalı; kurulumu önermeli, gerekçesini ve maliyetini söylemeli, geliştiricinin onayıyla kurmalıdır.
- Kurulan araçların gizli anahtarları ortam değişkenlerinde tutulmalı, yapılandırma dosyalarına yazılıp git'e eklenmemelidir.

## Context Mode (Bağlam Koruma)
- Context Mode, yapay zekanın çalıştırdığı komutların, okuduğu dosyaların ve web sayfalarının büyük çıktılarını bağlama doldurmadan yalıtılmış bir ortamda işleyip yalnızca sonucu getiren bir eklentidir; uzun oturumlarda yapay zekanın hafızasının dolmasını ve kalitesinin düşmesini önler: https://github.com/mksglu/context-mode
- Claude Code'da eklenti mağazasından kurulmalıdır: önce /plugin marketplace add mksglu/context-mode, sonra /plugin install context-mode@context-mode komutu çalıştırılmalı ve Claude Code yeniden başlatılmalıdır (veya /reload-plugins).
- Kurulum için Claude Code sürümü 1.0.33 veya üzeri olmalıdır (claude --version).
- Kurulumdan sonra /context-mode:ctx-doctor komutuyla tüm kontrollerin geçtiği doğrulanmalıdır.
- Eklenti hook'ları otomatik kaydeder; yapay zeka okuma, arama, test, derleme, git geçmişi ve web isteklerini ctx_execute, ctx_execute_file, ctx_batch_execute, ctx_fetch_and_index ve ctx_search araçlarıyla yapmalıdır.
- Bash yalnızca küçük çıktılı işler için kullanılmalıdır: dosya taşıma / oluşturma (mkdir, mv, cp), git add / commit, echo.
- Düzenlenecek dosyalar normal okuma aracıyla okunmalı; context mode analiz içindir, düzenleme için değildir.
- Her oturum başında, kullanıcının ilk mesajına yanıt verilmeden önce context-mode skill'i yüklenmelidir.

## Otomatik Kurulum ve Her Oturumda Çalışma
- Projede zorunlu tutulan eklentiler (ör. Context Mode) proje düzeyindeki .claude/settings.json dosyasında tanımlanmalı ve bu dosya git'e eklenmelidir; böylece projeyi açan her geliştirici ve her yapay zeka oturumu aynı eklentiyi otomatik olarak kurmaya / etkinleştirmeye yönlendirilir.
- Eklenti mağazası extraKnownMarketplaces, eklentinin kendisi enabledPlugins anahtarıyla tanımlanmalıdır (ör. "extraKnownMarketplaces": { "context-mode": { "source": { "source": "github", "repo": "mksglu/context-mode" } } } ve "enabledPlugins": { "context-mode@context-mode": true }).
- Her oturumda çalışması gereken talimatlar proje düzeyinde bir SessionStart hook'u ile oturum başında yapay zekaya iletilmelidir (ör. "kullanıcının ilk mesajına yanıt vermeden önce context-mode skill'ini yükle").
- Aynı talimat proje kural dosyasına (CLAUDE.md / AGENTS.md) da yazılmalıdır; hook çalışmasa bile kural dosyası okunur.
- Eklenti kurulu değilse yapay zeka bunu fark etmeli ve geliştiriciye kurulum komutunu önermelidir; eklentiyi geliştiricinin onayı olmadan kendisi kurmamalıdır.
- Projeyi ilk kez açan geliştirici klasöre güven onayı (trust) verdiğinde eklenti kurulum önerisini kabul etmeli ve kurulumdan sonra /context-mode:ctx-doctor ile doğrulamalıdır.
- Kullanıcı düzeyindeki ayarlarda (~/.claude/settings.json) aynı eklenti zaten tanımlıysa proje ayarı çakışmaz; proje ayarı yeni geliştiriciler ve yeni bilgisayarlar için güvence olarak kalmalıdır.
- Zorunlu eklenti listesi ve kurulum adımları projenin geliştirme ortamı belgesinde (ör. docs/GELISTIRME-ORTAMI.md) de yazılmalıdır.
- Hook'ların desteklenmediği veya yalnızca araçların istendiği durumlarda MCP olarak kurulabilir: claude mcp add context-mode -- npx -y context-mode (bu durumda otomatik yönlendirme olmaz).
- Kullanım istatistikleri /context-mode:ctx-stats ile görülebilir; güncelleme /context-mode:ctx-upgrade ile yapılmalıdır.
- Lisansı Elastic License 2.0'dır (açık kaynak değil); dahili kullanımda sorun yoktur, ancak hizmet olarak başkalarına sunulamayacağı geliştiriciye belirtilmelidir.
- /context-mode:ctx-insight komutu barındırılan bir panele yönlendirir; dışarıya veri gönderen özellikler kullanılmadan önce hangi verinin gönderildiği kontrol edilmelidir.
- Dizine eklenen içerik kalıcı bir bilgi tabanında tutulur; gizli bilgi içeren dosyalar dizine eklenmemeli, gerekirse /context-mode:ctx-purge ile temizlenmelidir (bu işlem geri alınamaz, geliştirici onayıyla yapılmalıdır).

## Skill'ler
- Skill'ler yapay zekaya belirli bir iş için hazır talimat ve araç seti kazandırır (ör. güvenlik denetimi).
- Skill'ler Skills CLI ile kurulabilir: npx skills add <depo-adresi> --skill <skill-adı>; tüm projelerde kullanılacaksa --global eklenmelidir.
- Önerilen güvenlik denetim skill'i: Cloudflare security-audit (bkz. ai/security-audit.md).
- Proje düzeyinde kurulan skill'ler (.claude/skills/) git'e eklenebilir; kullanıcı düzeyinde kurulanlar her geliştiricinin bilgisayarında ayrıca kurulmalıdır.
- Kurulan skill'in SKILL.md dosyası ve çalıştırdığı betikler okunmalı; beklenmedik ağ erişimi, dosya silme veya gizli bilgi okuma içeriyorsa kurulmamalıdır.
- Projeye özgü tekrar eden işler (ör. sürüm çıkarma, veritabanı yedeği alma, denetim) için proje skill'i yazılabilir. (Opsiyonel)

## MCP Sunucuları
- MCP sunucuları yapay zekaya dış sistemlere (veritabanı, GitHub, tarayıcı, dokümantasyon) erişim verir; yalnızca güvenilir yayıncıların sunucuları kurulmalıdır.
- Her MCP sunucusuna en az yetki verilmelidir (ör. veritabanı için salt okunur kullanıcı, GitHub için yalnızca ilgili depoya erişen token).
- Canlı veritabanına veya canlı sistemlere yazma yetkisiyle bağlanan MCP sunucusu kurulmamalıdır.
- Proje düzeyindeki MCP yapılandırması (.mcp.json) git'e eklenebilir, ancak içinde gizli değer bulunmamalı; anahtarlar ortam değişkeninden okunmalıdır.
- Kullanılmayan MCP sunucuları kaldırılmalıdır; her sunucu yapay zekanın araç listesini büyütür.

## Proje Kural Dosyası
- Her projede yapay zeka için bir kural dosyası bulunmalıdır: Claude Code için CLAUDE.md, diğer araçlar için AGENTS.md, Cursor için .cursor/rules.
- Kural dosyasında şunlar yer almalıdır: projenin amacı ve türü, çalıştırma komutları (sunucuyu kim başlatır), portlar, veri kaynakları, güvenlik kuralları, silme yasakları (bkz. ai/destructive-actions.md), commit / push kuralı, tasarım kuralları ve bu kılavuza bağlantı.
- Kural dosyası kısa ve güncel tutulmalı; ayrıntılar kılavuz dosyalarına bağlantıyla verilmelidir.
- Kural dosyası proje değiştikçe güncellenmeli ve git'te tutulmalıdır.

## İzin Ayarları ve Hook'lar
- Yapay zeka aracının izin ayarlarında (Claude Code için .claude/settings.json) yıkıcı komutlar onay gerektirecek veya yasaklanacak şekilde ayarlanmalıdır (ör. rm -rf, DROP, TRUNCATE, git push --force, docker volume rm).
- Sık kullanılan ve güvenli komutlar (test, derleme, git status) onaysız çalışacak şekilde izin listesine eklenebilir. (Opsiyonel)
- Hook'lar yapay zekanın her araç kullanımında çalışan betiklerdir; üçüncü taraf hook'lar kurulmadan önce okunmalıdır.
- Proje hook'ları (ör. commit öncesi test, gizli anahtar taraması) git'te tutulmalı ve belgelenmelidir. (Önerilen)

## Hafıza ve Belgeler
- Yapay zekanın kalıcı hafızası (Claude Code memory) kişisel tercihleri ve çalışma kurallarını tutmak için kullanılmalı; proje bilgisi ise git'teki belgelerde (sistem belgesi, çalışma günlüğü, bu kılavuz) tutulmalıdır.
- Hafızadaki bir kural değiştiğinde (ör. bir aracın kullanılması / kullanılmaması) eski kural silinmeli veya güncellenmeli, çelişkili kural bırakılmamalıdır.

## Diğer Yapay Zeka Araçları
- Proje birden fazla yapay zeka aracıyla geliştiriliyorsa (Claude Code, Cursor, Codex, Gemini CLI) ortak kurallar AGENTS.md gibi araçtan bağımsız bir dosyada tutulmalı, araca özel dosyalar buna bağlantı vermelidir.
- Context Mode ve benzeri eklentilerin desteklediği diğer araçlar için kurulum talimatları eklentinin kendi belgesinden alınmalıdır.
