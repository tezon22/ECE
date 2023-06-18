import { useEffect, useState } from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Courses from '../../assests/Courses';
import Spinner from '../Spinner';

const SESSION_LOOKUP = {
	firstL1: [100, 1],
	secondL1: [100, 2],
	firstL2: [200, 1],
	secondL2: [200, 2],
	firstL3: [300, 1],
	secondL3: [300, 2],
	firstL4: [400, 1],
	secondL4: [400, 2],
	firstL5: [500, 1],
	secondL5: [500, 2],
};

const GRADE_LOOKUP = {
	a: 5,
	A: 5,
	b: 4,
	B: 4,
	c: 3,
	C: 3,
	d: 2,
	D: 2,
	e: 1,
	E: 1,
	f: 0,
	F: 0,
};

const Cgpa3 = () => {
	const { level, levelSemester } = useParams();
	const [session, setSession] = useState([]);
	const [cgpa, setCgpa] = useState(0);

	useEffect(() => {
		toast('READ THE INSTRUCTIONS');
		setSession(SESSION_LOOKUP[levelSemester]);
	}, [levelSemester]);

	// Getting the list of courses and total credits
	const courseData = Courses.filter(
		(item) => item.Session[0] === session[0] && item.Session[1] === session[1]
	);

	// Getting list of credits from courseData
	const credits = courseData.map((item) => item.Credit);

	const totalCreditLoad = credits.reduce((acc, curr) => acc + curr, 0);

	// Converting grades to their respective values in the lookup object
	function convertGrades(inputValue) {
		if (GRADE_LOOKUP[inputValue] === undefined) {
			toast('Please ensure to enter valid grades (i.e: A-F)🙏');
			return;
		}

		const gradeValue = GRADE_LOOKUP[inputValue];
		return gradeValue;
	}

	function calculateCgpa() {
		let gradeValueArr = courseData.map((item) => convertGrades(item.Value));

		const sum = gradeValueArr.reduce(
			(acc, gradeValueItem, index) => acc + gradeValueItem * credits[index],
			0
		);

		setCgpa(sum / totalCreditLoad);
	}

	if (session.length === 0) {
		return <Spinner />;
	}

	return (
		<div className="text-[var(--lighter-blue,_#29335c)] lg:mx-[15%]">
			<div className="flex my-5 md:my-8 mx-4">
				<Link className="w-1/12 text-2xl md:text-4xl font-bold" to={`/cgpa/${level}`}>
					<AiOutlineLeft />
				</Link>
				<div className="w-11/12 text-center text-[17px] md:text-2xl font-bold mt-2">
					{courseData[0].Session[0]} Level (First Semester)
				</div>
			</div>
			<div className="my-12">
				<p className="text-center text-2xl font-bold mb-6">CGPA Calculator</p>
				<p className="text-center text-md">Please input your grades (A-F) for each course.</p>
			</div>
			<div className="mb-28">
				<div className="flex mx-3">
					<p className="w-[33%] text-center md:text-xl font-bold py-3">Courses</p>
					<p className="w-[33%] text-center md:text-xl font-bold py-3">Grades</p>
					<p className="w-[33%] text-center md:text-xl font-bold py-3">Credit Units</p>
				</div>
				{courseData.map((item) => {
					return (
						<div
							key={item.Course}
							className="flex my-5 text-[var(--lighter-blue,_#29335C)] mx-2 md:mx-4"
						>
							<input
								className="bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2"
								type="text"
								value={item.Course}
								disabled
							/>
							<input
								className="bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2"
								type="text"
								name={`${item.Course}-grade`}
								placeholder="Enter:"
								onChange={(e) => (item.Value = e.target.value)}
							/>
							<input
								className="bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2"
								type="number"
								name="mat_unt"
								value={item.Credit}
								disabled
							/>
						</div>
					);
				})}
				<div className="flex items-center">
					<div className="my-8 w-[50%]">
						<p className="md:w-1/2 md:mx-10 font-bold ">
							Total Credit Unit:
							<span className="bg-[var(--light-black,_rgb(226,232,240))] py-1 rounded-full text-center ml-4 w-[50%]  inline-block">
								{totalCreditLoad}
							</span>
						</p>
					</div>
					<p className="my-4 md:text-xl font-bold mx-4 text-right px-5 w-[50%]">
						CGPA: {cgpa.toFixed(2)}
					</p>
				</div>
				<button
					onClick={calculateCgpa}
					className="px-[7rem] rounded-[0.8rem] py-[1rem] bg-red text-white text-center mx-auto flex justify-center"
				>
					Submit
				</button>
			</div>
		</div>
	);
};

export default Cgpa3;
