// 'use client'

// import { axiosAuth } from "@/api"
// import { useSession } from "next-auth/react"
// import { useEffect } from "react"
// import { useRefreshToken } from "./useRefreshToken"




// export const useAxiosAuth=()=>{

//     const {data:session} =useSession()
//     const refresh=useRefreshToken()


//     useEffect(()=>{
//         const requertIntercept=axiosAuth.interceptors.request.use((config)=>{

//             if(!config.headers['x-auth-token']){
//                 config.headers["x-auth-token"]= session?.user.accessToken
//             }
//             return config
//          },(error)=>Promise.reject(error)
//         )

//         const responesIntercept=axiosAuth.interceptors.response.use(
//             response=>response,
//             async (error)=>{

//                 const preRequest=error?.config;

//                 console.log(error?.respones,'2000')

//                 if(error?.respones?.status==401 && !preRequest?.sent){

//                     preRequest.sent=true

//                     const data=await refresh()

//                     preRequest.headers['x-auth-token'] = data?.accessToken;

//                     return axiosAuth(preRequest)
//                 }
//                 return Promise.reject(error)

//             }
//         )

//         return  ()=>{
//             axiosAuth.interceptors.request.eject(requertIntercept)
//             axiosAuth.interceptors.response.eject(responesIntercept)
//         }
//     },[session])

//     return axiosAuth
// }