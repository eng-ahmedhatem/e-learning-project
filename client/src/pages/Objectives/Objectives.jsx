import React from "react";
import "./Objectives.css";
export default function Objectives() {
  return (
    <section  style={{backgroundColor:"var(--main-bg,rgb(186 193 195 / 71%))",fontFamily:"var(--mainFont)"}} className="Objectives p-2 h-screen ">
      {/* <div className="header_sec_title relative header-cont mt-36  text-center">
        <h2 className="w-max relative mx-auto text-5xl font-bold mb-8">
          عنوان<span className="z-10 relative mr-5">الصفحة</span>
        </h2>
      </div> */}
      <div className="container pt-32  mx-auto ">
        <div data-aos="fade-up" className="opj-card bg-white p-5">
          <h2 className="opj-title w-max relative text-xl mb-9">
            الأهداف العامة للبرنامج
          </h2>
          <p className="mb-8 text-[#20a3ea]">بعد دراسة التلميذ باستخدام بيئة التعلم الرقمية القائمة على الروبوت الذكى يتوقع أن يكون التلميذ قادرًا على أن :</p>
          <div className="eff  bg-slate-200">
            <span className="block  w-7 mx-auto bg-[#5189f8] h-[3px] rounded-3xl"></span>
          </div>
          <ul>
            
            <li>
              <span>يوضح أهمية التكنولوجيا الخضراء فى حياتنا.</span>
            </li>
            <li>
              <span>
                يناقش الخدمات الرقمية المتنوعة التى توفرها الدولة المصرية.
              </span>
            </li>
            <li>
              <span>يستخدم منصة مصر الرقمية لتلبية احتياجاته.</span>
            </li>
            <li>
              <span>يستخدم أحد أنظمة التشغيل على جهاز المنزل أو المدرسة.</span>
            </li>
            <li>
              <span>	يناقش الخدمات الرقمية المتنوعة التى توفرها الدولة المصرية.</span>
            </li>
            <li>
              <span>يشرح الاستخدامات المختلفة لأنظمة التشغيل فى حياتنا.</span>
            </li>
            <li>
              <span>
                يناقش الخدمات التى يقدمها البريد الالكترونى فى التعامل مع مواقع
                الانترنت.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

{/* <div className="opj-card bg-white p-5">
  <h2 className="opj-title w-max relative text-xl mb-9">
    الأهداف الخاصة أو السلوكية{" "}
  </h2>
  <div className="eff  bg-slate-200">
    <span className="block  w-7 mx-auto bg-[#5189f8] h-[3px] rounded-3xl"></span>
  </div>
  <ul>
    {" "}
    <ul>
      <li>
        <span>يشرح مفهوم التكنولوجيا الخضراء.</span>
      </li>
      <li>
        <span>يفسر مجالات استخدام التكنولوجيا الخضراء.</span>
      </li>
      <li>
        <span>يعدد فوائد التكنولوجيا الخضراء فى حياتنا.</span>
      </li>
      <li>
        <span>
          يوضح أهمية التكنولوجيا الخضراء فى الحفاظ على بيئة نظيفة
          للاجيال مستقبلا.
        </span>
      </li>
      <li>
        <span>يستنتج فكرة عمل أجهزة الاستشعار عن بعد.</span>
      </li>
      <li>
        <span>
          يقترح اكبر عدد من الأفكار لاستخدامات التكنولوجيا الخضراء فى
          حياتنا.
        </span>
      </li>
      <li>
        <span>
          يناقش الخدمات الرقمية المتنوعة التى توفرها الدولة المصرية.
        </span>
      </li>
      <li>
        <span>يشرح مفهوم التحول الرقمى.</span>
      </li>
      <li>
        <span>
          يفسر العلاقة بين التكنولوجيا الخضراء والتحول الرقمى.
        </span>
      </li>
      <li>
        <span>
          يعدد أمثلة على تطبيقات التكنولوجيا الخضراء واتحول الرقمى معًا.
        </span>
      </li>
      <li>
        <span>يشرح أدوات التحول الرقمى.</span>
      </li>
      <li>
        <span>
          يستخدم أحد الخدمات الرقمية (منصة مصر الرقمية) فى تلبية
          الاحتياجات.
        </span>
      </li>
      <li>
        <span>
          يوضح أهم الخدمات الرقمية التى يمكن استخدامها للمساعدة فى
          الحياة.
        </span>
      </li>
      <li>
        <span>يعدد أنواع أنظمة التشغيل.</span>
      </li>
      <li>
        <span>يناقش مفهوم نظام التشغيل (OS).</span>
      </li>
      <li>
        <span>يشرح الاستخدامات المختلفة لأنظمة التشغيل فى حياتنا.</span>
      </li>
      <li>
        <span>يفرق بين واجهات نظام التشغيل.</span>
      </li>
      <li>
        <span>
          يستخدم أحد أنظمة التشغيل على جهاز (المدرسة- المنزل).
        </span>
      </li>
      <li>
        <span>يشرح مكونات سطح المكتب واستخداماتها.</span>
      </li>
      <li>
        <span>
          يفرق بين الاستخدامات المختلفة لأنواع الأجهزة الذكية.
        </span>
      </li>
      <li>
        <span>يمارس خطوات تثبيت برنامج على الجهاز.</span>
      </li>
      <li>
        <span>يمارس خطوات إزالة برنامج على الجهاز.</span>
      </li>
      <li>
        <span>يشرح خطوات تثبيت جهاز له خاصية التشغيل والتشغيل.</span>
      </li>
      <li>
        <span>يوصل الأجهزة الملحقة (الطابعة) على الكمبيوتر الخاص.</span>
      </li>
      <li>
        <span>
          يشرح خطوات تنزيل الملفات (المضغوطة أو عبر شبكة الانترنت) على
          الجهاز.
        </span>
      </li>
    </ul>
  </ul>
</div> */}