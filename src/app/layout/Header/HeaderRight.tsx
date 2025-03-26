


import React from 'react'

import { HeaderUser } from './HeaderUser';
import { HeaderCart } from './HeaderCart';
import { HeaderSearch } from './HeaderSearch';
import { auth } from '@/auth';

import { LoginButton } from '@/components/Button/LoginButton';

export const HeaderRight =async () => {

  const session=await auth()
  return (
    <div className=' hidden md:flex gap-5 items-center  text-Primary'>
        <HeaderSearch/>
      
        <HeaderCart/>
        {session?.user?.email ?(
          <HeaderUser/>

        ):(
          <LoginButton/>
        )}
        
        
    </div>
  )
}
