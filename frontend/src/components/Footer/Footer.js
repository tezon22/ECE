import React from 'react'
import './Footer.css'
import Tezonlogo from './Tezon logo.png'

const Footer = () => {
  return (
    <div>
      <section>
        <footer className="max-[767px]:px-3 pb-3">
          <div className ="col_9">
            <img src={Tezonlogo} alt='tezon'/>
          </div>
          <div className="col_10">
            <h2>This is a project of TEZON TEAM. TEZON is an eight (8) man body from the prestigious University of Nnamdi Azikiwe, 200 level students of Electronic and Computer Engineering (ECE).<br />©2023</h2>
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