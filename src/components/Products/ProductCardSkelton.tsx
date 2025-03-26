'use client'


import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'

export const ProductCardSkelton = () => {
  return (
    <Skeleton className=' border-2 overflow-hidden  border-yellow rounded-xl w-[300px] cursor-pointer  '>
    {/* sm:w-[275px] md:w-[275px] lg:w-[275px] */}
    
    <Skeleton className=' w-[300px] h-[300px] rounded-md'/>
    
       
    
    <Skeleton className='flex justify-center items-center gap-5 p-5'>
     <Skeleton className='w-[100%] h-[20px] rounded-lg'/>
     <Skeleton className='w-[100%] h-[20px] rounded-lg'/>
       
    </Skeleton>
 </Skeleton>
  )
}
