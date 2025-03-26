'use client'




import { WishileRemoveConformation } from '@/app/account/wishlist/components/WishlistCard'
import { CustomeBtn } from '@/components/Button/CustomeBtn'
import { useQueryCartRemove } from '@/hooks/useQueryCart'
import React, { useState } from 'react'

type CartActionType={
    productId:string
}
export const CartAction = ({productId}:CartActionType) => {
   const {mutate,isPending}= useQueryCartRemove()

   const [open,setOpne]=useState(false)

   const removeCartHandle=()=>{
     setOpne(true)
   }
  return (
    <div className=''>
         <CustomeBtn 
          onclick={removeCartHandle}
          disabled={isPending}
          style='rounded-full border-2 bg-[#d1c9c981] w-[40px] h-[40px] hover:bg-[#c0b9b9]  checked::scale-[1.2] '
         >
            <span className=' text-red font-bold text-[23px]'>x</span>
        </CustomeBtn>
        <WishileRemoveConformation
          disabled={isPending}
          remove={open}
          onClick={()=>mutate(productId)}

          text='Do you sure want to Remove this item from you cart'
          onCancel={()=>setOpne(false)}
        />
    </div>
  )
}
