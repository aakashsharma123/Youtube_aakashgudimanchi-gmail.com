import React, { useState, useEffect } from 'react'
import SideBar from './SideBar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ViewProfile = () => {

  const [name, setName] = useState(localStorage.getItem('name'));

  const [email, setEmail] = useState(localStorage.getItem("email"));

  const [id, setId] = useState(localStorage.getItem("id"));

  const [channel, setChannel] = useState(null || []);

  const [channelError, setChannelError] = useState(null);

  const [reload ,setreload] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    
    getChannel();
    
  } , []);

  

  async function getChannel() {
    
    try {

      const response = await axios.get("http://localhost:3000/channels", {
        headers: {
          "Authorization": localStorage.getItem("token")
        }
      })
      if (response.status === 200) {
        setreload(false);
        setChannel(response.data.unqiuechannel);
      }
    } catch (err) {
      
      setChannelError(err);
    }
  }

  if (reload  && channel) {
      return <h1 className='text-4xl animate-pulse font-bold'>Please Wait while we are creating your profile</h1>
  }
  if (channelError) {
    return <h1>error</h1>
  }

  


  return (
    <>
      <SideBar />
      <div className='container p-8 w-full  h-screen grid grid-cols-1 place-items-center  border-violet-600 xs:scale-50'>
        <div className="whole-container border-b-2 p-10 items-start w-full grid grid-cols-1 place-items-center">

          <div className='right-part w-[10rem] h-[8rem] bg-red-500 rounded-full px-16 '> 
            <p className='text-7xl font-extrabold flex items-center justify-center h-full'>{name.charAt(0).toUpperCase()}</p>
          </div>

          
          <div className='ml-10 grid grid-cols-1 place-items-center justify-center '>
            <p className='text-2xl'>{name}</p>
            <p className='text-2xl'>{email}</p>
            <div className='mt-5 xs:grid xs:grid-cols-1 xs:place-items-center sm:grid sm:grid-cols-1 sm:place-items-center md:grid md:grid-cols-2 md:place-items-center lg:grid lg:grid-cols-2 lg:place-items-center xl:grid xl:grid-cols-2 xl:place-items-center'> 
              <button className='border-transparent bg-[#292929] px-5 py-2 rounded-xl hover:bg-gray-800 transition-all duration-100 ' onClick={() => navigate('/mychannel')}>Customize Channel</button>
              <button className='border-transparent bg-[#292929]  px-5 py-2 rounded-xl hover:bg-gray-800 transition-all duration-100 ml-5 xs:ml-1 ' onClick={() => navigate('/mychannel')} >Manage Videos</button>
            </div>
          </div>
        </div>
        

      
        {channel && (
          <section className='border-2 mt-2 border-transparent shadow-xl  rounded-lg p-10 w-full'>
                <section className='border shadow-2xl shadow-gray-800 bg-[#292929] rounded-2xl p-2'>
                <img src={channel.channelLogo} alt='You have not created any channel yet'  width={200} height={200} className='rounded mix-blend-color-burn text-yellow-100 font-bold' />
                <p className='mt-2 ml-5 '><span className='text-3xl font-bold xs:text-sm text-gray-600'>Channel Name</span> : <span className='text-2xl font-bold  xs:text-sm'>{channel.channelName}</span></p>
                </section>
          </section>
        )}
      </div>
    </>
  )
}
export default ViewProfile
