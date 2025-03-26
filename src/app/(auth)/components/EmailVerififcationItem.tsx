
'use client'


import React, {  useEffect } from 'react'
import { FormCart } from './FormCart'
import {  useSearchParams } from 'next/navigation'
import {ClipLoader} from "react-spinners"
import { useQueryEmailVerification } from '@/hooks/useQuertAuth'

import clsx from 'clsx'

export const EmailVerififcationItem = () => {
    const search=useSearchParams()
    
    const {mutate,isPending,isSuccess,data}=useQueryEmailVerification()
   const token= search.get("token")

   

 useEffect(()=>{
    mutate(token as string)

 },[mutate,token])

 
  return (
    <div>
        <FormCart
         title='Email verification'
         description='go back to login'
         link='/login'

        >
            <div>
               

              <div className={clsx('border-2 border-[#2c27279c] rounded-md p-2 flex items-center gap-2',
                data?.status ? "bg-[#bfeebe]":"bg-[#e0aaaa]"
              )}>
                <div>
                   {!isSuccess ?(
                     <p>Email verification</p>
                   ):(
                     <p className={clsx('',
                         data?.status ? "text-[#186917]":"text-[#8d1e1e]"
                     )}>{data?.message}</p>
                   )}
                </div>
               {isPending && <ClipLoader/>}

              </div>

            </div>
           
           

        
        </FormCart>
    </div>
  )
}
