'use client'


import { useRouter } from 'next/navigation'
import React from 'react'
import { ButtonItem } from './ButtonItem'

export const LoginButton = () => {

    const router=useRouter()
  return (
    <div>
        <ButtonItem
          style='bg-Primary'
          title='Login'
          type='button'
          onClick={()=>router.push('/login')}
        />
    </div>
  )
}
