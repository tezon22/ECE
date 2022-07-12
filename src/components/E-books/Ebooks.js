import React from 'react'
import './Ebook.css'
import Image5 from './image 5.png'
import Oval from './Oval.png'

const Ebooks = () => {
  return (
    <div>
      <section className="e_envelope" style={{backgroundImage:{Oval}}}>
        <div className="e_container">
          <div className="e_row">
            <div className="col_3">
              <img src={Image5} alt='image5'/>
            </div>
            <div className="col_4">
              <h1>All your needed <span>resources</span> for study in one location, accessible anywhere.</h1>
              <p>Get access to engineering e-books and PDF's in just one click whenever and where ever you need them.</p>
              <a href="google.com">See e-books</a>
            </div>
          </div>
        </div>
    	</section>
    </div>
  )
}

export default Ebooks