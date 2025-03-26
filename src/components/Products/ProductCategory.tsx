'use client'


import React, { useRef } from 'react'
import {Swiper,SwiperSlide} from "swiper/react"
import {Navigation,Pagination} from 'swiper/modules'
import {Swiper as SwiperType} from "swiper"
import "swiper/css"
import "swiper/css/navigation"; // Optional: For navigation buttons
import "swiper/css/pagination"; // Optional: For pagination
import { useQueryAllCategory } from '@/hooks/useQueryCategory'
import { CategoryCard } from './CategoryCard'
import { CustomeBtn } from '../Button/CustomeBtn'
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { ProductItemTitle } from './ProductItemTitle'
import { CategorySkelton } from './CategorySkelton'

export const ProductCategory = () => {

    const swiperRef=useRef<SwiperType| null>(null)
    const {data,isPending}=useQueryAllCategory()

    

    if(isPending){
      return <div className='w-[100%] flex items-center justify-center'>
              <CategorySkelton/>
            </div>
    }

  return (
    <div className='flex justify-center flex-col items-center'>
        <div className='w-containerW'>
         <ProductItemTitle title='Categories'/>
        </div>
        <div className='w-[70%] relative mt-[50px]'>
           
            <Swiper
              breakpoints={{
                300: { slidesPerView: 4, spaceBetween: 1 },
                768: { slidesPerView: 6, spaceBetween: 1 },
                1024: { slidesPerView: 8, spaceBetween: 1 },
               }}
             modules={[Navigation,Pagination]}
            //  spaceBetween={1}
            //  slidesPerView={1}
             onSwiper={(swiper)=>(swiperRef.current=swiper)}
            
             className='  w-[100%]    '
            >
                {data?.map((item,index)=>(
                    <SwiperSlide key={index} className='p-2'>
                      <CategoryCard category={item}/>
                    </SwiperSlide>
                    
                ))}
            </Swiper>
            <CustomeBtn
             onclick={()=>swiperRef.current?.slidePrev()}
              style='rounded-full lg:hidden absolute top-[20%] z-10 left-[-60px]  p-5 border-2 text-Primary hover:text-white hover:bg-yellow border-yellow bg-white text-Primary font-semibold text-[18px]'
            >
                <FaAngleLeft size={28}/>
            </CustomeBtn>

            <CustomeBtn
             onclick={()=>swiperRef.current?.slideNext()}
              style='rounded-full  lg:hidden p-5 border-2 absolute top-[20%]  z-10  right-[-60px] text-Primary hover:text-white hover:bg-yellow border-yellow bg-white text-Primary font-semibold text-[18px]'
            >
                <FaAngleRight size={20}/>
            </CustomeBtn>
          
            
        </div>
    </div>
  )
}
