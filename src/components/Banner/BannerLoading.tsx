'use client'

import React from 'react'
import {Carousel} from "antd"
import { Skeleton } from "@/components/ui/skeleton"

export const BannerLoading = () => {
  return (
    <Carousel arrows swipe infinite={false}>
       
       <Skeleton className='w-[100%] h-[400px] bg-[#38353573]'/>

    </Carousel>
  )
}
