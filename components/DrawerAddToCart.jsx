import * as React from "react"
import { Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
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


export function DrawerAddToCart() {
  const [goal, setGoal] = React.useState(1)

  function onClick(adjustment) {
    setGoal(goal + adjustment)
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Add to cart</Button>
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
            <Button className="text-white rounded-2xl">Add to cart</Button>
            <DrawerClose asChild>
              <Button className="rounded-2xl" variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
