


import React from 'react'
import { FaCar } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
import { IoCall } from "react-icons/io5";
export const ServiceItems = () => {

    const serviceItem=[
        {
            icon:<FaCar/>,
            id:1,
            title:'Free Shipping',
            description:"Free on order over $300"
        },
        {
            icon:<MdOutlineSecurity/>,
            id:2,
            title:'Security Payment',
            description:"100% security payment"
        },
        {
            icon:<GiReturnArrow/>,
            id:3,
            title:'No Return policy',
            description:"No Return policy"
        },
        {
            icon:<IoCall/> ,
            id:4,
            title:'24/7 Support',
            description:"Support every time fast"
        },
    ]
  return (
    <div className='w-[100%] flex justify-center mt-[50px] mb-[50px] items-center flex-col'>
        <div className='w-containerW  grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {serviceItem?.map((item,index)=>(
                <div key={index} className='bg-[#aaa6a644] p-5 gap-4 pt-[30px] pb-[30px] flex justify-center flex-col  items-center rounded-lg'>
                    <div className=' relative before:absolute before:content-[""] before:bottom-[-7px] before:rotate-[45deg] before:w-[20px] before:h-[20px] before:bg-yellow w-[80px] h-[80px] flex justify-center items-center bg-yellow text-white rounded-full'>
                        <span className='text-[35px]'>{item?.icon}</span>
                    </div>
                    <div className='flex mt-8 gap-2 flex-col justify-center items-center'>
                        <h1 className=' text-[25px] text-gray font-semibold'>{item?.title}</h1>
                        <p className='text-gray'>{item?.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
