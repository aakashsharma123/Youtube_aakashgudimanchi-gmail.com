import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import SideBar from './SideBar.jsx'
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
      <div className="flex w-full h-full">
       <SideBar />
    {/* <div className="flex flex-col"> */}
      <div className="flex-col space-x-9 justify-center py-4 w-full">
        <FilterCategroy setData={setFilterData} data={filterData} />
      {/* </div> */}
      <div className="grid grid-cols-3 w-fit h-[700px] overflow-y-auto gap-5">
        {filterData.map((each) => (
          <VideoDetails key={each.id} details={each} />
        ))}
      </div>
    </div>
  </div>
    </>
  )
}

export default Body
