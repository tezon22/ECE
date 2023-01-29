import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible, AiOutlineLeft } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { login, reset } from '../../features/auth/authSlice';
import './Login.css';
import Image3 from './image 3.png';
import Logo from '../Navbar/ECE LOGO With TEXT.png';
import Spinner from '../Spinner';
import { Link } from 'react-router-dom';

const Login = () => {
	const [show, setShow] = useState(false);
	const change = () => {
		setShow(!show);
	};

	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const { email, password } = formData;

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

	useEffect(() => {
		if (isError) {
			toast.error(message);
		}

		if (isSuccess || user) {
			navigate('/');
		}

		dispatch(reset());
	}, [user, isSuccess, navigate, dispatch, isError, message]);

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmit = (e) => {
		e.preventDefault();

		const userData = {
			email,
			password,
		};

		dispatch(login(userData));
		console.log(userData);
	};

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<div>
			<div className='container_login'>
				<div className='content_1'>
					<div className='back_icon'>
						<Link to={!user ? '/home' : '/'}>
							<AiOutlineLeft size={20} />
						</Link>
					</div>
					<div className='login_logo'>
						<img src={Logo} alt='ec' />
					</div>
					<p className='welcome'>Welcome Back</p>
					<div className='header'>
						Get back on <span>track</span>
					</div>
					<div className='form'>
						<form onSubmit={onSubmit} autoComplete='on'>
							<input type='email' name='email' placeholder='E-mail' required onChange={onChange} />
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
									{show ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20}/>}
								</span>{' '}
							</div>
							<span className='forgot'>
								<Link to='/email'>Forgot password?</Link>
							</span>
							<button type='submit'>LOG IN</button>
						</form>
					</div>
					<div className='or y'>
						<hr />
						<span>OR</span>
						<hr />
					</div>
					<p className='login'>
						New member? <Link to='/signup'>SIGNUP</Link>
					</p>
				</div>
				<div className='content_2'>
					<img src={Image3} alt='p' />
				</div>
			</div>
		</div>
	);
};

export default Login;
