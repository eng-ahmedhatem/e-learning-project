import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Aleart_exam from "./Aleart_exam";

export default function Home_dash() {
  const [show_exAlert, setshowAlert] = useState(false);
  const navigate = useNavigate();

  

  function handelExam_card() {
    setshowAlert(!show_exAlert);
  }

  return (
    <div>
      {show_exAlert && (
        <Aleart_exam
          goExam={() => navigate("/dashboard/exam")}
          AlertStatus={[show_exAlert, setshowAlert]}
        />
      )}
      <h2 className="opj-title w-max relative text-xl md:text-2xl  mb-9">
        الأقسام المتاحة
      </h2>
      <div className="cards grid grid-cols-1 md:grid-cols-2 gap-5">
        <div
          onClick={handelExam_card}
          className="card  relative cursor-pointer   rounded-xl overflow-hidden card-effect"
        >
          <div
            data-status="unDone"
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
        <div className="card  relative cursor-pointer  rounded-xl overflow-hidden card-effect">
          <div
            data-status="done"
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
