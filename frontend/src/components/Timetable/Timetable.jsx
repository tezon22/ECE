import React from 'react'

const Timetable = () => {
  return (
      <div className="container-fluid">
          <div className="flex my-8 mx-4">
              <a className="w-1/12 text-5xl font-bold" href=""><i class="uil uil-previous"></i></a>
              <div className="w-11/12 text-center text-2xl font-bold mt-2">
                  Select your level (TimeTable)
              </div>       
          </div>
          <a href="">
              <div className="rounded-3xl text-xl bg-slate-200 text-center font-medium py-16 my-14 mx-24">
                  100 level
              </div>
          </a>
          <a href="">
              <div className="rounded-3xl text-xl bg-slate-200 text-center font-medium py-16 my-14 mx-24">
                  200 level
              </div>
          </a>
          <a href="">
              <div className="rounded-3xl text-xl bg-slate-200 my-14 mx-24">
                  <p className="text-center font-medium pt-16 pb-5">300 level</p>
                  <p className="p-4 text-right text-sm font-light">Not Available now</p>
              </div>
          </a>
          <a href="">
              <div className="rounded-3xl text-xl bg-slate-200 my-14 mx-24">
                  <p className="text-center font-medium pt-16 pb-5">400 level</p>
                  <p className="p-4 text-right text-sm font-light">Not Available now</p>
              </div>
          </a>
          <a href="">
              <div className="rounded-3xl text-xl bg-slate-200 my-14 mx-24">
                  <p className="text-center font-medium pt-16 pb-5">500 level</p>
                  <p className="p-4 text-right text-sm font-light">Not Available now</p>
              </div>
          </a>
      </div>
  )
}

export default Timetable