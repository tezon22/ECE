import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai';
import Navbar from '../Navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { getPdf } from '../../features/pdf/Getpdfs';

const Pdf = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getPdf());
	}, [dispatch]);

	const { message } = useSelector((state) => state.pdfs);
	localStorage.setItem('pdfs', JSON.stringify(message));

	return (
		<div>
			<Navbar />
			<div className='text-[#29335C] lg:mx-[15%]'>
				<div className='flex my-5 md:my-8 mx-4'>
					<Link className='w-1/12 md:text-4xl text-2xl font-bold' to='/'>
						<AiOutlineLeft />
					</Link>
					<div className='w-11/12 text-center md:text-xl font-bold mt-2'>
						Select your level (P.D.F)
					</div>
				</div>
				<Link to='/L1pdf'>
					<div className='rounded-2xl md:rounded-3xl md:text-xl bg-[var(--light-black,_rgb(226,232,240))] text-center font-medium py-10 md:py-16 my-8 md:my-14 mx-10 md:mx-24'>
						100 level
					</div>
				</Link>
				<Link to='/L2pdf'>
					<div className='rounded-2xl md:rounded-3xl md:text-xl bg-[var(--light-black,_rgb(226,232,240))] text-center font-medium py-10 md:py-16 my-8 md:my-14 mx-10 md:mx-24'>
						200 level
					</div>
				</Link>
				<a href='#a'>
					<div className='rounded-2xl md:rounded-3xl md:text-xl bg-[var(--light-black,_rgb(226,232,240))] my-8 md:my-14 mx-10 md:mx-24'>
						<p className='text-center font-medium pt-10 md:pt-16 pb-2 md:pb-5'>300 level</p>
						<p className='p-2 md:p-4 text-right text-[10px] font-light'>Not Available now</p>
					</div>
				</a>
				<a href='#a'>
					<div className='rounded-2xl md:rounded-3xl md:text-xl bg-[var(--light-black,_rgb(226,232,240))] my-8 md:my-14 mx-10 md:mx-24'>
						<p className='text-center font-medium pt-10 md:pt-16 pb-2 md:pb-5'>400 level</p>
						<p className='p-2 md:p-4 text-right text-[10px] font-light'>Not Available now</p>
					</div>
				</a>
				<a href='#a'>
					<div className='rounded-2xl md:rounded-3xl md:text-xl bg-[var(--light-black,_rgb(226,232,240))] my-8 md:my-14 mx-10 md:mx-24'>
						<p className='text-center font-medium pt-10 md:pt-16 pb-2 md:pb-5'>500 level</p>
						<p className='p-2 md:p-4 text-right text-[10px] font-light'>Not Available now</p>
					</div>
				</a>
			</div>
		</div>
	);
};

export default Pdf;
