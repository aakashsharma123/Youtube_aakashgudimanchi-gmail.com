import React from 'react';
import { IoPersonCircleOutline } from "react-icons/io5";
import { SiTicktick } from "react-icons/si";
import { NavLink } from 'react-router-dom';
import FilterCategory from './FilterButtons';
// import '../Styles/VideoDetails.css';

const VideoDetails = ({ details }) => {

  return (
    <div key={details._id} className='videoDetailsContainer h-96 mt-3 cursor-pointer grid grid-cols-1 gap-4 w-full max-w-md mx-auto'>
      <NavLink to={`/video/${details._id}`}>
        <img className='image-container w-full h-48 md:h-64 lg:h-80 rounded-lg object-cover' src={details.imageIcon}  alt="" />
      </NavLink>
      <div className='grid grid-cols-1'>
        <div className='text-container flex items-center gap-2'>
          <IoPersonCircleOutline className='personcircle size-6 md:size-8 hidden xs:block' />
          <div className='text-description text-sm md:text-base'>{details.description}</div>
        </div>
        <div className='flex justify-between items-center text-container'>
          <div className='px-4 w-full text-sm md:text-base'>{details.owner}</div>
          <span className='size-4 md:size-6 hidden xs:block'><SiTicktick /></span>
        </div>
        <div className='flex justify-between px-4 text-sm md:text-base'>
          <p>{details.views}</p>
          <span>{details.time}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;