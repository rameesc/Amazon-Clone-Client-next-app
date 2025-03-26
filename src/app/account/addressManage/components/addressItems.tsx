'use client'


import { useQueryAddress } from '@/hooks/useQueryAddress'
import React from 'react'
import { AddressValues } from './AddressValues'
import { IoMdAddCircle } from "react-icons/io";
import { AddressForm } from '@/app/checkout/components/AddressForm';
import { useAddressStore } from '@/hooks/useStore';

import { CartSkelTon } from '@/app/cart/components/CartSkelTon';

export const AddressItems = () => {
    const {data,isPending}=useQueryAddress()
    const {newAddress,setNewAddress,setUpdateAddress,updateAddress}=useAddressStore()

    if(isPending){

      return <div className='w-[100%]'>
        <CartSkelTon/>
      </div>
    }

    const addressEditHandler=(id:string)=>{
      setUpdateAddress(id)
      setNewAddress(false)

    }
    const selectNewAddressHandler=()=>{
      setNewAddress(true)
      setUpdateAddress('')

    }
  return (
    <div className='flex flex-col gap-4'>

        <div onClick={selectNewAddressHandler} className='flex gap-3 text-sky-500 cursor-pointer items-center border-2 p-4'>
            <IoMdAddCircle size={25}/>
            <span className='text-[18px] font-semibold'>Create New Address</span>
        </div>
        <div>
          {newAddress || updateAddress ?(
            <div>
              <AddressForm/>

            </div>
            

          ):(
          <div className='flex flex-col gap-3'>
            {data?.map((item,index)=>(
              <div key={item?._id} className=' relative'>
                 <AddressValues addressValue={item} key={index}/>
                 <span onClick={()=>addressEditHandler(item._id)} className='text-sky-500 absolute right-[20px] top-[10px] cursor-pointer'>
                  Edit
                 </span>

              </div>
              
            ))}
          </div>

          )}
        </div>

      
      

    </div>
    
  )
}
