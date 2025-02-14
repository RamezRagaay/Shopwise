"use client"
import React from 'react'

export const ProductInfo = ({prod}) => {
    const [focus, setfocus] = React.useState("Description")
  return (
    <div className="mt-10 col-span-2" >
        <div className="flex gap-5">
        <button className={`text-xl ${focus === "Description" && `text-primary`}`} onClick={() => setfocus("Description")}>Description</button>
        <button className={`text-xl ${focus === "info" && `text-primary`}`} onClick={() => setfocus("info")}>Additional info</button>
        </div>
        <div className="relative mt-2 w-full h-[0.5px] bg-gray-300 ">
            <div className={`absolute w-32 h-1 bg-primary -top-[1px] duration-300  ${focus === "info" && `translate-x-32 w-40 duration-300`}`} ></div>
        </div>
        <div className={`mt-10 text-gray-600 text-xl w-full ${focus === "info" && `hidden`}`}>{prod.description}</div>
        <div className={`mt-10 text-gray-600 text-xl w-full ${focus === "Description" && `hidden`}`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, </div>
      </div>
)
}
