import React, { useEffect, useRef, useState } from 'react';
import "./home.css";
import { IoIosArrowDropright, IoIosArrowDropleft } from 'react-icons/io';

export default function Home() {
  const [currentImg, setCurrentImg] = useState(0);
  const btn_atoCLick  = useRef(null)
  useEffect(()=>{
    const tt = setTimeout(() => {
      btn_atoCLick.current.click()
    }, 5000);
    return () => clearTimeout(tt);

  },[])
  function handleArrowR() {
    const allItems = document.querySelectorAll('.items');
    allItems.forEach(e => e.classList.remove('active'));
    let newIndex = currentImg + 1;
    if (newIndex >= allItems.length) {
      newIndex = 0;
    }
    setCurrentImg(newIndex);
    allItems[newIndex].classList.add('active');
  }

  function handleArrowL() {
    const allItems = document.querySelectorAll('.items');
    allItems.forEach(e => e.classList.remove('active'));
    let newIndex = currentImg - 1;
    if (newIndex < 0) {
      newIndex = allItems.length - 1;
    }
    setCurrentImg(newIndex);
    allItems[newIndex].classList.add('active');
  }

  return (
    <section className="home relative bg-[#eff2f3]">
      <div className="container p-5 h-full mx-auto">
        <div className="slider relative">
          <div className="items active place-items-center md:place-content-center md:place-items-stretch content-center grid grid-cols-1 justify-center items-center gap-5 w-full h-full lg:grid-cols-2">
            <div className="cont-text flex flex-col justify-center ">
              <h1 className="text-center relative text-5xl  mb-5">التكنولوجيا الخضراء</h1>
              <p className="text-[--c-text-red] text-justify">
                وٌجِدَت التكنولوجيا الخضراء لهدفٍ نبيل وهو مساعدة البيئة قدر المستطاع، من خلال الاستغناء عن التقنيات القديمة الضارة والحد من آثارها وإصلاح الأضرار الماضية التي لحقت بها.
                إنها تقدم جرعة من الأمل لنواجه التغير المُناخي والتلوث على حدً سواء، وستكون التوجه المستقبلي وستغير منظور العالم حول حماية البيئة والحفاظ عليها.
              </p>
            </div>
            <div className="img shadow-2xl row-start-1 md:row-start-auto w-full overflow-hidden">
              <img src="./imgs/home/1.jpg" className="w-full h-full rounded-lg" alt="Green Technology" />
            </div>
          </div>

          <div className="items place-items-center md:place-content-center md:place-items-stretch content-center grid grid-cols-1 justify-center items-center gap-5 w-full h-full lg:grid-cols-2">
            <div className="cont-text flex flex-col justify-center ">
              <h1 className="text-center relative text-5xl  mb-5">التحول الرقمى</h1>
              <p className="text-[--c-text-red] text-justify">
              تسعى وزارة الاتصالات وتكنولوجيا المعلومات إلى بناء مصر الرقمية والوصول إلى مجتمع مصري يتعامل رقميًا فى كافة مناحي الحياة. ولذا تعمل على تعزيز تنمية البنية التحتية لتكنولوجيا المعلومات والاتصالات وتحسين الخدمات الرقمية في الجهات الحكومية؛ لتحسين أداء الوزارات والهيئات الحكومية الأخرى، ورفع جودة الخدمات وكفاءتها من خلال تحسين بيئة العمل، وتوفير الدعم لعملية صناعة القرار وإيجاد حلول للقضايا التي تهم المجتمع.
              </p>
            </div>
            <div className="img shadow-2xl row-start-1 md:row-start-auto w-full overflow-hidden">
              <img src="./imgs/home/2.jpg" className="w-full h-full rounded-lg" alt="Green Technology" />
            </div>
          </div>

          <div className="items place-items-center md:place-content-center md:place-items-stretch content-center grid grid-cols-1 justify-center items-center gap-5 w-full h-full lg:grid-cols-2">
            <div className="cont-text flex flex-col justify-center ">
              <h1 className="text-center relative text-5xl  mb-5">نظام التشغيل</h1>
              <p className="text-[--c-text-red] text-justify">
              نظام التشغيل هو البرنامج الأساسي أو النظام البرمجي الذي يدير موارد الجهاز ويسمح بتشغيل التطبيقات المختلفة، مثل متصفحات الإنترنت وبرامج الوسائط وغيرهما، حيث يقوم بدور الوسيط بين المستخدم ومكونات الجهاز المادية، مما يضمن تفاعل الأجهزة وتنفيذ الأوامر بكفاءة؛ كما يتحكم نظام التشغيل أيضًا في إدارة الذاكرة، والعمليات، والتخزين. وتتعدد أنواع نظام التشغيل لتناسب متطلبات الأجهزة المختلفة، مثل الهواتف الذكية، والحواسيب، والخوادم، مما يوفر بيئات تشغيل متخصصة تساهم في تحسين أداء الأنظمة وتحقيق الكفاءة العالية.
              </p>
            </div>
            <div className="img shadow-2xl row-start-1 md:row-start-auto w-full overflow-hidden">
              <img src="./imgs/home/3.jpg" className="w-full h-full rounded-lg" alt="Green Technology" />
            </div>
          </div>
        </div>

        <div className="arrow absolute flex w-full justify-center left-2/4 transform -translate-x-2/4 items-center bottom-11">
          <IoIosArrowDropright  onClick={handleArrowR} className="text-5xl text-black transition hover:text-[#777] cursor-pointer z-20 arrow_right" />
          <span ref={btn_atoCLick } onClick={handleArrowL} >

          <IoIosArrowDropleft className="text-5xl transition hover:text-[#777] text-black cursor-pointer z-20 arrow_left" />
          </span>
        </div>
      </div>
    </section>
  );
}
