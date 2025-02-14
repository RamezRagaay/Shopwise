import React from 'react'
import { Image } from 'next/image';
const HomeCard1 = () => {
  return (
    <div>
        <image src="../public/furniture_banner1.jpg"  alt="home" className='w-full object-cover h-full'/>
        <p className='text-center font-semibold text-lg'>Super Sale</p>
    </div>
  )
}

export default HomeCard1