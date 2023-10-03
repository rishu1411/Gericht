import GallerySlider from '@/components/GallerySlider'
import SubHeading from '@/components/SubHeading'
import React from 'react'

export default function Gallery() {
  return (
    <div className='container mx-auto py-10 h-2/6 flex items-center justify-start flex-col lg:flex-row gap-y-10'>

      <div className='space-y-4'>
        <SubHeading heading='Instagram' className='font-base text-white space-y-[2px] ' img='w-7' />
        <h3 className='text-golden text-4xl font-base tracking-wider mb-5'>Photo Gallery </h3>
        <p className='text-gray font-base text-sm w-56'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, rem!. Lorem ipsum dolor sit amet.</p>
        <button type='button' className='bg-golden w-auto px-2 py-1 font-base font-medium text-sm'>View More</button>
      </div>
      <div className=' container  mx-auto max-w-3xl  '>
        <GallerySlider/>
      </div>

    </div>
  )
}
