"use client"

import React,{useState} from 'react'
import { Menu, MenuItem,Button } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function DropDownMenu({ name }) {
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget)
    }
    const handleClose = (e) => {
        setAnchorEl(null)
    }

    return (
        <>
            <Button variant='text' className='text-white hover:text-golden bg-none'    onClick={handleClick}
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            >{name}</Button>
            <Menu id='resources-menu ' anchorEl={anchorEl} open={open}
                MenuListProps={{ 'aria-labelledby': 'resources-button' }}
                onClose={handleClose}
            >
          <MenuItem onClick={handleClose}>Page 1</MenuItem>
          <MenuItem onClick={handleClose}>Page 2</MenuItem>
            </Menu>
            </>
  )
}
