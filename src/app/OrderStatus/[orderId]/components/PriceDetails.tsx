'use client'

import { OrderProps } from '@/app/types/type'
import { numberFormatted } from '@/utils/IndianPriceFormatt'
import React from 'react'

type PriceDetailsType={
    order:OrderProps
}
const PriceDetails = ({order}:PriceDetailsType) => {
  return (
    <div className='border-2 border-borderColor'>
        <div className='border-b-2 border-borderColor p-2'>
            <p className='text-[18px] text-gray '>Price Details</p>
        </div>
        <div className='p-2 flex flex-col gap-2'>
         <div className='flex justify-between'>
            <span className='font-semibold text-[20px]'>Payment Mrthod</span>
            <span className='font-semibold text-[20px]'>{order?.payment?.method}</span>
         </div>
         <div className='flex justify-between'>
            <span>Lis Price</span>
            <span className=' line-through'>{numberFormatted(order?.product?.price,0)}</span>
         </div>
         <div  className='flex justify-between'>
            <span>Shipping Charge</span>
            <span>{order?.payment?.shippingCharge ? numberFormatted(+order?.payment?.shippingCharge,0):'Free'}</span>
         </div>
         <div className='flex justify-between'>
            <span>Selling Price</span>
            <span>{numberFormatted(+order?.payment?.amount,0)}</span>
         </div>
         <div className='flex justify-between'>
            <span className=' font-semibold text-[20px]'>Total</span>
            <span className='font-semibold text-[20px]'>{numberFormatted(+order?.payment?.amount+(+order?.payment?.shippingCharge),0)}</span>
         </div>
        </div>
</div>
  )
}

export default PriceDetails