import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'

export default function Lesson() {
    const {order} = useParams()
    const navigate = useNavigate()()
    const data = useSelector(state => state.lessons.data)
    const data_u = useSelector(state => state.user.data)
    const lessons = data && data || [] 
    const user =data_u
    const lesson = lessons.filter(ele => ele.order === +order)[0]
    useEffect(()=>{
       console.log(user) 
    },[])
  return (
    <section>
        <h2 className="opj-title w-max relative text-xl md:text-2xl  mb-9">
            {lesson.title}
      </h2>
    </section>
  )
}
