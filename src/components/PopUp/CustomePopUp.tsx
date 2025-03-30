'use client'


import clsx from 'clsx'
import React from 'react'

type CustomePopUpType={
    children:React.ReactNode
    open:boolean
    onClose:()=>void
}
export const CustomePopUp = ({children,onClose,open}:CustomePopUpType) => {

   
  return (
    <div className={clsx(' fixed top-0 left-0 z-10 w-[100%] h-screen bg-[#00000065]',
        open?'block':'hidden'
    )}>
        <div className=' rounded-lg absolute inset-[50%] p-5 bg-white w-[100%] sm:w-[400px] h-[500px] translate-x-[-50%] translate-y-[-50%]'>
            <div className='absolute top-[30px] p-5'>
              {children}
            </div>
             <div onClick={onClose} className=' cursor-pointer absolute top-2 right-5 w-[40px] h-[40px] flex justify-center items-center border-2 hover:border-red rounded-full'>
                <h1 className='text-[30px] text-red font-semibold'>x</h1>
             </div>
        </div>
    </div>
  )
}
