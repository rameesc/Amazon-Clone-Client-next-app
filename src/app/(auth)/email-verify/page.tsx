
import React, { Suspense } from 'react'
import { EmailVerififcationItem } from '../components/EmailVerififcationItem'

const EmailVerification = () => {
  return (
    <div className='w-[100%] h-screen flex justify-center items-center'>
      <Suspense fallback={<div>loading</div>}>
       <EmailVerififcationItem/>

      </Suspense>
       
    </div>
  )
}

export default EmailVerification