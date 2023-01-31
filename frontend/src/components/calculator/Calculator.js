import React from 'react';
import { Link } from 'react-router-dom';
import './Calculator.css';
import Image12 from './image 12 (1).png';

const Calculator = () => {
	return (
		<div className='calculator_container'>
			<div className='calculator_row'>
				<div className='col_8'>
					<img src={Image12} alt='image4' />
				</div>
				<div className='col_7'>
					<h1>
						Calculate your cummulative grade point average<span>(C.G.P.A)</span>
					</h1>
					<p>Come calculate your progress in school with just a click👨‍💻</p>
					<Link to='/cgpa'>Calculator</Link>
				</div>
			</div>
		</div>
	);
};

export default Calculator;
