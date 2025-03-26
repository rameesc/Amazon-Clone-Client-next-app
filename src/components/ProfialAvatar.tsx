'use client'



import { ProfialImgUrl } from '@/api'
import { UserProps } from '@/app/types/type'
import Image from 'next/image'
import React from 'react'

type ProfialAvatarProsp={
    user:UserProps
}
export const ProfialAvatar = ({user}:ProfialAvatarProsp) => {
  return (
    <div>
        {user?.photo ?(
            <Image
              src={
                user?.loginDomain=='google' ?
                user?.photo:
                `${ProfialImgUrl}/${user?.photo}`
              }
              alt='img'
              width={40}
              height={40}
              className=' rounded-full border-2 border-borderColor'

            />

        ):(
            <div className='w-[40px] h-[40px] rounded-full flex justify-center items-center bg-Primary  font-semibold'>
                <span>{user?.email?.charAt(0)}</span>
            </div>

        )}
    </div>
  )
}
