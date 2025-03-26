

import { Metadata } from 'next'
import React from 'react'

type OrderStatusLayoutType={
    children:React.ReactNode
}
export const metadata:Metadata={
    title:"order status",
    description:"order status"
}
 const OrderStatusLayout = ({children}:OrderStatusLayoutType) => {
  return (
    <div className='flex justify-center flex-col items-center mt-[50px]'>
      <div className='w-containerW'>
        {children}
      </div>
       
    </div>
  )
}

export default OrderStatusLayout
