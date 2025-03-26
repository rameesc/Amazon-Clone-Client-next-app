'use client'


import { useQuerySingleProduct } from '@/hooks/useQueryProduct'
import React from 'react'

export const YoutubeVideos = () => {
    const {data}=useQuerySingleProduct()

    //youtube video
    const videoIds=data?.videoURL?.map((link)=>(
        link.split('/shorts')[1]
       ))

     const filterVideoIds=videoIds?.filter((id)=>id!==undefined)


      console.log(filterVideoIds)
     if(filterVideoIds && filterVideoIds.length < 1){
         return null
     }
  return (
    <div className=' space-y-3'>
      <div>
         <h1 className='font-semibold text-[20px]'>Product Videos</h1>
      </div>
      <div className='flex gap-3 flex-wrap'>
        {filterVideoIds?.map((id)=>(
            <div key={id} className="mb-4">
            <iframe
              src={`https://www.youtube.com/embed/${id}`}
              title="YouTube Shorts"
              
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-[300px] h-64 rounded-lg"
            />
          </div>

        ))}
      </div>

    </div>
  )
}
