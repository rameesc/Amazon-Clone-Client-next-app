'use client'



import React from 'react'
import {Drawer} from "antd"

type CustomeDrawerProsp={
    title:string,
    onClose:()=>void,
    open:boolean
    children:React.ReactNode
}

export const CustomeDrawer = ({onClose,open,children}:CustomeDrawerProsp) => {

  return (
    <Drawer
      title='Menu'
      placement='left'
      onClose={onClose}
      open={open}
    >
       {children}
    </Drawer>
  )
}
