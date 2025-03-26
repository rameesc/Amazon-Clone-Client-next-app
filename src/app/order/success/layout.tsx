


import { Metadata } from 'next'
import React from 'react'


export const metadata:Metadata=({
    title:"order success",
    description:"order success"
    
})

type SuccessLayoutPageType={
    children:React.ReactNode
}
const SuccessLayoutPage = ({children}:SuccessLayoutPageType) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default SuccessLayoutPage