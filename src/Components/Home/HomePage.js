import React from 'react'

const HomePage = ({ info }) => {
  return (
    <>
      <div className='flex items-start flex-col gap-2 hover:bg-black hover:text-white p-3 hover:shadow-md'>
        <img src={info.Image} alt='pD' className='w-[20rem] h-[22rem] hover:scale-[90%] translate-x-1 skew-y-3 md:transform-none duration-500 cursor-pointer' />
        <p className='text-xl font-bold '>{info.title}</p>
        <p className='w-[15rem] text-sm'>{info.describe}</p>
      </div>
    </>
  )
}

export default HomePage