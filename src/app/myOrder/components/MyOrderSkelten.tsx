'use client'


import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

export const MyOrderSkelten = () => {
  return (
    <div className='flex flex-col gap-3 w-[100%]'>
        {[...Array(10)].map((_,index)=>(
            <div key={index} className='flex gap-3 w-[100%] '>
                <Skeleton className='w-[100px] h-[100px]'/>
                <div className='flex flex-col gap-2 w-[100%]'>
                <Skeleton className='w-[100%] h-[40px]'/>
                <Skeleton className='w-[100%] h-[40px]'/>

                </div>
            </div>
        ))}
    </div>
  )
}
