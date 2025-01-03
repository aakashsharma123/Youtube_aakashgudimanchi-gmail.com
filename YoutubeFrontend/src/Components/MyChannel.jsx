import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import SideBar from './SideBar'
import { useNavigate, useOutletContext, useParams } from 'react-router-dom'
import axios from 'axios'
import { ErrorMessage, successMessage } from '../ErrorHandle/HandleResponse'
import { ToastContainer, toast } from 'react-toastify';
// import { useOutletContext } from 'react-router-dom';
const MyChannel = () => {
  const [Token, setToken] = useState(localStorage.getItem('token'));
  const [channel, setchannel] = useState(null || []);
  const [data, setData] = useState(null || []);
  const [toggleButton, setToggleButton] = useState(false)
  const navigate = useNavigate();


  
  
    async function getVideoData() {
      const url = "http://localhost:3000/get/video"
  
      try {
        const response = await axios.get(url, {
          headers: {
            'Authorization': Token
          }
        })
  
        if (response.status === 200) {
          console.log(response.data.videos);
  
          setData(response.data.videos);
        }
      } catch (err) {
        console.log(err);
      }
    }
    async function handledelete(e)  {
            e.preventDefault();
        try {
            const url = `http://localhost:3000/video/delete`
  
            const response = await axios.delete (url , {
              headers : {
                "Authorization" : Token
              }
            })
  
            if (response.status === 200) {
                getVideoData()
                 successMessage("deleted successfully")
            }
        }catch(err) {
            ErrorMessage(err)
        }
    }
    async function getchannel() {
      
    const url = 'http://localhost:3000/channels';
    

    try {
      const response = await axios.get(url, {
        headers: {
          'Authorization': Token
        }
      })

      if (response.status === 200) {
        // console.log(response);
        setchannel(response.data.unqiuechannel)
      }
    } catch (err) {
      console.log(err);
    }
  }
  
  if (data === null) {
    return <h1>loading....</h1>
  }

  if (channel === null) {
    return <h1>Loading....</h1>
  }
  useEffect(() => {
    getchannel();
  }, [])

  useEffect(() => {
    getVideoData();
  }, [])

  useEffect(() => {
      handledelete()
  } , [])
  


  // console.log(data);
  return (
    <>
      <SideBar />

      <div className="container w-full h-screen grid grid-cols-1 align-middle justify-center gap-5 p-5">
        <div className="item-1 grid grid-cols-1 place-content-center bg-[#212121] gap-10 items-center">
          <div className="item grid grid-cols-1 place-content-center items-center gap-5">
            <img src={channel.channelLogo} className='rounded-full mix-blend-normal' width={200} height={200} alt="Channel Logo" />
            <div className="item text-3xl">
              <p className='font-bold'>Name: {channel.channelName}</p>
              <p className='font-bold'>Created: {new Date().toDateString()}</p>
            </div>
          </div>
        </div>

        <div className='bg-[#191919] py-3 px-2 items-center flex justify-between'>
          <button onClick={() => navigate('/upload')} className='px-5 py-2 border-2 rounded-lg hover:bg-gray-500 transition-all duration-100'>Upload Video</button>
          {/* <button onClick={() => navigate('/createChannel')} className='px-5 py-2 border-2 rounded-lg hover:bg-gray-500 transition-all duration-100 ml-4'>Edit Channel</button> */}
        </div>

        <div className='w-full bg-[#212121] gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-10'>
          {data.length > 0 ? (
            <>
              {data.map((item, index) => (
            <div key={index}  className='cursor-pointer border-2 border-gray-600 flex flex-col p-4'>
              <img onClick={() => navigate(`/video/${item._id}`)} className='w-full h-28 object-cover' src={item.imageIcon} alt="" />
              <p>{item.description}</p>
              <div className='flex justify-between'>
                <p>channel:{item.owner}</p>
                <p>views:{item.views}</p>
              </div>
              <div className='flex justify-between mt-auto'>
                <p>{item.time}</p>
                <div className='flex gap-2'>
                  <button className='px-5 py-2 hover:bg-slate-500 transition-all bg-slate-400 duration-100 rounded-lg'>Edit</button>
                  <button onClick={(e) => handledelete(e )} className='px-5 py-2  bg-slate-400 hover:bg-slate-500 transition-all duration-100 rounded-lg'>Delete</button>
                </div>
              </div>
            </div>
          ))}
            </>
          ) : (
            <p>no videos to display </p>
          )}
        </div>
        <ToastContainer/>
      </div>
    </>
  );
}

export default MyChannel


