import React from 'react'
import SideBar from './SideBar'
import EachVideo from './EachVideo'
import SuggestedVideos from './SuggestedVideos'

const VideoLayout = () => {
  return (

    <div className='flex flex-col md:flex-row w-full h-screen overflow-hidden'>
      <SideBar />
      <div className='flex-1 flex flex-col lg:flex-row overflow-y-auto w-full'>
        <EachVideo />
        <SuggestedVideos />
      </div>
    </div>
  )
}

export default VideoLayout
