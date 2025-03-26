

import React, { Suspense } from 'react'
import { ProductReviewItems } from './components/ProductReviewItems'

const ProductReviewPage = () => {
  return (
    <Suspense fallback={<div>ladong</div>}>
       <ProductReviewItems/>

    </Suspense>
       
    
  )
}

export default ProductReviewPage