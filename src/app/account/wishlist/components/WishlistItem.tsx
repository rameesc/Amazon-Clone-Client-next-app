'use client'


import { CartSkelTon } from '@/app/cart/components/CartSkelTon'
import { ProductNotFound } from '@/app/products/components/ProductNotFound'
import { useQureyAllWishlist } from '@/hooks/useQueryWishil'
import React from 'react'
import { WishlistCard } from './WishlistCard'
import { images } from '@/images'
import { DataPagination } from '@/components/DataPagination'
import { TotalDataItem } from '@/components/TotalDataItem'

export const WishlistItem = () => {
    const {data,isPending}=useQureyAllWishlist()

    
  
    if(data?.wishlists && data?.wishlists.length < 1){
        return <div>
            <ProductNotFound
             image={images?.noCart}
             text='No wishlist Found'
            />
        </div>
    }

    if(isPending){

        return <CartSkelTon/>
    }
  return (
    <div className='flex flex-col gap-3'>

       <div className='flex justify-end'>
        <TotalDataItem
          title='Total Wishlist'
          totalItem={data && data.totalCount||0}
        />
       </div>
      <div className='flex flex-col gap-4 '>
        
        {data?.wishlists?.map((item)=>(
          <WishlistCard
            key={item?._id}
            wishlistId={item?._id}
            produtcId={item?.product?._id}
            image={item?.product?.images[0].medium}
            name={item?.product?.name}
            discount={item?.product?.discountRate}
            price={item?.product?.price}

          />
        ))}
      </div>
      <DataPagination
        pagination={data && data.pagination|| 1}
        totalCount={data && data.totalCount||0}
      />
    </div>
  )
}
