import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { FaUserCircle, FaVideo, FaCalculator, FaBook } from "react-icons/fa";
import { AiTwotoneSetting,AiFillSchedule } from "react-icons/ai";
import "./UserDashboard.css";
import footer_img from './images/image 16.png';

import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../../features/auth/authSlice";
import Mobiledashboard from "./Mobiledashboard";

const UserDashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(reset());
  }, [user, navigate, dispatch]);

  return (
    <div>
      <div className="hidden md:block">
        <Navbar/>
      </div>
      <Mobiledashboard/>
      <div className="md:flex all hidden ">
        <div className="bg-[#29335C] h-[1024px] w-[20rem] text-center text-white relative">
          <h1 className="text-[25px] font-semibold mt-4">Dashboard</h1>
          <ul className="text-center ml-[3.5rem] leading-[7rem]  mt-[8rem]">
            <li className="flex gap-2  items-center">
              <a href="/" className="text-[20px]">
                Profile
              </a>
              <FaUserCircle size={20} />
            </li>
            <li className="flex gap-2  items-center">
              <a href="/" className="text-[18px]">
               P.D.F’s
              </a>
              <FaBook size={20} />
            </li>
            <li className="flex gap-2 items-center">
              <a href="/" className="text-[18px]">
                Video Tutorials
              </a>
              <FaVideo size={20} />
            </li>
            <li className="flex gap-2 items-center">
              <a href="/" className="text-[18px]">
                Calculator
              </a>
              <FaCalculator size={20} />
            </li>
            <li className="flex gap-2 items-center">
              <a href="/" className="text-[18px]">
                Settings
              </a>
              <AiTwotoneSetting size={20} />
            </li>
          </ul>
        </div>

        <div className="w-[100%] px-8 pt-6">
          <div className="flex justify-between">
            <div>
              <p className="text-[#29335C]/40 font-medium">7th July, 2022.</p>
              <h1 className="text-[#29335C] font-semibold text-[25px]">
                Hello,{user && user.name}{" "}
              </h1>
            </div>
            <div>
              <FaUserCircle size={50} />
            </div>
          </div>

          <section className="grid-section text-[#29335C] mt-[6rem]">
            <Link to="" className="grid-tiles">
              <FaVideo size={50} />
              <p className="text-[20px]">Video tutorials</p>
            </Link>

            <Link to="" className="grid-tiles">
              <FaCalculator size={50} />
              <p className="text-[20px] font-normal">Calculate C.G.P.A</p>
            </Link>


            <Link to="/ebook" className="grid-tiles">
              <FaBook size={50} />
              <p className="text-[20px] font-normal">P.D.F / E-books</p>
            </Link>


            
            <Link to="/timetable" className="grid-tiles">
              <AiFillSchedule size={50} />
              <p className="text-[20px] font-normal">Time table</p>
            </Link>
          </section>

          <article className="footer-img-article">
            <img
              className="footer-img"
              src={footer_img}
              alt="Imge Expression"
            />
            <img
              className="footer-img"
              src={footer_img}
              alt="Imge Expression"
            />
            <img
              className="footer-img"
              src={footer_img}
              alt="Imge Expression"
            />
          </article>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
