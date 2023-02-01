import emailjs from "@emailjs/browser";
import React, { useState, useRef } from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";
import Navbar from "../Navbar/Navbar";

const Result = () => {
  return(
    <p>Your message has been successfully sent. we will contact you soon</p>
  )
}

const Contact = () => {
  const form = useRef();
  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xl3yg3h",
        "template_r5tavpv",
        form.current,
        "6e-GTcfPmSqjMStYs"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    form.current.reset();
    showResult(true);
  };

  setTimeout(() => {
    showResult(false);
  }, 5000);

  return (
    <div>
      <Navbar />
      <div className="md:mx-[10%]">
        <div className="flex text-[var(--lighter-blue,_#29335C)] my-5 md:my-8 mx-4">
          <Link className="w-[5%] md:text-3xl text-2xl font-bold" to="/home">
            <AiOutlineLeft />
          </Link>
          <div className="w-[95%] text-center text-3xl font-bold">
            Contact Us
          </div>
        </div>
        <div>
          <p className="text-center text-2xl mt-20 text-[var(--lighter-red,_rgb(127,29,29))] font-semibold pb-6">
            Reach out to us today.
          </p>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-[var(--root-background,_rgb(203,213,225))] rounded-xl mb-20 pt-3 pb-16 w-[90%] md:w-[60%] shadow-3xl text-[var(--lighter-blue,_#29335C)] mx-auto"
            action=""
            method="post"
          >
            <div className="w-[90%] mx-auto">
              <input
                className="p-3 text-xl bg-[var(--light-black,_rgb(226,232,240))] w-full rounded-xl border-b-2 border-[var(--lighter-blue,_#29335C)] placeholder:text-[var(--lighter-blue,_#29335C)] my-3"
                type="text"
                placeholder="Full Name"
                required
								name="name"
              />
            </div>
            <div className="w-[90%] mx-auto">
              <input
                className="p-3 text-xl bg-[var(--light-black,_rgb(226,232,240))]  rounded-xl w-full border-b-2 border-[var(--lighter-blue,_#29335C)] placeholder:text-[var(--lighter-blue,_#29335C)] my-3"
                type="email"
                placeholder="Email"
                required
								name="email"
              />
            </div>
            <div className="w-[90%] mx-auto">
              <textarea
                className="p-3 text-xl bg-[var(--light-black,_rgb(226,232,240))]  rounded-xl w-full border-b-2 border-[var(--lighter-blue,_#29335C)] placeholder:text-[var(--lighter-blue,_#29335C)] my-3"
                type="text"
                rows="5"
                cols="10"
                placeholder="Comment"
								name="message"
              ></textarea>
            </div>
            <div className="my-5 text-center">
              <button className="py-2 bg-red-900 w-[70%] mx-auto inline-block text-white text-xl">
                SUBMIT
              </button>
							<div className="row">
              {result ? <Result/> : null}
            </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
