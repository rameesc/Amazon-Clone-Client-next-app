'use client'


import React from 'react'

type TotalDataItemProps={
    title:string
    totalItem:number
}
export const TotalDataItem = ({title,totalItem}:TotalDataItemProps) => {
  return (
    <div className='flex gap-2 items-center font-semibold'>
        <h3 className=''>{title}</h3>
        <span className='text-red'>({totalItem})</span>
    </div>
  )
}
