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
    const [toggleButton, setToggleButton] = useState(false);
    const { toggleSideBar } = useOutletContext();

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
                <div className="main-container w-64 flex-shrink-0 overflow-y-auto h-[calc(100vh-4rem)] transition-all duration-100 xs:hidden border-r border-[#303030] bg-[#0f0f0f]">
                    <div className="all-side-bar-items w-full flex flex-col p-3">
                        <div onClick={() => navigate('/')} className='item flex py-2 px-3 items-center space-x-4 hover:bg-[#272727] rounded-lg cursor-pointer transition-all duration-100'>
                            <span className='text-xl'><IoMdHome /></span>
                            <span className='text-sm font-normal'>Home</span>
                        </div>
                        {

                            items1.map(item => (
                                <div key={item.id} className="item flex py-2 px-3 items-center space-x-4 hover:bg-[#272727] rounded-lg cursor-pointer transition-all duration-100">
                                    <span className='text-xl'>{item.icon}</span>
                                    <span className='text-sm font-normal'>{item.text}</span>
                                </div>
                            ))
                        }

                        <hr className='my-3 border-[#303030]' />

                        <div className="you-container flex items-center space-x-2 px-3 mb-2 hover:bg-[#272727] py-2 rounded-lg cursor-pointer">
                            <p className='font-medium'>You</p>
                            <PiGreaterThan className='text-xs' />
                        </div>

                        {
                            items2.map(item => (
                                <div key={item.id} className="item flex py-2 px-3 items-center space-x-4 hover:bg-[#272727] rounded-lg cursor-pointer transition-all duration-100">
                                    <span className='text-xl'>{item.icon}</span>
                                    <span className='text-sm font-normal'>{item.text}</span>
                                </div>
                            ))
                        }

                        <hr className='my-3 border-[#303030]' />

                        <div className="third-part px-3 mb-2">
                            <b className='font-medium'>Explore</b>
                        </div>


                        {
                            items3.map(item => (
                                <div key={item.id} className="item flex py-2 px-3 items-center space-x-4 hover:bg-[#272727] rounded-lg cursor-pointer transition-all duration-100">
                                    <span className='text-xl'>{item.icon}</span>
                                    <span className='text-sm font-normal'>{item.text}</span>
                                </div>
                            ))
                        }
                        <hr className='my-3 border-[#303030]' />

                        <div className="fouth-part px-3 mb-2">
                            <b className='font-medium'>More from Youtube</b>
                        </div>



                        {
                            items4.map(item => (
                                <div key={item.id} className="item flex py-2 px-3 items-center space-x-4 hover:bg-[#272727] rounded-lg cursor-pointer transition-all duration-100">
                                    <span className='text-xl text-red-500'>{item.icon}</span>
                                    <span className='text-sm font-normal'>{item.text}</span>
                                </div>
                            ))
                        }

                        <hr className='my-3 border-[#303030]' />

                        {
                            items5.map(item => (
                                <div key={item.id} className="item flex py-2 px-3 items-center space-x-4 hover:bg-[#272727] rounded-lg cursor-pointer transition-all duration-100">
                                    <span className='text-xl'>{item.icon}</span>
                                    <span className='text-sm font-normal'>{item.text}</span>
                                </div>
                            ))
                        }


                        <hr className='my-3 border-[#303030]' />

                        <div className="text transition-all duration-100 px-3 pb-4">
                            <div className='flex flex-wrap gap-2 mb-2'>
                                <span className='text-[10px] font-medium text-[#aaa] cursor-pointer'>About</span>
                                <span className='text-[10px] font-medium text-[#aaa] cursor-pointer'>Press</span>
                                <span className='text-[10px] font-medium text-[#aaa] cursor-pointer'>Copyright</span>
                                <span className='text-[10px] font-medium text-[#aaa] cursor-pointer'>Contact us</span>
                                <span className='text-[10px] font-medium text-[#aaa] cursor-pointer'>Creators</span>
                                <span className='text-[10px] font-medium text-[#aaa] cursor-pointer'>Advertise</span>
                                <span className='text-[10px] font-medium text-[#aaa] cursor-pointer'>Developers</span>
                            </div>
                            <div className='flex flex-wrap gap-2 mb-4'>
                                <span className='text-[10px] font-medium text-[#aaa] cursor-pointer'>Terms</span>
                                <span className='text-[10px] font-medium text-[#aaa] cursor-pointer'>Privacy</span>
                                <span className='text-[10px] font-medium text-[#aaa] cursor-pointer'>Policy & Safety</span>
                                <span className='text-[10px] font-medium text-[#aaa] cursor-pointer'>How YouTube works</span>
                                <span className='text-[10px] font-medium text-[#aaa] cursor-pointer'>Test new features</span>
                            </div>

                            <p className='text-[10px] text-[#717171]'>© 2024 Google LLC</p>
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
