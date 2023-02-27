import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";
import { uploadImages } from "../../features/image/Uploadimage";
import Spinner from '../Spinner'
const UpdateForm = () => {
  const [pic, setPic] = useState(null)

  const { user } = useSelector((state) => state.auth);
  const {name, email} = user
  const {  loading, changed, failed } = useSelector((state) => state.uploadimages);
  const dispatch = useDispatch()
      const id = user._id
      const onSubmit = () =>{
        if (pic.type === "image/jpeg" || pic.type === "image/png") {
          const body = new FormData();
          body.append("file", pic);
          body.append("upload_preset", "waqeqob4");
          body.append("cloud_name", "dscbiu2km");
          const data ={
            body,id
          }
          dispatch(uploadImages(data))
        }else{
          toast('Select an image')
        }
      }
      useEffect(() => {
        if(changed){
          toast.success('Picture has been successfully uploaded')
         }
         if(failed){
          toast.success('Picture was not uploaded, please try again')
         }
      }, [changed, failed])
      

      if(loading){
        return <Spinner/>
      }
     
    return (
        <>
        <div>
             <p className="text-center text-2xl md:text-3xl text-[var(--lighter-red,_rgb(127,29,29))] font-semibold">
                Update Profile
            </p>
            <form className="p-8 w-full">
                <div className="w-[90%] mx-auto">
                    <input type="text" className="text-[var(--lighter-blue,_#29335c)] placeholder:text-[var(--lighter-blue,_#29335c)] py-[12px] text-2xl md:text-3xl w-full font-bold border-b-2 mb-7 border-[var(--lighter-blue,_#29335C)]" placeholder={'Name: '+ name} disabled/>
                </div>
                <div className="w-[90%] mx-auto">
                    <input type="text" className="text-[var(--lighter-blue,_#29335c)] placeholder:text-[var(--lighter-blue,_#29335c)] py-[12px] text-2xl md:text-3xl w-full font-bold border-b-2 my-7 border-[var(--lighter-blue,_#29335C)]" placeholder={'Email: ' + email} disabled/>
                </div>
                <div className="w-[90%] font-bold text-2xl md:text-3xl mx-auto">
                  <span classsName="text-[var(--lighter-blue,_#29335c)]">Picture:</span> 
                  <input 
                  onChange={(e)=>{setPic(e.target.files[0])}}
                  type="file" className="text-[var(--lighter-blue,_#29335c)] placeholder:text-[var(--lighter-blue,_#29335c)] w-full py-[12px] md:text-3xl text-2xl font-bold mb-7 mt-2" />
                </div>
            </form>
        </div>
        <div className="w-[85%] mb-8 mx-auto">
                                    <div className="text-right inline-block w-[50%]">
                                        <button onClick={(e) => onSubmit()} className="bg-[var(--lighter-blue,_#29335c)] text-white text-center py-3 px-[20%] rounded-lg ">
                                            Update
                                        </button>
                                    </div>
                                </div>
        </>
        
    );
};

export default UpdateForm;