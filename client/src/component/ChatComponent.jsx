import { memo, useRef, useState } from "react";
import "./chat.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoSendSharp } from "react-icons/io5";
import { GoogleGenerativeAI } from '@google/generative-ai'
const ChatComponent = ({ theStatus }) => {
  const [hidden, setHidden] = theStatus;
  const [isLoading,setIsloading] = useState(false);
  const [massages , setMassages]= useState([{from:"ai",m:"أهلا وسهلاً بك يا أحمد , اخبرني كيف استطيع مساعدتك اليوم 😊 ."}])
  const [qu, setQu] = useState("");
  const [cheked, setCheked] = useState(true);
  const body = useRef(null)
 async function handeSubmit(e){
    e.preventDefault()
    if (qu.length == 0) return;
    const bodyData = massages.filter(ele => ele)
    bodyData.push({from:"user",m:qu})
    // setMassages(prev => prev =[...massages,{from:"user",m:qu}])
    setQu("")
    setMassages(prev => prev= bodyData)
    const genAI = new GoogleGenerativeAI('AIzaSyBidlDAeojoqqJJ9MGGXlxA_X_0DPE0Jxs');
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const prompt = qu;
    try {
      setIsloading(true);
      const response = await model.generateContent(prompt);
      bodyData.push({from:"ai",m:response.response.text()})
      setMassages(prev => prev= bodyData)

     } catch (error) {
       console.error('Error generating content:', error);

    }finally{
      setIsloading(false);
    } 
    








  }
  return (
    <div className={`relative w-full h-full overflow-x-hidden overflow-y-auto`} >
      <div className="chat-header h-max mb-12 md:mb-11 relative p-2 md:p-5 flex justify-between items-center">
        <div className="flex flex-row-reverse justify-center items-center">
          <div className="checkbox-wrapper-4 flex justify-center items-center">
            <input checked={cheked} onChange={(e)=> setCheked(e.target.checked)} className="inp-cbx" id="morning" type="checkbox" />
            <label className="cbx" htmlFor="morning">
              <span>
                <svg width="12px" height="10px">
                  <use xlinkHref="#check-4" />
                </svg>
              </span>
              <span className="text-selected text-sm md:text-base">الوضع الإحترافي</span>
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
          <h2 className=" ml-1 text-center md:ml-2 text-sm md:text-base text-white">المساعد الذكي</h2>
          <div className="img flex rounded-full  bg-white justify-center  md:w-[80px] md:h-[80px] w-[50px] h-[50px] items-center">
            <img
              src="/imgs/dash/chatbot.png"
              className="w-[40px] h-[30px] md:w-[60px] md:h-[60px] "
              draggable={false}
              alt=""
            />
          </div>
        </div>
      </div>
      <div ref={body} className="chat_body overflow-x-hidden  md:min-h-[70%] min-h-[75%] pb-12 md:max-h-[70%]  max-h-[70%]  overflow-auto ">
        <div className="body-cont grid gap-2 w-4/5 mx-auto ">
        {massages.map((ele , indx)=>{
          return (
            <p key={indx} data-massage={ele.from == "user" ? "user" : "ai"}  className={`p-3  text-ellipsis break-words  new-m-ai md:min-w-[160px] text-sm md:text-base  min-w-full !text-black  text-wrap relative !w-2/4 `}>
              {ele.m}
          </p>
          )
        })}
      {isLoading &&  <p data-Massage="ai" className="p-3  relative  w-max h-max">
        <div className="wrapper">
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="shadow"></div>
    <div className="shadow"></div>
    <div className="shadow"></div>
</div>
          </p>}
        </div>
      </div>
      <div className="cahat-foot  z-50 ">
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
