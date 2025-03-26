import { fetchData } from "@/api"




export const getUserByEmail=async(email:string)=>{
    
    try{

        const {data}=await fetchData.post('/getUser',{email:email})

          if(data?.status){

            return data?.user
          }else{
            return null
          }
       }catch(error:unknown){

         if(error instanceof Error){
           console.log(error?.message)
         }
       }
    
}