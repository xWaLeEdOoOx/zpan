<p align="center">
  <img src="../../public/logo.png" alt="شعار ZPan" width="128" height="128" />
</p>

<h1 align="center">ZPan</h1>

<p align="center" dir="rtl">
  <strong>منصة مفتوحة المصدر لاستضافة الملفات وإدارتها باستخدام خدمات التخزين المتوافقة مع S3.</strong>
</p>

<p align="center" dir="rtl">
  شغّلها على Cloudflare Workers أو Docker، وارفع الملفات مباشرة إلى تخزين الكائنات دون تمريرها عبر خادم التطبيق.
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
<strong>عن هذا المشروع:</strong> نحن من محبي مشروع
<a href="https://github.com/saltbo/zpan">ZPan</a>، وهذا المشروع هو نسختنا الخاصة التي
نستخدمها يوميًا. نتابع التطوير في المستودع الأصلي <code>main</code>، مع إضافة دعم كامل
للغة العربية في التطبيق ولوحة الإدارة، مع الحفاظ على تصميم الواجهة الأصلي ووظائف المشروع
دون تغيير.
</p>

<p dir="rtl">
🎉 أُطلق ZPan v2! واحتفالًا بالإصدار الجديد، هناك ثلاث فرص للحصول على ZPan Pro مجانًا،
تشمل أوائل المتابعين والمساهمين والمستخدمين الجدد. اطّلع على
<a href="../v2-launch-offers.md"><strong>عروض إطلاق الإصدار v2</strong></a>.
</p>

<h2 dir="rtl">ما هو ZPan؟</h2>

<p dir="rtl">
ZPan منصة خفيفة لاستضافة الملفات وإدارتها، تعتمد على خدمات التخزين المتوافقة مع S3.
</p>

<p dir="rtl">
تُنقل الملفات مباشرةً من المتصفح إلى مخزن S3 باستخدام روابط موقّعة مسبقًا (Presigned
URLs)، دون استهلاك نطاق نقل البيانات الخاص بخادم التطبيق. ويقتصر دور الخادم على إدارة
العمليات الأساسية، مثل المصادقة، والبيانات الوصفية، ومشاركة الملفات، والحصص التخزينية،
والفرق، وWebDAV، والتكامل مع الأدوات، ومهام الإدارة.
</p>

<p dir="rtl">
صُمم ZPan ليكون قرصًا سحابيًا عبر الويب يعتمد على S3، وليس مجرد واجهة تجمع خدمات التخزين
السحابي المختلفة، ولا حزمة متكاملة للتعاون والعمل المكتبي.
</p>

<p dir="rtl">
كل ما تحتاج إليه هو حاوية تخزين متوافقة مع S3، وسيتولى ZPan توفير واجهة ويب سهلة لإدارة
ملفاتك ومشاركتها علنًا، واستضافة الصور عبر واجهات API، مع خيارات تشغيل لا تتطلب امتلاك
خادم VPS أو جهاز NAS.
</p>

<h3 dir="rtl">أبرز الاستخدامات</h3>

- <strong dir="rtl">إدارة الملفات عبر الويب</strong> — إدارة الملفات والمجلدات، ومعاينة المحتوى، وسلة المحذوفات، والحصص التخزينية، ومساحات العمل المشتركة، اعتمادًا على مخزن الكائنات الخاص بك
- <strong dir="rtl">استضافة الصور</strong> — رفع الصور باستخدام PicGo أو PicList أو uPic أو ShareX أو Flameshot أو عبر API، والحصول على رابط ثابت للصورة مباشرةً
- <strong dir="rtl">مشاركة الملفات</strong> — إنشاء روابط مشاركة محمية بكلمة مرور، ومحددة بمدة صلاحية أو عدد مرات تنزيل، مع إمكانية توفير روابط مباشرة وحفظ الملفات في مساحة التخزين
- <strong dir="rtl">صفحة شخصية لكل مستخدم</strong> — توفير صفحة عامة لكل مستخدم على المسار <code>/u/username</code> لعرض ملفاته ومجلداته التي اختار مشاركتها
- <strong dir="rtl">الوصول الخارجي</strong> — تصفح الملفات وإدارتها عبر WebDAV، وتشغيل خدمات تنزيل مستقلة لتنفيذ مهام التنزيل من مصادر خارجية

