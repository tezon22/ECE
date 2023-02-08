import React, {useState} from 'react'
import './changePassword.css'
import {AiFillEye, AiFillEyeInvisible, AiOutlineLeft} from 'react-icons/ai'
import { Link } from 'react-router-dom';

const ChangePassword = () => {
  const [show, setShow] = useState(false)
	const change = () => {
		setShow(!show)
	}
	const [form, setForm] = useState({
		email:'',
		password: '',
		password2: '',
	})

	const {password, password2} = form

	
	const Onchange = (e) =>{
		setForm((prevState) => ({
			...prevState,
			[e.target.name] : e.target.value
		}))
	}	
  return (
    <div className="mt-7 w-[90%] mx-auto md:w-[80%] ">
      <div className='flex text-[#29335C] mt-20 mb-5 mx-4'>
					<Link className='w-[5%] md:text-3xl text-3xl font-bold' to='/login'>
						<AiOutlineLeft />
					</Link>
					<div className='w-[95%] text-center text-3xl font-bold'>Change Password</div>
			</div>
      <div className="form md:w-[50%] mx-auto" >
      	<form method="put" action=" " >
	        	<div className="password">  
						<input type={show? "text" : "password"} value={password} name="password" onChange={Onchange} placeholder="New password" required/>
	              		<span onClick={change}>{show? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20}/>}</span>
				</div>
	        	<div className="password">  
						<input type={show? "text" : "password"} value={password2} name="password2" onChange={Onchange} placeholder="Repeat new password" required/>
	              		<span onClick={change}>{show? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20}/>}</span>
				</div>
		        <button type="submit" >DONE</button>
	       </form>
	     </div>
	     <p className="try_login_again mb-7"><Link to="/login">
	Try logging in again
	     </Link></p>
    </div>
  )
}

export default ChangePassword
