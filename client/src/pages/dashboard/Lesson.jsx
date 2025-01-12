import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Accordion from "../../component/Accordion";
import { useEffect, useState } from "react";
import ChatComponent from "../../component/ChatComponent";

export default function Lesson() {
  const { order } = useParams();
  const [hidden , setHidden ] = useState(true)
  const navigate = useNavigate();
  const lessons = useSelector(state => state.lessons.data) || [];
  const userProgress = useSelector(state=> state.lessonProgress.data) || []
  const user = useSelector(state => state.user.data.data) || {};
  const isUserAuthorized = user.role === "student" && user.group === "ex";
  const lesson =
  user.group === "ex" ? lessons.find(ele => ele.order === +order) : null;
  const currentLesson_userProgress = userProgress && userProgress.find(ele => ele.Lesson_id._id == lesson._id) || []

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
    <section className="lesson pb-[160px] bg-[#ecf0f4] ">
      <div onClick={()=>setHidden(!hidden)} className="ai-btn fixed z-50 left-2 bottom-14 lg:left-10 lg:bottom-9">
        <img className="w-14 lg:hidden" src="/imgs/dash/chatbot.png" alt="" />
        <div className="hidden lg:block">

        <button type=" button" className="btn">
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
      </div>
  {!hidden &&   <div className={` ${hidden ? "":"scale-in-hor-left"}  theAI fixed  transition z-50 w-full h-full top-0 right-0`}>

<div  className={` fixed  bg-slate-100 overflow-hidden -translate-x-2/4 rounded-3xl shadow-2xl   -translate-y-2/4  top-2/4 left-2/4 w-[95%] md:w-5/6  h-[90%] `}>
  <ChatComponent theStatus ={  [hidden , setHidden ] }  userName={user.userName}/>
</div>
</div>
}
      <h2 className=" justify-center items-center lg:justify-start  gap-2  lesson_title flex text-wrap w-full flex-col 2xl:flex-row flex-wrap md:flex-nowrap text-lg lg:text-[25px] xl:text-4xl  my-5 md:mb-9">
        <span className=" text-[--c-text-blue]">
          الدرس {lesson.order_ar} :-
        </span>
        <span className=" text-[14px] md:text-lg  lg:text-[25px] xl:text-4xl  md:mr-3 text-wrap inline-block text-[--c-text-red]">
          {lesson.title}
        </span>
      </h2>
      <Accordion status={true} title="أهداف الدرس">
        <ul className="transition">
          {lesson.objectives.map((ele, index) =>
            <li
              className="mb-4 mr-3 text-sm md:text-lg  text-slate-600 pr-2 li_dash-objectives"
              key={index}
            >
              {ele}
            </li>
          )}
        </ul>
      </Accordion>
      <Accordion status={false} title="شرح الدرس">
      <div
  style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}
  className="w-full h-0"
>
  <iframe
    className="absolute top-0 left-0 w-full h-full object-cover"
    src={lesson.videoLink}
    frameBorder="0"
    allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
    title="lesson_4"
  ></iframe>
</div>

      </Accordion>
      <Accordion status={false} title="الأنشـــطة">
        <ul className="transition">
          {lesson.task.map((ele, index) =>
            <li
              className="mb-4 text-sm md:text-lg leading-10 mr-3 pr-2  text-slate-600 li_dash-objectives"
              key={index}
            >
              {ele}
            </li>
          )}
        </ul>
      </Accordion>
      <p className="my-5 text-center text-base lg:text-xl  text-[--c-text-blue]">
        روابط هامة تساعدك على الفهم والإستيعاب بشكل افضل
      </p>
      <div className="foot">
        <div className="buttons_lessons place-items-center grid gap-3 grid-cols-1  lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-center items-center">
          {lesson.links.map((ele, index) =>
            <Link to={ele.trim()} target="_blank" key={index}>
              <button className="!text-sm !md:text-base !lg:text-lg">
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
        <div className="w-max flex flex-col justify-center items-center mt-5 gap-5 mx-auto">
          <h2 className=" md:w-max lesson_title_2 relative text-base md:text-3xl ">
            <span className="md:mr-3 inline-block  text-center text-[--c-text-red]">
            {`إختبار الدرس  ${lesson.order_ar}`}
            </span>
          </h2>
            <p style={{fontFamily:"var(--secondFont)"}} className="text-center">  <span className="font-bold text-blue-700"> ملحوظة :-</span> إذا حصلت على درجة في الإختبار <br/>  بما يًعادل <span className="text-[green]">50%</span>  <br/> يعتبر الإختبار مكتمل وتستطيع الإنتقال <br/> للدرس التالي </p>
          <button
            onClick={() =>
              navigate(`${currentLesson_userProgress && currentLesson_userProgress.completed ? "":"/dashboard/exam"   }` , {
                state: currentLesson_userProgress && currentLesson_userProgress.completed ? "" : {
                  type: "lessonTest",
                  userData: user,
                  lesson: lesson._id,
                  q: lesson.test.exam_questions,
                  name: "اختبار " + lesson.title
                }
              })}
            className={`${currentLesson_userProgress && currentLesson_userProgress.completed ? "!text-white pointer-events-none !bg-[green]":"!text-red-800 !bg-[--c-text-red]"   }  !w-max !text-sm !md:text-base !lg:text-lg   !px-5 aa hover:!text-[#fff] hover:!shadow-[--c-text-red] `}
          >
            {`${currentLesson_userProgress && currentLesson_userProgress.completed ? "لقد أكملت اختبار هذا الدرس  بالفعل":"اضغط هنا للإنتقال الى الإختبار"   } `}{" "}
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
