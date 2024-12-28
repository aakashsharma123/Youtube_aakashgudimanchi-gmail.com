import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const SuggestedVideos = () => {
  const [SuggestedVideos, setSuggestedVideos] = useState ([]);
  const [Token , setToken] = useState (localStorage.getItem ("token"))
  // axios.get ('http://localhost:3000/')
  //     .then ((data) => {
  //         setSuggestedVideos (data.data)
  //     })
  //     .catch ((err) => {
  //         console.log ("error while fetching data from backend to frontend")
  //     })


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
  })


  return (
        <>
            <div className='w-fit  grid grid-cols-1'>
                {
                  SuggestedVideos.length > 0 ? (
                    SuggestedVideos.map ((each ) => (
                          <div key={each._id} className=' flex gap-4 w-full mt-5'>
                                <div className=''>
                                    <NavLink to={`/video/${each._id}`}> <img src={each.imageIcon} className='h-32 rounded-lg max-w-96  ' alt="" /></NavLink>
                                </div>
                                <div className='ml-5'>
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
