const translations = {
  en: {
    navWork: "Projects", navExpertise: "Expertise", navAbout: "About", navContact: "Contact ↗",
    heroEyebrow: "FULL-STACK · CLOUD · SERVERLESS",
    heroTitle: 'Engineering products that are <em>fast, secure,</em> and built to scale.',
    heroLead: "I'm Abdurrahman, a Full-Stack Cloud Engineer focused on serverless architecture, AWS infrastructure, and end-to-end product engineering.",
    viewWork: "Explore selected work", contactMe: "Get in touch", location: "Riyadh, Saudi Arabia", openTo: "Open to opportunities or technical collaboration",
    securityChip: "Security-minded engineering", coreStack: "CORE TOOLKIT", selectedWork: "SELECTED WORK",
    workTitle: 'Real products.<br><em>Engineering depth.</em>',
    workIntro: "A selection of product work across commerce, real-time social experiences, and SaaS. Details and access can be discussed during a technical walkthrough.",
    illustrativeUi: "ILLUSTRATIVE UI CONCEPT", commerceVisualTitle: 'A considered<br><em>commerce experience.</em>', visualCta: "Explore collection",
    commerceCategory: "E-COMMERCE · SERVERLESS", liveProject: "Live project",
    commerceDesc: "A production serverless e-commerce platform for a family project, built from scratch on AWS. It features passwordless sign-in (SMS and email OTP), CloudWatch-verified 4–6 ms response times, and near $3/month in infrastructure. Its defense-in-depth design has repelled real attacks in production: access-bypass attempts, malicious file uploads, and sensitive-file scanning.",
    visitLive: "Visit live store", sourceOnRequest: "Source walkthrough available on request",
    socialCategory: "SOCIAL · REAL-TIME",
    socialDesc: "A full-stack social platform built end to end on the MERN stack: real-time messaging over Socket.io with voice recording, a media-rich Reels feature, and JWT-based authentication. Smart search is hardened against SQL/NoSQL injection.",
    sourceAvailable: "Source code available for review", linkPending: "View Repository",
    saasCategory: "SAAS · ASYNC PROCESSING", inDevelopment: "In development",
    saasDesc: "A PDF and media processing SaaS currently in development. I'm architecting asynchronous pipelines for heavy file operations, designing subscription billing, and integrating the Google Ads API.",
    processingPipeline: "Async processing pipeline", architectureDiscussion: "Architecture discussion welcome", inProgress: "Work in progress",
    disclaimer: "The CrazyEdit and ShareX visual is an original illustrative concept, not a screenshot.",
    commerceImgAlt: "Al Muhannad store screenshot", socialImgAlt1: "ShareX app screenshot 1", socialImgAlt2: "ShareX app screenshot 2",
    engineeringPrinciples: "ENGINEERING PRINCIPLES",
    approachTitle: 'Good engineering is more than <em>shipping code.</em>',
    approachDesc: "I approach software as a complete system: security boundaries, operational visibility, scaling behavior, and cost all matter.",
    principle1Title: "Defense in depth", principle1Desc: "Layered security controls, least-privilege access, and careful secrets management.",
    principle2Title: "Cost-aware architecture", principle2Desc: "Select managed services and serverless patterns based on the workload—not hype.",
    principle3Title: "Observable delivery", principle3Desc: "Tests, logs, and metrics that help validate behavior and diagnose regressions.",
    toolkitLabel: "TECHNICAL TOOLKIT", skillsTitle: 'From interface to <em>infrastructure.</em>',
    skillsIntro: "A practical toolkit spanning frontend, backend, data, cloud, and quality engineering.",
    skillFrontend: "Frontend", skillBackend: "Backend & APIs", skillData: "Data & modeling", skillCloud: "Cloud & security",
    skillQuality: "Quality & tooling", skillLanguages: "Languages", languagesList: "Arabic — Native · English — Professional · Turkish — Fluent",
    contactEyebrow: "LET'S TALK ENGINEERING", contactTitle: 'Have a meaningful problem<br>to <em>solve together?</em>',
    contactDesc: "Open to discussing technical architecture, product development, and technical partnership opportunities.",
    emailMe: "Email me", footerRights: "Built with care.", footerEmail: "Email",
    githubAdd: "GitHub", linkedinAdd: "LinkedIn", socialStatus: "Learning project",
    languageLabel: "العربية", languageAria: "Switch language to Arabic", menuOpen: "Open menu", menuClose: "Close menu",
    almuhannadTitle: "Al-Muhannad Sweets & Herbs", metricSecurity: "Repelled in production",
    metricLatency: "Verified response time", metricCost: "Monthly infrastructure", metricAttacks: "3 attack types",
    tagAccessBypass: "Access-bypass protection", tagUploadDefense: "Malicious-upload defense", tagFileScan: "Sensitive-file scan blocking"
  },
  ar: {
    navWork: "المشاريع", navExpertise: "الخبرات", navAbout: "نبذة عني", navContact: "تواصل معي ↗",
    heroEyebrow: "تطوير شامل · سحابة · Serverless",
    heroTitle: 'أبني منتجات <em>سريعة وآمنة</em> ومهيأة للنمو.',
    heroLead: "أنا عبد الرحمن، مهندس برمجيات Full-Stack وسحابة، أركز على المعمارية عديمة الخوادم (Serverless)، وبنية AWS التحتية، وتطوير المنتجات من البداية إلى الإنتاج.",
    viewWork: "استعرض أعمالي", contactMe: "لنتواصل", location: "الرياض، المملكة العربية السعودية", openTo: "منفتح على الفرص أو التعاون التقني",
    securityChip: "هندسة تضع الأمان أولًا", coreStack: "التقنيات الأساسية", selectedWork: "نماذج من أعمالي",
    workTitle: 'منتجات حقيقية.<br><em>وعمق هندسي.</em>',
    workIntro: "مجموعة من المشاريع في التجارة الإلكترونية، والتواصل الفوري، ومنتجات SaaS. يمكن مناقشة التفاصيل واستعراض التنفيذ خلال لقاء تقني.",
    illustrativeUi: "تصميم توضيحي للواجهة", commerceVisualTitle: 'تجربة تسوّق<br><em>مدروسة التفاصيل.</em>', visualCta: "استكشف المنتجات",
    commerceCategory: "تجارة إلكترونية · Serverless", liveProject: "مشروع حي",
    commerceDesc: "منصة تجارة إلكترونية إنتاجية بمعمارية Serverless كاملة لمشروع عائلي، بنيتها من الصفر على AWS. تعتمد دخولًا بدون كلمة سر (OTP عبر SMS والبريد)، وزمن استجابة 4–6 ms موثقًا عبر CloudWatch، وبنية تحتية بتكلفة حوالي 3$ شهريًا. وقد صدّت بنيتها الأمنية متعددة الطبقات هجمات حقيقية في بيئة الإنتاج: محاولات تجاوز الصلاحيات، ورفع ملفات خبيثة، ومسح الملفات الحساسة.",
    visitLive: "زيارة المتجر الفعلي", sourceOnRequest: "يمكن استعراض الكود عند الطلب",
    socialCategory: "شبكات اجتماعية · لحظي",
    socialDesc: "منصة تواصل اجتماعي متكاملة بنيتها من الواجهة إلى الخلفية بمجموعة MERN: مراسلة فورية عبر Socket.io مع تسجيل صوتي، ومقاطع Reels غنية بالوسائط، ومصادقة JWT. والبحث الذكي محميّ ضد هجمات حقن SQL/NoSQL.",
    sourceAvailable: "الكود متاح للمراجعة", linkPending: "معاينة المستودع",
    saasCategory: "SaaS · معالجة غير متزامنة", inDevelopment: "قيد التطوير",
    saasDesc: "منصة SaaS لمعالجة ملفات PDF والوسائط قيد التطوير. أصمّم مسارات معالجة غير متزامنة للعمليات الثقيلة، وأخطّط للاشتراكات والفوترة، وأدمج Google Ads API.",
    processingPipeline: "مسار معالجة غير متزامن", architectureDiscussion: "مرحبًا بمناقشة المعمارية", inProgress: "العمل مستمر",
    disclaimer: "رسم CrazyEdit و ShareX تصميم توضيحي أُنشئ لهذا المعرض وليس لقطة شاشة.",
    commerceImgAlt: "لقطة شاشة من متجر المهنّد", socialImgAlt1: "لقطة شاشة 1 من تطبيق ShareX", socialImgAlt2: "لقطة شاشة 2 من تطبيق ShareX",
    engineeringPrinciples: "مبادئي الهندسية",
    approachTitle: 'الهندسة الجيدة تتجاوز <em>مجرد كتابة الكود.</em>',
    approachDesc: "أتعامل مع البرمجيات كنظام متكامل؛ فحدود الأمان، والمراقبة التشغيلية، وسلوك التوسع، والتكلفة كلها عناصر أساسية.",
    principle1Title: "الأمان متعدد الطبقات", principle1Desc: "ضوابط حماية متراكبة، وصلاحيات بالحد الأدنى، وإدارة دقيقة للأسرار.",
    principle2Title: "معمارية تراعي التكلفة", principle2Desc: "اختيار الخدمات المُدارة وأنماط Serverless بناءً على طبيعة الاستخدام، لا على الضجة المحيطة بها.",
    principle3Title: "تسليم قابل للقياس", principle3Desc: "اختبارات وسجلات ومقاييس تساعد على التحقق من السلوك وتشخيص التراجعات.",
    toolkitLabel: "العدة التقنية", skillsTitle: 'من الواجهة إلى <em>البنية التحتية.</em>',
    skillsIntro: "مجموعة عملية من التقنيات تشمل الواجهات، والخلفية، والبيانات، والسحابة، وجودة البرمجيات.",
    skillFrontend: "الواجهات الأمامية", skillBackend: "الخلفية وواجهات API", skillData: "البيانات وتصميم النماذج", skillCloud: "السحابة والأمان",
    skillQuality: "الجودة والأدوات", skillLanguages: "اللغات", languagesList: "العربية — اللغة الأم · الإنجليزية — احترافية · التركية — بطلاقة",
    contactEyebrow: "لنتحدث في التقنية", contactTitle: 'هل لديك تحدٍ حقيقي<br>لنحاول <em>حلّه معًا؟</em>',
    contactDesc: "منفتح على مناقشة المعمارية التقنية، وتطوير المنتجات، وفرص الشراكة التقنية.",
    emailMe: "راسلني", footerRights: "صُنع بعناية.", footerEmail: "البريد الإلكتروني",
    githubAdd: "GitHub", linkedinAdd: "LinkedIn", socialStatus: "مشروع تعليمي",
    languageLabel: "English", languageAria: "تغيير اللغة إلى الإنجليزية", menuOpen: "فتح القائمة", menuClose: "إغلاق القائمة",
    almuhannadTitle: "حلويات وعطارة المهند", metricSecurity: "صُدّت فعليًا", metricAttacks: "3 أنواع من الهجمات",
    metricLatency: "زمن استجابة موثّق", metricCost: "تكلفة البنية شهريًا",
    tagAccessBypass: "منع تجاوز الصلاحيات", tagUploadDefense: "صدّ الرفع الخبيث", tagFileScan: "منع مسح الملفات الحساسة"
  }
};

