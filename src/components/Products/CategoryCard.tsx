'use client'


import { CategoryUrl } from '@/api'
import { CategoryType } from '@/app/types/type'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

type CategoryCardProsp={
    category:CategoryType
}
export const CategoryCard = ({category}:CategoryCardProsp) => {

  const router=useRouter()

  const routerHandler=()=>{
    router.push(`/products?category=${category._id}`)
  }
  return (
    <div
      onClick={routerHandler}  
     className='w-[100%]  hover:scale-[1.1]  h-[150px]  cursor-pointer flex flex-col justify-center items-center'>
        <Image
          src={`${CategoryUrl}/${category?.image}`}
          alt='img'
          width={150}
          height={150}
          className='w-[100px] h-[100px] rounded-md  border-2 border-borderColor '
        />
        <span className='text-[20px] text-base '>{category?.displayName}</span>
    </div>
  )
}
