'use client'
import { axiosAuth } from "@/api"

import { useMutation, useQuery } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { useAddressStore } from "./useStore"
import { AddressTypes, CreateOrderRazorpayOption, OrderProps } from "@/app/types/type"
import { useParams, useRouter, useSearchParams } from "next/navigation"
import {useSession} from "next-auth/react"







export const useQueryCreateOrder=()=>{
     
    const router=useRouter()
    const {selectedAddress}=useAddressStore()

    const search=useSearchParams()

    return useMutation({
        mutationFn:async({method,shippingRate}:{method:string,shippingRate:number})=>{

            try{

                const {data}=await axiosAuth.post('/order/create-order',{
                    addressId:selectedAddress,
                    shippingCharge:shippingRate,
                    method,
                    productId:search.get('productId')
                })

              

                if(data?.status){

                    toast.success(data?.message)
                    router.push(`/order/success`)
                }else{
                    toast.error(data?.message)
                }


            }catch(error:unknown){

                if(error instanceof Error){
                    toast.error(error.message)
                }
            }
        }
    })
}

// type OrderType={
//     order:RazorpayOption
//     orderOption:OrderOption
//     status:boolean

// }
export const useQueryCreateOrderOnlinePayment=()=>{

    const {selectedAddress}=useAddressStore()
    const {data:userData}=useSession()
    const search=useSearchParams()
    const productId=search.get('productId')

    const router=useRouter()

    return useMutation({
        mutationFn:async({method,shippingRate}:{method:string,shippingRate:number})=>{
          toast.error(method)

            try{

                const {data}=await axiosAuth.post('/order/create-order-razorpay',{
                    addressId:selectedAddress,
                    shippingCharge:shippingRate,
                    method,
                    productId
                })

                

               
                    
                if(data?.status){
                    

                    const {phone}=data?.orderOption?.user as AddressTypes
                    

                    
                   const options:CreateOrderRazorpayOption = {
                   key: process.env.PUBLIC_RAZORPAY_KEY_ID!,
                   amount: data?.order?.amount, // Amount in paise
                   currency: 'INR',
                   name: 'shipping',
                    description: 'Test Transaction',
                   order_id: data?.order?.id,
                   handler: async (response) => {
                     const { data:verifiData } = await axiosAuth.post('/order/order-payment-verification', {
                       order_id: response.razorpay_order_id,
                       payment_id: response.razorpay_payment_id,
                       signature: response.razorpay_signature,
                       orderOption:data?.orderOption,
                        productId:search.get('productId')
                     });
                    
      
                     if (verifiData.status) {
                       
                        router.push('/order/success')
                     } else {
                       toast.error('Payment Verification Failed')
                     }
                   },
                   prefill: {
                     name:userData?.user?.name?.toString() as string,
                     email:userData?.user?.email?.toString(),
                     contact:phone,
                   },
                   theme: {
                     color: '#3399cc',
                   },
                 };
      
                 const rzp = new window.Razorpay(options);
                 rzp.open();
        

                   
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
           return toast.error('succes')
        }
    })
}

//my orders

type MyOrderType={
    orders:OrderProps[], 
    totalCount:number,
    pagination:number ,
    status:boolean
}

export const useQueryMyOrders=()=>{
    const search=useSearchParams()
    const status=search.get('status')
    const keyword=search.get('keyword')

    return useQuery<MyOrderType>({
        queryKey:["my-orders",status,keyword],
        queryFn:async()=>{

            try{
                const queryParams = new URLSearchParams();
                if (status) queryParams.append("status", status);
                if (keyword) queryParams.append("keyword", keyword)

                


                const {data}=await axiosAuth.get(`/order/orders?${queryParams.toString()}`)

                if(data?.status){

                    return data
                }
                    toast.error(data?.message)
                   return {
                    orders:[], 
                    totalCount:0,
                    pagination:0 ,
                    status:false
                   }


            }catch(error:unknown){

                if(error instanceof Error){
                    toast.error(error.message)
                }
            }

          


        }
    })
}

//single order

export const useSingleOrder=()=>{

    const params=useParams()

    return  useQuery<OrderProps>({
        queryKey:["single-order"],
        queryFn:async()=>{

            try{

                const {data}=await axiosAuth.get(`/order/one/${params?.orderId}`)

                if(data?.status){
                    return data?.order
                }
                    toast.error(data?.message)
                    return {}
                
            }catch(error:unknown){

                if(error instanceof Error){
                    toast.error(error.message)
                    return {}
                }
            }
        }
    })
}

//cancel order

type CancelOrderType={
    orderId:string
    remark:string
}
export const useQueryCancelOrder=()=>{

    return useMutation({
        mutationFn:async({orderId,remark}:CancelOrderType)=>{

            try{

                const {data}=await axiosAuth.patch(`/order/cancel-order/${orderId}`,{remark})

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
        }
    })
}