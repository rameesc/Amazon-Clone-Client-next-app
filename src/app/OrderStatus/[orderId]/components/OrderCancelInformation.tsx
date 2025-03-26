'use client'


import { numberFormatted } from '@/utils/IndianPriceFormatt'
import clsx from 'clsx'
import React from 'react'

type OrderCancelInformationProsp={
    cancelBy:string,
    reason:string
    isPaid:boolean,
    amount:number
}
export const OrderCancelInformation = ({cancelBy,reason,isPaid,amount}:OrderCancelInformationProsp) => {
  return (
    <div className={clsx('p-5  ',
        cancelBy ?'block':"hidden"
       )}>
        <div>
           <p className=' font-semibold text-red'>{`Order cancel by ${cancelBy}`}</p>
           <div>
             <b>Reason</b>
             <div>
             
               <p  className='text-red'>{reason}</p>
               <p  className={clsx('text-black bg-slate-200 p-2 rounded-md mt-5',
                isPaid?'block':"hidden"
               )}>{isPaid && `${numberFormatted(amount,0)} amount will be refunding within 5 bays`}</p>
             </div>
           </div>
        </div>
      </div>
  )
}
