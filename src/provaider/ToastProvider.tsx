'use client'


import React from 'react'
import {Toaster} from "react-hot-toast"

export const ToastProvider = () => {
  return (
    <div>
        <Toaster
          toastOptions={{
            removeDelay:3000
          }}
          position="top-center"
        />
    </div>
  )
}
