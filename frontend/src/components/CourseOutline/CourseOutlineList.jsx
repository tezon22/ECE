import React, { useEffect }   from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai';
import Navbar from '../Navbar/Navbar';


const Outline = () => {
	const levels = [
		{ level: '100 level', link: '/course/outline/100'},
		{ level: '200 level', link: '/course/outline/200'},
		{ level: '300 level', link: '/course/outline/300'},
		{ level: '400 level', link: '/course/outline/400'},
		{ level: '500 level', link: '/course/outline/500'},
	];

	const renderedList = levels.map((items) => {
		const { level, link} = items;
		return (
			<Link key={level} to={link}>
				<div className='rounded-2xl md:rounded-3xl md:text-xl bg-[var(--light-black,_rgb(226,232,240))] my-8 md:my-14 mx-10 md:mx-24'>
					<p className='text-center font-medium py-10 '>{level}</p>
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
						Select your level (CourseOutline)
					</div>
				</div>
				{renderedList}
			</div>
		</div>
	);
};

export default Outline;
