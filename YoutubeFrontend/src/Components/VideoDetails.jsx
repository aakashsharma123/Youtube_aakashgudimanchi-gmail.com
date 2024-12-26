import React from 'react'
import { IoPersonCircleOutline } from "react-icons/io5";
import { SiTicktick } from "react-icons/si";
import { NavLink } from 'react-router-dom';
import FilterCategroy from './FilterButtons';

const VideoDetails = ({details}) => {
    
  return (
   <>
      <div className='mt-3 cursor-pointer'>
           <NavLink to={`/video/${details._id}`}> <img className='w-full rounded-lg' src={details.imageIcon} alt="" /></NavLink>
            <div className='flex gap-2'>
            <IoPersonCircleOutline className=' size-8'/>
            <p>{details.description}</p>
            </div>
              <div className='flex'>
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
