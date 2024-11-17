import React from 'react'
import "./home.css"
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";

export default function Home() {
  function handel_arrow_r (){
    const slider = document.querySelector(".slider")
    const all_items = document.querySelectorAll(".items")
    slider.append(all_items[0])
  }
  function handel_arrow_l (){
    const slider = document.querySelector(".slider");
    const all_items = document.querySelectorAll(".items")
    slider.prepend(all_items[all_items.length - 1])
  }
  return (
    <section className='home relative '>
      <div className="slider">
        <div className="items" style={{backgroundImage:`url(./imgs/home/8.webp)`}}>
            <div className="content">
              <h1>التكنولوجيا الخضراء</h1>
              <p>.أبجد هوز حطى كلمن هوى ، حسومات محسنة. امتنع عن سعادتها الحكيمة ، من خارجها ، وتملقها ، ألا تعرف كيف تتحرر من بعض المستكشف المولود للعقل أنه كذلك؟ بالنسبة لبعض الآلام ، ولكن هذا ليس من الحكمة إدارة الأيدي الكبيرة ، يتبع ممارسة المتعة هنا. إعاقة آلام طبيعة الهروب بحيث يتم إبرام جميع المحاضرين الرئيسيين بشكل فاسد.</p>
            </div>
        </div>
        <div className="items" style={{backgroundImage:`url(./imgs/home/tec_green.webp)`}} data-type="tec-g">
            <div className="content">
              <h1>التكنولوجيا الخضراء</h1>
              <p>وٌجِدَت التكنولوجيا الخضراء لهدفٍ نبيل وهو مساعدة البيئة قدر المستطاع، من خلال الاستغناء عن التقنيات القديمة الضارة والحد من آثارها وإصلاح الأضرار الماضية التي لحقت بها.
إنها تقدم جرعة من الأمل لنواجه التغير المُناخي والتلوث على حدً سواء، وستكون التوجه المستقبلي وستغير منظور العالم حول حماية البيئة والحفاظ عليها.
</p>
            </div>
        </div>
        <div className="items" style={{backgroundImage:`url(./imgs/home/1.webp)`}}>
            <div className="content">
              <h1 className='flex '>
                
              التكنولوجيا الخضراء
              </h1>
              <p>.أبجد هوز حطى كلمن هوى ، حسومات محسنة. امتنع عن سعادتها الحكيمة ، من خارجها ، وتملقها ، ألا تعرف كيف تتحرر من بعض المستكشف المولود للعقل أنه كذلك؟ بالنسبة لبعض الآلام ، ولكن هذا ليس من الحكمة إدارة الأيدي الكبيرة ، يتبع ممارسة المتعة هنا. إعاقة آلام طبيعة الهروب بحيث يتم إبرام جميع المحاضرين الرئيسيين بشكل فاسد.</p>
            </div>
        </div>
        <div className="items" style={{backgroundImage:`url(./imgs/home/2.webp)`}}>
            <div className="content">
              <h1>التكنولوجيا الخضراء</h1>
              <p>.أبجد هوز حطى كلمن هوى ، حسومات محسنة. امتنع عن سعادتها الحكيمة ، من خارجها ، وتملقها ، ألا تعرف كيف تتحرر من بعض المستكشف المولود للعقل أنه كذلك؟ بالنسبة لبعض الآلام ، ولكن هذا ليس من الحكمة إدارة الأيدي الكبيرة ، يتبع ممارسة المتعة هنا. إعاقة آلام طبيعة الهروب بحيث يتم إبرام جميع المحاضرين الرئيسيين بشكل فاسد.</p>
            </div>
        </div>
        
      </div>
      <div className="arrow absolute flex w-full justify-center items-center bottom-11">
      <IoIosArrowDropright onClick={handel_arrow_r}  className="text-5xl text-white cursor-pointer z-20  arrow_right" /> 
      <IoIosArrowDropleft  onClick={handel_arrow_l} className=" text-5xl text-white cursor-pointer z-20 arrow_left " /> 

      </div>

    </section>
  )
}
