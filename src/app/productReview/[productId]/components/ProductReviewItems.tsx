'use client'

import { ProductImgUrl } from '@/api'
import { useQuerySingleProduct } from '@/hooks/useQueryProduct'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { RatingStar } from './RatingStar'
import { AddReviewForm } from './AddReviewForm'



const ratingItem=[
    {
        id:1,
        title:'Very bad'
    },
    {
        id:2,
        title:'Bad'
    },
    {
        id:3,
        title:'Good'
    },
    {
        id:4,
        title:'Very good'
    },
    {
        id:5,
        title:'Excellent'
    },
]

export const ProductReviewItems = () => {
    const params=useParams()
    const router=useRouter()
    const {data,isPending}=useQuerySingleProduct()
    const [yourRate,setYourRate]=useState(0)
    const [rateLabel,setRateLabe]=useState('')

    if(isPending){
        return <p>is pending</p>
    }

    const singleProduct=()=>{

        router.push(`/product/${params?.productId}`)

    }
  return (
    <div className='flex flex-col gap-5'>
        <div className='flex justify-between border-2 p-5 items-center '>
            <h1 className='font-semibold text-[20px]'>Rating & Reviews</h1>
            <div onClick={singleProduct} className='flex items-center cursor-pointer'>
                <p>{data?.name}</p>
                <Image
                  src={`${ProductImgUrl}/${data?.images[0].thumbnail}`}
                  alt='img'
                  width={100}
                  height={100}
                  className=' rounded-md'
                />
            </div>
        </div>
        <div className=' border-2 p-5'>
            <div className='flex flex-col gap-3'>
             <h1 className='font-semibold text-[20px]'>Rate this product</h1>
             <div className='flex gap-5'>
              {ratingItem.map((item,index)=>(
                <RatingStar 
                 item={item} 
                 key={item?.id}
                 yourRate={yourRate}
                 hoverLable={rateLabel}
                 onChange={()=>setRateLabe(item?.title)}
                 onClick={()=>setYourRate(index+1)}

                />
              ))}
             </div>

            </div>
            <div>
                <AddReviewForm star={yourRate}/>

            </div>
            
        </div>
    </div>
  )
}
