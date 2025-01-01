import React from 'react';
import { IoPersonCircleOutline } from "react-icons/io5";
import { SiTicktick } from "react-icons/si";
import { NavLink } from 'react-router-dom';
import FilterCategroy from './FilterButtons';
import '../Styles/VideoDetails.css';

const VideoDetails = ({ details }) => {
  return (
    <>
      <div key={details._id} className='videoDetailsContainer mt-3 cursor-pointer flex flex-col  xs:text-center'>
        <NavLink to={`/video/${details._id}`}>
          <img className='image-container w-full rounded-lg' src={details.imageIcon} alt="" />
        </NavLink>
        <div className='text-container flex gap-2 '>
          <IoPersonCircleOutline className='personcircle size-8 xs:hidden' />
          <div className='text-description  '>{details.description}</div>
        </div>
        <div className='flex text-container'>
          <div className='px-4 xs:block xs:ml-28 w-full'>{details.owner}</div>
          <span className='size-4 xs:hidden'><SiTicktick /></span>
        </div>
        <p className='px-4 xs:text-xs xs:mr-32'>{details.views}</p>
        <span className='px-4 xs:text-xs xs:mr-32'>{details.time}</span>
      </div>
    </>
  );
};

export default VideoDetails;