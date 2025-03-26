'use client'


import { OrderProps } from '@/app/types/type'
import React from 'react'

type ShippingDetailsType={
    order:OrderProps
}
export const ShippingDetails = ({order}:ShippingDetailsType) => {
  return (
    <div className=' border-2 border-borderColor'>
        <div className=' border-b-2 border-borderColor p-2'>
            <p className='text-gray'>Shipping Details</p>
        </div>
        <div className='p-2'>
         <h1>{order?.user?.name}</h1>
         <p>{order?.shipto?.address}</p>
         <p><span className='font-semibold'>Phone number :</span> <span>{order?.shipto?.phoneno}</span></p>
        </div>
        
    </div>
  )
}
