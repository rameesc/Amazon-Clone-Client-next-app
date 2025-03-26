'use client'
import { axiosAuth, fetchData } from "@/api"
import { ProductGeneralFilterType, ProductProps } from "@/app/types/type"
import {  useQuery } from "@tanstack/react-query"
import {  useParams, useSearchParams } from "next/navigation"
import toast from "react-hot-toast"





export const useQueryProductFeature=()=>{

    return useQuery<ProductProps[]>({
        queryKey:["product-feature"],
        queryFn:async()=>{

            try{

                const {data}=await fetchData.get('/product/products-feature')

                if(data?.status){
                    return data?.isProduct

                }
                    toast.error(data?.message)
                   return []


            }catch(error:unknown){

                if(error instanceof Error){
                    toast.error(error.message)

                }
            }
        }
    })
}
export const useQuerySingleProduct=()=>{

    const {productId}=useParams()
    return useQuery<ProductProps>({
        queryKey:["single-product",productId],
        queryFn:async()=>{

            try{

                const {data}=await fetchData.get(`/product/get-single-one/${productId}`)

                if(data?.status){
                    return {...data?.isProduct}

                }
                    toast.error(data?.message)
                    return {} as ProductProps


            }catch(error:unknown){

                if(error instanceof Error){
                    toast.error(error.message)

                }
            }
        }
    })
}

//product general filter

export const useQueryGenaralFilter=()=>{

    const searchParam=useSearchParams()

    const category=searchParam.get('category')
    const keyword=searchParam.get('keyword')
    
   

    return useQuery<ProductGeneralFilterType>({
        queryKey:['product-filter'],
        queryFn:async()=>{

            try{
                const queryParams=new URLSearchParams()

                if(category) queryParams.append('cat_id',category)
                if(keyword) queryParams.append('keyword',keyword)

                   

                    const apiUrl=`/product/generate-filter?${queryParams.toString()}`


                const {data}=await axiosAuth.get(apiUrl)

                if(data?.status){
                    return data?.generatedFilters

                }
                    toast.error(data?.message)
                   return {}


            }catch(error:unknown){

                if(error instanceof Error){
                    toast.error(error.message)

                }
            }
        }
    })
}


//filter product

type ProductSearchType={
    products:ProductProps[],
    pagination:number,
    totalCount:number,
    status:boolean
}
export const useQueryProductSearch=()=>{

    const category=useSearchParams()
    const cat_id=category.get('category')
    const max_price=category.get('max_price')
    const min_price=category.get('min_price')
    const sizes=category.get('Sizes')
    const ratings=category.get('Rating')
    const discount=category.get('Discount')
    const weights=category.get('Weights')
    const colors=category.get('Colores')
    

    return useQuery<ProductSearchType>({

         
                    
          queryKey:['search-product',cat_id,colors,weights,discount,ratings,max_price,min_price,sizes],
          queryFn:async()=>{

            try{

                const queryParams = new URLSearchParams();
                if (cat_id) queryParams.append("cat_id", cat_id);
                if (colors) queryParams.append("colors", colors);
                if (ratings) queryParams.append("ratings", ratings);
                if (min_price) queryParams.append("min_price", min_price);
                if (max_price) queryParams.append("max_price", max_price);
                if (discount) queryParams.append("discount", discount);
                if (weights) queryParams.append("weights", weights);
                if (sizes) queryParams.append("sizes", sizes);
               

                const apiUrl=`/product/search?${queryParams.toString()}`

                //`/product/search?cat_id=${cat_id}&colors=${colors}&ratings=${ratings}&min_price=${min_price}&max_price=${max_price}&discount=${discount}&weights=${weights}&sizes=${sizes}`

                const {data}=await 
                axiosAuth.get(apiUrl)

              

                if(data?.status){

                    return data

                }
                    toast.error(data?.message)
                   return {
                    products:[],
                    pagination:0,
                    totalCount:0,
                    status:false
                   }


            }catch(error:unknown){

                if(error instanceof Error){
                    toast.error(error.message)

                }
            }
        }
    })
}
