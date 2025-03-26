'use client'
import { axiosAuth } from "@/api"
import { AddressValidation } from "@/app/schema"
import { AddressTypes } from "@/app/types/type"
import {  useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import {z} from "zod"
import { useAddressStore } from "./useStore"





export const useQueryAddress=()=>{

    return useQuery<AddressTypes[]>({
        queryKey:["address-item"],
        queryFn:async()=>{

            try{

                const {data}=await axiosAuth.get('/address')

                if(data?.status){

                    return data?.address


                }
                    toast.error(data?.message)
                     return {}


            }catch(error:unknown){

                if(error instanceof Error){

                    toast.error(error.message)
                }
            }

        }
    })
}

export const useQuaryAddAddress=()=>{
const clinetQuery=useQueryClient()
    return useMutation({
        mutationFn:async(values:z.infer< typeof AddressValidation>)=>{

            try{
                const {data}=await axiosAuth.post('/add-address',values)

                if(data?.status){

                    toast.success(data?.message)


                }else{
                    toast.error(data?.message)
                }



            }catch(error:unknown){

                if(error instanceof Error){

                    toast.error(error.message)
                }
            }
        },
        onSuccess:()=>{
            clinetQuery.invalidateQueries({
                queryKey:["address-item"]
            })

        }
    })
}



export const useQuerySingleAddress=(addressId:string)=>{

    return useQuery<AddressTypes>({
        queryKey:["address-single",addressId],
        queryFn:async()=>{

            try{

                const {data}=await axiosAuth.get(`/address/${addressId}`)

                if(data?.status){

                    return data?.address


                }
                    toast.error(data?.message)
                   return {}


            }catch(error:unknown){

                if(error instanceof Error){

                    toast.error(error.message)
                }
            }

        }
    })
}

// type UpdateAddressType={
//     values:z.infer< typeof AddressValidation>
//     addressId:string
// }

export const useQuaryUpdateAddAddress=()=>{

    const {setUpdateAddress,updateAddress}=useAddressStore()


    const clinetQuery=useQueryClient()
        return useMutation({
            mutationFn:async( values:z.infer< typeof AddressValidation>)=>{
    
                try{
                    const {data}=await axiosAuth.put(`/edit-address/${updateAddress}`,values)
    
                    if(data?.status){
    
                        toast.success(data?.message)
    
    
                    }else{
                        toast.error(data?.message)
                    }
    
    
    
                }catch(error:unknown){
    
                    if(error instanceof Error){
    
                        toast.error(error.message)
                    }
                }
            },
            onSuccess:()=>{
                clinetQuery.invalidateQueries({
                    queryKey:["address-item"]
                })
                setUpdateAddress('')
    
            }
        })
    }