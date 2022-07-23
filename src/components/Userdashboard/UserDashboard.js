import React, {useState} from 'react'
import './UserDashboard.css'
import user from './images/Vector (2).png'
import pdf from './images/Vector (3).png'
import news from './images/Vector (4).png'
import calc from './images/Vector (5).png'
import arrow from './images/Vector (11).png'
import timetable from './images/Vector (6).png'
import calc_2 from './images/Vector (7).png'
import pdf_2 from './images/Vector (8).png'
import news_2 from './images/Vector (9).png'
import arrow_2 from './images/Vector (10).png'
import footer_img from './images/image 16.png'
import settings from './images/Vector (15).png'

const UserDashboard = () => {
  const[arrow, setArrow] = useState(false)
  const dragged = ()=>{
    setArrow(!arrow)
  } 
  return (
    <div>
      <html>
        <div className='full-container full-grid'>

          <nav className='nav-bar'>
            <h1>Dashboard</h1>
            <img src={arrow} alt=" "/>
            <ul className={arrow ? 'dragged': 'flex-list'}>
              <li><img src={user} alt='user'/><a href=''>Profile</a></li>
              <li><img src={pdf} alt='pdf'/><a href=''>P.D.F's</a></li>
              <li><img src={news} alt='news'/><a href=''>News</a></li>
              <li><img src={calc} alt='calc'/><a href=''>Calculator</a></li>
              <li><img src={settings} alt=''/><a>Settings</a></li>
            </ul>
            <button onClick={dragged} className='drag-button'>
              Activities <img src={arrow} alt=" "/>
            </button>
          </nav>


          <main className='main-container'>
            <header className='main-header'>
              <div className='img-flex'>
                <span className='img-holder'>

                </span>
              </div>
              <p>7th July, 2022.</p>
              <h1>Hello, Max.</h1>
            </header>

            <section className='grid-section'>
              <article className='grid-tiles'>
                <img src={news_2} alt=" "/>
                <p>News update</p>
                <img src={arrow_2} alt=" "/>
              </article>
              

              <article className='grid-tiles'>
                <img src={pdf_2} alt=" "/>
                <p>P.D.F / E-books</p>
                <img src={arrow_2} alt=" "/>
              </article>

              <article className='grid-tiles'>
                <img src={calc_2} alt=" "/>
                <p>Calculate C.G.P.A</p>
                <img src={arrow_2} alt=" "/>
              </article>
               
              <article className='grid-tiles'>
                <img src={timetable} alt=" "/>
                <p>Time table</p>
                <img src={arrow_2} alt=" "/>
              </article>

            </section>

            <article>
             <img className='footer-img' src={footer_img} alt="footer-img"/>
            </article>
          </main>


        </div>
      </html>
    </div >
  )
}

export default UserDashboard