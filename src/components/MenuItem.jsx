import React from 'react'



export default function MenuItem({ header, list }) {
  
  return (
    <div className='flex flex-col  gap-y-4'>
      <h4 className='font-base text-white text-3xl'>{header}</h4>
      {
        list.map((item, key) => {
          return (
            <div key={key} className='flex items-center gap-x-4 '>
            <div className='space-y-1 my-2 ' >
              <h5 className='text-golden xl:text-base text-sm  font-base'>{item.title}</h5>
              <p className='text-[12px] md:text-xs text-gray absolute '>{ item.tags}</p>
              </div>

              <div className='h-[0.5px] w-[70px] bg-white'></div>
              <p className='text-sm text-white font-base'>{ item.price}</p>
              </div>
            
          )
        })
      }
    </div>
  )
}