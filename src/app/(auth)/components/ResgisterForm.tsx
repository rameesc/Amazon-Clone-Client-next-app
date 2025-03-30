'use client'



import React from 'react'
import { FormCart } from './FormCart'
import { useForm } from 'react-hook-form'
import {z} from "zod"
import { registerValidation } from '@/app/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '@/components/ui/form'
import { CustomInput } from '@/components/input/CustomInput'
import { ButtonItem } from '@/components/Button/ButtonItem'
import { useQueryRegister } from '@/hooks/useQuertAuth'

const ResgisterForm = () => {

    const form=useForm<z.TypeOf <typeof registerValidation>>({
        resolver:zodResolver(registerValidation),
        defaultValues:({
            email:'',
            name:"",
            password:""
        })
    })

    const { mutate,isPending}=useQueryRegister()


    const onSubmit=(values:z.infer<typeof registerValidation>)=>{

        console.log(values)

        mutate(values)
    }
  return (
    <div>
        <FormCart
         title='Register'
         description='if you already have account'
         link='/login'
        >
            <Form {...form}>
                <form 
                 className=' space-y-3'
                 onSubmit={form.handleSubmit(onSubmit)}
                >
                    <CustomInput
                     control={form.control}
                     disabled={isPending}
                     label='Name'
                     name={"name"}
                     placeHolder='name'
                     type={"text"}
                    />
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
                    <p className=' hover:bg-[#3677da]'></p>
                </form >
            </Form>
           

        </FormCart>
    </div>
  )
}

export default ResgisterForm