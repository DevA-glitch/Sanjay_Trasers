import React from 'react'
import { Link } from 'react-router-dom';
import AboutPage from '../Components/About/AboutPage';

const About = () => {
  return (
    <>
      <div className='about-banner flex items-center justify-center flex-col'>
        <h1 className='text-white text-6xl'>About Us</h1>
        <p className='text-xl text-white mt-7 bg-[#ffff8e80] hover:bg-[#ff8e8ea9] px-3 py-2'><Link to='/'>Home</Link> / <span className=' text-slate-900 cursor-not-allowed'>About Us</span></p>
      </div>
      <AboutPage />
    </>
  )
}

export default About;