import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {AiOutlineDownload} from 'react-icons/ai'
import {AiOutlineLeft} from 'react-icons/ai'



const Download = () => {

    const location = useLocation()
    const {from} = location.state
    
    const books = localStorage.getItem('pdfs')
   
    const pdfs =JSON.parse(books)
  return (
      <div className="text-[#29335C]">
          <div className="flex mt-5 mb-7 mx-4">
              <Link className="w-1/12 text-2xl md:text-4xl font-bold" to="/L1pdf"><AiOutlineLeft/></Link>
              <div className="w-11/12 text-center md:text-2xl font-bold mt-2">
                 {from} PDFs
              </div>       
          </div>
          <div>
          {pdfs.map((pdf) =>{
                        return (
                            ((pdf.fileName.toLowerCase() === from.toLowerCase()) ? 
        <div key={pdf._id}>    
            <div className="flex  items-center w-[94%] h-[120%] mx-auto rounded-xl my-5 py-2 px-4 bg-slate-200 shadow-3xl md:hidden">
                    <div className="h-[100px] rounded-full w-[35%]">
                             <img className='w-[100%] h-[100%]' src={pdf.thumbnail} alt="pic" /> 
                    </div>
                    <div className="my-2 mx-1 w-[60%]">
                        <p className="text-md font-semibold truncate">{pdf.title}</p>
                        <p className="text-[12px]">{pdf.size} mb</p>
                    </div>
                    <div className="w-[10%] m-3">
                        <button>
                            <a href={pdf.url}>
                                <AiOutlineDownload size={30}/>
                            </a>
                        </button>
                    </div>
            </div>
            <div className="max-[767px]:hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-12 my-16 mx-8  ">
                    <div className="md:col-span-1 flex flex-col items-center justify-between rounded-xl bg-slate-200 shadow-3xl my-5">
                        <div className=' w-[100%] h-[10%]'>
                            <img className='w-[100%] h-[180px]' src={pdf.thumbnail} alt="pdf_picture" /> 
                        </div>
                        <div className=' w-[100%]'>
                            <p className="text-xl font-semibold truncate mt-4 mb-3">{pdf.title}</p>
                            <div className="flex mx-4 mb-4">
                                <div className="w-1/2">
                                    <button>
                                    <a href={pdf.url}>
                                        <AiOutlineDownload size={30}/>
                                    </a>
                                    </button>
                                </div>
                                <p className="w-1/2 text-right">{pdf.size} mb</p>
                            </div>
                            </div>
                    </div>
            </div>
            </div> : ''
                            )
                        )
                    })}
          </div>
      </div>              
  )
}

export default Download