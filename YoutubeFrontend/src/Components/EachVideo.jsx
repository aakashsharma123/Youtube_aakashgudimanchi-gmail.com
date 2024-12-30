import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IoPersonCircleOutline } from "react-icons/io5";
import { CiBellOn } from "react-icons/ci";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { MdDownload } from "react-icons/md";
import Comments from './Comments'; // Assuming this component exists
// Removed unused axios import

const EachVideo = () => {
    const { id } = useParams();
    const [youtubeData, setYoutubeData] = useState([]);
    const [filteredData, setFilteredData] = useState(null);
    const [Token, setToken] = useState(localStorage.getItem("token"));
    const [Email, setEmail] = useState(localStorage.getItem('email'));
    
    // Function to fetch video data
    const eachVideoFetch = async () => {
        try {
            const url = 'http://localhost:3000/';
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    'Authorization': Token,
                }
            });

            if (response.ok) {
                const result = await response.json();
                setYoutubeData(result);
                console.log("Fetched video data: ", result);
            } else {
                console.log("Failed to fetch video data: ", response.statusText);
            }
        } catch (err) {
            console.log('something went wrong', err);
        }
    };

    // Fetch video data on component mount
    useEffect(() => {
        eachVideoFetch();
    }, []);

    // Filter the video data based on the id
    useEffect(() => {
        const filterDetails = youtubeData.filter(each => each._id === id);
        setFilteredData(filterDetails[0]);
        console.log("Filtered video data: ", filterDetails[0]);
    }, [youtubeData, id]);

    return (
        <>
            <div className='m-4 w-[100%] xs:h-screen xs:scale-x-50 xs:scale-50 xs:-translate-x-14 xs:-translate-y-40'>
                <div className='ml-4 mt-4 xs:w-[100%]'>
                    <iframe
                        className='rounded-xl'
                        src={filteredData.video_url}
                        allowFullScreen
                        height={400}
                        width={800}
                    />
                </div>
                <p className='px-5 text-2xl'>{filteredData.description}</p>

                <div className='p-4 flex items-center justify-between'>
                    <div className='flex items-center'>
                        <IoPersonCircleOutline className='size-8' />
                        <span className='p-2'>{filteredData.owner}</span>
                        <button className='flex text-black items-center px-4 ml-2 text-white bg-[#272727] rounded-lg py-2 hover:bg-red-500 hover:font-medium hover:text-white transition-all duration-100'>
                            <CiBellOn className='text-xl mr-1' /> Subscribe
                        </button>
                    </div>

                    <div className='px-5 p-2 flex gap-9'>
                        <div className='flex gap-3 items-center bg-[#272727] px-5 py-2 rounded-lg'>
                            <button className='text-xl hover:text-green-400 transition-all duration-150'><FaThumbsUp /></button>
                            <p className='border-l-4 h-full border-gray-600'></p>
                            <button className='text-xl hover:text-red-400 transition-all duration-150'><FaThumbsDown /></button>
                        </div>

                        <button className='hover:bg-red-500 bg-[#272727] rounded transition-all duration-150 px-5 py-2 flex items-center gap-3'>
                            <CiShare2 /> Share
                        </button>

                        <button className='hover:bg-red-500 bg-[#272727] rounded transition-all duration-150 px-5 py-2 flex items-center gap-3'>
                            <MdDownload /> Download
                        </button>

                        <div className='border rounded-full px-3'>...</div>
                    </div>
                </div>

                <hr className='ml-4' />

                <div className="container">
                    <div className="first-container bg-[#292929] border-none rounded-lg p-5 mt-2 ml-2">
                        <span className='text-xl'>{filteredData.views}</span>
                        <span className='text-xl ml-2'>{filteredData.likes}</span>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis pariatur nisi facilis eaque sequi fuga tempore delectus temporibus eum ducimus quam itaque rerum autem, ullam velit minus tempora. Error, ipsam?...More
                        </p>
                    </div>
                    {Token && (
                        <div className="secound-container h-96 bg-[#292929] border-none rounded-lg m-7">
                            
                            <div className='comments'>
                                    <Comments />
                            </div>
                        </div>
                    )}

                    {!Token && (
                        <div className="secound-container h-96 bg-[#292929] border-none rounded-lg m-7 xs:translate-x-2">
                            <div className="mx-20 flex mt-2 input-text bg-[#292929]">
                                <p className='mx-auto text-2xl'>Please <span className='text-green-500 underline'>login</span> in order to add comments</p>
                            </div>
                            <div className='comments'>
                                <div>
                                    
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default EachVideo;