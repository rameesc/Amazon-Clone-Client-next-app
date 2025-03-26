'use client'

import { cancelValidation } from '@/app/schema'
import { ButtonItem } from '@/components/Button/ButtonItem'
import { CustomTxetArea } from '@/components/input/CustomTxetArea'
import { Form } from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import React from 'react'
import { useForm } from 'react-hook-form'
import {z} from 'zod'

type WhyYouCancelProsp={
    open:boolean,
    onClose:()=>void,
    onCancelOrder:(value:string)=>void
    disabled:boolean
}
export const WhyYouCancel = ({onClose,open,onCancelOrder,disabled}:WhyYouCancelProsp) => {

    const form=useForm<z.TypeOf <typeof cancelValidation>>({

        resolver:zodResolver(cancelValidation),
        defaultValues:({
            remark:''
        })

    })

    const onSubmit=(value:z.infer <typeof cancelValidation>)=>{

     
        onCancelOrder(value.remark)
    }

    const remarkSuggestion=[
        'Not Good Product 🤮 ',
        "I have  another Ideas 🧐",
        "No Money  🤑",
        "This not My size 😩",
        "I find Out Good product better then this 😏"
    ]

    const selectSuggestionHanhler=(s:string)=>{

        form.setValue('remark',s)

    }
  return (
    <div className={clsx(' z-10 bg-[#1f1c1cb0] fixed top-0 left-0 w-[100%] h-[100%] flex justify-center  items-center',
        open ?"flex":"hidden"

    )}>

        <div className='bg-white p-3 rounded-md relative'>
            <Form {...form}>
                <form className=' space-y-3'  onSubmit={form.handleSubmit(onSubmit)}>
                    <div>
                        <h1 className='font-semibold text-[22px]'>Why You Cancel This Order</h1>
                    </div>
                    <div
                     className='text-red  cursor-pointer font-bold text-[22px] absolute top-0 right-3'
                     onClick={onClose} 
                     >
                        x
                    </div>

                     <div className='flex flex-col gap-2'>
                        {remarkSuggestion.map((s,i)=>(
                            <div key={s}  onClick={()=>selectSuggestionHanhler(s)} className={clsx(' rounded-md border-2 border-borderColor cursor-pointer hover:bg-[rgba(56,80,94,0.82)] p-3 ',
                                form.watch('remark')==s ?'bg-Primary':"bg-[rgba(56,80,94,0.58)]"
                            )}>
                                <p>{i+1}. {s}</p>
                            </div>
                        ))}
                     </div>
                     <CustomTxetArea
                       control={form.control}
                       disabled={disabled}
                       label='Comment Your Remark'
                       name='remark'
                       placeHolder='Remark'

                     />
                     <ButtonItem
                       style='bg-Primary'
                       title='Submit'
                       disabled={disabled}
                       type='submit'

                     />

                </form>
            </Form>

        </div>
    </div>
  )
}
