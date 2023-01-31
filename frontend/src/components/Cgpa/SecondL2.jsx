import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai';

const SecondL2 = () => {
	useEffect(() => {
		toast('READ THE INSTRUCTIONS');
	}, []);
	const [mat202, setMat202] = useState(null);
	const [feg202, setFeg202] = useState(null);
	const [feg242, setFeg242] = useState(null);
	const [feg212, setFeg212] = useState(null);
	const [feg214, setFeg214] = useState(null);
	const [feg215, setFeg215] = useState(null);
	const [feg280, setFeg280] = useState(null);
	const [feg282, setFeg282] = useState(null);
	const [csc202, setCsc202] = useState(null);
	const [bus204, setBus204] = useState(null);

	function calculate(mat202, feg202, feg242, feg212, feg214, feg215, feg280, feg282, csc202, bus204) {
		return (
			mat202 * 3 +
			feg202 * 3 +
			feg242 * 2 +
			feg212 * 2 +
			feg214 * 2 +
			feg215 * 3 +
			feg280 * 2 +
			feg282 * 2 +
			csc202 * 2 +
			bus204 * 2
		);
	}
	const calc = calculate(mat202, feg202, feg242, feg212, feg214, feg215, feg280, feg282, csc202, bus204);

	return (
		<div className='text-[var(--lighter-blue,_#29335c)] lg:mx-[15%]'>
			<div className='flex my-5 md:my-8 mx-4'>
				<Link className='w-1/12 text-2xl md:text-4xl font-bold' to='/L2cgpa'>
					<AiOutlineLeft />
				</Link>
				<div className='w-11/12 text-center text-[17px] md:text-2xl font-bold mt-2'>
					200 Level (Second Semester)
				</div>
			</div>
			<div className='my-12'>
				<p className='text-center text-2xl font-bold mb-6'>CGPA Calculator</p>
				<p className='text-center text-md'>
					Please input your grade units and let us calculate your CGPA using this format.
				</p>
				<div className=' flex justify-center gap-3 text-right mx-auto my-6 font-bold'>
					<p>A -- 5</p>
					<p>B -- 4</p>
					<p>C -- 3</p>
					<p>D -- 2</p>
					<p>E -- 1</p>
					<p>F -- 0</p>
				</div>
			</div>
			<div className='mb-28'>
				<div className='flex mx-3'>
					<p className='w-[33%] text-center md:text-xl font-bold py-3'>Courses</p>
					<p className='w-[33%] text-center md:text-xl font-bold py-3'>Grades</p>
					<p className='w-[33%] text-center md:text-xl font-bold py-3'>Credit Units</p>
				</div>
				<div className='flex my-5 text-[var(--lighter-blue,_#29335c)] mx-2 md:mx-4'>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='text'
						value='MAT 202'
						disabled
					/>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='number'
						name='mat_grd'
						placeholder='Enter:'
						value={mat202}
						onChange={(e) =>
							setMat202(e.target.value < 6 ? e.target.value : toast('Grade no dey pass 5'))
						}
					/>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='number'
						name='mat_unt'
						value={3}
						disabled
					/>
				</div>
				<div className='flex my-5 text-[var(--lighter-blue,_#29335c)] mx-2 md:mx-4'>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='text'
						value='FEG 202'
						disabled
					/>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='number'
						name='feg1_grd'
						placeholder='Enter:'
						value={feg202}
						onChange={(e) =>
							setFeg202(e.target.value < 6 ? e.target.value : toast('Grade no dey pass 5'))
						}
					/>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='number'
						name='feg1_unt'
						value={3}
						disabled
					/>
				</div>
				<div className='flex my-5 text-[var(--lighter-blue,_#29335c)] mx-2 md:mx-4'>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='text'
						value='FEG 242'
						disabled
					/>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='number'
						name='feg2_grd'
						placeholder='Enter:'
						value={feg242}
						onChange={(e) =>
							setFeg242(e.target.value < 6 ? e.target.value : toast('Grade no dey pass 5'))
						}
					/>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='number'
						name='feg2_unt'
						value={2}
						disabled
					/>
				</div>
				<div className='flex my-5 text-[var(--lighter-blue,_#29335c)] mx-2 md:mx-4'>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='text'
						value='FEG 212'
						disabled
					/>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='number'
						name='feg3_grd'
						placeholder='Enter:'
						value={feg212}
						onChange={(e) =>
							setFeg212(e.target.value < 6 ? e.target.value : toast('Grade no dey pass 5'))
						}
					/>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='number'
						name='feg3_unt'
						value={2}
						disabled
					/>
				</div>
				<div className='flex my-5 text-[var(--lighter-blue,_#29335c)] mx-2 md:mx-4'>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='text'
						value='FEG 214'
						disabled
					/>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='number'
						name='feg4_grd'
						placeholder='Enter:'
						value={feg214}
						onChange={(e) =>
							setFeg214(e.target.value < 6 ? e.target.value : toast('Grade no dey pass 5'))
						}
					/>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='number'
						name='feg4_unt'
						value={2}
						disabled
					/>
				</div>
				<div className='flex my-5 text-[var(--lighter-blue,_#29335c)] mx-2 md:mx-4'>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='text'
						value='FEG 215'
						disabled
					/>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='number'
						name='feg5_grd'
						placeholder='Enter:'
						value={feg215}
						onChange={(e) =>
							setFeg215(e.target.value < 6 ? e.target.value : toast('Grade no dey pass 5'))
						}
					/>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='number'
						name='feg5_unt'
						value={3}
						disabled
					/>
				</div>
				<div className='flex my-5 text-[var(--lighter-blue,_#29335c)] mx-2 md:mx-4'>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='text'
						value='FEG 280'
						disabled
					/>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='number'
						name='feg6_grd'
						placeholder='Enter:'
						value={feg280}
						onChange={(e) =>
							setFeg280(e.target.value < 6 ? e.target.value : toast('Grade no dey pass 5'))
						}
					/>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='number'
						name='feg6_unt'
						value={2}
						disabled
					/>
				</div>
				<div className='flex my-5 text-[var(--lighter-blue,_#29335c)] mx-2 md:mx-4'>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='text'
						value='FEG 282'
						disabled
					/>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='number'
						name='feg7_grd'
						placeholder='Enter:'
						value={feg282}
						onChange={(e) =>
							setFeg282(e.target.value < 6 ? e.target.value : toast('Grade no dey pass 5'))
						}
					/>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='number'
						name='feg7_unt'
						value={2}
						disabled
					/>
				</div>
				<div className='flex my-5 text-[var(--lighter-blue,_#29335c)] mx-2 md:mx-4'>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='text'
						value='CSC 202'
						disabled
					/>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='number'
						name='csc_grd'
						placeholder='Enter:'
						value={csc202}
						onChange={(e) =>
							setCsc202(e.target.value < 6 ? e.target.value : toast('Grade no dey pass 5'))
						}
					/>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='number'
						name='csc_unt'
						value={2}
						disabled
					/>
				</div>
				<div className='flex my-5 text-[var(--lighter-blue,_#29335c)] mx-2 md:mx-4'>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='text'
						value='BUS 204'
						disabled
					/>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='number'
						name='bus_grd'
						placeholder='Enter:'
						value={bus204}
						onChange={(e) =>
							setBus204(e.target.value < 6 ? e.target.value : toast('Grade no dey pass 5'))
						}
					/>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='number'
						name='bus_unt'
						value={2}
						disabled
					/>
				</div>
				<div className='flex items-center'>
					<div className='my-8 w-[50%]'>
						<p className='md:w-1/2 md:mx-10 font-bold '>
							Total Credit Unit:
							<span className='bg-[var(--light-black,_rgb(226,232,240))] py-1 rounded-full text-center ml-4 w-[50%]  inline-block'>
								23
							</span>
						</p>
					</div>
					<p className='my-4 md:text-xl font-bold mx-4 text-right px-5 w-[50%]'>
						CGPA: {calc / 23}{' '}
					</p>
				</div>
			</div>
		</div>
	);
};

export default SecondL2;
