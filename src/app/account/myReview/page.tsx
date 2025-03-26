

import React, { Suspense } from 'react'
import { MyReviewItems } from './components/MyReviewItems'
import { ReviewSkelton } from '@/app/product/[productId]/components/ReviewSkelton'

 const MyReviewPage = () => {
  return (
     <Suspense fallback={<ReviewSkelton/>}>
        <MyReviewItems/>
     </Suspense>
      
   
  )
}

export default MyReviewPage
