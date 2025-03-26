'use  client'

import { ProductImgUrl } from "@/api"
import { numberFormatted } from "@/utils/IndianPriceFormatt"
import { ColumnDef } from "@tanstack/react-table"
import Image from "next/image"
import { useRouter } from "next/navigation"




export type CartColumsType={
      image:string,
      productName:string,
      productPrice:number,
      productDiscount:number,
       id:string
      quantity:number,
      total:number
}

export const ProductConformationColumns:ColumnDef<CartColumsType>[]=[
    {
        accessorKey:"image",
        header:"Product Img",
        cell:({row})=>{
            return <Image
                 src={`${ProductImgUrl}/${row.original.image}`}
                 alt="img"
                 width={100}
                 height={100}
                 className=" "
              />
        }
    },
    
    {
        accessorKey:"productName",
        header:"Name",
        cell:({row})=>{
            return <p className="text-[18px] text-gray font-[500]">{row?.original?.productName}</p>
        }
        
    },
    
    {
        accessorKey:"productPrice",
        header:"price",
        cell:({row})=>{
            return <div>
                      <p className="text-gray line-through">{row.original.productPrice}</p>
                      <p className="text-[18px] text-gray font-[500]">
                       {numberFormatted(row.original.productPrice,row.original.productDiscount)}
                      </p>
                      
                   </div>
        }
    },
    
    {
        accessorKey:"productDiscount",
        header:"Discount",
        cell:({row})=>{
            return <p className="text-[18px] text-gray font-[500]">{row.original.productDiscount+'%'}</p>
        }
    },
    
    {
        accessorKey:"quantity",
        header:"Quantity",
        cell:({row})=>{
            return <p className="text-[18px] text-gray font-[500]">{row.original.quantity}</p>
        }
    },
    {
        accessorKey:"total",
        header:"Total",
        cell:({row})=>{
            
           
            
           const total= row?.original?.productPrice-row?.original?.productPrice*
            (row?.original?.productDiscount/100)
           
           
            return <p className="text-[18px] text-gray font-[500]"> 
               
             
               {numberFormatted(total*row.original.quantity,0)}
            </p>
        }
    },{
        accessorKey:'id',
       header:'Product Id',
       
       cell:({row})=>{

        const productId=row?.original?.id
        const useHandleClick=()=>{
            const router=useRouter()
            router.push(`/product/${productId}`)

        }

       

       return <p onClick={()=>useHandleClick()} className="text-gray">{productId}</p>
       }

    }
    
]