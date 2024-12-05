import { memo, useRef, useState } from "react";
import "./chat.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoSendSharp } from "react-icons/io5";

const ChatComponent = ({ theStatus }) => {
  const [hidden, setHidden] = theStatus;
  const [massages , setMassages]= useState([{from:"ai",m:"مرحبا يا احمد "}])
  const [qu, setQu] = useState("");
  const body = useRef(null)

  function handeSubmit(e){
    e.preventDefault()
    setMassages(prev => prev =[...massages,{from:"user",m:qu}])
    console.log(massages)
    
  }
  return (
    <div className={` w-full h-full`}>
      <div className="chat-header h-max mb-11 relative p-5 flex justify-between items-center">
        <div className="flex flex-row-reverse justify-center items-center">
          <div className="checkbox-wrapper-4">
            <input checked={true} className="inp-cbx" id="morning" type="checkbox" />
            <label className="cbx" htmlFor="morning">
              <span>
                <svg width="12px" height="10px">
                  <use xlinkHref="#check-4" />
                </svg>
              </span>
              <span className="text-selected">الوضع الإحترافي</span>
            </label>
            <svg className="inline-svg">
              <symbol id="check-4" viewBox="0 0 12 10">
                <polyline points="1.5 6 4.5 9 10.5 1" />
              </symbol>
            </svg>
          </div>

          <div className="close">
            <span
              onClick={() => setHidden(!hidden)}
              className="text-4xl text-slate-50 hover:opacity-80 cursor-pointer transition"
            >
              <IoIosCloseCircleOutline />
            </span>
          </div>
        </div>
        <div className="chatInfo flex justify-center items-center">
          <h2 className=" ml-2 text-white">المساعد الذكي</h2>
          <div className="img flex rounded-full  bg-white justify-center  w-[80px] h-[80px] items-center">
            <img
              src="/imgs/dash/chatbot.png"
              className="w-[60px] h-[60px] "
              draggable={false}
              alt=""
            />
          </div>
        </div>
      </div>

      <div ref={body} className="chat_body  min-h-[70%] pb-5 max-h-[70%] overflow-auto ">
        <div className="body-cont grid gap-2 w-4/5 mx-auto ">
        {massages.map((ele , indx)=>{
          return (
            <p key={indx} data-massage={ele.from == "user" ? "user" : "ai"}  className="p-3    relative  w-max h-max">
              {ele.m}
          </p>
          )
        })}
        </div>
      </div>
      <div className="cahat-foot  ">
        <div className="container mx-auto">
          <form onSubmit={(e)=>handeSubmit(e)} className="input  relative">
            <input
            value={qu}
            onChange={(e)=>setQu(e.target.value)}
              type="text"
              className="w-full px-4 py-3  text-gray-700 focus:outline-none rounded-3xl"
              placeholder="اكتب رسالتك هنا..."
            />
            <button className={` ${qu.length ==  0 && "opacity-50 cursor-not-allowed pointer-events-none" } rotate-180 text-xl absolute top-2/4  -translate-y-2/4 left-2  bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full `}>
              <IoSendSharp />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default memo(ChatComponent);
