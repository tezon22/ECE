import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Ebooks from '../components/E-books/Ebooks'
import Newscenter from '../components/Newscenter/Newscenter'
import Footer from '../components/Footer/Footer'
import Calculator from '../components/calculator/Calculator'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Calculator/>
      <Ebooks/>
      <Newscenter/>
      <Footer/>
    </div>
  )
}

export default Home