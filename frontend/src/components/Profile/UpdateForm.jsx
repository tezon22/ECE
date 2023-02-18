import React from "react";

const UpdateForm = () => {

    return (
        <div>
             <p className="text-center text-2xl md:text-3xl text-[var(--lighter-red,_rgb(127,29,29))] font-semibold">
                Update Profile
            </p>
            <form className="p-8 w-full">
                <div className="w-[90%] mx-auto">
                    <input type="text" className="text-[var(--lighter-blue,_#29335c)] placeholder:text-[var(--lighter-blue,_#29335c)] py-[12px] text-2xl md:text-3xl w-full font-bold border-b-2 mb-7 border-[var(--lighter-blue,_#29335C)]" placeholder="Name" />
                </div>
                <div className="w-[90%] mx-auto">
                    <input type="text" className="text-[var(--lighter-blue,_#29335c)] placeholder:text-[var(--lighter-blue,_#29335c)] py-[12px] text-2xl md:text-3xl w-full font-bold border-b-2 my-7 border-[var(--lighter-blue,_#29335C)]" placeholder="Email" />
                </div>
                <div className="w-[90%] font-bold text-2xl md:text-3xl mx-auto">
                  <span classsName="text-[var(--lighter-blue,_#29335c)]">Picture:</span> <input type="file" className="text-[var(--lighter-blue,_#29335c)] placeholder:text-[var(--lighter-blue,_#29335c)] w-full py-[12px] md:text-3xl text-2xl font-bold mb-7 mt-2" />
                </div>
            </form>
        </div>
        
    );
};

export default UpdateForm;