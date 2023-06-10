import React from 'react'

const Upload = () => {
    const fields =["Filename:", "Size:", "URL:", "Author:", "Keyword:", "Title:"]
  return (
    <div className='flex flex-col '>
      <div className='flex flex-col text-center gap-20'>
          <h1 className='text-[#29335c] text-[35px] font-bold'>Uploading of PDF's</h1>
          <p className='text-[12px]'>Fill this form to sucessfully upload a PDF</p>
      </div>
        {fields.map((field) => {
						return (
              <div className='flex w-[100%]'> 
								<input className='mx-auto my-3 p-8 w-[80%] bg-[var(--light-black,_rgb(226,232,240))] rounded-[10px] font-semibold text-xl md:text-2xl'
                  placeholder={field}
                />
              </div>
						);
					})}
          <button className='bg-red p-5 text-white font-bold w-[30%] mx-auto rounded-[10px] mt-4'>Submit</button>
    </div>
  )
}

export default Upload