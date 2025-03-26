'use client'


import React from 'react'
import {ClipLoader} from "react-spinners"


export const ButtonLoading = () => {
  return (
    <div>
        <ClipLoader 
         color='white'
         size={20}
        />
    </div>
  )
}
