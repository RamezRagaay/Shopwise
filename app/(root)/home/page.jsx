import FeaturesGrid from '@/components/FeaturesGrid'
import HeaderSlider from '@/components/HeaderSlider'
import Products from '@/components/Products'
import React from 'react'
import HomeCard1 from '@/components/homeCard1'

const page = () => {
  return (
    <>
      <HeaderSlider/>
      <FeaturesGrid/>
      <Products/>
      <HomeCard1/>
    </>
  )
}

export default page