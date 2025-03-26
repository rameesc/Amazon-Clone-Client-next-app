import { fetchData } from "@/api"




export  const loginWithGoogle=async(email:string,name:string)=>{

    try{

        const {data}=await fetchData.post('/google',{
            name,
            email

        })

        if(data?.status){
            return  data?.user
        }
        return null
    }catch(error:unknown){

        if(error instanceof Error){
            console.log(error.message)

        }
    }
}