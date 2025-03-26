'use client'


import React from 'react'
import {Carousel} from "antd"
import { useQueryBanners } from '@/hooks/useQueryBanner'
import Image from 'next/image'
import { BannerUrl } from '@/api'
import { BannerLoading } from './BannerLoading'

export const CarousalItem = () => {

    const {data,isPending}= useQueryBanners()

    console.log(data)
    if(isPending){

        return <BannerLoading/>
    }
  return (
    <div>
        <Carousel arrows swipe infinite={false}>

            {data?.map((item,index)=>(
                <div key={index}>
                    <Image
                      className='w-[100%] h-[400px] object-cover '
                      
                     src={`${BannerUrl}/${item?.bannerPhoto}`} 
                     alt="img"

                     
                     width={1000}
                     height={100}
                      />
                </div>
            ))}
            
           
           

        </Carousel>
    </div>
  )
}
