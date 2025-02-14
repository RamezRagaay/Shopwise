import Link from 'next/link'
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
 
export default function NotFound() {
  return (
    <div className="bg-black flex justify-center items-center text-white h-dvh gap-5">
      <div className='flex flex-col justify-center items-center'>
      <span>404</span>
      <h2>Not Found</h2>
      </div>
      <Separator orientation="vertical" className="bg-white h-20"/>
      <div className='flex flex-col justify-center items-start'>
        <p>Could not find requested resource</p>
        <Button variant="outline" className="rounded-full"> <Link href="/home">Return Home</Link> </Button> 
      </div>
    </div>
  )
}