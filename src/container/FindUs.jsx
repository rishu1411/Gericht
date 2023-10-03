import React from 'react'
import Image from 'next/image'
import find from '../assets/findus.png'
import SubHeading from '@/components/SubHeading'
export default function FindUs() {
  return (
    <div className='bg h-full md:h-screen'>
      <div className="container mx-auto py-10 flex justify-center gap-x-8 gap-y-8 items-center">
        <div className=''>
          <SubHeading heading='Contact' className='space-y-1 text-white font-base' img='w-[25px]' />
          <h3 className='text-golden text-4xl font-base tracking-wider mb-10'>Find US </h3>
          <p className='text-gray text-xs'>Lane Ends Bungalow, Wharcroft Hall Lane, Rudheath, CW9 7SG</p>
          <div className='mt-3 mb-5 '>

          <h5 className='text-golden font-base text-base'>Opening Hours</h5>
          <p className='text-white text-[12px] my-2'>Mon - Fri: 10:00 am - 2:00 am </p>
          <p className='text-white text-[12px]'>Sat - Sun: 10:00 am - 3:00 am </p>
          </div>
          <button type='button' className='bg-golden w-auto px-2 py-1 font-base font-medium text-sm'>Visit Us</button>
        </div>
        <div>
          <Image src={find} alt='find' height={475}/>
        </div>
      </div>
    </div>
  )
}
