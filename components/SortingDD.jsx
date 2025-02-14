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

export default function SortingDD() {
  const [position, setPosition] = React.useState("Default sorting")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild >
      <Button variant="outline" className="gap-1 text-sm ">Default sorting
            <Down/>
        </Button>
        </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full DropdownMenuContent bg-white">
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                <DropdownMenuRadioItem className="DD-item" value="Default sorting">
                        Default sorting
                    </DropdownMenuRadioItem>
                <DropdownMenuRadioItem className="DD-item" value="Sort by popularity">
                        Sort by popularity
                    </DropdownMenuRadioItem>
                <DropdownMenuRadioItem className="DD-item" value="Sort by price low to high">
                        Sort by price low to high
                    </DropdownMenuRadioItem>
                <DropdownMenuRadioItem className="DD-item" value="Sort by price high to low">
                        Sort by price high to low
                    </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
