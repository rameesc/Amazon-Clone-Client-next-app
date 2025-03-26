'use client'

import React from 'react'
import { SearchInput } from './SearchInput'
import clsx from 'clsx'
import { useSearchStore } from '@/hooks/useStore'


export const SearchInputContainer = () => {

    const {searchItem,setSearchItem}=useSearchStore()

    
    const SearchContainerHandler=()=>{
        setSearchItem(false)
      
       

    }
  return (
    <div className={clsx('z-[100] w-[100%] h-[400px] bg-[#cccc] flex justify-center  items-center',
        searchItem ? ' fixed left-0 top-[0px] duration-1000 ease-in-out ':' duration-1000 ease-in-out fixed left-0 top-[-400px]'

    )}>
        
        <div onClick={SearchContainerHandler} className=' cursor-pointer absolute right-[10px] top-[10px] hover:border-2 transition-all hover:duration-700 hover:ease-in-out border-red  w-[80px] flex justify-center items-center h-[80px] rounded-full'>
            <h1  className='text-red text-[40px] font-semibold'>x</h1>
        </div>
        <SearchInput/>
    </div>
  )
}
