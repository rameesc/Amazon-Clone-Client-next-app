

import { Metadata } from 'next'
import React from 'react'

type CartLayoutProps={
    children:React.ReactNode
}

export const metadata:Metadata=({
    title:"cart",
    description:"cart items"
})
const CartLayout = ({children}:CartLayoutProps) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default CartLayout