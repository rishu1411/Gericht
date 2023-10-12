'use client'
import React,{useState} from 'react'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseIcon from '@mui/icons-material/Close';
import { Drawer, Box, Typography, IconButton } from '@mui/material';
import { Menu } from '@headlessui/react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from 'next/link';
import { home,Pages,Blogs } from '@/data';

export default function SideBarMenu() {
    const [openDrawer, setOpen] = useState(false)
    
    const close = () => {
        setTimeout(() => {
            setOpen(!openDrawer)
        },1000)
    }

    return (
        <div className='flex md:hidden '>
            <IconButton size='large' edge='start' color="inherit" aria-label='logo' onClick={()=> setOpen(!openDrawer)}>
                <MenuRoundedIcon className='text-white'/>
            </IconButton>  
            <Drawer anchor='right' open={openDrawer} onClose={() => setOpen(false)} className='md:hidden'>
                <Box p={2} textAlign='center' role='presentation' width='250px' className='bg-black h-full opacity-95 shadow-lg shadow-violet-400 py-8 ' >
                    <Typography variant='h6' component='div'>
                        <CloseIcon className='text-golden border-2 rounded-full absolute right-6 top-4' onClick={ ()=> setOpen(!openDrawer)} />
                <h4 className='text-golden font-semibold text-center py-4 bg-black'>Menu</h4>

                        <div className='space-y-4'>
                        <Drop name='Home' list={ home} onClick={close}/>
                            <Drop name='Pages' list={Pages} onClick={close} />
                            <div> <Link href='#' className='text-golden font-base' onClick={close}>Contact Us</Link></div>
                       
                            <Drop name='Blogs' list={Blogs} onClick={close} />
                        </div>
                        <hr className='text-golden my-4'/>

                        <div className="sign_in opensans flex flex-col space-y-4 justify-end">
          <Link href='/Login' className=' cursor-pointer text-golden' onClick={close}>Log In / Register</Link>
          
          <span className=' cursor-pointer text-golden' onClick={close}>Book Table</span>
      </div>
                        
                </Typography>
          </Box>
            </Drawer>
            </div>
  )
}


function Drop({name,list,onClick}) {
    

    return (
        <Menu as='div' className=''>
            <Menu.Button className='text-golden font-base' >
                {name} <KeyboardArrowDownIcon/>
            </Menu.Button>
            <Menu.Items className='flex flex-col items-center justify-center font-base text-golden border border-golden' >
                {
                    list.map((items, key) => {
                        return (
                            <Menu.Item key={key}  onClick={onClick}>
                                <Link href={items.href} className='text-golden font-base py-1'>{items.item }</Link>
                            </Menu.Item>
                        )
                    })
                }
            </Menu.Items>
        </Menu>
    )
}