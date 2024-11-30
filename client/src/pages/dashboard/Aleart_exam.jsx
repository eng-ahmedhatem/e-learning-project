import React, { useEffect, memo } from "react";

function Aleart_exam({ AlertStatus , goExam ,btn_t , children ,title}) {
  const [show, setShow] = AlertStatus;

  return (
    <div className="slide-in-fwd-center Aleart_exam p-2 lg:p-5 w-full  bg-black  md:w-max rounded-3xl top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 h-max z-40 absolute ">
      <h1 className=" title text-center text-3xl text-[red] mb-5">{title}</h1>
      <ul className="h-max ">
        {children}
      </ul>
      <div className="buttons mt-5 w-full flex gap-5 justify-center items-center">
        <button onClick={()=>goExam()} className="btn  grow-1 py-2 px-5 text-sm lg:text-lg lg:px-10 rounded-lg  bg-red-700 hover:bg-red-400 transition  text-white">
         {btn_t}
        </button>
        <button
          onClick={() => setShow(!show)}
          className="btn  hover:bg-slate-800 transition  py-2 px-5 text-sm lg:text-lg lg:px-10 rounded-lg  bg-black text-white"
        >
          الغاء
        </button>
      </div>
    </div>
  );
}

export default memo(Aleart_exam);
