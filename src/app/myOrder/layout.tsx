



import { Metadata } from 'next'
import React, { Suspense } from 'react'
import { OrderFilter } from './components/OrderFilter'
import { LodingComponents } from '@/components/Loading/LodingComponents'

export const metadata:Metadata={
    title:"my orders",
    description:"my orders"
}

type MyOrderLayoutType={
    children:React.ReactNode
}

const MyOrderLayout = ({children}:MyOrderLayoutType) => {
  return (
    <div className='flex flex-col  items-center'>
        <div className='w-containerW mt-[50px] flex gap-4'>
          <Suspense fallback={<LodingComponents/>}>
           <OrderFilter/>
           {children}
         </Suspense>
        </div>
       
    </div>
  )
}

export default MyOrderLayout