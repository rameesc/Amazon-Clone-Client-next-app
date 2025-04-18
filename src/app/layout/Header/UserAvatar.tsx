

import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { FaUser } from 'react-icons/fa'
import { auth } from '@/auth'
import clsx from 'clsx'


type UserAvatarType={
  size?:string
}
export const UserAvatar =async ({size}:UserAvatarType) => {

    const session=await  auth()
   const user={
    name:session?.user?.name,
    email:session?.user?.email,
    image:session?.user?.image,
    role:session?.user?.role,
    
   }

    
  return (
    <div>
         {user.email? (
           
           <div>
               {user.image ?(
               
                   <Image
                    
                    src={user?.image}
                    alt='image'
                    width={30}
                    height={30}
                    className={clsx('hover:border-[3px] border-Primary  rounded-full',
                      size?`w-[${size}px] h-[${size}px]`:'w-[40px] h-[40px]'
                    )}
                   />
                 
               ):(
               
                   <div className={clsx('hover:bg-[#53b42d]  bg-Primary  font-bold text-[20px]  text-black rounded-full flex items-center justify-center',
                    size ?`w-[${size}px] h-[${size}px]`:"w-[40px] h-[40px]"
                   )}>
                       <span>{user?.email?.charAt(0)}</span>
                      
                   </div>


               )}

           </div>
          
           
       ):(
         <span className='text-[32px]'>
           <Link href={'/login'}>
            <FaUser/>
           </Link>
         </span>
       )}
    </div>
  )
}
