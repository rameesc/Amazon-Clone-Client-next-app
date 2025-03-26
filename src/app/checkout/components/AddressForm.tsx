
'use client'

import { AddressValidation } from '@/app/schema'
import { CustomeSelect } from '@/components/input/CustomeSelect'
import { CustomInput } from '@/components/input/CustomInput'
import { CustomTxetArea } from '@/components/input/CustomTxetArea'
import { Form } from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import {z} from "zod"
import 'react-phone-number-input/style.css'

import { PhoenNumberInput } from '@/components/input/PhoenNumberInput'
import clsx from 'clsx'
import { ButtonItem } from '@/components/Button/ButtonItem'
import { useQuaryAddAddress, useQuaryUpdateAddAddress, useQuerySingleAddress } from '@/hooks/useQueryAddress'
import { useAddressStore } from '@/hooks/useStore'

export const AddressForm = () => {

   
    const {mutate,isPending}=useQuaryAddAddress()

    const {newAddress,setNewAddress,updateAddress,setUpdateAddress}=useAddressStore()

     const {data}= useQuerySingleAddress(updateAddress as string)
     const {mutate:UpdateMutate,isPending:updatePeding}=useQuaryUpdateAddAddress()

    const form=useForm<z.TypeOf <typeof AddressValidation>>({
        resolver:zodResolver(AddressValidation),
        defaultValues:({
            address:'',
            area:'',
            city:"",
            country:'',
            label:'home',
            phone:'',
            pinCode:'',
            state:''
        })
        
    })

   

    const onSubmit=(values:z.infer< typeof AddressValidation>)=>{
      if(updateAddress){
        UpdateMutate(values)
      }else{
        mutate(values)
      }
        
       
       
        

    }

    const labelData=[
        {
            label:"home",
            value:"home"
        },
        {
            label:"office",
            value:"office"
        },
        {
            label:"other",
            value:"other"
        },
    ]

    const countryData=[
        {
            label:"india",
            value:"india"
        }
    ]

    const stateData=[
        {
            label:"kerala",
            value:"kerala"
        }
    ]

    const closeUpdateNewHandler=()=>{
        setNewAddress(false)
        setUpdateAddress('')
    }

    useEffect(()=>{

        form.reset({
            address:data?.address,
            area:data?.area,
            city:data?.city,
            country:data?.country,
            label:data?.label,
            phone:data?.phone,
            pinCode:data?.pinCode,
            state:data?.state
        })
        form.setValue('country',data?.country as string)
        form.setValue('label',data?.label as "home"|"other"|"office")
        form.setValue('state',data?.state as string)

    },[data,form])

    interface MyFormValues {
      address: string;
     area: string;
    label: "home" | "office" | "other";
    phone: string;
    city: string;
    pinCode: string;
    country: string;
    state: string;
    
    }
    

  return (
    <div>
        <Form {...form}>
            <form 
              className={clsx("space-y-3 border-2 p-5 rounded-md")}
              onSubmit={form.handleSubmit(onSubmit)}
             >
                <div onClick={()=>setUpdateAddress('')}>
                   
                    
                    <h1 className='text-grayDark text-[22px] font-semibold'>
                        {updateAddress?"Update Shipping Address":"Add Shipping Address"}
                        
                        </h1>
                </div>
                <div>
                <CustomInput
                  control={form.control}
                  disabled={false}
                  label='City'
                  name={'city'}
                  placeHolder='city'
                  type={'text'}
                  
                />
                <CustomInput
                  control={form.control}
                  disabled={false}
                  label='Area'
                  name={'area'}
                  placeHolder='area'
                  type={'text'}
                  
                />
                <CustomInput
                  control={form.control}
                  disabled={false}
                  label='Pic code'
                  name={'pinCode'}
                  placeHolder='pin code'
                  type={'text'}
                  
                />
                <CustomTxetArea
                  control={form.control}
                  disabled={false}
                  label='Address'
                  name={'address'}
                  placeHolder='address'
                  
                  
                />
                <CustomeSelect<MyFormValues>
                  control={form.control}
                  disabled={false}
                  label={'Label'}
                  name={'label'}
                  placeHolder='Selete label'
                  value={data?.label}
                  itemValue={labelData}

                />
                <CustomeSelect<MyFormValues>
                  
                  control={form.control}
                  value={data?.country}
                  disabled={false}
                  label={'Country'}
                  name={'country'}
                  placeHolder='Selete Country'
                  itemValue={countryData}

                />
                <CustomeSelect<MyFormValues>
                  control={form.control}
                  disabled={false}
                  label={'State'}
                  value={data?.state}
                  name={'state'}
                  placeHolder='Selete State'
                  itemValue={stateData}

                />
                 <PhoenNumberInput
                 control={form.control}
                 label='Phone'
                 name={'phone'}
                 placeHolder='Enter number'
                 disabled={false}
                 type={'text'}
                 />
                
                 <div className='flex gap-2'>

                  {newAddress  &&(
                    <ButtonItem
                    title='Back'
                    type='button'
                    onClick={closeUpdateNewHandler}
                    disabled={isPending}
                   
                    style='rounded-md font-semibold tracking-wider bg-Primary mt-[10px] ml-3'
   
                   />

                  )}
                  {updateAddress  &&(
                    <ButtonItem
                    title='Back'
                    type='button'
                    onClick={closeUpdateNewHandler}
                    disabled={isPending}
                   
                    style='rounded-md font-semibold tracking-wider bg-Primary mt-[10px] ml-3'
   
                   />

                  )}
                    <ButtonItem
                    title='Submit'
                    type='submit'
                    disabled={isPending||updatePeding}
                   
                    style='rounded-md font-semibold tracking-wider bg-Primary mt-[10px]'
   
                   />
                </div>
                 
                
              </div>
            </form>
        </Form>
    </div>
  )
}
