'use client'
import React from 'react'
import {SessionProvider} from "next-auth/react"

type SessionProviderDataProsp={
    children:React.ReactNode
}
export const SessionProviderData = ({children}:SessionProviderDataProsp) => {

   
  return (
    <SessionProvider >
        {children}
    </SessionProvider>
  )
}
