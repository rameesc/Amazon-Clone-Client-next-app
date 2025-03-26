'use client'


import { ProductImgUrl } from '@/api'
import { LoginForm } from '@/app/(auth)/components/LoginForm'
import { MyOrderSkelten } from '@/app/myOrder/components/MyOrderSkelten'
import { CustomeBtn } from '@/components/Button/CustomeBtn'
import { CustomePopUp } from '@/components/PopUp/CustomePopUp'
import { useQuerBuynow, useQueryAddTocart } from '@/hooks/useQueryCart'
import { useQuerySingleProduct } from '@/hooks/useQueryProduct'
import { numberFormatted } from '@/utils/IndianPriceFormatt'
import clsx from 'clsx'
import Image from 'next/image'
import { useParams } from 'next/navigation'

import React, { useState } from 'react'
import { FaBagShopping } from "react-icons/fa6";
import { FaPeopleCarryBox } from "react-icons/fa6";


export const SingleProduct = () => {
  const [currentImage,SetCurrentImage]=useState(0)
  const [open,setOpen]=useState(false)

    const {productId}=useParams()

    const {data,isPending}=useQuerySingleProduct()
    const {mutate,isPending:addIsPending}=useQueryAddTocart()

    const {mutate:buyMutate,isPending:buynowIspending}=useQuerBuynow()

    
   
    if(isPending){
        return <div className='flex justify-center items-center'>
            <div className='w-containerW  mt-[80px] flex gap-5  flex-wrap dm:flex-nowrap'>
              <MyOrderSkelten/>

            </div>
          
        </div>
    }
   

    const addtoCartHandler=()=>{
      if(!addIsPending){
        mutate({productId:productId as string,setOpen})

      }
     

    }
    const buyNowHandler=()=>{
      if( !buynowIspending ){
        buyMutate({productId:productId as string,setOpen})

      }
     
     
      

    }
  return (
    <div className='flex justify-center items-center'>
        <div className='w-containerW  mt-[80px] flex gap-5  flex-wrap dm:flex-nowrap'>
         
           <div className='flex flex-col gap-3'>
              <div className=' flex gap-3'>
                <div className='flex flex-col gap-3 '>
                  {data?.images?.map((item,index)=>(
                   <Image
                      key={item?._id}
                      onClick={()=>SetCurrentImage(index)}
                      src={`${ProductImgUrl}/${item?.medium}`}
                      className={clsx(` rounded-md`,
                        currentImage==index ?'border-[4px] border-blue':''
                      )}
                      alt='image'
                      width={100}
                      height={100}
                    />
                  ))}
                </div>
                <div>
                   <Image
                      src={`${ProductImgUrl}/${data?.images[currentImage].large}`}
                      className='w-[400px]  rounded-md h-[400px] object-contain'
                      alt='image'
                      width={100}
                      height={100}
                    />
                  

                </div>

              </div>
              <div className='flex gap-3'>
              {data?.quantity && data?.quantity > 0  ?  <>
                <CustomeBtn 
                   onclick={buyNowHandler}
                   disabled={isPending}
                  style='rounded-full p-5 border-2 hover:bg-yellow border-yellow bg-white text-Primary font-semibold text-[18px]'>
                   <div className='flex gap-3 items-center font-s'>
                    <span className=' '>
                       <FaPeopleCarryBox/>
                    </span>
                    <span>
                      Buy Now
                    </span>
                   </div>
                </CustomeBtn>
                <CustomeBtn
                 onclick={addtoCartHandler} 
                 disabled={addIsPending}
                 style='rounded-full p-5 border-2 hover:bg-yellow border-yellow bg-white text-Primary font-semibold text-[18px]'>
                   <div className='flex gap-3 items-center font-s'>
                    <span className=' '>
                       <FaBagShopping/>
                    </span>
                    <span>
                      Add to Cart
                    </span>
                   </div>
                </CustomeBtn>
              </>:
              <>
              <CustomeBtn style='rounded-full  cursor-default p-5 border-2 hover:bg-red  border-yellow bg-red text-white font-semibold text-[18px]'>
                   <div className='flex gap-3 items-center font-s'>
                    <span className=' '>
                       <FaBagShopping/>
                    </span>
                    <span>
                      Out Of Stock
                    </span>
                   </div>
                </CustomeBtn>
              
              </>
              
              }

              </div>
           </div>
           <div>
               <div>
                 <h1 className='text-[25px] font-medium'>{data?.name}</h1>
               </div>
               <div>
                <div>
                  <p className=' text-Primary font-bold tracking-wide'>Special Price</p>
                </div>
                 <div className='flex gap-3 items-center'>
                   <p className='text-[25px] font-semibold'>{numberFormatted(data?.price as number,data?.discountRate as number)}</p>
                   <p className=' line-through text-gray'>{numberFormatted(data?.price as number,0)}</p>
                   <p className='text-Primary font-semibold text-[18px]'>{data?.discountRate && data?.discountRate + '%'}</p>
                 </div>
               </div>
               <div 
                className='max-w-[400px]'
                dangerouslySetInnerHTML={{__html:data?.description ? data?.description :'No discription'}}/>
           </div>
        </div>
        <CustomePopUp
         open={open}
         onClose={()=>setOpen(false)}
        >
          <LoginForm/>
        </CustomePopUp>
      
    </div>
  )
}
