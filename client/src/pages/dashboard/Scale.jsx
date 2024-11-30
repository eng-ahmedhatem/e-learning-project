import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Loader } from "../../component";
import axios from "axios";
import { useDispatch } from "react-redux";
import { postScale_edit, preScale_edit } from "../../slice/userSlice";

export default function Scale() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    console.log(state?.userData?.group);
    if (!state) {
      navigate("/dashboard/home");
    } else {
      if (state.type === "postScale" && state.post_scale) {
        navigate("/dashboard/home");
      } else if (state.type === "preScale" && state.pre_scale) {
        navigate("/dashboard/home");
      }
    }
  }, [navigate, state]);

  const handleClickScale = () => {
    if (!state || !state.userData) return;

    const { type, userData } = state;

    const updateData = type === "preScale" ? { pre_scale: true } : { post_scale: true };
    const action = type === "preScale" ? preScale_edit : postScale_edit;

    dispatch(action());
    axios.post(`/api/user-update/${userData._id}`, JSON.stringify(updateData))
      .then(() => navigate("/dashboard/home"))
      .catch(r => console.log(r));
  };

  if (!state || (state.type === "postScale" && state.post_scale) || (state.type === "preScale" && state.pre_scale)) {
    return null;
  }

  return (
    <section className="">
      <div className="h-[740px]">
        {state.type === "preScale" && state.userData?.group === "control" && (
          <iframe
            className="h-full"
            src="https://docs.google.com/forms/d/e/1FAIpQLSfvBkdxukgDLDGp2NCtlX-Mmdznew7BDEHY_DWvDK8js3vY_g/viewform?embedded=true"
            width="100%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Google Form"
          >
            <Loader />
          </iframe>
        )}
        {state.type === "postScale" && state.userData?.group === "control" && (
          <iframe
            className="h-full"
            src="https://docs.google.com/forms/d/e/1FAIpQLSfc0AXf4y3owTnu1SXVcxUa_vndkuH10PsaiMF4GgVmJmp8Mw/viewform?embedded=true"
            width="100%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Google Form"
          >
            <Loader />
          </iframe>
        )}
        {state.type === "preScale" && state.userData?.group === "ex" && (
          <iframe
            className="h-full"
            src="https://docs.google.com/forms/d/e/1FAIpQLScbwqH-jGTzptIWTmZHXN7JjUpQwIAi0-PbR43jy3mv9VYXog/viewform?embedded=true"
            width="100%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Google Form"
          >
            <Loader />
          </iframe>
        )}
        {state.type === "postScale" && state.userData?.group === "ex" && (
          <iframe
            className="h-full"
            src="https://docs.google.com/forms/d/e/1FAIpQLSfXVDwyKLfI56ZKmGN7MmJuyyD8gA4XukuIuGO4T92qZ3rfPQ/viewform?embedded=true"
            width="100%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Google Form"
          >
            <Loader />
          </iframe>
        )}
        <div onClick={handleClickScale} className="scale-95 hover:scale-100 transition">
          <button className="bg-[#1499b6] w-[350px] p-2 flex justify-center items-center rounded-full md:rounded-sm hover:bg-transparent text-gray-100 border hover:border-[#1499b6] mx-auto hover:text-[#1499b6] transition">
            <span className="hidden md:block">اضغط هنا لإتمام عملية التسليم</span>
            <span className="mr-2 text-2xl md:text-lg" />
          </button>
        </div>
      </div>
    </section>
  );
}
