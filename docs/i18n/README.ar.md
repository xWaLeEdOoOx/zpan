<p align="center">
  <img src="../../public/logo.png" alt="شعار ZPan" width="128" height="128" />
</p>

<h1 align="center">ZPan</h1>

<p align="center" dir="rtl">
  <strong>استضافة ملفات مفتوحة المصدر لمخزنك المتوافق مع S3.</strong>
</p>

<p align="center" dir="rtl">
  انشره على Cloudflare Workers أو Docker، وارفع الملفات مباشرة إلى مخزن الكائنات.
</p>

<p align="center">
  <a href="https://github.com/saltbo/zpan/actions/workflows/ci.yml"><img src="https://github.com/saltbo/zpan/actions/workflows/ci.yml/badge.svg" alt="CI" /></a>
  <a href="https://codecov.io/gh/saltbo/zpan"><img src="https://codecov.io/gh/saltbo/zpan/graph/badge.svg" alt="codecov" /></a>
  <a href="https://github.com/saltbo/zpan/actions/workflows/release.yml"><img src="https://github.com/saltbo/zpan/actions/workflows/release.yml/badge.svg" alt="Release" /></a>
  <a href="https://github.com/saltbo/zpan/releases/latest"><img src="https://img.shields.io/github/v/release/saltbo/zpan" alt="GitHub Release" /></a>
  <a href="https://ghcr.io/saltbo/zpan"><img src="https://img.shields.io/badge/ghcr.io-saltbo%2Fzpan-blue" alt="Docker Image" /></a>
  <a href="https://github.com/saltbo/zpan/blob/main/LICENSE"><img src="https://img.shields.io/github/license/saltbo/zpan.svg" alt="License" /></a>
</p>

<p align="center">
  <a href="../../README.md">English</a> ·
  <a href="README.zh-CN.md">简体中文</a> ·
  <a href="README.ja.md">日本語</a> ·
  <a href="README.ko.md">한국어</a> ·
  <a href="README.ru.md">Русский</a> ·
  <a href="README.es.md">Español</a> ·
  <a href="README.pt-BR.md">Português (BR)</a> ·
  <strong>العربية</strong>
</p>

<p dir="rtl">
<strong>عن هذا الفرع:</strong> نحن من محبي <a href="https://github.com/saltbo/zpan">ZPan</a>،
لهذا نحتفظ بهذا الفرع ليكون قرصنا اليومي: يتتبّع <code>main</code> الأصلية ويضيف ترجمة عربية
كاملة للتطبيق ولوحة الإدارة، بالتخطيط نفسه كما في الأصل. كل ما يقدمه ZPan موجود هنا دون تغيير.
</p>

<p dir="rtl">
🎉 <strong>وصل ZPan v2.</strong> احتفالًا بذلك نهدي ZPan Pro بثلاث طرق لأوائل المعجبين
والمساهمين والنجوم الجدد. انظر <a href="../v2-launch-offers.md"><strong>عروض إطلاق v2</strong></a>.
</p>

<h2 dir="rtl">ما هو ZPan؟</h2>

<p dir="rtl">
ZPan منصة خفيفة لاستضافة الملفات مبنية فوق مخازن متوافقة مع S3. تُرفع الملفات من العميل مباشرة
إلى S3 عبر روابط موقّعة، متجاوزة سعة الخادم تمامًا. الخادم هو طبقة التحكم: المصادقة والبيانات
الوصفية والمشاركة والحصص والفرق وWebDAV وتكاملات الأدوات وعمليات الإدارة.
</p>

<p dir="rtl">
حدود المنتج مقصودة: ZPan قرص ويب مبني خصيصًا فوق S3، وليس غلافًا لكل أقراص التخزين الاستهلاكية
ولا حزمة كاملة للتعاون المكتبي. أنت توفر دلوًا متوافقًا مع S3، ويمنحه ZPan واجهة ويب نظيفة
ومشاركة عامة وواجهات برمجة لاستضافة الصور، وخيارات نشر لا تتطلب VPS ولا NAS.
</p>

<p dir="rtl"><strong>السيناريوهات الأساسية:</strong></p>

- <strong dir="rtl">قرص S3 على الويب</strong> — أدر الملفات والمجلدات والمعاينات وسلة المهملات والحصص ومساحات عمل الفرق فوق مخزن الكائنات الخاص بك
- <strong dir="rtl">استضافة الصور</strong> — ارفع عبر PicGo أو PicList أو uPic أو ShareX أو Flameshot أو API لتحصل فورًا على URL ثابت
- <strong dir="rtl">مشاركة الملفات</strong> — انشر روابط مشاركة محمية بكلمة مرور وبمدة صلاحية وحدّ لعدد التحميلات، مع روابط مباشرة ونقل إلى القرص
- <strong dir="rtl">صفحة شخصية</strong> — صفحة عامة لكل مستخدم على <code>/u/username</code> تعرض الملفات المشاركة عامةً وتصفّحًا بأسلوب المجلدات
- <strong dir="rtl">وصول خارجي</strong> — اركب الملفات عبر WebDAV وشغّل عمال تنزيل لسير عمل التنزيل من بعيد

