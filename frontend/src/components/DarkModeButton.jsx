import React, { useEffect } from 'react';
import useLocalStorage from 'use-local-storage';
import { FaSun } from 'react-icons/fa';
import { BsFillMoonStarsFill } from 'react-icons/bs';

const DarkModeButton = () => {
	const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
	const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

	function themeSetter() {
		const newTheme = theme === 'dark' ? 'light' : 'dark';
		setTheme(newTheme);
	}

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
		// document.documentElement.classList.add('theme-transition');
		// window.setTimeout(function () {
		// 	document.documentElement.classList.remove('theme-transition');
		// }, 1000);
		// return () => {
		// 	clearTimeout();
		// };
	}, [theme]);

	return (
		<button
			className='bg-[rgb(32,38,64)] rounded-[5rem] absolute md:top-[0.4rem] top-[1rem] md:right-[1.5rem] right-[6rem] z-[100]'
			onClick={themeSetter}
		>
			<div className='relative flex gap-[0.6rem] items-center justify-between [padding-inline:0.6rem_0.5rem] [padding-block:0.3rem] w-[5.4rem] h-[2.8rem] '>
				<FaSun color='yellow' fontSize={'1.6rem'} />
				<BsFillMoonStarsFill color='pink' fontSize={'1.4rem'} />
				<span
					className={`absolute rounded-[50%] w-[2rem] aspect-square bg-white transition-transform ease-in-out duration-[750ms] ${
						theme === 'dark' && 'translate-x-[2.4rem]'
					}`}
				></span>
			</div>
		</button>
	);
};

export default DarkModeButton;
