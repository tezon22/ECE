import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";
import { FaUserCircle } from 'react-icons/fa';
import Modal from "react-overlays/Modal"
import Navbar from "../Navbar/Navbar";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout, reset } from '../../features/auth/authSlice';
import UpdateForm from "./UpdateForm";

const Profile = () => {
      const navigate = useNavigate();
      const dispatch = useDispatch();
      const { user } = useSelector((state) => state.auth);
      const [showModal, setShowModal] = useState(false);

      const renderBackdrop = (props) => <div className="fixed z-[1040] inset-0 bg-[#555] opacity-50" {...props} />

      let handleClose = () => setShowModal(false);
      let handleSuccess = () => {
        console.log("success");
      }

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
                            </div>
                            
                            {/*This is the user info edit page*/}
                            <div className="max-[767px]:text-center max-[767px]:mt-7">
                                  <div className="mb-24 flex flex-col gap-3">
                                        <p className="text-3xl md:text-4xl font-semibold">Name</p>
                                        <p className="text-2xl md:text-3xl">{user && user.name}</p>
                                  </div>
                                  <div className="mb-24 flex flex-col gap-3">
                                        <p className="text-3xl md:text-4xl font-semibold">Email</p>
                                        <p className="text-2xl md:text-3xl">{user && user.email}</p>
                                  </div>
                                  <div className="mb-24 flex flex-col gap-3">
                                        <p className="text-3xl md:text-4xl font-semibold">Password</p>
                                        <p>
                                              <Link to="" className="text-2xl md:text-3xl text-[var(--lighter-red,_rgb(127,29,29))]">Change Password</Link>
                                        </p>
                                  </div>
                                  <div className="my-5 max-[767px]:w-[80%] mx-auto max-[767px]:text-center">
                                       <button type="button" onClick={() => setShowModal(true)} className="bg-[var(--lighter-blue,_#29335c)] inline-block text-white text-2xl rounded-xl text-center my-5 py-4 w-[50%] md:w-[40%] max-[767px]:mx-auto md:mr-5 max-[767px]:block">
                                          EDIT PROFILE
                                        </button>
                                        <Link to="/home" onClick={onLogout} className="py-4 bg-red w-[50%] text-center inline-block max-[767px]:block max-[767px]:mx-auto text-white text-2xl md:w-[40%] md:ml-5 rounded-xl">
                                            LOGOUT
                                        </Link>
                                  </div>
                            </div>
                      </div>
                      <Modal className="fixed z-[1040] left-[10%] top-[20%] md:left-[20%] bg-white shadow-3xl rounded-md md:w-[60%] w-[80%]" show={showModal} onHide={handleClose} renderBackdrop={renderBackdrop}>
                            <div>
                                <button type="button" className="font-bold text-5xl text-right w-[90%] inline-block mt-6 mx-8" onClick={handleClose}>
                                    x
                                </button>
                                <div>
                                    <UpdateForm />
                                </div>
                                <div className="w-[85%] mb-8 mx-auto">
                                    <div className="text-left inline-block w-[50%]">
                                        <button onClick={handleClose} className="bg-red text-white text-center py-3 px-[20%] rounded-lg ">
                                            Cancel
                                        </button>
                                    </div>
                                    <div className="text-right inline-block w-[50%]">
                                        <button onClick={handleSuccess} className="bg-[var(--lighter-blue,_#29335c)] text-white text-center py-3 px-[20%] rounded-lg ">
                                            Update
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                      </Modal>
                      
                </div>
            </div>
    );
};

export default Profile;