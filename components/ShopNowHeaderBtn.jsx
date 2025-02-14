import React from 'react'

const ShopNowHeaderBtn = () => {
  const handleScroll = () => {
    const products = document.getElementById('products-section');
    if(products) products.scrollIntoView({ behavior: 'smooth' });
  }
  return (
        <button className='ShopNowHeaderBtn' onClick={handleScroll}>SHOP NOW</button>
    )
}

export default ShopNowHeaderBtn