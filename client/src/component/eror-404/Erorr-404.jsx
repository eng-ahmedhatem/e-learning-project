import React from "react";
import "./Erorr-400.css";
import { Link } from "react-router-dom";
export default function Erorr_404() {

  return (
    <div>
      <div className="page_404">
        <div className="container">
          <div className="text">
            <div className="four_zero_four_bg">
              <h1 className="text-center">404</h1>
            </div>
            <div className="contant_box_404">
              <h3 className="title-1">يبدو انك فقدت وجهتك</h3>
              <p>الصفحة التي تبحث عنها غير موجودة!</p>
              <Link to={"/"} className="link_404">
                العودة الى الصفحة الرئيسية
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
