'use client'


import { ProductItemTitle } from '@/components/Products/ProductItemTitle'
import { useQueryGenaralFilter } from '@/hooks/useQueryProduct'
import React, { useState } from 'react'
import { FilterItems } from './FilterItems'
import { PriceFilter } from './PriceFilter'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { ButtonItem } from '@/components/Button/ButtonItem'

export const ProductFilter = () => {
    const {data,isPending}=useQueryGenaralFilter()
    const [price, setPrice] = useState<number>(data?.prices[0] ?? 0)

    const router=useRouter()
    const search=useSearchParams()
    const pathName=usePathname()

    if(isPending){

        return <p>lading</p>
    }

    
   

    const priceHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{

      const params=new URLSearchParams(search.toString())


      const value=e.target.value
      const minPice=data?.prices[0] 
      setPrice(+value)

      if(price){
        params.set('min_price',minPice?.toString() as string)
        params.set('max_price',value)
      }else{
        params.delete('max_price')
        params.delete('min_price')
      }

      router.push(`${pathName}?${params.toString()}`)

    }

    const resetHandler=()=>{
      if(search.get('category')){
        router.push(`${pathName}?category=${search.get('category')}`)

      }else{
        router.push(`${pathName}?keyword=${search.get('keyword')}`)
      }
      
    }
  return (
    <div className=' border-[5px] rounded-md  h-[500px] overflow-hidden  overflow-y-scroll border-Primary p-5 flex flex-col gap-3'>
      <div>
       <ProductItemTitle 
       title='Filter Produtcs'
       />
       <ButtonItem
        
        title='Reset'
        style='bg-blue'
        type='button'
        onClick={resetHandler}
       />

      </div>
     

     <FilterItems
       name='Colores'
       data={data?.colors as string[]}
     />
     <FilterItems
       name='Discount'
       data={data?.discount as string[]|number[]}
     />
     <FilterItems
       name='Sizes'
       data={data?.sizes as string[]|number[]}
     />
     <FilterItems
       name='Weights'
       data={data?.weights as string[]|number[]}
     />
     <FilterItems
       name='Rating'
       data={data?.ratings as string[]|number[]}
     />
     <PriceFilter
      name='Price'
      min={data?.prices[0] as number}
      max={data?.prices[1] as number}
      priceValue={price}
      onChange={priceHandler as ()=>void}
     />
    

     

    
    </div>
  )
}
