



import React, { Suspense } from 'react'
import { AddressItems } from './components/addressItems'
import { CartSkelTon } from '@/app/cart/components/CartSkelTon'

const AddressManage = () => {
  return (
    <Suspense fallback={<CartSkelTon/>}>
       <AddressItems/>
    </Suspense>
        
    
  )
}

export default AddressManage