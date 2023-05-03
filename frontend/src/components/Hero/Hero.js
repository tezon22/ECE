import React from 'react';
import './Hero.css';
import Image1 from './images/image 1.svg';
import { Link } from 'react-router-dom';

const Hero = () => {
	return (
		<>
			<section className="hero_container">
				<div className="hero_row">
					<div className="col_1">
						<h2>FACULTY OF ENGINEERING</h2>
						<h1>
							Department of <span>Electronics</span> and <span>Computer</span> Engineering
						</h1>
						<p>
							A plug into an engineering digital library, <br className="hero_hide" />
							Let's study.
						</p>
						<Link to="/signup">Get Started</Link>
					</div>
					<div className="col_2">
						<img src={Image1} alt="image1" />
					</div>
				</div>
			</section>
		</>
	);
};

export default Hero;
