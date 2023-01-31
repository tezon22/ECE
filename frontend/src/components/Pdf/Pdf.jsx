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
	const levels = [
		{ level: '100 level', link: '/L1pdf', availability: '' },
		{ level: '200 level', link: '/L2pdf', availability: '' },
		{ level: '300 level', link: '#', availability: 'Not Available now' },
		{ level: '400 level', link: '#', availability: 'Not Available now' },
		{ level: '500 level', link: '#', availability: 'Not Available now' },
	];

	const renderedList = levels.map((items) => {
		const { level, link, availability } = items;
		return (
			<Link key={level} to={link}>
				<div className='rounded-2xl md:rounded-3xl md:text-xl bg-[var(--light-black,_rgb(226,232,240))] my-8 md:my-14 mx-10 md:mx-24'>
					<p className='text-center font-medium pt-10 md:pt-16 pb-2 md:pb-5'>{level}</p>
					<p className='p-2 md:p-4 text-right text-[10px] font-light'> {availability} </p>
				</div>
			</Link>
		);
	});

	return (
		<div>
			<Navbar />
			<div className='text-[var(--lighter-blue,_#29335c)] lg:mx-[15%]'>
				<div className='flex my-5 md:my-8 mx-4'>
					<Link className='w-1/12 md:text-4xl text-2xl font-bold' to='/'>
						<AiOutlineLeft />
					</Link>
					<div className='w-11/12 text-center md:text-xl font-bold mt-2'>
						Select your level (P.D.F)
					</div>
				</div>
				{renderedList}
			</div>
		</div>
	);
};

export default Pdf;
