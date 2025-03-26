'use client'


import { ProductImgUrl } from '@/api'
import { ReviewItem } from '@/app/product/[productId]/components/ReviewItem'
import { ReviewSkelton } from '@/app/product/[productId]/components/ReviewSkelton'

import { ProductNotFound } from '@/app/products/components/ProductNotFound'
import { DataPagination } from '@/components/DataPagination'
import { TotalDataItem } from '@/components/TotalDataItem'
import { useQueryMyReviews } from '@/hooks/useQueryRating'
import { images } from '@/images'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'


export const MyReviewItems = () => {

    const {data,isPending}=useQueryMyReviews()

    const router=useRouter()

    console.log(data,'rev')

    if(isPending){
        return <ReviewSkelton/>
    }
//
    if(data?.myReviews && data?.myReviews.length<1){

        return <div>
            <ProductNotFound
              image={images?.noCart}
              text='No Review Item Found'
            />
        </div>
    }
    const productRouter=(id:string)=>{

        router.push(`/product/${id}`)

    }

    
  return (
    <div>
     <div className='flex justify-end '>
        <TotalDataItem
          title='Your Total Review'
          totalItem={data && data?.totalCount||0}
        />
     </div>
     <div className='w-[100%] flex flex-col gap-3 mt-[5px]'>

        {data?.myReviews?.map((item,index)=>(
            <div key={item?._id} className='border-2 border-Primary rounded-lg P-3 overflow-hidden'>
                <div className='flex items-center justify-between gap-3 '>

                    <div onClick={()=>productRouter(item?.product?._id)} className='flex cursor-pointer gap-3 items-center'>
                     <Image
                     width={100}
                     height={100}
                     alt='img'
                     src={`${ProductImgUrl}/${item?.product?.images[0]?.medium}`}
                     className='w-[100px] h-[100px] rounded-md hover:scale-[1.2]'
                     />
                     <div>
                        <p className='text-[18px] hover:text-blue'>{item?.product?.name}</p>
                     </div>
                   
                    </div>
                    
                   
                </div>

              <ReviewItem key={index} review={item}/>
            </div>
            
           
        ))}
     </div>
     <DataPagination
       pagination={data && data?.pagination||0}
       totalCount={data && data?.totalCount||0}
     />
    </div>
  )
}
