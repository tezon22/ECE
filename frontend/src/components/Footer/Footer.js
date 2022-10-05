import React from 'react'
import './Footer.css'
import Tezonlogo from './Tezon logo.png'

const Footer = () => {
  return (
    <div>
      <section>
        <footer>
          <div className ="col_9">
            <img src={Tezonlogo} alt='tezon'/>
          </div>
          <div className="col_10">
            <h2>This is a project of the Tezon team. Tezon is an 8 man squad from the 200 level students of electronics and computer engineeering</h2>
            <div className="abt_tz">
              <a href="google.com">Contact Us</a>
              <a href="google.com">About Us</a>
            </div>
          </div>
        </footer>
	    </section>
	  </div>
  )
}

export default Footer