"use client"
import React from 'react'
import  Image  from 'next/image';
import { Button } from './ui/button';
import { Cart } from './svgs/Cart';
import { Compare } from './svgs/Compare';
import { Heart } from './svgs/Heart';
import { Search } from './svgs/Search';
import { Skeleton } from "@/components/ui/skeleton"
import Rating from './rating';
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link';
import { Minus, Plus } from "lucide-react"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { useSelector, useDispatch } from 'react-redux';
import { getItem } from '@/store/features/Cart/cartSlice';
const Card = ({ product , loading }) => {

  const dispatch = useDispatch();
  const [goal, setGoal] = React.useState(1)

  function onClick(adjustment) {
    setGoal(goal + adjustment)
  }
  const [hovered, setHovered] = React.useState(false)
  const [buttonhovered, setButtonHovered] = React.useState(false)
  const handleMouseEnter = () =>{
    setHovered(true)
  }
  const handleMouseLeave = () =>{
    setHovered(false)
  }
  // const ss = "Ramezzzz";
  // const s2 = ss.substring(0,3)
  // console.log(s2);
  const adjustTitle = (title) =>{
      let s2;
      if(title.length >= 20){
        s2 = title.substring(0,20);
        return s2 + "..."
      }
      return title
  }
  
  const handleSubmit = () => {
    dispatch(getItem({id: product.id, count: goal}));
    toast.success("Added to cart", {
      duration: 2000,
    })
  }

  return (
    
    <>
    
    <Toaster />
    {loading ?  
  (
        <div className="flex flex-col space-y-3">
        <Skeleton className="h-[125px] w-[250px] rounded-xl bg-gray-100" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px] bg-gray-500" />
          <Skeleton className="h-4 w-[200px] bg-gray-500" />
        </div>
        </div> 
    )
        :
       ( 
    <div className='w-60 h-96 rounded-xl overflow-hidden border my-5 product-card' 
    onMouseEnter={handleMouseEnter} 
    onMouseLeave={handleMouseLeave}>
      <Link key={product.id} href={`/home/${product.id}`}>

      <div className={`relative overflow-hidden px-5 ${hovered ? `darkened` : ''}`}>
        <Image src={product.image} width={208} height={280} className='object-contain product-img w-full h-64'/>
        <div className='overlay'></div>
        <button className={`bg-gray-100 w-11 h-11 left-8 rounded-full hover:bg-primary flex justify-center items-center absolute ${hovered ? `bottom-24 opacity-100 duration-150` : `-bottom-12 opacity-0 duration-150 `}`}><Compare width={20} height={20}/></button>
        <button className={`bg-gray-100 w-11 h-11 left-24 rounded-full hover:bg-primary flex justify-center items-center absolute ${hovered ? `bottom-24 opacity-100 duration-200` : `-bottom-12 opacity-0 duration-200`}`}><Heart width={20} height={20} /></button>
        <button className={`bg-gray-100 w-11 h-11 left-40 rounded-full hover:bg-primary flex justify-center items-center absolute ${hovered ? `bottom-24 opacity-100 duration-300` : `-bottom-12 opacity-0 duration-300`}`}><Search width={20} height={20}/></button>
      </div>



        <div className='relative flex flex-col justify-center items-center p-5 '>
            <p className='font-medium text-base h-5'>{adjustTitle(product.title)}</p>

            <div className='absolute top-20'>   
              <div className='flex flex-col justify-center items-center -mt-5'>
                <div className='flex gap-3'>
                    <p className='font-semibold text-primary'>$ {product.price}</p>
                    <p className='font-extralight relative after:w-full after:h-px after:bg-gray-500 after:absolute after:left-0 after:top-2'>$ {product.price + Math.trunc(product.price/20)}</p>
                </div>
                <div className='flex items-center'>
                  <Rating rate={product.rating.rate}/>
                  <p className='font-light'>{product.rating.rate}</p>
              </div>
              </div>
        </div>
        </div>
        </Link>

        <Drawer>
          <DrawerTrigger >
          <button className={`left-8 flex justify-center items-center text-white bg-white w-44 h-12 z-30  rounded-full product-button duration-300 
                ${hovered ? `bottom-0` : `-bottom-40`} ${buttonhovered ? `after:-left-32 before:-right-32` : `after:left-0 before:right-0`}`}
                onMouseEnter={()=>{setButtonHovered(true)}}
                onMouseLeave={()=>{setButtonHovered(false)}}
                >
                <Cart fill={`${buttonhovered? '#FF324D' : 'white'}`} width={30} height={30}/>
                Add To Cart
              </button>          
              
              </DrawerTrigger>
          <DrawerContent className="bg-white">
            <div className=" mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>Add to cart</DrawerTitle>
                <DrawerDescription>How many items do you want to add?</DrawerDescription>
              </DrawerHeader>
              <div className="p-4 pb-0">
                <div className="flex items-center justify-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 shrink-0 rounded-full"
                    onClick={() => onClick(-1)}
                    disabled={goal <= 1}
                  >
                    <Minus className="h-4 w-4" />
                    <span className="sr-only">Decrease</span>
                  </Button>
                  <div className="flex-1 text-center">
                    <div className="text-7xl font-bold tracking-tighter">
                      {goal}
                    </div>
                  
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 shrink-0 rounded-full"
                    onClick={() => onClick(1)}
                    disabled={goal >= 10}
                  >
                    <Plus className="h-4 w-4" />
                    <span className="sr-only">Increase</span>
                  </Button>
                </div>
              </div>
              <DrawerFooter>
              <DrawerClose asChild>
                <Button className="text-white rounded-2xl" onClick={handleSubmit}>Add to cart</Button>
                </DrawerClose>

                <DrawerClose asChild>
                  <Button className="rounded-2xl" variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
    </div>
       )  
        }

    </>

  )
}

export default Card