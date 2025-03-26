'use client'



import React from 'react'
import { FormCart } from './FormCart'
import { useForm } from 'react-hook-form'
import {z} from "zod"
import { loginValidation  } from '@/app/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '@/components/ui/form'
import { CustomInput } from '@/components/input/CustomInput'
import { ButtonItem } from '@/components/Button/ButtonItem'

import { LoginWithGoogle } from './LoginWithGoogle'

import { useQueryLogin } from '@/hooks/useQuertAuth'


export const LoginForm = () => {

    const form=useForm<z.TypeOf <typeof loginValidation>>({
        resolver:zodResolver(loginValidation),
        defaultValues:({
            email:'',
            
            password:""
        })
    })
    const {mutate,isPending}=useQueryLogin()


    const onSubmit=async(values:z.infer<typeof loginValidation>)=>{
      

      mutate(values)
    }





  return (
    <div>
        <FormCart
         title='Login'
         description="if you don't have  account"
         link='/register'
        >
            <Form {...form}>
                <form 
                 className=' space-y-3 bg-white'
                 onSubmit={form.handleSubmit(onSubmit)}
                >
                    
                    <CustomInput
                     control={form.control}
                     disabled={isPending}
                     label='Email'
                     name={"email"}
                     placeHolder='email@gamil.com'
                     type={"text"}
                    />
                    <CustomInput
                     control={form.control}
                     disabled={isPending}
                     label='Password'
                     name={"password"}
                     placeHolder='123456'
                     type={"text"}
                    />
                    
                   
                    <ButtonItem
                      title='Submit'
                      style='bg-blue  font-semibold tracking-wide hover:bg-[#3677da]'
                      type='submit'
                      disabled={isPending}
                     
                    />
                     <LoginWithGoogle/>
                    
                </form >
            </Form>
           

        </FormCart>
    </div>
  )
}

