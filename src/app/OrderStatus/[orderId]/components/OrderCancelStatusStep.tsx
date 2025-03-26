'use client'

import { allOrderStatus } from '@/app/schema'
import { OrderStatusChangeProps, PaymentProps } from '@/app/types/type'

import { dateFormatted } from '@/utils/dateFormate'

import clsx from 'clsx'
import React, { useEffect, useMemo, useState } from 'react'
import { TiTick } from 'react-icons/ti'
import { OrderCancelInformation } from './OrderCancelInformation'

type OrderCancelStatusStepProps={
  status:OrderStatusChangeProps,
 
  paymet:PaymentProps
  
}
export const OrderCancelStatusStep = ({status,paymet}:OrderCancelStatusStepProps) => {

    const [currentValue,setCurrentValue]=useState(1)

    
    
    useEffect(()=>{
        switch(status?.currentStatus){

            case allOrderStatus.active:
             return setCurrentValue(1)

            case allOrderStatus.approve:
             return setCurrentValue(2)
            case allOrderStatus.cancel:
             return setCurrentValue(4)
          
        }

    },[status?.currentStatus])

    

    const orderStatusLabel=[
        {
          label:"Active",
          date:status?.activeDate,
         

        },
        {
          label:"Approved",
          date:status?.approvedDate

        },
       
        
        {
          label:"Canceld",
          date:status?.cancelledDetail?.cancelledDate
         

        }
       
    ]

   

    const isAdmin=useMemo(()=>{

    return  status?.cancelledDetail?.cancelledByAdmin?.role
    },[status])

    const isCustomer=useMemo(()=>{

    return  status?.cancelledDetail?.cancelledByUser?.role
    },[status])

    const reason=useMemo(()=>{

    return  status?.cancelledDetail?.remark?.comment
    },[status])

    const isPaid=useMemo(()=>{

     //paymebt method  ['Cash on Delivery','manual']

    return  paymet?.method=="manual"
    },[paymet])
   
  return (
    <div className='flex flex-col '>
      <div className='p-5 h-[300px] flex flex-col justify-between relative'>
     
        {orderStatusLabel.map((item,index)=>(

            <div 
          
             className={clsx('flex gap-2 items-center z-10',
                
             )}
             key={index}>
                <span className={clsx(`w-[40px] h-[40px] bg-red    border-2 border-gray  rounded-full flex justify-center items-center`,
                  
                  
                  
                )}>
                   
                   <TiTick size={20}/>
                </span>
                <div className='text-red flex  gap-2 font-semibold'>
                    <p ><span>{item?.label}</span></p>
                    <p>{item?.date && <span>On {dateFormatted(item?.date)}</span>  }</p>
                </div>
            </div>

        ))}
        <div className={clsx(`w-[10px] h-[250px] bg-Light border-2 border-gray absolute top-[20px] left-[35px] before:absolute before:left-0 before:content-[" "] before:top-[20px] before:w-[10px]  `,
          "before:bg-red",
           currentValue==2 && 'before:h-[100px]',
           currentValue==3 && 'before:h-[180px]',
           currentValue==4 && 'before:h-[200px]'
        )} />
      </div>
      
        
      <OrderCancelInformation
        amount={+paymet?.amount}
        cancelBy={isAdmin}
        isPaid={isPaid}
        reason={reason}
      />
      <OrderCancelInformation
        amount={+paymet?.amount}
        cancelBy={isCustomer}
        isPaid={isPaid}
        reason={reason}
      />

      
     
    </div>
  )
}