<h2 dir="rtl">لماذا ZPan؟</h2>

<h3 dir="rtl">يعتمد على S3 فقط، وهذا قرار تصميمي</h3>

<p dir="rtl">
لا يحاول ZPan دعم جميع مزودي خدمات الأقراص السحابية أو إنشاء طبقات معقدة للتعامل معها.
فلسفة التخزين بسيطة وواضحة: استخدم حاوية تخزين متوافقة مع S3، مثل Cloudflare R2
وAWS S3 وBackblaze B2 وMinIO وRustFS وTigris، وغيرها من الخدمات المتوافقة مع S3.
</p>

<h3 dir="rtl">مصمم للعمل مع Cloudflare Workers</h3>

<p dir="rtl">
بُني ZPan بالاعتماد على Cloudflare Workers وD1 وHono وواجهات الويب القياسية، مع دعم
Docker وبيئات تشغيل أخرى كخيارات إضافية.
</p>

<p dir="rtl">
يمكنك تشغيل منصة متكاملة لإدارة واستضافة الملفات دون الحاجة إلى امتلاك خادم VPS أو إبقاء
جهاز NAS قيد التشغيل، ودون الحاجة إلى تمرير عمليات رفع الملفات عبر خادم يعمل باستمرار.
</p>

<h3 dir="rtl">نقل مباشر للملفات</h3>

<p dir="rtl">
تستخدم عمليات الرفع والتنزيل روابط موقّعة مسبقًا لمخزن الكائنات كلما أمكن ذلك. هذا يعني:
</p>

- <span dir="rtl">تقليل استهلاك نطاق نقل البيانات على خادم التطبيق</span>
- <span dir="rtl">تجنب اختناق عمليات نقل الملفات عند مرورها عبر خادم مركزي</span>
- <span dir="rtl">الاستفادة مباشرةً من قدرات خدمة التخزين في معالجة عمليات الرفع والتنزيل</span>

<h3 dir="rtl">أدوات متكاملة لإدارة الملفات</h3>

<p dir="rtl">
يوفر ZPan مجموعة عملية من الأدوات، تشمل مدير ملفات عبر الويب، ومشاركة الملفات العامة،
وإعدادات استضافة الصور، ومفاتيح API، والوصول عبر WebDAV، وإدارة الفرق والحصص التخزينية،
ومهام التنزيل من مصادر خارجية، ومعاينة الملفات، وأدوات التحكم والإدارة. كل ذلك دون تحويل
المشروع إلى منصة لتجميع مزودي خدمات التخزين.
</p>

<h3 dir="rtl">خدمات تنزيل مستقلة وقابلة للنشر</h3>

<p dir="rtl">
لا يشترط ZPan تشغيل خدمات التنزيل داخل نسخته الرئيسية. يمكنك تشغيل خدمة التنزيل مع ZPan
لتبسيط الإعداد، أو نشرها بشكل مستقل في بيئة تمتلك اتصالًا أفضل بالشبكة وقيودًا أقل على
الوصول إلى مواقع التنزيل. بعد اكتمال التنزيل، يتولى ZPan استيراد الملفات إلى مخزن الكائنات
الخاص بك.
</p>

<h2 dir="rtl">حدود المشروع ونطاقه</h2>

<p dir="rtl">يُعد ZPan خيارًا مناسبًا إذا كنت تبحث عن:</p>

- <span dir="rtl">قرص ملفات عبر الويب يعتمد على S3 بدلًا من منصة تجمع عشرات مزودي التخزين</span>
- <span dir="rtl">منصة لاستضافة الصور ومشاركة الملفات، تعمل على مخزن التخزين الخاص بك</span>
- <span dir="rtl">تشغيل يعتمد على خدمات Cloudflare دون الحاجة إلى صيانة VPS أو NAS</span>
- <span dir="rtl">نقل الملفات مباشرةً من المتصفح إلى S3 بدلًا من تمريرها عبر خادم التطبيق</span>
- <span dir="rtl">تكامل مع أدوات التقاط الشاشة والنشر وWebDAV والتنزيل الخارجي والعمليات المعتمدة على API</span>

<p dir="rtl"><strong>لكن ZPan ليس مصممًا ليكون:</strong></p>

