 'use client'

import { useQueryCartItems } from '@/hooks/useQueryCart'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaBagShopping } from 'react-icons/fa6'

export const HeaderCart = () => {

  const router=useRouter()

  const {data}=useQueryCartItems()
  
  return (
    <div 
     onClick={()=>router.push('/cart')}
    className=' relative cursor-pointer hover:scale-[1.2]'>
          <span className=' text-[32px]'><FaBagShopping/></span>
          <span className='bg-yellow absolute top-[-10px] w-[25px] text-center right-[-10px]  text-black text-[15px]  rounded-full'>
          {data?.totalCount}
          </span>
    </div>
  )
}
