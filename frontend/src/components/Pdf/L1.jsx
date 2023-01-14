import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillFolder} from 'react-icons/ai'
import {AiOutlineLeft} from 'react-icons/ai'

const L1 = () => {
  return (
      <div className="container-fluid text-[#29335C] lg:mx-[15%]">
          <div className="flex my-5 md:my-8 mx-4">
              <Link className="w-1/12 text-2xl md:text-4xl font-bold" to="/ebook"><AiOutlineLeft/></Link>
              <div className="w-11/12 text-center text-[17px] md:text-2xl font-bold mt-2">
                  100 Level
              </div>       
          </div>
          <div className="mx-8 md:mx-14 mb-24 md:mb-28">
              <p className="font-semibold md:text-2xl mt-10 md:mt-14 mb-6 md:mb-8">First Semester</p>
              <Link to="">
                  <div className="my-6 md:my-8 p-3 md:p-4 bg-slate-200 rounded-full font-semibold text-sm md:text-xl">
                      MAT 101 <span className="text-xl md:text-2xl float-right"><AiFillFolder/></span>
                  </div>
              </Link>
              <Link to="">
                  <div className="my-6 md:my-8 p-3 md:p-4 bg-slate-200 rounded-full font-semibold text-sm md:text-xl">
                      FEG 101 <span className="text-xl md:text-2xl float-right"><AiFillFolder/></span>
                  </div>
              </Link>
              <Link to="">
                  <div className="my-6 md:my-8 p-3 md:p-4 bg-slate-200 rounded-full font-semibold text-sm md:text-xl">
                      PHY 101 <span className="text-xl md:text-2xl float-right"><AiFillFolder/></span>
                  </div>
              </Link>  
              <Link to="">
                  <div className="my-6 md:my-8 p-3 md:p-4 bg-slate-200 rounded-full font-semibold text-sm md:text-xl">
                      ICH 101 <span className="text-xl md:text-2xl float-right"><AiFillFolder/></span>
                  </div>
              </Link>
              <Link to="">
                  <div className="my-6 md:my-8 p-3 md:p-4 bg-slate-200 rounded-full font-semibold text-sm md:text-xl">
                      ICH 111 <span className="text-xl md:text-2xl float-right"><AiFillFolder/></span>
                  </div>
              </Link>
               <p className="font-semibold md:text-2xl mt-10 md:mt-14 mb-6 md:mb-8">Second Semester</p>
              <Link to="">
                  <div className="my-6 md:my-8 p-3 md:p-4 bg-slate-200 rounded-full font-semibold text-sm md:text-xl">
                      MAT 102 <span className="text-xl md:text-2xl float-right"><AiFillFolder/></span>
                  </div>
              </Link>
              <Link to="">
                  <div className="my-6 md:my-8 p-3 md:p-4 bg-slate-200 rounded-full font-semibold text-sm md:text-xl">
                      FEG 102 <span className="text-xl md:text-2xl float-right"><AiFillFolder/></span>
                  </div>
              </Link>
              <Link to="">
                  <div className="my-6 md:my-8 p-3 md:p-4 bg-slate-200 rounded-full font-semibold text-sm md:text-xl">
                      PHY 102 <span className="text-xl md:text-2xl float-right"><AiFillFolder/></span>
                  </div>
              </Link>  
              <Link to="">
                  <div className="my-6 md:my-8 p-3 md:p-4 bg-slate-200 rounded-full font-semibold text-sm md:text-xl">
                      ICH 102 <span className="text-xl md:text-2xl float-right"><AiFillFolder/></span>
                  </div>
              </Link>
              <Link to="">
                  <div className="my-6 md:my-8 p-3 md:p-4 bg-slate-200 rounded-full font-semibold text-sm md:text-xl">
                      ICH 112 <span className="text-xl md:text-2xl float-right"><AiFillFolder/></span>
                  </div>
              </Link>
              <Link to="">
                  <div className="my-6 md:my-8 p-3 md:p-4 bg-slate-200 rounded-full font-semibold text-sm md:text-xl">
                      FEG 103 <span className="text-xl md:text-2xl float-right"><AiFillFolder/></span>
                  </div>
              </Link>
          </div>
      </div>
  )
}

export default L1