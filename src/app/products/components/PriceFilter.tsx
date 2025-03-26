'use clinet'


import { numberFormatted } from '@/utils/IndianPriceFormatt'
import React from 'react'

type PriceFilterType={
  name:string
  min:number
  max:number
  priceValue:number
  onChange:()=>void
}
export const PriceFilter = ({name,max,min,priceValue,onChange}:PriceFilterType) => {
  return (
    <div className='border-2 border-borderColor p-5'>
       <h2 className=' font-semibold'>{name}</h2>
      <div className='mt-2'>
      
       <div className='flex flex-col gap-2'>
        <div className='flex gap-3'>
          <p className='font-semibold'>Min</p>
           <span className='bg-Primary p-1 rounded-md '>{numberFormatted(min,0)}</span>
        </div>
        <div className='flex gap-3'>
          <p className='font-semibold'>Max</p>
           <span className='bg-Primary p-1 rounded-md'>{numberFormatted(max,0)}</span>
        </div>
        
       </div>
       <div className='flex gap-2 mt-3 flex-wrap '>
        <input 
        onChange={onChange}
        type="range" 
        min={min} 
        max={max} 
        value={priceValue} 
        />
        <span className='font-semibold'>{numberFormatted(priceValue,0)}</span>

       </div>
       
     </div>
    
    
  </div>
  )
}
