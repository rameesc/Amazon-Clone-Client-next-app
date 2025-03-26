'use clinet'

import { FaStar } from "react-icons/fa";

type RatingStarType={
    yourRate:number
    onClick?:()=>void
    hoverLable?:string,
    onChange?:()=>void
    item:{
        id:number,
        title:string

    }
}
export const RatingStar = ({item,onClick,yourRate,hoverLable,onChange}:RatingStarType) => {
   

    
  return (
    <div className=' relative mt-[15px]'>
       
        <span 
         className=" cursor-pointer"
         onMouseMove={onChange}
         onClick={onClick}>
            {yourRate >= item.id ?  <FaStar className='text-Primary' size={25}/> :  <FaStar className='text-gray ' size={25}/>}
           
            
        </span>
        {hoverLable==item?.title &&<span className='w-[100px]  pl-2 z-10 text-centers absolute top-[-30px] bg-black text-white rounded-md before:absolute before:content-[" "] before:w-[10px] before:h-[10px] before:bg-black before:bottom-[-5px] before:rotate-[45deg]'>
            {item?.title}
        </span>
        }
    </div>
  )
}
