"use client"
import React, { useEffect, useState } from 'react'
import CurrentPageHeader from '../../../components/currentPageheader';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { Input } from "@/components/ui/input"
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';
import DoorButton from '@/components/doorButton';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { redirect } from 'next/dist/server/api-utils';
import { getUsers } from '@/services/users';
import useProductsList from '@/hooks/use-users';
import toast, { Toaster } from 'react-hot-toast';
import { data } from 'jquery';
import { postUser } from '@/services/users';
 

const Page = () => {
  const [triggerEffect, setTriggerEffect] = useState(false);

  useEffect(() => {
      
    fetch('https://fakestoreapi.com/users',{
      method:"POST",
      body:JSON.stringify(
          {
              email:'ramez@gmail.com',
              username:'ramez',
              password:'m38rmF$',
              name:{
                  firstname:'John',
                  lastname:'Doe'
              },
              address:{
                  city:'kilcoole',
                  street:'7835 new road',
                  number:3,
                  zipcode:'12926-3874',
                  geolocation:{
                      lat:'-37.3159',
                      long:'81.1496'
                  }
              },
              phone:'1-570-236-7033'
          }
      )
  })
      .then(res=>res.json())
      .then(json=>console.log(json))
      .then(json=>console.log(json))
  }, [triggerEffect]);

  const router = useRouter();
  const {users} =useProductsList();
  const notify = () => toast('Here is your toast.');


  const schema = yup.object().shape({
    username: yup.string().required("Name is required"),
    email: yup.string().email().required("Email is required"),
    password: yup.string().required("Password is required").min(6, 'Password must be at least 6 characters long')
    .matches(/(?=.*[A-Z])/, 'Password must contain at least one uppercase letter')
    .matches(/(?=.*\d)/, 'Password must contain at least one number')
    .matches(/(?=.*[@$!%*?&])/, 'Password must contain at least one special character'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required("Confirm Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),});
  

  return (
    <div className='overflow-hidden'>
        <Toaster />
        <CurrentPageHeader CurrPage={'Register'}/>
        <div className='flex justify-center flex-col items-center login container'>
        <form onSubmit={handleSubmit(  (data) =>{console.log(data);})} className='w-1/2 min-h-5/6 m-10 flex flex-col shadow-lg login-box p-10'>
                <h2 className='text-3xl font-semibold mb-10'>Create An Account</h2>
                <Input type="text" placeholder="Enter Your Name" className="mb-3" {...register("username", { required: true })}/>
                {errors.username && <p className='mb-3 text-primary text-sm ml-1 -mt-2'>{errors.username.message}</p>}
                
                <Input type="email" placeholder="Email" className="mb-3" {...register("email", { required: true })}/>
                {errors.email && <p className='mb-3 text-primary text-sm ml-1 -mt-2'>{errors.email.message}</p>}
                
                <Input type="password" placeholder="Enter Password" className="mb-3" {...register("password", { required: true })}/>
                {errors.password && <p className='mb-5 text-primary text-sm ml-1 -mt-2'>{errors.password.message}</p>}
                
                <Input type="password" placeholder="Confirm Password" className="mb-3" {...register("confirmPassword", { required: true })}/>
                {errors.password && <p className='mb-5 text-primary text-sm ml-1 -mt-2'>{errors.confirmPassword.message}</p>}
                
                <div className='flex items-center justify-between'>
                  <div className='flex items-center '>
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-md ml-2 text-gray-800 font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                      Accept terms and conditions
                    </label>

                  </div>

                </div>
                <div className='flex justify-center mt-5'>
                  <DoorButton type={"submit"} text={"Register"} onSubmit={()=>{setTriggerEffect(!triggerEffect)}}/>
                </div>
           
        </form>
        </div>
    </div >
  )
}

export default Page