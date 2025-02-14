"use client"

import * as React from "react"

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
import Link from 'next/link';

export default function PageDD() {
  const [position, setPosition] = React.useState("USD")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <Button variant="ghost" className="gap-1 text-sm">Pages
            <Down/>
        </Button>
        </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full bg-white">
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                <DropdownMenuRadioItem className="DD-item" value="USD">
                    <Link href="/">
                    About Us 
                    </Link>
                    </DropdownMenuRadioItem>
                <DropdownMenuRadioItem className="DD-item" value="EUR">
                    <Link  href="/">
                     Contact Us
                    </Link>
                    </DropdownMenuRadioItem>
                <DropdownMenuRadioItem className="DD-item" value="GBR">
                    <Link href="/">
                    FAQ
                    </Link>
                    </DropdownMenuRadioItem>
                <DropdownMenuRadioItem className="DD-item" value="GBR">
                    <Link  href="/">
                    404 Error Page
                    </Link>
                    </DropdownMenuRadioItem>
                <DropdownMenuRadioItem className="DD-item" value="GBR">
                    <Link href="/">
                    Login
                    </Link>
                    </DropdownMenuRadioItem>
                <DropdownMenuRadioItem className="DD-item" value="GBR">
                    <Link href="/">
                    Register
                    </Link>
                    </DropdownMenuRadioItem>
                <DropdownMenuRadioItem className="DD-item" value="GBR">
                    <Link href="/">
                    Terms and Conditions
                    </Link>
                    </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
