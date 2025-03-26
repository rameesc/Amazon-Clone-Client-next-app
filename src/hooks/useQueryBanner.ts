'use client'
import { fetchData } from "@/api"
import { BannerData } from "@/app/types/type"
import { useQuery } from "@tanstack/react-query"
import toast from "react-hot-toast"




export const useQueryBanners=()=>{

    return useQuery<BannerData[]>({
        queryKey:['banner'],
        queryFn:async()=>{

            try{

                const {data}=await fetchData.get('/superadmin/banner?status=active')

                if(data?.status){

                    return data?.banners
                }
                
                return []


            }catch(error:unknown){

                if(error instanceof Error){
                    toast.error(error?.message)
                    return []
                }
            }
        }
    })
}