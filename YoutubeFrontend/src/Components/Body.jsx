import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import SideBar from './SideBar'
import VideoDetails from './VideoDetails'
import axios from 'axios';
import FilterCategroy from './FilterButtons.jsx';
import { useOutletContext } from 'react-router-dom';


const Body = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const textContent = useOutletContext();
  const [filterData , setFilterData] = useState (data);

  useEffect(() => {
    axios.get('http://localhost:3000/')
      .then((data) => {
        setData(data.data)
        setLoading(false);
      }).catch((err) => {
        console.log("not fetched from backend to frontend")
      })
  }, [])

  useEffect(() => {
    
      const filterVideos = data.filter ((each) => {
        return each.description.toLowerCase().includes(textContent.toLowerCase())
      })

      setFilterData (filterVideos)

  }, [textContent , data]);

  
  if (loading) {
    return <h1>Loading......</h1>
  }

  return (
    <>
      <div className='flex'>
        <SideBar />
        <div className='flex-grow'>
          <div className='flex justify-around py-4 '>
            <FilterCategroy setData={setData} data={filterData} />
          </div>

          <div className='grid grid-cols-3 w-full max-h-[700px] overflow-y-auto gap-5'>
            {
              filterData.map((each, index) => {
                return <VideoDetails key={each.id} details={each} />
              })
            }
          </div>
        </div>
      </div>

    </>
  )
}

export default Body
