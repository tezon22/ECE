import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineDownload} from 'react-icons/ai'
import {AiOutlineLeft} from 'react-icons/ai'

const Download = () => {
  return (
      <div className="text-[#29335C]">
          <div className="flex mt-5 mb-7 mx-4">
              <Link className="w-1/12 text-2xl md:text-4xl font-bold" to=""><AiOutlineLeft/></Link>
              <div className="w-11/12 text-center md:text-2xl font-bold mt-2">
                  PDFs
              </div>       
          </div>
          <div className="flex w-[94%] mx-auto rounded-xl my-5 py-2 px-4 bg-slate-200 shadow-3xl md:hidden">
                <div className="w-12 h-12 rounded-full w-[30%]">
                      <img className="w-full" src="" alt="pic" />
                </div>
                <div className="my-2 mx-1 w-[60%]">
                      <p className="text-md font-semibold truncate">PDF Name</p>
                      <p className="text-[12px]">8.5mb</p>
                </div>
                <div className="w-[10%] m-3">
                      <button>
                          <AiOutlineDownload size={30} />
                      </button>
                </div>
          </div>
          <div className="max-[767px]:hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-12 my-16 mx-8">
                <div className="md:col-span-1 rounded-xl bg-slate-200 shadow-3xl my-5">
                      <img className="w-full h-28" src="" alt="pdf_picture" />
                      <p className="text-xl font-semibold truncate mt-4 mb-3 mx-3">PDF Name</p>
                      <div className="flex mx-4 mb-4">
                          <div className="w-1/2">
                              <button>
                                  <AiOutlineDownload size={30} />
                              </button>
                          </div>
                          <p className="w-1/2 text-right">8.5mb</p>
                      </div>
                </div>
          </div>
      </div>              
  )
}

export default Download