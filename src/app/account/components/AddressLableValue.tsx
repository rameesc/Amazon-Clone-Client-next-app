'use clinet'


import React from 'react'

type AddressLableValueType={
    label:string,
    value:string
}

export const AddressLableValue = ({label,value}:AddressLableValueType) => {
  return (
    <div className='flex gap-3'>
            <h1 className=' font-semibold'>
                {label}
            </h1>
            <span>{value}</span>
        </div>
  )
}
