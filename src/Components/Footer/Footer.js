import React from 'react'
import "../Footer/Footer.css"
import { FaWhatsapp } from 'react-icons/fa';
import { IoMdCall } from 'react-icons/io';
import logo from "../../Img/logo.png"

const Footer = () => {
  return (
    <>
      <div class="bg-footer bg-black text-white">
        <div class="footer-flex flex items-center p-5 justify-around">
          <div class="footer1 flex items-start gap-5 flex-col">
            <img src={logo} alt='logo' className='w-[10rem] h-[2.5rem]' />
            <section className='w-[20rem] leading-8 fotter-p'> 
            At Sanjay Traders, our mission is to transform homes into comfortable and inspiring spaces by providing top-notch products and services. We strive to understand the unique requirements of our customers and deliver tailored solutions that exceed their expectations. With a customer-centric approach, we aim to enhance the quality of life for homeowners, making their living spaces more functional, stylish, and personalized.
            </section>
          </div>
          <div class="footer1 flex items-start text-start justify-start flex-col gap-3">
            <h2 className='mb-3 font-bold text-xl'>helpful links</h2>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">contact us</a></li>
          </div>
          <div class="footer1">
            <h2>payment method</h2>
            <section>
              select one of the most common ways to pay a money for our products.
            </section>
            <div class="footer-logo">
              <img src="./Images/Footer/footer-logo.png" alt="" />
            </div>
          </div>
        </div>
        <div class="copy text-center bg-white text-black p-1">
            copyright &copy; at 2021 by <span>web tutorial.</span>
        </div>
      </div>

      <div className=''>
        <div className=' fixed bottom-6 bg-gray-50 z-50 flex items-center gap-3 p-2 rounded-full shadow-md right-3'>
          <div>
            <h2>we are Online..!</h2>
          </div>
          <div className='flex'>
            <div className='p-2 px-3 bg-green-400 rounded-tl-3xl rounded-bl-3xl'>
              <a href='https://wa.me/+918012363063'>
                <FaWhatsapp />
              </a>
            </div>
            <div className='p-2 px-3 bg-blue-400 rounded-tr-3xl rounded-br-3xl'>
              <a href="tel:+917904221920">
                <IoMdCall />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer