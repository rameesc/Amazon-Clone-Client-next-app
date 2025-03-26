

import React, { Suspense } from 'react'
import { WishlistItem } from './components/WishlistItem'
import { CartSkelTon } from '@/app/cart/components/CartSkelTon'

const WishlistPage = () => {
  return (
    <div className='w-containerW'>
      <Suspense fallback={<CartSkelTon/>}>
       <WishlistItem/>

      </Suspense>
     
    </div>
  )
}

export default WishlistPage