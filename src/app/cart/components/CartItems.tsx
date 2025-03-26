'use client'



import { useQueryCartItems } from '@/hooks/useQueryCart'
import React, { useEffect, useState } from 'react'
import { DataTable } from './CartTable'
import { CartColumns, CartColumsType } from './TableColumns'

import { images } from '@/images'
import { CartSkelTon } from './CartSkelTon'
import { CartTotal } from './CartTotal'
import { ProductNotFound } from '@/app/products/components/ProductNotFound'
import { TotalDataItem } from '@/components/TotalDataItem'
import { DataPagination } from '@/components/DataPagination'





export const CartItems = () => {

    const {data,isPending}=useQueryCartItems()
    const [subTotal,setSubTotal]=useState(0)
    
   
    

    useEffect(()=>{
      if(data?.carts){

        const total=data?.carts.reduce((acc,item)=>{
          const price=item.product.price
          const discount=item.product.discountRate
          const quantity=item.quantity

          
          const discountPrice=price*(1-discount/100)

          return acc+discountPrice*(quantity?quantity:1)
       

        
          
        },0)
        setSubTotal(total)
      }
    },[data])

    

    if(data?.carts && data?.carts.length < 1){

        return <div className='flex flex-col justify-center items-center mt-[50px]'>
                  
                  <div className='w-containerW flex flex-col justify-center items-center'>
                    <ProductNotFound
                     image={images?.noCart}
                     text='Cart Not found'
                    
                    />
                    
                  </div>

               </div>

    }

    if(isPending){

        return <div className='flex flex-col justify-center items-center mt-[50px]'>
               
               <div className='w-containerW'>
                <CartSkelTon/>
               </div>

            </div>
    }
    
    const cartData=data?.carts?.map((item)=>({
      image:item?.product?.images[0].medium,
      productName:item?.product?.name,
      productPrice:item?.product?.price,
      productDiscount:item?.product?.discountRate,
      _id:item?._id,
      quantity:item?.quantity?item.quantity :1,
      total:0
    })) as CartColumsType[]

    
   console.log(data,'cart')

   
  return (
    <div className='flex flex-col justify-center items-center mt-[50px]'>
      <div className='w-containerW'>
        <div className='flex justify-end border-2 border-borderColor p-3 rounded-lg'>
          <TotalDataItem
            title='Total Cart'
            totalItem={data && data?.totalCount||0}
          />

        </div>
        <div className='mt-10'>
         <DataTable data={cartData} columns={CartColumns}/>

        </div>
        <div className='mt-10'>
          <DataPagination
           pagination={data && data?.pagination||0}
           totalCount={data && data?.totalCount||0}
          />
        </div>
         
        <div className='flex  justify-end   mt-[50px]'>
          <CartTotal subTotal={subTotal}/>
        </div>


      </div>
      
    </div>
  )
}
