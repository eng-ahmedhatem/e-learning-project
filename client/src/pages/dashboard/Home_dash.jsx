import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Aleart_exam from "./Aleart_exam";
import { useSelector } from "react-redux";
import axios from "axios";
export default function Home_dash() {
  const [show_exPre_Alert, set_showAlert_exPre] = useState(false);
  const [show_exPost_Alert, set_showAlert_exPost] = useState(false);
  const [show_PreScale_Alert, set_showAlert_preScale] = useState(false);
  const [show_postScale_Alert, set_showAlert_postScale] = useState(false);
  const navigate = useNavigate();
  const [pre_And_post_exam_q, set_pre_And_post_exam_q] = useState([]);
  const user = useSelector(state => state.user);
  const userData = user && user.data ? user.data.data : null;
  useEffect(
    () => {
      if (userData.preTest_Status && userData.postTest_Status) return;
      axios
        .get("/api/exams")
        .then(d => {
          set_pre_And_post_exam_q([...d.data[0].exam_questions]);
        })
        .catch(err => {
          console.error("Error fetching data:", err);
        });
    },
    [userData.preTest_Status, userData.postTest_Status]
  );
  function handelExam_card(type) {
    if (type === "preTest") {
      set_showAlert_exPre(!show_exPre_Alert);
    }else if (type == "preScale"){
      set_showAlert_preScale(!show_PreScale_Alert);
    }else if (type == "postScale"){
      set_showAlert_postScale(!show_postScale_Alert);
    }
     else {
      set_showAlert_exPost(!show_exPost_Alert);
    }
  }
  return (
    <div className="h-[780px] overflow-auto">
      {show_exPre_Alert &&
        <Aleart_exam title={"تعليمات الإختبار"} btn_t={'الذهاب إلى الإختبار'}
          goExam={() => {
            if (userData) {
              if (userData.preTest_Status) return;
              navigate("/dashboard/exam", {
                state: {
                  userData,
                  name: "الإختبار القبلي",
                  type: "preTest",
                  q: pre_And_post_exam_q
                }
              });
            }
          }}
          AlertStatus={[show_exPre_Alert, set_showAlert_exPre]}
        >
          <li className="mb-2 list-inside list-disc">الإختبار مدتة 30 دقيقه </li>          
          <li className="mb-2 list-inside list-disc">في حالة إنقضاء مده الإختبار يتم تسجيل النتيجة </li>          
          <li className="mb-2 list-inside list-disc">تستطيع بعد انتهاء الإختبار مراجعة أجوبتك ومعرفة الإجابة الصحيحة</li>
          </Aleart_exam>}
      {show_exPost_Alert &&
        <Aleart_exam title={"تعليمات الإختبار"} btn_t={'الذهاب إلى الإختبار'}
          goExam={() => {
            if (userData) {
              if (userData.postTest_Status) return;
              navigate("/dashboard/exam", {
                state: {
                  userData,
                  name: "الإختبار البعدي",
                  type: "postTest",
                  q: pre_And_post_exam_q
                }
              });
            }
          }}
          AlertStatus={[show_exPost_Alert, set_showAlert_exPost]}
        >
          <li className="mb-2 list-inside list-disc">الإختبار مدتة 30 دقيقه </li>          
          <li className="mb-2 list-inside list-disc">في حالة إنقضاء مده الإختبار يتم تسجيل النتيجة </li>          
          <li className="mb-2 list-inside list-disc">تستطيع بعد انتهاء الإختبار مراجعة أجوبتك ومعرفة الإجابة الصحيحة</li>
          </Aleart_exam>}
      {show_PreScale_Alert &&
        <Aleart_exam title={"تعليمات المقياس"} btn_t={'الذهاب إلى المقياس القبلي'}
          goExam={() => {
            if (userData) {
              if (userData.pre_scale) return;
              navigate("/dashboard/scale", {
                state: {
                  userData,
                  name: "الإختبار البعدي",
                  type: "preScale",
                }
              });
            }
          }}
          AlertStatus={[show_PreScale_Alert, set_showAlert_preScale]}
        >
          <li>
            <h2  className="my-2">الخطوة الأولى</h2>
            <img className="object-contain" src="/imgs/dash/scale/1.png" alt="" />
            </li>          
          <li>
            <h2  className="my-2">الخطوة الثانية</h2>
            <img className="object-contain" src="/imgs/dash/scale/2.png" alt="" />
            </li>          
          <li>
            <h2  className="my-2">الخطوة الثالثة</h2>
            <img className="object-contain" src="/imgs/dash/scale/3.png" alt="" />
            </li>          
          </Aleart_exam>}
      {show_postScale_Alert &&
        <Aleart_exam title={"تعليمات المقياس"} btn_t={'الذهاب إلى المقياس البعدي'}
          goExam={() => {
            if (userData) {
              if (userData.post_scale) return;
              navigate("/dashboard/scale", {
                state: {
                  userData,
                  name: "الإختبار البعدي",
                  type: "postScale",
                }
              });
            }
          }}
          AlertStatus={[show_postScale_Alert, set_showAlert_postScale]}
        >
          <li>
            <h2 className="my-2">الخطوة الأولى</h2>
            <img className="object-contain" src="/imgs/dash/scale/1.png" alt="" />
            </li>          
          <li>
            <h2 className="my-2">الخطوة الثانية</h2>
            <img className="object-contain" src="/imgs/dash/scale/2.png" alt="" />
            </li>          
          <li>
            <h2 className="my-2">الخطوة الثالثة</h2>
            <img className="object-contain" src="/imgs/dash/scale/3.png" alt="" />
            </li>          
          </Aleart_exam>}
      <h2 className="opj-title w-max relative text-xl md:text-2xl  mb-9">
        الأقسام المتاحة
      </h2>
      <div className="cards grid grid-cols-1 md:grid-cols-2 gap-5">
        <div
          onClick={e => {
            if (userData.preTest_Status) {
              return
            }
            handelExam_card("preTest");
          }}
          className="card  relative cursor-pointer   rounded-xl overflow-hidden card-effect"
        >
          <div
            data-status={`${userData.preTest_Status ? "done" :"unDone"}`}
            className="card-content w-full h-full unDone transition bg-white  p-5 flex flex-col-reverse md:flex-row justify-between items-center rounded-xl"
          >
            <h2 className="text-2xl text-slate-500">الإختبار القبلي</h2>
            <div className="img">
              <img
                src="/imgs/dash/exam.png"
                className="w-28 h-28  md:w-52 md:h-52"
                alt="التحول الرقمى"
              />
            </div>
          </div>
        </div>
        {userData&&userData.start_pre_And_post &&       <div
          onClick={e => {
            if (userData.postTest_Status) {
              return
            }
            handelExam_card("postTest");
          }}
          className="card  relative cursor-pointer   rounded-xl overflow-hidden card-effect"
        >
          <div
            data-status={`${userData.postTest_Status ? "done" :"unDone"}`}
            className="card-content w-full h-full unDone transition bg-white  p-5 flex flex-col-reverse md:flex-row justify-between items-center rounded-xl"
          >
            <h2 className="text-2xl text-slate-500">الإختبار البعدي</h2>
            <div className="img">
              <img
                src="/imgs/dash/final_exam.png"
                className="w-28 h-28  md:w-52 md:h-52"
                alt="التحول الرقمى"
              />
            </div>
          </div>
        </div>
 }
        <div 
        onClick={e => {
          if (userData.pre_scale) {
            return
          }
          handelExam_card("preScale");
        }}
        className="card  relative cursor-pointer  rounded-xl overflow-hidden card-effect">
          <div
            data-status={`${userData.pre_scale ? "done" :"unDone"}`}
            className="card-content w-full h-full unDone transition bg-white  p-5 flex flex-col-reverse md:flex-row justify-between items-center rounded-xl"
          >
            <h2 className="text-2xl text-slate-500">المقياس القبلي</h2>
            <div className="img">
              <img
                src="/imgs/dash/poll.png"
                className="w-28 h-28  md:w-52 md:h-52"
                alt="التحول الرقمى"
              />
            </div>
          </div>
        </div>
{userData&&userData.start_pre_And_post &&         <div 
        onClick={e => {
          if (userData.post_scale) {
            return
          }
          handelExam_card("postScale");
        }}
        className="card  relative cursor-pointer  rounded-xl overflow-hidden card-effect">
          <div
            data-status={`${userData.post_scale ? "done" :"unDone"}`}
            className="card-content w-full h-full unDone transition bg-white  p-5 flex flex-col-reverse md:flex-row justify-between items-center rounded-xl"
          >
            <h2 className="text-2xl text-slate-500">المقياس البعدي</h2>
            <div className="img">
              <img
                src="/imgs/dash/poll-2.png"
                className="w-28 h-28  md:w-52 md:h-52"
                alt="التحول الرقمى"
              />
            </div>
          </div>
        </div>}
      </div>
    </div>
  );
}
