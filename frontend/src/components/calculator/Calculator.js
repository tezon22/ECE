import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import './Calculator.css';
import Image12 from './image 12 (1).svg';

const Calculator = () => {
	const navigate = useNavigate();
	const { user } = useSelector((state) => state.auth);

	const checkIsUserLogin = () => {
		if (!user) {
			navigate('/login');
			toast('Please log in before accessing Calculator');
		}
	};

	return (
		<div className="calculator_container">
			<div className="calculator_row">
				<div className="col_8">
					<img src={Image12} alt="image4" />
				</div>
				<div className="col_7">
					<h1>
						Calculate your cummulative grade point average<span>(C.G.P.A)</span>
					</h1>
					<p>Come calculate your progress in school with just a click👨‍💻</p>
					<div onClick={checkIsUserLogin}>
						<Link to="/cgpa">Calculator</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Calculator;
