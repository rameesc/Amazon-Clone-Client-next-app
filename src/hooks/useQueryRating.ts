
'use client'

//add rating

import { axiosAuth } from "@/api"
import { ReviewProps } from "@/app/types/type"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useParams, useSearchParams } from "next/navigation"
import toast from "react-hot-toast"

type AddRatingType={
    productId:string,
    star:number,
    comment:string

}
export const useQueryAddRating=()=>{

    return useMutation({
        mutationFn:async({productId,star,comment}:AddRatingType)=>{

            try{

                const {data}=await axiosAuth.post('/review/post-review',{
                    productId:productId,
                    star:star,
                    comment:comment
                })

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


type ProductRatingType={
    averageStar:number
  fiveStars:number
   fourStars:number
  oneStars:number
  threeStars:number
  totalRatingUser:number
   twoStars:number
}
export const useQueryProductRating=()=>{

    const params=useParams()

    return useQuery<ProductRatingType>({
        queryKey:["rating"],
        queryFn:async()=>{

            try{

                const {data}=await axiosAuth.get(`/review/review/average-rating/${params?.productId}`)

                if(data?.status){

                    return data?.stars
                }
                    toast.error(data?.message)
                    return {
                        averageStar:0,
                        fiveStars:0,
                         fourStars:0,
                        oneStars:0,
                        threeStars:0,
                        totalRatingUser:0,
                         twoStars:0
                    }


            }catch(error:unknown){

                if(error instanceof Error){
                    toast.error(error?.message)
                }

            }
        }
    })
}

type ReviewType={
    reviews:ReviewProps[], 
    totalCount:number ,
    pagination:number,
    status:boolean
}
export const useQueryProductReview=()=>{

   
    const params=useParams()
    return useQuery<ReviewType>({
        queryKey:["review"],
        queryFn:async()=>{

            try{

                const {data}=await axiosAuth.get(`/review/product/review/${params?.productId}`)

                if(data?.status){
                   

                    return data
                }
                    toast.error(data?.message)
                    return {
                        reviews:[], 
                        totalCount:0 ,
                        pagination:0,
                        status:false
                    }


            }catch(error:unknown){
                if(error instanceof Error){
                    toast.error(error?.message)
                }

            }
        }
    })
}


//my reviews

type MyReviewType={
    myReviews:ReviewProps[], 
    totalCount:number ,
    pagination:number,
    status:boolean
}
export const useQueryMyReviews=()=>{
     
    const search=useSearchParams()

    const page = search.get('page')
    
    return useQuery<MyReviewType>({
        queryKey:['my-review'],
        queryFn:async()=>{

            try{
                const params = new URLSearchParams()

                if(page) params.append('page',page)

                    const apiUrl=`/review/my-reviews?${params.toString()}`

                const {data}=await axiosAuth.get(apiUrl)

                if(data?.status){
                    return data
                }
                    toast.error(data?.message)
                    return {
                        myReviews:[], 
                        totalCount:0 ,
                        pagination:0,
                        status:false

                    }

            }catch(error:unknown){
                if(error instanceof Error){
                    toast.error(error?.message)
                    return {
                        myReviews:[], 
                        totalCount:0 ,
                        pagination:0,
                        status:false

                    }
                }
            }
        }
    })
}