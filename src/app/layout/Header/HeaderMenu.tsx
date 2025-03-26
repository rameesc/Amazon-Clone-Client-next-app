'use client'


import { CustomeDrawer } from '@/components/Drawer/CustomeDrawer';
import React, { useState } from 'react'
import { RiMenu3Fill } from "react-icons/ri";
import { MobelScreen } from './MobelScreen';
export const HeaderMenu = () => {
    const [opne,setOpen]=useState(false)
  return (
    <>
     <div onClick={()=>setOpen((pre)=>!pre)} className='border-2 border-Primary p-2 rounded-md cursor-pointer lg:hidden md:hidden'>
        <RiMenu3Fill className='text-[25px] text-Primary font-bold'/>
     </div>
     <CustomeDrawer
      title='menu'
      open={opne}
      onClose={()=>setOpen(false)}
      >
        <MobelScreen/>
     </CustomeDrawer>

    </>
  )
}
