'use client'

import React ,{useState, useRef} from 'react'
import { Menu } from '@headlessui/react'
import Link from 'next/link'
import { home,Pages,Blogs } from '@/data';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function MenuContainer() {

    const [Activity, setActivity] = useState({
        isOpen: false,
        isActive: null
   })
    const handleClick = () => {
        setActivity({
            isOpen: !Activity.isOpen,
            isActive:null
        })
    }
    return (
        <div className='flex text-white font-alt gap-x-4 text-sm group'>
        {/* <DropDownMenu name='page'/> */}
        <DropMenu name='Home' list={ home} isOpen={Activity.isOpen} change={()=> setActivity({isOpen:!Activity.isOpen, isActive: 0})} isActive={Activity.isActive === 0} click={handleClick}/>
        <DropMenu name='Pages' list={Pages} isOpen={Activity.isOpen} change={()=> setActivity({isOpen:!Activity.isOpen, isActive: 1})} isActive={Activity.isActive === 1} click={handleClick}/>
        <Link href='#' className='font-alt text-sm hover:text-golden transition duration-500'>Contact Us</Link>
        <DropMenu name='Blogs' list={ Blogs} isOpen={Activity.isOpen} change={()=> setActivity({isOpen:!Activity.isOpen, isActive: 2})} isActive={Activity.isActive === 2} click={handleClick}/>
      </div>
    )
}




function DropMenu({ name, list, change, isActive, click, isOpen }) {

    const ref = useRef()
    
    return (
        <Menu as='div' className='relative transition duration-500'>
            <Menu.Button className='hover:text-golden transition duration-300 active:text-golden' onClick={change} >{name}
                {
                    isOpen  ? <KeyboardArrowUpIcon className={`${isActive ? 'rotate-0': 'rotate-180'}`} ref={ref} /> : <KeyboardArrowDownIcon className={`${ isActive ? 'rotate-180': 'rotate-0'}`} ref={ref} /> 
                }
                 
           
            </Menu.Button>
            <Menu.Items className='grid  absolute backdrop-blur-xl shadow-sm font-alt shadow-violet-200  text-golden w-44 z-10 max-h-fit divide-y ' >
                {
                    list.map((items, key) => {
                        return (
                            <Menu.Item key={key} onClick={click}>
                        {({ active }) => (
                            <Link href='#' className={`${active? 'bg-golden text-black' : 'text-golden'} p-3`}>{ items.item}</Link>
                        )}
                    </Menu.Item>
                        )        
                    })
                }
            </Menu.Items>
      </Menu>
  )
}


