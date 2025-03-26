'use client'
import { axiosAuth } from "@/api"
import { WishlistType } from "@/app/types/type"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useSearchParams } from "next/navigation"
import toast from "react-hot-toast"



type AddWishileType={
    productId:string,
    
}
export const useQueryAddtoWishile=()=>{

    return useMutation({
        
        mutationFn:async({productId}:AddWishileType)=>{

            try{

                const {data}=await axiosAuth.post('/cart/add-wishlist',{
                    quantity:1,
                    productId:productId
                })


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

type AllWishlistType={
    wishlists:WishlistType[], 
    totalCount:number, 
    pagination:number,
    status:boolean
}
export const useQureyAllWishlist=()=>{

    const search=useSearchParams()
    const page=search.get('page')
   
    return useQuery<AllWishlistType>({
        queryKey:['wishlist'],
        queryFn:async()=>{

            try{
                const params = new URLSearchParams()

                if(page) params.append('page',page)

                    const apiUrl=`/cart/user-wishlist?${params.toString()}`

                const {data}=await axiosAuth.get(apiUrl)

                console.log(data,'wish')

                if(data?.status){
                    return data
                }
                    toast.error(data?.message)
                    return {
                        wishlists:[], 
                         totalCount:1, 
                         totalAmount:0,
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

type RemoveWishlistType={
    wishlistId:string
}
export const useQueryRemoveWishile=()=>{

    const queryClinet=useQueryClient()

    return useMutation({
        
        mutationFn:async({wishlistId}:RemoveWishlistType)=>{

            try{

                const {data}=await axiosAuth.patch(`/cart/delete-wishlist/${wishlistId}`)


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
        },
        onSuccess:()=>{
            queryClinet.invalidateQueries({
                queryKey:['wishlist']
            })

        }
    })
}
