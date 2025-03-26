'use client'

import { useQueryCartItems } from '@/hooks/useQueryCart'
import { useCartStore } from '@/hooks/useStore'
import { numberFormatted } from '@/utils/IndianPriceFormatt'
import { useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'

export const CartSubtotalItem = () => {

    const {data}=useQueryCartItems()
    const {setSubTotalValue,subTotalValue}=useCartStore()

    const search=useSearchParams()
    useEffect(()=>{
     

        if(search.get('p')=='buynow' && data?.carts){
         
          const buynow=data?.carts.filter((item)=>item?.product?._id==search.get('productId'))
          
          const total=buynow.reduce((acc,item)=>{
            const price=item.product.price
            const discount=item.product.discountRate
            const quantity=item.quantity
  
            
            const discountPrice=price*(1-discount/100)
  
            return acc+discountPrice*(quantity?quantity:1)
         
  
          
            
          },0)
         return setSubTotalValue(total)

        }
        if(data?.carts){
  
          const total=data?.carts.reduce((acc,item)=>{
            const price=item.product.price
            const discount=item.product.discountRate
            const quantity=item.quantity
  
            
            const discountPrice=price*(1-discount/100)
  
            return acc+discountPrice*(quantity?quantity:1)
         
  
          
            
          },0)
          setSubTotalValue(total)
        }
      },[data,data?.carts])
  return (
    <div>
        <span className='text-gray text-[20px] font-semibold'>{numberFormatted(subTotalValue,0)}</span>
    </div>
  )
}
