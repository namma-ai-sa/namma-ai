"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Navbar from "./components/Navbar";

const ecosystem = [
  { icon: "▦", title: "CRM", text: "نظّم دورة حياة العميل من أول تواصل حتى إتمام الصفقة.", tone: "green" },
  { icon: "✦", title: "AI Seller", text: "امنح فريق المبيعات مساعداً يفهم كل فرصة ويقترح الخطوة التالية.", tone: "blue" },
  { icon: "◌", title: "WhatsApp Agent", text: "حوّل محادثات واتساب إلى تجارب سريعة ومتابعات لا تتوقف.", tone: "amber" },
  { icon: "↗", title: "Analytics", text: "شاهد أداء عملك بوضوح واتخذ قرارات مبنية على بيانات حقيقية.", tone: "violet" },
];

const metrics = [
  ["+42%", "زيادة التحويل", "من خلال متابعة أذكى"],
  ["-37%", "تقليل وقت المتابعة", "بفضل الأتمتة"],
  ["3.2x", "سرعة الاستجابة", "لفريق أكثر إنتاجية"],
  ["24/7", "تشغيل تلقائي", "دون توقف أو تعقيد"],
];

const plans = [
  { name: "Basic", price: "299", description: "لبدء تنظيم عملياتك", features: ["5 مستخدمين", "CRM وإدارة العملاء", "تقارير أساسية"] },
  { name: "Pro", price: "599", description: "للفرق التي تريد النمو", featured: true, features: ["20 مستخدماً", "AI Seller", "WhatsApp Agent", "تحليلات متقدمة"] },
  { name: "Enterprise", price: "999+", description: "للمؤسسات والعمليات الكبيرة", features: ["مستخدمون غير محدودين", "تكاملات مخصصة", "دعم أولوية"] },
];

function ProductPreview({ type, title, label }) {
  return (
    <article className={`preview preview-${type}`}>
      <div className="preview-top"><span>{label}</span><b>•••</b></div>
      <h3>{title}</h3>
      <div className="preview-lines"><i /><i /><i /></div>
      <div className="preview-screen">
        {type === "dashboard" && <><div className="kpi-row"><span>128,430 <small>ر.س</small></span><span>+42% <small>نمو</small></span></div><div className="bars">{[30, 48, 40, 65, 54, 80, 93].map((height) => <i style={{ height: `${height}%` }} key={height} />)}</div></>}
        {type === "crm" && ["شركة آفاق", "مجموعة نمو", "حلول الأعمال"].map((name, index) => <div className="contact-row" key={name}><i /><span><b>{name}</b><small>{index === 0 ? "عميل محتمل" : index === 1 ? "صفقة قيد التفاوض" : "تم التواصل اليوم"}</small></span><em>{index === 0 ? "جديدة" : "نشطة"}</em></div>)}
        {type === "whatsapp" && <><div className="chat-bubble received">مرحباً، أحتاج تفاصيل الباقة</div><div className="chat-bubble sent">أهلاً بك، يسعدنا مساعدتك ✦</div><div className="chat-bubble received short">هل يمكنني حجز عرض؟</div></>}
        {type === "seller" && <><strong className="ai-orb">✦</strong><b>تحليل فرصة البيع</b><small>احتمالية التحويل <em>87%</em></small><div className="confidence"><i /></div></>}
      </div>
    </article>
  );
}

