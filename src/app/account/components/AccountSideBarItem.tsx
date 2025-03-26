'use client'


import clsx from 'clsx';
import Link from 'next/link';

import { useRouter,usePathname } from 'next/navigation';
import React from 'react'
import {signOut} from "next-auth/react"

type AccountSideBarItemType={
   item:{
    title: string;
    icon:React.JSX.Element;
    link?: string;
    sub?:{
        title:string,
        link:string
    }[]
   }
}
export const AccountSideBarItem = ({item}:AccountSideBarItemType) => {

    const router=useRouter()
    const pathName=usePathname()
    
    const routerHandler=()=>{
        if(item?.link){
          router.push(item?.link)
        }

    }

    const logOutHandler=()=>{
        signOut({redirectTo:'/login'})

    }
  return (
    <div className=' border-t-2 border-gray p-5'>
     <div 
        
      onClick={()=>{
        routerHandler()
        if(item?.title=='Log Out'){
          logOutHandler()

        } 

      }} 
                   
      className={clsx('flex gap-3 items-center',
         item?.link && 'cursor-pointer hover:text-blue'
      )}
     >
       
         <span className='text-[20px] text-Primary'>{item.icon}</span>
         <span className={clsx(' font-semibold text-gray text-[20px]',
            item?.link && 'cursor-pointer hover:text-blue',
            item.title=='Log Out' &&'cursor-pointer hover:text-blue'
         )}>{item.title}</span>
     </div>
     <div className=' space-y-2'>
        {item.sub?.map((subItem,subIndex)=>(
         <div 
             key={subIndex}
             className=' pl-[30px]'
         >
        
             <Link href={subItem?.link}>
                 <span className={clsx(' tracking-wide hover:text-blue',
                    pathName==subItem?.link &&"text-blue "
                 )}>{subItem?.title}</span>
             </Link>
         </div>
        ))}
     </div>
    </div>
  )
}
