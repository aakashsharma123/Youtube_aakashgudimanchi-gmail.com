import React, { useState } from 'react'
import { IoMdHome, IoMdVideocam } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdHome, MdOutlineSubscriptions } from "react-icons/md";
import { PiGreaterThan } from "react-icons/pi";
import { DiAtom } from "react-icons/di";
import { GoHistory } from "react-icons/go";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { MdVideoSettings } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { GiZigzagLeaf } from "react-icons/gi";
import { LuShoppingBag } from "react-icons/lu";
import { IoMusicalNotes } from "react-icons/io5";
import { PiFilmSlateDuotone } from "react-icons/pi";
import { MdOutlineLiveTv } from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { GiTrophyCup } from "react-icons/gi";
import { GoLightBulb } from "react-icons/go";
import { MdOutlineCurtainsClosed } from "react-icons/md";
import { MdPodcasts } from "react-icons/md";
import { FaPerson, FaYoutube } from "react-icons/fa6";
import { SiYoutubemusic } from "react-icons/si";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { IoSettingsOutline } from "react-icons/io5";
import { CiFlag1 } from "react-icons/ci";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { RiFeedbackLine } from "react-icons/ri";
import FilterCategroy from './FilterButtons';
import '../Styles/SideBar.css';
import { useNavigate, useOutlet, useOutletContext } from 'react-router-dom';
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { FaHistory } from 'react-icons/fa';

