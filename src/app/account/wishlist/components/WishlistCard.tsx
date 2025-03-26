'use client'


import { ProductImgUrl } from '@/api'
import { ButtonItem } from '@/components/Button/ButtonItem'
import { useQueryRemoveWishile } from '@/hooks/useQueryWishil'
import { numberFormatted } from '@/utils/IndianPriceFormatt'
import clsx from 'clsx'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { RiDeleteBin7Fill } from "react-icons/ri";

type WishlistProsp={
    wishlistId:string
    image:string
    name:string
    discount:number
    price:number
    produtcId:string
}
export const WishlistCard = ({wishlistId,image,name,discount,price, produtcId}:WishlistProsp) => {

    const [remove,setRemove]=useState(false)

    const router=useRouter()
    const {mutate,isPending}=useQueryRemoveWishile()
    const singleProductHandler=()=>{
        router.push(`/product/${produtcId}`)

    }
    const removeWishlistConformationHandler=()=>{
        setRemove(true)

    }
   
    const removeWishileItem=()=>{
        mutate({wishlistId})
    }
  return (
    <div className='border-2 overflow-hidden border-borderColor p-5 w-[100%] rounded-md flex gap-5 justify-between'>
        <div onClick={singleProductHandler} className='flex gap-5 cursor-pointer'>
            <Image
             width={150}
             height={150}
             alt='wishlist'
             className='w-[100px] h-[100px] hover:scale-[1.2]'
             src={`${ProductImgUrl}/${image}`}
            />
            <div className=''>
                <p className='text-[25px] hover:text-blue'>{name}</p>
                <div className='flex gap-3 items-center'>
                   <p className='text-[18px] font-semibold'>{numberFormatted(price as number,discount as number)}</p>
                   <p className=' line-through text-gray'>{numberFormatted(price as number,0)}</p>
                   <p className='text-Primary font-semibold text-[18px]'>{discount && discount + '%'}</p>
                 </div>
            </div>
        </div>
        <div>
          <RiDeleteBin7Fill onClick={removeWishlistConformationHandler} size={25} className=' cursor-pointer text-red hover:scale-[1.2]'/>
        </div>
        <WishileRemoveConformation
          text={'are you sure want to Remove this product from your wishlist'}
          remove={remove}
          disabled={isPending}
          onClick={removeWishileItem}
          onCancel={()=>setRemove(false)}
         
        />
    </div>
  )
}


type WishileRemoveConformationProsp={
    remove:boolean
    onCancel:()=>void
    onClick:()=>void
    disabled:boolean
    text:string
}
export const WishileRemoveConformation=({onClick,text,remove,onCancel, disabled}:WishileRemoveConformationProsp)=>{

    

  
    const removeWishlistHandler=()=>{
       
        onClick()


    }
    

    return(
        <div className={clsx('w-[100%] h-screen  bg-[#0e0b0bb6]  z-10 fixed  top-0 left-0   ',
            remove ?'block':"hidden"
        )}>
           <div className='flex flex-col gap-3 bg-Primary w-[90%] md:w-[30%] p-5 rounded-lg absolute top-[40%] left-[50%] translate-x-[-50%]'>
            <p>{text}</p>
            <div className='flex gap-4 self-end'>
                <ButtonItem
                   style='bg-Light text-black hover:bg-Light hover:scale-[1.2]'
                   title='Cancel'
                   type='button'
                   onClick={onCancel}
                   
                />
                <ButtonItem
                   style='bg-red hover:bg-red hover:scale-[1.2]'
                   title='Delete'
                   type='button'
                   disabled={ disabled}
                   onClick={removeWishlistHandler}

                />
            </div>
           </div>
        </div>
    )
}
