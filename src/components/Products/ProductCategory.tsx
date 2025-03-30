'use client'


import React from 'react'


import "swiper/css"
import "swiper/css/navigation"; // Optional: For navigation buttons
import "swiper/css/pagination"; // Optional: For pagination
import { useQueryAllCategory } from '@/hooks/useQueryCategory'
import { CategoryCard } from './CategoryCard'

import { ProductItemTitle } from './ProductItemTitle'
import { CategorySkelton } from './CategorySkelton'


export const ProductCategory = () => {

    
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

          <div className='w-[100%] relative bg-white flex justify-start gap-4 overflow-y-auto scrollbar-hide no-scrollbar'>
          <div className="absolute left-0 top-0  h-full w-[50px] z-10   pointer-events-none bg-gradient-to-r from-[#fff] " />
          <div className="absolute  right-0 top-0  h-full w-[50px] z-10   pointer-events-none bg-gradient-to-l from-[#fff]  " />
    
           {data?.map((item,index)=>(
                    
                      <CategoryCard key={index} category={item}/>
                  
                    
                ))}
          </div>
        </div>
      
        {/* <div className='w-[70%] relative mt-[50px]'>
           
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
          
            
        </div> */}
    </div>
  )
}
