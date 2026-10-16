# Django
## Projede böyle bir yapı kullanılacaksa dikkate alınmalıdır.
Olması gereken ve sürdürülebilir mimari için klavuz niteliği taşımaktadır. Burada yazılanlar maksimum düzeyde, projeye uygunluğu ve ihtiyaçları dikkate alınarak, projenin amacına uygunsa kullanılmalı, dikkate alınmalı ve gerektiğinde önerilmeli. Gözden kaçırılmamalıdır. Bir yapay zeka bu maddeleri okuduğunda burada yazılı maddeleri her zaman gözden geçirmelidir. Projeyi geliştiren kişinin izni dahilinde bazı maddeler es geçilebilir ancak bunun kararını geliştirici vermelidir.

## Hangi Durumda Kullanılır
- Projede requirements.txt / pyproject.toml içinde Django varsa uygulanmalıdır.
- Bu dosya Django 5.x için yazılmıştır; LTS sürümleri (ör. 5.2) tercih edilmelidir.
- Dil kuralları için stack/languages/python.md uygulanmalıdır.

## Yapı
- Proje uygulamalara (app) alan bazında bölünmelidir; her app kendi modelleri, görünümleri ve testleriyle bağımsız olmalıdır.
- İş mantığı view'da değil, servis fonksiyonlarında veya model yöneticilerinde (manager) tutulmalıdır.
- Ayarlar ortamlara göre ayrılmalı (base / dev / prod) ve gizli değerler ortam değişkeninden okunmalıdır (django-environ).
- API için Django REST Framework veya Django Ninja kullanılmalıdır.

## Güvenlik
- DEBUG canlıda False olmalıdır.
- SECRET_KEY gizli ve güçlü olmalıdır.
- ALLOWED_HOSTS ve CSRF_TRUSTED_ORIGINS açıkça tanımlanmalıdır.
- python manage.py check --deploy canlıya çıkmadan önce çalıştırılmalı ve uyarılar giderilmelidir.
- SECURE_SSL_REDIRECT, SECURE_HSTS_SECONDS, SESSION_COOKIE_SECURE, CSRF_COOKIE_SECURE ayarları canlıda açık olmalıdır.
- Proxy arkasında SECURE_PROXY_SSL_HEADER doğru ayarlanmalıdır.
- CSRF middleware kapatılmamalı; csrf_exempt yalnız imzası doğrulanan webhook'larda kullanılmalıdır.
- ORM kullanılmalı; raw() ve extra() içinde kullanıcı girdisi parametreyle verilmelidir.
- Şablonlarda |safe ve mark_safe yalnız temizlenmiş içerikle kullanılmalıdır.
- ModelForm / serializer'larda fields açıkça listelenmeli; "__all__" kullanılmamalıdır (mass assignment).
- Yetki kontrolü her view'da (permission_classes, LoginRequiredMixin, has_object_permission) yapılmalı; sorgular kullanıcının / firmanın kayıtlarıyla süzülmelidir.
- Parola doğrulayıcıları (AUTH_PASSWORD_VALIDATORS) açık olmalıdır.
- Admin paneli varsayılan /admin/ dışında bir yola alınmalı, ek koruma (2FA, IP kısıtı) değerlendirilmelidir.
- Hız sınırlama DRF throttling veya django-ratelimit ile yapılmalıdır.
- Kullanıcı yüklemeleri MEDIA_ROOT altında, çalıştırılamaz şekilde sunulmalıdır (bkz. files/uploads.md).

## Performans
- N+1 sorguları select_related ve prefetch_related ile önlenmelidir.
- Yalnız gerekli kolonlar only / values ile çekilmelidir.
- Büyük sorgular iterator() ile işlenmelidir.
- Sayaç güncellemelerinde F() ifadeleri kullanılmalıdır (yarış durumu).
- Önbellek Redis ile yapılmalı; şablon parçaları ve sorgu sonuçları uygun yerde önbelleğe alınmalıdır.
- Kalıcı veritabanı bağlantıları (CONN_MAX_AGE) veya bağlantı havuzu (Django 5.1+ psycopg pool) kullanılmalıdır.
- Statik dosyalar collectstatic sonrası WhiteNoise veya CDN ile sunulmalıdır.
- Geliştirmede django-debug-toolbar ile sorgu sayısı izlenmelidir.

## Veri
- Migration'lar makemigrations ile üretilip gözden geçirilmeli ve git'e eklenmelidir.
- Veri kaybettiren migration'lar onaysız uygulanmamalıdır; flush ve sqlflush komutları yapay zeka tarafından çalıştırılmamalıdır (bkz. ai/destructive-actions.md).
- Birden fazla yazma transaction.atomic içinde yapılmalı; yan etkiler transaction.on_commit ile tamamlandıktan sonra tetiklenmelidir.

## Kuyruk
- Arka plan işleri Celery (Redis / RabbitMQ) veya Django 6 Tasks / Dramatiq ile yapılmalıdır (bkz. operations/queues.md).
- Celery işleri acks_late, görev zaman aşımı ve yeniden deneme ayarlarıyla tanımlanmalıdır.
- Zamanlanmış işler Celery Beat ile tek örnekte çalışmalıdır.

## Test
- pytest-django ile testler yazılmalı; factory_boy test verisi için kullanılmalıdır.
- Yetki ve firma izolasyonu testleri bulunmalıdır.

## Deploy
- Gunicorn / Uvicorn ile WSGI / ASGI olarak, ters vekil arkasında çalıştırılmalıdır.
- Deploy sırası: bağımlılık kurulumu, collectstatic, migrate, uygulama ve worker'ların yeniden başlatılması.

## Sık Yapılan Hatalar
- DEBUG=True ile yayına çıkmak.
- fields = "__all__" kullanmak.
- Şablonda |safe ile kullanıcı içeriği basmak.
- Döngüde ilişki çağırarak N+1 üretmek.
- check --deploy çalıştırmamak.

## Önerilen Paketler
- Django REST Framework, Django Ninja: API.
- django-environ: ortam değişkenleri.
- django-allauth: kimlik doğrulama ve sosyal giriş.
- Celery, django-celery-beat: kuyruk ve zamanlama.
- WhiteNoise: statik dosya.
- django-axes: giriş denemesi sınırlama.
- pytest-django, factory_boy.