export default function HomePage() {
  const router = useRouter();
  const [demoQuestion, setDemoQuestion] = useState("");

  const openGuestChat = () => router.push(`/guest?q=${encodeURIComponent(demoQuestion || "كيف أزيد المبيعات؟")}`);

  return (
    <>
      <Navbar />
      <main className="enterprise-home" dir="rtl">
        <section className="hero-section page-shell">
          <div className="hero-copy">
            <span className="eyebrow"><i /> منصة تشغيل عربية للشركات الطموحة</span>
            <div className="hero-brand"><img src="/namma-logo.png.png" alt="نمّى NAMMA AI" /></div><h1>نظام تشغيل أعمالك<br /><em>بالذكاء الاصطناعي</em></h1>
            <p>CRM + AI Seller + WhatsApp Agent + Analytics<br />في منصة واحدة للشركات العربية.</p>
            <div className="hero-actions"><button className="primary-button" onClick={() => router.push("/register")}>ابدأ الآن <span>←</span></button><button className="secondary-button" onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}>احجز عرضاً تجريبياً <span>↗</span></button></div>
            <div className="hero-proof"><span className="proof-stack"><i>س</i><i>م</i><i>ر</i><i>+</i></span><span>موثوق من فرق عربية تنمو كل يوم</span></div>
          </div>
          <div className="hero-product" aria-label="معاينة لوحة تحكم NAMMA AI"><div className="hero-glow" /><div className="dashboard-window"><header><b>لوحة الأداء</b><small>آخر تحديث منذ 4 دقائق　◉</small></header><div className="dashboard-content"><aside><strong>نظرة عامة</strong><span>العملاء</span><span>الفرص</span><span>التحليلات</span></aside><div className="dashboard-main"><div className="dashboard-welcome"><span><b>صباح الخير، فريق النمو</b><small>إليك ملخص أداء عملك اليوم</small></span><em>هذا الشهر　⌄</em></div><div className="dashboard-stats"><span><small>إجمالي المبيعات</small><b>128,430 <i>ر.س</i></b><em>+18.4%</em></span><span><small>العملاء الجدد</small><b>1,284</b><em>+12.8%</em></span><span><small>معدل التحويل</small><b>24.8%</b><em>+6.2%</em></span></div><div className="dashboard-chart"><div><b>أداء المبيعات</b><small>آخر 30 يوم　↗</small></div><div className="chart-bars">{[35, 47, 40, 60, 52, 72, 64, 86, 77, 94].map((height) => <i style={{ height: `${height}%` }} key={height} />)}</div></div></div></div></div><div className="hero-notification"><b>✦</b><span><strong>فرصة جديدة</strong><small>تم اكتشاف عميل عالي القيمة</small></span></div></div>
        </section>

        <section className="trust-bar page-shell"><b>كل ما تحتاجه للنمو، في مكان واحد</b>{ecosystem.map((item) => <span key={item.title}><i>{item.icon}</i>{item.title}</span>)}</section>

        <section className="section page-shell ecosystem-section" id="ecosystem"><div className="section-heading"><span className="eyebrow">منصة واحدة. أثر أكبر.</span><h2>كل فريقك، بنفس الإيقاع.</h2><p>اربط أدوات عملك الأساسية في نظام واحد يفهم سياق عملك ويمنح فريقك وقتاً أكبر لما يهم.</p></div><div className="ecosystem-grid">{ecosystem.map((item) => <article className="ecosystem-card" key={item.title}><i className={`ecosystem-icon ${item.tone}`}>{item.icon}</i><h3>{item.title}</h3><p>{item.text}</p><a href="#preview">اكتشف المزيد <span>←</span></a></article>)}</div></section>

        <section className="section page-shell preview-section" id="preview"><div className="section-heading centered"><span className="eyebrow">مصمم للعمل الحقيقي</span><h2>رؤية كاملة. من أول تواصل إلى آخر صفقة.</h2><p>واجهات واضحة تساعد فريقك على التحرك بسرعة واتخاذ قرارات مبنية على البيانات.</p></div><div className="preview-grid"><ProductPreview type="dashboard" label="Dashboard" title="نظرة عامة على الأداء" /><ProductPreview type="crm" label="CRM" title="علاقات عملائك" /><ProductPreview type="whatsapp" label="WhatsApp Agent" title="محادثاتك، تلقائية" /><ProductPreview type="seller" label="AI Seller" title="مساعد مبيعاتك" /></div></section>

        <section className="metrics-section"><div className="page-shell metrics-grid">{metrics.map(([value, label, detail]) => <div key={label}><b>{value}</b><strong>{label}</strong><span>{detail}</span></div>)}</div></section>

        <section className="section page-shell demo-section" id="demo"><div className="demo-copy"><span className="eyebrow">جرّب NAMMA AI</span><h2>أول خطوة نحو<br /><em>نمو أذكى.</em></h2><p>اسأل مساعد NAMMA عن أي تحدٍ في عملك. ابدأ بسؤال واحد وشاهد كيف يفكر معك.</p><div className="demo-checks"><span>✓ بدون بطاقة ائتمانية</span><span>✓ 3 رسائل مجانية</span></div></div><div className="demo-box"><header><span><i /> مساعد NAMMA</span><small>متصل الآن</small></header><div className="demo-body"><div className="assistant-avatar">✦</div><strong>كيف يمكنني مساعدتك اليوم؟</strong><small>اسأل عن المبيعات، التسويق، أو تجربة عملائك</small><div className="demo-input"><input value={demoQuestion} onChange={(event) => setDemoQuestion(event.target.value)} onKeyDown={(event) => event.key === "Enter" && openGuestChat()} placeholder="كيف أزيد مبيعات شركتي؟" /><button onClick={openGuestChat}>إرسال　←</button></div><div className="demo-suggestions"><button onClick={() => setDemoQuestion("كيف أزيد مبيعاتي؟")}>كيف أزيد مبيعاتي؟</button><button onClick={() => setDemoQuestion("اكتب رسالة واتساب")}>اكتب رسالة واتساب</button></div></div></div></section>

        <section className="section page-shell pricing-section" id="pricing"><div className="section-heading centered"><span className="eyebrow">خطط مرنة لنموك</span><h2>اختر المساحة التي تناسب طموحك.</h2><p>ابدأ صغيراً، وكبّر مع NAMMA عندما يكبر عملك.</p></div><div className="pricing-grid">{plans.map((plan) => <article className={`pricing-card ${plan.featured ? "featured" : ""}`} key={plan.name}>{plan.featured && <label>الأكثر اختياراً</label>}<h3>{plan.name}</h3><p>{plan.description}</p><div className="pricing-value"><b>{plan.price}</b><span>ر.س / شهر</span></div><button className={plan.featured ? "primary-button" : "outline-button"} onClick={() => router.push("/register")}>ابدأ الآن <span>←</span></button><ul>{plan.features.map((feature) => <li key={feature}><i>✓</i>{feature}</li>)}</ul></article>)}</div></section>

        <section className="final-cta page-shell"><div><span className="eyebrow">جاهز للخطوة التالية؟</span><h2>خلّ عملك ينمو<br /><em>بطريقة أذكى.</em></h2></div><div><p>كل ما تحتاجه لتبني تجربة أفضل لعملائك، وتمنح فريقك مساحة أكبر للإنجاز.</p><button className="light-button" onClick={() => router.push("/register")}>ابدأ الآن مجاناً <span>←</span></button></div></section>
        <footer className="home-footer page-shell"><b><img src="/namma-logo.png.png" alt="نمّى NAMMA AI" /></b><span>© 2025 NAMMA AI. صُنع للشركات العربية.</span><div><a href="/about">عن NAMMA</a><a href="/contact">تواصل معنا</a><a href="/security">الأمان</a></div></footer>

        <style jsx>{`
          .hero-brand{display:flex;align-items:baseline;gap:9px;margin-bottom:18px}.hero-brand strong{font-size:25px;font-weight:900;color:var(--navy)}.hero-brand span{color:#15803d;font-size:10px;font-weight:900;letter-spacing:.08em;direction:ltr}.dashboard-window>header b .dashboard-arabic-logo{display:inline;color:var(--navy);background:none;width:auto;height:auto;font-size:14px;font-weight:900}.dashboard-window>header b i{color:#15803d;font-size:8px;font-style:normal;letter-spacing:.06em}.home-footer>b{display:flex;align-items:baseline;gap:8px}.home-footer>b strong{font-size:18px}.home-footer>b i{font-size:10px;letter-spacing:.06em}
          @media(max-width:900px){.page-shell{width:calc(100% - 32px)}.hero-section{grid-template-columns:1fr;padding:80px 0 110px}.hero-section:before{right:-40%;width:100%}.hero-product{min-height:390px}.dashboard-window{transform:none}.dashboard-window:hover{transform:translateY(-5px)}.section{padding:110px 0}.ecosystem-grid,.preview-grid{grid-template-columns:repeat(2,1fr)}.demo-section{grid-template-columns:1fr;gap:42px}.metrics-grid{grid-template-columns:repeat(2,1fr);gap:28px}.metrics-grid>div{border-left:0}.pricing-grid{grid-template-columns:1fr}.pricing-card.featured,.pricing-card.featured:hover{transform:none}.final-cta{padding:55px 32px}}
          @media(max-width:520px){.hero-copy h1{font-size:40px;letter-spacing:-1px}.hero-copy p{font-size:16px}.hero-actions{align-items:stretch;flex-direction:column;gap:14px}.primary-button,.secondary-button{width:100%}.trust-bar{flex-wrap:wrap;gap:15px}.trust-bar>b{width:100%}.trust-bar>span{width:45%;font-size:10px}.ecosystem-grid,.preview-grid{grid-template-columns:1fr}.dashboard-window{height:310px}.dashboard-content aside{width:82px;font-size:8px}.dashboard-main{padding:17px 11px}.dashboard-stats>span:last-child{display:none}.dashboard-chart{height:120px}.chart-bars{height:78px}.hero-notification{right:0;bottom:3px}.section-heading h2,.demo-copy h2{font-size:33px}.section{padding:85px 0}.demo-body{padding:22px 15px}.demo-suggestions{flex-wrap:wrap}.final-cta{display:block;padding:45px 28px;margin-bottom:65px}.final-cta h2{font-size:36px}.final-cta p{margin-top:30px}.home-footer{flex-wrap:wrap;gap:18px}.home-footer span{width:100%;order:3}}
        `}</style>
        <style jsx>{`
          .home-footer>b img{display:block;width:auto;height:36px;max-height:36px;max-width:100%;object-fit:contain}.hero-brand img{display:block;width:auto;height:64px;max-height:64px;max-width:100%;object-fit:contain}
        `}</style>
      </main>
    </>
  );
}