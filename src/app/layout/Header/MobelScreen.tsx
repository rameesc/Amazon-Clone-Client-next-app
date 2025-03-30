'use client'


  
  

import React from 'react'
import { HeaderSearch } from './HeaderSearch'
import { HeaderCart } from './HeaderCart'

import { HeaderLogo } from './HeaderLogo'
import { MobleNavBar } from './MobleNavBar'
import { UserClinetAvatar } from './UserClinetAvatar'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { LoginButton } from '@/components/Button/LoginButton'


export const MobelScreen = () => {
const router=useRouter()
  const {data}=useSession()

  

  return (
    <div className='flex flex-col gap-3'>
        
          <HeaderLogo/>
       
         <MobleNavBar/>
        <div className='flex items-center gap-3 text-Primary'>
         <HeaderSearch/>
         <HeaderCart/>
         <div className=' cursor-pointer ml-2' >
          {data?.user.email ?(
            <div onClick={()=>router.push(`/account`)}>
               <UserClinetAvatar />
            </div>
           
          ):(
            <LoginButton/>

          )}
         
        </div>
         
        
         
       </div>
       
          
         
    </div>
  )
}
