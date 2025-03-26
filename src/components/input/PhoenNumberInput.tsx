'use client'
import { FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Control,Path,FieldValues } from 'react-hook-form'
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import React from 'react'

type CustomInputProsp<T extends FieldValues>={
    label:string,
    name:Path<T>,
    type:string |number,
    placeHolder:string,
    control:Control<T>,
    disabled:boolean
}
export const PhoenNumberInput = <T extends FieldValues>({label,name,placeHolder,control}:CustomInputProsp<T>) => {
  return (
    <div>
        
        <FormField
           control={control}
           name={name}
           render={({field})=>(
            <FormItem>
                 <FormLabel>{label}</FormLabel>
                 <PhoneInput
                  {...field}
                  international
                  defaultCountry="US"
                  placeholder={placeHolder}
                  className="border p-2 rounded"
                 />
                 <FormMessage/>

            </FormItem>
           )}

         >

         </FormField>
    </div>
  )
}
