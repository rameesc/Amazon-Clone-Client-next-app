'use client'

import React from 'react'
import { ContactForm } from './ContactForm'
import { ContactInformation } from './ContactInformation'
import { OurMap } from './OurMap'

export const ContactItem = () => {
  return (
    <div className='flex flex-col  space-y-3 w-[100%]'>
        
         
         <ContactInformation/>
         <ContactForm/>
        <OurMap/>
    </div>
  )
}
