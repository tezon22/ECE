import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";
import Navbar from "../Navbar/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="md:mx-[10%]">
        <div className="flex text-[var(--lighter-blue,_#29335c)] my-5 md:my-8 mx-4">
          <Link className="w-[5%] font-bold" to="/home">
            <AiOutlineLeft size={20} />
          </Link>
          <div className="w-[95%] text-center text-3xl md:text-4xl font-bold">
            About Us
          </div>
        </div>
        <div className="mb-16">
          <p className="text-[var(--lighter-blue,_#29335c)] my-8 text-center font-bold text-2xl md:text-3xl">
            TEZON
          </p>
          <p className="py-2 w-[90%] md:w-[80%] mx-auto text-center font-thin">
            With issues surrounding lack of materials for study, resources to
            futher one's horizon on a topic or course and easy accessibility to
            these and many more; this project was formed. In addition,
            calculating GPA for all levels in ECE -Engineering has been
            simplified which helps in getting accurate assessment of periodic
            result.
          </p>
          <p className="py-2 w-[90%] md:w-[80%] mx-auto text-center font-thin">
            To make it an exciting program, periodic course schedules for each
            course offered has been included, which is updated from time to time
            as the courses schedules are changed. Also, Up-To-Date News
            highlights about the department and faculty at large are uploaded
            periodically; making you a top scholar in tech in Nnamdi Azikiwe
            University.
          </p>
          <p className="py-2 w-[90%] md:w-[80%] mx-auto text-center font-thin">
            TEZON, a tech team of nine (9) members came up with this beautiful
            project to help liked-minds students achieve success while studying
            in UNIZIK. We believe you will find this project helpful in all
            areas of your academic.
          </p>
          <p className="py-2 w-[90%] md:w-[80%] mx-auto text-center font-thin">
            TEZON wishes you SUCCESS!!!
          </p>
          <p className="py-2 w-[90%] md:w-[80%] text-center mx-auto font-thin">
            ©2023
          </p>
          <div className="my-4 text-center ">
            <Link
              to="/contact"
              className="text-white text-center py-4 text-3xl bg-red rounded-xl inline-block mx-auto w-[80%] md:w-[60%]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
