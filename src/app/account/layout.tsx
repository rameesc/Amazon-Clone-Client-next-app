



import { Metadata } from 'next'
import React from 'react'
import { AccountSideBar } from './components/AccountSideBar'
import { MobleScreenAccountSilbar } from './components/MobleScreenAccountSilbar'


export const metadata:Metadata={
    title:"my profile",
    description:'my profile'
}
type AccountLayoutProsp={
    children:React.ReactNode
}

const AccountLayout = ({children}:AccountLayoutProsp) => {

  
  return (
    <div className='flex flex-col justify-center   gap-3 items-center ' >
      
      <MobleScreenAccountSilbar/>
      <div className='w-containerW flex gap-5 mt-10'>
        <div className=' hidden md:block'>
        
          <AccountSideBar/>
        </div>
       
        {children}
      </div>
     
    </div>
  )
}

export default AccountLayout