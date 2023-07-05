import React, { useState } from 'react'
import Banner from '../Components/Banner/BannerItem'
import HomePage from "../Components/Home/HomePage"
import { aboutData } from '../data'
import { Link } from 'react-router-dom'
import servies1 from "../Img/servies/certification.png"
import servies2 from "../Img/servies/customer-feedback.png"
import servies3 from "../Img/servies/medal-.png"
import servies4 from "../Img/servies/customer-service.png"

const Home = () => {

  const [homeInfo,] = useState(aboutData)
  return (
    <div>
      <Banner />
      <div className='flex items-center justify-center flex-col text-center gap-4 px-10 py-5'>
        <h1 className='text-4xl font-bold'>Welcome to Sanjay Traders</h1>
        <p className='text-lg tracking-normal leading-9 since_P'><span className='font-bold text-xl'>Since 2009, Sanjay Traders</span> has been a trusted manufacturer and provides you various home solutions. From <span className='font-bold text-xl'>TV units to modular kitchens, false ceilings to Pooja cupboards, and window mosquito nets, we offer a wide range of high-quality products.</span> With our expertise and dedication to customer satisfaction, we Sanjay Traders ensures that every project is executed with precision and care. Our commitment to excellence extends beyond kitchen remodeling, making us a reliable choice for all your home improvement needs.</p>
        <p>Our motto, <span className='font-bold text-xl'>Our motto, "Where dreams become culinary reality,"</span></p>
        <Link to="/about">
          <button className=' bg-lime-200 px-3 py-2'>Learn More..!</button>
        </Link>
      </div>
      <div className='py-20 bg-[#F7F5F2]'>
        <div className='text-center'>
          <p className='mb-3 text-lg font-medium'>Browesr our items</p>
          <h1 className='mb-4 text-4xl font-semibold'>Our Product Catagouries</h1>
          <div className='flex justify-center my-4'>
            <div className=' w-[14rem] h-[1.5px] bg-slate-400'></div>
          </div>
        </div>
        <div className=' flex items-center justify-center flex-wrap gap-4'>
          {homeInfo.map((info) => {
            return (
              <HomePage key={info.id} {...info} info={info} />
            )
          })}
        </div>
        <Link to="/product" className='flex items-center justify-center mt-5'>
          <button className='bg-black text-white px-4 py-2'>View All Product</button>
        </Link>
      </div>
      <div className='text-center px-5 py-5 bg-[#E2F6EF] text-black flex flex-col gap-5'>
        <h1 className='text-4xl font-bold'>Why Sanjay Traders..?</h1>
        <div className='flex items-center justify-around flex-wrap'>
          <div className='flex items-center justify-center flex-col gap-3'>
            <img src={servies1} alt='logo' className='w-[6rem]' />
            <h2 className='text-lg font-bold'>13 Year Experience</h2>
            <p className='w-[20rem] font-semibold'>Choose interiors designed with superior quality material, leaving no room for defects.</p>
          </div>

          <div className='flex items-center justify-center flex-col gap-3'>
            <img src={servies2} alt='logo' className='w-[6rem]' />
            <h2 className='text-lg font-bold'>13 Year Experience</h2>
            <p className='w-[20rem] font-semibold'>Choose interiors designed with superior quality material, leaving no room for defects.</p>
          </div>

          <div className='flex items-center justify-center flex-col gap-3'>
            <img src={servies3} alt='logo' className='w-[6rem]' />
            <h2 className='text-lg font-bold'>13 Year Experience</h2>
            <p className='w-[20rem] font-semibold'>Choose interiors designed with superior quality material, leaving no room for defects.</p>
          </div>

          <div className='flex items-center justify-center flex-col gap-3'>
            <img src={servies4} alt='logo' className='w-[6rem]' />
            <h2 className='text-lg font-bold'>13 Year Experience</h2>
            <p className='w-[20rem] font-semibold'>Choose interiors designed with superior quality material, leaving no room for defects.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home