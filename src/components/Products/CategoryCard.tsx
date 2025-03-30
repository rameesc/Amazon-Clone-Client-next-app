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
      className=' hover:scale-[1.1]   h-[200px]  cursor-pointer flex flex-col  mt-5'>
        <Image
          src={`${CategoryUrl}/${category?.image}`}
          alt='img'
          width={150}
          height={150}
          className='min-w-[150px] h-[180px] rounded-md  border-2 border-[#0a08082c] '
        />
        <span className='text-[20px] text-base text-center '>{category?.displayName}</span>
    </div>
  )
}
