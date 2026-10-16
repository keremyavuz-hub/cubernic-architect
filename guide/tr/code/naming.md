# Adlandırma Standartları
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Genel Kurallar
- Projenin adlandırma standardı proje başında belirlenmeli, belgelenmeli ve tüm kodda tutarlı uygulanmalıdır.
- Kod içi adlar (değişken, fonksiyon, dosya, tablo) tek bir dilde yazılmalıdır; önerilen dil İngilizcedir.
- Arayüzde görünen adresler (URL) ve metinler kullanıcının dilinde olabilir (ör. /giris, /basvuru); bu karar proje başında verilmelidir.
- Adlar ne işe yaradığını anlatmalı; kısaltma, tek harfli ad (döngü sayaçları dışında) ve anlamsız ad (data, temp, obj, x2) kullanılmamalıdır.
- Aynı kavram projenin her yerinde aynı adla anılmalıdır (ör. bir yerde firm, başka yerde company denmemelidir).
- Türkçe karakterler (ç, ğ, ı, ö, ş, ü) dosya, klasör, değişken ve veritabanı adlarında kullanılmamalıdır.

## Dosya ve Klasör
- Dosya ve klasör adları küçük harf ve tire ile yazılmalıdır (kebab-case): password-reset.js, domain-verify.js.
- Çerçevenin zorunlu kıldığı adlar korunmalıdır (ör. Next.js page.js, layout.js, route.js; [param] klasörleri).
- Bileşen dosyası projenin seçtiği tek kurala uymalıdır (ya kebab-case: apply-form.js ya da PascalCase: ApplyForm.jsx); iki kural karıştırılmamalıdır.
- Test dosyaları test ettikleri dosyanın adını taşımalıdır (ör. forms.test.js).
- Yalnızca bir sayfaya ait bileşenler o sayfanın _components klasöründe, ortak bileşenler components klasöründe tutulmalıdır.
- Migration dosyaları sıra numarası ve açıklayıcı adla adlandırılmalıdır (ör. 0007_password_resets.sql).

## Kod İçi Adlar
- Değişken ve fonksiyon adları camelCase olmalıdır: sendMail, verifyShop, firmId.
- Bileşen ve sınıf adları PascalCase olmalıdır: ApplyForm, PanelLayout.
- Sabitler UPPER_SNAKE_CASE olmalıdır: PASSWORD_MIN, RESET_MINUTES.
- Boolean değişkenler is, has, can, should ile başlamalıdır: isAdmin, hasPassword, canEdit.
- Fonksiyon adları fiille başlamalıdır: getSession, createInvite, validateShop.
- Olay işleyiciler on / handle önekini kullanmalıdır: onSubmit, handleVerify.
- Sunucu eylemleri Action sonekini taşımalıdır: loginAction, addShopAction.
- Ortam değişkenleri UPPER_SNAKE_CASE ve hizmet önekiyle yazılmalıdır: RESEND_API_KEY, TURNSTILE_SECRET_KEY.

## Veritabanı
- Tablo adları çoğul ve snake_case olmalıdır: users, firm_members, password_resets.
- Kolon adları snake_case olmalıdır: created_at, email_verified_at.
- Tarih / zaman kolonları _at, tarih kolonları _on, boolean kolonlar is_ / has_ ile adlandırılmalıdır: verified_at, is_platform_admin.
- Yabancı anahtarlar tekil tablo adı ve _id ile adlandırılmalıdır: firm_id, user_id.
- Dizin ve kısıt adları tablo ve amacı belirtmelidir: applications_pending_email_uq, sessions_user_idx.

## Olay, Kayıt ve Etiket Adları
- Etkinlik kaydı ve olay adları alan.eylem biçiminde, küçük harf ve geçmiş zamanla yazılmalıdır: login.failed, shop.verified, application.approved.
- E-posta etiketleri, analiz olayları ve log türleri de aynı adlandırma düzenini izlemelidir.
