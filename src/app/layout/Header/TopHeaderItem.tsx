


import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
export const TopHeaderItem = () => {

    const service=[
        "Privacy Policy",
        "Terms of Use",
        "Sales and Refunds"
    ]
    const shopAddress=[
        {
            icon:<IoLocationSharp/>,
            text:"123 Street, New York"
        },
        {
            icon:<MdEmail/>,
            text:"Email@Example.com"
        },
    ]

  return (
    <div className=' hidden  md:flex justify-between flex-wrap p-5 bg-Primary text-white borderRedies '>
        <div className='flex gap-4 items-center'>
            {shopAddress.map((item,index)=>(
                <div key={index} className='flex items-center gap-3'>
                 <span className='text-yellow text-[20px]'>
                   {item.icon}
                 </span>
                <p>{item.text}</p>
              </div>

            ))}
            
           
        </div>
        <div className='flex gap-3'>
            {service.map((item,index)=>(
                <div  key={index} className='flex gap-2'>
                  <span
                   className='hover:text-yellow' 
                  >
                     {item}
                  </span>
                  <span>{service.length!==index+1 && '/'}</span>

                </div>
                
            ))}
        </div>
    </div>
  )
}
