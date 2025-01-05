import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IoPersonCircleOutline } from "react-icons/io5";
import { CiBellOn } from "react-icons/ci";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { MdDownload } from "react-icons/md";
import Comments from './Comments';
// import '../Styles/EachVideo.css';

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
    }, [youtubeData]);

    // Filter the video data based on the id
    useEffect(() => {
        const filterDetails = youtubeData.filter(each => each._id === id);
        setFilteredData(filterDetails[0]);
        
    }, [youtubeData, id]);

    if (!filteredData) {
        return <h1>Loading...</h1>;
    }

    return (
        <>
            <main className='m-4 max-w-full'>
                <section className='ml-4 mt-4'>
                    <iframe
                        className='rounded-xl w-full aspect-video'
                        src={filteredData.video_url}
                        allowFullScreen
                    />
                </section>
                <p className='px-5 text-base xs:text-lg w-full'>{filteredData.description}</p>

                <section className='p-4 flex flex-col items-start justify-between xs:flex xs:justify-between xs:items-center'>
                    <div className='flex items-center mb-4'>
                        <IoPersonCircleOutline className='text-4xl' />
                        <div className='p-2 xs:text-sm xs:w-full'>{filteredData.owner}</div>
                        <button className='flex text-black items-center px-4 ml-2 text-white bg-[#272727] rounded-lg py-2 hover:bg-red-500 hover:font-medium hover:text-white transition-all duration-100 xs:text-sm'>
                            <CiBellOn className='text-xl mr-1' /> Subscribe
                        </button>
                    </div>

                    <div className='flex flex-wrap gap-4 xs:flex xs:justify-between'>
                        <div className='flex gap-3 items-center bg-[#272727] px-5 py-2 rounded-lg'>
                            <button className='text-xl hover:text-green-400 transition-all duration-150 xs:text-sm'><FaThumbsUp /></button>
                            <p className='border-l-2 h-full border-gray-600 xs:text-sm'></p>
                            <button className='text-xl hover:text-red-400 transition-all duration-150 xs:text-sm'><FaThumbsDown /></button>
                        </div>

                        <button className='hover:bg-red-500 bg-[#272727] rounded transition-all duration-150 px-5 py-2 flex items-center gap-3'>
                            <CiShare2 /> Share
                        </button>

                        <button className='hover:bg-red-500 bg-[#272727] rounded transition-all duration-150 px-5 py-2 flex items-center gap-3 xs:text-sm'>
                            <MdDownload /> Download
                        </button>

                        <div className='border rounded-full px-3 xs:mr-8'>...</div>
                    </div>
                </section>

                <hr className='ml-4' />

                <section className="container xs:w-[320px] xs:ml-2 flex flex-col justify-between items-start">
                    <article className="first-container bg-[#292929] border-none rounded-lg p-5 mt-2 ml-2 w-full xs:w-[330px] xs:ml-4 ">
                        <span className='text-xl'>{filteredData.views} views</span>
                        <span className='text-xl ml-2'>{filteredData.likes} likes</span>
                        <p className='text-sm xs:text-sm w-full xs:max-w-[100%] '>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis pariatur nisi facilis eaque sequi fuga tempore delectus temporibus eum ducimus quam itaque rerum autem, ullam velit minus tempora. Error, ipsam?...More
                        </p>
                    </article>
                    {Token ? (
                        <article className="secound-container bg-[#292929] border-none rounded-lg m-2 p-5 w-full xs:w-[310px] xs:ml-5">  
                            <div className='comments w-full xs:w-full '>
                                <Comments />
                            </div>
                        </article>
                    ) : (
                        <article className="secound-container bg-[#292929] border-none rounded-lg m-7 p-5 w-full xs:w-full">
                            <div className="flex justify-center">
                                <p className='text-2xl'>Please <span className='text-green-500 underline'>login</span> to add comments and view Comments</p>
                            </div>
                        </article>
                    )}
                </section>
            </main>
        </>
    );
};

export default EachVideo;