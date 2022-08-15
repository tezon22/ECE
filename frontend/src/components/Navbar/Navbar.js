import React, { useState } from 'react'
import './Navbar.css'
// import Logo from './ECE LOGO With TEXT.png'
import {  useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../../features/auth/authSlice'
import { Link } from 'react-router-dom'

import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const Toggle = () => {
    setNav(!nav)
  }


  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/home')
  }


  return (
    <div className='nav'>
      <div className="nav_container">
        <div className="logo"/>
        <div className="">
          <div className={ nav?  "nav-menu" : "right_side"}>
            <ul>
              <div>
                {user ? (
                  <>
                    <li><Link to="/section">Sections</Link></li>
                    <li><Link to="/">Info</Link></li>
                  </>
                 
                ): (
                  <>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/section">Sections</Link></li>
                    <li><Link to="/">Info</Link></li>
                  </>
                )}
              </div>
            </ul>
            <div className= 'red'>
              {user ? (
                <Link to="/home"  className="sign" onClick={onLogout}>
                  LOGOUT
                </Link>
            
              ) : (
                <>
                  <Link to='/login' className="log">
                    LOG IN
                  </Link>
                  <Link  to='/signup' className="sign">
                    SIGN UP
                  </Link>
                </>
              )}
            </div>
            
          </div>
        
          <div onClick={Toggle} className='hamburger'>
            {nav? <FaTimes  size={20} /> : <FaBars size={20}/>}
          </div>
       </div>
      </div>
    </div>
  )
}

export default Navbar