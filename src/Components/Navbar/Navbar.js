import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Img/logo.png';
import 'bootstrap/dist/css/bootstrap.css';


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className='sticky top-0 w-full z-50 py-2 bg-white shadow-sm'>
      <div className=''>
        <div className='flex items-center justify-around gap-48 py-2 px-4 sm:px-6 lg:px-8'>
          <div className='logo flex items-center gap-3'>
            <img src={Logo} alt='logo' className='w-[12rem] h-[3.5rem]' />
          </div>
          <div className='nav-item_links hidden sm:block'>
            <ul className='flex items-center font-bold gap-[4rem]'>
              <li>
                <Link to='/' onClick={hideMenu}>Home</Link>
              </li>
              <li>
                <Link to='/about' onClick={hideMenu}>About Us</Link>
              </li>
              <li>
                <Link to='/product' onClick={hideMenu}>Product</Link>
              </li>
              <li>
                <Link to='/contact' onClick={hideMenu}>Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className='sm:hidden'>
            {/* Hamburger menu */}
            <button
              type='button'
              className='block text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none'
              onClick={toggleMenu}
            >
              <svg className='h-6 w-6 fill-current' viewBox='0 0 24 24'>
                <path
                  className={showMenu ? 'hidden' : 'block'}
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z'
                />
                <path
                  className={showMenu ? 'block' : 'hidden'}
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M6 6h12v2H6zm0 5h12v2H6zm0 5h12v2H6z'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Responsive mobile menu */}
      {showMenu && (
        <div className='sm:hidden'>
          <ul className='font-bold text-center flex items-center duration-300 justify-center gap-10 flex-col h-[60vh]'>
            <li>
              <Link to='/' onClick={hideMenu}>Home</Link>
            </li>
            <li>
              <Link to='/about' onClick={hideMenu}>About Us</Link>
            </li>
            <li>
              <Link to='/product' onClick={hideMenu}>Product</Link>
            </li>
            <li>
              <Link to='/contact' onClick={hideMenu}>Contact Us</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
