"use client"
import React from 'react'
// import CurrentPageHeader from '../../../components/currentPageheader';
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
import Cookies from 'js-cookie'
import CurrentPageHeader from '@/components/currentPageheader';
 

const Page = () => {
  const router = useRouter();
  const {users} =useProductsList();
  const notify = () => toast('Here is your toast.');
  const [showPass, setShowPass] = React.useState(false);

  const schema = yup.object().shape({
    email: yup.string().required("username is required"),
    password: yup.string().required("Password is required")
    
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
        <CurrentPageHeader CurrPage={'Login'}/>
        <div className='flex justify-center flex-col items-center login container'>
        <form onSubmit={handleSubmit( async (data) =>{
          console.log(data);
          fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: data.email,
              password: data.password,
            })
          }).then(async (res) => {
            const json = await res.json();
            console.log(json);
            Cookies.set('token', json.token, { expires: 7 });
            toast.success("Login Successful", {
                  duration: 5000,
                  position: 'bottom-right',
                  style: { backgroundColor: 'green', color: 'white' }
                });
                
                setTimeout(() => {
                  if(typeof window !== "undefined"){
                    router.push("/home");
                  }
                }, 2000)
          }).catch((err) => {
            toast.error("Login Failed, invalid credentials", {
                  duration: 5000,
                  position: 'bottom-right',
                  style: { backgroundColor: 'red', color: 'white' }
                })
          })
          
          })} className='w-1/2 min-h-5/6 m-10 flex flex-col shadow-lg login-box p-10'>
                <h2 className='text-3xl font-semibold mb-10'>Login</h2>
                <Input id="email" type="text" placeholder="Email" className="mb-3" {...register("email", { required: true })}/>
                {errors.email && <p className='mb-3 text-primary text-sm ml-1 -mt-2'>{errors.email.message}</p>}
                <div className='relative'>
                <Input type={`${showPass ? "text" : "password"}`} placeholder="Password" className="mb-3" {...register("password", { required: true })}/>
                <div className='absolute  right-5 top-2 cursor-pointer' onClick={() => setShowPass(!showPass)}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M3 13c3.6-8 14.4-8 18 0"/><path d="M12 17a3 3 0 1 1 0-6a3 3 0 0 1 0 6Z"/></g></svg></div>
                {errors.password && <p className='mb-5 text-primary text-sm ml-1 -mt-2'>{errors.password.message}</p>}
                </div>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center '>
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-md ml-2 text-gray-800 font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                      Remember me
                    </label>

                  </div>

                  <Link href="/login" className='text-md ml-2 text-gray-800 font-light'>Forgot Password?</Link>
                </div>
                <div className='flex justify-center mt-5'>
                  <DoorButton type={"submit"} text={"Login"}/>
                </div>
            <div className='flex items-center my-4'>
                <div className="flex-grow border-t border-gray-300"></div>
                <p className='mx-2 text-gray-500'>Or</p>
                <div className="flex-grow border-t border-gray-300"></div>
            </div>
            <p className="self-center text-md ml-2 text-gray-800 font-light">Don't have an account? <Link href="/register" className='text-md ml-2 text-black font-normal'>Register</Link></p>
        </form>
        </div>
    </div >
  )
}

export default Page