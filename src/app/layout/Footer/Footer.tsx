'use client'

import React from 'react'
import { HeaderLogo } from '../Header/HeaderLogo'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { FaFacebookF } from "react-icons/fa";
import Link from 'next/link'

export const Footer = () => {
  return (
    <div className='flex flex-col bg-grayDark justify-center mt-[80px] items-center pb-[80px] pt-[80px]'>
       <div className='w-containerW flex flex-col gap-5'>
        <div className='w-containerW border-b-2 pt-5 pb-5 border-yellow  flex justify-between flex-wrap gap-5 '>
            <div>
               <div className='flex   flex-col gap-2'>
                 <HeaderLogo/>
                 <p className='text-yellow'>Fresh products</p>
               </div>
            </div>
            <div>
              <div className='flex flex-col gap-2 sm:relative lg:relative'>
                <Input 
                 className='w-[100%] sm:w-[500px] sm:p-8 lg:w-[500px] text-white lg:p-8 rounded-full border-2 border-Primary'
                 placeholder='Your Email'/>
                <div>
                <Button className='p-2 lg:p-8 sm:p-8 text-[15px] sm:absolute lg:absolute top-[1px] right-[1px] rounded-full bg-Primary hover:bg-Primary'>Subscribe New</Button>

                </div>
                
              </div>
            </div>
            <div className='flex gap-2'>
               <div className='w-[40px] h-[40px] text-yellow rounded-full border-yellow border-2 flex justify-center items-center '>
                 <FaFacebookF/>
               </div>
               <div className='w-[40px] h-[40px] text-yellow rounded-full border-yellow border-2 flex justify-center items-center '>
                 <FaFacebookF/>
               </div>
               <div className='w-[40px] h-[40px] text-yellow rounded-full border-yellow border-2 flex justify-center items-center '>
                 <FaFacebookF/>
               </div>
               <div className='w-[40px] h-[40px] text-yellow rounded-full border-yellow border-2 flex justify-center items-center '>
                 <FaFacebookF/>
               </div>
            </div>
        </div>
        <div className='w-containerW flex justify-between flex-wrap gap-3'>
           <div className='flex flex-col gap-3 text-white'>
             <h1 className='text-white font-semibold text-[22px]'>Why People Like us!</h1>
             <p className=' max-w-[200px]'>typesetting, remaining essentially unchanged. It was popularised in the 1960s with the like Aldus PageMaker including of Lorem Ipsum.</p>
             <Button className='border-2 border-yellow bg-grayDark text-[18px] rounded-full p-5  font-semibold text-Primary'>Read More</Button>
           </div>
           <div>
             <h1 className='font-semibold text-[22px] text-white'>Shop Info</h1>
             <div className='flex flex-col gap-3 text-white'>
              <Link href={''}>About</Link>
              <Link href={''}>Contact Us</Link>
              <Link href={''}>Privacy Policy</Link>
              <Link href={''}>Terms & Condition</Link>
              <Link href={''}>Reture Policy</Link>
              <Link href={''}>FAQs & Help</Link>
             </div>
           </div>
           <div>
             <h1 className='text-white font-semibold text-[22px]'>Account</h1>
             <div className='flex flex-col gap-3 text-white'>
              <Link href={''}>My Account</Link>
              <Link href={''}>Shop details</Link>
              <Link href={''}>Shopping Cart</Link>
              <Link href={''}>Wishlist</Link>
              <Link href={''}>Order History</Link>
              <Link href={''}>International Orders</Link>
             </div>
           </div>
           <div>
             <h1 className='text-white font-semibold text-[22px]'>Contact</h1>
             <div className='flex flex-col gap-3 text-white'>
                 <div className='flex flex-wrap'>
                   <span>Address:</span>
                   <span>1429 Netus Rd, NY 48247</span>
                 </div>
                 <div className='flex flex-wrap'>
                   <span>Email:</span>
                   <span>shopping@gmail.com</span>
                 </div>
                 <div className='flex flex-wrap'>
                   <span>Phone:</span>
                   <span>+8542197247</span>
                 </div>
                
             </div>
           </div>
        </div>
      </div>
    </div>
  )
}
