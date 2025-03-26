


import { Metadata } from 'next'
import React, { Suspense } from 'react'

import { MobleScreenFilter } from './components/MobleScreenFilter'
import { LodingComponents } from '@/components/Loading/LodingComponents'


export const metadata:Metadata={
    title:"products",
    description:"products"
}

type ProductLayoutProsp={
    children:React.ReactNode
}
const ProductLayout = ({children}:ProductLayoutProsp) => {
  return (
    <div className='flex justify-center flex-col items-center '>
    <Suspense fallback={<LodingComponents/>}>
      <MobleScreenFilter/>
        <div className='w-containerW mt-[50px]'>
          {children}
        </div>
      </Suspense>
      
    </div>
  )
}

export default ProductLayout
