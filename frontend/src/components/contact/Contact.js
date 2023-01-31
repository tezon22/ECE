import React from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai';
import Navbar from '../Navbar/Navbar';

const Contact = () => {
	return (
		<div>
			<Navbar />
			<div className='md:mx-[10%]'>
				<div className='flex text-[var(--lighter-blue,_#29335C)] my-5 md:my-8 mx-4'>
					<Link className='w-[5%] md:text-3xl text-xl font-bold' to='/home'>
						<AiOutlineLeft />
					</Link>
					<div className='w-[95%] text-center text-xl md:text-2xl font-bold'>Contact Us</div>
				</div>
				<div>
					<p className='text-center text-xl mt-20 text-[var(--lighter-red,_rgb(127,29,29))] font-semibold pb-6'>
						Reach out to us today.
					</p>
					<form
						className='bg-[var(--root-background,_rgb(203,213,225))] rounded-xl mb-20 pt-3 pb-16 w-[90%] md:w-[60%] shadow-3xl text-[var(--lighter-blue,_#29335C)] mx-auto'
						action=''
						method='post'
					>
						<div className='w-[90%] mx-auto'>
							<input
								className='p-3 text-xl bg-[var(--light-black,_rgb(226,232,240))] w-full rounded-xl border-b-2 border-[var(--lighter-blue,_#29335C)] placeholder:text-[var(--lighter-blue,_#29335C)] my-3'
								type='text'
								placeholder='Full Name'
								required
							/>
						</div>
						<div className='w-[90%] mx-auto'>
							<input
								className='p-3 text-xl bg-[var(--light-black,_rgb(226,232,240))]  rounded-xl w-full border-b-2 border-[var(--lighter-blue,_#29335C)] placeholder:text-[var(--lighter-blue,_#29335C)] my-3'
								type='email'
								placeholder='Email'
								required
							/>
						</div>
						<div className='w-[90%] mx-auto'>
							<textarea
								className='p-3 text-xl bg-[var(--light-black,_rgb(226,232,240))]  rounded-xl w-full border-b-2 border-[var(--lighter-blue,_#29335C)] placeholder:text-[var(--lighter-blue,_#29335C)] my-3'
								type='text'
								rows='5'
								cols='10'
								placeholder='Comment'
							></textarea>
						</div>
						<div className='my-5 text-center'>
							<button className='py-2 bg-red-900 w-[70%] mx-auto inline-block text-white text-lg'>
								SUBMIT
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
