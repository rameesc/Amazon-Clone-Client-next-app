'use client'


import {create} from 'zustand'

type CreateZustanProps={
    newAddress:boolean,
    setNewAddress:(item:boolean)=>void
    updateAddress:string,
    setUpdateAddress:(item:string)=>void,
    selectedAddress:string,
    setSelectedAddress:(item:string)=>void
}

export const useAddressStore=create<CreateZustanProps>((set)=>({
    newAddress:false,
    updateAddress:'',
    selectedAddress:"",
     setSelectedAddress:(item)=>set({selectedAddress:item}),
    setNewAddress:(item)=>set({newAddress:item}),
    setUpdateAddress:(item)=>set({updateAddress:item})


   

}))

type CreateCartStoreType={
    subTotalValue:number
    setSubTotalValue:(item:number)=>void
}
export const useCartStore=create<CreateCartStoreType>((set)=>({
    subTotalValue:0,
    setSubTotalValue:(item)=>set({subTotalValue:item })
}))

type CreateSearchStoreType={
    searchItem:boolean,
    setSearchItem:(item:boolean)=>void
}
export const useSearchStore=create<CreateSearchStoreType>((set)=>({
    searchItem:false,
    setSearchItem:(item)=>set({searchItem:item})
}))