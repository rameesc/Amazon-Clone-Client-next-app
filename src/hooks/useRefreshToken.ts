'use client'
import { axiosAuth } from "@/api"
import { useSession } from "next-auth/react"


export const useRefreshToken=()=>{

    const {data:session}=useSession()

    const refresh=async()=>{

        if(session?.user?.refreshToken){
            throw new Error('no refresh token found')
        }

        const {data}= await axiosAuth.post('/refreshtoken',{
            refreshToken:session?.user?.refreshToken
        })

        if(data?.status){

           
            // await update({ accessToken:data?.accessToken})
           

            return data
        }

    }

    return refresh
}