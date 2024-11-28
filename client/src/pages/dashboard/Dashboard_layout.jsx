import React from 'react'
import Dashboard_header from './Dashboard_header'
import Dashboard_nav from './Dashboard_nav'
import "./dashboard.css"
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Loader } from '../../component'
export default function Dashboard_layout() {
  const user = useSelector(state => state.user);
  const data = user && user.data ? user.data.data : null
  if (!data) return <Loader/>
  return (
    <section className='dashboard bg-[#ecf0f4]  pb-0 grid h-svh '>
        <Dashboard_header/>
        <Dashboard_nav userName={data && data.userName}/>
        <div className="dash-content relative p-5 rounded-md ">
            <Outlet/>
        </div>
    </section>
  )
}
