import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineLeft} from 'react-icons/ai'

const L1 = () => {
  return (
    <div className="text-[#29335C] lg:mx-[15%]">
          <div className="flex my-5 md:my-8 mx-4">
              <Link className="w-1/12 text-2xl md:text-4xl font-bold" to="/timetable"><AiOutlineLeft/></Link>
              <div className="w-11/12 text-center text-[17px] md:text-2xl font-bold mt-2">
                  100 Level
              </div>       
          </div>
          <Link to="">
              <div className="rounded-2xl md:rounded-3xl md:text-xl bg-slate-200 text-center font-medium py-12 md:py-16 my-7 md:my-14 mx-10 md:mx-20">
                  First Semester Lectures 
              </div>
          </Link>
          <Link to="">
              <div className="rounded-2xl md:rounded-3xl md:text-xl bg-slate-200 text-center font-medium py-12 md:py-16 my-7 md:my-14 mx-10 md:mx-20">
                  First Semester Exams
              </div>
          </Link>
          <Link to="">
              <div className="rounded-2xl md:rounded-3xl md:text-xl bg-slate-200 text-center font-medium py-12 md:py-16 my-7 md:my-14 mx-10 md:mx-20">
                 Second Semester Lectures
              </div>
          </Link>
          <Link to="">
              <div className="rounded-2xl md:rounded-3xl md:text-xl bg-slate-200 text-center font-medium py-12 md:py-16 my-7 md:my-14 mx-10 md:mx-20">
                  Second Semester Exams
              </div>
          </Link>
      </div>
  )
}

export default L1