import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import SideBar from './SideBar.jsx';
import VideoDetails from './VideoDetails';
import axios from 'axios';
import FilterCategory from './FilterButtons.jsx';
import { useOutletContext } from 'react-router-dom';
import { successMessage } from '../ErrorHandle/HandleResponse.js';
import '../Styles/Body.css';

const Body = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { textContent } = useOutletContext();
  const [filterData, setFilterData] = useState(data);
  const [Token, setToken] = useState(localStorage.getItem("token"));

  const fetchData = async () => {
    try {
      const url = "http://localhost:3001/";
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': Token
        }
      });

      if (response.ok) {
        let result = await response.json();
        setData(result);
        setLoading(false);
      }
    } catch (err) {
      console.log("not fetched from backend to frontend");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filterVideos = data.filter((each) => {
      return each.description.toLowerCase().includes(textContent.toLowerCase());
    });

    setFilterData(filterVideos);
  }, [textContent, data]);

  if (loading) {
    return <h1>Loading......</h1>;
  }

  return (
    <>
      {Token && (
        <div className='mainContainer flex w-full h-screen transition-all duration-100'>
          <div className="sideBar-container main flex w-full h-screen transition-all duration-100">
            <SideBar />
            <div className="flex flex-col w-full h-screen px-2 sm:px-4 md:px-6 py-4 overflow-hidden">
              <FilterCategory setData={setFilterData} data={filterData} />
              <div className="videocontainer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 flex-1 overflow-y-auto w-full py-4">
                {filterData.map((each) => (
                  <VideoDetails key={each._id} details={each} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {!Token && (
        <div className='mainContainer flex w-full h-screen transition-all duration-100'>
          <div className="sideBar-container main flex w-full h-screen transition-all duration-100">
            <SideBar />
            <div className="flex flex-col w-full h-screen px-2 sm:px-4 md:px-6 py-4 overflow-hidden">
              <FilterCategory setData={setFilterData} data={filterData} />
              <div className="videocontainer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 flex-1 overflow-y-auto w-full py-4">
                {filterData.map((each) => (
                  <VideoDetails key={each._id} details={each} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Body;
