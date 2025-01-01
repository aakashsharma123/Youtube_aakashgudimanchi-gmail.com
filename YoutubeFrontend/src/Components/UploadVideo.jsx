import React, { useState } from 'react';
import '../Styles/UploadVideo.css';
import axios from 'axios';

// clodynary upload_presets name is youtube-clone;
// endpoint for sending it to cloudynary "https://api.cloudinary.com/v1_1/cloudName/image/upload"
// my cloudynary name is "dwao9a3pv"

const UploadVideo = () => {

    return (
        <div>
            <div className="video-upload-container">
                <div className="upload-now">
                    <form className=''>
                        <div className='flex items-center justify-center gap-4 text-2xl'>
                            <img src='youtube_logo_icon_168737.ico' alt="" width={50} height={50} />
                            <span className='font-bold'>Upload Video</span>
                        </div>

                        <div className='flex flex-col gap-5 p-5 justify-start'>
                            <input type="text" className='px-5 py-4 bg-[#292929] border border-[#292929]' placeholder='Title of the video' />
                            <input type="text" className='px-5 py-4 bg-[#292929] border border-[#292929]' placeholder='Description' />
                            <input type="text" className='px-5 py-4 bg-[#292929] border border-[#292929]' placeholder='Category' />
                        </div>

                        <div className='block py-3'>
                            <div className='flex justify-center items-center gap-3'>
                                <span className='font-bold text-xl'>Image</span>
                                <input type="file" className='' />
                            </div>
                        </div>

                        <div className='block mt-5 py-3'>
                            <div className='flex justify-center items-center gap-3'>
                                <span className='font-bold text-xl'>Video</span>
                                <input accept='video/mp4 , video/webm , video/*' type="file" className='' />
                            </div>
                        </div>

                        <div className='flex justify-center mt-2 gap-5'>
                            <button type="button" className='px-5 py-2 border-2 border-white rounded-lg hover:bg-[#292929]'>Upload</button>
                            <button type="button" className='px-5 py-2 border-2 border-white rounded-lg hover:bg-[#292929]'>Home</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UploadVideo;