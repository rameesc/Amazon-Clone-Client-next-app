'use client'


import React from 'react'
import { Control,FieldValues,Path } from 'react-hook-form'
import { FormField, FormItem, FormMessage } from '../ui/form'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Label } from '../ui/label'

  


type CustomeSelectProsp<T extends FieldValues> ={
    label:string,
    name:Path <T>,
   
    placeHolder:string,
    control?:Control<T>,
    disabled:boolean
    value?:string
    itemValue:{label:string,value:string}[]
}

// Define your form type explicitly
interface AddressFormValues {
  
  address: string;
  area: string;
  label: string;
  phone: string;
  city: string;
  pinCode: string;
  country: string;
  state: string;
}

export const CustomeSelect = <T extends AddressFormValues>({label,name,placeHolder,control,disabled,itemValue,value}:CustomeSelectProsp<T>) => {
  return (
    <div>
        <FormField
           control={control}
           name={name}
           render={({field})=>(
            <FormItem>
                <Label>{label}</Label>
                <Select onValueChange={field.onChange} defaultValue={field.value} value={value} disabled={disabled}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder={placeHolder} />
                    </SelectTrigger>
                    <SelectContent>
                        {itemValue.map((item,index)=>(
                         <SelectItem key={index} value={item?.value}>{item?.label}</SelectItem>
                        ))}
                     
                  </SelectContent>
                </Select>
                <FormMessage/>

            </FormItem>
           )}

         >

         </FormField>

    </div>
  )
}