- <span dir="rtl">منصة للتحرير التعاوني للمستندات في الوقت الفعلي، مثل Nextcloud Office</span>
- <span dir="rtl">منصة عامة لتجميع وإدارة خدمات الأقراص السحابية، مثل AList</span>
- <span dir="rtl">أداة لتصفح مجلدات الملفات المحلية الموجودة على الخادم، مثل File Browser</span>

<h2 dir="rtl">مقارنة ZPan مع المشاريع المشابهة</h2>

<p dir="rtl">
تعتمد معظم مشاريع إدارة الملفات ذاتية الاستضافة على أحد الأساليب التالية: إدارة ملفات
الخادم المحلي، أو مزامنة الملفات مع أجهزة المستخدمين، أو أدوات التعاون، أو تجميع عدد كبير
من مزودي التخزين. أما ZPan فينطلق من فكرة مختلفة: استخدام مخازن الكائنات المتوافقة مع
S3، مع طبقة تحكم مصممة للعمل بكفاءة مع Cloudflare Workers.
</p>

| الميزة | **ZPan** | [Cloudreve](https://docs.cloudreve.org/en/) | [AList](https://alist-repo.github.io/docs/guide/drivers/) | [Nextcloud](https://nextcloud.com/files/) | [Seafile](https://www.seafile.com/en/features/) | [File Browser](https://github.com/filebrowser/filebrowser) |
|------------|----------|------------|--------|-----------|---------|--------------|
| التركيز الأساسي على S3 | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| دعم التخزين المتوافق مع S3 | ✅ | ✅ | ✅ | ✅ | ⚠️ | ❌ |
| نقل مباشر من المتصفح إلى مخزن الكائنات | ✅ | ⚠️ | ⚠️ | ❌ | ❌ | ❌ |
| التشغيل على Cloudflare Workers | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| لا يتطلب VPS أو NAS | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| استضافة الصور عبر PicGo/ShareX | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| صفحة عامة لملفات كل مستخدم | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ |
| تنزيل الملفات من مصادر خارجية | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| إمكانية تشغيل خدمة التنزيل بشكل مستقل | ✅ | ✅ | ⚠️ | ❌ | ❌ | ❌ |
| تجميع عدة خدمات تخزين سحابي | ❌ | ❌ | ✅ | ⚠️ | ❌ | ❌ |
| استخدام مجلدات الخادم المحلية كمصدر أساسي للملفات | ❌ | ⚠️ | ⚠️ | ⚠️ | ❌ | ✅ |
| التحرير التعاوني للمستندات في الوقت الفعلي | ❌ | ❌ | ❌ | ✅ | ⚠️ | ❌ |
| تطبيقات مخصصة لمزامنة الملفات | قيد التخطيط | ❌ | ❌ | ✅ | ✅ | ❌ |
| إدارة الفرق ومساحات العمل | ✅ | ⚠️ | ❌ | ✅ | ✅ | ❌ |
| الوصول عبر WebDAV | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| مشاركة الملفات عبر الروابط | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| التشغيل باستخدام Docker | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

<p dir="rtl">
<strong>دليل الرموز:</strong> ✅ ميزة أساسية ومدعومة بشكل كامل؛ ⚠️ دعم جزئي، أو يعتمد
على إصدار معين، أو ليس من الوظائف الأساسية للمشروع؛ ❌ غير مدعومة كميزة أساسية.
</p>

<h2 dir="rtl">طرق التشغيل والنشر</h2>

<h3 dir="rtl">Cloudflare Workers (الخيار الموصى به)</h3>

<p dir="rtl">
يمكنك نشر ZPan باستخدام GitHub Actions دون الحاجة إلى إدارة أي خوادم. وتكفي الخطة المجانية
للاستخدام الشخصي.
</p>

1. <span dir="rtl">أنشئ نسخة Fork من هذا المستودع في حسابك على GitHub.</span>
2. <span dir="rtl">افتح المستودع الخاص بك، وانتقل إلى <code>Settings → Secrets and variables → Actions</code> ثم أضف المتغيرات التالية:</span>
   - <code>CLOUDFLARE_ACCOUNT_ID</code> — تجده في الشريط الجانبي داخل [لوحة تحكم Cloudflare](https://dash.cloudflare.com/).
   - <code>CLOUDFLARE_API_TOKEN</code> — أنشئ رمز API من [هنا](https://dash.cloudflare.com/profile/api-tokens)، مع الصلاحيات التالية: <strong>Workers Scripts:Edit</strong> و<strong>D1:Edit</strong> و<strong>Workers KV Storage:Edit</strong> و<strong>R2 Storage:Edit</strong>. صلاحيات R2 مطلوبة حتى يتمكن المشروع من إنشاء حاوية تخزين الصور الرمزية والشعارات تلقائيًا.
3. <span dir="rtl">انتقل إلى تبويب <code>Actions</code>، واختر <code>Deploy to Cloudflare Workers</code>، ثم اضغط <code>Run workflow</code>.</span>

<p dir="rtl">
بعد إتمام الإعداد الأول، ستعمل عملية النشر تلقائيًا في كل مرة تقوم فيها بمزامنة نسختك مع
أحدث إصدار.
</p>

<p dir="rtl">
<strong>ملاحظة مهمة حول رموز API:</strong> يُستخدم المتغير <code>CLOUDFLARE_API_TOKEN</code>
أعلاه حصريًا بواسطة GitHub Actions/Wrangler لنشر ZPan وإدارة موارده في D1 وR2. هذا الرمز
منفصل تمامًا عن رمز Cloudflare المرتبط بنطاق معين، والذي ستدخله لاحقًا من خلال
<code>Admin Settings → Image custom domains</code>. يتيح الرمز الثاني لنسخة ZPan العاملة
إدارة أسماء النطاقات على Cloudflare for SaaS، ولا يحتاج إلى صلاحيات D1 أو R2. راجع
[إعداد نطاقات الصور المخصصة](../image-custom-domains.md) لمزيد من التفاصيل.
</p>

<p dir="rtl">
<strong>إعداد نطاق مخصص لخدمة WebDAV:</strong> يمكنك تخصيص نطاق مستقل لخدمة WebDAV من
خلال تفعيل الخدمة وضبط اسم المضيف الاختياري في إعدادات الإدارة، ثم إضافة صلاحية
<strong>Transform Rules:Edit</strong> إلى رمز API. عند ترك اسم المضيف فارغًا، وإذا كان
النطاق الأساسي لـ Worker هو مثلًا <code>files.example.com</code>، فسيتم إنشاء نطاق WebDAV
تلقائيًا بالشكل <code>dav.files.example.com</code>. تتولى عملية النشر تلقائيًا ربط النطاق
الناتج والتحقق منه، وإعداد إعادة توجيه المسار الرئيسي إلى <code>/dav</code>، وتسجيل حالة
جاهزية النطاق. أما في بيئات النشر الأخرى، فيمكن التحقق من إعدادات DNS والوكيل العكسي
(Proxy) يدويًا من <code>Admin Settings → WebDAV</code>. وحتى اكتمال التحقق بنجاح، سيظل
ZPan يستخدم عنوان WebDAV الأصلي <code>/dav/</code>. راجع
[دليل إعداد نطاق WebDAV المخصص](../webdav-custom-domain.md).
</p>

<h3 dir="rtl">AWS Lambda</h3>

<p dir="rtl">
يمكنك نشر ZPan باستخدام GitHub Actions وSAM. توفر AWS Lambda رابط Function URL يدعم
HTTPS مباشرةً، دون الحاجة إلى إعداد API Gateway.
</p>

1. <span dir="rtl">أنشئ نسخة Fork من هذا المستودع.</span>
2. <span dir="rtl">انتقل إلى <code>Settings → Secrets and variables → Actions</code> وأضف المتغيرات التالية:</span>
   - <code>TURSO_DATABASE_URL</code> و<code>TURSO_AUTH_TOKEN</code> — يمكنك الحصول عليهما من [Turso](https://turso.tech/) مجانًا ودون الحاجة إلى بطاقة ائتمان.
   - <code>AWS_ACCESS_KEY_ID</code> و<code>AWS_SECRET_ACCESS_KEY</code> و<code>AWS_REGION</code>
3. <span dir="rtl">افتح تبويب <code>Actions</code>، واختر <code>Deploy to AWS Lambda</code>، ثم اضغط <code>Run workflow</code>.</span>

<p dir="rtl">
للحصول على تعليمات الإعداد الكاملة وصلاحيات IAM المطلوبة، راجع
[دليل نشر AWS Lambda](../deploy/aws-lambda.md).
</p>

<h3 dir="rtl">Docker</h3>

<p dir="rtl"><strong>البدء السريع:</strong> اسحب صورة Docker الجاهزة، واستخدم خدمة التخزين المتوافقة مع S3 الخاصة بك.</p>

```bash
curl -O https://raw.githubusercontent.com/saltbo/zpan/main/deploy/docker-compose.yml
docker compose up -d
```

<p dir="rtl"><strong>التشغيل باستخدام RustFS:</strong> إذا كنت تريد خدمة تخزين متوافقة مع S3 ومستضافة لديك، دون الاعتماد على خدمات خارجية، يمكنك تشغيل ZPan مع RustFS.</p>

```bash
curl -O https://raw.githubusercontent.com/saltbo/zpan/main/deploy/docker-compose.rustfs.yml
docker compose -f docker-compose.rustfs.yml up -d
```

<p dir="rtl"><strong>بعد تشغيل الخدمات:</strong></p>

1. <span dir="rtl">افتح لوحة RustFS من خلال <code>http://localhost:9001</code>، باستخدام بيانات الدخول الافتراضية: اسم المستخدم <code>admin</code> وكلمة المرور <code>admin123</code>، ثم أنشئ حاوية تخزين جديدة، مثل <code>zpan-bucket</code>.</span>
2. <span dir="rtl">افتح ZPan عبر <code>http://localhost:8222</code> وأنشئ حساب مستخدم جديد. سيحصل أول حساب يتم إنشاؤه تلقائيًا على صلاحيات المدير.</span>
3. <span dir="rtl">انتقل إلى <code>Admin → Storage</code> ثم أضف خدمة التخزين RustFS باستخدام البيانات التالية:</span>
   - <strong dir="rtl">Endpoint:</strong> <code>http://localhost:9000</code> — يجب أن يكون هذا العنوان قابلًا للوصول من المتصفح، وليس مجرد اسم المضيف الداخلي المستخدم بين حاويات Docker.
   - <strong dir="rtl">Bucket:</strong> اسم حاوية التخزين التي أنشأتها في الخطوة الأولى، مثل <code>zpan-bucket</code>.
   - <strong dir="rtl">Region:</strong> <code>us-east-1</code>
   - <strong dir="rtl">Access Key / Secret Key:</strong> <code>admin</code> / <code>admin123</code>

> <strong dir="rtl">تنبيه مهم:</strong> يجب أن يكون عنوان خدمة التخزين متاحًا مباشرةً من متصفح المستخدم، لأن الملفات تُرفع إلى S3 مباشرةً باستخدام روابط موقّعة مسبقًا، ولا تمر عبر خادم التطبيق. استخدم <code>http://localhost:9000</code> عند التطوير والتشغيل المحلي، أو عنوان الخادم العام عند النشر للاستخدام الفعلي.

<h2 dir="rtl">الوثائق والموارد</h2>

- <a href="../v2-launch-offers.md" dir="rtl">عروض إطلاق ZPan v2</a> — فرص الحصول على ZPan Pro مجانًا
- <a href="../../V2_ROADMAP.md" dir="rtl">خارطة الطريق</a>
- <a href="../../CONTRIBUTING.md" dir="rtl">دليل المساهمة</a>

<h2 dir="rtl">الإصدار v1</h2>

<p dir="rtl">
هل تبحث عن ZPan v1 المكتوب بلغة Go؟ يمكنك الاطلاع على
<a href="https://github.com/saltbo/zpan/tree/v1">فرع الإصدار v1</a>.
</p>

<h2 dir="rtl">المساهمة في المشروع</h2>

<p dir="rtl">
نرحب بجميع المساهمات التي تساعد على تطوير ZPan وتحسينه. للتعرف على آلية المساهمة
وإرشادات التطوير، راجع <a href="../../CONTRIBUTING.md">CONTRIBUTING.md</a>. شكرًا لكل
من ساهم في تطوير ZPan ودعم المشروع!
</p>

<a href="https://github.com/saltbo/zpan/graphs/contributors"><img src="https://opencollective.com/zpan/contributors.svg?width=890" alt="مساهمو ZPan" /></a>

<h2 dir="rtl">الترخيص</h2>

<p dir="rtl">
يخضع ZPan لترخيص <strong>GNU Affero General Public License v3.0 (AGPL-3.0)</strong>.
لمزيد من التفاصيل، راجع ملف <a href="../../LICENSE">LICENSE</a>.
</p>
