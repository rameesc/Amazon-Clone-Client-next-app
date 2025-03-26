'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export const navBar=[
    {
        title:"Home",
        link:'/'
    },
    {
        title:"Contact",
        link:'/contact'
    },
]

export const HeaderNavBar = () => {
    const pathName=usePathname()

  
  return (
    <div className=' hidden gap-2 md:flex   sm:hidden '>
        {navBar?.map((item,index)=>(
            <Link 
             href={item.link}
             key={index}
             className={clsx('text-[18px]',
                pathName==item.link ?'text-Primary font-semibold':"text-gray hover:text-Primary"
             )}
            >
                {item.title}
            </Link>
        ))}
    </div>
  )
}
