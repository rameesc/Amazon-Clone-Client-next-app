'use client'


import { AddressTypes } from '@/app/types/type'
import React from 'react'

import { FaRegEdit } from "react-icons/fa";
import { CustomeBtn } from '@/components/Button/CustomeBtn';
import { useAddressStore } from '@/hooks/useStore';
import clsx from 'clsx';

import { AddressValues } from '@/app/account/addressManage/components/AddressValues';

type YourAddressProps={
    addressData:AddressTypes[]
    setCurrentValue:(item:number)=>void,
}
export const YourAddress = ({addressData,setCurrentValue}:YourAddressProps) => {
    const {setNewAddress,setUpdateAddress,setSelectedAddress,selectedAddress}=useAddressStore()
    const createNewHandler=()=>{
        setNewAddress(true)

    }
    const setUpdateAddressHandle=(id:string)=>{
        setUpdateAddress(id)
    }
  return (
    <div className='flex flex-col gap-3'>
        <div>
         <CustomeBtn
                 onclick={createNewHandler}
                  style='rounded-full p-5 border-2 text-Primary hover:text-white hover:bg-yellow border-yellow bg-white text-Primary font-semibold text-[18px]'
                       >
                   <span>Create New</span>
         </CustomeBtn>
        </div>
        {addressData.map((item,index)=>(
            <div key={index} className={clsx(
                selectedAddress==item?._id ?'border-[5px] border-Primary p-5 flex flex-col gap-3  rounded-md':'border-2 border-gray p-5 flex flex-col gap-3  rounded-md'

            )}>

                <div className='flex justify-between'>
                 {/* <div className=' border-2 p-2  rounded-md bg-Light text-gray w-[100px] text-center'>
                    {item?.label}
                 </div> */}
                 <span 
                   onClick={()=>setUpdateAddressHandle(item?._id)}
                  className=' cursor-pointer border-2 rounded-md p-2 border-gray relative before:absolute before:p-1 before:rounded-md hover:before:top-[-20px] before:top-[10px] before:bg-black before:text-white before:duration-300 before:ease-out hover:before:content-["Edit"]'>
                   <FaRegEdit size={22}/>
                 </span>

                </div>

                {/* <div>
                  
                 <AddressTitle
                   title='City:'
                   value={item?.city}
                 />
                 <AddressTitle
                   title='Area:'
                   value={item?.area}
                 />
                 <AddressTitle
                   title='Address:'
                   value={item?.address}
                 />
                 <AddressTitle
                   title='Pin Code:'
                   value={item?.pinCode}
                 />
                 <AddressTitle
                   title='Country:'
                   value={item?.country}
                 />
                 <AddressTitle
                   title='State:'
                   value={item?.state}
                 />
                 <AddressTitle
                   title='Phone:'
                   value={item?.phone}
                 />
                </div> */}
                <AddressValues
                  key={index}
                  addressValue={item}
                />
                <div className=' self-end'>
                 <CustomeBtn
                 onclick={()=>setSelectedAddress(item._id)}
                  style='rounded-full p-5 border-2 text-Primary hover:text-white hover:bg-yellow border-yellow bg-white text-Primary font-semibold text-[18px]'
                       >
                   <span>Delivery To this</span>
                  </CustomeBtn>
                </div>
               
            </div>
        ))}
        <div className=' self-end'>
                <CustomeBtn
                 onclick={()=>setCurrentValue(1)}
                 disabled={selectedAddress?false:true}
                  style='rounded-full p-5 border-2 text-Primary hover:text-white hover:bg-yellow border-yellow bg-white text-Primary font-semibold text-[18px]'
                       >
                   <span>Next</span>
                </CustomeBtn>
            
        </div>
    </div>
  )
}
