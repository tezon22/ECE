import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai';
import Navbar from '../Navbar/Navbar';
import CourseOutline from '../../assests/CourseOutline';

const CourseContent = () => {
    
    const {level} = useParams()
    const session = CourseOutline.filter((item)=> item.Session[0] === Number(level) )
    const firstSemester = session.filter((item)=> item.Session[1] === 1)
    const secondSemester = session.filter((item)=> item.Session[1] === 2)

    return (
        <>
            <Navbar />

            <div className='text-[var(--lighter-blue,_#29335c)] lg:mx-[15%]'>
                <div className='flex my-5 md:my-8 mx-4'>
                    <Link className='w-1/12 text-2xl md:text-4xl font-bold' to='/course/outline'>
                        <AiOutlineLeft />
                    </Link>
                    <div className='w-11/12 text-center text-[17px] md:text-2xl font-bold mt-2'>{`${level} Level`}</div>
                </div>
            </div>
            <div className=''>
                <span className='text-xl '>
                    First Semester
                </span>
                <span>
                    Second Semester
                </span>
            </div>
        
        </>
    )


}

export default CourseContent;