import { auth } from "@/auth"
import toast from "react-hot-toast"



export const getToken=async()=>{

    try{

        const session=await auth()

        return session?.user.accessToken


    }catch(error:unknown){
        if(error instanceof Error){
            toast.error(error?.message)
        }



    }
}