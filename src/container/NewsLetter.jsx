import SubHeading from '@/components/SubHeading'
import React from 'react'

import Footer from '@/container/Footer';

function NewsLetter() {
  return (
      <div className='bg'>
          <div className='md:h-screen h-full container mx-auto flex flex-col items-center justify-between' >
              <div className='border border-gray max-w-screen-md border-t-0 bg-stone-900 flex flex-col items-center container mx-auto py-5'>
                  <SubHeading heading='Newsletter' className='text-white flex flex-col items-center font-base text-sm gap-y-1' img='w-6 ' />
                  <h3 className='text-golden text-4xl font-base tracking-wider mb-6 mt-2'>Subscribe To Our Newsletter</h3>
                  <span className='text-white text-xs font-base'>And Never miss any updates</span>
                  <form action="#" className='flex flex-col md:flex-row gap-y-4 gap-x-3 mt-8 items-center mb-4'>
                      <label htmlFor="mail" className='font-base'>
                          <input type="mail" className='border border-golden bg-transparent h-9 px-2 text-sm rounded-sm md:w-96 min-w-fit outline-none text-golden' placeholder='Email Address' />
                      </label>
                      <button type='button' className='bg-golden font-base w-auto px-2 rounded-sm text-sm h-7 '>Subscribe</button>
                  </form>

              </div>

            <Footer/>
          </div>
      </div>
  )
}

export default NewsLetter