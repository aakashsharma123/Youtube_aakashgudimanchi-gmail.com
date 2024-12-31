import React from 'react'
import { IoPersonCircleOutline } from "react-icons/io5";
import { SiTicktick } from "react-icons/si";
import { NavLink } from 'react-router-dom';
import FilterCategroy from './FilterButtons';
// import '../Styles/VideoDetails.css'

const VideoDetails = ({details}) => {
    
  return (
   <>
      <div key={details._id} className='videoDetailsContainer mt-3  cursor-pointer flex flex-col  xs:border-2 '>
           <NavLink to={`/video/${details._id}`}> <img className='image-container w-full rounded-lg xs:aspect-video ' src={details.imageIcon} alt="" /></NavLink>
            <div className='text-container flex gap-2'>
            <IoPersonCircleOutline className='personcircle size-8'/>
            <p className='text-description'>{details.description}</p>
            </div>
              <div className='flex text-container'>
                <p className='px-4' >{details.owner}</p>
                <span className=' size-4'><SiTicktick/></span>
              </div>
            <p className='px-4'>{details.views}</p>
            <span className='px-4'>{details.time}</span>
      </div>
   </>
  )
}

export default VideoDetails
