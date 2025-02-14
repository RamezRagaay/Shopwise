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
export function Currency() {
  const [position, setPosition] = React.useState("USD")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <Button variant="ghost" className="gap-1 font-light">{position}
            <Down/>
        </Button>
        </DropdownMenuTrigger>
      <DropdownMenuContent className="w-1 bg-white">
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem className="DD-item" value="USD">USD</DropdownMenuRadioItem>
          <DropdownMenuRadioItem className="DD-item" value="EUR">EUR</DropdownMenuRadioItem>
          <DropdownMenuRadioItem className="DD-item" value="GBR">GBR</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
