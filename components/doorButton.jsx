"use client"
import React from 'react'

const DoorButton = ({type, text, onClick}) => {

    const [buttonhovered, setButtonHovered] = React.useState(false)

  return (

    <>
        <button className={`flex justify-center items-center text-white bg-white w-44 h-12 z-10 rounded-xl product-button duration-300 
                ${buttonhovered ? `after:-left-32 before:-right-32` : `after:left-0 before:right-0`}`}
                onMouseEnter={()=>{setButtonHovered(true)}}
                onMouseLeave={()=>{setButtonHovered(false)}}
                onClick={onClick}
                type={type}>
                {text}
        </button>
    </>
  )
}

export default DoorButton