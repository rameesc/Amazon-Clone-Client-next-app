'use client'




import { Button } from '@/components/ui/button'
import React from 'react'
import {signOut,useSession} from "next-auth/react"

export const LogOutBtn = () => {

    const {data}=useSession()

    
  return (
    <div>

       <p>{data?.user?.accessToken}</p>

       <p>refresh toke</p>
       <p>{data?.user?.refreshToken}</p>
      
        <Button onClick={()=>signOut({redirectTo:"/login"})}>LogOut</Button>
    </div>
  )
}
