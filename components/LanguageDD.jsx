"use client"

import * as React from "react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import {Down} from '../components/svgs/Dropdown'
import { FlagForUnitedKingdom } from './svgs/UK';
import { FlagForFrance } from './svgs/France';
import { FlagForUnitedStates } from './svgs/US';

export function LanguageDD() {
  const [position, setPosition] = React.useState("English")
  const flag = () =>{
  if (position === "English") {
      return <FlagForUnitedKingdom/>
  }
  else if (position === "France")
      return <FlagForFrance/>
  else
      return <FlagForUnitedStates/>
    
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="gap-1 font-light ">
            {flag()}
            {position}
            <Down/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 flex justify-start bg-white">
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem className="DD-item" value="English"><FlagForUnitedKingdom/>English</DropdownMenuRadioItem>
          <DropdownMenuRadioItem className="DD-item" value="France"> <FlagForFrance/> France</DropdownMenuRadioItem>
          <DropdownMenuRadioItem className="DD-item" value="US"> <FlagForUnitedStates/> United States</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
