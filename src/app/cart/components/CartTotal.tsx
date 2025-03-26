'use client'



import { CustomeBtn } from '@/components/Button/CustomeBtn'

import { numberFormatted } from '@/utils/IndianPriceFormatt'
import { useRouter } from 'next/navigation'
import React from 'react'


type CartTotalProps={
    subTotal:number
}
export const CartTotal = ({subTotal}:CartTotalProps) => {

    const router=useRouter()
 
   

    const moveToCheckOutPage=()=>{
        //check use login

        //move to 
        router.push('/checkout')
    }
  return (
    <div className='bg-Light rounded-2xl p-[10px] flex flex-col gap-3'>
        <div>
            <h1 className='text-[40px] text-grayDark  pr-[150px]'>
                <span className=' font-semibold'>Cart</span>
                <span>Total</span>
            </h1>
        </div>
        <div className='flex justify-between'>
            <h1 className='text-[25px] font-[500] text-grayDark'>Subtotal:</h1>
            <span className='text-gray font-[500]'>
                {numberFormatted(subTotal,0)}
            </span>
        </div>
        <div  className='flex justify-between'>
            <h1 className='text-[25px] font-[500] text-grayDark'>Shipping</h1>
            <span className='text-gray font-[500]'>{'50'}</span>
        </div>
        <div className='flex justify-between'>
            <h1 className='text-[25px] font-[500] text-grayDark'>Total</h1>
            <span className='text-gray font-[500]'>
            {numberFormatted(subTotal,0)}
            </span>
        </div>
        <div className='mb-[30px]'>
            <CustomeBtn
             onclick={moveToCheckOutPage}
              style='rounded-full p-5 border-2 text-Primary hover:text-white hover:bg-yellow border-yellow bg-white text-Primary font-semibold text-[18px]'
            >
                <span>PROCEED CHECKOUT</span>
            </CustomeBtn>
        </div>
    </div>
  )
}
