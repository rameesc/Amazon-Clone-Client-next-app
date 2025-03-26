import { Metadata } from 'next'
import React from 'react'



export const metadata:Metadata={
    title:'contact',
    description:"contact"
}
type ContactLayoutType={
    children:React.ReactNode
}
const ContactLayout = ({children}:ContactLayoutType) => {
  return (
    <div className='w-[100%] flex flex-col justify-center items-center'>
        <div className='w-containerW mt-[50px]'>
            {children}
        </div>
    </div>
  )
}

export default ContactLayout