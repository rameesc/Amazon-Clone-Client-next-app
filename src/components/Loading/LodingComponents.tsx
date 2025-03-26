'use client'



import React from 'react'
import { BounceLoader } from 'react-spinners'

export const LodingComponents = () => {
  return (
    <div className=' fixed top-0 left-0 z-10 w-[100%] h-[100%] bg-[#2e2828d0] flex justify-center items-center'>
       <div className='bg-white rounded-md p-5 absolute top-[20%]'>
        <BounceLoader />
       </div>
    </div>
  )
}
