'use client'



import React from 'react'
import {Control,FieldValues,Path} from "react-hook-form"
import { FormField, FormItem ,FormLabel,FormMessage,} from '../ui/form'

import { Textarea } from '../ui/textarea'

type CustomTxetAreaProsp<T extends FieldValues>={
    label:string,
    name:Path<T>,
    
    placeHolder:string,
    control:Control<T>,
    disabled:boolean
}

export const CustomTxetArea = <T extends FieldValues> ({label,name,placeHolder,control,disabled}:CustomTxetAreaProsp<T>) => {
  return (
    <div>
        <FormField
           control={control}
           name={name}
           render={({field})=>(
            <FormItem>
                 <FormLabel>{label}</FormLabel>
                 <Textarea
                 
                  {...field}
                    
                   placeholder={placeHolder}
                   
                   disabled={disabled}
                   
                
                 />
                 
                 <FormMessage/>

            </FormItem>
           )}

         >

         </FormField>

    </div>
  )
}
