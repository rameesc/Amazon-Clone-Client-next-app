'use client'


import { ProductImgUrl } from '@/api'
import Image from 'next/image'
import React, { useState } from 'react'

import { numberFormatted } from '@/utils/IndianPriceFormatt'
import { AddTocartButton } from './AddTocartButton'
import { FaShoppingBag } from "react-icons/fa";
import { useRouter } from 'next/navigation'

import { useQueryAddTocart } from '@/hooks/useQueryCart'

import { StarRating } from '@/app/product/[productId]/components/StarRating'
import { FaHeart } from "react-icons/fa";
import { useQueryAddtoWishile } from '@/hooks/useQueryWishil'
import { CustomePopUp } from '../PopUp/CustomePopUp'
import { LoginForm } from '@/app/(auth)/components/LoginForm'

type ProductCardType={
    image:string
    price:number
    discount:number
    discription:string
    productName:string
    _id:string,
    rating:number

}
export const ProductCard = ({image,price,discount,discription,productName,_id,rating}:ProductCardType) => {

    const {mutate,isPending} = useQueryAddTocart()
    const {mutate:AddtoWishile,isPending:WishilePending}=useQueryAddtoWishile()

    const [open,setOpen]=useState(false)
      
    const router=useRouter()

    const cartHandler=()=>{
        if(!isPending){
            mutate({productId:_id,setOpen})
        }
    
       

       
    }

    const wishilHandler=()=>{
        if(!WishilePending){
            AddtoWishile({productId:_id})

        }
         

    }
  return (
    <div  className=' relative border-2 overflow-hidden  border-yellow rounded-xl w-[300px] cursor-pointer  '>
        {/* sm:w-[275px] md:w-[275px] lg:w-[275px] */}
        
        <div onClick={()=>router.push(`/product/${_id}`)} className=' overflow-hidden'>
            <Image
              src={`${ProductImgUrl}/${image}`}
              className='w-[300px] h-[300px] bg-red  hover:scale-[1.2] duration-200 hover:ease-out  '
              alt='image'
              width={100}
              height={100}
            />
        </div>
        

        {rating &&<div className='p-2'>
         <StarRating
          star={rating}
         />
         </div>
        }
        <div 
          onClick={wishilHandler}
          
          className=' absolute top-2 hover: right-3 w-[50px] cursor-pointer h-[50px] bg-white rounded-full  border-2 border-red flex justify-center items-center'>
            <span>
                <FaHeart size={22} className='text-red hover:scale-[1.3] '/>
            </span>

        </div>
        <div onClick={()=>router.push(`/product/${_id}`)} className='flex flex-col justify-center items-center p-5 gap-5'>
            <h1 className='font-semibold text-[25px] text-gray'>{productName}</h1>
            <div className=' font-thin text-gray' dangerouslySetInnerHTML={{__html: discription?discription.substring(0,85)+'...' : 'no discription'}}/>
        </div>
        
        <div className='flex justify-center items-center gap-5 pt-5 pb-5 flex-col sm:flex-row'>
            <div>
                <p className='  font-semibold text-gray'>{numberFormatted(price,discount)}</p>
            </div>
            <div>
                <AddTocartButton
                 onClick={cartHandler}
                 style={'border-2 border-yellow rounded-full  hover:bg-yellow'}
                >
                    <div className='flex justify-center p-2 items-center  text-Primary  gap-3'>
                        <span>
                           <FaShoppingBag size={20}/>
                        </span>
                        <span className=' font-[520] text-[18px] hover:text-white '>Add to Cart</span>
                    </div>
                </AddTocartButton>
            </div>
        </div>
        <CustomePopUp
          open={open}
          onClose={()=>setOpen((pre)=>!pre)}
        >
            <LoginForm/>
        </CustomePopUp>
        
    </div>
  )
}
