import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Aleart_exam from "./Aleart_exam";
import { useSelector } from "react-redux";
import axios from "axios";

export default function Home_dash() {
  const [show_exPre_Alert, set_showAlert_exPre] = useState(false);
  const [show_exPost_Alert, set_showAlert_exPost] = useState(false);
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
    } else {
      set_showAlert_exPost(!show_exPost_Alert);
    }
  }

  return (
    <div>
      {show_exPre_Alert &&
        <Aleart_exam
          goExam={() => {
            if (userData) {
              if (userData.preTest_Status) return;
              navigate("/dashboard/exam", {
                state: {
                  userData,
                  name: "الإختبار الأولي",
                  type: "preTest",
                  q: pre_And_post_exam_q
                }
              });
            }
          }}
          AlertStatus={[show_exPre_Alert, set_showAlert_exPre]}
        />}
      {show_exPost_Alert &&
        <Aleart_exam
          goExam={() => {
            if (userData) {
              if (userData.postTest_Status) return;
              navigate("/dashboard/exam", {
                state: {
                  userData,
                  name: "الإختبار النهائي",
                  type: "postTest",
                  q: pre_And_post_exam_q
                }
              });
            }
          }}
          AlertStatus={[show_exPost_Alert, set_showAlert_exPost]}
        />}
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
            <h2 className="text-2xl text-slate-500">الإختبار المبدئي</h2>
            <div className="img">
              <img
                src="/imgs/dash/exam.png"
                className="w-28 h-28  md:w-52 md:h-52"
                alt="التحول الرقمى"
              />
            </div>
          </div>
        </div>
        <div
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
            <h2 className="text-2xl text-slate-500">الإختبار النهائي</h2>
            <div className="img">
              <img
                src="/imgs/dash/exam.png"
                className="w-28 h-28  md:w-52 md:h-52"
                alt="التحول الرقمى"
              />
            </div>
          </div>
        </div>
        <div className="card  relative cursor-pointer  rounded-xl overflow-hidden card-effect">
          <div
            data-status="unDone"
            className="card-content w-full h-full unDone transition bg-white  p-5 flex flex-col-reverse md:flex-row justify-between items-center rounded-xl"
          >
            <h2 className="text-2xl text-slate-500">المقياس المبدئي</h2>
            <div className="img">
              <img
                src="/imgs/dash/poll.png"
                className="w-28 h-28  md:w-52 md:h-52"
                alt="التحول الرقمى"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
