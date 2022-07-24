import React, {useState} from 'react'
import './changePassword.css'

const ChangePassword = () => {
  const [show, setShow] = useState(false)
	const change = () => {
		setShow(!show)
	}
  return (
    <div className="container_pwdchange">
      <a href="" className="back_icon_changepwd" ><i class="uil uil-previous"></i></a>
      <div className="change_pass" >Change Password</div>
      <div className="form" >
      	<form method="post" action=" " >
	        	<input type="email" name="email" placeholder="E-mail" required /><br/>
	        	<div className="password">  <input type={show? "text" : "password"} name="password" placeholder="New password" required/>
	              	<span onClick={change}>{show? <i class="uil uil-eye-slash"></i> : <i class="uil uil-eye"></i>}</span> </div>
	        	<div className="password">  <input type={show? "text" : "password"} name="password" placeholder="Repeat new password" required/>
	              	<span onClick={change}>{show? <i class="uil uil-eye-slash"></i> : <i class="uil uil-eye"></i>}</span> </div>
		        <button type="submit" >DONE</button>
	       </form>
	     </div>
	<p className="try_login_again">
	Try logging in again
	</p>
    </div>
  )
}

export default ChangePassword