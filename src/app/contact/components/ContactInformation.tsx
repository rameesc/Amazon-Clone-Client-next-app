'use client'

import React from 'react'

import { FaWhatsapp,FaFacebook,FaYoutube,FaInstagram } from "react-icons/fa";
export const ContactInformation = () => {

    const phoneNumber='917034493948'
    const message='Hello, I would like to chat with you!'
  return (
    <div className=' border-2 border-borderColor rounded-lg p-5 space-y-3'>
        <div>
            <h1 className='text-[20px] font-semibold'>Contact Us</h1>
        </div>
        <div>
            <div className='flex gap-2 flex-wrap sm:flex-nowrap'>
              <b>Email:</b>
              <span>shopping@gmail.com</span>
            </div>
            <div  className='flex gap-2'>
              <b>Phone:</b>
              <span>+91 8191611231</span>
            </div>
            <div  className='flex gap-2'>
              <b>Address:</b>
              <span>calical airport main road  near chappathi company</span>
            </div>
        </div>
        <div className='flex flex-col gap-2'>
            <div>
              <b>Social Media:</b>
            </div>
            <div className='flex gap-3 flex-wrap'>
              <div className='icon_border hover:bg-blue hover:text-white'>
               <a target='_blank' href="https://www.facebook.com/">
                <span><FaFacebook size={20}/></span>
               </a>
              </div>
               <div className='icon_border hover:bg-green hover:text-white'>
                <a target='_blank' href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}>
                 <FaWhatsapp size={20}/>
                </a>
               
              </div>
               <div className='icon_border hover:bg-red hover:text-white'>
               <a target='_blank' href='https://www.youtube.com/'>
                 <FaYoutube size={20} />
                </a>
              </div>
              <div className='icon_border hover:bg-pink hover:text-white'>
                <a target='_blank' href="https://www.instagram.com/?hl=en">
                 <FaInstagram size={20}/>
                </a>
               
             </div>
            </div>
        </div>
    </div>
  )
}
