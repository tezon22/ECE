import { useState } from "react";
import { cloudinaryUpload } from "../../hooks/cloudinaryUpload";

const Upload = () => {
  const [PDF, setPDF] = useState("");
  const fields = [
    "Filename:",
    "Size:",
    "URL:",
    "Author:",
    "Keyword:",
    "Title:",
  ];
  const form = new FormData();
  form.append("file", PDF);
  form.append("upload_preset", "wxilnhxo");
  form.append("cloud_name", "dscbiu2km");

  const submit = () => {
    cloudinaryUpload(form);
  };
  console.log(PDF);
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col text-center gap-20">
        <h1 className="text-[#29335c] text-[35px] font-bold">
          Uploading of PDF's
        </h1>
        <a
          href="https://res.cloudinary.com/dscbiu2km/image/upload/v1687047722/PDF/iiogljt1baj4fyirytzh.pdf"
          className="text-[12px]"
        >
          Fill this form to sucessfully upload a PDF
        </a>
      </div>
      {fields.map((field) => {
        return (
          <div className="flex w-[100%]" key={field}>
            <input
              className="mx-auto my-3 p-8 w-[80%] bg-[var(--light-black,_rgb(226,232,240))] rounded-[10px] font-semibold text-xl md:text-2xl"
              placeholder={field}
            />
          </div>
        );
      })}
      <input
        onChange={(e) => setPDF(e.target.files[0])}
        type="file"
        className="mx-auto my-3 p-8 w-[80%] bg-[var(--light-black,_rgb(226,232,240))] rounded-[10px] font-semibold text-xl md:text-2xl"
      />
      <button
        onClick={submit}
        className="bg-red p-5 text-white font-bold w-[30%] mx-auto rounded-[10px] mt-4"
      >
        Submit
      </button>
    </div>
  );
};

export default Upload;
