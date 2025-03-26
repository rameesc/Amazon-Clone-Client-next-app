


import { Metadata } from 'next'
import React from 'react'


export const metadata:Metadata={
    title:"wishlist",
    description:'wishlist'
}

type WishlistLayoutProsp={
    children:React.ReactNode
}
const WishlistLayout = ({children}:WishlistLayoutProsp) => {
  return (
    <div className='w-[100%]'>
          
        {children}
    </div>
  )
}

export default WishlistLayout