'use client'


import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

import { FaStar } from 'react-icons/fa'

type FilterItemsType={
    name:string,
    data:string[]|number[]
    
}
export const FilterItems = ({data,name}:FilterItemsType) => {
    const search=useSearchParams()
    const router=useRouter()
    const pathName=usePathname()


    const updateSearchParams=(key:string,value:string|number)=>{

        const params=new URLSearchParams(search.toString())
       
        if(value){
            params.set(key,value.toString())
        }else{
            params.delete(key)
        }

        router.push(`${pathName}?${params.toString()}`,{scroll:false})

    }
   
  return (
    <div className='border-2 border-borderColor p-3'>
       <h2 className=' font-semibold'>{name}</h2>
       {data.map((item,index)=>(
        <div key={index} className='flex gap-3'>
          
          
          {name=='Rating'?(
            <div className='flex gap-3 cursor-pointer'>
              <input 
               className='cursor-pointer' 
               type="radio"  
               checked={search.get(name) ===item.toString()} 
               name={name} 
               id={item.toString()+'star'}  
               onChange={()=>updateSearchParams(name,item)}
              
              />
            
              <label  htmlFor={item.toString()+'star'} className='flex gap-2 cursor-pointer'>
                
                {[...Array(item)].map((_,index)=>(
                  <FaStar  key={index} className='text-Primary' size={20}/>
                     
                ))}
              </label>
            </div>

          ):(
            <div className='flex gap-3 cursor-pointer'>
              <input 
               className='cursor-pointer' 
               type="radio"    
               checked={search.get(name)===item.toString()} 
               name={name} 
               id={item.toString()}  
               onChange={()=>updateSearchParams(name,item)}
              />
              
              <label className=' cursor-pointer' htmlFor={item.toString()}>{name=='Discount'?item+'%':item}</label>
            </div>
          )}
         
        </div>
       ))}
     </div>
  )
}
