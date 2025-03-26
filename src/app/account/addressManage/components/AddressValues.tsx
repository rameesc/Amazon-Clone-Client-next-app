'use client'

import { AddressTypes } from '@/app/types/type'
import React from 'react'
import {useSession} from "next-auth/react"

type AddressValuesType={
    addressValue:AddressTypes
}
export const AddressValues = ({addressValue}:AddressValuesType) => {

    const {data}=useSession()
  return (
    <div className=' border-2 border-[#cccc] rounded-md p-5 flex flex-col gap-2'>
        <span className='w-[100px] text-center  rounded-md text-gray bg-[#dfdbdb73] p-1'>{addressValue.label}</span>
        <div className='flex  items-center gap-3  font-semibold'>
            <span>{data?.user?.name}</span>
            <span>{addressValue?.phone}</span>
        </div>
        <div>
            <span>{addressValue?.address}-</span>
            <span>{addressValue?.pinCode}</span>
        </div>
    </div>
  )
}
