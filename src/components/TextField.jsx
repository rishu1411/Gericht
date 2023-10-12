import { placeholder } from '@cloudinary/react'
import React from 'react'
import EmailIcon from '@mui/icons-material/Email';

export default function TextField({ type, placeholder,helperText,error,value,before,after,children,OnChange }) {
  return (
    <>
      <div className={`my-6 flex flex-col gap-y-1 border border-white p-2 rounded-sm text-white focus-within:text-golden focus-within:border-golden transition-all duration-700 min-w-full ${error && 'border-red-500 text-red-500 focus-within:border-red-500 focus-within:text-red-500 focus-within:ring-red-500 focus-within:hover:ring-red-500'}  focus-within:ring-1 focus-within:ring-golden mb-1
    hover:ring-1 hover:ring-white focus-within:hover:ring-golden  rounded-xl`}>
      
    
      <label htmlFor="" className={`flex gap-x-2 font-base`}>
        {
          before && <span> <EmailIcon/></span>
        }
        <input type={type} placeholder={placeholder} value={value} className={`bg-transparent outline-none w-full px-2` } onChange={OnChange} />
        {
          after && <span>{ children}</span>
        }
      </label>
        
      </div>
      {error ? <p className='text-red-500 font-base'>{helperText}</p> : <p className='text-white font-base'>{helperText}</p>}      
      </>
  )
}
