import React, { useEffect } from "react";
import "./info.css";
import { useSelector } from "react-redux";
import { Loader } from "../../../component";
import { useNavigate } from "react-router-dom";

function Ex_Info() {
  const data = [
    { t: "التكنولوجيا الخضراء", score: 50 },
    { t: "التكنولوجيا الخضراء", score: 150 },
    { t: "التكنولوجيا الخضراء", score: 80 }
  ];
  return (
    <>
      <h2 style={{textDecoration:"1px  wavy  var(--c-text-blue) underline"}} className="text-[#435986]  mx-auto  decoration-wavy w-max relative text-xl md:text-4xl mb-5 lg:mb-10">
        نتائج الدروس
      </h2>
          <div className="bg-white rounded-xl ">
            <div className="cards grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 p-2 lg:p-5">

            {data.map((item, index) => (
                  <div key={index} className="z-[1] card-info flex bg-[#ecf0f4] p-5 lg:p-10 rounded-lg relative justify-center items-center flex-col ">
                    <div className="card-info__title text-base lg:text-xl mb-2">{item.t}</div>
                    <div className="card-info__score text-3xl text-[--c-text-blue]">{item.score}</div>
                    <span className="absolute z-[-1] text-7xl lg:text-9xl text-[#ffffffc9] top-[0px] right-[15px]">{index + 1}</span>
                  </div>
                ))}
            </div>
            
    </div>
    </>
  );
}

export default function Info() {
  const user = useSelector(state => state.user);
  const userData = user && user.data ? user.data.data : null;
  if (!userData) {
    return <Loader />;
  }
  const navigate = useNavigate()
  useEffect(()=>{
    if(userData.role == "admin") navigate("/dashboard/home") ;
  },[navigate])
if(userData.role == "admin") return ;
  return (
    <section className="info  overflow-hidden">
      <div className="info__head mb-5 grid justify-between grid-cols-1 lg:grid-cols-2 bg-white p-2 lg:p-6 rounded-xl">
        <div className="t-right flex-wrap mb-5 lg:mb-0 flex items-center justify-center lg:justify-start ">
          <div className="img mb-5 lg:mb-0 border border-[--c-text-blue] rounded-full bg-[#ecf0f4]">
            <img
              className="w-[60px] h-[60px] lg:w-[110px] lg:h-[100px]"
              src="/imgs/dash/userAvatar.png"
              alt=""
            />
          </div>
          <div className="mr-0 lg:mr-5  text-center lg:text-start">
            <h2 className="text-base lg:text-xl mb-2">
              {userData.userName}
            </h2>
            <p className="text-base lg:text-xl text-[--c-text-blue]">
              {userData.email}
            </p>
          </div>
        </div>
        <div className="t-left flex justify-end gap-5 lg:gap-5 text-center items-center">
          <div className=" rounded-lg bg-[#ecf0f4] p-5">
            <h2 className="text-base lg:text-xl mb-2">
              نتيجة الإختبار المبدئي
            </h2>
            <p className="text-3xl ">
              <span className="text-[--c-text-blue]">{userData.preTest_Score.toString()}</span> \
              <span> 40 </span>
            </p>
          </div>
          <div className=" rounded-lg bg-[#ecf0f4] p-5">
            <h2 className="text-base lg:text-xl mb-2">
              نتيجة الإختبار النهائي
            </h2>
            <p className="text-3xl ">
              <span className="text-[--c-text-blue]">{userData.postTest_Score.toString()}</span> \
              <span> 40 </span>
            </p>
          </div>
        </div>
      </div>
      {userData.group == "ex" ? <Ex_Info /> : ""}
      
    </section>
  );
}
