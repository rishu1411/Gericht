import React from 'react'
import Image from 'next/image'
import gericht from '../assets/gericht.png'
import Link from 'next/link'
import SideBarMenu from './SideBarMenju'

export default function Navbar() {
  return (
    <>
      <div className='desktop_nav flex justify-between items-center px-4 md:px-8 border-b border-white h-16'>
        <div className="logo">
          <Image src={ gericht} alt='logo'  className='h-[30px] md:h-[35px] lg:h-[44px] w-fit'/>
        </div>
        <div className='links'>
          <ul className='md:flex gap-x-4 opensans hidden'>
            <li><Link href='#' className='hover:text-golden ' >Home</Link></li>
            <li><Link href='#' className='hover:text-golden' >Pages</Link></li>
            <li><Link href='#' className='hover:text-golden' >Contact Us</Link></li>
            <li><Link href='#' className='hover:text-golden' >Blog</Link></li>
            <li><Link href='#' className='hover:text-golden' >Landing</Link></li>
          </ul>
        </div>
        <div className="sign_in opensans md:flex hidden  space-x-3">
          <span className='hover:underline hover:underline-offset-8 cursor-pointer hover:text-golden '>Log In / Register</span>
          <span>|</span>
          <span className='hover:underline hover:underline-offset-8 cursor-pointer hover:text-golden '>Book Table</span>
      </div>
      
      <div className='md:hidden'>
        <SideBarMenu/>
      </div>
      </div>
      </>

  )
}
