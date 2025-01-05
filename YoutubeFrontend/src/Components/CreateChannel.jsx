import React, { useState } from 'react';
import '../Styles/createchannel.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ErrorMessage, successMessage } from '../ErrorHandle/HandleResponse.js';
import { ToastContainer } from 'react-toastify';

const CreateChannel = () => {
    const [id, setId] = useState(localStorage.getItem("id"));
    const [Token, setToken] = useState(localStorage.getItem("token"));
    const [channelData, setChannelData] = useState({
        channelName: "",
        channelLogo: "",
        channelBanner: "",
        channelDescription: ""
    });

    const navigate = useNavigate();
    
    const handleText = (e) => {
        const { name, value } = e.target;
        setChannelData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };
    
    const channelname = channelData.channelName


    const handleChannel = async (e) => {
        e.preventDefault();

        try {
            const { channelName, channelLogo, channelBanner, channelDescription } = channelData;
            const response = await axios.post('http://localhost:3000/channel', {
                channelName,
                channelLogo,
                channelBanner,
                channelDescription
            }, {
                headers: {
                    "Authorization": Token
                }
            });

            if (response.status === 201) {
                localStorage.setItem("channelrender" , true);
                successMessage("Channel created successfully");
                navigate('/viewProfile');
            }

        } catch (err) {
            ErrorMessage("Only one user can create one channel");
            console.log(err);
        }
    };

    return (
        <div className="create-upload-container w-full h-screen ">
            <div className="create-now h-full w-full grid grid-cols-1 place-items-center xs:scale-50 sm:scale-75 md:scale-100 lg:scale-100 xl:scale-100">
                <form onSubmit={handleChannel} className='h-full w-full'>
                    <div className='flex items-center justify-center gap-4 text-xl'>
                        <img onClick={() => navigate('/')} src='youtube_logo_icon_168737.ico' alt="" width={50} height={50} />
                        <span className='font-bold'>Create Channel</span>
                    </div>

                    <div className='flex flex-col gap-5 p-5 justify-start '>
                        <label htmlFor="channelName">Channel Name</label>
                        <input onChange={handleText} type="text" id='channelName' className='px-5 py-4 bg-[#292929] border border-[#292929] w-full' placeholder='Channel Name' name='channelName' />
                        <label htmlFor="channelLogo">Channel Logo</label>
                        <input onChange={handleText} type="text" id='channelLogo' className='px-5 py-4 bg-[#292929] border border-[#292929] w-full' placeholder='Channel Logo' name='channelLogo' />
                        <label htmlFor="">Channel Banner</label>
                        <input onChange={handleText} type="text" className='px-5 py-4 bg-[#292929] border border-[#292929] w-full' placeholder='Channel Banner' name='channelBanner' />
                        <label htmlFor="">Channel Description</label>
                        <input onChange={handleText} type="text" className='px-5 py-4 bg-[#292929] border border-[#292929] w-full' placeholder='Channel Description' name='channelDescription' />
                    </div>

                    <div className='bg-white text-black flex justify-center p-3 m-5 hover:bg-gray-500 hover:text-white hover:font-bold font-bold '>
                        <button type='submit'>Create Channel</button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default CreateChannel;
