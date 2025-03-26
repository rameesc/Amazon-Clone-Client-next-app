'use client'




import { ButtonItem } from '@/components/Button/ButtonItem'
import { CustomeDrawer } from '@/components/Drawer/CustomeDrawer'
import React, { useState } from 'react'

import { accountSideBar } from './AccountSideBar'
import { AccountSideBarItem } from './AccountSideBarItem'

export const MobleScreenAccountSilbar = () => {
    const [isOpen,setIsOpne]=useState(false)


   
  return (
    <div  className='bg-Light border-2 border-b-borderColor p-5 w-[100%] block md:hidden '>
        <ButtonItem
         title='Account Menu'
         type='button'
         style='bg-Primary'
         onClick={()=>setIsOpne((pre)=>!pre)}

        />
        <CustomeDrawer
         open={isOpen}
         onClose={()=>setIsOpne(false)}
         title='Account Menu'

        >
          <div style={{boxShadow:"0px 0px 2px 0px"}} className='flex flex-col  bg-white  rounded-md'>
            {accountSideBar?.map((item,index)=>(
                <AccountSideBarItem key={index} item={item}/>
                
            ))}

          </div>

        </CustomeDrawer>
    </div>
  )
}
