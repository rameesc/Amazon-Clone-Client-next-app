'use client'


import clsx from 'clsx'
import React from 'react'

type ProductItemTitleType={
    title:string
    style?:string
}

export const ProductItemTitle = ({title,style}:ProductItemTitleType) => {
  return (
    <div>
        <h1 className={clsx(
            style ? style :' text-[25px] font-semibold'
        )}>{title}</h1>
    </div>
  )
}
