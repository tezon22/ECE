import React, {useState} from "react";
import { useDispatch, useSelector } from 'react-redux';

const UpdateForm = () => {
    const [pic, setPic] = useState();
    const [picMessage, setPicMessage] = useState();
    const postDetails = (pics) => {
        setPicMessage(null);
        if (pics.type === "image/jpeg" || pics.type === "image/png") {
          const data = new FormData();
          data.append("file", pics);
          data.append("upload_preset", "waqeqob4");
          data.append("cloud_name", "dscbiu2km");
          fetch("https://api.cloudinary.com/v1_1/dscbiu2km/image/upload", {
            method: "post",
            body: data,
          })
            .then((res) => res.json())
            .then((data) => {
              setPic(data.url.toString());
              console.log(pic);
            })
            .catch((err) => {
              console.log(err);
            });
            console.log(picMessage, data)
            setPic(data)
        } else {
          return setPicMessage("Please Select an Image");
        }

      };
      const onSubmit = () =>{
        console.log(pic)
      }
      const { user } = useSelector((state) => state.auth);
      const {name, email} = user
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
                  onChange={(e) => postDetails(e.target.files[0])}
                  type="file" className="text-[var(--lighter-blue,_#29335c)] placeholder:text-[var(--lighter-blue,_#29335c)] w-full py-[12px] md:text-3xl text-2xl font-bold mb-7 mt-2" />
                </div>
            </form>
        </div>
        <div className="w-[85%] mb-8 mx-auto">
                                    <div className="text-right inline-block w-[50%]">
                                        <button onClick={onSubmit} className="bg-[var(--lighter-blue,_#29335c)] text-white text-center py-3 px-[20%] rounded-lg ">
                                            Update
                                        </button>
                                    </div>
                                </div>
        </>
        
    );
};

export default UpdateForm;