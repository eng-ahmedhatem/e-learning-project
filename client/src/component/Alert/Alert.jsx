import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import "./Alert.css";
export default function Alert({ title, body, type }) {
  const [isEnd, setIs_end] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelector(`.alert-${type}`).classList.add("alert-out");
      setIs_end(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const tt = setTimeout(() => {
      isEnd && document.querySelector(`.alert-${type}`).remove();
    }, 800);
    return () => clearTimeout(tt);
  }, [isEnd]);
  function handelClose() {
    document.querySelector(`.alert-${type}`).classList.add("alert-out");
    const tt = setTimeout(() => {
      isEnd && document.querySelector(`.alert-${type}`).remove();
    }, 800);
    return () => clearTimeout(tt);
  }
  return (
    <div
      className={`alert alert-${type} absolute w-96 h-max text-center rounded-lg top-2 right-5 lg:right-20 overflow-hidden`}
    >
      <div className="content-t p-2 ">
        <i className="text-2xl cursor-pointer" onClick={handelClose}>
          <IoClose />
        </i>
        <h1 className="text-xl">{title}</h1>
        <p className="text-lg">{body}</p>
      </div>
      <span className="timer block w-0 h-1"></span>
    </div>
  );
}
