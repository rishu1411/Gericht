import React from 'react'
import Image from 'next/image'
import chef from '../assets/chef.png'
import SubHeading from '@/components/SubHeading'
import quote from '../assets/quote.png'
import sign from '../assets/sign.png'

export default function Chef() {
  return (
    <div className='bg'>
      <div className='container mx-auto flex justify-center items-center gap-y-8  gap-x-10 md:flex-row flex-col  h-full  md:h-screen py-10'>
      <div className=" ">
        <Image src={chef } alt='' height={475}/>
      </div>
      <div className=" ">
        <div className='space-y-2'>
        <SubHeading heading="Chef's Word" className='font-base  text-white text-sm' />
        <h3 className='text-golden text-4xl font-base tracking-wider'>What We Believe In </h3>
      </div>
        <div className='my-6'>
          <Image src={quote} alt='quote' height={25} className='float-left mx-2' />
          <p className='md:w-96 w-[80%]  text-gray text-xs leading-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus temporibus facere aliquid! Nobis nihil eum, et cum error enim sit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt corrupti in molestiae numquam velit veniam!</p>
          
          </div>
          
        
        <div className='space-y-1'>
          <h3 className='text-golden text-2xl font-base tracking-wider'>Kevin Luo</h3>
          <p className="text-gray leading-6 text-xs">Chef & Founder</p>
          <Image src={sign} alt='signature' height={70} className='mt-12'/>
        </div>
        </div>
        </div>
    </div>
  )
}
