import React from 'react'
import Image from 'next/image'
import spoon from '../assets/spoon.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer() {
  return (
    <>
    <div className='flex gap-x-20 flex-col md:flex-row gap-y-6  my-10 text-center justify-between items-center'>
    <div className=''>
        <h3 className='font-base text-yellow-50 text-xl mb-6'>Contact Us</h3>
        <p className='text-zinc-400 text-xs mb-2'>  W 53rd St, New York, NY 10019, USA</p>
        <p className='text-zinc-400 text-xs'>  +1 212-344-1230</p>
        <p className='text-zinc-400 text-xs'>  +1 212-555-1230</p>

    </div>
    <div className=''>

        <h3 className='text-golden text-4xl font-base tracking-wider mb-8'>GERÍCHT</h3>
        <p className='text-xs w-72 font-alt  text-amber-50'>"The best way to find yourself is to lose yourself in the service of other"</p>

        <div className='flex flex-col items-center mt-2 gap-y-1'>
            <Image src={spoon} alt='spoon' className='w-7' />
            <div className='space-x-2'>
                
            <FacebookIcon className='text-yellow-50 text-lg'/>
            <TwitterIcon className='text-yellow-50 text-lg'/>
            <InstagramIcon className='text-yellow-50 text-lg'/>
            </div>
       </div>



    </div>
    <div className='space-y-2'>
        <h3 className='font-base text-yellow-50 text-xl mb-6'>Working Hours</h3>
        <span className='space-y-1 mb-4'>
            
        <p className='text-zinc-400 text-xs '>Monday-Friday:</p>
        <p className='text-zinc-400 text-xs'>08:00 am - 12:00 am</p>
        </span>
        <span className='space-y-1 '>
            
        <p className='text-zinc-400 text-xs '>Saturday-Sunday:</p>
        <p className='text-zinc-400 text-xs'>07:00 am - 11:00 pm</p>
        </span>

    </div>



</div>
      < p className='text-center text-gray text-xs pb-10'>2021 Gericht. All rights Reserved</p>
      </>
  )
}
