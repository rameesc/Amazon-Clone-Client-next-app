'use client'


import React from 'react'

export const OurMap = () => {
  return (
    <div>
         <div>
            <h1 className='text-[20px] text-start font-semibold'>Location</h1>
        </div>
        <div className='flex flex-col justify-center p-5 items-center border-2 border-borderColor rounded-lg'>
       
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4655.24168663265!2d75.94238762011013!3d11.144918903795476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba64f00400918b7%3A0xec6f320360b15730!2sAirport%20Juntion!5e0!3m2!1sen!2sin!4v1741518999625!5m2!1sen!2sin" 
          width="600"
          height="450"
          style={{ border: 0 }}
          className='w-[100%]'
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        >

        </iframe>
        </div>
    </div>
  )
}
