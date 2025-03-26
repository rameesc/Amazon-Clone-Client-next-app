


import { Metadata } from 'next'
import React from 'react'


export const metadata:Metadata={
    title:"order failed",
    description:"order failed"
}

type LayoutFailedPageType={
    children:React.ReactNode
}

const LayoutFailedPage = ({children}:LayoutFailedPageType) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default LayoutFailedPage