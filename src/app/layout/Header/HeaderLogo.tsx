'use client'

import Link from 'next/link'
import React from 'react'

export const HeaderLogo = () => {
  return (
    <div>
        <h1 className='text-Primary text-[33px]  font-bold'>
            <Link href={'/'}>Shopping</Link>
        </h1>
    </div>
  )
}
