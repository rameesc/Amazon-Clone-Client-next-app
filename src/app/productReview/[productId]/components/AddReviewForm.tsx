'use client'


import {  reviewValidation } from '@/app/schema'
import { ButtonItem } from '@/components/Button/ButtonItem'
import { CustomTxetArea } from '@/components/input/CustomTxetArea'
import { Form } from '@/components/ui/form'
import { useQueryAddRating } from '@/hooks/useQueryRating'
import { zodResolver } from '@hookform/resolvers/zod'
import { useParams } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import {z} from "zod"


type AddReviewFormType={
    star:number
}
export const AddReviewForm = ({star}:AddReviewFormType) => {


    const {mutate,isPending}=useQueryAddRating()

    const params=useParams()

    const form =useForm<z.TypeOf <typeof reviewValidation>>({
        resolver:zodResolver(reviewValidation),
        defaultValues:({
            comment:''
        })
    })
    const onSubmit=(value:z.infer<typeof reviewValidation>)=>{

        if(!star){
            toast.error('please add your star rating')
        }
        mutate({
            productId:params.productId as string,
            star:star,
            comment:value?.comment
        })
        console.log(value)
    }

  return (
    <div>
        <Form {...form}>
           
             <form 
              className=' space-y-4 mt-10'
              onSubmit={form.handleSubmit(onSubmit)}>
              
                <CustomTxetArea
                 control={form.control}
                  disabled={isPending}
                 label='Comment'
                 placeHolder='Add your review'
                 name={'comment'}
                />
                <ButtonItem
                 title='Submit'
                 type='submit'
                 disabled={isPending}
                
                 style=''
                /> 
             </form>
           
        </Form>
    </div>
  )
}
