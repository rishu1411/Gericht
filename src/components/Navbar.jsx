import React from 'react'
import Image from 'next/image'
import gericht from '../assets/gericht.png'
import Link from 'next/link'
import SideBarMenu from './SideBarMenju'
import MenuContainer from './DropMenu'

// import DropDownMenu from './DropDownMenu'

// I'm adding a comment

export default function Navbar() {
  return (
    <>
      <div className='desktop_nav flex justify-between items-center px-4 md:px-8 border-b border-white h-16'>
        <div className="logo">
          <Image src={ gericht} alt='logo'  className='h-[30px] md:h-[35px] lg:h-[44px] w-fit'/>
        </div>
       <MenuContainer/>
        <div className="sign_in opensans md:flex hidden  space-x-3">
          <span className='hover:underline hover:underline-offset-8 cursor-pointer hover:text-golden transition-all duration-500'>Log In / Register</span>
          <span>|</span>
          <span className='hover:underline hover:underline-offset-8 cursor-pointer hover:text-golden transition-all duration-500'>Book Table</span>
      </div>
      
      <div className='md:hidden'>
        <SideBarMenu/>
      </div>
      </div>
      </>

  )
}
