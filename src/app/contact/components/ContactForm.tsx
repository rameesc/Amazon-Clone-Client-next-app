'use client'


import {  contactValidation } from '@/app/schema'
import { ButtonItem } from '@/components/Button/ButtonItem'
import { CustomInput } from '@/components/input/CustomInput'
import { CustomTxetArea } from '@/components/input/CustomTxetArea'
import { Form } from '@/components/ui/form'
import { useQueryContact } from '@/hooks/useQuertAuth'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import {z} from "zod"
export const ContactForm = () => {

 const form=useForm<z.TypeOf<typeof contactValidation>>({
    resolver:zodResolver(contactValidation),
    defaultValues:({
        email:'',
        message:'',
        name:'',
        subject:''
    })
 })


 const {mutate,isPending,isSuccess}=useQueryContact()

 


 const onSubmitValue=(value:z.infer<typeof contactValidation>)=>{
    if(isSuccess){
        form?.reset({
            email:'',
            message:'',
            name:'',
            subject:''
        })
    

   mutate(value)

   
 }
 
 }
 interface MyFormValues {
 
  name: string;
 email: string;
 subject: string;
 message: string;
 }
  return (
    <Form {...form}>
        
        <form 
          className='border-2 border-borderColor rounded-lg p-5 space-y-5 w-[100%]'
         onSubmit={form.handleSubmit(onSubmitValue)}>
            <div>
               <h1 className='text-[20px] font-semibold'>Get in Touch With Us</h1>
            </div>
            <div className=' space-y-3'>
             <CustomInput<MyFormValues>
              control={form.control}
              label='Name'
              name={'name'}
              placeHolder='name'
              type={'text'}
              disabled={isPending}
             />
             <CustomInput<MyFormValues>
              control={form.control}
              label='Email'
              name={'email'}
              placeHolder='email'
              type={'text'}
              disabled={isPending}
             />
             <CustomInput<MyFormValues>
              control={form.control}
              label='Subject'
              name={'subject'}
              placeHolder='subject'
              type={'text'}
              disabled={isPending}
             />
             <CustomTxetArea
              control={form.control}
              disabled={isPending}
              label='Message'
              name={'message'}
               
              placeHolder='message'
             />
             <ButtonItem
               title='Submit'
               style='bg-Primary mt-5'
               type='submit'
               disabled={isPending}
             />

            </div>
            
        </form>
    </Form>
  )
}
