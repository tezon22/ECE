import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AiOutlineLeft } from 'react-icons/ai';

const SecondL1 = () => {
	useEffect(() => {
		toast('READ THE INSTRUCTIONS');
	}, []);

	const [mat102, setMat102] = useState(null);
	const [feg102, setFeg102] = useState(null);
	const [phy102, setPhy102] = useState(null);
	const [ich102, setIch102] = useState(null);
	const [ich112, setIch112] = useState(null);
	const [feg103, setFeg103] = useState(null);
	const [phy108, setPhy108] = useState(null);
	const [gst102, setGst102] = useState(null);
	const [gst106, setGst106] = useState(null);
	const [gst110, setGst110] = useState(null);

	function calculate(mat102, feg102, phy102, ich102, ich112, feg103, phy108, gst102, gst106, gst110) {
		return (
			mat102 * 3 +
			feg102 * 2 +
			phy102 * 3 +
			ich102 * 2 +
			ich112 * 2 +
			feg103 * 2 +
			phy108 * 1 +
			gst102 * 1 +
			gst106 * 2 +
			gst110 * 1
		);
	}
	const calc = calculate(mat102, feg102, phy102, ich102, ich112, feg103, phy108, gst102, gst106, gst110);

	return (
		<div className='text-[var(--lighter-blue,_#29335c)] lg:mx-[15%]'>
			<div className='flex my-5 md:my-8 mx-4'>
				<Link className='w-1/12 text-2xl md:text-4xl font-bold' to='/L1cgpa'>
					<AiOutlineLeft />
				</Link>
				<div className='w-11/12 text-center text-[17px] md:text-2xl font-bold mt-2'>
					100 Level (Second Semester)
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
						value='MAT 102'
						disabled
					/>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='number'
						name='mat_grd'
						placeholder='Enter:'
						value={mat102}
						onChange={(e) =>
							setMat102(e.target.value < 6 ? e.target.value : toast('Grade no dey pass 5'))
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
						value='FEG 102'
						disabled
					/>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='number'
						name='feg_grd'
						placeholder='Enter:'
						value={feg102}
						onChange={(e) =>
							setFeg102(e.target.value < 6 ? e.target.value : toast('Grade no dey pass 5'))
						}
					/>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='number'
						name='feg_unt'
						value={2}
						disabled
					/>
				</div>
				<div className='flex my-5 text-[var(--lighter-blue,_#29335c)] mx-2 md:mx-4'>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='text'
						value='PHY 102'
						disabled
					/>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='number'
						name='phy_grd'
						placeholder='Enter:'
						value={phy102}
						onChange={(e) =>
							setPhy102(e.target.value < 6 ? e.target.value : toast('Grade no dey pass 5'))
						}
					/>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='number'
						name='phy_unt'
						value={3}
						disabled
					/>
				</div>
				<div className='flex my-5 text-[var(--lighter-blue,_#29335c)] mx-2 md:mx-4'>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='text'
						value='ICH 102'
						disabled
					/>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='number'
						name='ich1_grd'
						placeholder='Enter:'
						value={ich102}
						onChange={(e) =>
							setIch102(e.target.value < 6 ? e.target.value : toast('Grade no dey pass 5'))
						}
					/>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='number'
						name='ich1_unt'
						value={2}
						disabled
					/>
				</div>
				<div className='flex my-5 text-[var(--lighter-blue,_#29335c)] mx-2 md:mx-4'>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='text'
						value='ICH 112'
						disabled
					/>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='number'
						name='ich2_grd'
						placeholder='Enter:'
						value={ich112}
						onChange={(e) =>
							setIch112(e.target.value < 6 ? e.target.value : toast('Grade no dey pass 5'))
						}
					/>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='number'
						name='ich2_unt'
						value={2}
						disabled
					/>
				</div>
				<div className='flex my-5 text-[var(--lighter-blue,_#29335c)] mx-2 md:mx-4'>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='text'
						value='FEG 103'
						disabled
					/>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='number'
						name='feg2_grd'
						placeholder='Enter:'
						value={feg103}
						onChange={(e) =>
							setFeg103(e.target.value < 6 ? e.target.value : toast('Grade no dey pass 5'))
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
						value='PHY 108'
						disabled
					/>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='number'
						name='phy2_grd'
						placeholder='Enter:'
						value={phy108}
						onChange={(e) =>
							setPhy108(e.target.value < 6 ? e.target.value : toast('Grade no dey pass 5'))
						}
					/>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='number'
						name='phy2_unt'
						value={1}
						disabled
					/>
				</div>
				<div className='flex my-5 text-[var(--lighter-blue,_#29335c)] mx-2 md:mx-4'>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='text'
						value='GST 102'
						disabled
					/>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='number'
						name='eng_grd'
						placeholder='Enter:'
						value={gst102}
						onChange={(e) =>
							setGst102(e.target.value < 6 ? e.target.value : toast('Grade no dey pass 5'))
						}
					/>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='number'
						name='eng_unt'
						value={1}
						disabled
					/>
				</div>
				<div className='flex my-5 text-[var(--lighter-blue,_#29335c)] mx-2 md:mx-4'>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='text'
						value='GST 106'
						disabled
					/>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='number'
						name='social_grd'
						placeholder='Enter:'
						value={gst106}
						onChange={(e) =>
							setGst106(e.target.value < 6 ? e.target.value : toast('Grade no dey pass 5'))
						}
					/>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='number'
						name='social_unt'
						value={2}
						disabled
					/>
				</div>
				<div className='flex my-5 text-[var(--lighter-blue,_#29335c)] mx-2 md:mx-4'>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='text'
						value='GST 110'
						disabled
					/>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='number'
						name='igbo_grd'
						placeholder='Enter:'
						value={gst110}
						onChange={(e) =>
							setGst110(e.target.value < 6 ? e.target.value : toast('Grade no dey pass 5'))
						}
					/>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='number'
						name='igbo_unt'
						value={1}
						disabled
					/>
				</div>
				<div className='flex items-center'>
					<div className='my-8 w-[50%]'>
						<p className='md:w-1/2 md:mx-10 font-bold '>
							Total Credit Unit:
							<span className='bg-[var(--light-black,_rgb(226,232,240))] py-1 rounded-full text-center ml-4 w-[50%]  inline-block'>
								19
							</span>
						</p>
					</div>
					<p className='my-4 md:text-xl font-bold mx-4 text-right px-5 w-[50%]'>
						CGPA: {calc / 19}{' '}
					</p>
				</div>
			</div>
		</div>
	);
};

export default SecondL1;
