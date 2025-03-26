'use client'


import { CustomeBtn } from '@/components/Button/CustomeBtn'
import { useParams, useRouter } from 'next/navigation'
import React from 'react'


type TopReviewTitleProps={
    totalRate?:number
    totalReviw?:number
}
export const TopReviewTitle = ({totalRate,totalReviw}:TopReviewTitleProps) => {
    const router=useRouter()
    const params=useParams()
  const rateRouter=()=>{
    router.push(`/productReview/${params?.productId}`)

  }
  return (
    <div className='flex flex-wrap gap-3 justify-between items-center'>
        <div>
         <h1 className='font-semibold text-[20px]'>Ratings & Reviews</h1>
        </div>
        <div>
          <p className='text-gray'>{`Rating ${totalRate} & Review ${totalReviw}`}</p>

        </div>
        <div>
         <CustomeBtn 
           onclick={rateRouter}
           style='rounded-full p-5 border-2 hover:bg-yellow border-yellow bg-white text-Primary font-semibold text-[18px]'>
                   <div className='flex gap-3 items-center font-s'>
                    
                    <span>
                     Rate Product
                    </span>
                   </div>
          </CustomeBtn>

        </div>
      </div>
  )
}
