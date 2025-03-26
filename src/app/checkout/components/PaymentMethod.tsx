'use client'

import React from 'react'
import { ConformationProductTable } from './ConformationProductTable'
import { CartSubtotalItem } from './CartSubtotalItem'
import { useCartStore } from '@/hooks/useStore'
import { numberFormatted } from '@/utils/IndianPriceFormatt'
import { PaymentMethodItem } from './PaymentMethodItem'

type PaymentMethodType={
  setCurrentValue:(item:number)=>void,
}
export const PaymentMethod = ({setCurrentValue}:PaymentMethodType) => {

  const {subTotalValue}=useCartStore()
  const shippingRate=10
  return (
    <div className='flex justify-center items-center flex-col'>
      <div className='w-containerW     mt-[50px]'>

        <div className='flex flex-col gap-5 '>
          <div>
           <ConformationProductTable/>
          </div>
         
          <div className=' flex flex-col gap-3 flex-wrap mt-[30px]'>
            <div  style={{borderTopWidth:"2px"}} className='p-2 border-gray flex  items-center justify-between'>
             <h1 className='font-semibold text-gray text-[20px]'>SubTotal</h1>
             <CartSubtotalItem/>
           </div>
           <div style={{borderTopWidth:"2px"}} className='p-2  border-gray flex  items-center justify-between'>
             <h1 className='font-semibold text-gray text-[20px]'>Shipping Rate</h1>
             <span className='font-semibold text-gray text-[20px]'>{numberFormatted(shippingRate,0)}</span>
           </div>
           <div style={{borderTopWidth:"2px"}} className='p-2 border-gray flex  items-center justify-between'>
             <h1 className='font-semibold text-gray text-[20px]'>Total</h1>
             <span className='font-semibold text-gray text-[20px]'>{numberFormatted(shippingRate+subTotalValue,0)}</span>
           </div>

          </div>
          
        </div>
        <div className='mt-[50px]'>
          <h1 className='text-Primary font-bold tracking-wider text-[25px]'>Payment method</h1>
          <PaymentMethodItem setCurrentValue={setCurrentValue} shippingRate={shippingRate}/>

        </div>

      </div>
    </div>
  )
}