const SideBar = () => {

    const navigate = useNavigate()
    const [toggleButton , setToggleButton] = useState (false);
    const {toggleSideBar} = useOutletContext();

    // console.log(toggleSideBar);
    



    const items1 = [
        {
            id: 2,
            text: "Shorts",
            icon: <SiYoutubeshorts />
        },

        {
            id: 3,
            text: "Subcriptions",
            icon: <MdOutlineSubscriptions />
        }
    ]

    const items2 = [
        {
            id: 4,
            text: "Your Channel",
            icon: <DiAtom />
        },

        {
            id: 5,
            text: "History",
            icon: <GoHistory />
        },

        {
            id: 6,
            text: "Playlists",
            icon: <MdOutlinePlaylistPlay />
        },

        {
            id: 7,
            text: "Our Videos",
            icon: <MdVideoSettings />
        },

        {
            id: 8,
            text: "Watch later",
            icon: <MdOutlineWatchLater />
        },

        {
            id: 9,
            text: "Liked Vidoes",
            icon: <AiOutlineLike />
        }
    ]

    const items3 = [
        {
            id: 1,
            text: "Trending",
            icon: <GiZigzagLeaf />
        },

        {
            id: 2,
            text: "Shopping",
            icon: <LuShoppingBag />
        },

        {
            id: 3,
            text: "Music",
            icon: <IoMusicalNotes />
        },

        {
            id: 4,
            text: "films",
            icon: <PiFilmSlateDuotone />
        },

        {
            id: 5,
            text: "Live",
            icon: <MdOutlineLiveTv />
        },

        {
            id: 6,
            text: "Gaming",
            icon: <SiYoutubegaming />
        },

        {
            id: 7,
            text: "News",
            icon: <HiOutlineNewspaper />
        },

        {
            id: 8,
            text: "Sport",
            icon: <GiTrophyCup />
        },

        {
            id: 9,
            text: "Fashion & Beauty",
            icon: <GoLightBulb />
        },

        {
            id: 10,
            text: "Podcasts",
            icon: <MdPodcasts />
        }
    ]

    const items4 = [
        {
            id: 1,
            text: "Youtube Premium",
            icon: <FaYoutube />
        },


        {
            id: 2,
            text: "Youtube Studio",
            icon: <SiYoutubestudio />
        },


        {
            id: 3,
            text: "Youtube Music",
            icon: <SiYoutubemusic />
        },

        {
            id: 4,
            text: "Youtube Kids",
            icon: <SiYoutubekids />
        }
    ]

    const items5 = [
        {
            id: 1,
            text: "settings",
            icon: <IoSettingsOutline />
        }, {
            id: 2,
            text: "Report History",
            icon: <CiFlag1 />
        }, {
            id: 3,
            text: "Help",
            icon: <IoIosHelpCircleOutline />
        }, {
            id: 4,
            text: "Send Feedback",
            icon: <RiFeedbackLine />
        }
    ]

    return (
        <>

            {/* {
            id: 1,
            text: "Home",
            icon: <IoMdHome />
        }, */}
        {/* grid grid-cols-1  w-[19%]  overflow-y-auto scroll-smooth  max-h-[700px] */}
            {toggleSideBar && (
                <div className="main-container w-[20%] overflow-y-auto h-[700px] transition-all duration-100   xs:hidden ">
                <div className="all-side-bar-items w-full grid grid-cols-1 md:grid md:w-64 ">
                    <div onClick={() => navigate('/')} className='item flex py-3 items-center space-x-3 font-mono hover:bg-slate-100 hover:text-black hover:rounded-lg transition-all duration-100'>
                        <span><IoMdHome /></span>
                        <span>Home</span>
                    </div>
                    {

                        items1.map(item => (
                            <>
                                <div className="item flex py-3 items-center space-x-3 font-mono hover:bg-slate-100 hover:text-black hover:rounded-lg transition-all duration-100">
                                    <span>{item.icon}</span>
                                    <span>{item.text}</span>
                                </div>
                            </>
                        ))
                    }

                    <hr />
                    <br />

                    <div className="you-container flex items-center space-x-3">
                        <p className=''>You</p>
                        <PiGreaterThan className='text-sm mt-1' />
                    </div>

                    {
                        items2.map(item => (
                            <>
                                <div className="item flex py-3 items-center space-x-3  font-mono hover:bg-slate-100 hover:text-black hover:rounded-lg transition-all duration-100">
                                    <span>{item.icon}</span>
                                    <span>{item.text}</span>
                                </div>
                            </>
                        ))
                    }

                    <hr />
                    <br />

                    <div className="third-part">
                        <b>Explore</b>
                    </div>


                    {
                        items3.map(item => (
                            <>
                                <div className="item flex py-3 items-center space-x-3 hover:text-black  font-mono hover:bg-slate-100 hover:rounded-lg transition-all duration-100">
                                    <span>{item.icon}</span>
                                    <span>{item.text}</span>
                                </div>
                            </>
                        ))
                    }
                    <hr />
                    <br />

                    <div className="fouth-part">
                        <b>More from Youtube</b>
                    </div>



                    {
                        items4.map(item => (
                            <>
                                <div className="item flex py-3 items-center space-x-3  font-mono hover:bg-slate-100 hover:rounded-lg transition-all duration-100">
                                    <span className='text-red-500'>{item.icon}</span>
                                    <span>{item.text}</span>
                                </div>
                            </>
                        ))
                    }

                    <hr />
                    <br />

                    {
                        items5.map(item => (
                            <>
                                <div className="item flex py-3 items-center space-x-3  font-mono hover:bg-slate-100 hover:rounded-lg transition-all duration-100">
                                    <span >{item.icon}</span>
                                    <span>{item.text}</span>
                                </div>
                            </>
                        ))
                    }


                    <hr />
                    <br />

                    <div className="text transition-all duration-100">
                        <p className='font-light text-xs space-x-3 flex justify-between'><span>About</span> <span>Press</span> <span>Copyright</span></p>


                        <p className='font-light text-xs space-x-3 flex justify-between'><span>Contact us</span> <span>Creators</span> <span>Advertise</span></p>


                        <p className='font-light text-xs space-x-3 flex justify-start'><span>Developers</span> </p>


                        <p className='font-light mt-2 text-xs space-x-3  flex justify-start'><span>Terms</span> <span>PrivacyPolicy</span> <span>&SafetyHow</span>  </p>

                        {/* <p className='font-light text-xs space-x-3  flex justify-start'><span>& YouTube worksTest </span>  <span>& new features</span></p> */}

                        <p className='font-light mt-2 text-xs space-x-3  flex justify-start' ><span>How YouTube worksTest new features</span></p>

                        <p className='font-light mt-5'>© 2024 Google LLC</p>
                    </div>
                </div>
            </div>
            )}

            {!toggleSideBar && (
                ""
            )}


        </>
    )
}

export default SideBar
