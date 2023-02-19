import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai';

const L1 = () => {
	return (
		<div className='text-[var(--lighter-blue,_#29335c)] lg:mx-[15%]'>
			<div className='flex my-5 md:my-8 mx-4'>
				<Link className='w-1/12 text-2xl md:text-4xl font-bold' to='/timetable'>
					<AiOutlineLeft />
				</Link>
				<div className='w-11/12 text-center text-[22px] md:text-[27px] font-bold mt-2'>100 Level</div>
			</div>
            <p className='text-center text-[17px] md:text-[20px] mt-10 md:mt-16 font-bold'>Lecture TimeTable</p>
            <div className='rounded-2xl md:rounded-3xl md:w-[80%] mt-5 mb-10 md:mb-16 w-[90%] mx-auto py-6'>
                <img className="w-full" src='' alt="timetable1_img" />
            </div>
		</div>
	);
};

export default L1;
