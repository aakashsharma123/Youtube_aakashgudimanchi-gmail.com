import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IoPersonCircleOutline } from "react-icons/io5";
import { CiBellOn } from "react-icons/ci";
import { FaThumbsUp } from "react-icons/fa";
import { FaThumbsDown } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { MdDownload } from "react-icons/md";
import axios from 'axios';
import SuggestedVideos from './SuggestedVideos';

const EachVideo = () => {

    const { id } = useParams();
    const [youtubeData, setYoutubeData] = useState([]);
    const [filteredData, setFilteredData] = useState(null);

    console.log(youtubeData);
    

    useEffect(() => {
        axios.get('http://localhost:3000/')
            .then((data) => {
                setYoutubeData(data.data);
            }).catch((err) => {
                console.log('something went wrong frontend and backend');
            })
    }, [])

    useEffect(() => {
        let filterDetails = youtubeData.filter(each => each._id === id);
        setFilteredData(filterDetails[0]);
    }, [youtubeData, id]);


    if (!filteredData) {
        return <h1>the video is being fetched</h1>
    }

    console.log(filteredData);
    



    return (
        <>
            <div className=' m-3 w-[1020px] '>

                <div className='ml-4 mt-4 '>
                    <iframe
                        className='rounded-xl'
                        src={filteredData.video_url}
                        allowFullScreen lazy
                        height={500}
                        width={1000}
                    />
                </div>

                <p className='px-5 text-2xl'>{filteredData.description}</p>

                <div className='p-4 flex items-center justify-between'>
                    <div className='flex items-center'>
                        <IoPersonCircleOutline className=' size-8' />
                        <span className='p-2'>{filteredData.owner}</span>
                        <button className='flex text-black items-center px-4 ml-2 text-white bg-[#272727] rounded-lg py-2 hover:bg-red-500 hover:font-medium hover:text-white transition-all duration-100  '> <CiBellOn className='text-xl mr-1' /> Subcribe</button>
                    </div>

                    <div className='px-5 p-2 flex gap-9'>
                        <div className='flex gap-3 items-center bg-[#272727]  px-5 py-2 rounded-lg '>
                            <button className='text-xl hover:text-green-400 transition-all duration-150'><FaThumbsUp /></button>
                            <p className='border-l-4 h-full border-gray-600'></p>
                            <button className='text-xl hover:text-red-400 transition-all duration-150' ><FaThumbsDown /></button>
                        </div>


                        <button className='hover:bg-red-500 bg-[#272727]  rounded transition-all duration-150 px-5 py-2 flex items-center gap-3'><CiShare2 />share</button>

                        <div>
                            <button className='hover:bg-red-500 bg-[#272727]  rounded transition-all duration-150 px-5 py-2 flex items-center gap-3'><MdDownload /> Download</button>
                        </div>

                        <div className='border rounded-full px-3'>
                            ...
                        </div>
                    </div>
                </div >
                <hr className='ml-4 ' />

                <div className="container">

                    <div className="first-container bg-[#292929] border-none rounded-lg p-5 mt-2 ml-2 ">
                        <span className='text-xl'>{filteredData.views}</span>
                        <span className='text-xl ml-2'>{filteredData.time}</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis pariatur nisi facilis eaque sequi fuga tempore delectus temporibus eum ducimus quam itaque rerum autem, ullam velit minus tempora. Error, ipsam?...More</p>
                    </div>

                    <div className="secound-container border-2 border-black m-7">
                        <div className="input-text bg-[#292929]">
                            <input type="text" required />
                            <button>Comment</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EachVideo
