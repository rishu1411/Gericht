import MenuItem from '@/components/MenuItem'
import SubHeading from '@/components/SubHeading'
import React from 'react'
import { wines,cocktails } from '../data'
import Image from 'next/image'
import menu from '../assets/menu.png'


export default function Menu() {
  return (
    <div className='h-full md:h-screen gap-y-12 container mx-auto flex flex-col place-items-center my-10 '>
      
      <div className='heading  space-y-1'>
        <SubHeading heading='Menu That Fits Your Palate ' className='font-base text-white flex flex-col justify-center items-center gap-y-1' img='w-[30px]'/>
        <h3 className='text-golden text-4xl font-base tracking-wider'>Today's Special</h3>
      </div>
      <div className='flex gap-x-8 flex-col md:flex-row gap-y-6 justify-between'>
        <MenuItem header='Wine & Beer' list={wines} />
        <Image src={menu} alt='' height={850} width={200}/>
        <MenuItem header='Cocktails' list={cocktails} />
      </div>
      
      <button type='button' className='bg-golden w-auto px-2 py-1 font-base font-medium text-sm rounded-sm '>View More</button>
      
    </div>
  )
}
