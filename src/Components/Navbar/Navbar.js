import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import Logo from '../../Img/logo.png'

const Navbar = () => {
  return (
    <div className='sticky top-0 w-full z-50 py-2 bg-white shadow-sm'>
      <div className=''>
        <div className='flex  items-center justify-around py-2'>
          <div className='logo flex items-center gap-3'>
            <img src={Logo} alt='logo' className='w-[4rem]' />
            <h1 className=' text-2xl font-bold'> _ Traders</h1>
          </div>
          <div className='nav-item_links'>
            <ul className='flex items-center font-bold gap-[4rem]'>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About Us</Link></li>
              <li><Link to='/product'>Product</Link></li>
              <li><Link to='/contact'>Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar