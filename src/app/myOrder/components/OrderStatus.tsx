'use client'



import { allOrderStatus } from '@/app/schema'
import { dateFormatted } from '@/utils/dateFormate'
import React from 'react'

type OrderStatusProps={
    current:string
 currentDate:string
}
export const OrderStatus = ({current,currentDate}:OrderStatusProps) => {

    const getCurrentStatus=()=>{
        switch(current){
            case allOrderStatus?.active ||allOrderStatus?.approve||allOrderStatus?.complete||allOrderStatus?.dispatch:
            return <div className='flex gap-3 items-center'>
                     <div className='w-[15px] h-[15px] rounded-full bg-green'/>
                     {currentDate&&<p><span className='font-semibold'>{current}</span> on {dateFormatted(currentDate)}</p>}

                   </div>
            case allOrderStatus?.complete:
            return <div className='flex gap-3 items-center'>
                     <div className='w-[15px] h-[15px] rounded-full bg-green'/>
                     {currentDate&&<p><span className='font-semibold'>{current}</span> on {dateFormatted(currentDate)}</p>}

                   </div>
            case allOrderStatus?.cancel || allOrderStatus?.return||allOrderStatus?.tobereturned:
            return <div className='flex gap-3 items-center'>
                        <div className='w-[15px] h-[15px] rounded-full bg-red'/>
                        {currentDate&&<p><span className='font-semibold'>{current}</span> on {dateFormatted(currentDate)}</p>}

                    </div>
           default:
             return <div className='flex gap-3 items-center'>
                        <div className='w-[15px] h-[15px] rounded-full bg-red'/>
                        {currentDate&&<p><span className='font-semibold'>{current}</span> on {dateFormatted(currentDate)}</p>}

                    </div>

         }
    }
  return (
    <div>
        {getCurrentStatus()}
    </div>
  )
}
