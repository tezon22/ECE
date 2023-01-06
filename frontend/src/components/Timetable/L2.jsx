import React from 'react'
import { Link } from 'react-router-dom'

const L2 = () => {
  return (
    <div className="container-fluid text-[#29335C] md:mx-[15%]">
          <div className="flex my-8 mx-4">
              <Link className="w-1/12 text-5xl font-bold" to="/timetable"><i class="uil uil-previous"></i></Link>
              <div className="w-11/12 text-center text-2xl font-bold mt-2">
                  200 Level
              </div>       
          </div>
          <Link to="">
              <div className="rounded-3xl text-xl bg-slate-200 text-center font-medium py-16 my-14 mx-20">
                  First Semester Lectures 
              </div>
          </Link>
          <Link to="">
              <div className="rounded-3xl text-xl bg-slate-200 text-center font-medium py-16 my-14 mx-20">
                  First Semester Exams
              </div>
          </Link>
          <Link to="">
              <div className="rounded-3xl text-xl text-center font-medium bg-slate-200 py-16 my-14 mx-20">
                 Second Semester Lectures
              </div>
          </Link>
          <Link to="">
              <div className="rounded-3xl text-xl bg-slate-200 text-center font-medium py-16 my-14 mx-20">
                  Second Semester Exams
              </div>
          </Link>
      </div>
  )
}

export default L2