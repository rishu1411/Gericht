import React from 'react'
import Image from 'next/image'
import spoon from '../assets/spoon.png'

export default function SubHeading({ heading,className,img}) {
  return (
    <div className={ className} >
      <h4>{heading}</h4>
      <Image src={spoon} alt='spoon' className={ img} />
    </div>
  )
}
