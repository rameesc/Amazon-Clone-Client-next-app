'use client'


import { searchValidation } from '@/app/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import {z} from 'zod'

import { ButtonItem } from './Button/ButtonItem'
import { Form, FormField, FormItem } from './ui/form'
import { Input } from './ui/input'
import toast from 'react-hot-toast'
import { useRouter} from 'next/navigation'
import { useSearchStore } from '@/hooks/useStore'
export const SearchInput = () => {

    const {setSearchItem}=useSearchStore()

    const form=useForm<z.TypeOf<typeof searchValidation>>({
        resolver:zodResolver(searchValidation),
        defaultValues:({
            search:''
        })
    })

   
    const router=useRouter()
  

    const onSubmit=(value:z.infer <typeof searchValidation>)=>{

        

        if(!value.search){
           return toast.error('Search anything here..')
        }

        router.push(`/products?keyword=${value.search}`)
        setSearchItem(false)

       
        form.reset({search:''})

    }
  return (
    <div>
        <Form {...form}>
            <form 
             className='flex gap-3 flex-wrap'
             onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
               
                 control={form.control}
                   name='search'
                   render={({field})=>(
                    <FormItem>
                        <Input
                          {...field}
                          placeholder='Search anything here...'
                          className='bg-Primary w-[100%] sm:w-[400px] h-[45px] rounded-l-full text-white tracking-wide sm:text-[22px] font-semibold'

                        />
                    </FormItem>

                 )}
                >

                </FormField>
                <ButtonItem
                  style='bg-blue h-[45px] w-[20%] sm:w-[200px] sm:text-[18px] tracking-wide rounded-r-full '
                  title='Search'
                  type='submit'

                />
            </form>
        </Form>
    </div>
  )
}
