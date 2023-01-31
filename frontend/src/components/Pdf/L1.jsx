import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillFolder } from 'react-icons/ai';
import { AiOutlineLeft } from 'react-icons/ai';
import Navbar from '../Navbar/Navbar';

const L1 = () => {
	const courses1 = ['MAT 101', 'FEG 101', 'PHY 101', 'ICH 101', 'ICH 111'];
	const courses2 = ['MAT 102', 'FEG 102', 'PHY 102', 'ICH 102', 'ICH 112', 'FEG 103'];
	return (
		<div>
			<Navbar />

			<div className='text-[var(--lighter-blue,_#29335c)] lg:mx-[15%]'>
				<div className='flex my-5 md:my-8 mx-4'>
					<Link className='w-1/12 text-2xl md:text-4xl font-bold' to='/ebook'>
						<AiOutlineLeft />
					</Link>
					<div className='w-11/12 text-center text-[17px] md:text-2xl font-bold mt-2'>100 Level</div>
				</div>
				<div className='mx-8 md:mx-14 mb-24 md:mb-28'>
					<p className='font-semibold text-2xl md:text-3xl mt-10 md:mt-14 mb-6 md:mb-8'>First Semester</p>
					{courses1.map((course1) => {
						return (
							<Link to={{ pathname: `/pdf/${course1}` }} state={{ from: course1 }} key={course1}>
								<div className='my-6 md:my-8 p-3 md:p-4 bg-[var(--light-black,_rgb(226,232,240))] rounded-full font-semibold text-xl md:text-2xl'>
									{course1}{' '}
									<span className='text-xl md:text-2xl float-right'>
										<AiFillFolder />
									</span>
								</div>
							</Link>
						);
					})}
					<p className='font-semibold text-2xl md:text-3xl mt-10 md:mt-14 mb-6 md:mb-8'>Second Semester</p>
					{courses2.map((course2) => {
						return (
							<Link to={`/pdf/${course2}`} state={{ from: course2 }} key={course2}>
								<div className='my-6 md:my-8 p-3 md:p-4 bg-[var(--light-black,_rgb(226,232,240))] rounded-full font-semibold text-xl md:text-2xl'>
									{course2}{' '}
									<span className='text-xl md:text-2xl float-right'>
										<AiFillFolder />
									</span>
								</div>
							</Link>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default L1;
