'use client'



import React from 'react'

export const SuccessItem = () => {

    const makeCricle=(cricle:number)=>{
       
        
        const arrayCricle=[] 

        for(let i=0; i< cricle; i++){

            const positionX=Math.random()*100
            const positionY=Math.random()*800
            const color=`hsl(${Math.random()*300},100%,75%)`
            const animationDuration=Math.random()*2+1;
            const animationDelay=Math.random()*2

          arrayCricle.push(
            <div
            className='w-[100px] h-[100px] rounded-full  blur-lg '
            key={i}
             style={{
                position:"absolute",
                top:`${positionX}px`,
                left:`${positionY}px`,
                backgroundColor:color,
                animation: `blink  ${animationDuration}s ${animationDelay}s infinite`
                

             }}

             />
          )
            
        }
        return arrayCricle
    }
    const makeStar=(cricle:number)=>{
       
      
        const star=[] 

        for(let i=0; i< cricle; i++){


          

            const positionX=Math.random()*110
            const positionY=Math.random()*400
           
            const animationDuration=Math.random()*2+1;
            const animationDelay=Math.random()*2
            const size=Math.ceil(Math.random()*30)

          star.push(
            <div
            className=' rounded-full blur-2xl'
            key={i}
             style={{
                position:"absolute",
                top:`${positionX}px`,
                left:`${positionY}px`,
                backgroundColor:'green',
                animation: `blink  ${animationDuration}s ${animationDelay}s infinite`,
                width:`${size}px`,
                height:`${size}px`,
               
               
                

             }}

             />
          )
            
        }
        return star
    }

  return (
    <div className='flex flex-col justify-center items-center m-10'>
        <div className='w-containerW   h-screen flex  items-center flex-col'>
            <div className=' relative'>
              <h1 className='text-green text-[30px] font-semibold '>Successfully Ordered </h1>

               {makeCricle(4)}
               { makeStar(50)}

            </div>
            
            
        </div>
    </div>
  )
}
