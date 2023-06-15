import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { AiFillFolder } from 'react-icons/ai';
import { AiOutlineLeft } from 'react-icons/ai';
import Navbar from '../Navbar/Navbar';
import Courses from '../../assests/Courses';

const Level = () => {
    const {level} = useParams()
    const session = Courses.filter((item)=> item.Session[0] === Number(level) )
    const firstSemester = session.filter((item)=> item.Session[1] === 1 && item.Course[0] !== "G")
    const secondSemester = session.filter((item)=> item.Session[1] === 2 && item.Course[0] !== "G")
	return (
		<div>
			<Navbar />

			<div className='text-[var(--lighter-blue,_#29335c)] lg:mx-[15%]'>
				<div className='flex my-5 md:my-8 mx-4'>
					<Link className='w-1/12 text-2xl md:text-4xl font-bold' to='/ebook'>
						<AiOutlineLeft />
					</Link>
					<div className='w-11/12 text-center text-[17px] md:text-2xl font-bold mt-2'>{`${level} Level`}</div>
				</div>
				<div className='mx-8 md:mx-14 mb-24 md:mb-28'>
					<p className='font-semibold text-2xl md:text-3xl mt-10 md:mt-14 mb-6 md:mb-8'>First Semester</p>
					{firstSemester.map((course1) => {
						return (
							<Link to={{ pathname: `/pdf/${course1.Course}` }} key={course1.Course}>
								<div className='my-6 md:my-8 p-3 md:p-4 bg-[var(--light-black,_rgb(226,232,240))] rounded-full font-semibold text-xl md:text-2xl'>
									{course1.Course}{' '}
									<span className='text-xl md:text-2xl float-right'>
										<AiFillFolder />
									</span>
								</div>
							</Link>
						);
					})}
					<p className='font-semibold text-2xl md:text-3xl mt-10 md:mt-14 mb-6 md:mb-8'>Second Semester</p>
					{secondSemester.map((course2) => {
						return (
							<Link to={`/pdf/${course2.Course}`}  key={course2.Course}>
								<div className='my-6 md:my-8 p-3 md:p-4 bg-[var(--light-black,_rgb(226,232,240))] rounded-full font-semibold text-xl md:text-2xl'>
									{course2.Course}{' '}
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

export default Level;
