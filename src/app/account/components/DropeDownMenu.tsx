'use client'



import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
   
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { FaRegUserCircle } from "react-icons/fa";
  import { FaBoxOpen } from "react-icons/fa";
  import { FaHeart } from "react-icons/fa";
import { useRouter } from 'next/navigation';


  type DropdownMenuType={
    children:React.ReactNode
  }
export const DropeDownMenu = ({children}:DropdownMenuType) => {

    const router=useRouter()
    const accountList=[
        {
            title:"MY Account",
            icon:<FaRegUserCircle/>,
            link:'/account'
        },
        {
            title:"Orders",
            icon:<FaBoxOpen/>,
            link:'/myOrder?status=active'
        },
        {
            title:"Whishlist",
            icon: <FaHeart/>,
            link:'/account'
        },
        
    ]
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {children}
      </DropdownMenuTrigger>
        <DropdownMenuContent>
           {accountList.map((item,index)=>(
             <DropdownMenuItem key={index} className=' cursor-pointer' onClick={()=>router.push(item.link)}>
                <span>{item.icon}</span>
                <span>{item?.title}</span>
             </DropdownMenuItem>
           ))}     
        </DropdownMenuContent>
    </DropdownMenu>

  )
}
