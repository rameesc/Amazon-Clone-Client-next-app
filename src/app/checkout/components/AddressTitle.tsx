'use client'

import React from 'react'

type AddressTitleType={
    title:string,
    value:string
}
const AddressTitle = ({title,value}:AddressTitleType) => {
  return (
    <div>
     <h1 className='font-semibold'>{title}</h1>
     <span>{value}</span>
   </div>
  )
}

export default AddressTitle