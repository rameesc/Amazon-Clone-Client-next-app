'use client'


import clsx from 'clsx';

import React from 'react'
import { FaStar } from "react-icons/fa";
type StarRatingProps={
    star:number
}
export const StarRating = ({star}:StarRatingProps) => {
  return (
    <div className={clsx(`flex items-center gap-1 text-white w-[50px]  rounded-full p-[2px] justify-center`,
      star>=3 ?'bg-green':'bg-red'
    )}>
      <span className='font-semibold text-[18px]'>{star}</span>
      <FaStar size={15}/>
    </div>
  )
}
