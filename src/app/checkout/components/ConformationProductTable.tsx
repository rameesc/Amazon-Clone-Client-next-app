import { useQueryCartItems } from '@/hooks/useQueryCart'
import React from 'react'
import { DataTable } from '@/app/cart/components/CartTable'
import { CartColumsType,ProductConformationColumns } from './ProductConrormationColumns'
import Image from 'next/image'
import { images } from '@/images'
import { CartSkelTon } from '@/app/cart/components/CartSkelTon'
import { useSearchParams } from 'next/navigation'





export const ConformationProductTable = () => {

    const {data,isPending}=useQueryCartItems()

    const search=useSearchParams()
    

    if(data?.carts && data?.carts.length < 1){

        return <div className='flex flex-col justify-center items-center mt-[50px]'>
                  
                  <div className='w-containerW flex flex-col justify-center items-center'>
                    <Image
                      src={images.noCart}
                      alt='cart'
                      width={200}
                      height={200}

                    />
                    <h1 className='text-red text-[25px]'>Cart Not found</h1>

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
      id:item?.product?._id,
      image:item?.product?.images[0].medium,
      productName:item?.product?.name,
      productPrice:item?.product?.price,
      productDiscount:item?.product?.discountRate,
     
      quantity:item?.quantity?item.quantity :1,
      total:0
    })) as CartColumsType[]

    
   
    if(search.get('p')=='buynow'){

        const buynow=cartData.filter((item)=>item?.id==search.get('productId'))

      return  <DataTable data={buynow} columns={ProductConformationColumns}/>
    }
   
   
  return (
    
    
        <DataTable data={cartData} columns={ProductConformationColumns}/>
        

  )
}
