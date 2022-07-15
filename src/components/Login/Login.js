import React, {useState} from 'react'
import './Login.css'
import Image3 from './image 3.png'
import Logo from '../Navbar/ECE LOGO With TEXT.png'


const Login = () => {
	const [show, setShow] = useState(false)
	const change = () => {
		setShow(!show)
	}
  return (
    <div>
       <div className="container_login">
			<div className="content_1" >
				<div className="back_icon" ><a href="/" ><i class="uil uil-previous"></i></a></div>
				<div className="login_logo"><img src={Logo} alt='ec' /></div>
				<p className="welcome" >Welcome Back</p>
				<div className="header">Get back on <span>track</span></div>
				<div className="form" >
					<form method="post" action=" " autocomplete="on" >
				  		<input type="email" name="email" placeholder="E-mail" required /><br/>
						  <div className='password'>  <input type={show? "text" : "password"} name="password" placeholder="Password" required/>
						<span onClick={change}>{show? <i class="uil uil-eye-slash"></i> : <i class="uil uil-eye"></i>}</span> </div>
						  <p className="forgot" ><a href="google.com" >Forgot password?</a></p>
						  <button type="submit" >LOG IN</button>
					</form>
				</div>
			</div>
			<div className="or y" ><hr/><span>OR</span><hr/></div>
				<p className="login" >Not a member? <a href="signup" >SIGN UP</a></p>
			<div className="content_2">
				<img src={Image3} alt='p'/>
			</div>
		</div>
    </div>
  )
}

export default Login