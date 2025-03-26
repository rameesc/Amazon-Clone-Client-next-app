import { Metadata } from 'next'
import React from 'react'


type MyReviewLayoutProps={
    children:React.ReactNode
}

export const metadata:Metadata={
    title:"myReview",
    description:"myReview"
}
export default function MyReviewLayout({children}:MyReviewLayoutProps)  {
  return (
    <div className='w-[100%]'>
        {children}
    </div>
  )
}

