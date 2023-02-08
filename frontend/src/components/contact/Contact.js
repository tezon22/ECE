import emailjs from "@emailjs/browser";
import React, { useState, useRef } from "react";
import "./Contact.css";
import ContactImage from "./contact_svg.webp";
import { Link } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";
import Navbar from "../Navbar/Navbar";

const Result = () => {
  return (
    <p className="py-4">
      Your message has been successfully sent. we will contact you soon
    </p>
  );
};

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
      <div className="md:mx-[5%]">
        <div className="flex text-[var(--lighter-blue,_#29335C)] my-5 md:my-8 mx-4">
          <Link className="w-[5%] md:text-3xl text-2xl font-bold" to="/home">
            <AiOutlineLeft />
          </Link>
          <div className="w-[95%] text-center text-3xl font-bold">
            Contact Us
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-16">
          <div className="col-span-1">
            <p className="text-center text-2xl md:text-3xl text-[var(--lighter-red,_rgb(127,29,29))] font-semibold pb-6">
              Reach out to us today.
            </p>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="mb-20 pt-3 pb-16 w-[90%] text-[var(--lighter-blue,_#29335C)] mx-auto"
              action=""
              method="post"
            >
              <div className="w-full">
                <input
                  className="pl-3 py-[15px] text-2xl w-full font-bold border-b-2 border-[var(--lighter-blue,_#29335C)] placeholder:text-[var(--lighter-blue,_#29335C)] my-[27px]"
                  type="text"
                  placeholder="Full Name"
                  required
                  name="name"
                />
              </div>
              <div className="w-full">
                <input
                  className="pl-3 py-[15px] text-2xl w-full font-bold border-b-2 border-[var(--lighter-blue,_#29335C)] placeholder:text-[var(--lighter-blue,_#29335C)] mb-[27px]"
                  type="email"
                  placeholder="Email"
                  required
                  name="email"
                />
              </div>
              <div className="w-full">
                <textarea
                  className="pl-3 py-[15px] text-2xl w-full font-bold border-b-2 border-[var(--lighter-blue,_#29335C)] bg-[var(--textarea-background)] placeholder:text-[var(--lighter-blue,_#29335C)] mb-[27px]"
                  type="text"
                  rows="5"
                  cols="10"
                  placeholder="Comment"
                  name="message"
                  required
                ></textarea>
              </div>
              <div className="my-5 text-center">
                <button className="py-4 bg-red w-[70%] mx-auto inline-block text-white text-2xl">
                  SUBMIT
                </button>
                <div className="row">{result ? <Result /> : null}</div>
              </div>
            </form>
          </div>
          <div className="md:mt-24 md:mb-40">
            <img
              className="w-full h-full"
              src={ContactImage}
              alt="conatact_image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
