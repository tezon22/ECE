import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineLeft} from 'react-icons/ai'

const secondL1 = () => {
  return (
    <div className="text-[#29335C] lg:mx-[15%]">
          <div className="flex my-5 md:my-8 mx-4">
              <Link className="w-1/12 text-2xl md:text-4xl font-bold" to="/L1cgpa"><AiOutlineLeft/></Link>
              <div className="w-11/12 text-center text-[17px] md:text-2xl font-bold mt-2">
                  100 Level (Second Semester)
              </div>       
          </div>        
          <div className="my-12">
                <p className="text-center text-2xl font-bold mb-6">CGPA Calculator</p>
                <p className="text-center text-md">Please input your grade units and let us calculate your CGPA using this format.</p>
                <div className="text-right mr-10 md:mr-20 lg:mr-10 my-6 font-bold">
                      <p>A ---- 5</p>
                      <p>B ---- 4</p>
                      <p>C ---- 3</p>
                      <p>D ---- 2</p>
                      <p>E ---- 1</p>
                      <p>F ---- 0</p>
                </div>
          </div>
          <div className="mb-28">
                <div className="flex mx-3">
                      <p className="w-[33%] text-center md:text-xl font-bold py-3">Courses</p>
                      <p className="w-[33%] text-center md:text-xl font-bold py-3">Grades</p>
                      <p className="w-[33%] text-center md:text-xl font-bold py-3">Credit Units</p>
                </div>
                <div className="flex my-5 text-[#29335C] mx-2 md:mx-4">
                      <input className="bg-slate-200 rounded-full py-1 text-center font-bold w-[33%] mx-2" type="text" value="MAT 102" disabled />
                      <input className="bg-slate-200 rounded-full py-1 text-center font-bold w-[33%] mx-2" type="number" name="mat_grd" placeholder="Enter:" />
                      <input className="bg-slate-200 rounded-full py-1 text-center font-bold w-[33%] mx-2" type="number" name="mat_unt" value="3" disabled />
                </div>
                <div className="flex my-5 text-[#29335C] mx-2 md:mx-4">
                      <input className="bg-slate-200 rounded-full py-1 text-center font-bold w-[33%] mx-2" type="text" value="FEG 102" disabled />
                      <input className="bg-slate-200 rounded-full py-1 text-center font-bold w-[33%] mx-2" type="number" name="feg_grd" placeholder="Enter:" />
                      <input className="bg-slate-200 rounded-full py-1 text-center font-bold w-[33%] mx-2" type="number" name="feg_unt" value="2" disabled />
                </div>
                <div className="flex my-5 text-[#29335C] mx-2 md:mx-4">
                      <input className="bg-slate-200 rounded-full py-1 text-center font-bold w-[33%] mx-2" type="text" value="PHY 102" disabled />
                      <input className="bg-slate-200 rounded-full py-1 text-center font-bold w-[33%] mx-2" type="number" name="phy_grd"  placeholder="Enter:" />
                      <input className="bg-slate-200 rounded-full py-1 text-center font-bold w-[33%] mx-2" type="number" name="phy_unt" value="3" disabled />
                </div>
                <div className="flex my-5 text-[#29335C] mx-2 md:mx-4">
                      <input className="bg-slate-200 rounded-full py-1 text-center font-bold w-[33%] mx-2" type="text" value="ICH 102" disabled />
                      <input className="bg-slate-200 rounded-full py-1 text-center font-bold w-[33%] mx-2" type="number" name="ich1_grd" placeholder="Enter:" />
                      <input className="bg-slate-200 rounded-full py-1 text-center font-bold w-[33%] mx-2" type="number" name="ich1_unt" value="2" disabled />
                </div>
                <div className="flex my-5 text-[#29335C] mx-2 md:mx-4">
                      <input className="bg-slate-200 rounded-full py-1 text-center font-bold w-[33%] mx-2" type="text" value="ICH 112" disabled />
                      <input className="bg-slate-200 rounded-full py-1 text-center font-bold w-[33%] mx-2" type="number" name="ich2_grd"  placeholder="Enter:" />
                      <input className="bg-slate-200 rounded-full py-1 text-center font-bold w-[33%] mx-2" type="number" name="ich2_unt" value="2" disabled />
                </div>
                <div className="flex my-5 text-[#29335C] mx-2 md:mx-4">
                      <input className="bg-slate-200 rounded-full py-1 text-center font-bold w-[33%] mx-2" type="text" value="FEG 103" disabled />
                      <input className="bg-slate-200 rounded-full py-1 text-center font-bold w-[33%] mx-2" type="number" name="feg2_grd"  placeholder="Enter:" />
                      <input className="bg-slate-200 rounded-full py-1 text-center font-bold w-[33%] mx-2" type="number" name="feg2_unt" value="2" disabled />
                </div>
                <div className="flex my-5 text-[#29335C] mx-2 md:mx-4">
                      <input className="bg-slate-200 rounded-full py-1 text-center font-bold w-[33%] mx-2" type="text" value="PHY 108" disabled />
                      <input className="bg-slate-200 rounded-full py-1 text-center font-bold w-[33%] mx-2" type="number" name="phy2_grd" placeholder="Enter:" />
                      <input className="bg-slate-200 rounded-full py-1 text-center font-bold w-[33%] mx-2" type="number" name="phy2_unt" value="1" disabled />
                </div>
                <div className="flex my-5 text-[#29335C] mx-2 md:mx-4">
                      <input className="bg-slate-200 rounded-full py-1 text-center font-bold w-[33%] mx-2" type="text" value="GST 102" disabled />
                      <input className="bg-slate-200 rounded-full py-1 text-center font-bold w-[33%] mx-2" type="number" name="eng_grd" placeholder="Enter:" />
                      <input className="bg-slate-200 rounded-full py-1 text-center font-bold w-[33%] mx-2" type="number" name="eng_unt" value="1" disabled />
                </div>
                <div className="flex my-5 text-[#29335C] mx-2 md:mx-4">
                      <input className="bg-slate-200 rounded-full py-1 text-center font-bold w-[33%] mx-2" type="text" value="GST 106" disabled />
                      <input className="bg-slate-200 rounded-full py-1 text-center font-bold w-[33%] mx-2" type="number" name="social_grd" placeholder="Enter:" />
                      <input className="bg-slate-200 rounded-full py-1 text-center font-bold w-[33%] mx-2" type="number" name="social_unt" value="2" disabled />
                </div>
                <div className="flex my-5 text-[#29335C] mx-2 md:mx-4">
                      <input className="bg-slate-200 rounded-full py-1 text-center font-bold w-[33%] mx-2" type="text" value="GST 110" disabled />
                      <input className="bg-slate-200 rounded-full py-1 text-center font-bold w-[33%] mx-2" type="number" name="igbo_grd" placeholder="Enter:" />
                      <input className="bg-slate-200 rounded-full py-1 text-center font-bold w-[33%] mx-2" type="number" name="igbo_unt" value="1" disabled />
                </div>
                <div className="md:flex my-8">
                    <p className="md:w-1/2 md:mx-10 font-bold m-4">
                          Total Credit Unit:<span className="bg-slate-200 py-1 rounded-full text-center ml-4 w-[50%] md:w-[40%] inline-block">19</span>
                    </p>
                    <button className="bg-[#29335C] text-slate-200 text-center w-[80%] md:w-1/2 md:ml-[20%] md:mr-16 mx-8 py-2 text-xl font-bold rounded-full mt-6" onclick="calculateCGPA()">
                          CALCULATE
                    </button>
                </div>
                <p className="my-4 text-2xl font-bold mx-4 text-right px-5">CGPA: </p>
          </div>
        
    </div>
  )
}

export default secondL1