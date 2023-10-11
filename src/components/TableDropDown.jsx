'use client'
import React,{useState} from 'react'
import { Menu } from '@headlessui/react'
import { Calendar } from 'react-date-range';
import format from 'date-fns/format'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function TableDropDown({ list,state }) {
    const [value, setValue] = useState(`${state}`)
    function handleClick(key) {
        console.log(list[key])
        // setValue(arr[key])
        if (state === 'No. of Persons?') {
            
            setValue(`${list[key]} ${list[key]>1? 'People':'Person'}`)
        }
        else if (state === 'Time') {
            setValue(`${list[key]<10 ? '0':''}${list[key]}:00 ${list[key] >=12? 'pm':'am'}`)
            
        }
        
    }

    
  return (
      <>
          <Menu as='div'>
              <Menu.Button className='border border-yellow-100 text-white px-4 py-2 w-72 flex justify-between'>
                  { value}
                  <KeyboardArrowDownIcon/>
              </Menu.Button>
              <Menu.Items className='grid text-white overflow-y-scroll min-h-fit h-36 border border-white absolute w-60 backdrop-blur-xl'>
                  { 
                      list.map((items, key) => {
                          return (
                              <Menu.Item as='li' className='cursor-pointer list-none px-2 py-1 text-center' key={key} onClick={()=>handleClick(key)}>
                                  {({ active }) => (
                                      
                                  <span className={`${active?'text-golden':'text-white'} font-base `}>{items }</span>
                                )}
                              </Menu.Item>
                          )
                      })
                 }
                  
            </Menu.Items>
              
      </Menu>
      </>
  )
}

export function DateDropDown() {
    const [date, setDate] = useState('Select Date')
    const handleSelect = (date) => {
        setDate(format(date,'dd/MM/yyyy'))
        
        // setDate(date)
    }
    
    return (
        <Menu as='div'>
            
        <Menu.Button className='border border-yellow-100 text-white px-4 py-2 w-72 flex justify-between'>
            { date}
            <KeyboardArrowDownIcon/>
                    </Menu.Button>
                  
                        
                    <Menu.Items className='grid text-white  min-h-fit h-[18.5rem] border border-white absolute w-80 '>
           
                        <Menu.Item as='li' className='cursor-pointer list-none px-1' >
                           <Calendar onChange={handleSelect} date={new Date()}/>
                        </Menu.Item>
                    </Menu.Items>
</Menu>
    )
    
}