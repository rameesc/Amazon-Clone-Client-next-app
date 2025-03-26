import React, { Suspense } from 'react'
import { ContactItem } from './components/ContactItem'

const ContactPage = () => {
  return (
    <Suspense fallback={<div>loading</div>}>
      <ContactItem/>

    </Suspense>
      
   
  )
}

export default ContactPage