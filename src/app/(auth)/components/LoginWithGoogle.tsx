'use clinet'



import { images } from '@/images'
import Image from 'next/image'
import React from 'react'
import {signIn}  from 'next-auth/react'

export const LoginWithGoogle = () => {

  const googleLoginHangler=()=>{
    signIn("google")

  }
  return (
    <div className=' relative'>
     <div onClick={googleLoginHangler} className=' border-t border-Primary mt-5  after:absolute after:content-["or"] text-Primary  after:top-[-10px] after:w-[30px] after:bg-white after:left-[50%] after:text-center after:translate-x-[-50%] '>
        
        <div className='flex items-center gap-1 hover:bg-[#e0d7d7] border-2 cursor-pointer mt-5 border-Primary rounded-md'>
            <Image
              src={images?.google}
              alt='google'
              width={50}
              height={50}
             
            />
            <span className='text-black'>Login With Google</span>
        </div>
     </div>
    </div>
  )
}






