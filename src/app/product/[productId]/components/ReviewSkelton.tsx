'use client'


import { Skeleton } from 'antd'
import React from 'react'

export const ReviewSkelton = () => {
  return (
    <Skeleton className='w-[100%] h-[150px] rounded-lg p-3'>
    <Skeleton className='w-[50px] h-[50px] rounded-full'></Skeleton>
  </Skeleton>
  )
}
