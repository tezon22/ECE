import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AiFillEye, AiFillEyeInvisible, AiOutlineLeft } from 'react-icons/ai';
import { toast } from 'react-toastify';
import Spinner from '../Spinner';
import { register, reset } from '../../features/auth/authSlice';
import './Signup.css';
import Logo from '../Navbar/ECE LOGO With TEXT.png';
import Image2 from './image 2.png';
import { Link } from 'react-router-dom';

const Signup = () => {
	const [show, setShow] = useState(false);
	const change = () => {
		setShow(!show);
	};

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
	});

	const { name, email, password, password2 } = formData;

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

	useEffect(() => {
		if (isError) {
			toast.error(message);
		}

		if (isSuccess || user) {
			navigate('/login');
		}

		dispatch(reset());
	}, [user, isError, isSuccess, message, navigate, dispatch]);

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmit = (e) => {
		e.preventDefault();

		if (password !== password2) {
			toast.error('Passwords do not match');
		} else {
			const userData = {
				name,
				email,
				password,
			};

			dispatch(register(userData));
		}
	};

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<div>
			<div className='container_signup'>
				<div className='content_1'>
					<div className='back_icon'>
						<Link to={!user ? '/home' : '/'}>
							<AiOutlineLeft size={20} />
						</Link>
					</div>
					<div className='login_logo'>
						<img src={Logo} alt='ece' />
					</div>
					<p className='get_started'>Get started</p>
					<div className='header'>
						Create an <span>account</span>
					</div>
					<div className='form'>
						<form onSubmit={onSubmit} autoComplete='on'>
							<div className='signup_input'>
								<input
									type='textbox'
									name='name'
									placeholder='name'
									required
									onChange={onChange}
									value={name}
								/>
								<br />
								<input
									type='email'
									name='email'
									placeholder='E-mail'
									required
									onChange={onChange}
								/>
								<br />
								<div className='password'>
									{' '}
									<input
										type={show ? 'text' : 'password'}
										name='password'
										placeholder='Password'
										required
										onChange={onChange}
									/>
									<span onClick={change}>
										{show ? (
											<AiFillEyeInvisible size={20}/>
										) : (
											<AiFillEye size={20} />
										)}
									</span>{' '}
								</div>
								<div className='password'>
									{' '}
									<input
										type={show ? 'text' : 'password'}
										name='password2'
										placeholder='Password'
										required
										onChange={onChange}
									/>
									<span onClick={change}>
										{show ? (
											<AiFillEyeInvisible size={20} />
										) : (
											<AiFillEye size={20} />
										)}
									</span>{' '}
								</div>
							</div>
							<div className='signup_level'>
								<p>Select:</p>
								<br />
								<input
									type='radio'
									name='select'
									value='100 level'
									id='100L'
									required
									onChange={onChange}
								/>
								<label htmlFor='100L'>
									<span></span>100 level
								</label>
								<br />
								<input
									type='radio'
									name='select'
									value='200 level'
									id='200L'
									required
									onChange={onChange}
								/>
								<label htmlFor='200L'>
									<span></span>200 level
								</label>
								<br />
							</div>
							<button type='submit'>SIGN UP</button>
						</form>
					</div>
					<div className='or'>
						<hr />
						<span>OR</span>
						<hr />
					</div>
					<div className='google'>
						<Link to=''>
							<i className='fa-brands fa-google'></i>
							<span>Sign up with Google</span>
						</Link>
					</div>
					<p className='login'>
						Already have an account? <Link to='/login'>LOG IN</Link>
					</p>
				</div>
				<div className='content_2'>
					<img src={Image2} alt='ima' />
				</div>
			</div>
		</div>
	);
};

export default Signup;
