import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const SuggestedVideos = () => {
  const [SuggestedVideos, setSuggestedVideos] = useState([]);
  const [Token, setToken] = useState(localStorage.getItem("token"))

  const suggestedVideosFetch = async () => {
    const url = 'http://localhost:3001/'
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': Token
      }
    })
    if (response.ok) {
      const result = await response.json();
      setSuggestedVideos(result)
    }
  }





  useEffect(() => {
    suggestedVideosFetch()
  }, [])


  return (
    <>
      <div className='w-full lg:w-[400px] flex-shrink-0 p-4'>

        {
          SuggestedVideos.length > 0 ? (
            SuggestedVideos.map((each) => (
              <div key={each._id} className=' flex w-full mt-5 '>
                <div className='h-[100%]'>
                  <NavLink to={`/video/${each._id}`}> <img src={each.imageIcon} className='max-w-44 h-32  rounded-lg object-cover' alt="" /></NavLink>
                </div>
                <div className='ml-5 mt-2 max-w-full'>
                  <p className='text-sm font-semibold line-clamp-2'>{each.description}</p>
                  <p className='font-light text-xs text-gray-400'>{each.owner}</p>
                  <span className='text-xs text-gray-400'>{each.views} • {each.time}</span>
                </div>
              </div>
            ))
          ) : (
            <h1>No suggested videos</h1>
          )
        }
      </div>
    </>
  )
}

export default SuggestedVideos