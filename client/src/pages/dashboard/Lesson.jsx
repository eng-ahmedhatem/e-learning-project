import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Accordion from "../../component/Accordion";

export default function Lesson() {
  const { order } = useParams();
  const navigate = useNavigate();
  const lessons = useSelector(state => state.lessons.data) || [];
  const user = useSelector(state => state.user.data.data) || {};
  const isUserAuthorized = user.role === "student" && user.group === "ex";
  const lesson =
    user.group === "ex" ? lessons.find(ele => ele.order === +order) : null;

  useEffect(
    () => {
      if (!isUserAuthorized || !lesson) {
        navigate("/dashboard/home", { replace: true });
      }
    },
    [isUserAuthorized, lesson, navigate]
  );

  if (!isUserAuthorized || !lesson) {
    return null;
  }


  return (
    <section className="lesson pb-8">
      <h2 className=" w-max lesson_title relative text-xl md:text-4xl mb-9">
        
        <span className=" text-[--c-text-blue]">الدرس {lesson.order_ar} :-</span>
        <span className="mr-3 inline-block text-[--c-text-red]">

          {lesson.title}
        {console.log(lesson)}
        </span>
      </h2>
      <Accordion status={true} title="أهداف الدرس">
        <ul className="transition">
          {lesson.objectives.map((ele, index) =>
            <li className="mb-4 mr-3 text-slate-600 pr-2 li_dash-objectives" key={index}>
              {ele}
            </li>
          )}
        </ul>
      </Accordion>
      <Accordion status={false} title="شرح الدرس">
        <div
          style={{ position: "relative" }}
          className="h-[600px] object-cover"
        >
          <iframe
            className="object-cover"
            src={lesson.videoLink}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "600px"
            }}
          />
        </div>
      </Accordion>
      <Accordion status={false} title="الأنشـــطة">
        <ul className="transition">
          {lesson.task.map((ele, index) =>
            <li className="mb-4 mr-3 pr-2  text-slate-600 li_dash-objectives" key={index}>
              {ele}
            </li>
          )}
        </ul>
      </Accordion>
      <p className="my-5 text-xl  text-slate-600">

        روابط هامة تساعدك على الفهم والإستيعاب بشكل افضل 
      </p>


<div className="buttons_lessons place-items-center grid gap-3 grid-cols-1  lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-center items-center">
          {lesson.links.map((ele, index) =>
            <Link to={ele} target="_blank" key={index}>
              <button>اضغط هنا للإنتقال الى الرابط<div className="star-1"> <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }} viewBox="0 0 784.11 815.53" xmlnsXlink="http://www.w3.org/1999/xlink" > <defs></defs> <g id="Layer_x0020_1"> <metadata id="CorelCorpID_0Corel-Layer"></metadata> <path className="fil0" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" ></path> </g> </svg> </div> <div className="star-2"> <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }} viewBox="0 0 784.11 815.53" xmlnsXlink="http://www.w3.org/1999/xlink" > <defs></defs> <g id="Layer_x0020_1"> <metadata id="CorelCorpID_0Corel-Layer"></metadata> <path className="fil0" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" ></path> </g> </svg> </div> <div className="star-3"> <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }} viewBox="0 0 784.11 815.53" xmlnsXlink="http://www.w3.org/1999/xlink" > <defs></defs> <g id="Layer_x0020_1"> <metadata id="CorelCorpID_0Corel-Layer"></metadata> <path className="fil0" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" ></path> </g> </svg> </div> <div className="star-4"> <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }} viewBox="0 0 784.11 815.53" xmlnsXlink="http://www.w3.org/1999/xlink" > <defs></defs> <g id="Layer_x0020_1"> <metadata id="CorelCorpID_0Corel-Layer"></metadata> <path className="fil0" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" ></path> </g> </svg> </div> <div className="star-5"> <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }} viewBox="0 0 784.11 815.53" xmlnsXlink="http://www.w3.org/1999/xlink" > <defs></defs> <g id="Layer_x0020_1"> <metadata id="CorelCorpID_0Corel-Layer"></metadata> <path className="fil0" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" ></path> </g> </svg> </div> <div className="star-6"> <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }} viewBox="0 0 784.11 815.53" xmlnsXlink="http://www.w3.org/1999/xlink" > <defs></defs> <g id="Layer_x0020_1"> <metadata id="CorelCorpID_0Corel-Layer"></metadata> <path className="fil0" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" ></path> </g> </svg> </div> </button>
            </Link>
          )}

</div>
          <div className="w-max mx-auto">
          <h2 className=" w-max lesson_title_2 relative text-xl mt-5 md:text-3xl mb-9">
        
        <span className="mr-3 inline-block text-[--c-text-red]">
          اختبار الدرس الأول 
        </span>
      </h2>
            <Link>
            
            <button className="!text-red-800 aa hover:!text-[#fff] hover:!shadow-[--c-text-red] !bg-[--c-text-red]">اضغط هنا للإنتقال الى الإختبار <div className="star-1"> <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }} viewBox="0 0 784.11 815.53" xmlnsXlink="http://www.w3.org/1999/xlink" > <defs></defs> <g id="Layer_x0020_1"> <metadata id="CorelCorpID_0Corel-Layer"></metadata> <path className="fil0" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" ></path> </g> </svg> </div> <div className="star-2"> <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }} viewBox="0 0 784.11 815.53" xmlnsXlink="http://www.w3.org/1999/xlink" > <defs></defs> <g id="Layer_x0020_1"> <metadata id="CorelCorpID_0Corel-Layer"></metadata> <path className="fil0" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" ></path> </g> </svg> </div> <div className="star-3"> <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }} viewBox="0 0 784.11 815.53" xmlnsXlink="http://www.w3.org/1999/xlink" > <defs></defs> <g id="Layer_x0020_1"> <metadata id="CorelCorpID_0Corel-Layer"></metadata> <path className="fil0" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" ></path> </g> </svg> </div> <div className="star-4"> <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }} viewBox="0 0 784.11 815.53" xmlnsXlink="http://www.w3.org/1999/xlink" > <defs></defs> <g id="Layer_x0020_1"> <metadata id="CorelCorpID_0Corel-Layer"></metadata> <path className="fil0" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" ></path> </g> </svg> </div> <div className="star-5"> <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }} viewBox="0 0 784.11 815.53" xmlnsXlink="http://www.w3.org/1999/xlink" > <defs></defs> <g id="Layer_x0020_1"> <metadata id="CorelCorpID_0Corel-Layer"></metadata> <path className="fil0" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" ></path> </g> </svg> </div> <div className="star-6"> <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }} viewBox="0 0 784.11 815.53" xmlnsXlink="http://www.w3.org/1999/xlink" > <defs></defs> <g id="Layer_x0020_1"> <metadata id="CorelCorpID_0Corel-Layer"></metadata> <path className="fil0" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" ></path> </g> </svg> </div> </button>
            
            </Link>
          </div>
    </section>
  );
}
