'use client'


import { CustomeBtn } from '@/components/Button/CustomeBtn'
import {  useQueryCartUpdate } from '@/hooks/useQueryCart'

import React from 'react'

type CartQuantityType={
    quantity:number,
    productId:string
}
const CartQuantity = ({quantity,productId}:CartQuantityType) => {
    const {mutate,isPending}=useQueryCartUpdate()

  
   

    const addQuantityHanhler=()=>{
       
        mutate({
            cartId:productId,type:"add"
        })
    }
    const lessQuantityHanhler=()=>{
       
        mutate({
            cartId:productId,type:"less"
        })
    }

    
  return (
    <div className='flex gap-3 items-center     '>
        <CustomeBtn 
         onclick={addQuantityHanhler}
         disabled={isPending}
         style='rounded-full border-2 bg-white w-[40px] h-[40px] hover:bg-[#c0b9b9]  checked::scale-[1.2] '
        >
            <span className=' text-gray text-[23px]'>+</span>
        </CustomeBtn>
        <span className='text-gray text-[20px] font-semibold'>{quantity}</span>
        <CustomeBtn 
         onclick={lessQuantityHanhler}
         disabled={isPending}
         style='rounded-full border-2 bg-white w-[40px] h-[40px] hover:bg-[#c0b9b9] '
         >
            <span className=' text-gray text-[23px]'>-</span>
        </CustomeBtn>
    </div>
  )
}

export default CartQuantity