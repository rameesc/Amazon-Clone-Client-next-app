'use client'


import React from 'react'
import { FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Control,FieldValues,Path } from 'react-hook-form'
import { Input } from '../ui/input'

type CustomInputProsp<T extends FieldValues>={
    label:string,
    name:Path<T>,
    type:string |number,
    placeHolder:string,
    control:Control<T>,
    disabled:boolean
}



export const CustomInput = <T extends  FieldValues>({label,name,type,placeHolder,control,disabled}:CustomInputProsp<T>) => {
  return (
    <div>
        
         <FormField
           control={control}
           name={name}
           render={({field})=>(
            <FormItem>
                 <FormLabel>{label}</FormLabel>
                 <Input
                  {...field}
                  disabled={disabled}
                  placeholder={placeHolder}
                  type={`${type}`}
                 />
                 <FormMessage/>

            </FormItem>
           )}

         >

         </FormField>

    </div>
   
  )
}
