'use client'


import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useRef, useState } from 'react'
import toast from 'react-hot-toast'

const orderStatus=[
    {
        label:"active",
        value:"active"
    },
    {
        label:"cancel",
        value:"cancel"
    },
    {
        label:"return",
        value:"return"
    },
    {
        label:"complete",
        value:"complete"
    },
    {
        label:"tobereturned",
        value:"tobereturned"
    },
    {
        label:"approve",
        value:"approve"
    },
    {
        label:"dispatch",
        value:"dispatch"
    },
]


export const OrderFilter = () => {
    const search=useSearchParams()
    const pathName=usePathname()

    const [statusValue,setStatusValue]=useState<string[]>([])
    const useRefInput=useRef(null)
    const router=useRouter()

  
   
   
   
   const updateQueryParams = (newStatus: string[]) => {
    
     // Add status filters
    router.push(`${pathName}?status=${newStatus.join(',')}`, { scroll: false }); // Update URL
    
  };


    const statusHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{

        const itemValue=e.target.value

        toast.error(search.get('status'))
       
       const itemFilter= statusValue.includes(itemValue)?
        statusValue.filter((item)=>item!==itemValue)
        : [...statusValue,itemValue]

        setStatusValue(itemFilter)
           
        updateQueryParams(itemFilter)
        


    }
    const removeStatusHandler=(value:string)=>{
        const filterItem= statusValue.filter((item)=>item!==value)
        
        
        setStatusValue(filterItem)
        updateQueryParams(filterItem)

    }
    const clearAllStatus=()=>{
        router.push(`/myOrder`)
        setStatusValue([])
    }
   
  return (
    <div className='flex flex-col gap-2 border-[3px] rounded-md  border-Primary p-5'>
        <h1 className='text-[27px] font-semibold'>Filters</h1>
        <div className='flex flex-col gap-3'>
            
            <h2 className='font-semibold'>ORDER STATUS</h2>
            <div className='flex flex-col gap-2 flex-wrap'>
                {statusValue?.length>=1 && 
                 <div 
                  className=' self-end'
                  onClick={clearAllStatus}
                 >
                 <p className='text-sky-600 cursor-pointer'>Clear All</p>
                </div>
                }
                {statusValue.map((item,index)=>(
                    <div 
                     key={index}
                     onClick={()=>removeStatusHandler(item)}
                     className='bg-slate-400 p-1 rounded-md hover:line-through hover:bg-red cursor-pointer '>
                        <span>{item}</span>
                        
                    </div>
                ))}
            </div>
            <div className='flex flex-col gap-2'>
                {orderStatus.map((item,index)=>(
                    <div 
                      className='flex items-center gap-3'
                      key={index}>

                      <input 
                      ref={useRefInput}
                       className='w-[18px] h-[18px]'
                       type="checkbox" value={item.value} name={item.value} id={item.value} 
                         onChange={statusHandler}
                         checked={statusValue.includes(item.value)}
                       />
                      <label
                       className='text-[18px]'
                       htmlFor="">{item?.label}</label>
                     </div>

                ))}
                
            </div>
        </div>
    </div>
  )
}
