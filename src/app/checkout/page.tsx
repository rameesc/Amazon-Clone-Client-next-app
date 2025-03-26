import React, { Suspense } from 'react'
import { CheckOutItem } from './components/CheckOutItem'

const CheckOutPage = () => {
  return (
    <Suspense fallback={<div>loading</div>}>
      <CheckOutItem/>

    </Suspense>
        
   
  )
}

export default CheckOutPage