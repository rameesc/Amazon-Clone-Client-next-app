'use client'


import { ProductCard } from '@/components/Products/ProductCard'
import { ProductCardSkelton } from '@/components/Products/ProductCardSkelton'
import { useQueryProductSearch } from '@/hooks/useQueryProduct'
import React from 'react'
import { ProductNotFound } from './ProductNotFound'
import { images } from '@/images'

export const ProductItems = () => {

  const {data,isPending}=useQueryProductSearch()
 
  console.log(data,'pro')
  if(isPending){

    return <div className='flex gap-1 flex-wrap'>
         <ProductCardSkelton/>
         <ProductCardSkelton/>
         <ProductCardSkelton/>
         <ProductCardSkelton/>
    </div>
  }

  if(data?.products && data?.products.length < 1){
    return  <ProductNotFound
           image={images?.noCart}
           text='No Review Found '
    />
  }
  return (
    <div  className= ' flex justify-center gap-5 flex-wrap  ' >
      {data?.products?.map((item)=>(
        <ProductCard
         key={item?._id}
         image={item?.images[0]?.medium}
         price={item?.price}
         discount={item?.discountRate}
         discription={item?.description}
         productName={item?.name}
         _id={item?._id}
         rating={item?.averageRating}
        />
      ))}
    </div>
  )
}
