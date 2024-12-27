import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { CiBellOn } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { Outlet, useNavigate } from 'react-router-dom';
import VideoDetails from './VideoDetails';
import { FilterButtons } from '../utlies/FilterButtons.jsx';
import FilterCategroy from './FilterButtons';
import Body from './Body.jsx';

const NavBar = () => {
      const navigate = useNavigate()
      const [textContent , setTextContent] = useState ('');      
      return (
            <>
                  <div className="container relative flex justify-between items-center px-4 max-w-full ">
                        {/* first div is for left part */}

                        <div className="left-part flex items-center  space-x-3 ">
                              <GiHamburgerMenu className='text-xl' />
                              <img onClick={() => setToggleButton(!toggleButton)} src="https://cdn-icons-png.flaticon.com/512/725/725300.png" className='w-8 rounded-lg ' />
                              <h1 onClick={() => navigate('/')} className='font-bold text-2xl'>Youtube</h1>
                        </div>

                        {/* secound div is for middle part */}
                        <div className="middle-part  flex items-center w-[35%]">
                              {/* input text here  */}
                              <div className="input-div  w-[100%] flex   rounded-l-3xl">
                                    <input   onChange={(e) => setTextContent(e.target.value)} type="text" placeholder='search' className='w-[100%] bg-transparent  rounded-l-lg outline-none border border-[#212121] py-2 ' />
                                    <button className='border-none  flex items-center bg-[#212121] px-3 rounded-r-2xl'>
                                          <CiSearch />
                                    </button>
                              </div>
                              {/* recording button */}
                              <div className='ml-4 w-fit flex items-center border rounded-full px-2 py-1 hover:bg-slate-200 text-xl'>
                                    <FaMicrophone />
                              </div>
                        </div>
                        {/* thrid div is for right part */}
                        <div onClick={() => navigate('/signin')} className="right-part  px-4 py-1 flex items-center space-x-4 border-2 mr-2 border-[#292929] hover:bg-[#292929] transition-all duration-100 rounded-lg">
                              <div className="flex items-center  text-xl ">
                                    <button className='flex justify-center border-2 border-white  rounded-full align-middle items-center'>
                                          <IoPersonOutline />
                                    </button>

                                    sign in
                              </div>
                        </div>
                  </div>

                  <div className='flex justify-center items-center '>
                              <Outlet context={textContent} />
                  </div>
            </>
      );
}

export default NavBar;
