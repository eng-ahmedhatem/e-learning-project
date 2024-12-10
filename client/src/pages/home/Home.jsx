import React, { useEffect, useRef, useState } from "react";
import "./home.css";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";

export default function Home() {
  const [currentImg, setCurrentImg] = useState(0);
  const btn_atoCLick = useRef(null);
  useEffect(() => {
    const tt = setInterval(() => {
      btn_atoCLick.current.click();
    }, 5000);
    return () => clearTimeout(tt);
  }, []);
  function handleArrowR() {
    const allItems = document.querySelectorAll(".items");
    allItems.forEach((e) => e.classList.remove("active"));
    let newIndex = currentImg + 1;
    if (newIndex >= allItems.length) {
      newIndex = 0;
    }
    setCurrentImg(newIndex);
    allItems[newIndex].classList.add("active");
  }

  function handleArrowL() {
    const allItems = document.querySelectorAll(".items");
    allItems.forEach((e) => e.classList.remove("active"));
    let newIndex = currentImg - 1;
    if (newIndex < 0) {
      newIndex = allItems.length - 1;
    }
    setCurrentImg(newIndex);
    allItems[newIndex].classList.add("active");
  }

  return (
    <section className="home relative ">
      <div className="container p-5 h-full mx-auto">
        <div className="slider relative">
          <div className="items  active place-items-center md:place-content-center md:place-items-stretch content-center grid grid-cols-1 justify-center items-center gap-5 w-full h-full lg:grid-cols-2">
            <div
              data-aos="fade-up"
              className="cont-text flex flex-col justify-center "
            >
              <h1 className="flex justify-center  flex-nowrap   items-center text-center relative text-xl mx-auto  w-[80%] md:text-3xl  xl:text-5xl mb-7">
                <div className="right-line">
                  <span></span>
                  <span></span>
                </div>
                <span className="block grow">التكنولوجيا الخضراء</span>
                <div className="left-line">
                  <span></span>
                  <span></span>
                </div>
              </h1>
              <p className="text-slate-500 text-sm xl:text-lg text-justify">
                وٌجِدَت التكنولوجيا الخضراء لهدفٍ نبيل وهو مساعدة البيئة قدر
                المستطاع، من خلال الاستغناء عن التقنيات القديمة الضارة والحد من
                آثارها وإصلاح الأضرار الماضية التي لحقت بها. إنها تقدم جرعة من
                الأمل لنواجه التغير المُناخي والتلوث على حدً سواء، وستكون التوجه
                المستقبلي وستغير منظور العالم حول حماية البيئة والحفاظ عليها.
              </p>
            </div>
            <div  data-aos="fade-right" className="img shadow-2xl row-start-1 md:row-start-auto w-full overflow-hidden">
              <img
                src="./imgs/home/1.webp"
                className="w-full h-full rounded-lg"
                alt="Green Technology"
              />
            </div>
          </div>

          <div className="items place-items-center md:place-content-center md:place-items-stretch content-center grid grid-cols-1 justify-center items-center gap-5 w-full h-full lg:grid-cols-2">
            <div
              data-aos="fade-up"
              className="cont-text flex flex-col justify-center "
            >
              <h1 className="flex flex-nowrap   justify-center items-center text-center relative text-xl mx-auto  w-[80%] md:text-3xl  xl:text-5xl mb-7">
                <div className="right-line">
                  <span></span>
                  <span></span>
                </div>
                <span className="block grow w-max">التحول الرقمى</span>
                <div className="left-line">
                  <span></span>
                  <span></span>
                </div>
              </h1>
              <p className="text-slate-500 text-sm xl:text-lg  text-justify">
                تسعى وزارة الاتصالات وتكنولوجيا المعلومات إلى بناء مصر الرقمية
                والوصول إلى مجتمع مصري يتعامل رقميًا فى كافة مناحي الحياة. ولذا
                تعمل على تعزيز تنمية البنية التحتية لتكنولوجيا المعلومات
                والاتصالات وتحسين الخدمات الرقمية في الجهات الحكومية؛ لتحسين
                أداء الوزارات والهيئات الحكومية الأخرى، ورفع جودة الخدمات
                وكفاءتها من خلال تحسين بيئة العمل، وتوفير الدعم لعملية صناعة
                القرار وإيجاد حلول للقضايا التي تهم المجتمع.
              </p>
            </div>
            <div  data-aos="fade-right" className="img shadow-2xl row-start-1 md:row-start-auto w-full overflow-hidden">
              <img
                src="./imgs/home/2.webp"
                className="w-full h-full rounded-lg"
                alt="Green Technology"
              />
            </div>
          </div>

          <div className="items place-items-center md:place-content-center md:place-items-stretch content-center grid grid-cols-1 justify-center items-center gap-5 w-full h-full lg:grid-cols-2">
            <div
              data-aos="fade-up"
              className="relative cont-text flex flex-col justify-center "
            >
              <h1 className="flex flex-nowrap   justify-center items-center text-center relative text-xl mx-auto  w-[80%] md:text-3xl  xl:text-5xl mb-7">
                <div className="right-line">
                  <span></span>
                  <span></span>
                </div>
                <span className="block grow w-max">نظام التشغيل</span>
                <div className="left-line">
                  <span></span>
                  <span></span>
                </div>
              </h1>
              <p className="text-slate-500 text-sm xl:text-lg  text-justify">
                نظام التشغيل هو البرنامج الأساسي أو النظام البرمجي الذي يدير
                موارد الجهاز ويسمح بتشغيل التطبيقات المختلفة، مثل متصفحات
                الإنترنت وبرامج الوسائط وغيرهما، حيث يقوم بدور الوسيط بين
                المستخدم ومكونات الجهاز المادية، مما يضمن تفاعل الأجهزة وتنفيذ
                الأوامر بكفاءة؛ كما يتحكم نظام التشغيل أيضًا في إدارة الذاكرة،
                والعمليات، والتخزين. وتتعدد أنواع نظام التشغيل لتناسب متطلبات
                الأجهزة المختلفة، مثل الهواتف الذكية، والحواسيب، والخوادم، مما
                يوفر بيئات تشغيل متخصصة تساهم في تحسين أداء الأنظمة وتحقيق
                الكفاءة العالية.
              </p>
            </div>
            <div  data-aos="fade-right" className="img shadow-2xl row-start-1 md:row-start-auto w-full overflow-hidden">
              <img
                src="./imgs/home/3.webp"
                className="w-full h-full rounded-lg"
                alt="Green Technology"
              />
            </div>
          </div>
        </div>
        <div  className="arrow absolute flex w-full justify-center  bottom-[100px] md:bottom-[50px] z-10 lg:bottom-[95px] left-2/4 -translate-x-[50%]">
          <IoIosArrowDropright
            onClick={handleArrowR}
            className="text-5xl text-slate-600 transition hover:text-[#777] cursor-pointer z-20 arrow_right"
          />
          <span ref={btn_atoCLick} onClick={handleArrowL}>
            <IoIosArrowDropleft className="text-5xl transition hover:text-[#777] text-slate-600 cursor-pointer z-20 arrow_left" />
          </span>
        </div>
      </div>
      <div className="wave">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="100%"
          height="100%"
          viewBox="0 0 1600 900"
          preserveAspectRatio="xMidYMax slice"
        >
          {" "}
          <defs>
            {" "}
            <linearGradient id="bg">
              {" "}
              <stop offset="0%" style={{ stopColor: "#fff" }} />{" "}
              <stop offset="50%" style={{ stopColor: "#fff" }} />{" "}
              <stop offset="100%" style={{ stopColor: "#fff" }} />{" "}
            </linearGradient>{" "}
            <path
              id="wave"
              fill="url(#bg)"
              d="M-363.852,502.589c0,0,236.988-41.997,505.475,0 s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
            />{" "}
          </defs>{" "}
          <g>
            {" "}
            <use xlinkHref="#wave" opacity=".3">
              {" "}
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="10s"
                calcMode="spline"
                values="270 230; -334 180; 270 230"
                keyTimes="0; .5; 1"
                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />{" "}
            </use>{" "}
            <use xlinkHref="#wave" opacity=".6">
              {" "}
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="8s"
                calcMode="spline"
                values="-270 230;243 220;-270 230"
                keyTimes="0; .6; 1"
                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />{" "}
            </use>{" "}
            <use xlinkHref="#wave" opacity=".9">
              {" "}
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="6s"
                calcMode="spline"
                values="0 230;-140 200;0 230"
                keyTimes="0; .4; 1"
                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />{" "}
            </use>{" "}
          </g>{" "}
        </svg>
      </div>
    </section>
  );
}
