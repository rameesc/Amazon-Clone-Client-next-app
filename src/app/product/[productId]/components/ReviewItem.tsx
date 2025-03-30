'use client'



import React from 'react'
import { StarRating } from './StarRating'
import { ReviewProps } from '@/app/types/type'

import { ProfialAvatar } from '@/components/ProfialAvatar'
import { dateFormatted } from '@/utils/dateFormate'

type ReviewItemType={
    review:ReviewProps
}
export const ReviewItem = ({review}:ReviewItemType) => {
  return (
    <div className=' border-t-2 border-borderColor p-2'>
     <div className='flex items-center justify-between gap-3 '>
        <div className='flex gap-3 w-[100%]  items-center justify-between'>
          <div className='flex items-center gap-3'>
           <ProfialAvatar 
           user={review?.user}
           />
      
           <p className='text-[16px] sm:font-bold'>{review?.user?.name}</p>
         </div>
         <div>
         <StarRating star={review?.star}/>

         </div>
        
       </div>
       {/* <p className=' hidden sm:block'>{dateFormatted(review?.createdAt && review?.createdAt)}</p> */}
     
    </div>
    <div className='pl-[50px] flex flex-col'>
      <p className='text-[14px] sm:text-[18px]'>{review?.comment}</p>
     
      <p className='text-[10px] self-end block sm:text-[15px]'>{dateFormatted(review?.createdAt && review?.createdAt)}</p>
    </div>
  </div>
  )
}
