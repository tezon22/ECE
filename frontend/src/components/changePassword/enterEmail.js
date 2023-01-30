import React, {useState, useEffect, } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { getEmail } from '../../features/reset/emailRedux'
import Spinner from '../Spinner'
import { Link } from 'react-router-dom'
import {AiOutlineLeft} from 'react-icons/ai';

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
    <div className="mt-7 w-[90%] mx-auto md:w-[80%]">
      <div className='flex text-[#29335C] mt-20 mb-5 mx-4'>
					<Link className='w-[5%] md:text-3xl text-3xl font-bold' to='/login'>
						<AiOutlineLeft />
					</Link>
					<div className='w-[95%] text-center text-3xl font-bold'>Change Password</div>
			</div>
      <div className="text-center text-[#29335C] text-4xl font-bold mt-24">
        <h1>Enter Email</h1>
      </div>
      <div className="form md:w-[50%] mx-auto" >
      	<form method="put" action=" " onSubmit={submit}>
	        	<input type="email" name="email" value={email} placeholder="E-mail" onChange={Onchange} required /><br/>
		        <button type="submit" >DONE</button>
	       </form>
	     </div>
    </div>
  )
  
}
