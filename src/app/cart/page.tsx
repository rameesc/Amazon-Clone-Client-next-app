

import React, { Suspense } from 'react'
import { CartItems } from './components/CartItems'
import { CartSkelTon } from './components/CartSkelTon'


const CartPage = () => {
  return (
    <div>
      <Suspense fallback={
        <div className='w-containerW'>
         <CartSkelTon/>
        </div>

       }>
       <CartItems/>

      </Suspense>

       
    </div>
  )
}

export default CartPage