


import React from 'react'

import { FaBoxOpen, FaRegUserCircle, FaFolder,FaPowerOff  } from 'react-icons/fa'


import { AccountSideBarItem } from './AccountSideBarItem'
import { UserAvatar } from '@/app/layout/Header/UserAvatar'
import { auth } from '@/auth'



export const accountSideBar=[
    {
        title:"MY ORDERS",
        icon:<FaBoxOpen/>,
        link:'/myOrder?status=active'
    },
    {
        title:"ACCOUNT SETTINGS",
        icon:<FaRegUserCircle/>,
         sub:[
            {
                title:'Profile information',
                link:'/account'

            },
            {
                title:'Manage Addresses',
                link:'/account/addressManage'

            },
         ]
    },
    {
        title:"MY STUFF",
        icon: <FaFolder/>,
        sub:[
            {
                title:'My Reviews & Ratings',
                link:'/account/myReview'

            },
            {
                title:'My Wishlist',
                link:'/account/wishlist'

            },
         ]
       
    },
    {
        title:"Log Out",
        icon:<FaPowerOff/>,
      
    },
   
]


export const AccountSideBar = async() => {

   const session=await  auth()
  const user={
   name:session?.user?.name,
   email:session?.user?.email,
   image:session?.user?.image,
   role:session?.user?.role,
   
  }

  return (
    <div className='flex flex-col gap-3'>

          <div className='flex gap-3 items-center bg-yellow p-5 rounded-md'>
               <UserAvatar/>
               <h1 className=' text-[20px] text-gray font-semibold'>{user?.name}</h1>
         </div>
        <div style={{boxShadow:"0px 0px 2px 0px"}} className='flex flex-col  bg-white  rounded-md'>
            {accountSideBar.map((item,index)=>(
                <AccountSideBarItem key={index} item={item}/>
                
            ))}

        </div>
    </div>
  )
}
