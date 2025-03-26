'use client'

import React from 'react'
import {useSession} from "next-auth/react"
import { AddressLableValue } from './AddressLableValue'
export const ProfileInformation = () => {
    const {data}=useSession()

    
  return (
    <div className='border-2 p-5 border-gray  rounded-md'>
        
        <AddressLableValue
          label='Name:'
          value={data?.user?.name as string}
        />
        <AddressLableValue
          label='Email:'
          value={data?.user?.email as string}
        />
        <AddressLableValue
          label='Role:'
          value={data?.user?.role as string}
        />
       
        
    </div>
  )
}
