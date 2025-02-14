import { Button } from '@headlessui/react'
import { Down } from './svgs/Dropdown'


const CurrentPageHeader = ({CurrPage}) => {
  return (
    <div className='bg-gray-100'>
        <div className='flex container justify-between py-16'>
            <p className='text-2xl font-semibold text-secondary'>{CurrPage}</p>
            <div className='flex items-center'>
            <Button className='text-sm font-light'>Home</Button>
            <Down className="-rotate-90 scale-75"/>
            <p className='text-sm font-light'>Pages</p>
            <Down className="-rotate-90 scale-75"/>
            <p className='text-sm font-light'>{CurrPage}</p>
            </div>
        </div>
        <div className='container'></div>
    </div>
  )
}

export default CurrentPageHeader