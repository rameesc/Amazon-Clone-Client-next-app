'use client'


import Link from 'next/link'
import React from 'react'

type FormCartProps={
    title:string,
    children:React.ReactNode,
    description:string,
    link:string

}
export const FormCart = ({title,children,description,link}:FormCartProps) => {
  return (
    <div className="border-2 p-5 rounded-md border-Primary">
        <div>
            <h1 className='text-Primary font-bold text-[34px]'>{title}</h1>
        </div>
        
         {children}

        <div className='mt-2'>
         <p className='text-sm text-gray'>
            {description} 
            <Link  
             className='text-blue pl-2'
             href={link}>
                Click here
            </Link>

         </p>
        </div>

    </div>
  )
}
