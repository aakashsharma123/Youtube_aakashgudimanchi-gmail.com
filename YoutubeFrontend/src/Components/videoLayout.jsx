import React from 'react'
import SideBar from './SideBar'
import EachVideo from './EachVideo'
import SuggestedVideos from './SuggestedVideos'

const VideoLayout = () => {
  return (

    <div className='flex  '>
            <SideBar /> 
              <div className='overflow-y-auto h-[670px] flex xs:flex-col  '>
                  <EachVideo/>
                  <SuggestedVideos />
              </div>
    </div>
  )
}

export default VideoLayout
