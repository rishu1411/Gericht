import React from 'react'
import Image from 'next/image'
import header from '../assets/welcome.png'
import SubHeading from '@/components/SubHeading'

export default function Header() {
  return (
    <div className=' container  flex flex-col md:flex-row items-center  justify-between my-10 lg:my-20 gap-y-8 mx-auto gap-x-8 '>
      
          <div className=" -rotate-90 space-x-4 relative md:text-sm text-xs 2xl:text-base 3xl:text-lg hidden md:flex">
              <span className='text-white ' >#Bar</span>
              <span className='  text-white' >#Gericht</span>
          </div>
      <div className=" space-y-6">
        <SubHeading heading='Chase The New Flavour' className=' flex space-y-1 text-white font-base flex-col '/>
        <h3 className='cormorant-header leading-normal tracking-wide'>The Key To Fine Dinning</h3>
        <p className='opensans text-gray w-[70%]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est velit animi tempora adipisci laboriosam soluta id, labore ab amet ex.</p>
        <button type='button' className='bg-golden w-auto px-2 py-1 font-base font-medium text-sm'>Explore Menu</button>
        
          </div>
      <div className=" ">
        <Image src={header } alt='header' height={500} />
          </div>
    </div>
  )
}
