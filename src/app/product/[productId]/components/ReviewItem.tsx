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
    <div className='flex items-center justify-between gap-3'>
        <div className='flex gap-3 items-center'>
          <ProfialAvatar 
          user={review?.user}
         />
      
         <p className='font-semibold'>{review?.user?.name}</p>
         <StarRating star={review?.star}/>
       </div>
       {dateFormatted(review?.createdAt && review?.createdAt)}
    </div>
    <div className='pl-[50px]'>
      <p>{review?.comment}</p>
    </div>
  </div>
  )
}
