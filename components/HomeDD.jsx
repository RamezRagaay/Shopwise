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

export default function HomeDD() {
  const [position, setPosition] = React.useState("USD")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <Button variant="ghost" className="gap-1 text-sm">Home
            <Down/>
        </Button>
        </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full DropdownMenuContent bg-white">
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                <DropdownMenuRadioItem className="DD-item" value="USD">
                    <Link href="/">
                    Fashion 1  
                    </Link>
                    </DropdownMenuRadioItem>
                <DropdownMenuRadioItem className="DD-item" value="EUR">
                    <Link  href="/">
                    Fashion 2
                    </Link>
                    </DropdownMenuRadioItem>
                <DropdownMenuRadioItem className="DD-item" value="GBR">
                    <Link href="/">
                    Furniture 1
                    </Link>
                    </DropdownMenuRadioItem>
                <DropdownMenuRadioItem className="DD-item" value="GBR">
                    <Link  href="/">
                    Furniture 2
                    </Link>
                    </DropdownMenuRadioItem>
                <DropdownMenuRadioItem className="DD-item" value="GBR">
                    <Link href="/">
                    Electronic 1
                    </Link>
                    </DropdownMenuRadioItem>
                <DropdownMenuRadioItem className="DD-item" value="GBR">
                    <Link href="/">
                    Electronic 2
                    </Link>
                    </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
