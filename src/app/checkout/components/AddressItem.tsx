'use client'


import React from 'react'
import { AddressForm } from './AddressForm'
import { useQueryAddress } from '@/hooks/useQueryAddress'
import { CartSkelTon } from '@/app/cart/components/CartSkelTon'
import { YourAddress } from './YourAddress'
import { useAddressStore } from '@/hooks/useStore'

type AddressItemType={
    setCurrentValue:(item:number)=>void,
}
export const AddressItem = ({setCurrentValue}:AddressItemType) => {

    const {data,isPending}=useQueryAddress()
    const {newAddress,updateAddress}=useAddressStore()

    

    if(isPending){

        return <div>
            <CartSkelTon/>
        </div>
    }

    if(data&& data?.length>=1 && !newAddress &&!updateAddress){

        return <div>
               <YourAddress addressData={data} setCurrentValue={setCurrentValue}/>
             </div>
    }
  return (
    <div>
       
        <AddressForm/>
    </div>
  )
}
