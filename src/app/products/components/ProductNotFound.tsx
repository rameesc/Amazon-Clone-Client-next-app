'use client'




import Image from 'next/image'
import React from 'react'

type ProductNotFoundType={
  image:string
  text:string
}

export const ProductNotFound = ({image,text}:ProductNotFoundType) => {
  return (
    <div className='flex flex-col  items-center w-[100%] '>
                  
                  <div className='w-containerW flex flex-col justify-center items-center'>
                    <Image
                      src={image}
                      alt='cart'
                      width={200}
                      height={200}

                    />
                    <h1 className='text-red text-[25px]'>{text}</h1>

                   

                  </div>

               </div>
  )
}
