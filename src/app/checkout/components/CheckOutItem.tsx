'use client'


import React, { useEffect, useState } from 'react'
import { Steps } from './Steps'
import { AddressItem } from './AddressItem'
import { ProductConformation } from './ProductConformation'
import { PaymentMethod } from './PaymentMethod'
import { useQueryCartItems } from '@/hooks/useQueryCart'
import { useRouter } from 'next/navigation'

export const CheckOutItem = () => {
    const [currentValue,setCurrentValue]=useState(0)
    const {data}=useQueryCartItems()
    const router=useRouter()

    const stepItemValue=[
        {
            title:"Shipping Address"
        },
        {
            title:"Conformation"
        },
        {
            title:"Payment"
        },
    ]

    useEffect(()=>{
        

        if(data?.carts &&data?.carts.length<1){
            router.push('/')
        }

    },[data?.carts])
  return (
    <div className='flex flex-col justify-center items-center mt-[50px]'>
        <div className='w-containerW flex flex-col gap-5'>
            <Steps 
             setCurrentValue={setCurrentValue}
             currentValue={currentValue}
             stepItemValue={stepItemValue}
            />
            {currentValue==0 && <AddressItem setCurrentValue={setCurrentValue}/>}
            {currentValue==1 && <ProductConformation  setCurrentValue={setCurrentValue}/>}
            {currentValue==2 && <PaymentMethod setCurrentValue={setCurrentValue}/>}
        </div>
    </div>
  )
}
