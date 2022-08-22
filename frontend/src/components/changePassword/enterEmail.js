import React, {useState, useEffect, } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { getEmail } from '../../features/reset/emailRedux'
import Spinner from '../Spinner'
export default function EnterEmail() {
	const [email, setEmail] = useState('')

	const Onchange = (e) =>{
		setEmail(e.target.value)
	}

  const {gettingE, gottenE, lostE, message} = useSelector((state) => state.email)
  const navigate = useNavigate()
  useEffect(() => {
    if (gottenE) {
      navigate('/email/passwordchange')
    }
    
  }, [gottenE, navigate])

  const dispatch = useDispatch()
  
  const data = {email}

    const submit = (e) =>{
      e.preventDefault()
         if (lostE) {
           toast.error(message);
         }
        dispatch(getEmail(data))
        console.log(data)
    }
 
    if(gettingE){
      return <Spinner/>
    } 
    

   
  return (
    <div className="container_pwdchange">
      <a href="/login" className="back_icon_changepwd" ><i class="uil uil-previous"></i></a>
      <div className="change_pass" >Change Password</div>
      <div className="change_pass" >
        <h1>Enter Email</h1>
    </div>
      <div className="form" >
      	<form method="put" action=" " onSubmit={submit}>
	        	<input type="email" name="email" value={email} placeholder="E-mail" onChange={Onchange} required /><br/>
		        <button type="submit" >DONE</button>
	       </form>
	     </div>
    </div>
  )
  
}
