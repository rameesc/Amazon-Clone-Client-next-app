'use client'


import { OrderProps } from '@/app/types/type'
import { numberFormatted } from '@/utils/IndianPriceFormatt'
import Image from 'next/image'
import React from 'react'
import { OrderStatusStep } from './OrderStatusStep'
import { ProductImgUrl } from '@/api'
import { allOrderStatus } from '@/app/schema'
import { OrderCancelStatusStep } from './OrderCancelStatusStep'


type OrderDetailsType={
    order:OrderProps
}
export const OrderDetails = ({order}:OrderDetailsType) => {
  return (
    <div className='w-[100%] border-2 border-borderColor'>
        <div className=' flex items-center w-[100%] justify-between p-5 border-b-2 border-borderColor'>
            <div className='flex flex-col gap-1'>
                <h1 className=' font-semibold text-[20px]'>{order?.product?.name}</h1>
                <p className='text-[15px] text-gray'>{order?.product?.category[0].displayName}</p>
                <p className='text-[15px] text-gray'> <span>Seller:</span> <span>{order?.soldBy?.email}</span></p>
                <h1 className='font-semibold'>{numberFormatted(+order?.payment?.amount,0)}</h1>
            </div>
            <div>
                <Image
                  src={`${ProductImgUrl}/${order?.product?.images[0].thumbnail}` }
                  width={100}
                  height={100}
                  alt='img'
                  className=' rounded-md'
                />
            </div>
        </div>
        {order?.status?.currentStatus==allOrderStatus?.cancel ?(
          <OrderCancelStatusStep status={order?.status} paymet={order?.payment} />
        ):(
          <OrderStatusStep status={order?.status}  orderId={order?._id} />

        )}
           
          

         
       

    </div>
  )
}
