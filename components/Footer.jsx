import Link from 'next/link'
import React from 'react'
import { Location } from './svgs/Location'
import { Mail } from './svgs/Email'
import { Mobile } from './svgs/Mobile'
import { Facebook, Instagram, X, YoutubeIcon } from './svgs/Socialmedia';
import { Separator } from "@/components/ui/separator"
import  Image  from 'next/image';

const Footer = () => {
  return (
    <div className='footer mt-10'>
    <div className='flex gap-5 container justify-between py-16'>
      <div  className='flex-col'><p className='font-semibold text-xl pb-5'>Contact Info</p>
      <div className='pb-3 flex items-center gap-5' >
        {/* Loc */}
        <Location />
        <p className='font-normal text-sm'>123 Street, Old Trafforf, NewYork, USA</p>
      </div>
      <div className='pb-3 flex items-center gap-5'>
        {/* Email */}
        <Mail/>
        <p className='font-normal text-sm'>info@sitename.com</p>
      </div>
      <div className='pb-3 flex items-center gap-5'>
        {/* Mobile */}
        <Mobile/>
        <p className='font-normal text-sm'>+ 457 789 789 65</p>
      </div>
      <div className='py-3 flex items-center gap-2'>
        {/* Social Media Links */}
        <Facebook width={30} height={30}/>
        <div className='SM-icon flex items-center justify-center relative overflow-hidden'>
          <Instagram width={31} height={31} className='absolute'/>
        </div>
        <div className='SM-icon flex items-center justify-center'>
          <X width={22} height={22} />
        </div>
        <div className='SM-icon flex items-center justify-center'>
          <YoutubeIcon width={22} height={22}/>
        </div>
      </div>
      </div>
      <div className='flex flex-col w-32'><p className='font-semibold text-xl pb-5'>Useful Links</p>
      
      <Link href="/" className='font-normal text-sm pb-3'>About Us</Link>
      <Link href="/" className='font-normal text-sm pb-3'>FAQ</Link>
      <Link href="/" className='font-normal text-sm pb-3'>Location</Link>
      <Link href="/" className='font-normal text-sm pb-3'>Affiliates</Link>
      <Link href="/" className='font-normal text-sm pb-3'>Contact</Link>
      </div>
      <div className='flex flex-col'><p className='font-semibold text-xl pb-5'>My Account</p>
      <Link href="/" className='font-normal text-sm pb-3'>My Account</Link>
      <Link href="/" className='font-normal text-sm pb-3'>Discount</Link>
      <Link href="/" className='font-normal text-sm pb-3'>Returns</Link>
      <Link href="/" className='font-normal text-sm pb-3'>Orders History</Link>
      <Link href="/" className='font-normal text-sm pb-3'>Order Tracking</Link>
      </div>
      <div className='flex flex-col w-60'><p className='font-semibold text-xl pb-5'>Subscribe Our Newsletter</p>
      <p className='font-normal text-sm'>If you want to get an email from us every time we have a new special offer, then sign up here!</p>
      {/* Enter Email Address component */}
      </div>
    </div>
    <Separator orientation="horizontal" className="bg-gray-400 opacity-20"/>
    <div className='container py-8 flex justify-between'><p className='font-normal text-sm'>© 2020 All Rights Reserved by Bestwebcreator</p>
      <div className='flex gap-1'>
        {/* Payment methods */}
        <Image src="/MasterCard.png" width={45} height={45}/>
        <Image src="/amarican_express.png" width={45} height={45}/>
        <Image src="/Discover.png" width={45} height={45}/>
        <Image src="/PayPal.png" width={45} height={45}/>
        <Image src="/Visa.png" width={45} height={45}/>
      </div>
    </div>
    </div>

  )
}

export default Footer