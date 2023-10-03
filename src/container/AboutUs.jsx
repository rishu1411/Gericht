import React from 'react'
import Image from 'next/image'
import g from '../assets/g.png'
import knife from '../assets/knife.png'
import SubHeading from '@/components/SubHeading'

export default function AboutUs() {
  return (
    <div className='bg h-full py-10 md:h-screen  my-20 flex place-items-center'>
     
      <div className='flex gap-x-8 items-center   flex-col md:flex-row container gap-y-6'>
        <div className='abt-us flex flex-col items-end  gap-y-6  '>
          <SubHeading heading='About Us' className='font-base text-golden flex flex-col items-end gap-y-1 text-4xl' img=' rotate-180' />
          <p className='text-gray text-end  text-sm '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem obcaecati enim ad blanditiis. Beatae quod velit dolore optio in ipsam eligendi necessitatibus, provident magni ipsa sint nostrum tempora soluta? Laudantium.</p>

          <button type='button' className='bg-golden w-auto px-2 py-1 font-base font-medium text-sm'>Know More</button>

        </div >
      
          <Image src={knife} alt='knife' height={400} className='hidden md:flex'/>
        
        <div className='abt-us flex flex-col items-start  gap-y-6 '>
          <SubHeading heading='Our History' className='font-base text-golden flex flex-col items-start gap-y-1 text-4xl'  />
          <p className='text-gray text-start overflow-hidden text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem obcaecati enim ad blanditiis. Beatae quod velit dolore optio in ipsam eligendi necessitatibus, provident magni ipsa sint nostrum tempora soluta? Laudantium.</p>

          <button type='button' className='bg-golden w-auto px-2 py-1 font-base font-medium text-sm'>Know More</button>

        </div>
      </div>
    </div>
  )
}
