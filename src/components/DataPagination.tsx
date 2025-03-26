'use client'


import { usePathname,useRouter, useSearchParams } from 'next/navigation'
import { MdOutlineNavigateNext } from "react-icons/md";
import { MdOutlineChevronLeft } from "react-icons/md";
import React from 'react'

import { Button } from './ui/button'
import clsx from 'clsx';
type PaginationType={
    pagination:number
    totalCount:number
}
export const DataPagination = ({pagination,totalCount}:PaginationType) => {

    const search=useSearchParams()

    const patthName=usePathname()
    const router=useRouter()
    
    //page target or current page
     const target=Number(search.get('page'))||1

    const limitPage=10
   
    const paginatinArray=[...Array(pagination)].map((_,index)=>index+1)

    //pagination last item
    // const lastitem=[paginatinArray.length][0]

    if(totalCount <= limitPage){

          return null
    }

    const paginationHandler=(pageNumber:number)=>{


        router.push(`${patthName}?page=${pageNumber}`)

    }

    const pageNextHandler=()=>{
      router.push(`${patthName}?page=${target+1}`)
    }

    const pagePreHandler=()=>{
       

      router.push(`${patthName}?page=${target-1}`)
    }
    
    
  return (
    <div className=' flex gap-2 items-center mt-5'>
      
      <div className={clsx('flex gap-2',
          target==1 &&'hidden'
         )}
        >

        
        <Button onClick={pagePreHandler} className={clsx('flex gap-2')}>
         <MdOutlineChevronLeft/>
         <span>Pre</span>
        </Button>
        <span>...</span>

      </div>

      <div className='flex gap-2 '>
        
        {paginatinArray.slice(target-1,target+2).map((page)=>(
            <span 
             key={page}
             onClick={()=>paginationHandler(page)}
             className={clsx(' font-semibold p-2 cursor-pointer   border-2 border-gray-600 rounded-md',
               target==page ?'bg-Primary text-white':'bg-white text-black'
              )}>{page}</span>
        ))}
      </div>
      <div className={clsx('flex gap-2',
        paginatinArray.slice(-3).includes(target) &&'hidden'
       )}>

       <span>...</span>
       <Button onClick={pageNextHandler} className={clsx('flex gap-2')}>
         <span>Next</span>
         <MdOutlineNavigateNext/>
       </Button>

      </div>
     
    </div>
  )
}
