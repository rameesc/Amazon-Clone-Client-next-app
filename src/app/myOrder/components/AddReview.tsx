'use client'


import { CustomeBtn } from '@/components/Button/CustomeBtn'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import React from 'react'


type AddReviewType={
    productId:string,
    status:string
}
export const AddReview = ({productId,status}:AddReviewType) => {

    const router=useRouter()

    const reviewHandler=()=>{
        router.push(`/productReview/${productId}`)

    }

    
  return (
    <CustomeBtn
             onclick={reviewHandler}
              style={clsx('rounded-full p-2 h-[45px]  z-10 border-2 text-Primary hover:text-white hover:bg-yellow border-yellow bg-white text-Primary font-semibold text-[18px]',
                ['complete','return'].includes(status) ?'block':"hidden"
              )}
            >
             
                <span>Add Review</span>
    </CustomeBtn>
  )
}
