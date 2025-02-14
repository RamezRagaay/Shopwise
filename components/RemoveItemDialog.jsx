import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function RemoveItemDialog({onClick}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
      <button className="flex justify-center items-center px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-full hover:bg-red-600">
                        <svg className="w-4 h-4 -translate-y-[3px]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8.707 10.293a1 1 0 00-1.414 0L5 12.586 2.707 10.293a1 1 0 00-1.414 1.414L3.586 14l-2.293 2.293a1 1 0 001.414 1.414L5 15.414l2.293 2.293a1 1 0 001.414-1.414L6.414 14l2.293-2.293a1 1 0 000-1.414z"/>
                        </svg>
                        <p>Remove</p>
                    </button>
      </DialogTrigger>
      <DialogContent className="bg-white sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Are you sure you want to delete this item from your cart?</DialogTitle>
        </DialogHeader>
       
        <DialogFooter >
          <button onClick={onClick}  type="submit" className="px-3 py-2 bg-red-500 text-white rounded-full" >Remove Item</button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
