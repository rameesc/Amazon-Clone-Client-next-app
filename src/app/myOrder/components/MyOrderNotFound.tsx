'use client'


import { CustomeBtn } from '@/components/Button/CustomeBtn'
import { images } from '@/images'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

export const MyOrderNotFound = () => {

    const router=useRouter()

    const routerHandler=()=>{
        router.push('/')
    }
  return (
    <div className='flex flex-col  gap-2 justify-center w-[100%] items-center'>
        <Image
          src={images.noCart}
          alt='img'
          width={200}
          height={200}
        />
        <h1 className='text-[20px]'>Order Not Found</h1>
        <CustomeBtn
             onclick={routerHandler}
              style='rounded-full p-5 border-2 text-Primary hover:text-white hover:bg-yellow border-yellow bg-white text-Primary font-semibold text-[18px]'
            >
                <span>Shopping</span>
        </CustomeBtn>
    </div>
  )
}
