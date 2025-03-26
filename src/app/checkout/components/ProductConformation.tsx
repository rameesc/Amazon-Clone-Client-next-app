'use client'




import React from 'react'

import { CustomeBtn } from '@/components/Button/CustomeBtn'
import { ConformationProductTable } from './ConformationProductTable'
import { CartSubtotalItem } from './CartSubtotalItem'



type ProductConformationType={
    setCurrentValue:(item:number)=>void,
}
export const ProductConformation = ({setCurrentValue}:ProductConformationType) => {

   

    
   
  return (
    <div className='flex flex-col justify-center items-center mt-[50px]'>
      <div className='w-containerW'>
        <ConformationProductTable/>
        <div className='flex  justify-end   mt-[50px]'>
          <div className='flex gap-2'>
            <h1 className='text-grayDark text-[20px] font-semibold'>SubTotal:</h1>
            <CartSubtotalItem/>
          </div>
        </div>
        <div className='flex justify-end mt-[20px] '>
            <div className='flex gap-3'>
                <CustomeBtn
                 onclick={()=>setCurrentValue(0)}
                
                  style='rounded-full p-5 border-2 text-Primary hover:text-white hover:bg-yellow border-yellow bg-white text-Primary font-semibold text-[18px]'
                       >
                   <span>pre</span>
                </CustomeBtn>
                <CustomeBtn
                 onclick={()=>setCurrentValue(2)}
                
                  style='rounded-full p-5 border-2 text-Primary hover:text-white hover:bg-yellow border-yellow bg-white text-Primary font-semibold text-[18px]'
                       >
                   <span>Next</span>
                </CustomeBtn>
            </div>

        </div>


      </div>
      
    </div>
  )
}
