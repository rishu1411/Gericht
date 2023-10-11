'use client'

import React from 'react'
import Image from 'next/image'
import paneer from '../assets/paneer.png'
import TextField from '@/components/TextField.jsx'
import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Login() {
  let text = 'hello'
  return (
      <div className='container mx-auto '>
          <div className='flex flex-shrink py-10 '>
              <Image src={paneer} alt='Image' className='flex-1 md:block hidden ' height={100}/>
              <div className='bg-[#202020] flex-1'>
          <h3 className='text-3xl text-golden font-base font-semibold text-center p-2'>Login</h3>
          
          <form action="" className='container mx-auto my-10 flex flex-col items-center ' >
            <div className='w-full'>
            <TextField type='email' placeholder='Enter email id'/>
              <TextField type='password' placeholder='Enter password'  />
              </div>
            
          <button type='submit' className='font-base text-black border border-golden bg-golden mt-8 mb-4 w-16 hover:text-golden hover:bg-transparent py-1 rounded-xl '>Submit </button>              
            
            <div className='flex items-center text-golden justify-center gap-x-2  '>
              <hr className='border border-golden md:w-32 lg:w-40 sm:w-40 w-20' />
              <span>or</span>
              <hr className='border border-golden md:w-32 lg:w-40 sm:w-40 w-20'/>
            </div>
            <div className='space-y-4 my-4  '>
              <button type='submit' className='transition duration-300 font-base text-black border border-golden bg-golden  w-full hover:text-golden hover:bg-transparent py-1 rounded-xl'>Login with Facebook <FacebookIcon /> </button>              
          <button type='submit' className='transition duration-300  font-base text-black border border-golden bg-golden  w-full hover:text-golden hover:bg-transparent py-1 rounded-xl '>Login with Apple <AppleIcon/> </button>              
          </div>
          </form>
              </div>
          </div>
          
    </div>
  )
}
