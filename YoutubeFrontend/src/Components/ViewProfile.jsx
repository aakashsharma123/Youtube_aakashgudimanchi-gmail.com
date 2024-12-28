import React, { useState } from 'react'
import SideBar from './SideBar';

const ViewProfile = () => {
  const [name, setName] = useState(localStorage.getItem('name'));

  const [email, setEmail] = useState(localStorage.getItem("email"))

  return (
    <>
    <SideBar/> 
      <div className='container w-[100%] p-8  h-screen  border-violet-600  '>

        <div className="whole-container w-[100%] flex border-b-2 p-10 items-start">


          <div className='right-part w-[10rem] h-[8rem] bg-red-500 rounded-full px-16  '>

            <p className='text-7xl font-extrabold flex items-center justify-center h-full'>{name.charAt(0).toUpperCase()}</p>

          </div>

          <div className='ml-10'>
            <p className='text-2xl'>{name}</p>
            <p className='text-2xl'>{email}</p>


            <div className='mt-5'>
              <button className='border-transparent bg-[#292929] px-5 py-2 rounded-xl hover:bg-gray-800 transition-all duration-100 '>Customize Channel</button>
              <button className='border-transparent bg-[#292929] px-5 py-2 rounded-xl hover:bg-gray-800 transition-all duration-100 ml-5 '>Manage Videos</button>
            </div>
          </div>


        </div>
      </div>

    </>

  )
}

export default ViewProfile
