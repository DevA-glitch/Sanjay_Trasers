import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';
import { IoMdCall } from 'react-icons/io';
import "../Footer/Footer.css"

const Footer = () => {
  return (
    <>
    <div>Footer</div>
      <div className=''>
        <div className='flex items-center gap-2 bg-white shadow_bg rounded-3xl p-2 z-50 fixed bottom-[2rem] right-2'>
          <div>
            <h1>We Are Online</h1>
          </div>
          <div>
            <div className='flex items-center'>
              <h1 className='bg-green-400 p-2 px-3 rounded-tl-3xl rounded-bl-3xl'><a href='https://www.whatsapp.com/'><FaWhatsapp /></a></h1>
              <h1 className=' bg-blue-300 p-2 px-3 rounded-tr-3xl rounded-br-3xl'><a href='https://www.whatsapp.com/'><IoMdCall /></a></h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer