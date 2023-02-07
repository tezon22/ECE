import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { FaUserCircle, FaVideo, FaCalculator, FaBook } from 'react-icons/fa';
import { AiTwotoneSetting, AiFillSchedule } from 'react-icons/ai';
import './UserDashboard.css';
import footer_img from './images/image 16.png';
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { reset } from '../../features/auth/authSlice';
import Mobiledashboard from './Mobiledashboard';

const UserDashboard = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.auth);

	useEffect(() => {
		dispatch(reset());

		if (user == null) {
			navigate('/home');
		}
	}, [user, navigate, dispatch]);

	const date = Date.now();

	return (
		<div>
			<div className='hidden md:block'>
				<Navbar />
			</div>
			<Mobiledashboard />
			<div className='md:flex all hidden'>
				<div className='bg-[var(--darker-blue,_rgb(41,51,92))] w-[25rem] text-[var(--text-color,_white)] flex flex-col items-center gap-[17rem] pt-[5rem] text-center'>
					<h1 className='text-[25px] font-semibold'>Dashboard</h1>
					<ul className='flex flex-col gap-[9rem]'>
						<li className='flex gap-2 items-center'>
							<Link to='/profile' className='text-[20px]'>
								Profile
							</Link>
							<FaUserCircle size={20} />
						</li>
						<li className='flex gap-2 items-center'>
							<Link to='/ebook' className='text-[18px]'>
								P.D.F's
							</Link>
							<FaBook size={20} />
						</li>
						<li className='flex gap-2 items-center'>
							<Link to='/' className='text-[18px]'>
								Video Tutorials
							</Link>
							<FaVideo size={20} />
						</li>
						<li className='flex gap-2 items-center'>
							<Link to='/cgpa' className='text-[18px]'>
								Calculator
							</Link>
							<FaCalculator size={20} />
						</li>
						<li className='flex gap-2 items-center'>
							<Link to='/settings' className='text-[18px]'>
								Settings
							</Link>
							<AiTwotoneSetting size={20} />
						</li>
					</ul>
				</div>

				<div className='w-[100%] flex flex-col p-[4rem_4rem_0]'>
					<div className='flex justify-between'>
						<div>
							<p className='text-[var(--trans-blue,_rgb(41,51,92,0.4))] font-medium'>
								{new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(date)}.
							</p>
							<h1 className='text-[var(--lighter-blue,_rgb(41,51,92))] font-semibold text-[25px]'>
								Hello,{user && user.name}{' '}
							</h1>
						</div>
						<div>
							<FaUserCircle size={50} />
						</div>
					</div>

					<section className='grid-section self-center mt-[12rem] text-[var(--lighter-blue,_rgb(41,51,92))]'>
						<Link to='/' className='grid-tiles'>
							<FaVideo size={50} />
							<p className='text-[20px]'>Video tutorials</p>
						</Link>

						<Link to='/cgpa' className='grid-tiles'>
							<FaCalculator size={50} />
							<p className='text-[20px] font-normal'>Calculate C.G.P.A</p>
						</Link>

						<Link to='/ebook' className='grid-tiles'>
							<FaBook size={50} />
							<p className='text-[20px] font-normal'>P.D.F / E-books</p>
						</Link>

						<Link to='/timetable' className='grid-tiles'>
							<AiFillSchedule size={50} />
							<p className='text-[20px] font-normal'>Time table</p>
						</Link>
					</section>

					<article className='footer-img-article'>
						<img className='footer-img' src={footer_img} alt='Imge Expression' />
						<img className='footer-img' src={footer_img} alt='Imge Expression' />
						<img className='footer-img' src={footer_img} alt='Imge Expression' />
					</article>
				</div>
			</div>
		</div>
	);
};

export default UserDashboard;
