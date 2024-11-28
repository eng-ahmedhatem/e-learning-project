import React, { useEffect, memo } from "react";

function Aleart_exam({ AlertStatus , goExam }) {
  const [show, setShow] = AlertStatus;

  return (
    <div className="slide-in-fwd-center Aleart_exam p-5 w-full h-[500px] bg-black  md:w-max rounded-3xl top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 md:h-max z-40 absolute ">
      <h1 className="text-center text-2xl text-[red] mb-5">تعليمات الإختبار</h1>
      <ul className="h-[75%] overflow-auto">
        <li>
          .أبجد هوز حطى كلمن هوى ، إجراءات المراقبة المعززة. التوازن ،
          الاحتياجات
        </li>
        <li>
          .أبجد هوز حطى كلمن هوى ، إجراءات المراقبة المعززة. التوازن ،
          الاحتياجات
        </li>
        <li>
          .أبجد هوز حطى كلمن هوى ، إجراءات المراقبة المعززة. التوازن ،
          الاحتياجات
        </li>
        <li>
          .أبجد هوز حطى كلمن هوى ، إجراءات المراقبة المعززة. التوازن ،
          الاحتياجات
        </li>
        <li>
          .أبجد هوز حطى كلمن هوى ، إجراءات المراقبة المعززة. التوازن ،
          الاحتياجات
        </li>
        <li>
          .أبجد هوز حطى كلمن هوى ، إجراءات المراقبة المعززة. التوازن ،
          الاحتياجات
        </li>
        <li>
          .أبجد هوز حطى كلمن هوى ، إجراءات المراقبة المعززة. التوازن ،
          الاحتياجات
        </li>
        <li>
          .أبجد هوز حطى كلمن هوى ، إجراءات المراقبة المعززة. التوازن ،
          الاحتياجات
        </li>
        <li>
          .أبجد هوز حطى كلمن هوى ، إجراءات المراقبة المعززة. التوازن ،
          الاحتياجات
        </li>
        <li>
          .أبجد هوز حطى كلمن هوى ، إجراءات المراقبة المعززة. التوازن ،
          الاحتياجات
        </li>
      </ul>
      <div className="buttons mt-5 w-full flex gap-5 justify-center items-center">
        <button onClick={()=>goExam()} className="btn grow-1 py-2 px-10 rounded-lg  bg-red-700 hover:bg-red-400 transition  text-white">
          المتابعة الى الإختبار
        </button>
        <button
          onClick={() => setShow(!show)}
          className="btn hover:bg-slate-800 transition  py-2 px-10 rounded-lg  bg-black text-white"
        >
          الغاء
        </button>
      </div>
    </div>
  );
}

export default memo(Aleart_exam);
