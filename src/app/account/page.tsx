


import React from 'react'

import { ProfileInformation } from './components/ProfileInformation'
import { UserAvatar } from '../layout/Header/UserAvatar'

const AccountPage = () => {
 
  return (
    <div className='flex flex-col gap-3 w-[100%]'>
        <UserAvatar size={'100'}/>
        <ProfileInformation/>
        
    </div>
  )
}

export default AccountPage