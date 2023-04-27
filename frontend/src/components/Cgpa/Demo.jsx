import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AiOutlineLeft } from 'react-icons/ai';
import Courses from './Courses';

const Demo = () => {
	const [cgpa, setCgpa] = useState(0)
    useEffect(() => {
        toast('READ THE INSTRUCTIONS');
	}, []);
    // To get the list of courses and total credits
     const first = Courses.filter((item) => item.Session[0] === 200 && item.Session[1] === 2  )
     const credits = first.map((item)=>{return item.Credit})
     const Total_credit = credits.reduce((acc, curr) =>{
        return acc + curr
     }, 0)

    function grades(e){
        let grade 
       switch (e) {
            case 'a':
                grade = 5
                break;
            case 'b':
                grade = 4
                break;
            case 'c':
                grade = 3
                break;
            case 'd':
                grade = 2
                break;
            case 'e':
                grade = 1
                break;
            case 'f':
                grade = 0
                break;
        
            default:
                toast('Enter a valid grade')
                break;
        }
        return grade
    }
	function calculate(){
        let grade = first.map((item) =>{
           return grades(item.Value)
        })
       var sum = 0;
        for(var i=0; i< grade.length; i++) {
            sum += grade[i]*credits[i];
        }
       setCgpa(sum/ Total_credit)
	   console.log(grade)
    
    }
	return (
		<div className='text-[var(--lighter-blue,_#29335c)] lg:mx-[15%]'>
			<div className='flex my-5 md:my-8 mx-4'>
				<Link className='w-1/12 text-2xl md:text-4xl font-bold' to='/L1cgpa'>
					<AiOutlineLeft />
				</Link>
				<div className='w-11/12 text-center text-[17px] md:text-2xl font-bold mt-2'>
					{first[0].Session[0]} Level (First Semester)
				</div>
			</div>
			<div className='my-12'>
				<p className='text-center text-2xl font-bold mb-6'>CGPA Calculator</p>
				<p className='text-center text-md'>
					Please input your grade units and let us calculate your CGPA using this format.
				</p>
				<div className=' flex justify-center gap-3 text-right mx-auto my-6 font-bold'>
					<p>A </p>
					<p>B </p>
					<p>C </p>
					<p>D </p>
					<p>E </p>
					<p>F </p>
				</div>
			</div>
			<div className='mb-28'>
				<div className='flex mx-3'>
					<p className='w-[33%] text-center md:text-xl font-bold py-3'>Courses</p>
					<p className='w-[33%] text-center md:text-xl font-bold py-3'>Grades</p>
					<p className='w-[33%] text-center md:text-xl font-bold py-3'>Credit Units</p>
				</div>
                {first.map((item, i) =>{
				return (<div key={item.Course} className='flex my-5 text-[var(--lighter-blue,_#29335C)] mx-2 md:mx-4'>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='text'
						value={item.Course}
						disabled
					/>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='text'
						name={`${item.Course}_grade`}
						placeholder='Enter:'
						value={item.Value}
						onChange={(e) => item.Value = e.target.value}
					/>
					<input
						className='bg-[var(--light-black,_rgb(226,232,240))] rounded-full py-1 text-center font-bold w-[33%] mx-2'
						type='number'
						name='mat_unt'
						value={item.Credit}
						disabled
					/>
				</div>)
                })}
				<div className='flex items-center'>
					<div className='my-8 w-[50%]'>
						<p className='md:w-1/2 md:mx-10 font-bold '>
							Total Credit Unit:
							<span className='bg-[var(--light-black,_rgb(226,232,240))] py-1 rounded-full text-center ml-4 w-[50%]  inline-block'>
								{Total_credit}
							</span>
						</p>
					</div>
					<p className='my-4 md:text-xl font-bold mx-4 text-right px-5 w-[50%]'>
						CGPA:{cgpa}
					</p>
                    <button onClick={calculate}>Submit</button>
				</div>
			</div>
		</div>
	);
};

export default Demo;
