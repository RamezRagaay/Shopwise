import React from 'react'
import { LanguageDD } from './LanguageDD'
import { Currency } from './Currency'
import { Heart } from './svgs/Heart';
import { Login } from './svgs/Login';
import { Compare } from './svgs/Compare';
import { Mobile } from './svgs/Mobile';
import Link from 'next/link';

const Navbar_top = () => {
  return (
    <>
        <div className='border-b-0'>
        <div className="w-full h-12 text-md bg-white flex container justify-between items-center font-light text-sm">
        <div className="flex justify-evenly items-center">
            <LanguageDD/>
            <Currency/>
            <div className="flex items-center justify-center gap-1">
                <Mobile height="16" width="16"/>
                <p className='font-light text-sm'>015-555-08924</p>
            </div>
        </div>
        <div className="flex justify-evenly items-center gap-5 top-nav-left">
            <div >
            <Link href="/">
                <div className="flex items-center justify-center gap-1">

                <Compare width="16" height="16"/>
                <p>Compare</p>
                </div>
            </Link>
            </div>

            <div >
            <Link href="/">
                <div className="flex items-center justify-center gap-1">
                <Heart className="heart" width="16" height="16"/>
                <p>Wishlist</p>
                </div>
            </Link>
            </div>
            
            <div >
            <Link href="/login">
            <div className="flex items-center justify-center gap-1">

                <Login width="16" height="16"/>
                <p>Login</p>
            </div>
            </Link>
            </div>
        </div>
        </div>
        </div>
    </>
  )
}

export default Navbar_top