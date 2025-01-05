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
  const {textContent} = useOutletContext();
  const [filterData, setFilterData] = useState(data);
  const [Token, setToken] = useState(localStorage.getItem("token"));

  const fetchData = async () => {
    try {
      const url = "http://localhost:3000/";
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
        <div className='mainContainer flex w-full max-h-full transition-all duration-100  '>
          <div className="sideBar-container main flex w-full max-h-full transition-all duration-100 ">
            <SideBar />
            <div className="flex-col space-x-9 justify-center py-4 w-full">
              <FilterCategory setData={setFilterData} data={filterData} />
              <div className="videocontainer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 h-[700px]   overflow-y-auto">
                {filterData.map((each) => (
                  <VideoDetails key={each.id} details={each} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {!Token && (
        <div className='mainContainer flex w-full max-h-full xs:h-screen'>
        <div className="sideBar-container main flex w-full max-h-full o">
          <SideBar />
          <div className="flex-col space-x-9 justify-center py-4 w-full transition-all duration-100">
            <FilterCategory setData={setFilterData} data={filterData} />
            <div className="videocontainer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 h-[700px]  overflow-y-auto">
              {filterData.map((each) => (
                <VideoDetails key={each.id} details={each} />
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
