

import { useRefreshToken, } from "@/hooks/useRefreshToken"
import axios from "axios"
import {getSession} from 'next-auth/react'


const BASA_URL="https://new.iamramees.com/api"

export  const BannerUrl="https://new.iamramees.com/public/uploads/banner"
export const ProductImgUrl="https://new.iamramees.com/public/uploads/product"
export const ProfialImgUrl="https://new.iamramees.com/public/uploads/user"
export  const CategoryUrl="https://new.iamramees.com/public/uploads/category"

export const fetchData=axios.create({
    baseURL:BASA_URL
    
})

export const axiosAuth=axios.create({
    baseURL:BASA_URL
})



const useGetRefreshTokenFunction=()=>{

   const refresh =useRefreshToken()

   return refresh
}

axiosAuth.interceptors.request.use(async(config)=>{

  
    
    const session=await getSession()
   

    if(!config.headers["x-auth-token"]){
     
        config.headers["x-auth-token"]= session?.user?.accessToken
    }
    
    return config
 },(error)=> Promise.reject(error)
)

axiosAuth.interceptors.response.use(
    response=>response,
   
    async (error)=>{

        
        const { response } = error;
        const { status} = response || {};
        const originalRequest = error.config;

        

        if(status==401 && !originalRequest?._retry){

            originalRequest._retry=true
            const tokens=await useGetRefreshTokenFunction()

            try{
              
              const dataa=await tokens()
              originalRequest.headers["x-auth-token"] = dataa.accessToken; // Update the to


              return axiosAuth(originalRequest)


            }catch(refreshError){
                console.error("Token refresh failed:", refreshError);
                // Optionally handle logout or redirection here
                return Promise.reject(refreshError);

            }
            
        }
        return Promise.reject(error)

    }
)


