import React from 'react'
import './Login.css'
import Image3 from './image 3.png'
import Logo from '../Navbar/ECE LOGO With TEXT.png'


const Login = () => {
  return (
    <div>
       <div className="container_login">

			<div className="content_1" >

				<div className="back_icon" ><a href="google.com" ><i class="fa-solid fa-angle-left"></i></a></div>

				<div className="logo"><img src={Logo} alt='ec' /></div>

				<p className="welcome" >Welcome Back</p>

				<div className="header">Get back on <span>track</span></div>

				<div className="form" >

					<form method="post" action=" " autocomplete="on" >
					
				  		<input type="email" name="email" placeholder="E-mail" required /><br/>
						  <input type="password" name="password" placeholder="Password" required/><br/>
						  <p className="forgot" ><a href="google.com" >Forgot password?</a></p>


						  <button type="submit" >LOG IN</button>

						<input type="email" name="email" placeholder="E-mail" required /><br/>

						<input type="password" name="password" placeholder="Password" required/><br/>

						<p class="forgot" ><a href="google.com" >Forgot password?</a></p>

						<button type="submit" >LOG IN</button>


					</form>

				</div>

			</div>

			<div className="content_2">


				<img src={Image3} alt='p'/>


			</div>

		</div>
    </div>
  )
}

export default Login
