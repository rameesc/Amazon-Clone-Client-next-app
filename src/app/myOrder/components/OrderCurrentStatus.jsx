
'use client'

import { OrderDetails } from '@/app/OrderStatus/[orderId]/components/OrderDetails'
import PriceDetails from '@/app/OrderStatus/[orderId]/components/PriceDetails'
import { ShippingDetails } from '@/app/OrderStatus/[orderId]/components/ShippingDetails'
import { useSingleOrder } from '@/hooks/useQuaryOrder'

import React from 'react'
import { MyOrderSkelten } from './MyOrderSkelten'

export const OrderCurrentStatus = () => {

    
    const {data,isPending}=useSingleOrder()

    if(isPending){
      return <MyOrderSkelten/>
    }
  return (
    <div className='flex flex-col gap-4'>
        <OrderDetails 
          order={data}
        />
        <ShippingDetails order={data} />
        <PriceDetails order={data}/>

    </div>
  )
}
