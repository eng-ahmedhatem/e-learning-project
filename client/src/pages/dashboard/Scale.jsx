import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Loader } from '../../component'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { postScale_edit, preScale_edit } from '../../slice/userSlice'

export default function Scale() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {state} = useLocation()
    useEffect(()=>{
        console.log(state)
    })
const hanelClick_scale = ()=>{
    if (state.type == "preScale"){
        dispatch(preScale_edit())
        axios
        .post(
          `/api/user-update/${state.userData._id}`,
          JSON.stringify({
            pre_scale: true
          })
        ).then(()=> navigate("/dashboard/home"))
        .catch(r => console.log(r));
    }
    if (state.type == "postScale"){
        dispatch(postScale_edit())
        axios
        .post(
          `/api/user-update/${state.userData._id}`,
          JSON.stringify({
            post_scale: true
          })
        ).then(()=> navigate("/dashboard/home"))
        .catch(r => console.log(r));
    }
}
  return (
    <section className=''>
        <div className='  h-[740px]'>
{state.type == "preScale" &&  <iframe className='h-full' src="https://docs.google.com/forms/d/e/1FAIpQLSfvBkdxukgDLDGp2NCtlX-Mmdznew7BDEHY_DWvDK8js3vY_g/viewform?embedded=true" width="100%"  frameBorder="0" marginHeight="0" marginWidth="0" title="Google Form" ><Loader/> </iframe>
}
 <div onClick={hanelClick_scale} className="  scale-95 hover:scale-100 transition">
                <button className='bg-[#1499b6] w-[350px] p-2 flex justify-center items-center rounded-full  md:rounded-sm hover:bg-transparent text-gray-100 border hover:border-[#1499b6] mx-auto hover:text-[#1499b6]  transition '>
                 <span className='hidden  md:block'>
                    اضغط هنا لإتمام عمليه التسليم
                 </span>
                 <span className='mr-2 text-2xl md:text-lg'></span>

                 </button>
            </div>
        </div>
    </section>
  )
}
