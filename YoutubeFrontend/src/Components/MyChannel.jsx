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
  const [isEdit, setIsEdit] = useState(false)
  const [channelname , setChannelname] = useState(localStorage.getItem("channels" ) || null);
  const [id , setID] = useState(localStorage.getItem('id'))

  // imageIcon , video_url , description , genre
  const [editable, setEditable] = useState({
    imageIcon: "",
    video_url: "",
    description: "",
    category: ""
  })
  const [videoId, setVideoId] = useState(null)

  // console.log(editable);



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
  async function handledelete(e, id) {
    e.preventDefault();
    try {
      const url = `http://localhost:3000/video/delete/${id}`

      const response = await axios.delete(url, {
        headers: {
          "Authorization": Token
        }
      })

      if (response.status === 200) {
        getVideoData()
        successMessage("deleted successfully")
      }
    } catch (err) {
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
  }, [])



  const handleids = async (id) => {
    setIsEdit(true)
    setVideoId(id)

    // console.log(id);

  }

  const handledata = async (e, id) => {
    setIsEdit(true)
  

    const { name, value } = e.target;

    const copydata = { ...editable };

    copydata[name] = value;

    setEditable(copydata);

  }
  const handleSubmit = async (e) => {

    const { imageIcon, video_url, description, category } = editable
    const id = videoId


    try {
      const url = `http://localhost:3000/video/edit/${id}`

      const response = await axios.put(url, {
        imageIcon, video_url, description, category
      })

      if (response.statusText === 200) {
        getVideoData()
        successMessage("updated")
      }
    } catch (err) {
      ErrorMessage("not updated")
    }
  }

  return (
    <>
      <SideBar />
     
        <>
          <div className="container w-full h-screen grid grid-cols-1 align-middle justify-center gap-5 p-5 xs:scale-75 xs:-translate-y-20  sm:75% md:75% lg:75% xl:75%">
        <div className="item-1 grid grid-cols-1 place-content-center bg-[#212121] gap-10 items-center">
          <div className="item grid grid-cols-1 place-content-center items-center gap-5">
            <img src={channel ? channel.channelLogo : ""} className='rounded-xl mix-blend-normal' width={200} height={200} alt={channel ? "loading.." : "create channel first"} />
            <div className="item text-3xl">
              <p className='font-bold'>Name: {channel ? channel.channelName : ""}</p>
              <p className='font-bold'>Created: {channel ? new Date().toDateString() : ""}</p>
            </div>
          </div>
        </div>
        {channel && (
          <>
              
        <div className='bg-[#191919] py-3 px-2 items-center flex justify-between'>
          <button onClick={() => navigate('/upload')} className='px-5 py-2 border-2 rounded-lg hover:bg-gray-500 transition-all duration-100'>Upload Video</button>
          {/* <button onClick={() => navigate('/createChannel')} className='px-5 py-2 border-2 rounded-lg hover:bg-gray-500 transition-all duration-100 ml-4'>Edit Channel</button> */}
        </div>

        <div className='w-full bg-[#212121] gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-10'>
          {data.length > 0 ? (
            <>
              {data.map((item, index) => (
                <div key={index} className='cursor-pointer border-2 border-gray-600 flex flex-col p-4'>
                  <img onClick={() => navigate(`/video/${item._id}`)} className='w-full h-28 object-cover' src={item.imageIcon} alt="" />
                  <p className='xs:block'>{item.description}</p>
                  <div className='flex justify-between'>
                    <p className='xs:block'>channel:{item.owner}</p>
                    <p className='xs:block'>views:{item.views}</p>
                  </div>
                  <div className='flex justify-between mt-auto'>
                    <p className='xs:text-sm  xs:tracking-tighter'>{item.time}</p>
                    <div className='flex gap-2 xs:gap-0'>
                      {/* setIsEdit(true) */}
                      <button onClick={() => handleids(item._id)} className='xs:scale-50 sm:scale-75 md:scale-75 lg:scale-75 xl:scale-75 px-5 py-2 hover:bg-slate-500 transition-all bg-slate-400 duration-100 rounded-lg'>Edit</button>
                      <button onClick={(e) => handledelete(e, item._id)} className='xs:scale-50 sm:scale-75 md:scale-75 lg:scale-75 xl:scale-75 px-5 py-2  bg-slate-400 hover:bg-slate-500 transition-all duration-100 rounded-lg'>Delete</button>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <p>no videos to display </p>
          )}
        </div>
          
          </>
        )}
        <div className={isEdit ? "showcontainer grid grid-cols-1 xs:scale-75 sm:scale-50 md:scale-75 lg:scale-75 xl:scale-75 2xl:scale-90 absolute w-[90%] h-full left-24 border-2 z-1 bg-[#212121]" : "hidden"}>
          <div className='flex h-fit justify-end'>
            <span onClick={() => setIsEdit(false)} className='text-3xl mr-2'>X</span>
          </div>
          <div className='rounded-xl'>
            <form className='' onSubmit={handleSubmit}  >
              <div className='flex items-center justify-center gap-4 text-2xl'>
                <img src='youtube_logo_icon_168737.ico' alt="" width={50} height={50} />
                <span className='font-bold'>Edit Video</span>
              </div>
              <div className='flex flex-col gap-5 p-5 justify-start w-full h-full xs:scale-75 sm:scale-50 md:scale-75 lg:scale-75 xl:scale-75 2xl:scale-75'>
                <input type="text" className='px-5 w-full py-4 bg-[#292929] border border-[#292929]' onChange={handledata} placeholder='Image URL' name='imageIcon' />
                <input type="text" className='px-5 w-full py-4 bg-[#292929] border border-[#292929]' onChange={handledata} placeholder='Video URL' required name='video_url' />
                <input type="text" className='px-5 w-full py-4 bg-[#292929] border border-[#292929]' onChange={handledata} placeholder='category' required name='category' />
                <textarea className='px-5 w-full py-4 resize-none bg-[#292929] border border-[#292929]' onChange={handledata} placeholder='Description' name='description' />
              </div>
              <div className='flex justify-center mt-2 gap-5'>
                <button type='submit' className='px-5 py-2 border-2 border-white rounded-lg hover:bg-[#292929]'>Edit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
        </>
    
      {/* <ToastContainer /> */}
    </>
  );
}

export default MyChannel