<h2 dir="rtl">لماذا ZPan؟</h2>

<p dir="rtl">
<strong>S3 فقط، وهذا خيار تصميم.</strong> لا يجاري ZPan كل مزودي الأقراص الشبكية ولا يبني طبقة
تداخل للأقراص. عقد التخزين يبقى بسيطًا ومتينًا: دلاء متوافقة مع S3 مثل Cloudflare R2 وAWS S3
وBackblaze B2 وMinIO وRustFS وTigris وغيرها من الخدمات المتوافقة مع S3.
</p>

<p dir="rtl">
<strong>Cloudflare Workers أولًا.</strong> بُني ZPan حول Cloudflare Workers وD1 وHono وواجهات
الويب القياسية، مع Docker وبقية البيئات كأهداف نشر إضافية. يمكنك تشغيل طبقة تحكم حقيقية لاستضافة
الملفات دون امتلاك VPS، ودون إبقاء NAS متواصلًا، ودون تمرير التحميلات عبر خادم طويل التشغيل.
</p>

<p dir="rtl">
<strong>مسار نقل مباشر.</strong> تستخدم التحميلات والتنزيلات روابط مخزن الكائنات الموقّعة كلما
أمكن. ذلك يبقي سعة الخادم منخفضة، ويتجنب اختناق النقل المركزي، ويترك لمخزن الكائنات العمل الشاق.
</p>

<p dir="rtl">
<strong>سير عمل عملي للملفات.</strong> يتضمن ZPan مدير ملفات ويب ومشاركة عامة وإعداد استضافة
الصور ومفاتيح API ووصول WebDAV والفرق والحصص ومهام التنزيل من بعيد ومعاينات الملفات وأدوات
الإدارة، دون أن يتحول إلى منصة تجميع مزودين.
</p>

<p dir="rtl">
<strong>عمال تنزيل قابلون للنشر بشكل مستقل.</strong> لا يجب أن يعمل التنزيل من بعيد داخل النسخة
الرئيسية من ZPan. يمكنك نشر عامل التنزيل مع ZPan لإعداد بسيط، أو تشغيله منفصلًا في بيئة وصول
شبكة أفضل وقيود أقل على المواقع المصدر، ثم يستورد ZPan الملفات المكتملة إلى مخزن الكائنات.
</p>

<h2 dir="rtl">حدود المنتج</h2>

<p dir="rtl">ZPan مناسب عندما تريد:</p>

- <span dir="rtl">قرص ويب مخصص فوق S3، لا حديقة مزودي تخزين</span>
- <span dir="rtl">مضيف صور ذاتي الاستضافة وتطبيق مشاركة ملفات يدعمهما دلوّك الخاص</span>
- <span dir="rtl">نشرًا أصيلًا على Cloudflare دون صيانة VPS أو NAS</span>
- <span dir="rtl">نقلًا من المتصفح إلى S3، لا وكيل ملفات عبر خادم التطبيق</span>
- <span dir="rtl">تكاملات أدوات لالتقاط الشاشة والنشر وWebDAV والتنزيل من بعيد وسير عمل مدفوعة بـ API</span>

<p dir="rtl">ZPan لا يحاول أن يكون:</p>

- <span dir="rtl">حزمة تحرير تعاوني للمستندات في الوقت الحقيقي مثل Nextcloud Office</span>
- <span dir="rtl">مجمّع أقراص عام مثل AList</span>
- <span dir="rtl">متصفح مجلدات خادم محلي مثل File Browser</span>

<h2 dir="rtl">كيف يقارن ZPan</h2>

<p dir="rtl">
تبدأ معظم مشاريع الملفات ذاتية الاستضافة من ملفات الخادم أو المزامنة على سطح المكتب أو التعاون
أو تجميع عدد كبير من المزودين. يبدأ ZPan من مخازن متوافقة مع S3 ومن طبقة تحكم صديقة لـ
Cloudflare Workers.
</p>

