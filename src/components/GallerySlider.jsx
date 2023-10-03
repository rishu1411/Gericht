'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import {Autoplay} from 'swiper/modules'
import { gallery } from '@/data'
import gourmet6 from '../assets/gourmet6.jpeg'
import 'swiper/css'
import 'swiper/css/pagination'
import '../app/slider.css'
import InstagramIcon from '@mui/icons-material/Instagram';


export default function GallerySlider() {
  return (
    <>
          <Swiper 
                breakpoints={{
          200: {
                    slidesPerView: 'auto',
            spaceBetween:8,
                  },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 10,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 18,
                    },
                    1280: {
                      slidesPerView:5,
                      spaceBetween: 20,
                    }
                  }}
           
              slidesPerView={5}
              spaceBetween={10}
              navigation={true}
              autoplay={true}
             
        modules={[Autoplay]}
      
      >
        {
          gallery.map((item, key) => {
            return (
                <SwiperSlide key={key} className='max-w-[256px] cursor-pointer'>
                    <div className="relative group">
                  <Image src={item.img} alt='food' className=' border border-golden  rounded-md lg:group-hover:opacity-50' height={400} />
                  <InstagramIcon className='text-white absolute top-[4.5rem] left-11 invisible lg:group-hover:visible'/>

                    </div>
              
                
              </SwiperSlide>
            )
          })
        }


      </Swiper>
      </>
  )
}
