'use client'



import { useQueryProductRating, useQueryProductReview } from '@/hooks/useQueryRating'

import React from 'react'

import { ReviewItem } from './ReviewItem'
import { TopReviewTitle } from './TopReviewTitle'

import { ReviewSkelton } from './ReviewSkelton'


export const RatingReview = () => {
  const {data,isPending}=useQueryProductRating()
  const {data:reviewData}=useQueryProductReview()
  

  
  
  if(isPending){

    return <ReviewSkelton/>

  }


  if(reviewData?.reviews && reviewData?.reviews?.length < 1){
    return  <div className='border-t-2 p-5 border-borderColor'>
        <TopReviewTitle
          totalRate={data?.totalRatingUser  }
          totalReviw={reviewData?.reviews?.length}
        />
    </div>
  }


  return (
    <div className=' border-t-2 p-5 border-borderColor'>
      <TopReviewTitle
        totalRate={data?.totalRatingUser  }
        totalReviw={reviewData?.reviews?.length}
      />
      <div className='mt-[50px]'>
        {reviewData?.reviews?.map((item,index)=>(
         <ReviewItem key={index} review={item}/>
        ))}
      </div>
    </div>
  )
}