const html = document.documentElement;
const languageToggle = document.getElementById("languageToggle");
const languageLabel = document.getElementById("languageLabel");
const menuToggle = document.getElementById("mobileMenuToggle");
const nav = document.querySelector(".main-nav");

function setLanguage(lang) {
  const dictionary = translations[lang] || translations.en;
  html.lang = lang;
  html.dir = lang === "ar" ? "rtl" : "ltr";
  document.body.dir = html.dir;
  document.title = lang === "ar"
    ? "عبدالرحمن بارودي - مهندس برمجيات وسحابة"
    : "Abdurrahman Baroudi - Full-Stack Cloud Engineer";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key] !== undefined) element.textContent = dictionary[key];
  });
  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const key = element.dataset.i18nHtml;
    if (dictionary[key] !== undefined) element.innerHTML = dictionary[key];
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const key = element.dataset.i18nAlt;
    if (dictionary[key] !== undefined) element.alt = dictionary[key];
  });
  languageLabel.textContent = dictionary.languageLabel;
  languageToggle.setAttribute("aria-label", dictionary.languageAria);
  menuToggle.setAttribute("aria-label", nav.classList.contains("is-open") ? dictionary.menuClose : dictionary.menuOpen);
  document.documentElement.style.setProperty("--reading-direction", html.dir);
  try { localStorage.setItem("portfolio-language", lang); } catch (_) { /* local storage may be unavailable */ }
}

let initialLang = "en";
try {
  const saved = localStorage.getItem("portfolio-language");
  if (saved === "ar" || saved === "en") initialLang = saved;
} catch (_) {}
setLanguage(initialLang);
document.getElementById("year").textContent = new Date().getFullYear();

languageToggle.addEventListener("click", () => {
  setLanguage(html.lang === "en" ? "ar" : "en");
});
menuToggle.addEventListener("click", () => {
  const opened = nav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(opened));
  menuToggle.setAttribute("aria-label", translations[html.lang][opened ? "menuClose" : "menuOpen"]);
});
nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  nav.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
window.addEventListener("resize", () => {
  if (window.innerWidth > 640) {
    nav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});