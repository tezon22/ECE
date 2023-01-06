import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { FaUserCircle, FaVideo, FaCalculator, FaBook } from "react-icons/fa";
import { AiTwotoneSetting } from "react-icons/ai";

// import images
import Video from "./images/unsplash_eAiNt7N5FaA.png";
import Timetable from "./images/image 22.png";
import Calculator from "./images/image 21.png";
import PdfImage from "./images/image 20.png";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";
import { Link } from "react-router-dom";
import "./UserDashboard.css";

import { FaBars, FaTimes } from "react-icons/fa";

const Mobiledashboard = () => {
  const [nav, setNav] = useState(false);
  const Toggle = () => {
    setNav(!nav);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/home");
  };
  return (
    <div className="lg:hidden flex">
      <div className="bg-[#29335C] rounded-r-[1rem] px-4  font-semibold text-center text-white w-[54px] h-[800px]">
        <IoIosArrowBack className="mt-11" />
        <div className="mt-[6rem] leading-[12rem] mb-[5rem] ">
          <FaUserCircle size={20} className="mb-[6rem]" />
          <FaBook size={20} className="mb-[6rem]" />
          <FaVideo size={20} className="mb-[6rem]" />
          <FaCalculator size={20} className="mb-[6rem]" />
        </div>
        <div>
          <AiTwotoneSetting size={20} />
        </div>
      </div>

      <div className=" w-[100%] mt-8 px-2 ">
        <div onClick={Toggle} className="hamburge mt-6">
          {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
        </div>
        <div className={nav ? "nav-men right-1" : "hidden"}>
          <ul>
            <div>
              {user ? (
                <>
                  <li>
                    <Link to="/">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/home">Home</Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/">Info</Link>
                  </li>
                  <li>
                    <Link to="/sections">Section</Link>
                  </li>
                </>
              )}
            </div>
          </ul>
          <div className="red">
            {user ? (
              <>
                <Link to="/home" className="sign" onClick={onLogout}>
                  LOGOUT
                </Link>
              </>
            ) : (
              <>
                <Link to="/login" className="log">
                  LOG IN
                </Link>
                <Link to="/signup" className="sign">
                  SIGN UP
                </Link>
              </>
            )}
          </div>
        </div>
        <div className="flex gap-8 justify-between">
          <div className="text-center ml-[5rem]">
            <p className="text-[#29335C]/40 font-medium text-[12px]">
              7th July, 2022.
            </p>
            <h1 className="text-[#29335C] font-semibold text-[14px]">
              Hello,{user && user.name}{" "}
            </h1>
          </div>

          <div>
            <FaUserCircle size={35} />
          </div>
        </div>

        <section className=" mt-[2rem]  ">
          <Link to='' className=" flex gap-4 mb-8 rounded-3xl border border-none h-[127px] bg-[#E3E5EE]">
            <div>
              <img src={Video} alt="" />
            </div>

            <div className="text-[#29335C] w-[40%] mt-8">
              <h1 className="text-[14px] font-semibold ">Video Tutorials</h1>
              <p className="text-[8px]">
                Stream and download Recorded video lecturers and tutorials
              </p>
            </div>
          </Link>

          <Link to='/ebook' className=" flex gap-4 mb-8 rounded-3xl border border-none h-[127px] bg-[#E3E5EE]">
            <div>
              <img src={PdfImage} alt="" />
            </div>

            <div className="text-[#29335C] w-[40%] mt-8">
              <h1 className="text-[14px] font-semibold ">PDF’S / E-books</h1>
              <p className="text-[8px]">
                Download your level e-books and study materials for the semester
              </p>
            </div>
          </Link>

          <Link to='' className=" flex gap-4 mb-8 rounded-3xl border border-none h-[127px] bg-[#E3E5EE]">
            <div>
              <img src={Calculator} alt="" />
            </div>

            <div className="text-[#29335C] w-[40%] mt-8">
              <h1 className="text-[14px] font-semibold ">GP Calculator</h1>
              <p className="text-[8px]">
                Calculate and recoerd your CGPA for each level with the GP
                Calculator
              </p>
            </div>
          </Link>

          <Link to='/timetable' className=" flex gap-4 mb-8 rounded-3xl border border-none h-[127px] bg-[#E3E5EE]">
            <div>
              <img src={Timetable} alt="" />
            </div>

            <div className="text-[#29335C] w-[40%] mt-8">
              <h1 className="text-[14px] font-semibold ">Time-Table</h1>
              <p className="text-[8px]">
                find your lectures and event timetable for the semester.
              </p>
            </div>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Mobiledashboard;
