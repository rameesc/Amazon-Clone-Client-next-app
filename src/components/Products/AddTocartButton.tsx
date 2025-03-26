'use client'


import clsx from 'clsx'
import React from 'react'

type AddTocartButtonType={
    onClick:()=>void
    style:string,
    children:React.ReactNode
}

export const AddTocartButton = ({onClick,style,children}:AddTocartButtonType) => {
  return (
    <div
     onClick={onClick} 
     className={clsx(style && style)}
    >
        {children}
    </div>
  )
}
