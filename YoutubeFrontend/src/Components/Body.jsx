import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import SideBar from './SideBar.jsx'
import VideoDetails from './VideoDetails'
import axios from 'axios';
import FilterCategroy from './FilterButtons.jsx';
import { useOutletContext } from 'react-router-dom';
import { successMessage } from '../ErrorHandle/HandleResponse.js';



const Body = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const {textContent , togg} = useOutletContext();
  const [filterData , setFilterData] = useState (data);
  const [Token , setToken] = useState(localStorage.getItem("token"));

  const fetchData = async () => {
        try {
            const url = "http://localhost:3000/";
            const response = await fetch(url , {
              method : 'GET',
              headers : {
                'Authorization' : Token
              }
            });

            if (response.ok) {
                let result = await response.json();
                setData (result)
                setLoading(false)
            }            
        }catch (err) {
          console.log("not fetched from backend to frontend")
        }
  }
  useEffect(() => {
     fetchData()
  }, [])

  useEffect(() => {
    
      const filterVideos = data.filter ((each) => {
        return each.description.toLowerCase().includes(textContent.toLowerCase())
      })

      setFilterData (filterVideos)

  }, [textContent , data]);

  console.log(data);
  
  
  if (loading) {
    return <h1>Loading......</h1>
  }

  return (
    <>
        {Token && (
                    <div className="flex w-full h-full">
                    <SideBar />
                {/* <div className="flex flex-col"> */}
                  <div className=" flex-col space-x-9 justify-center py-4 w-full">
                    <FilterCategroy setData={setFilterData} data={filterData} />
                  {/* </div> */}
                  <div className="grid grid-cols-3 w-fit h-[700px] overflow-y-auto gap-5">
                    {filterData.map((each) => (
                      <VideoDetails key={each.id} details={each} />
                    ))}
                  </div>
                </div>
              </div>
        )}

        {!Token && (
                  <div className="flex w-full h-full">
                  <SideBar />
              {/* <div className="flex flex-col"> */}
                <div className=" flex-col space-x-9 justify-center py-4 w-full">
                  <FilterCategroy setData={setFilterData} data={filterData} />
                {/* </div> */}
                <div className="grid grid-cols-3 w-fit h-[700px] overflow-y-auto gap-5">
                  {filterData.map((each) => (
                    <VideoDetails key={each.id} details={each} />
                  ))}
                </div>
              </div>
            </div>
        )}
    </>
  )
}

export default Body
