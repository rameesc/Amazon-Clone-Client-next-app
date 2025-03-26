


import { Metadata } from 'next'
import React from 'react'

type EmailVerificationLayoutProsp={
    children:React.ReactNode
}

export const metadata:Metadata={
    title:"email verification",
    description:"e,ail verification"
}
const EmailVerificationLayout = ({children}:EmailVerificationLayoutProsp) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default EmailVerificationLayout