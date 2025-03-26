



import React from 'react'
import { TopHeaderItem } from './TopHeaderItem'
import { HeaderLogo } from './HeaderLogo'
import { HeaderNavBar } from './HeaderNavBar'
import { HeaderRight } from './HeaderRight'
import { HeaderMenu } from './HeaderMenu'


const Header = () => {
  return (
    <div className='w-[100%]  border-b-2 flex  flex-col items-center'>
        <div className='w-containerW '>
           <TopHeaderItem/>
        </div>
        <div className='w-containerW p-2 flex justify-between items-center mt-[10px]'>
          <HeaderLogo/>
          <HeaderNavBar/>
          <HeaderRight/>
          <HeaderMenu/>
          
          
          
        </div>
    </div>
  )
}

export default Header