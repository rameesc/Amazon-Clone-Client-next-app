


import { Metadata } from 'next'
import React from 'react'

export const metadata:Metadata={
    title:"product review",
    description:"product review"
}
type ProductReviewLayoutProps={
    children:React.ReactNode
}
const ProductReviewLayout = ({children}:ProductReviewLayoutProps) => {
  return (
    <div className='flex flex-col justify-center items-center mt-[50px]'>
        <div className='w-containerW'>
          {children}
        </div>
        
    </div>
  )
}

export default ProductReviewLayout