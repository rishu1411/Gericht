import React from 'react'
import Image from 'next/image'
import logo from '../assets/logo.png'
import SubHeading from '@/components/SubHeading'
import { awards } from '@/data'
import laurels from '../assets/laurels.png'

export default function Laurels() {
  return (
    <div className='bg '>
        <Image src={logo} alt="Laurel's Logo" height={100} className='invisible lg:visible absolute left-8 pt-10  '/>
      <div className='container py-10  mx-auto  h-full md:h-screen flex justify-center items-center gap-x-6 flex-col sm:flex-row gap-y-8 '>

        <div className='flex  flex-col items-center gap-x-8 gap-y-8'>

          <div className='space-y-2 '>
            <SubHeading heading='Awards & Laurels' className='text-white text-sm font-base space-y-1' />
            <h3 className='text-golden text-4xl font-base tracking-wider'>Our Laurels </h3>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-4 '>
            {
              awards.map((items, key) => {
                return (
                  <div key={key} className="flex gap-x-4 " >
                  
                    <div>
                      <Image src={items.imgUrl} alt='laurels' height={50}/>
                    </div>
                    <div className='space-y-1'>
                      <h3 className='text-golden text-base font-base tracking-wider'>{items.title} </h3>
                      <p className='text-gray font-base text-xs w-36'>{items.subtitle }</p>
                    </div>
                    </div>
            
                )
              })
          }
          </div>
        </div>
        <Image src={laurels} alt='laurels' height={400}/>
      </div>
    </div>
  )
}
