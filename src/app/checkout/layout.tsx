
import { Metadata } from 'next'
import React from 'react'


type CheckOutLayoutType={
    children:React.ReactNode
}

export const metadata:Metadata={
    title:'check out ',
    description:"check out"
}
const CheckOutLayout = ({children}:CheckOutLayoutType) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default CheckOutLayout