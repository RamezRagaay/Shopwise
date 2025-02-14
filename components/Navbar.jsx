"use client"
import Link from 'next/link'
import Image  from 'next/image';
import HomeDD  from './HomeDD';
import PageDD from './PagesDD';
import { ProductsDD } from './ProductsDD';
import { Button } from './ui/button';
import  {Search}  from './svgs/Search';
import { Cart } from './svgs/Cart';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { clearCart } from '@/store/features/Cart/cartSlice';
const Navbar = () => {

  const { amount } = useSelector((state) => state.cart)
  const [sticky, setSticky] = useState(false);
  
  
  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 48){
        setSticky(true)
      }
      else{
        setSticky(false)
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])
  const dispatch = useDispatch();

  return (
    <div className={`bg-white ${sticky ? 'sticky sticky-nav z-50 top-0' : ''} transition-all duration-300`}>
      <nav className="flex justify-between container items-center h-20 w-full p-10 border-black-200 py-7">
        <Image src='/logo_dark.png' width={200} height={200}/>

        <div className='flex justify-center items-center'>
            <Link href='/home'>
            Home
              {/* <HomeDD/> */}
            </Link>
            <PageDD/>
            <ProductsDD/>
            <Button variant="ghost" className="gap-1 text-sm">Contact Us</Button>
            </div>

        <div className='flex justify-center items-center'>
            <Search width={24} height={24}/>
            <Link href="/cart">
              <div className='relative'>
                <Cart width={24} height={24}/>
                <div className='absolute -top-2 -right-1 rounded-full bg-primary text-white w-5 h-5 flex justify-center items-center  text-[10px]'>{
                  amount > 99
                  ? "99+"
                  : amount
              }</div>
              </div>
            </Link>
            
        </div>
      </nav>
    </div>

  )
}

export default Navbar