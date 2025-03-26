
'use client'

import React from 'react'
import { navBar } from './HeaderNavBar'
import Link from 'next/link'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'

export const MobleNavBar = () => {

  const pathName=usePathname()
  return (
    <div className='flex flex-col gap-2'>
      {navBar?.map((item)=>(
        <div key={item?.title} className={clsx('p-2 text-[20px]  hover:bg-[#77737365] ',
          pathName==item?.link?'bg-Primary font-semibold rounded-md':"hover:bg-Primary hover:font-semibold"
        )}>
          <Link href={item?.link}>{item?.title}</Link>
        </div>
      ))}
    </div>
  )
}

