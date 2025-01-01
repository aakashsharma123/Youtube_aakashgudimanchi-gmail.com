import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const SuggestedVideos = () => {
  const [SuggestedVideos, setSuggestedVideos] = useState ([]);
  const [Token , setToken] = useState (localStorage.getItem ("token"))

  const suggestedVideosFetch = async () => {
    const url = 'http://localhost:3000/'
    const response = await fetch (url , {
      method : 'GET',
      headers : {
        'Authorization' : Token
      }
    })
    if (response.ok) {
      const result = await response.json();
      setSuggestedVideos(result)
    }
  }
  
  



  useEffect (() => {
    suggestedVideosFetch()
  },[])


  return (
        <>
            <div className='w-fit h-fit  mt-2  grid grid-cols-1 justify-center items-start  xs:-translate-y-[500px] xs:hidden '>
             
                {
                  SuggestedVideos.length > 0 ? (
                    SuggestedVideos.map ((each ) => (
                          <div key={each._id} className=' flex w-full mt-5 '>
                                <div className='h-[100%]'>
                                    <NavLink to={`/video/${each._id}`}> <img src={each.imageIcon} className='max-w-44 h-32  rounded-lg' alt="" /></NavLink>
                                </div>
                                <div className='ml-5 mt-2 max-w-full'>
                                  <p>{each.description}</p> 
                                  <p className='font-light'>{each.owner}</p>
                                  <span>{each.views}</span>
                                  <span>{each.time}</span>
                                </div>
                          </div>
                    ) )
                  ) : (
                    <h1>data is not greater than</h1>
                  )
                }
            </div>
        </>
  )
}

export default SuggestedVideos