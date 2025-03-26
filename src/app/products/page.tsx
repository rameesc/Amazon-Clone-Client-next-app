


import React from 'react'
import { ProductFilter } from './components/ProductFilter'
import { ProductItems } from './components/ProductItems'


 const ProudutsPage = () => {
  return (
    <div className='flex gap-5 relative'>
      
       <div className='hidden lg:flex'>
       <ProductFilter/>
       </div>
        
        <ProductItems/>
      
    </div>
  )
}
export default ProudutsPage
