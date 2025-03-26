'use client'


import { useQueryMyOrders } from '@/hooks/useQuaryOrder'
import React from 'react'
import { MyOrderSkelten } from './MyOrderSkelten'
import { MyOrderItemValue } from './MyOrderItemValue'

import { MyOrderNotFound } from './MyOrderNotFound'
import { TotalDataItem } from '@/components/TotalDataItem'

export const OrederItems = () => {

   

   const {data,isPending}= useQueryMyOrders()
   

   if(data?.orders && data?.orders.length<1){
      return <MyOrderNotFound/>
   }

   if(isPending){
    return <MyOrderSkelten/>
   }
  return (
    <div className='flex flex-col gap-3'>
        {status}
        <div className='flex justify-end'>
          <TotalDataItem
           title='Total Order Item'
           totalItem={data && data.totalCount||0}
         />
        </div>
       {data?.orders.map((item)=>(
        <MyOrderItemValue key={item?._id} order={item}/>
       ))}
    </div>
  )
}
