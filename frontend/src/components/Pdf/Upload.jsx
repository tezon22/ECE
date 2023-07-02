import { cloudinaryUpload } from "../../hooks/cloudinaryUpload";
import * as filestack from 'filestack-js'
import { useState } from "react";

const Upload = () => {
  const [fileName, setFileName] = useState("")
  const [author, setAuthor] = useState("")
  const [level, setLevel] = useState("")
  const [keywords, setKeywords] = useState("")

  const client = filestack.init('AqUp2oJ2SvGVXXPWfLVgaz');
  const submit = () => {
    const options = {
      accept: ['application/pdf', 'image/*'], // Specify the accepted file types
      maxFiles: 5, // Set the maximum number of files to be uploaded
      storeTo: {
        location: 's3', // Specify the storage location (e.g., S3)
      },
      onFileUploadFinished(file){
        cloudinaryUpload(file);
      },
      uploadConfig: {
        tags: {
          fileName,
          author,
          level,
          keywords,
          fileType:"pdf"
        },
      },   
    };
    
    client.picker(options).open();
  };
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col text-center gap-20">
        <h1 className="text-[#29335c] text-[35px] font-bold">
          Uploading of PDF's
        </h1>
        <p
          className="text-[12px]"
        >
          Fill this form to sucessfully upload a PDF
        </p>
      </div>
      <div className="flex flex-col">
      <input
              className="mx-auto my-3 p-8 w-[80%] bg-[var(--light-black,_rgb(226,232,240))] rounded-[10px] font-semibold text-xl md:text-2xl"
              placeholder="Course Name eg FEG 303"
              onChange={(e)=> setFileName(e.target.value)}
            />
      <input
              className="mx-auto my-3 p-8 w-[80%] bg-[var(--light-black,_rgb(226,232,240))] rounded-[10px] font-semibold text-xl md:text-2xl"
              placeholder="Author"
              onChange={(e)=> setAuthor(e.target.value)}
            />
      <input
              className="mx-auto my-3 p-8 w-[80%] bg-[var(--light-black,_rgb(226,232,240))] rounded-[10px] font-semibold text-xl md:text-2xl"
              placeholder="Keywords"
              onChange={(e)=> setKeywords(e.target.value)}
            />
      <input
              className="mx-auto my-3 p-8 w-[80%] bg-[var(--light-black,_rgb(226,232,240))] rounded-[10px] font-semibold text-xl md:text-2xl"
              placeholder="Level eg: 100 first"
              onChange={(e)=> setLevel(e.target.value)}
            />
      <button
        onClick={submit}
        className="bg-red p-5 text-white font-bold w-[30%] mx-auto rounded-[10px] mt-4"
      >
        Upload File
      </button>
      </div>
    </div>
  );
};

export default Upload;
