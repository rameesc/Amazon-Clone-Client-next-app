'use client'


  
  

import React from 'react'
import { HeaderSearch } from './HeaderSearch'
import { HeaderCart } from './HeaderCart'

import { HeaderLogo } from './HeaderLogo'
import { MobleNavBar } from './MobleNavBar'
import { UserClinetAvatar } from './UserClinetAvatar'
import { useRouter } from 'next/navigation'



export const MobelScreen = () => {
const router=useRouter()
  return (
    <div className=' flex flex-col gap-3'>
        
          <HeaderLogo/>
       
         <MobleNavBar/>
        <div className='flex items-center gap-2 text-Primary'>
         <HeaderSearch/>
         <HeaderCart/>
         <div className=' cursor-pointer' onClick={()=>router.push(`/account`)}>
         <UserClinetAvatar/>
        </div>
         
        
         
       </div>
       
          
         
    </div>
  )
}
