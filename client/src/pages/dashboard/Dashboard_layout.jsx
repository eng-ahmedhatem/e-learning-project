import React, { useEffect, useState } from 'react'
import Dashboard_header from './Dashboard_header'
import Dashboard_nav from './Dashboard_nav'
import "./dashboard.css"
import { Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Loader } from '../../component'
import axios from 'axios'
import { lesson_set, lessons_data } from '../../slice/lessonsSlice'
import { lessonsProgress_data } from '../../slice/lessonProgressSlice'
export default function Dashboard_layout() {
  const [userGroup,set_userGroup] = useState()

  const user = useSelector(state => state.user);
  const data = user && user.data ? user.data.data : null
  const dispatch = useDispatch()
useEffect(()=>{
  if(data && data.role && (data.role == "student" && data.group == "ex")){
    set_userGroup("ex")
    axios.get("/api/lessons")
    .then(response => dispatch(lessons_data(response.data.data)))
    .catch(err=> console.log(err))

    axios.get("/api/lessons/progress/get", {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => { 
      console.log(response.data.data);
      dispatch(lessonsProgress_data(response.data.data))
    })
    .catch(err => console.log(err));
    
  }else {
    dispatch(lesson_set())
  }
},[])

  if (!data) return <Loader/>
  return (
    <section className='dashboard bg-[#ecf0f4]  pb-0 grid h-svh '>
        <Dashboard_header/>
        <Dashboard_nav theIf ={userGroup} userName={data && data.userName}/>
        <div className="dash-content overflow-auto overflow-x-hidden relative p-1 md:p-5 rounded-md ">
            <Outlet/>
        </div>
    </section>
  )
}
