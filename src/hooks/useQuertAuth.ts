
'use client'
import { axiosAuth, fetchData } from "@/api"
import { contactValidation, loginValidation, registerValidation } from "@/app/schema"
import {useMutation} from "@tanstack/react-query"
import toast from "react-hot-toast"
import {z} from "zod"
import { signIn } from 'next-auth/react'
import {useRouter} from "next/navigation"
export const useQueryRegister=()=>{

    return useMutation({

        mutationFn:async(values:z.infer<typeof registerValidation>)=>{

            try{

                const {data}=await fetchData.post(`/signup`,values)

                

                if(data?.status){
                    toast.success(data?.message)

                }else{
                    toast.error(data?.message)
                }


            }catch(error:unknown){

                if(error instanceof Error){

                }
            }
        }
    })
    
       
}
export const useQueryEmailVerification=()=>{

    const router=useRouter()

    return useMutation({

        mutationFn:async(token:string)=>{

            try{

                const {data}=await fetchData.post(`/emailverify?token=${token}`)

              

                if(data?.status){

                    toast.success(data?.message)
                    router.push('/login')
                    return data

                }else{
                    toast.error(data?.message)
                    return data
                }


            }catch(error:unknown){

                if(error instanceof Error){

                }
            }
        }
    })
    
       
}
export const useQueryLogin=()=>{

    return useMutation({

        mutationFn:async(values:z.infer<typeof loginValidation>)=>{

            try{

                const {data}=await fetchData.post(`/signin`,values)

                

              

                if(data?.status){

                    toast.success(data?.message)
                    await signIn("credentials",{
                        email:values?.email,
                        password:values?.password
                     })
                   

                }else{
                    toast.error(data?.message)
                    return data
                }


            }catch(error:unknown){

                if(error instanceof Error){

                }
            }
        },
       
    })
    
       
}

//contact


export const useQueryContact=()=>{

    return useMutation({
        mutationFn:async(value:z.infer<typeof contactValidation>)=>{

            try{

                const {data}=await axiosAuth.post('/contact',value)

                if(data?.status){
                    toast.success(data?.message)
                }else{
                    toast.error(data?.message)

                }
            }catch(error:unknown){

                if(error instanceof Error){

                    toast.error(error?.message)

                }
            }
        }
    })
}