import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";
import { FaUserCircle } from 'react-icons/fa';
import Navbar from "../Navbar/Navbar";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout, reset } from '../../features/auth/authSlice';

const Profile = () => {
      const navigate = useNavigate();
      const dispatch = useDispatch();
      const { user } = useSelector((state) => state.auth);
      
      const onLogout = () => {
        		dispatch(logout());
        		dispatch(reset());
        		navigate('/home');
        	};
      
      return (
            <div>
                <Navbar />
                <div className="md:mx-[5%]">
                      <div className="flex text-[var(--lighter-blue,_#29335c)] my-5 md:my-8 mx-4">
                            <Link className="w-[5%] font-bold" to="/">
                                  <AiOutlineLeft size={20} />
                            </Link>
                            <div className="w-[95%] text-center text-3xl md:text-4xl font-bold">
                                  Profile
                            </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-7 md:my-20 py-5 text-[var(--lighter-blue,_#29335c)]">
                      
                            {/* This is the profile picture div*/}
                            <div className="text-center">
                                  <div className="text-center">
                                        <div className="text-center bg-slate-300 rounded-full mx-auto inline-block p-3 md:p-16">
                                              <FaUserCircle size={55} />
                                        </div>
                                  </div>
                                  <Link to="" className="text-[var(--lighter-red,_rgb(127,29,29))] font-semibold">Edit</Link>
                            </div>
                            
                            {/*This is the user info edit page*/}
                            <div className="max-[767px]:text-center max-[767px]:mt-7">
                                  <div className="mb-24 flex flex-col gap-3">
                                        <p className="text-3xl md:text-4xl font-semibold">Name</p>
                                        <p className="text-2xl md:text-3xl">{user && user.name}</p>
                                        <p>
                                              <Link to="" className="text-2xl md:text-3xl text-[var(--lighter-red,_rgb(127,29,29))]">Change Name</Link>
                                        </p>
                                  </div>
                                  <div className="mb-24 flex flex-col gap-3">
                                        <p className="text-3xl md:text-4xl font-semibold">Email</p>
                                        <p className="text-2xl md:text-3xl">{user && user.email}</p>
                                        <p>
                                              <Link to="" className="text-2xl md:text-3xl text-[var(--lighter-red,_rgb(127,29,29))]">Change Email</Link>
                                        </p>
                                  </div>
                                  <div className="mb-24 flex flex-col gap-3">
                                        <p className="text-3xl md:text-4xl font-semibold">Password</p>
                                        <p>
                                              <Link to="" className="text-2xl md:text-3xl text-[var(--lighter-red,_rgb(127,29,29))]">Change Password</Link>
                                        </p>
                                  </div>
                                  <div className="my-5 max-[767px]:text-center">
                                        <Link to="/home" onClick={onLogout} className="py-4 bg-red w-[50%] text-center inline-block text-white text-2xl rounded-xl">
                                              LOGOUT
                                        </Link>
                                  </div>
                            </div>
                      </div>
                      
                </div>
            </div>
    );
};

export default Profile;