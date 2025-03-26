'use client'


import { ProductImgUrl } from '@/api'
import { OrderProps } from '@/app/types/type'
import { numberFormatted } from '@/utils/IndianPriceFormatt'
import Image from 'next/image'
import React from 'react'
import { OrderStatus } from './OrderStatus'
import { useRouter } from 'next/navigation'
import { AddReview } from './AddReview'

type MyOrderItemValueProps={
    order: OrderProps
}
export const MyOrderItemValue = ({order}:MyOrderItemValueProps) => {

    const router=useRouter()

    const routerHandler=()=>{
        router.push(`/OrderStatus/${order?._id}`)

    }
  return (
    <div  className='flex relative z-0 gap-3 items-center  border-2 p-3 rounded-md border-borderColor  justify-between'>
        <div onClick={routerHandler}>
            <Image
              src={`${ProductImgUrl}/${order?.product?.images[0].thumbnail}`}
              width={100}
              height={100}
              alt='img'
              className=' rounded-md cursor-pointer'
              
            />
        </div>
        <div onClick={routerHandler} >
            <h1 className='font-semibold cursor-pointer hover:text-sky-600'>{order?.product?.name}</h1>
        </div>
        <div>
            <span>{numberFormatted(+order?.payment?.amount,0)}</span>
        </div>
        <div className='flex flex-col gap-2'>
         
          <OrderStatus 
           current={order?.status?.currentStatus}
           currentDate={order?.status?.activeDate}
         />
         <AddReview
           productId={order?.product?._id}
           status={order?.status?.currentStatus}
         />

        </div>
        
    </div>
  )
}
