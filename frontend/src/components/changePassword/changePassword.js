import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'
import { resetPassword } from '../../features/reset/resetSlice'
import Spinner from '../Spinner'
import './changePassword.css'

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

	const {email, password, password2} = form

	
	const Onchange = (e) =>{
		setForm((prevState) => ({
			...prevState,
			[e.target.name] : e.target.value
		}))
	}
	const {loading, changed, failure, message} = useSelector((state) => state.reset)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	useEffect(() =>{
		if(changed){
			toast.success(<h1>password, successfully changed to {password}</h1>)
			navigate('/login')
		}
		if(failure){
			toast.error(message.message)
		}

	}, [changed, failure, message, password, navigate])


	const submit = (e) => {
		e.preventDefault()
		const data = {email, password}
		dispatch(resetPassword(data))
	}
	if (loading) {
		return <Spinner />
  	}
		
  return (
    <div className="container_pwdchange">
      <a href="/email" className="back_icon_changepwd" ><i class="uil uil-previous"></i></a>
      <div className="change_pass" >Change Password</div>
      <div className="form" >
      	<form method="put" action=" " onSubmit={submit}>
	        	<input type="email" name="email" value={email} placeholder="E-mail" onChange={Onchange} required /><br/>
	        	<div className="password">  
						<input type={show? "text" : "password"} value={password} name="password" onChange={Onchange} placeholder="New password" required/>
	              		<span onClick={change}>{show? <i class="uil uil-eye-slash"></i> : <i class="uil uil-eye"></i>}</span>
				</div>
	        	<div className="password">  
						<input type={show? "text" : "password"} value={password2} name="password2" onChange={Onchange} placeholder="Repeat new password" required/>
	              		<span onClick={change}>{show? <i class="uil uil-eye-slash"></i> : <i class="uil uil-eye"></i>}</span> 
				</div>
		        <button type="submit" >DONE</button>
	       </form>
	     </div>
	<p className="try_login_again"><a href="/login">
	Try logging in again
	</a></p>
    </div>
  )
}

export default ChangePassword
