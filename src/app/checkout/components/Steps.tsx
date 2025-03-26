'use client'

import clsx from 'clsx'
import React from 'react'

type StepsType={
    setCurrentValue:(item:number)=>void,
    currentValue:number
    stepItemValue:{title:string}[]
}
export const Steps = ({stepItemValue,currentValue}:StepsType) => {
  return (
    <div  className='flex-col sm:flex-row gap-2 flex  justify-between relative '>
        {stepItemValue?.map((item,index)=>(
            <div 
           
             className='border-[3px] rounded-md p-5 z-10  bg-white border-Primary'
             key={index} 
             >
                <div className={clsx('flex justify-between',
                    currentValue >=index ?"text-Primary  font-semibold tracking-wide":"text-yellow font-semibold tracking-wide"
                )}>
                    <span>{item?.title}</span>
                    <span className=' block sm:hidden'>{index+1}</span>
                    
                </div>
            </div>
        ))}
        <div className={clsx(` w-[100%] h-[10px] rounded-md bg-Light  border-2 absolute top-[50%]  translate-y-[-50%] z-0 before:ease-out before:duration-200  before:top-[4px] before:absolute   before:translate-y-[-50%] before:h-[10px]  before:bg-Primary   `,
            currentValue==0 &&"before:w-[0%]",
            currentValue==1 &&"before:w-[50%]",
            currentValue==2 &&"before:w-[100%]"
        )}/>
    </div>
  )
}
