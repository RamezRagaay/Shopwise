"use client"
import React from 'react'


const Sizes = () => {
    const [size, setSize] = React.useState("");

  return (
    <div div className='flex mt-5 items-center gap-1'>
            <p className='mr-5'>Size</p>
            <button id="xs" onClick={() => {setSize("xs")}} className={`w-10 h-10 border-2 font-light text-sm ${size === "xs" && `bg-green-500` }`}>XS</button>
            <button id="s" onClick={() => {setSize("s")}} className={`w-10 h-10 border-2 font-light text-sm ${size === "s" && `bg-green-500` }`}>S</button>
            <button id="m" onClick={() => {setSize("m")}} className={`w-10 h-10 border-2 font-light text-sm ${size === "m" && `bg-green-500` }`}>M</button>
            <button id="l" onClick={() => {setSize("l")}} className={`w-10 h-10 border-2 font-light text-sm ${size === "l" && `bg-green-500` }`}>L</button>
            <button id="xl" onClick={() => {setSize("xl")}} className={`w-10 h-10 border-2 font-light text-sm ${size === "xl" && `bg-green-500` }`}>XL</button>
        </div>
  )
}

export default Sizes