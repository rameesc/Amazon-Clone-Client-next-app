'use client'



import React from 'react'
import { Button } from '../ui/button'
import { ButtonLoading } from './ButtonLoading'


type ButtonItemProsp={
    title:string,
    type:"button"|"reset"|"submit",
    disabled?:boolean,
    style:string,

    onClick?:()=>void
}
export const ButtonItem = ({title,type,onClick,style,disabled}:ButtonItemProsp) => {
  return (
    <Button 
    onClick={onClick}
    disabled={disabled}
    className={style}
    type={type}
   >
    <div className='flex items-center gap-3'>
      <span> {title}</span>
     {disabled && <ButtonLoading/>}

    </div>
      
   </Button>
    
  )
}
