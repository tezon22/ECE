import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineDownload} from 'react-icons/ai'
import {AiOutlineLeft} from 'react-icons/ai'

const Download = () => {
  return (
      <div className="text-[#29335C]">
          <div className="flex my-5 mx-4">
              <Link className="w-1/12 text-2xl md:text-4xl font-bold" to=""><AiOutlineLeft/></Link>
              <div className="w-11/12 text-center md:text-2xl font-bold mt-2">
                  PDFs
              </div>       
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 my-16 mx-8">
                <div className="col-span-1 rounded-3xl bg-slate-200">
                      <img className="w-full h-32" src="" alt="pdf_picture" />
                      <p className="text-xl font-semibold truncate my-6 mx-3">PDF Name</p>
                      <div className="flex mx-4 mb-6">
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