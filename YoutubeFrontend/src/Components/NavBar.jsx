import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone, FaRecordVinyl, FaVideo } from "react-icons/fa";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { CiBellOn } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { NavLink, Outlet, useNavigate, useOutletContext } from 'react-router-dom';
import VideoDetails from './VideoDetails';
import { FilterButtons } from '../utlies/FilterButtons.jsx';
import FilterCategroy from './FilterButtons';
import Body from './Body.jsx';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { FaBucket } from "react-icons/fa6";
import { IoIosSwitch } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { SlCamrecorder } from "react-icons/sl";
import { ImYoutube2 } from "react-icons/im";
import { FaArrowRight } from "react-icons/fa";
import '../Styles/NavBar.css'
import { ErrorMessage, successMessage } from '../ErrorHandle/HandleResponse.js';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';


const NavBar = () => {
      const [Token, setToken] = useState(localStorage.getItem("token") || '');
      const [tokenHolder, setTokenHolder] = useState(localStorage.getItem("name") || '');
      const [email, setEmail] = useState(localStorage.getItem("email") || '');
      const [textContent, setTextContent] = useState('');
      const [toggleButton, setToggleButton] = useState(false);
      const [toggleSideBar, setToggleSidebar] = useState(false);
      const [channels, setChannel] = useState(null);
      const [isChannel, setIsChannel] = useState(JSON.parse(localStorage.getItem("channelrender")) || false);
      
      const navigate = useNavigate();
  
      const handleLogout = () => {
          localStorage.clear();
          setToken('');
          setTokenHolder('');
          setEmail('');
          successMessage("Logout Successful");
          navigate('/');
      };
  
      const getChannels = async () => {
          const url = 'http://localhost:3000/channels';
          try {
              const response = await axios.get(url, { headers: { "Authorization": Token } });
              if (response.status === 200) {
                  setChannel(response.data.uniquechannel);
              } else {
                  setChannel([]);
              }
          } catch (err) {
              ErrorMessage(err);
          }
      };
  
      useEffect(() => {
          if (Token) {
              getChannels();
          }
      }, [Token]);


      return (
            <>
                  {/* flex justify-between items-center */}
                  <div className="container   px-4 flex justify-between items-center  max-w-full    "> 
                        {/* first div is for left part */}

                        <div className="left-part flex items-center  space-x-3  ">
                              <GiHamburgerMenu onClick={() => setToggleSidebar(!toggleSideBar)} className='text-xl xs:hidden ' />
                              <img onClick={() => navigate('/')} src="https://cdn-icons-png.flaticon.com/512/725/725300.png" className='w-8 rounded-lg  ' />
                              <h1 onClick={() => navigate('/')} className='font-bold text-2xl xs:hidden'>Youtube</h1>
                        </div>

                        {/* secound div is for middle part */}
                        <div className="middle-part  flex items-center w-[35%] ">
                              {/* input text here  */}
                              <div className="input-div  w-[100%] flex   rounded-l-3xl">
                                    <input onChange={(e) => setTextContent(e.target.value)} type="text" placeholder='search' className='w-[100%] bg-transparent  rounded-l-lg outline-none border border-[#212121] py-2 ' />
                                    <button className='border-none  flex items-center bg-[#212121] px-3 rounded-r-2xl'>
                                          <CiSearch />
                                    </button>
                              </div>
                              {/* recording button */}
                              <div className='recording-container ml-4 w-fit flex items-center border rounded-full px-2 py-1 hover:bg-slate-200 text-xl'>
                                    <FaMicrophone className='recording' />
                              </div>

                        </div>
                        {/* thrid div is for right part */}


                        {Token && (
                              <div onClick={() => setToggleButton(!toggleButton)} className='xs:border-2 border-white xs:mr-5 '
                              >

                                    <div className='toggleIconContainer'  >
                                          <span className='flex  hover:bg-[#212121] items-center px-4 text-xl text-red-600 bg-white font-extrabold py-1 rounded-full  '>{tokenHolder.charAt(0).toUpperCase()}</span>

                                    </div>



                                    <div className={toggleButton ? 'showContainer  rounded-xl py-2 px-4 absolute bg-[#292929] h-fit w-fit right-12 transition-all duration-500 flex flex-col gap-4 ' : 'hideContainer hidden'}>

                                          <div className='container flex flex-col gap-4  '>
                                                <div className='first-part-toogle flex items-center border-b-2  xs:flex-1 xs:w-fit  '>
                                                      <div className=''>
                                                            <span className='text-2xl xs:text-sm   text-red-600 font-bold'>{tokenHolder.charAt(0).toUpperCase()}</span>
                                                      </div>
                                                      <div className='flex flex-col ml-4 '>
                                                            <span className='text-xl xs:text-sm'>{tokenHolder}</span>
                                                            <span className='text-xl xs:text-sm'>{email}</span>
                                                            {channels === true &&  isChannel === false || isChannel === true ? (
                                                                  <Link to={'/ViewProfile'}><span className='text-xl xs:text-sm text-blue-600 font-extrabold hover:text-red-600 '>View your Account</span></Link>      
                                                            ) : (
                                                                  ""
                                                            )}


                                                          
                                                      </div>
                                                </div>

                                                            {channels === true && isChannel === false || isChannel === true ? (
                                                                  <div className='flex items-center border-b-2 xs:w-[220px]' >
                                                                  <div className='flex items-center gap-4 border-b-2 xs:w-[220px]'>
                                                                  <>
                                                                        <span className='text-xl xs:text-sm '><FaArrowRight /></span>
                                                                        <span onClick={() => navigate('/mychannel')} className='text-xl xs:text-sm hover:text-red-600 hover:font-bold'>My Channel</span>
                                                                  </>
                                                                   </div>
                                                                  </div>
                                                            ) : (
                                                                  ""
                                                            )} 

                                                <div className='flex items-center xs:w-[220px]'>
                                                      <div className='flex items-center gap-4 border-b-2 w-full xs:w-[220px]' >
                                                            <span className='text-xl xs:text-sm '><ImYoutube2 /></span>
                                                            <span onClick={() => navigate('/createChannel')} className='text-xl xs:text-sm hover:text-red-600 hover:font-bold'>Create Channel</span>
                                                      </div>
                                                </div>
                                                {/* channelName */}
                                                
                                                <div className='flex items-center xs:w-[220px]'>
                                                     
                                                             <div className='flex items-center gap-4 border-b-2 w-full xs:w-[220px]' >
                                                             <span className='text-xl xs:text-sm '><FaVideo /></span>
                                                             <span onClick={() => navigate('/upload')} className='text-xl xs:text-sm hover:text-red-600 hover:font-bold'>Upload Video</span>
                                                             </div>
                                                    
                                                </div>
                                                

                                                <div className='flex items-center gap-4 border-b-2 xs:w-[220px] '>
                                                      <FaGoogle className='text-xl xs:text-sm ' />
                                                      <span className='ml-2 text-2xl xs:text-sm hover:text-red-600'>Google</span>
                                                </div>


                                                <div className='flex items-center border-b-2 gap-4 xs:w-[220px] '>
                                                      <FaBucket className='text-xl xs:text-sm ' />
                                                      <span className='ml-2 text-xl xs:text-sm  hover:text-red-600'>Purchase and MemberShip</span>
                                                </div>


                                                <div className='flex items-center border-b-2 gap-4 xs:w-[220px] '>
                                                      <IoIosSwitch className='text-xl xs:text-sm' />
                                                      <span className='ml-2 text-xl xs:text-sm hover:text-red-600'>Swicth Account</span>
                                                </div>


                                                <div onClick={() => handleLogout()} className='flex items-center xs:w-[220px] '>
                                                      <IoIosLogOut className='text-xl xs:text-sm' />
                                                      <span className='ml-2 text-xl xs:text-sm hover:text-red-600'>Logout</span>
                                                </div>



                                          </div>
                                    </div>
                              </div>
                        )}
                        {!Token && (
                              <div onClick={() => navigate('/signin')} className="right-part xs:scale-x-50 px-4 py-1 flex items-center space-x-4 border-2 mr-2 border-[#292929] hover:bg-[#292929] transition-all duration-100 rounded-lg">
                                    <div className="flex items-center  text-xl xs:text-sm xs:mr-2 " >
                                          <button className='flex justify-center border-2 border-white  rounded-full align-middle items-center xs:px-2 xs:py-1 '>
                                                <IoPersonOutline className='xs:size-3' />
                                          </button>

                                          <span className='xs:text-sm' >Signin</span>
                                    </div>
                              </div>
                        )}
                  </div>
                  <div className='flex justify-center items-center '>
                        <Outlet context={{ textContent, toggleSideBar }} />
                  </div>
                                    <ToastContainer/>
            </>
      );
}
export default NavBar;