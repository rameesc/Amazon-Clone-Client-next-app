'use client'


import { ButtonItem } from '@/components/Button/ButtonItem'
import { CustomeDrawer } from '@/components/Drawer/CustomeDrawer'
import React, { useState } from 'react'
import { ProductFilter } from './ProductFilter'

export const MobleScreenFilter = () => {

    const [isOpen,setIsOpne]=useState(false)
  return (
    <div className=' bg-Light w-[100%] block lg:hidden p-5  border-b-[3px]  '>
        <ButtonItem
         onClick={()=>setIsOpne((pre)=>!pre)}
         style='bg-Primary font-semibold tracking-wide hover:bg-[#6fa136]'
         title='Product Filter'
         type='button'
        />
        <CustomeDrawer
         title='Product Filter'
         onClose={()=>setIsOpne(false)}
         open={isOpen}
        >
          <ProductFilter/>
        

        </CustomeDrawer>
    </div>
  )
}
