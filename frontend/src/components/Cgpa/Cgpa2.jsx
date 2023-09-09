import {useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai';
import Spinner from '../Spinner';
import Navbar from '../Navbar/Navbar';


// Declared outside component to avoid recreation every re-render
const SEMESTER_LOOKUP = {
	1: ['100', 'firstL1', 'secondL1'],
	2: ['200', 'firstL2', 'secondL2'],
	3: ['300', 'firstL3', 'secondL3'],
	4: ['400', 'firstL4', 'secondL4'],
	5: ['500', 'firstL5', 'secondL5'],
};

const Cgpa2 = () => {
	const { level } = useParams()
	const [semester] = useState(() => SEMESTER_LOOKUP[level] ?? []);

	if(semester.length === 0){
		return <Spinner/>
	}

	return (
		<>
			<Navbar />
			<div className='text-[var(--lighter-blue,_#29335c)] lg:mx-[15%]'>
				<div className='flex mt-5 md:mt-8 mx-4 mb-28'>
					<Link className='w-1/12 text-2xl md:text-4xl font-bold' to='/cgpa'>
						<AiOutlineLeft />
					</Link>
					<div className='w-11/12 text-center text-[17px] md:text-2xl font-bold mt-2'>
						{semester[0]} Level (CGPA)
					</div>
				</div>
				<Link to={semester[1]}>
					<div className='rounded-2xl md:rounded-3xl md:text-xl bg-[var(--light-black,_rgb(226,232,240))] text-center font-medium py-12 md:py-16 my-7 md:my-14 mx-10 md:mx-20'>
						First Semester
					</div>
				</Link>
				<Link to={semester[2]}>
					<div className='rounded-2xl md:rounded-3xl md:text-xl bg-[var(--light-black,_rgb(226,232,240))] text-center font-medium py-12 md:py-16 my-7 md:my-14 mx-10 md:mx-20'>
						Second Semester
					</div>
				</Link>
			</div>
		</>
	);
};

export default Cgpa2;
