

import { Metadata } from 'next'
import React from 'react'

export const metadata:Metadata={
    title:"address manage",
    description:"address manage"
}

type AddressManageType={
    children:React.ReactNode
}
const AddressManageLayout = ({children}:AddressManageType) => {
  return (
    <div className='w-containerW'>
        {children}
    </div>
  )
}

export default AddressManageLayout