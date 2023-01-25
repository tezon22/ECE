import React, {useState} from 'react'
import {toast} from 'react-toastify'
import { Link } from 'react-router-dom'
import {AiOutlineLeft} from 'react-icons/ai'

const FirstL2 = () => {
      const [mat201, setMat201] = useState(null)
      const [feg201, setFeg201] = useState(null)
      const [feg221, setFeg221] = useState(null)
      const [feg211, setFeg211] = useState(null)
      const [feg213, setFeg213] = useState(null)
      const [feg250, setFeg250] = useState(null)
      const [feg281, setFeg281] = useState(null)
      const [ich201, setIch201] = useState(null)
      const [csc201, setCsc201] = useState(null)

      function calculate (mat201 , feg201, feg221, feg211, feg213, feg250, feg281, ich201, csc201){
            return (
                  mat201 * 3 + feg201 * 3+ feg221 * 2 + feg211 * 2 + feg213 * 2 + feg250 * 2 + feg281 * 2 + ich201 * 2 + csc201 * 2 
            )
      }
      const calc  = calculate (mat201, feg201, feg221, feg211, feg213, feg250, feg281, ich201, csc201)

  return (
    <div className="container-fluid text-[#29335C] lg:mx-[15%]">
          <div className="flex my-5 md:my-8 mx-4">
              <Link className="w-1/12 text-2xl md:text-4xl font-bold" to="/L1cgpa"><AiOutlineLeft/></Link>
              <div className="w-11/12 text-center text-[17px] md:text-2xl font-bold mt-2">
                  100 Level (First Semester)
              </div>       
          </div>        
          <div className="my-12">
                <p className="text-center text-2xl font-bold mb-6">CGPA Calculator</p>
                <p className="text-center text-md">Please input your grade units and let us calculate your CGPA using this format.</p>
                <div className=" flex justify-center gap-3 text-right mx-auto my-6 font-bold">
                      <p>A -- 5</p>
                      <p>B -- 4</p>
                      <p>C -- 3</p>
                      <p>D -- 2</p>
                      <p>E -- 1</p>
                      <p>F -- 0</p>
                </div>
          </div>
          <div className="mb-28">
                <div className="flex mx-3">
                      <p className="w-[33%] text-center md:text-xl font-bold py-3">Courses</p>
                      <p className="w-[33%] text-center md:text-xl font-bold py-3">Grades</p>
                      <p className="w-[33%] text-center md:text-xl font-bold py-3">Credit Units</p>
                </div>
                <div className="flex my-5 text-[#29335C] mx-2 md:mx-4">
                      <input className="bg-slate-200 rounded-full py-1 text-center font-bold w-[33%] mx-2" type="text" value="MAT 101" disabled />
                      <input className="bg-slate-200 rounded-full py-1 text-center font-bold w-[33%] mx-2" type="number" name="mat_grd" placeholder="Enter:" value={mat201 } onChange={(e) => setMat201(e.target.value < 6 ? e.target.value : toast('Grade no dey pass 5'))}  />
                      <input className="bg-slate-200 rounded-full py-1 text-center font-bold w-[33%] mx-2" type="number" name="mat_unt" value={3} disabled />
                </div>
                <div className="flex my-5 text-[#29335C] mx-2 md:mx-4">
                      <input className="bg-slate-200 rounded-full py-1 text-center font-bold w-[33%] mx-2" type="text" value="FEG 101" disabled />
                      <input className="bg-slate-200 rounded-full py-1 text-center font-bold w-[33%] mx-2" type="number" name="feg_grd" placeholder="Enter:" value={feg201} onChange={(e) => setFeg201(e.target.value < 6 ? e.target.value : toast('Grade no dey pass 5'))} />
                      <input className="bg-slate-200 rounded-full py-1 text-center font-bold w-[33%] mx-2" type="number" name="feg_unt" value={3} disabled />
                </div>
                <div className="flex my-5 text-[#29335C] mx-2 md:mx-4">
                      <input className="bg-slate-200 rounded-full py-1 text-center font-bold w-[33%] mx-2" type="text" value="PHY 101" disabled />
                      <input className="bg-slate-200 rounded-full py-1 text-center font-bold w-[33%] mx-2" type="number" name="phy_grd"  placeholder="Enter:" value={feg221} onChange={(e) => setFeg221(e.target.value < 6 ? e.target.value : toast('Grade no dey pass 5'))}/>
                      <input className="bg-slate-200 rounded-full py-1 text-center font-bold w-[33%] mx-2" type="number" name="phy_unt" value={2} disabled />
                </div>
                <div className="flex my-5 text-[#29335C] mx-2 md:mx-4">
                      <input className="bg-slate-200 rounded-full py-1 text-center font-bold w-[33%] mx-2" type="text" value="ICH 101" disabled />
                      <input className="bg-slate-200 rounded-full py-1 text-center font-bold w-[33%] mx-2" type="number" name="ich1_grd" placeholder="Enter:" value={feg211} onChange={(e) => setFeg211(e.target.value < 6 ? e.target.value : toast('Grade no dey pass 5'))} />
                      <input className="bg-slate-200 rounded-full py-1 text-center font-bold w-[33%] mx-2" type="number" name="ich1_unt" value={2} disabled />
                </div>
                <div className="flex my-5 text-[#29335C] mx-2 md:mx-4">
                      <input className="bg-slate-200 rounded-full py-1 text-center font-bold w-[33%] mx-2" type="text" value="ICH 111" disabled />
                      <input className="bg-slate-200 rounded-full py-1 text-center font-bold w-[33%] mx-2" type="number" name="ich2_grd"  placeholder="Enter:" value={feg213} onChange={(e) => setFeg213(e.target.value < 6 ? e.target.value : toast('Grade no dey pass 5'))}/>
                      <input className="bg-slate-200 rounded-full py-1 text-center font-bold w-[33%] mx-2" type="number" name="ich2_unt" value={2} disabled />
                </div>
                <div className="flex my-5 text-[#29335C] mx-2 md:mx-4">
                      <input className="bg-slate-200 rounded-full py-1 text-center font-bold w-[33%] mx-2" type="text" value="BUS 101" disabled />
                      <input className="bg-slate-200 rounded-full py-1 text-center font-bold w-[33%] mx-2" type="number" name="bus_grd"  placeholder="Enter:" value={feg250} onChange={(e) => setFeg250(e.target.value < 6 ? e.target.value : toast('Grade no dey pass 5'))}/>
                      <input className="bg-slate-200 rounded-full py-1 text-center font-bold w-[33%] mx-2" type="number" name="bus_unt" value={2} disabled />
                </div>
                <div className="flex my-5 text-[#29335C] mx-2 md:mx-4">
                      <input className="bg-slate-200 rounded-full py-1 text-center font-bold w-[33%] mx-2" type="text" value="PHY 107" disabled />
                      <input className="bg-slate-200 rounded-full py-1 text-center font-bold w-[33%] mx-2" type="number" name="phy2_grd" placeholder="Enter:" value={feg281} onChange={(e) => setFeg281(e.target.value < 6 ? e.target.value : toast('Grade no dey pass 5'))} />
                      <input className="bg-slate-200 rounded-full py-1 text-center font-bold w-[33%] mx-2" type="number" name="phy2_unt" value={2} disabled />
                </div>
                <div className="flex my-5 text-[#29335C] mx-2 md:mx-4">
                      <input className="bg-slate-200 rounded-full py-1 text-center font-bold w-[33%] mx-2" type="text" value="GST 101" disabled />
                      <input className="bg-slate-200 rounded-full py-1 text-center font-bold w-[33%] mx-2" type="number" name="eng_grd" placeholder="Enter:" value={ich201} onChange={(e) => setIch201(e.target.value < 6 ? e.target.value : toast('Grade no dey pass 5'))}/>
                      <input className="bg-slate-200 rounded-full py-1 text-center font-bold w-[33%] mx-2" type="number" name="eng_unt" value={2} disabled />
                </div>
                <div className="flex my-5 text-[#29335C] mx-2 md:mx-4">
                      <input className="bg-slate-200 rounded-full py-1 text-center font-bold w-[33%] mx-2" type="text" value="GST 105" disabled />
                      <input className="bg-slate-200 rounded-full py-1 text-center font-bold w-[33%] mx-2" type="number" name="npc_grd" placeholder="Enter:" value={csc201} onChange={(e) => setCsc201(e.target.value < 6 ? e.target.value : toast('Grade no dey pass 5'))}/>
                      <input className="bg-slate-200 rounded-full py-1 text-center font-bold w-[33%] mx-2" type="number" name="npc_unt" value={2} disabled />
                </div>
                <div className='flex items-center'>
                <div className="my-8 w-[50%]">
                    <p className="md:w-1/2 md:mx-10 font-bold ">
                          Total Credit Unit:<span className="bg-slate-200 py-1 rounded-full text-center ml-4 w-[50%]  inline-block">20</span>
                    </p>
                </div>
                <p className="my-4 md:text-xl font-bold mx-4 text-right px-5 w-[50%]">CGPA: {calc / 20} </p>
                </div>
          </div>
        
    </div>
  )
}

export default FirstL2