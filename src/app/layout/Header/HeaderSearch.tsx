'use client'
import { SearchInputContainer } from '@/components/SearchInputContainer'
import { useSearchStore } from '@/hooks/useStore'
import React from 'react'
import { FaSearch } from 'react-icons/fa'

export const HeaderSearch = () => {

  const {setSearchItem,searchItem}=useSearchStore()
  return (
    <>
     <div onClick={()=>setSearchItem(!searchItem)} className=' border-2 border-yellow  cursor-pointer    rounded-full p-3 hover:bg-[#ccc]'>
     <span className='text-[18px]'><FaSearch/></span>
     
     </div>
    <SearchInputContainer/>
   </>
  )
}
