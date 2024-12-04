import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Accordion from "../../component/Accordion";
import { useEffect } from "react";

export default function Lesson() {
  const { order } = useParams();
  const navigate = useNavigate();
  const lessons = useSelector(state => state.lessons.data) || [];
  const user = useSelector(state => state.user.data.data) || {};
  const isUserAuthorized = user.role === "student" && user.group === "ex";
  const lesson = user.group === "ex" ? lessons.find(ele => ele.order === +order) : null;

  useEffect(
    () => {
      console.log(lesson)
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
    <section className="lesson ">
      <div className="ai-btn fixed  z-50 left-10 bottom-9">
        <button type="button" className="btn">
          <strong>المساعد الذكي</strong>
          <div id="container-stars">
            <div id="stars" />
          </div>

          <div id="glow">
            <div className="circle" />
            <div className="circle" />
          </div>
        </button>
      </div>


      <h2 className=" w-max lesson_title flex flex-wrap  text-lg md:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl my-5 md:mb-9">
        <span className=" text-[--c-text-blue]">
          الدرس {lesson.order_ar} :-
        </span>
        <span className="mr-3 inline-block text-[--c-text-red]">
          {lesson.title}
        </span>
      </h2>
      <Accordion status={true} title="أهداف الدرس">
        <ul className="transition">
          {lesson.objectives.map((ele, index) =>
            <li
              className="mb-4 mr-3 text-base md:text-lg  text-slate-600 pr-2 li_dash-objectives"
              key={index}
            >
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
            className="h-full  md:h-[600px] object-cover"
            src={lesson.videoLink}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
            }}
          />
        </div>
      </Accordion>
      <Accordion status={false} title="الأنشـــطة">
        <ul className="transition">
          {lesson.task.map((ele, index) =>
            <li
              className="mb-4 text-base md:text-lg leading-10 mr-3 pr-2  text-slate-600 li_dash-objectives"
              key={index}
            >
              {ele}
            </li>
          )}
        </ul>
      </Accordion>
      <p className="my-5 text-center text-lg lg:text-xl  text-[--c-text-blue]">
        روابط هامة تساعدك على الفهم والإستيعاب بشكل افضل
      </p>
      <div className="foot">
        <div className="buttons_lessons place-items-center grid gap-3 grid-cols-1  lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-center items-center">
          {lesson.links.map((ele, index) =>
            <Link to={ele.trim()} target="_blank" key={index}>
              <button>
                اضغط هنا للإنتقال الى الرابط<div className="star-1">
                  {" "}<svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd"
                    }}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    {" "}<defs />{" "}
                    <g id="Layer_x0020_1">
                      {" "}<metadata id="CorelCorpID_0Corel-Layer" />{" "}
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      />{" "}
                    </g>{" "}
                  </svg>{" "}
                </div>{" "}
                <div className="star-2">
                  {" "}<svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd"
                    }}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    {" "}<defs />{" "}
                    <g id="Layer_x0020_1">
                      {" "}<metadata id="CorelCorpID_0Corel-Layer" />{" "}
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      />{" "}
                    </g>{" "}
                  </svg>{" "}
                </div>{" "}
                <div className="star-3">
                  {" "}<svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd"
                    }}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    {" "}<defs />{" "}
                    <g id="Layer_x0020_1">
                      {" "}<metadata id="CorelCorpID_0Corel-Layer" />{" "}
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      />{" "}
                    </g>{" "}
                  </svg>{" "}
                </div>{" "}
                <div className="star-4">
                  {" "}<svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd"
                    }}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    {" "}<defs />{" "}
                    <g id="Layer_x0020_1">
                      {" "}<metadata id="CorelCorpID_0Corel-Layer" />{" "}
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      />{" "}
                    </g>{" "}
                  </svg>{" "}
                </div>{" "}
                <div className="star-5">
                  {" "}<svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd"
                    }}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    {" "}<defs />{" "}
                    <g id="Layer_x0020_1">
                      {" "}<metadata id="CorelCorpID_0Corel-Layer" />{" "}
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      />{" "}
                    </g>{" "}
                  </svg>{" "}
                </div>{" "}
                <div className="star-6">
                  {" "}<svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd"
                    }}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    {" "}<defs />{" "}
                    <g id="Layer_x0020_1">
                      {" "}<metadata id="CorelCorpID_0Corel-Layer" />{" "}
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      />{" "}
                    </g>{" "}
                  </svg>{" "}
                </div>{" "}
              </button>
            </Link>
          )}
        </div>
        <div className="w-max mx-auto">
          <h2 className=" w-max lesson_title_2 relative text-xl mt-5 md:text-3xl mb-9">
            <span className="mr-3 inline-block text-center text-[--c-text-red]">
              اختبار الدرس الأول
            </span>
          </h2>
            <button onClick={()=> navigate("/dashboard/exam",{
              state:{
                type:"lessonTest",
                userData:user,
                lesson:lesson._id,
                q:lesson.test.exam_questions,
                name:"اختبار " + lesson.title 

                
              }
            })} className="!text-red-800 !w-max  !px-5 aa hover:!text-[#fff] hover:!shadow-[--c-text-red] !bg-[--c-text-red]">
              اضغط هنا للإنتقال الى الإختبار{" "}
              <div className="star-1">
                {" "}<svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  version="1.1"
                  style={{
                    shapeRendering: "geometricPrecision",
                    textRendering: "geometricPrecision",
                    imageRendering: "optimizeQuality",
                    fillRule: "evenodd",
                    clipRule: "evenodd"
                  }}
                  viewBox="0 0 784.11 815.53"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  {" "}<defs />{" "}
                  <g id="Layer_x0020_1">
                    {" "}<metadata id="CorelCorpID_0Corel-Layer" />{" "}
                    <path
                      className="fil0"
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    />{" "}
                  </g>{" "}
                </svg>{" "}
              </div>{" "}
              <div className="star-2">
                {" "}<svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  version="1.1"
                  style={{
                    shapeRendering: "geometricPrecision",
                    textRendering: "geometricPrecision",
                    imageRendering: "optimizeQuality",
                    fillRule: "evenodd",
                    clipRule: "evenodd"
                  }}
                  viewBox="0 0 784.11 815.53"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  {" "}<defs />{" "}
                  <g id="Layer_x0020_1">
                    {" "}<metadata id="CorelCorpID_0Corel-Layer" />{" "}
                    <path
                      className="fil0"
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    />{" "}
                  </g>{" "}
                </svg>{" "}
              </div>{" "}
              <div className="star-3">
                {" "}<svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  version="1.1"
                  style={{
                    shapeRendering: "geometricPrecision",
                    textRendering: "geometricPrecision",
                    imageRendering: "optimizeQuality",
                    fillRule: "evenodd",
                    clipRule: "evenodd"
                  }}
                  viewBox="0 0 784.11 815.53"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  {" "}<defs />{" "}
                  <g id="Layer_x0020_1">
                    {" "}<metadata id="CorelCorpID_0Corel-Layer" />{" "}
                    <path
                      className="fil0"
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    />{" "}
                  </g>{" "}
                </svg>{" "}
              </div>{" "}
              <div className="star-4">
                {" "}<svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  version="1.1"
                  style={{
                    shapeRendering: "geometricPrecision",
                    textRendering: "geometricPrecision",
                    imageRendering: "optimizeQuality",
                    fillRule: "evenodd",
                    clipRule: "evenodd"
                  }}
                  viewBox="0 0 784.11 815.53"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  {" "}<defs />{" "}
                  <g id="Layer_x0020_1">
                    {" "}<metadata id="CorelCorpID_0Corel-Layer" />{" "}
                    <path
                      className="fil0"
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    />{" "}
                  </g>{" "}
                </svg>{" "}
              </div>{" "}
              <div className="star-5">
                {" "}<svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  version="1.1"
                  style={{
                    shapeRendering: "geometricPrecision",
                    textRendering: "geometricPrecision",
                    imageRendering: "optimizeQuality",
                    fillRule: "evenodd",
                    clipRule: "evenodd"
                  }}
                  viewBox="0 0 784.11 815.53"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  {" "}<defs />{" "}
                  <g id="Layer_x0020_1">
                    {" "}<metadata id="CorelCorpID_0Corel-Layer" />{" "}
                    <path
                      className="fil0"
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    />{" "}
                  </g>{" "}
                </svg>{" "}
              </div>{" "}
              <div className="star-6">
                {" "}<svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  version="1.1"
                  style={{
                    shapeRendering: "geometricPrecision",
                    textRendering: "geometricPrecision",
                    imageRendering: "optimizeQuality",
                    fillRule: "evenodd",
                    clipRule: "evenodd"
                  }}
                  viewBox="0 0 784.11 815.53"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  {" "}<defs />{" "}
                  <g id="Layer_x0020_1">
                    {" "}<metadata id="CorelCorpID_0Corel-Layer" />{" "}
                    <path
                      className="fil0"
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    />{" "}
                  </g>{" "}
                </svg>{" "}
              </div>{" "}
            </button>
        </div>
      </div>
    </section>
  );
}
