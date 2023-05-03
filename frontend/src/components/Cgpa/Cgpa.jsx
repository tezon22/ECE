import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../../features/auth/authSlice';
import { AiOutlineLeft } from 'react-icons/ai';

const Cgpa = () => {
	const levels = [
		{ level: '100 Level', link: '/cgpa/1' },
		{ level: '200 Level', link: '/cgpa/2' },
		{ level: '300 Level', link: '/cgpa/3' },
		{ level: '400 Level', link: '/cgpa/4' },
		{ level: '500 Level', link: '/cgpa/5' },
	];

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth);

	useEffect(() => {
		dispatch(reset());

		if (user == null) {
			navigate('/home');
		}
	}, [user, navigate, dispatch]);

	return (
		<div className="text-[var(--lighter-blue,_#29335c)] lg:mx-[15%]">
			<div className="flex my-5 mx-4">
				<Link className="w-1/12 text-2xl md:text-4xl font-bold" to="/">
					<AiOutlineLeft />
				</Link>
				<div className="w-11/12 text-center md:text-2xl font-bold mt-2">Select your level (CGPA)</div>
			</div>
			{levels.map((item) => {
				return (
					<Link key={item.level} to={item.link}>
						<div className="rounded-2xl md:rounded-3xl md:text-xl bg-[var(--light-black,_rgb(226,232,240))] text-center font-medium py-10 md:py-16 my-8 md:my-14 mx-10 md:mx-24">
							{item.level}
						</div>
					</Link>
				);
			})}
		</div>
	);
};

export default Cgpa;
