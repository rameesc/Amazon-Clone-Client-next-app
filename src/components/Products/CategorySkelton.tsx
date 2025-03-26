'use client'


import React from 'react'
import { Skeleton } from '../ui/skeleton'

export const CategorySkelton = () => {
  return (
    <Skeleton className='w-containerW flex items-center gap-3 '>
        <Skeleton 
         className='h-[150px] w-[100%]'

        />
        <Skeleton 
         className='h-[150px] w-[100%]'

        />
        <Skeleton 
         className='h-[150px] w-[100%]'

        />
        <Skeleton 
         className='h-[150px] w-[100%]'

        />
        <Skeleton 
         className='h-[150px] w-[100%]'

        />
    </Skeleton>
  )
}
