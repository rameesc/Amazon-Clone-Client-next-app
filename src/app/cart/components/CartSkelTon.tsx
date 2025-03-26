'use client'



import React from 'react'
import {Skeleton} from "@/components/ui/skeleton"

export const CartSkelTon = () => {
  return (
    <div className='flex flex-col gap-5'>
        <div className='flex flex-row gap-3 '>
          {[...Array(5)].map((_,index)=>(
            <Skeleton key={index} className='w-[100%] h-[20px] rounded-md'/>
         ))}

        </div>
        <div className='flex gap-3 flex-wrap'>
          {[...Array(15)].map((_,index)=>(
            <Skeleton key={index} className='w-[100%] h-[50px] rounded-md'/>
         ))}

        </div>
       
    </div>
  )
}