| القدرة | **ZPan** | [Cloudreve](https://docs.cloudreve.org/en/) | [AList](https://alist-repo.github.io/docs/guide/drivers/) | [Nextcloud](https://nextcloud.com/files/) | [Seafile](https://www.seafile.com/en/features/) | [File Browser](https://github.com/filebrowser/filebrowser) |
|------------|----------|------------|--------|-----------|---------|--------------|
| تركيز المنتج على مخزن خلفي S3 | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| مخزن خلفي متوافق مع S3 | ✅ | ✅ | ✅ | ✅ | ⚠️ | ❌ |
| مسار مباشر من المتصفح إلى مخزن الكائنات | ✅ | ⚠️ | ⚠️ | ❌ | ❌ | ❌ |
| نشر على Cloudflare Workers | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| لا يحتاج VPS/NAS | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| سير عمل استضافة الصور PicGo/ShareX | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| صفحة ملفات عامة لكل مستخدم | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ |
| سير عمل التنزيل من بعيد | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| عقدة تنزيل قابلة للنشر بشكل مستقل | ✅ | ✅ | ⚠️ | ❌ | ❌ | ❌ |
| تجميع أقراص شبكية متعددة | ❌ | ❌ | ✅ | ⚠️ | ❌ | ❌ |
| مجلد الخادم المحلي جذرًا رئيسيًا للملفات | ❌ | ⚠️ | ⚠️ | ⚠️ | ❌ | ✅ |
| تحرير تعاوني للمستندات في الوقت الحقيقي | ❌ | ❌ | ❌ | ✅ | ⚠️ | ❌ |
| عملاء مزامنة مخصصون | قيد التخطيط | ❌ | ❌ | ✅ | ✅ | ❌ |
| نموذج الفرق/مساحات العمل | ✅ | ⚠️ | ❌ | ✅ | ✅ | ❌ |
| الوصول عبر WebDAV | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| روابط المشاركة | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| النشر عبر Docker | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

<p dir="rtl">
المفتاح: ✅ قدرة أساسية أو من الدرجة الأولى؛ ⚠️ جزئية أو تعتمد على النسخة أو ليست محور
المنتج؛ ❌ ليست قدرة أساسية.
</p>

<h2 dir="rtl">النشر</h2>

<h3 dir="rtl">Cloudflare Workers (موصى به)</h3>

<p dir="rtl">
انشر عبر GitHub Actions دون إدارة خوادم. الفئة المجانية تغطي الاستخدام الشخصي.
</p>

1. <strong dir="rtl">اصنع نسخة (Fork) من هذا المستودع</strong>
2. <span dir="rtl">في نسختك، اذهب إلى <strong>Settings → Secrets and variables → Actions</strong> وأضف:</span>
   - <code>CLOUDFLARE_ACCOUNT_ID</code> — تجده في الشريط الجانبي من [لوحة Cloudflare](https://dash.cloudflare.com/)
   - <code>CLOUDFLARE_API_TOKEN</code> — أنشئ واحدًا [هنا](https://dash.cloudflare.com/profile/api-tokens) بصلاحيات <strong>Workers Scripts:Edit</strong> و<strong>D1:Edit</strong> و<strong>Workers KV Storage:Edit</strong> و<strong>R2 Storage:Edit</strong> (صلاحيات R2 ضرورية لتجهيز دلو الصور الرمزية والشعار تلقائيًا)
3. <span dir="rtl">اذهب إلى تبويب <strong>Actions</strong>، واختر <strong>Deploy to Cloudflare Workers</strong>، وانقر <strong>Run workflow</strong></span>

<p dir="rtl">
بعد الإعداد الأول، يعمل سير العمل تلقائيًا كل مرة تزامن فيها نسختك مع أحدث إصدار.
</p>

<p dir="rtl">
رمز <code>CLOUDFLARE_API_TOKEN</code> هذا هو <strong>رمز النشر</strong> الذي يستخدمه
GitHub Actions/Wrangler فقط لنشر ZPan وإدارة موارده من D1/R2. وهو منفصل عن رمز النطاق الذي
تدخل لاحقًا في <strong>Admin Settings → Image custom domains</strong>؛ الرمز الأخير يتيح
لنسخة ZPan عاملة إدارة أسماء مضيفات Cloudflare for SaaS ولا يحتاج صلاحيات D1 أو R2. انظر
[نطاقات الصور المخصصة](../image-custom-domains.md).
</p>

<p dir="rtl">
نطاق WebDAV المخصص: فعّل WebDAV واضبط اسم المضيف الاختياري في إعدادات الإدارة، ثم موسّع رمز
API بصلاحيات <strong>Transform Rules:Edit</strong>. عند ترك اسم المضيف فارغًا، نطاق Worker
أساسي مثل <code>files.example.com</code> ينتج <code>dav.files.example.com</code>؛ سير النشر
يربط هذا الاسم المشتق ويتحقق منه تلقائيًا، ويدير إعادة كتابة المسار الجذري إلى <code>/dav</code>،
ويسجّل جاهزيته. يمكن لبيئات النشر الأخرى التحقق من DNS/الوكيل المضبوط يدويًا من
<strong>Admin Settings → WebDAV</strong>. حتى ينجح التحقق، يعلن ZPan عن نقطة
<code>/dav/</code> الأصلية. انظر [نطاق WebDAV المخصص](../webdav-custom-domain.md).
</p>

<h3 dir="rtl">AWS Lambda</h3>

<p dir="rtl">
انشر عبر GitHub Actions باستخدام SAM. يوفر Lambda Function URL اتصال HTTPS دون API Gateway.
</p>

1. <strong dir="rtl">اصنع نسخة (Fork) من هذا المستودع</strong>
2. <span dir="rtl">في نسختك، اذهب إلى <strong>Settings → Secrets and variables → Actions</strong> وأضف:</span>
   - <code>TURSO_DATABASE_URL</code> و<code>TURSO_AUTH_TOKEN</code> — من [Turso](https://turso.tech) (مجانًا، دون بطاقة ائتمان)
   - <code>AWS_ACCESS_KEY_ID</code> و<code>AWS_SECRET_ACCESS_KEY</code> و<code>AWS_REGION</code>
3. <span dir="rtl">اذهب إلى تبويب <strong>Actions</strong>، واختر <strong>Deploy to AWS Lambda</strong>، وانقر <strong>Run workflow</strong></span>

<p dir="rtl">
الشرح الكامل لإعداد SAM وصلاحيات IAM في [docs/deploy/aws-lambda.md](../deploy/aws-lambda.md).
</p>

<h3 dir="rtl">Docker</h3>

<p dir="rtl"><strong>بدء سريع</strong> — اسحب الصورة المبنية مسبقًا واجلب مخزن S3 الخاص بك:</p>

```bash
curl -O https://raw.githubusercontent.com/saltbo/zpan/main/deploy/docker-compose.yml
docker compose up -d
```

<p dir="rtl"><strong>مع RustFS</strong> (مخزن S3 ذاتي الاستضافة، دون اعتماديات خارجية):</p>

```bash
curl -O https://raw.githubusercontent.com/saltbo/zpan/main/deploy/docker-compose.rustfs.yml
docker compose -f docker-compose.rustfs.yml up -d
```

<p dir="rtl">بعد التشغيل:</p>

1. <span dir="rtl">افتح لوحة RustFS على <code>http://localhost:9001</code> (admin / admin123) وأنشئ دلوًا (مثل <code>zpan-bucket</code>)</span>
2. <span dir="rtl">افتح ZPan على <code>http://localhost:8222</code> وسجّل مستخدمًا (المستخدم الأول يحصل على دور الإدارة)</span>
3. <span dir="rtl">اذهب إلى <strong>Admin → Storage</strong> وأضف مخزن RustFS:</span>
   - <strong dir="rtl">Endpoint</strong>: <code>http://localhost:9000</code> (يجب الوصول منه من متصفحك، لا من اسم المضيف الداخلي في Docker)
   - <strong dir="rtl">Bucket</strong>: اسم الدلو الذي أنشأته في الخطوة 1
   - <strong dir="rtl">Region</strong>: <code>us-east-1</code>
   - <strong dir="rtl">Access Key / Secret Key</strong>: <code>admin</code> / <code>admin123</code>

> <strong dir="rtl">مهم:</strong> يجب الوصول إلى نقطة التخزين من <strong>متصفح العميل</strong>، لأن الملفات تُرفع مباشرة إلى S3 عبر روابط موقّعة. استخدم <code>http://localhost:9000</code> للتطوير المحلي، والرابط العام لخادمك للإنتاج.

<h2 dir="rtl">الوثائق</h2>

- <a href="../v2-launch-offers.md" dir="rtl">عروض إطلاق v2</a> — احصل على ZPan Pro مجانًا
- <a href="../../V2_ROADMAP.md" dir="rtl">خارطة الطريق</a>
- <a href="../../CONTRIBUTING.md" dir="rtl">دليل المساهمة</a>

<h2 dir="rtl">v1</h2>

<p dir="rtl">
تبحث عن ZPan v1 (نسخة Go)؟ انظر [فرع v1](https://github.com/saltbo/zpan/tree/v1).
</p>

<h2 dir="rtl">المساهمة</h2>

<p dir="rtl">
انظر <a href="../../CONTRIBUTING.md">CONTRIBUTING.md</a> للتفاصيل. شكرًا لكل من ساهم في ZPan!
</p>

<a href="https://github.com/saltbo/zpan/graphs/contributors"><img src="https://opencollective.com/zpan/contributors.svg?width=890" /></a>

<h2 dir="rtl">الرخصة</h2>

<p dir="rtl">
ZPan تحت رخصة GNU Affero General Public License v3.0. انظر ملف
<a href="../../LICENSE">LICENSE</a> للتفاصيل.
</p>
