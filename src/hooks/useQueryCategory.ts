'use client'
import { axiosAuth } from "@/api"
import { CategoryType } from "@/app/types/type"
import { useQuery } from "@tanstack/react-query"
import toast from "react-hot-toast"



export const useQueryAllCategory=()=>{

    return useQuery<CategoryType[]>({
        queryKey:['category'],
        queryFn:async()=>{

            try{

                const {data}=await axiosAuth.get(`/superadmin/produtc-category`)

                if(data?.status){

                    return data?.categories
                }
                    toast.error(data?.message)
                  return {}


            }catch(error){

                if(error instanceof Error){
                    toast.error(error?.message)
                }
            }
        }
    })
}