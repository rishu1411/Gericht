import AboutUs from '@/container/AboutUs'
import BookTable from '@/container/BookTable'
import Chef from '@/container/Chef'
import FindUs from '@/container/FindUs'
import Gallery from '@/container/Gallery'
import Header from '@/container/Header'
import Intro from '@/container/Intro'
import Laurels from '@/container/Laurels'
import Menu from '@/container/Menu'
import NewsLetter from '@/container/NewsLetter'
import React from 'react'
// import meal from '../../public/meal.mkv'

export default function page() {
  return (
    <>
    <div className='' id='pageBody'>
        <Header />
        <AboutUs />
        <BookTable/>
        <Menu/>
        <Chef />
        {/* <Intro/> */}
        <Laurels />
        <Gallery />
        <FindUs />
        <NewsLetter/>
    </div>
  
      </>
  )
}
