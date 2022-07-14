import React, { useState } from 'react'
import './Navbar.css'
// import Logo from './ECE LOGO With TEXT.png'
import { Link } from 'react-router-dom'

import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const Toggle = () => {
    setNav(!nav)
  }


  return (
    <div className='nav'>
      <div className="nav_container">
        <div className="logo"/>
        <div className="">
          <div className={ nav?  "nav-menu" : "right_side"}>
            <ul>
              <li><a href="/">Home</a></li>
              <li><Link to="/section">Sections</Link></li>
              <li><a href="google.com">Info</a></li>
            </ul>
            <Link to='/login' className="log">
              LOG IN
            </Link>
            <Link  to='/signup' className="sign">
              SIGN UP
            </Link>
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