import React, { useState } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { FaUserCircle, FaVideo, FaCalculator, FaBook } from 'react-icons/fa';
import { AiTwotoneSetting } from 'react-icons/ai';

// import images
import Video from './images/unsplash_eAiNt7N5FaA.png';
import Timetable from './images/image 22.png';
import Calculator from './images/image 21.png';
import PdfImage from './images/image 20.png';

import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../../features/auth/authSlice';
import { Link } from 'react-router-dom';
import './UserDashboard.css';

import { FaBars, FaTimes } from 'react-icons/fa';

const Mobiledashboard = () => {
	const [nav, setNav] = useState(false);
	const [click, setClick] = useState(false);

	const Toggle = () => {
		setNav(!nav);
	};
	const Clicked = () => {
		setClick(!click);
	};

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth);

	const onLogout = () => {
		dispatch(logout());
		dispatch(reset());
		navigate('/home');
	};
	const date = Date.now();

	return (
		<div className='md:hidden flex'>
			<div
				className={`${
					click
						? 'bg-[#29335C] w-[174px] h-[800px] z-10 text-[13px] px-4 rounded-r-[1rem] text-center font-semibold items-center justify-center text-white fixed'
						: 'bg-[#29335C] rounded-r-[1rem] px-4  font-semibold text-center text-white w-[54px] h-[800px]'
				}`}
			>
				<button onClick={Clicked}>
					{click ? (
						<span className='flex items-center mt-11'>
							<p className='text-white text-[16px]'>Dashboard</p>
							<IoIosArrowBack size={20} />
						</span>
					) : (
						<IoIosArrowForward className='mt-11' />
					)}
				</button>
				<div>
					{click ? (
						<>
							<div className='mt-[9rem] ml-[1rem] flex flex-col gap-[7rem] text-center items-center justify-center'>
								<Link to='/profile'>
									<div className='flex gap-2'>
										<h1>Profile</h1>
										<FaUserCircle size={20} />
									</div>
								</Link>
								<Link to='/ebook'>
									<div className='flex gap-2'>
										<h1>PDF'S</h1>
										<FaBook size={20} />
									</div>
								</Link>
								<Link to=''>
									<div className='flex gap-2'>
										<h1>Video Tutorials</h1>
										<FaVideo size={20} />
									</div>
								</Link>
								<Link to='/cgpa'>
									<div className='flex gap-2'>
										<h1>Calculator</h1>
										<FaCalculator size={20} />
									</div>
								</Link>
								<div>
									<Link to='/settings'>
										<div className='flex gap-2'>
											<h1>Settings</h1>
											<AiTwotoneSetting size={20} />
										</div>
									</Link>
								</div>
							</div>
						</>
					) : (
						<>
							<div className='mt-[6rem] leading-[12rem] mb-[5rem]'>
								<Link to='/profile'>
									<FaUserCircle size={20} className='mb-[6rem]' />
								</Link>
								<Link to='/ebook'>
									<FaBook size={20} className='mb-[6rem]' />
								</Link>
								<Link to=''>
									<FaVideo size={20} className='mb-[6rem]' />
								</Link>
								<Link to='/cgpa'>
									<FaCalculator size={20} className='mb-[6rem]' />
								</Link>
								<div>
									<Link to='/settings'>
										<AiTwotoneSetting size={20} />
									</Link>
								</div>
							</div>
						</>
					)}
				</div>
			</div>

			<div className=' w-[100%] mt-8 px-2 '>
				<div onClick={Toggle} className='hamburge mt-6'>
					{nav ? <FaTimes size={20} /> : <FaBars size={20} />}
				</div>
				<div className={nav ? 'nav-men right-1' : 'hidden'}>
					<ul>
						<div>
							{user ? (
								<>
									<li>
										<Link to='/'>Dashboard</Link>
									</li>
									<li>
										<Link to='/home'>Home</Link>
									</li>
								</>
							) : (
								<>
									<li>
										<Link to='/'>Dashboard</Link>
									</li>
									<li>
										<Link to='/about'>About</Link>
									</li>
									<li>
										<Link to='/contact'>Contact</Link>
									</li>
								</>
							)}
						</div>
					</ul>
					<div className='red'>
						{user ? (
							<>
								<Link to='/home' className='sign' onClick={onLogout}>
									LOGOUT
								</Link>
							</>
						) : (
							<>
								<Link to='/login' className='log'>
									LOG IN
								</Link>
								<Link to='/signup' className='sign'>
									SIGN UP
								</Link>
							</>
						)}
					</div>
				</div>
				<div className='flex gap-8 justify-between'>
					<div className='text-center ml-[6rem]'>
						<p className='text-[var(--lighter-blue,_#29335c)]/40 font-medium text-[12px]'>
							{new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(date)}.
						</p>
						<h1 className='text-[var(--lighter-blue,_#29335c)] font-semibold text-[14px]'>
							Hello,{user && user.name}{' '}
						</h1>
					</div>

					<div>
						<FaUserCircle size={35} />
					</div>
				</div>

				<section className=' mt-[2rem] justify-center items-center '>
					<Link
						to=''
						className='items-center flex gap-4 mb-8 rounded-3xl border border-none h-[127px] bg-[var(--light-black,_#E3E5EE)]'
					>
						<div>
							<img src={Video} alt='' />
						</div>

						<div className='text-[var(--lighter-blue,_#29335c)] w-[40%] mt-8'>
							<h1 className='text-[14px] font-semibold '>Video Tutorials</h1>
							<p className='text-[8px]'>
								Stream and download Recorded video lecturers and tutorials
							</p>
						</div>
					</Link>

					<Link
						to='/ebook'
						className=' flex gap-4 mb-8 rounded-3xl border border-none  h-[127px]  bg-[var(--light-black,_#E3E5EE)]'
					>
						<div>
							<img src={PdfImage} alt='' />
						</div>

						<div className='text-[var(--lighter-blue,_#29335c)] w-[40%] mt-8'>
							<h1 className='text-[14px] font-semibold '>PDF’S / E-books</h1>
							<p className='text-[8px]'>
								Download your level e-books and study materials for the semester
							</p>
						</div>
					</Link>

					<Link
						to='/cgpa'
						className=' flex gap-4 mb-8 rounded-3xl border border-none  h-[127px] bg-[var(--light-black,_#E3E5EE)]'
					>
						<div>
							<img src={Calculator} alt='' />
						</div>

						<div className='text-[var(--lighter-blue,_#29335c)] w-[40%] mt-8'>
							<h1 className='text-[14px] font-semibold '>GP Calculator</h1>
							<p className='text-[8px]'>
								Calculate and record your CGPA for each level with the GP Calculator
							</p>
						</div>
					</Link>

					<Link
						to='/timetable'
						className=' flex gap-4 mb-8 rounded-3xl border border-none  h-[127px] bg-[var(--light-black,_#E3E5EE)]'
					>
						<div>
							<img src={Timetable} alt='' />
						</div>

						<div className='text-[var(--lighter-blue,_#29335c)] w-[40%] mt-8'>
							<h1 className='text-[14px] font-semibold '>Time-Table</h1>
							<p className='text-[8px]'>
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
