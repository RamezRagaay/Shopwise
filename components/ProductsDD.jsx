"use client"

import * as React from "react"
import Link from "next/link"
import Image  from "next/image"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {Down} from '../components/svgs/Dropdown'
import ShopNowBtn from './ShopNowBtn';
export function ProductsDD() {
  const [position, setPosition] = React.useState("USD")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <Button variant="ghost" className="gap-1 text-sm">Products
            <Down/>
        </Button>
        </DropdownMenuTrigger>
        
      <DropdownMenuContent className="flex-col bg-white">
        <div className="flex gap-20 pt-3">
        <div>
    
        <DropdownMenuLabel>WOMEN'S</DropdownMenuLabel>
        
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                <DropdownMenuRadioItem className="DD-item py-2" value="USD">
                    <Link href="/" className="DD-link">
                    Vestibulum Sed
                    </Link>
                    </DropdownMenuRadioItem>
                <DropdownMenuRadioItem className="DD-item py-2" value="EUR">
                    <Link  href="/" className="DD-link">
                    Donec Porttitor
                    </Link>
                    </DropdownMenuRadioItem>
                <DropdownMenuRadioItem className="DD-item py-2" value="GBR">
                    <Link href="/" className="DD-link">
                    Donec Vitae Facilisis
                    </Link>
                    </DropdownMenuRadioItem>
                <DropdownMenuRadioItem className="DD-item py-2" value="GBR">
                    <Link  href="/" className="DD-link">
                    Curabitur Tempus
                    </Link>
                    </DropdownMenuRadioItem>
                <DropdownMenuRadioItem className="DD-item py-2" value="GBR">
                    <Link href="/" className="DD-link">
                    Vivamus in Tortor
                    </Link>
                    </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>

        </div>

        <div>
        <DropdownMenuLabel>MEN'S</DropdownMenuLabel>
        
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                <DropdownMenuRadioItem className="DD-item py-2" value="USD">
                    <Link href="/" className="DD-link">
                    Donec Vitae Ante Ante
                    </Link>
                    </DropdownMenuRadioItem>
                <DropdownMenuRadioItem className="DD-item py-2" value="EUR">
                    <Link  href="/" className="DD-link">
                    Etiam Ac Ruturm
                    </Link>
                    </DropdownMenuRadioItem>
                <DropdownMenuRadioItem className="DD-item py-2" value="GBR">
                    <Link href="/" className="DD-link">
                    Quisque Condimentum
                    </Link>
                    </DropdownMenuRadioItem>
                <DropdownMenuRadioItem className="DD-item py-2" value="GBR">
                    <Link  href="/" className="DD-link">
                    Curabitur Lapreet
                    </Link>
                    </DropdownMenuRadioItem>
                <DropdownMenuRadioItem className="DD-item py-2" value="GBR">
                    <Link href="/" className="DD-link">
                    Vivamus in Tortor
                    </Link>
                    </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
        </div>


        <div>
        <DropdownMenuLabel>KID'S</DropdownMenuLabel>
        
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                <DropdownMenuRadioItem className="DD-item py-2" value="USD">
                    <Link href="/">
                    Donec Vitae Facilisis
                    </Link>
                    </DropdownMenuRadioItem>
                <DropdownMenuRadioItem className="DD-item py-2" value="EUR">
                    <Link  href="/">
                    Quisque Condimentum
                    </Link>
                    </DropdownMenuRadioItem>
                <DropdownMenuRadioItem className="DD-item py-2" value="GBR">
                    <Link href="/">
                    Etiam Ac Ruitrum
                    </Link>
                    </DropdownMenuRadioItem>
                <DropdownMenuRadioItem className="DD-item py-2" value="GBR">
                    <Link  href="/">
                    Donec Vitae Ante Ante
                    </Link>
                    </DropdownMenuRadioItem>
                <DropdownMenuRadioItem className="DD-item py-2" value="GBR">
                    <Link href="/">
                    Donec Porttitor
                    </Link>
                    </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
        </div>


        <div>
        <DropdownMenuLabel>ACCESSORIES</DropdownMenuLabel>
        
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                <DropdownMenuRadioItem className="DD-item py-2" value="USD">
                    <Link href="/" className="DD-link">
                    Donec Vitae Facilisis
                    </Link>
                    </DropdownMenuRadioItem>
                <DropdownMenuRadioItem className="DD-item py-2" value="EUR">
                    <Link  href="/" className="DD-link">
                    Quisque Condimentum
                    </Link>
                    </DropdownMenuRadioItem>
                <DropdownMenuRadioItem className="DD-item py-2" value="GBR">
                    <Link href="/" className="DD-link">
                    Etiam Ac Ruitrum
                    </Link>
                    </DropdownMenuRadioItem>
                <DropdownMenuRadioItem className="DD-item py-2" value="GBR">
                    <Link  href="/" className="DD-link">
                    Donec Vitae Ante Ante
                    </Link>
                    </DropdownMenuRadioItem>
                <DropdownMenuRadioItem className="DD-item py-2" value="GBR">
                    <Link href="/" className="DD-link">
                    Donec Porttitor
                    </Link>
                    </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
        </div>

        </div>

        <div className="flex gap-y-10">
            <div className="relative">
            <Image src='/menu_banner11.jpg' className="pb-3 pl-3 pr-3" width={400} height={400}/>
            <div className="absolute top-16 left-52">
            <span className="font-semibold">10% Off</span>
            <p className="font-semibold text-2xl font">New Arrival</p>
            <ShopNowBtn/>

            </div>
            </div>
            <div className="relative">
            <Image src='/menu_banner22.jpg' className="pb-3 pr-3" width={400} height={400}/>
            <div className="absolute top-16 left-52">
            <span className="font-semibold">10% Off</span>
            <p className="font-semibold text-2xl font">New Arrival</p>
            <ShopNowBtn/>

            </div>
            </div>
            <div className="relative">
            <Image src='/menu_banner33.jpg' className="pb-3 pr-3" width={400} height={400}/>
            <div className="absolute top-16 left-52">
            <span className="font-semibold">10% Off</span>
            <p className="font-semibold text-2xl font">New Arrival</p>
            <ShopNowBtn/>
            </div>
            </div>
        </div>

      </DropdownMenuContent>
    </DropdownMenu>

  )
}
