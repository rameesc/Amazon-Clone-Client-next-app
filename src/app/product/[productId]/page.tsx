

import React from 'react'
import { SingleProduct } from './components/SingleProduct'
import { RatingReview } from './components/RatingReview'
import { YoutubeVideos } from './components/YoutubeVideos'




const SingleProductPage =async () => {

 
  return (
    <div>
        <SingleProduct/>
        <div className='flex flex-col  items-center'>
          <div className='w-[95%] sm:w-containerW mt-[50px]'>
            <div>
              <YoutubeVideos/>
            </div>
           <RatingReview/>
          </div>
        </div>
        
        

    </div>
   
  )
}

export default SingleProductPage