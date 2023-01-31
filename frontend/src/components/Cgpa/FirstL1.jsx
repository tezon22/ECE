import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AiOutlineLeft } from 'react-icons/ai';

const FirstL1 = () => {
	useEffect(() => {
		toast('READ THE INSTRUCTIONS');
	}, []);
	const [mat101, setMat101] = useState(null);
	const [feg101, setFeg101] = useState(null);
	const [phy101, setPhy101] = useState(null);
	const [ich101, setIch101] = useState(null);
	const [ich111, setIch111] = useState(null);
	const [bus101, setBus101] = useState(null);
	const [phy107, setPhy107] = useState(null);
	const [gst101, setGst101] = useState(null);
	const [gst105, setGst105] = useState(null);
	const [gst107, setGst107] = useState(null);
	const [gst109, setGst109] = useState(null);

	function calculate(
		mat101,
		feg101,
		phy101,
		ich101,
		ich111,
		bus101,
		phy107,
		gst101,
		gst105,
		gst107,
		gst109
	) {
		return (
			mat101 * 3 +
			feg101 * 2 +
			phy101 * 3 +
			ich101 * 2 +
			ich111 * 2 +
			bus101 * 2 +
			phy107 * 1 +
			gst101 * 1 +
			gst105 * 2 +
			gst107 * 2 +
			gst109 * 1
		);
	}
	const calc = calculate(
		mat101,
		feg101,
		phy101,
		ich101,
		ich111,
		bus101,
		phy107,
		gst101,
		gst105,
		gst107,
		gst109
	);

	return (
		<div className='text-[var(--lighter-blue,_#29335c)] lg:mx-[15%]'>
			<div className='flex my-5 md:my-8 mx-4'>
				<Link className='w-1/12 text-2xl md:text-4xl font-bold' to='/L1cgpa'>
					<AiOutlineLeft />
				</Link>
				<div className='w-11/12 text-center text-[17px] md:text-2xl font-bold mt-2'>
					100 Level (First Semester)
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
				<div className='flex my-5 text-[var(--lighter-blue,_#29335C)] mx-2 md:mx-4'>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='text'
						value='MAT 101'
						disabled
					/>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='number'
						name='mat_grd'
						placeholder='Enter:'
						value={mat101}
						onChange={(e) =>
							setMat101(e.target.value < 6 ? e.target.value : toast('Grade no dey pass 5'))
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
						value='FEG 101'
						disabled
					/>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='number'
						name='feg_grd'
						placeholder='Enter:'
						value={feg101}
						onChange={(e) =>
							setFeg101(e.target.value < 6 ? e.target.value : toast('Grade no dey pass 5'))
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
						value='PHY 101'
						disabled
					/>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='number'
						name='phy_grd'
						placeholder='Enter:'
						value={phy101}
						onChange={(e) =>
							setPhy101(e.target.value < 6 ? e.target.value : toast('Grade no dey pass 5'))
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
						value='ICH 101'
						disabled
					/>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='number'
						name='ich1_grd'
						placeholder='Enter:'
						value={ich101}
						onChange={(e) =>
							setIch101(e.target.value < 6 ? e.target.value : toast('Grade no dey pass 5'))
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
						value='ICH 111'
						disabled
					/>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='number'
						name='ich2_grd'
						placeholder='Enter:'
						value={ich111}
						onChange={(e) =>
							setIch111(e.target.value < 6 ? e.target.value : toast('Grade no dey pass 5'))
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
						value='BUS 101'
						disabled
					/>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='number'
						name='bus_grd'
						placeholder='Enter:'
						value={bus101}
						onChange={(e) =>
							setBus101(e.target.value < 6 ? e.target.value : toast('Grade no dey pass 5'))
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
				<div className='flex my-5 text-[var(--lighter-blue,_#29335c)] mx-2 md:mx-4'>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='text'
						value='PHY 107'
						disabled
					/>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='number'
						name='phy2_grd'
						placeholder='Enter:'
						value={phy107}
						onChange={(e) =>
							setPhy107(e.target.value < 6 ? e.target.value : toast('Grade no dey pass 5'))
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
						value='GST 101'
						disabled
					/>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='number'
						name='eng_grd'
						placeholder='Enter:'
						value={gst101}
						onChange={(e) =>
							setGst101(e.target.value < 6 ? e.target.value : toast('Grade no dey pass 5'))
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
						value='GST 105'
						disabled
					/>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='number'
						name='npc_grd'
						placeholder='Enter:'
						value={gst105}
						onChange={(e) =>
							setGst105(e.target.value < 6 ? e.target.value : toast('Grade no dey pass 5'))
						}
					/>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='number'
						name='npc_unt'
						value={2}
						disabled
					/>
				</div>
				<div className='flex my-5 text-[var(--lighter-blue,_#29335c)] mx-2 md:mx-4'>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='text'
						value='GST 107'
						disabled
					/>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='number'
						name='human_grd'
						placeholder='Enter:'
						value={gst107}
						onChange={(e) =>
							setGst107(e.target.value < 6 ? e.target.value : toast('Grade no dey pass 5'))
						}
					/>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='number'
						name='human_unt'
						value={2}
						disabled
					/>
				</div>
				<div className='flex my-5 text-[var(--lighter-blue,_#29335c)] mx-2 md:mx-4'>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='text'
						value='GST 109'
						disabled
					/>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='number'
						name='igbo_grd'
						placeholder='Enter:'
						value={gst109}
						onChange={(e) =>
							setGst109(e.target.value < 6 ? e.target.value : toast('Grade no dey pass 5'))
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
								21
							</span>
						</p>
					</div>
					<p className='my-4 md:text-xl font-bold mx-4 text-right px-5 w-[50%]'>
						CGPA: {calc / 21}{' '}
					</p>
				</div>
			</div>
		</div>
	);
};

export default FirstL1;
