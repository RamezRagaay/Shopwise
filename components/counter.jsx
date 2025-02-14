"use client"
import React from 'react'
import DoorButton from './doorButton'
import { useDispatch } from 'react-redux'
import { getItem } from '@/store/features/Cart/cartSlice'
import toast, { Toaster } from 'react-hot-toast';

const Counter = ({id}) => {
    const dispatch = useDispatch();

    const [count, setCount] = React.useState(1)

    const handleCounter = () => {
        const value = parseInt(event.target.value, 10);

        if(!isNaN(value) && value > 0) {
            setCount(value);
        }
    } 

    const handleSubmit = () => {
        dispatch(getItem({id, count}))
        if(count == 1){
            toast.success(`${count} item Added to cart`, {
                duration: 2000,
            })
        }
        else{
            toast.success(`${count} items Added to cart`, {
                duration: 2000,
            })
        }
        
    }


  return (
      <div className='flex justify-center items-center gap-10'>
        <Toaster/>
        <div  className='flex justify-center items-center'>
            <button className={`w-10 h-10 bg-gray-100 rounded-full ${count == 1 && `disabled`}`} onClick={() => {
                if(count > 1){
                    setCount(count - 1)
                }
                
            }}>-</button>


            <input 
            className='text-center input-cnt w-[80px] h-[50px] border-2 mx-[20px] text-[24px] flex justify-center items-center'
            type="number"
            value={count}
            min={1}
            max={10}
            onChange={handleCounter}
            />


            <button className='w-10 h-10 bg-gray-100 rounded-full' onClick={() => {
                if(count < 10)
                setCount(count + 1)
            }}>+
            </button>
        </div>

        <DoorButton type="button" text="Add To Cart" onClick={handleSubmit}/>
        
    </div>
    
  )
}

export default Counter