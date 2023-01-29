import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai';

const Cgpa = () => {
	return (
		<div className='text-[var(--lighter-blue,_#29335c)] lg:mx-[15%]'>
			<div className='flex my-5 mx-4'>
				<Link className='w-1/12 text-2xl md:text-4xl font-bold' to='/'>
					<AiOutlineLeft />
				</Link>
				<div className='w-11/12 text-center md:text-2xl font-bold mt-2'>Select your level (CGPA)</div>
			</div>
			<Link to='/L1cgpa'>
				<div className='rounded-2xl md:rounded-3xl md:text-xl bg-[var(--light-black,_rgb(226,232,240))] text-center font-medium py-10 md:py-16 my-8 md:my-14 mx-10 md:mx-24'>
					100 level
				</div>
			</Link>
			<Link to='/L2cgpa'>
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
	);
};

export default Cgpa;
