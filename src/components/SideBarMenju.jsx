'use client'
import React,{useState} from 'react'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseIcon from '@mui/icons-material/Close';
import { Drawer, Box, Typography,IconButton } from '@mui/material';


export default function SideBarMenu() {
    const [openDrawer , setOpen] = useState(false)
    return (
        <div className='flex md:hidden '>
            <IconButton size='large' edge='start' color="inherit" aria-label='logo' onClick={()=> setOpen(!openDrawer)}>
                <MenuRoundedIcon className='text-white'/>
            </IconButton>  
            <Drawer anchor='right' open={openDrawer} onClose={() => setOpen(false)} className='md:hidden'>
                <Box p={2} textAlign='center' role='presentation' width='250px' className='bg-black opacity-95 shadow-lg shadow-violet-400 py-8 ' >
                    <Typography variant='h6' component='div'>
                        <CloseIcon className='text-golden border-2 rounded-full absolute right-6 top-4' onClick={ ()=> setOpen(!openDrawer)} />
                <h4 className='text-violet-400 font-semibold text-center py-4 bg-black'>SideBar</h4>
                        <ul className='space-y-6 opensans h-screen'>
                          {/* Enter links */}
                    </ul>
                </Typography>
          </Box>
            </Drawer>
            </div>
  )
}
