import React from 'react'
import { customer } from '@/data'
import Image from 'next/image'
import SubHeading from '@/components/SubHeading'

export default function Customer() {
    return (
        <div className='container mx-auto py-8 md:h-screen h-full'>
            <div className='flex flex-col items-center gap-y-1 mb-8'>
                <SubHeading heading='Testimony' className='flex flex-col items-center text-white font-base' img='w-8' />
                <h3 className='text-golden text-4xl font-base'>Happy Customer's</h3>
            </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {
                customer.map((item, key) => {
                    return (
                        <div className='flex gap-x-4' key={key}>
                            <Image src={item.img} alt='customer image ' height={150} width={300} className=' min-h-max'/>
                            <div className='font-base space-y-6'>
                                <p className='text-gray text-sm '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis distinctio reprehenderit nesciunt dolorum nostrum ullam laborum voluptatem perferendis placeat odit?</p>

                                <div className='space-y-1'>
                                    <h4 className='text-golden text-2xl md:text-3xl'>{item.name}</h4>
                                    <p className='text-white text-sm'>{ item.role}</p>

                                </div>


                            </div>
                        </div>
                    )
                })
        }    

            </div>
            </div>
  )
  
}
