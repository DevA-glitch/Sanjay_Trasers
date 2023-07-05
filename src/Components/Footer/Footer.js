import React from 'react'
import "../Footer/Footer.css"
import { FaWhatsapp } from 'react-icons/fa';
import { IoMdCall } from 'react-icons/io';

const Footer = () => {
  return (
    <>
      <div class="bg-footer bg-black text-white">
        <div class="footer-flex">
          <div class="footer1">
            <h2>furniture</h2>
            <section>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam exercitationem eius labore commodi illum autem asperiores doloribus praesentium non ut.
            </section>
          </div>
          <div class="footer1">
            <h2>helpful links</h2>
            <li><a href="#">about us</a></li>
            <li><a href="#">our blog</a></li>
            <li><a href="#">visit site</a></li>
            <li><a href="#">contact us</a></li>
            <li><a href="#">apply a job</a></li>
          </div>
          <div class="footer1">
            <h2>shopping</h2>
            <li><a href="#">online cards</a></li>
            <li><a href="#">return policy</a></li>
            <li><a href="#">privacy policy</a></li>
            <li><a href="#">shipping</a></li>
            <li><a href="#">inventory</a></li>
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
        <div class="copy">
          <section>
            copyright &copy; at 2021 by <span>web tutorial.</span>
          </section>
        </div>
      </div>
      <div className=''>
        <div className=' fixed bottom-6 bg-gray-50 z-50 flex items-center gap-3 p-2 rounded-full shadow-md right-3'>
          <div>
            <h2>we are Online..!</h2>
          </div>
          <div className='flex'>
            <div className='p-2 px-3 bg-green-400 rounded-tl-3xl rounded-bl-3xl'>
              <a href=''>
                <FaWhatsapp />
              </a>
            </div>
            <div className='p-2 px-3 bg-blue-400 rounded-tr-3xl rounded-br-3xl'>
              <a href=''>
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