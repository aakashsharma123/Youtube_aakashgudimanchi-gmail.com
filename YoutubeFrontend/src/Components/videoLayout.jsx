import React from 'react'
import SideBar from './SideBar'
import EachVideo from './EachVideo'
import SuggestedVideos from './SuggestedVideos'

const VideoLayout = () => {
  return (

    <div className='flex flex-shrink flex-grow'>
            <SideBar /> 
              <div className='overflow-y-auto h-[670px] flex xs:flex-col xs:h-[670px]   '>
                  <EachVideo/>
                  <SuggestedVideos />
              </div>
    </div>
  )
}

export default VideoLayout
