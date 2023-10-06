'use client'
import SubHeading from '@/components/SubHeading'
import logo from '../assets/logo.png'
import Image from 'next/image'
import React from 'react'
import TableDropDown, { DateDropDown } from '@/components/TableDropDown'
import {person,time} from '@/data'

export default function BookTable() {
    // const person = [1,2,3,4,5,6,7,8,12]
  return (
      <div className='container mx-auto '>
          <Image src={logo} alt="Laurel's Logo" height={100} className=' absolute right-16 invisible lg:visible pt-2 ' />
          <div className=' md:h-screen h-full py-16 flex flex-col items-center justify-center'>
              

          <div className=' border border-gray p-4 min-w-full flex flex-col items-center '>
              
          <SubHeading heading='Reservations' className='text-white font-base flex flex-col items-center  mb-2 gap-y-[1px] tracking-wider' img='w-8' />
                  <h3 className='font-base text-golden text-4xl tracking-wide '>Book A Table </h3>
                  
          <form className=' flex flex-col items-center gap-y-4 mt-8 container mx-auto' onSubmit={(e) => e.preventDefault()} >
            <div className='flex flex-col lg:flex-row gap-x-6 gap-y-4'>
                      <TableDropDown list={ person} state='No. of Persons?'  />
            {/* <TableDropDown list={ time}  state='Date'/> */}
                      <DateDropDown/>
            <TableDropDown list={time} state='Time' />

            </div>
            <button type='button' className='bg-golden w-auto p-1 font-base font-medium rounded-sm ring-yellow-100 ring-2'>Book Now </button>
                      
                  </form>
          </div>
          </div>
          
    </div>
  )
}
