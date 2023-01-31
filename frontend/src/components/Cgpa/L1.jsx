import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai';

const L1cgpa = () => {
	return (
		<div className='text-[var(--lighter-blue,_#29335c)] lg:mx-[15%]'>
			<div className='flex mt-5 md:mt-8 mx-4 mb-28'>
				<Link className='w-1/12 text-2xl md:text-4xl font-bold' to='/cgpa'>
					<AiOutlineLeft />
				</Link>
				<div className='w-11/12 text-center text-[17px] md:text-2xl font-bold mt-2'>
					100 Level (CGPA)
				</div>
			</div>
			<Link to='/firstL1'>
				<div className='rounded-2xl md:rounded-3xl md:text-xl bg-[var(--light-black,_rgb(226,232,240))] text-center font-medium py-12 md:py-16 my-7 md:my-14 mx-10 md:mx-20'>
					First Semester
				</div>
			</Link>
			<Link to='/secondL1'>
				<div className='rounded-2xl md:rounded-3xl md:text-xl bg-[var(--light-black,_rgb(226,232,240))] text-center font-medium py-12 md:py-16 my-7 md:my-14 mx-10 md:mx-20'>
					Second Semester
				</div>
			</Link>
		</div>
	);
};

export default L1cgpa;
