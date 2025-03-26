'use client'


import React from 'react'
import { Button } from '../ui/button'
import clsx from 'clsx'

type CustomeBtnType={
    children:React.ReactNode,
    style:string,
    onclick?:()=>void,
    disabled?:boolean


}
export const CustomeBtn = ({children,style,onclick,disabled}:CustomeBtnType) => {
  return (
   <Button 
    className={clsx(style && style)}
    onClick={onclick}
    disabled={disabled}
    >
    {children}
   </Button>
  )
}
