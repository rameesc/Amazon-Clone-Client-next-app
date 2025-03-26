'use client'



import React, { useEffect, useState } from 'react'
import { TiTick } from "react-icons/ti";

import { allOrderStatus } from '@/app/schema';
import clsx from 'clsx';
import { dateFormatted } from '@/utils/dateFormate';
import { ButtonItem } from '@/components/Button/ButtonItem';
import { WhyYouCancel } from './WhyYouCancel';
import toast from 'react-hot-toast';
import { useQueryCancelOrder } from '@/hooks/useQuaryOrder';
import { OrderStatusChangeProps } from '@/app/types/type';


type OrderStatusStepProsp={
  status:OrderStatusChangeProps,
  orderId:string
}
export const OrderStatusStep = ({status,orderId}:OrderStatusStepProsp) => {

    const [currentValue,setCurrentValue]=useState(1)
    

    const [open,setOpne]=useState(false)

    const {mutate,isPending}=useQueryCancelOrder()

    useEffect(()=>{
        switch(status?.currentStatus){

            case allOrderStatus.active:
             return setCurrentValue(1)

            case allOrderStatus.approve:
             return setCurrentValue(2)
            case allOrderStatus.cancel:
             return setCurrentValue(4)
            case allOrderStatus.dispatch:
             return setCurrentValue(3)
            case allOrderStatus.complete:
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
          label:"Dispatched",
          date:status?.dispatchedDetail?.dispatchedDate,
           
        },
        {
          label:"Completed",
          date:status?.completedDate,
         

        }
       
    ]

    const openCancelHandler=()=>{
        setOpne(true)
    }

    const orderCancelHandler=(value:string)=>{
        toast.success(orderId)
        mutate({orderId,remark:value})
        setOpne(false)
    }
  return (
    <div className='flex justify-between flex-wrap '>
      <div className='p-5 h-[300px] flex flex-col justify-between relative'>
     
        {orderStatusLabel.map((item,index)=>(

            <div 
          
             className={clsx('flex gap-2 items-center z-10',
                
             )}
             key={index}>
                <span className={clsx(`w-[40px] h-[40px]    border-2 border-gray  rounded-full flex justify-center items-center`,
                  
                   currentValue>=index+1 ?'bg-green text-white':"bg-Light text-black",
                    
                  
                )}>
                   
                   <TiTick size={20}/>
                </span>
                <div className=' flex  gap-2 font-semibold'>
                    <p><span>{item?.label}</span></p>
                    <p>{item?.date && <span>On {dateFormatted(item?.date)}</span>  }</p>
                </div>
            </div>

        ))}
        <div className={clsx(`w-[10px] h-[250px] bg-Light border-2 border-gray absolute top-[20px] left-[35px] before:absolute before:left-0 before:content-[" "] before:top-[20px] before:w-[10px]  `,
          "before:bg-green",
           currentValue==2 && 'before:h-[100px]',
           currentValue==3 && 'before:h-[180px]',
           currentValue==4 && 'before:h-[200px]'
        )} />
      </div>
     
      <div className={clsx(' self-end bg-red m-3  ',
          ['complete','return'].includes(status?.currentStatus) ?"hidden":'block'
      )}>
         <ButtonItem
          title='Cancel Your Order'
          style='bg-red  rounded-md hover:bg-rose-600  hover:scale-[1.1]'
          type='button'
          disabled={false}
          onClick={openCancelHandler}
         />
      </div>
      <WhyYouCancel
        open={open}
        onClose={()=>setOpne(false)}
        onCancelOrder={(value)=>orderCancelHandler(value)}
        disabled={isPending}
      />
    </div>
  )
}
