import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import './Ebook.css'
import Image5 from './image 5.png'

const Ebooks = () => {
    
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);

    const check = () => {
		if (!user) {
			navigate('/login');
			toast('Please log in before accessing PDFs');
		}
	};

    return (
        <div>
            <section className="e_envelope">
                <div className="e_container">
                    <div className="e_row">
                        <div className="col_3">
                            <img src={Image5} alt='image5' />
                        </div>
                        <div className="col_4">
                            <h1>All your needed <span>resources</span> for study in one location, accessible anywhere.</h1>
                            <p>Get access to engineering e-books and PDF's in just one click whenever and where ever you need them.</p>
                            <div onClick={() => { 
                                        check(); 
                                        }}
                            >
                                <Link to="/ebook">See e-books</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Ebooks