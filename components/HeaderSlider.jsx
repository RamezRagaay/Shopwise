"use client"
import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';


import Aos from 'aos'
import "aos/dist/aos.css"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './SliderStyles.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import ShopNowHeaderBtn from './ShopNowHeaderBtn';


export default function HeaderSlider() {
  React.useEffect(() => {
    Aos.init();
  }, [])

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
//   const onAutoplayTimeLeft = (s, time, progress) => {
//     progressCircle.current.style.setProperty('--progress', 1 - progress);
//     progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
//   };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          // type
        }}
        loop={true}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        // onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide className='relative'><Image src='/banner9.jpg' width={2000} height={2500}/>
            <div className='absolute self-center container text-left'>
            <p className='font-normal   xl:text-xl md:text-xl md:w-52 sm:text-sm py-5' data-aos="fade-down" data-aos-duration="3000">Taking your Viewing Experience to Next Level</p>
            <h3 className='font-bold 2xl:text-6xl xl:text-6xl w-96 md:text:2xl sm:text-base pt-1 pb-7' data-aos="fade-down" data-aos-duration="3000">Living Room Collection</h3>
            <ShopNowHeaderBtn/>
            </div>
        </SwiperSlide>
        <SwiperSlide className='relative'><Image src='/banner8.jpg' width={2000} height={2500}/>
            <div className='absolute self-center container text-left'>
            <p className='font-normal 2xl:text-2xl  xl:text-2xl md:text-lg sm:text-sm py-5'>NEW TRANDING</p>
            <h3 className='font-bold 2xl:text-7xl xl:text-7xl md:text:2xl sm:text-base pt-1 pb-7' data-aos="fade-up" data-aos-duration="3000">Sofa Collection</h3>
            <article className='font-extralight text-sm w-96 pb-10' data-aos="fade-down" data-aos-duration="3000">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sunt quisquam velit.</article>
            <ShopNowHeaderBtn/>
            </div>
        </SwiperSlide>
        <SwiperSlide className='relative'><Image src='/banner7.jpg' width={2000} height={2500}/>
            <div className='absolute self-center text-left container'>
            <p className='font-normal 2xl:text-xl  xl:text-xl md:text-lg sm:text-sm py-5'>Get up to 50% off Today Only!</p>
            <h3 className='font-bold 2xl:text-6xl xl:text-6xl w-96 md:text:2xl sm:text-base pt-1 pb-7'>Wooden Chair Collection</h3>
            <ShopNowHeaderBtn/>
            </div>
        </SwiperSlide>
        {/* <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div> */}
      </Swiper>
      
    </>
  );
}
