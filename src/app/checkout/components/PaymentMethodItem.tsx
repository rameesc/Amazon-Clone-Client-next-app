'use client'


import { ButtonItem } from '@/components/Button/ButtonItem'
import { CustomeBtn } from '@/components/Button/CustomeBtn'
import { useQueryCreateOrder, useQueryCreateOrderOnlinePayment } from '@/hooks/useQuaryOrder'
import clsx from 'clsx'
import React, { useState } from 'react'

import Script from 'next/script'


type PaymentMethodType={
    setCurrentValue:(item:number)=>void,
    shippingRate:number
  }
export const PaymentMethodItem = ({setCurrentValue,shippingRate}:PaymentMethodType) => {

    const [PaymentMethod,setPaymentMethod]=useState<string>('')

  
   
    const {mutate,isPending}=useQueryCreateOrder()
    const {mutate:onlineMutate,isPending:onlinePending}=useQueryCreateOrderOnlinePayment()

    
    const onlinePayment=()=>{
      
        onlineMutate({method:PaymentMethod,shippingRate})
       
          
       

       

    }

    const cashOndelivery=()=>{
       
        mutate({method:PaymentMethod,shippingRate})

    }

    const paymentInputChageHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
        
        setPaymentMethod(e.target.value)

    }
  return (
    <div>
        <div className=' flex flex-col gap-3 mt-[20px]'>
            <label className={clsx('border-Primary border-2 p-3 rounded-md flex gap-3 cursor-pointer',
                PaymentMethod=='Cash on Delivery' && "bg-Primary"
            )} htmlFor="c1">
                <input type="radio" name='payment' id='c1' value='Cash on Delivery' onChange={paymentInputChageHandler} />
                <span className='font-semibold tracking-wide'>Cash On Delivery</span>
               
            </label>
            
            <label className={clsx('border-Primary border-2 p-3 rounded-md flex gap-3 cursor-pointer',
                  PaymentMethod=='manual'&& "bg-Primary"
            )} htmlFor="c2">
                <input type="radio" name='payment' id='c2' value='manual' onChange={paymentInputChageHandler} />
                <span className='font-semibold tracking-wide'>Online Payment</span>
                
            </label>
        </div>  
        <div className='flex justify-end mt-[20px] gap-2 mb-[50px]'>
                <CustomeBtn
                 
                   onclick={()=>setCurrentValue(1)}
                  style='rounded-full p-5 border-2 text-Primary hover:text-white hover:bg-yellow border-yellow bg-white text-Primary font-semibold text-[18px]'
                       >
                   <span>Pre</span>
                </CustomeBtn>
                {/* <ButtonItem
                 title='Place Order'
                 type='button'
                 style='rounded-full p-5 border-2 text-Primary hover:text-white hover:bg-yellow border-yellow bg-white text-Primary font-semibold text-[18px]'
                 disabled={isPending||onlinePending}
                //  onClick={ PaymentMethod=='manual' ? onlinePayment :cashOndelivery}
                onClick={onlinePayment}
                /> */}
               {PaymentMethod ?
                 <ButtonItem
                 title='Place Order'
                 type='button'
                 style='rounded-full p-5 border-2 text-Primary hover:text-white hover:bg-yellow border-yellow bg-white text-Primary font-semibold text-[18px]'
                 disabled={isPending||onlinePending}
                 onClick={ PaymentMethod=='manual' ? onlinePayment :cashOndelivery}
             
                />
                :
                <CustomeBtn
                 
                   disabled={true}
                  style='rounded-full p-5 border-2 text-Primary hover:text-white hover:bg-yellow border-yellow bg-white text-Primary font-semibold text-[18px]'
                       >
                   <span>Place Order</span>
                </CustomeBtn>

                }
                 <Script src="https://checkout.razorpay.com/v1/checkout.js" />
        </div>
        
        
    </div>
  )
}
