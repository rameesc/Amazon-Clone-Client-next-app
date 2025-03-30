'use client'



import { useQueryProductFeature } from '@/hooks/useQueryProduct'
import React from 'react'
import { ProductItemTitle } from './ProductItemTitle'
import { ProductCard } from './ProductCard'
import { ProductCardSkelton } from './ProductCardSkelton'

export const FeatureProduct = () => {

   const {data,isPending}= useQueryProductFeature()

   const cardData=data?.map((item)=>({
    productName:item.name,
    _id:item?._id,
    image:item?.images[0]?.medium,
    description:item?.description,
    price:item?.price,
    discount:item?.discountRate,
    rating:item?.averageRating

   }))

   if(cardData && cardData?.length <1){
    return <p>There is no product found</p>

   }

   if(isPending){
    return <div className='flex gap-5 flex-wrap '>
        <ProductCardSkelton/>
    </div>
   }
  return (
    <div className='flex justify-center flex-col items-center'>
      <div className=' w-containerW'>
        <ProductItemTitle title='Featured Product'/>
        {/* grid grid-cols-1 mt-[20px] mb-[20px] gap-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 */}
        <div className='flex gap-5 flex-wrap  justify-center sm:justify-start  mt-8 '>
         {cardData?.map((item)=>(
          
          <ProductCard
            rating={item?.rating}
            key={item?._id}
            image={item?.image}
            price={item?.price}
            discount={item?.discount}
            discription={item?.description}
            productName={item?.productName}
            _id={item?._id}

          />

         ))}
        </div>
         
      </div>
    </div>
  )
}
