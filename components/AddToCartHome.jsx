import React from 'react'
import { Cart } from './svgs/Cart'

const AddToCartHome = ({className, onMouseEnter, onMouseLeave, fill}) => {
  return (
    <>
        <button className={className}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}>
                <Cart fill={fill} width={30} height={30}/>
                Add To Cart
              </button>
    </>
  )
}

export default AddToCartHome