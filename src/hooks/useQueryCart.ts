'use client'

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"

import { CartProps } from "@/app/types/type"
import { axiosAuth } from "@/api"

import { useRouter, useSearchParams } from "next/navigation"


type AddToCartType={
    message:string,
    status:boolean
}
type AddToCartParams={
    productId:string
    setOpen:React.Dispatch<React.SetStateAction<boolean>>;
}
export const useQueryAddTocart=()=>{
   

    return useMutation({

       mutationFn:async({productId,setOpen}:AddToCartParams)=>{

        try{

            const {data}=await axiosAuth.post(`/cart/addtocart`,{
                productId

            })
           

            if(data?.status){
                toast.success(data?.message)
               return data as AddToCartType
                
            }else{
                
                if(data?.message=='token not found'){
                    return  setOpen(true)

                }
                toast.error(data?.message)
                   
                
               return data as AddToCartType
              
            }


        }catch(error:unknown){

                if(error instanceof Error){

                }
            }
       }
        
    })
}



export const useQuerBuynow=()=>{


    const router=useRouter()
   

    return useMutation({

       mutationFn:async({productId,setOpen}:AddToCartParams)=>{

        try{

            const {data}=await axiosAuth.post(`/cart/buynow`,{
                productId

            })
           

            if(data?.status){
               
                router.push(`/checkout?p=buynow&productId=${productId}`)
                
            }else{
                
                if(data?.message=='token not found'){
                    return  setOpen(true)

                }
                toast.error(data?.message)
                   
                
               return data as AddToCartType
              
            }


        }catch(error:unknown){

                if(error instanceof Error){

                }
            }
       }
        
    })
}
type CartItemType={
    carts:CartProps[]|[], 
    totalCount:number ,
    totalAmount:number,
    realRate:number,
    status:boolean,
    message:string,
    pagination:number
    
}


export const useQueryCartItems=()=>{
   
          const search=useSearchParams()
          const page=search.get('page')

    return useQuery<CartItemType>({
        queryKey:["cart-item"],
        queryFn:async()=>{

            try{
                const params= new URLSearchParams()


                if(page) params.append('page',page)

                const apiUrl=`/cart/carts?${params.toString()}`

                const {data}=await axiosAuth.get(apiUrl)

                if(data?.status){

                    return data || []


                }


                    
                    return {
                        carts:[],
                        totalCount:0 ,
                        totalAmount:0,
                        realRate:0,
                        status:false,
                        pagination:0,
                        message:data?.message,
                    }

                


            }catch(error:unknown){

                if(error instanceof Error){
                    toast.error(error?.message)
                    return {
                        carts:[],
                        totalCount:0 ,
                        totalAmount:0,
                        realRate:0,
                        status:false,
                        pagination:0,
                        message:''
                    }
                }
            }
        }

       
        
    })
}

type CartUpdateType={
    cartId:string,
    type:string
}
export const useQueryCartUpdate=()=>{

    const queryClient=useQueryClient()

    return useMutation({
        mutationFn:async({cartId,type}:CartUpdateType)=>{

            try{

                const {data}=await axiosAuth.patch(`/cart/edite-cart/${cartId}?quantity=${type}`)

                if(data?.status){
                    toast.success(data?.message)
                }else{

                    toast.error(data?.message)
                }
            }catch(error){

                if(error instanceof Error){
                    toast.error(error?.message)
                }
            }
        },
        onSuccess:()=>{
            queryClient.invalidateQueries({
                queryKey:["cart-item"]
            })

        }
    })
}
export const useQueryCartRemove=()=>{

    const queryClient=useQueryClient()

    return useMutation({
        mutationFn:async(cartId:string)=>{

            try{

                const {data}=await axiosAuth.patch(`/cart/delete-cart/${cartId}`)

                if(data?.status){
                    toast.success(data?.message)
                }else{

                    toast.error(data?.message)
                }
            }catch(error){

                if(error instanceof Error){
                    toast.error(error?.message)
                }
            }
        },
        onSuccess:()=>{
            queryClient.invalidateQueries({
                queryKey:["cart-item"]
            })

        }
    })
}